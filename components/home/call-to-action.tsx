import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative orange element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-primary-foreground text-balance">
          Ready to Start Your <span className="text-secondary">Farming Journey?</span>
        </h2>
        <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
          Book a consultation with our team today. We'll assess your space, discuss your goals, and create a customized
          plan for your urban farm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none px-8 py-6 text-lg">
            <Link href="/book-consultation">Book Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent px-8 py-6 text-lg"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
