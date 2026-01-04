import { Shield, Heart, Leaf, Target } from "lucide-react"

export function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Food Safety & Security",
      description:
        "Combat food adulteration with organic produce grown in your own space. Know exactly what you're eating and where it comes from.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Access to fresh, chemical-free vegetables and herbs. Promote better nutrition and healthier lifestyles for your family.",
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description:
        "Reduce your carbon footprint with local food production. Contribute to urban green spaces and biodiversity.",
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description:
        "7+ years of experience, 2000+ gardens installed, and partnerships with government and NGOs. Real results, real impact.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose Shamba Connect
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded on a personal journey to health and food safety, Shamba Connect is committed to making organic urban
            agriculture accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
