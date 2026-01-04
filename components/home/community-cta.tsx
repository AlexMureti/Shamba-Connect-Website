import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CommunityCTA() {
  return (
    <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
          Start Your Journey to Safe, Home-Grown Food
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
          Whether you're new to urban farming or looking to expand your operations, we're here to guide you every step
          of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/book-consultation">
              Book a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
