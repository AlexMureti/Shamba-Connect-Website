import Link from "next/link"

const items: { label: string; href: string }[] = [
  { label: "Featured on Safaricom Newsroom — watch our story", href: "/#watch" },
  { label: "New: 10-Pot Vertical Garden Kit now in stock", href: "/shop" },
  { label: "Free farm consultation slots open this month", href: "/book-consultation" },
  { label: "5,000+ Kenyans trained in sustainable farming", href: "/about" },
  { label: "Fresh, hormone-free rabbit meat — order on WhatsApp", href: "/shop" },
]

export function NewsTicker() {
  return (
    <div className="relative z-40 overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="flex items-stretch">
        <div className="flex shrink-0 items-center gap-2 bg-secondary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Latest
        </div>

        <div className="marquee-pause relative flex-1 overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-primary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-primary to-transparent" />
          <div className="animate-marquee flex w-max items-center whitespace-nowrap py-2.5">
            {[...items, ...items].map((it, i) => (
              <Link
                key={i}
                href={it.href}
                className="group mx-6 inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
              >
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <span className="underline-offset-4 group-hover:underline">{it.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
