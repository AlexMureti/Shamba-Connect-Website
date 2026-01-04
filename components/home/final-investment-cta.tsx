import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalInvestmentCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/healthy-rabbits-in-modern-farming-setup-with-hutch.jpg"
          alt="Invest in urban farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
          Investing in urban agriculture is a game-changer for food security and profitability.
        </h2>
        <Button asChild size="lg" className="text-lg px-8 py-6 h-auto shadow-xl hover:scale-105 transition-transform">
          <Link href="/shop">
            Start Now!
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
