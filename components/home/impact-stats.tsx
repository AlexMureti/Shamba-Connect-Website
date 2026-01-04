import { TrendingUp, Users, Heart, Sprout, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ImpactStats() {
  const stats = [
    {
      icon: Sprout,
      value: "2000+",
      label: "Kitchen Gardens Installed",
      description: "Across homes, schools, and institutions",
      color: "text-green-600",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Farmers & Individuals Trained",
      description: "In sustainable agriculture practices",
      color: "text-blue-600",
    },
    {
      icon: Heart,
      value: "1000+",
      label: "Mothers Supported",
      description: "Through nutrition and farming programs",
      color: "text-red-600",
    },
    {
      icon: TrendingUp,
      value: "50+",
      label: "Community Programs",
      description: "Food security and health initiatives",
      color: "text-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Impact Across Kenya</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Real numbers from a real business creating real change in urban agriculture and food security.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg font-semibold mb-1">{stat.label}</p>
                <p className="text-sm opacity-80">{stat.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/about" className="inline-flex items-center gap-2 text-lg font-semibold hover:underline">
            Read Our Full Impact Story
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
