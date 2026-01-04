import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-hero-garden.jpg"
          alt="Professional urban agriculture services"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Comprehensive Urban Agriculture Solutions
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          From garden installation to ongoing training and support, we provide everything you need to succeed in urban
          farming
        </p>
        <Button asChild size="lg">
          <Link href="/book-consultation">Get Started Today</Link>
        </Button>
      </div>
    </section>
  )
}
