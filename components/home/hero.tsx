"use client"

import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/thriving-urban-rooftop-kitchen-garden-with-fresh-v.jpg"
          alt="Transform your space with Shamba Connect"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Transform Your Life with Rabbits & Kitchen Gardens!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium leading-relaxed max-w-4xl mx-auto text-pretty">
            Join us in building food security and thriving businesses—your path to organic food, healthy rabbit meat,
            premium leather, and sustainable profits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-6">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg shadow-xl hover:shadow-2xl transition-all px-6 md:px-10 py-5 md:py-7 h-auto"
            >
              <Link href="/shop">
                Shop Now!
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base md:text-lg bg-white/95 hover:bg-white border-2 px-6 md:px-10 py-5 md:py-7 h-auto"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
