import { Sprout, Users, GraduationCap, ShoppingBag } from "lucide-react"

export function WhatWeDo() {
  const services = [
    {
      icon: Sprout,
      title: "Kitchen Garden Installation",
      description:
        "Professional organic garden setup for homes, schools, and institutions. Grow your own fresh vegetables and herbs.",
    },
    {
      icon: Users,
      title: "Rabbit Farming Systems",
      description:
        "Complete rabbit unit setup and management training. A sustainable protein source for families and communities.",
    },
    {
      icon: GraduationCap,
      title: "Training & Consultancy",
      description:
        "Expert agricultural training programs for individuals, schools, and organizations. Learn sustainable farming practices.",
    },
    {
      icon: ShoppingBag,
      title: "Agri-Inputs & Seedlings",
      description:
        "Quality organic seedlings, garden kits, and farming supplies. Everything you need to start your farming journey.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Shamba Connect Does</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide comprehensive urban agriculture solutions that empower communities to grow their own food safely
            and sustainably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
