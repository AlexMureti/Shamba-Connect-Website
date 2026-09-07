import { PRODUCTS, type Product } from "./products"
import { getAllPosts } from "./posts"

/**
 * A deterministic answer from the catalogue, for when NVIDIA_API_KEY is absent.
 *
 * Alex opened the live site, asked "Do you sell seedlings?" and got "The
 * assistant is not switched on yet." On a shop that is taking orders, a widget
 * that invites a question and then refuses to answer it is worse than no widget
 * at all -- and "do you sell seedlings" is answerable from content/products.json
 * without a model anywhere near it.
 *
 * So this reads the same catalogue the shop renders. It matches words, it does
 * not understand them: every sentence it returns is assembled from a product
 * name, a price and a description that are already on the page. When it cannot
 * match, it says so and hands over to WhatsApp rather than guessing.
 */

const WHATSAPP = "+254 725 684 352"

const SERVICES = [
  "Kitchen Garden Installation",
  "Landscape-cum-Foodscape Design",
  "Seedling Propagation",
  "Rabbit Unit Setup & Management",
  "Training & Consultancy",
  "Retail of Inputs",
]

/** Lowercase, split on non-letters, drop a trailing plural s, drop stopwords. */
const STOP = new Set([
  "a","an","the","is","are","do","does","did","you","your","i","we","me","my","of","for","to",
  "and","or","in","on","at","it","this","that","have","has","can","could","would","please",
  "hi","hello","hey","there","much","many","how","what","which","any","get","got","want",
  "sell","selling","buy","buying","need","looking","tell","about","with","from","us",
])

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length > 1 && !STOP.has(w))
}

/**
 * Prefix match rather than stemming.
 *
 * Chopping a trailing "s" turned "hutches" into "hutche", which then matched
 * nothing — and any rule special-cased to fix "hutches" breaks "services".
 * Comparing prefixes handles hutch/hutches, seedling/seedlings and
 * service/services without a stemmer and without a list of exceptions.
 */
function match(a: string, b: string): boolean {
  if (a === b) return true
  const [short, long] = a.length < b.length ? [a, b] : [b, a]
  return short.length >= 4 && long.startsWith(short)
}

function has(t: string[], ...words: string[]): boolean {
  return words.some((w) => t.includes(w))
}

const ksh = (n: number) => `KSh ${n.toLocaleString("en-KE")}`

function line(p: Product): string {
  return `- **${p.name}** — ${ksh(p.price)}. ${p.description}`
}

/** How well a product matches the question. Name and category weigh most. */
function score(p: Product, t: string[]): number {
  const name = tokens(p.name)
  const cat = tokens(p.category)
  const desc = tokens(p.description)
  let s = 0
  for (const w of t) {
    if (name.some((n) => match(n, w))) s += 3
    else if (cat.some((c) => match(c, w))) s += 3
    else if (desc.some((d) => match(d, w))) s += 1
  }
  return s
}

export function catalogueAnswer(question: string): string | null {
  const t = tokens(question)
  if (t.length === 0) return null

  // Contact. Asked often enough to be worth answering exactly.
  if (has(t, "phone", "number", "whatsapp", "call", "contact", "email", "reach", "talk", "speak")) {
    return (
      `Call or WhatsApp Mercy on **${WHATSAPP}**, or email shambaconnect@gmail.com. ` +
      `You can also book a visit at /book-consultation.`
    )
  }

  // Things the catalogue genuinely does not record. Saying so is the answer.
  if (has(t, "deliver", "delivery", "shipping", "ship", "courier")) {
    return (
      `I don't have delivery details written down, so I'd rather not guess at them. ` +
      `WhatsApp Mercy on **${WHATSAPP}** and she'll tell you what she can do for your area.`
    )
  }
  if (has(t, "open", "hour", "time", "closing", "weekend", "sunday", "saturday")) {
    return (
      `Opening hours aren't listed here. WhatsApp Mercy on **${WHATSAPP}** — she answers directly.`
    )
  }
  if (has(t, "stock", "available", "availability")) {
    return (
      `I can't see stock levels. WhatsApp Mercy on **${WHATSAPP}** to check what's ready now.`
    )
  }

  // Services.
  if (has(t, "service", "install", "installation", "design", "training", "consultancy", "consultation", "setup")) {
    return (
      `Shamba Connect does:\n` +
      SERVICES.map((s) => `- ${s}`).join("\n") +
      `\n\nBook a consultation at /book-consultation, or WhatsApp **${WHATSAPP}**.`
    )
  }

  // Products — the common case.
  const ranked = PRODUCTS.map((p) => ({ p, s: score(p, t) }))
    .filter((x) => x.s >= 3)
    .sort((a, b) => b.s - a.s)

  if (ranked.length > 0) {
    // Keep only what is close to the best match. "rabbit hutch" scores 6 on the
    // two hutches and 3 on everything else in a rabbit category, and answering
    // a question about hutches with rabbit meat and breeding pairs is noise.
    const best = ranked[0].s
    const top = ranked
      .filter((x) => x.s >= Math.max(3, best - 2))
      .slice(0, 5)
      .map((x) => x.p)
    const head =
      top.length === 1
        ? `Yes — here it is:`
        : `Yes:`
    return `${head}\n${top.map(line).join("\n")}\n\nOrder at /shop, or WhatsApp **${WHATSAPP}**.`
  }

  // Guides, when the question sounds like a how-to.
  if (has(t, "guide", "article", "read", "start", "learn", "grow", "keep", "beginner")) {
    const posts = getAllPosts().slice(0, 3)
    return (
      `We've written guides on this:\n` +
      posts.map((p) => `- **${p.title}** (${p.readTime}) → /blog/${p.slug}`).join("\n") +
      `\n\nFor anything specific, WhatsApp Mercy on **${WHATSAPP}**.`
    )
  }

  return null
}

/** Shown when nothing matched, so the panel never answers with nothing. */
export function catalogueFallback(): string {
  const cats = [...new Set(PRODUCTS.map((p) => p.category))]
  return (
    `I couldn't match that to anything in the price list. I can help with:\n` +
    cats.map((c) => `- ${c}`).join("\n") +
    `\n\nOr prices, services and our guides. For anything else, WhatsApp Mercy on **${WHATSAPP}**.`
  )
}
