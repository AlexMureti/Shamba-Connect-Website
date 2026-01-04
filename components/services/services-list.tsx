import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { Sprout, Palette, Leaf, Rabbit, GraduationCap, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react"

export function ServicesList() {
  const services = [
    {
      id: "kitchen-gardens",
      icon: Sprout,
      title: "Kitchen Garden Installation",
      description:
        "Professional organic garden setup for homes, schools, and institutions with ongoing maintenance support.",
      image: "/professional-kitchen-garden-installation-setup-wit.jpg",
      highlights: ["Site assessment", "Organic inputs", "3 months support"],
    },
    {
      id: "landscaping",
      icon: Palette,
      title: "Landscape-cum-Foodscape Design",
      description:
        "Beautify your space while growing food. Functional landscapes that combine aesthetics with productivity.",
      image: "/beautiful-foodscape-landscape-design-combining-aes.jpg",
      highlights: ["Custom design", "Aesthetic + productive", "Water-efficient"],
    },
    {
      id: "seedlings",
      icon: Leaf,
      title: "Seedling Propagation",
      description:
        "High-quality organic seedlings for vegetables, herbs, and ornamental plants delivered to your location.",
      image: "/organic-vegetable-seedlings-in-propagation-trays.jpg",
      highlights: ["100% organic", "Wide variety", "Doorstep delivery"],
    },
    {
      id: "rabbit-farming",
      icon: Rabbit,
      title: "Rabbit Unit Setup & Management",
      description:
        "Complete rabbit farming systems including housing, breeding stock, meat production, and leather tanning. Mercy Munene's expert team ensures your success.",
      image: "/modern-rabbit-farming-unit-with-proper-housing-an.jpg",
      highlights: ["Complete setup", "Breeding stock", "Full training"],
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Training & Consultancy",
      description: "Expert agricultural training programs for individuals, schools, NGOs, and corporate organizations.",
      image: "/agricultural-training-session-hands-on-learning-w.jpg",
      highlights: ["Hands-on training", "Certification", "Ongoing support"],
    },
    {
      id: "retail",
      icon: ShoppingBag,
      title: "Retail of Inputs",
      description: "Quality organic inputs, garden kits, tools, and farming supplies for your urban agriculture needs.",
      image: "/organic-farming-inputs-and-supplies-garden-kits-t.jpg",
      highlights: ["Quality products", "Competitive prices", "Expert advice"],
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - Shamba Connect Service`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="default" className="w-full group/btn">
                  <a href={`#${service.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
