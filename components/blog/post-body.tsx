import { Fragment, type ReactNode } from "react"

/**
 * Renders the small markdown subset the posts actually use.
 *
 * Measured across all seven posts: 40 h2, 56 paragraphs, 23 **bold**, 3 list
 * items, and zero links, images, code fences or blockquotes. That did not
 * justify a markdown dependency, and returning React elements rather than
 * dangerouslySetInnerHTML means no HTML from the content can ever execute.
 */

function inline(text: string): ReactNode[] {
  // only **bold** is supported; everything else stays literal text
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

export function PostBody({ content }: { content: string }) {
  const blocks: ReactNode[] = []
  let list: string[] = []

  const flushList = () => {
    if (!list.length) return
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="my-6 ml-5 list-disc space-y-2 text-muted-foreground">
        {list.map((item, i) => <li key={i}>{inline(item)}</li>)}
      </ul>,
    )
    list = []
  }

  for (const raw of content.split("\n")) {
    const line = raw.trim()
    if (!line) { flushList(); continue }

    const heading = line.match(/^(#{2,4})\s+(.*)$/)
    if (heading) {
      flushList()
      const level = heading[1].length
      const text = inline(heading[2])
      blocks.push(
        level === 2
          ? <h2 key={blocks.length} className="mt-12 mb-4 font-serif text-2xl md:text-3xl text-foreground">{text}</h2>
          : <h3 key={blocks.length} className="mt-8 mb-3 font-serif text-xl text-foreground">{text}</h3>,
      )
      continue
    }

    const bullet = line.match(/^[-*]\s+(.*)$/)
    if (bullet) { list.push(bullet[1]); continue }

    flushList()
    blocks.push(
      <p key={blocks.length} className="mb-5 leading-relaxed text-muted-foreground">{inline(line)}</p>,
    )
  }
  flushList()

  return <div className="max-w-[68ch]">{blocks}</div>
}
