"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { MessageCircleQuestion, X, Send, Phone } from "lucide-react"

const WHATSAPP = "https://wa.me/254725684352"
const NUDGE_KEY = "sc-assistant-nudge-dismissed"

/** Openers that name what we actually sell, so the panel earns its place. */
const STARTERS = [
  "What does a kitchen garden cost to install?",
  "How do I start keeping rabbits?",
  "What can I grow on a small Nairobi balcony?",
  "Do you sell seedlings?",
]

const FOCUSABLE = 'button, input, a[href], [tabindex]:not([tabindex="-1"])'

type Msg = { role: "user" | "assistant"; content: string }

/**
 * The model answers in light markdown. Rendered as plain text it reads
 * "**Rabbit Farming Starter Kit (KSh 35,000)**", asterisks and all, which is
 * how a chat widget announces that nobody looked at it.
 *
 * Only the three things the model actually produces are handled: bold, list
 * dashes, and the site paths it is told to link to. Those become real links, so
 * an answer that mentions /shop is one tap from the shop.
 */
function ChatText({ text }: { text: string }) {
  const lines = text.split("\n")
  return (
    <>
      {lines.map((line, li) => {
        const bullet = /^\s*[-*]\s+/.test(line)
        const body = bullet ? line.replace(/^\s*[-*]\s+/, "") : line
        return (
          <span key={li} className={bullet ? "block pl-3 -indent-3" : "block"}>
            {bullet && <span aria-hidden="true">— </span>}
            {body
              .split(/(\*\*[^*]+\*\*|\/(?:shop|blog|services|about|contact|book-consultation)(?:\/[a-z0-9-]+)?)/g)
              .filter(Boolean)
              .map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={i} className="font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  )
                }
                if (part.startsWith("/")) {
                  return (
                    <a key={i} href={part} className="font-medium underline underline-offset-2">
                      {part}
                    </a>
                  )
                }
                return <span key={i}>{part}</span>
              })}
          </span>
        )
      })}
    </>
  )
}

