import { systemPrompt, LEAK_MARKERS } from "@/Shamba-Connect-Website/lib/assistant-knowledge"

/**
 * Server-side proxy to NVIDIA's OpenAI-compatible endpoint.
 *
 * The key is read from process.env here and never leaves the server -- calling
 * NVIDIA from the browser would put it in devtools on the first message, and
 * anyone could then spend Mercy's quota.
 *
 * There is no database and no session: a conversation is whatever the client
 * posts. That is deliberate. Storing visitor conversations would make this a
 * personal-data processor under the Kenyan Data Protection Act 2019, which is a
 * decision for Mercy to make with a privacy notice, not a side effect of adding
 * a chat widget.
 */

export const runtime = "edge"

const ENDPOINT = "https://integrate.api.nvidia.com/v1/chat/completions"
/**
 * Verified against GET /v1/models on 2026-09-07 with this account's key.
 *
 * The published docs list meta/llama-3.3-70b-instruct; the hosted endpoint
 * answers 410 Gone for it. Of the models the account can actually reach,
 * nemotron-3.5-lightning answered in 2.4s. Two others in the docs
 * (llama-3.1-nemotron-70b-instruct, nemotron-nano-3-30b-a3b) return 404 for
 * this account, and openai/gpt-oss-20b took 59s. Re-check with /v1/models
 * before changing this.
 */
const MODEL = process.env.NVIDIA_MODEL || "nvidia/nemotron-3.5-lightning-30b-a3b"

// Caps, so one visitor cannot run up a bill or push a 200KB prompt through.
const MAX_MESSAGES = 12
const MAX_CHARS = 1500

interface Turn {
  role: "user" | "assistant"
  content: string
}

function bad(message: string, status: number) {
  return Response.json({ error: message }, { status })
}

export async function POST(req: Request) {
  const key = process.env.NVIDIA_API_KEY
  if (!key) {
    // 503, not 500: the code is fine, the deployment is missing a variable.
    return bad("The assistant is not configured yet.", 503)
  }

  let body: { messages?: unknown }
  try {
    body = await req.json()
  } catch {
    return bad("Malformed request.", 400)
  }

  const raw = Array.isArray(body.messages) ? body.messages : null
  if (!raw || raw.length === 0) return bad("No messages.", 400)

  // Rebuild the turns from scratch rather than forwarding what was posted --
  // otherwise a caller could inject their own system message and rewrite the
  // rules in lib/assistant-knowledge.ts.
  const turns: Turn[] = []
  for (const m of raw.slice(-MAX_MESSAGES)) {
    if (typeof m !== "object" || m === null) continue
    const { role, content } = m as Record<string, unknown>
    if (typeof content !== "string" || !content.trim()) continue
    if (role !== "user" && role !== "assistant") continue
    turns.push({ role, content: content.slice(0, MAX_CHARS) })
  }
  if (turns.length === 0) return bad("No usable messages.", 400)

  let upstream: Response
  try {
    upstream = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Accept: "text/event-stream",
      },
      body: JSON.stringify({
        model: MODEL,
        // Lightning is a reasoning model. Left on, it writes its working out
        // ("Here's a thinking process: 1. Analyze User Input...") into content
        // and the visitor reads it. This switches that off; the answer arrives
        // in five times fewer tokens.
        chat_template_kwargs: { thinking: false },
        messages: [{ role: "system", content: systemPrompt() }, ...turns],
        temperature: 0.3, // low: this answers questions about prices, not creative writing
        max_tokens: 600,
        stream: true,
      }),
    })
  } catch {
    return bad("Could not reach the assistant.", 502)
  }

  if (!upstream.ok || !upstream.body) {
    // Never forward the upstream body -- it can echo request headers.
    console.error("NVIDIA upstream error", upstream.status)
    return bad("The assistant is unavailable right now.", 502)
  }

  // Unwrap the SSE frames into plain text so the client needs no parser, and
  // hold the opening of the answer back until it is known not to be a recital
  // of the system prompt.
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  const REFUSAL =
    "I am the assistant for shambaconnect.co.ke. Ask me about gardens, rabbits, " +
    "seedlings or prices, or WhatsApp Mercy on +254 725 684 352."

  // A verbatim dump starts at the first token: the opening marker
  // ("You are the assistant on shambaconnect.co.ke") is 44 characters, so 140
  // is enough to catch it while keeping the answer's first words fast. The
  // rolling window below keeps checking in case a recital starts late.
  //
  // Holding longer would be safer only in appearance -- everything in the
  // prompt except the rules is already public on /shop, /services and
  // /contact, so a late partial leak is an embarrassment, not a disclosure,
  // and it is not worth two seconds of dead air on every single answer.
  const HOLD = 140

  let sseBuffer = ""
  let held = ""
  let released = false
  let blocked = false

  const leaked = (text: string) => LEAK_MARKERS.some((m) => text.includes(m))

  const stream = new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      if (blocked) return

      sseBuffer += decoder.decode(chunk, { stream: true })
      const lines = sseBuffer.split("\n")
      sseBuffer = lines.pop() ?? "" // keep the partial line for the next chunk

      for (const line of lines) {
        if (!line.startsWith("data:")) continue
        const payload = line.slice(5).trim()
        if (!payload || payload === "[DONE]") continue

        let delta: unknown
        try {
          delta = JSON.parse(payload)?.choices?.[0]?.delta?.content
        } catch {
          continue // a frame split across chunks; the buffer will carry it
        }
        if (typeof delta !== "string" || !delta) continue

        if (released) {
          held = (held + delta).slice(-600)
          if (leaked(held)) {
            blocked = true
            controller.enqueue(encoder.encode("\n\n" + REFUSAL))
            return
          }
          controller.enqueue(encoder.encode(delta))
          continue
        }

        held += delta
        if (leaked(held)) {
          blocked = true
          controller.enqueue(encoder.encode(REFUSAL))
          return
        }
        if (held.length >= HOLD) {
          released = true
          controller.enqueue(encoder.encode(held))
        }
      }
    },

    flush(controller) {
      // Answers shorter than HOLD are still sitting in `held`.
      if (!blocked && !released && held) {
        controller.enqueue(encoder.encode(leaked(held) ? REFUSAL : held))
      }
    },
  })

  return new Response(upstream.body.pipeThrough(stream), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
