import { Sprout, Rabbit, GraduationCap, ShoppingBag, Leaf } from "lucide-react"

export function WhatWeDoSnapshot() {
  const services = [
    {
      icon: Sprout,
      title: "Kitchen Garden Installation",
      description: "Custom designs for urban spaces",
    },
    {
      icon: Leaf,
      title: "Foodscaping & Landscaping",
      description: "Aesthetic food-producing landscapes",
    },
    {
      icon: Sprout,
      title: "Quality Seedlings",
      description: "Organic vegetable & herb seedlings",
    },
    {
      icon: Rabbit,
      title: "Rabbit Farming Solutions",
      description: "Hutches, breeding stock & training",
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description: "Hands-on agriculture workshops",
    },
    {
      icon: ShoppingBag,
      title: "Farm Input Retail",
      description: "Tools, seeds, fertilizers & supplies",
    },
  ]

  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">What We Do</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-2 bg-primary/10 rounded-md flex-shrink-0">
                <service.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
