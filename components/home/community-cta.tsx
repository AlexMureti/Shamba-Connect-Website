import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * The closing ask, and the page's second anchor.
 *
 * It used to sit on bg-primary/5 — a five-percent green tint, which on a
 * #faf9f6 page is indistinguishable from the nine sections above it. The last
 * thing a visitor sees before the footer should not be the same colour as
 * everything they have already scrolled past.
 *
 * The empty <div className="flex justify-center mb-5" /> that held the removed
 * eyebrow went with it; it was reserving vertical space for nothing.
 */
export function CommunityCTA() {
  return (
    <section className="section-y bg-ink text-ink-foreground">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-headline mb-5 text-ink-foreground">Grow Your Own Food &mdash; Ready?</h2>
        <p className="measure mx-auto mb-8 text-lg leading-relaxed text-ink-muted">
          Whether you&rsquo;re new to urban farming or looking to expand your operations, we&rsquo;re
          here to guide you every step of the way.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-white shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary/90"
          >
            <Link href="/book-consultation">
              Book a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