export function ShambaAssistant() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const [offline, setOffline] = useState(false)
  // "catalogue" means the server answered from the price list because this
  // deployment has no NVIDIA_API_KEY. The panel says so rather than letting a
  // lookup pass for a conversation.
  const [mode, setMode] = useState<"live" | "catalogue">("live")
  const [nudge, setNudge] = useState(false)

  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  /**
   * The nudge waits for intent rather than firing on a timer. A visitor who has
   * read 55% of a page is considering something; one who arrived four seconds
   * ago is still deciding whether to stay, and interrupting them is how a chat
   * widget becomes the thing people close before they read anything.
   */
  useEffect(() => {
    if (open) return
    try {
      if (localStorage.getItem(NUDGE_KEY)) return
    } catch {
      return // storage blocked: stay quiet rather than nudge on every visit
    }
    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight
      if (scrollable > 400 && window.scrollY / scrollable > 0.55) {
        setNudge(true)
        window.removeEventListener("scroll", onScroll)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [open])

  const dismissNudge = useCallback(() => {
    setNudge(false)
    try {
      localStorage.setItem(NUDGE_KEY, "1")
    } catch {
      /* storage blocked; it simply reappears next visit */
    }
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [msgs])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  // Escape closes; focus stays inside the panel while it is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        return
      }
      if (e.key !== "Tab" || !panelRef.current) return
      const f = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  const send = useCallback(
    async (text: string) => {
      const question = text.trim()
      if (!question || busy) return

      const next: Msg[] = [...msgs, { role: "user", content: question }]
      // The empty assistant message is the typing indicator. It goes in now,
      // not after the fetch resolves -- NVIDIA does not send response headers
      // until it begins generating, so waiting for them left the panel blank
      // for the first two seconds of every question.
      setMsgs([...next, { role: "assistant", content: "" }])
      setInput("")
      setBusy(true)

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next }),
        })

        if (res.status === 503) {
          setOffline(true)
          setMsgs(next) // drop the typing indicator
          return
        }
        if (!res.ok || !res.body) throw new Error(String(res.status))

        setMode(res.headers.get("X-Assistant-Mode") === "catalogue" ? "catalogue" : "live")

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let acc = ""
        for (;;) {
          const { done, value } = await reader.read()
          if (done) break
          acc += decoder.decode(value, { stream: true })
          setMsgs([...next, { role: "assistant", content: acc }])
        }
        if (!acc.trim()) throw new Error("empty")
      } catch {
        setMsgs([
          ...next,
          {
            role: "assistant",
            content:
              "Sorry — I could not answer that just now. WhatsApp us on +254 725 684 352 and a person will reply.",
          },
        ])
      } finally {
        setBusy(false)
      }
    },
    [msgs, busy],
  )

  return (
    <>
      {nudge && !open && (
        <div className="fixed bottom-60 right-4 z-50 max-w-[16rem] rounded-2xl rounded-br-sm border border-border bg-card p-4 shadow-xl md:bottom-40 md:right-6">
          <button
            onClick={dismissNudge}
            aria-label="Dismiss"
            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
          >
            <X size={14} />
          </button>
          <p className="pr-4 text-sm leading-snug text-foreground">
            Not sure what your space can grow? Ask &mdash; it takes a minute.
          </p>
          <button
            onClick={() => {
              dismissNudge()
              setOpen(true)
            }}
            className="mt-2 text-sm font-semibold text-secondary hover:underline"
          >
            Ask a question
          </button>
        </div>
      )}

      <button
        onClick={() => {
          dismissNudge()
          setOpen((v) => !v)
        }}
        aria-label={open ? "Close the assistant" : "Ask Shamba Connect a question"}
        aria-expanded={open}
        className="fixed bottom-44 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:bottom-24 md:right-6"
      >
        {open ? <X size={22} /> : <MessageCircleQuestion size={22} />}
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Ask Shamba Connect"
          className="fixed inset-x-4 bottom-60 z-50 flex h-[min(28rem,calc(100dvh-17rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:inset-x-auto md:bottom-40 md:right-6 md:h-[min(32rem,calc(100dvh-13rem))] md:w-96"
        >
          <header className="border-b border-border px-5 py-4">
            <h2 className="font-semibold text-foreground">Ask Shamba Connect</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Gardens, rabbits, seedlings and what things cost.
            </p>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {msgs.length === 0 && !offline && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Try one of these:</p>
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full rounded-lg border border-border px-3 py-2 text-left text-sm text-foreground transition-colors hover:border-secondary hover:text-secondary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                <div
                  className={
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed " +
                    (m.role === "user"
                      ? "rounded-br-sm bg-secondary text-white"
                      : "rounded-bl-sm bg-muted text-foreground")
                  }
                >
                  {m.content ? (
                    <ChatText text={m.content} />
                  ) : (
                    <span className="flex gap-1 py-0.5" aria-label="Thinking">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current opacity-50" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current opacity-50 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current opacity-50 [animation-delay:300ms]" />
                    </span>
                  )}
                </div>
              </div>
            ))}

            {offline && (
              <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm">
                <p className="text-foreground">The assistant is not switched on yet.</p>
                <a
                  href={WHATSAPP}
                  className="mt-2 inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
                >
                  <Phone size={14} /> WhatsApp us instead
                </a>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 border-t border-border px-4 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={busy || offline}
              placeholder={offline ? "Unavailable" : "Ask about anything we grow…"}
              aria-label="Your question"
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={busy || offline || !input.trim()}
              aria-label="Send"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-white transition-opacity disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>

          <p className="border-t border-border px-4 py-2 text-center text-[11px] text-muted-foreground">
            {mode === "catalogue" ? "Answering from the price list." : "Answers are automated."}{" "}
            <a href={WHATSAPP} className="font-medium text-secondary hover:underline">
              Talk to us
            </a>
          </p>
        </div>
      )}
    </>
  )
}
