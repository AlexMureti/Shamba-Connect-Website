import { Leaf, Users, Shield, Lightbulb, Heart, TrendingUp } from "lucide-react"

export function CoreValues() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We promote environmentally responsible farming practices that protect our planet for future generations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Food Safety",
      description: "We are committed to providing safe, organic, chemical-free food solutions for healthy living.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "We believe in equipping communities with knowledge and resources to achieve food independence.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously develop creative solutions to make urban agriculture accessible and efficient.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and accountability in all our partnerships and services.",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Impact-Driven",
      description: "We measure success by the real, lasting positive change we create in communities.",
      color: "from-indigo-500 to-violet-500",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The principles that guide everything we do at Shamba Connect
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="relative inline-block mb-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity`}
                ></div>
                <div className="relative bg-background w-14 h-14 rounded-lg flex items-center justify-center border-2 border-border group-hover:border-primary/40 transition-colors">
                  <value.icon className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
