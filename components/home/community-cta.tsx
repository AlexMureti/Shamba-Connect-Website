import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CommunityCTA() {
  return (
    <section className="section-y bg-primary/5 border-y border-primary/15">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="flex justify-center mb-5">
        </div>
        <h2 className="text-headline text-foreground mb-5">
          Grow Your Own Food &mdash; Ready?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed measure mx-auto">
          Whether you&rsquo;re new to urban farming or looking to expand your operations, we&rsquo;re here to guide you
          every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 transition-all duration-200 hover:-translate-y-0.5">
            <Link href="/book-consultation">
              Book a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
