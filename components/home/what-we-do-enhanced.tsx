import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight } from "lucide-react"

export function WhatWeDoEnhanced() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl h-[400px]">
            <img
              src="/professional-portrait-of-mercy-munene-african-woma.jpg"
              alt="Mercy Munene - Founder of Shamba Connect"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Do!</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shamba Connect is Kenya's leading urban agriculture enterprise, involved directly and in supportive
              capacity in the entire urban farming value chain. We are dedicated to seeing Kenyan urban farmers excel in
              kitchen gardening as a domestic food production unit, a health & wellness system, or a commercial
              enterprise for agricultural value chain actors.
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link href="/about">
                Learn More!
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
