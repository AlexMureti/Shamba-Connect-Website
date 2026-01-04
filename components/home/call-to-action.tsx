import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Your Farming Journey?</h2>
        <p className="text-lg mb-8 opacity-90 leading-relaxed">
          Book a consultation with our team today. We'll assess your space, discuss your goals, and create a customized
          plan for your urban farm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/book-consultation">Book Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
