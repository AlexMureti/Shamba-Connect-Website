import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight } from "lucide-react"

export function EmpowermentCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Empowering Your Urban Farming Journey</h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            At Shamba Connect, we are dedicated to your success! We provide expert guidance, quality foundational
            supplies, and valuable resources to help you thrive in urban agriculture. Let us support you in building a
            sustainable and profitable venture!
          </p>
        </div>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6 h-auto text-primary hover:scale-105 transition-transform shadow-xl"
        >
          <Link href="/book-consultation">
            GET FREE CONSULTATION!
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
