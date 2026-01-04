import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedServices() {
  const services = [
    {
      title: "Kitchen Garden Installation",
      description:
        "Transform your space into a productive organic garden. Professional installation with ongoing support.",
      image: "/organic-kitchen-garden-with-raised-beds.jpg",
      href: "/services#kitchen-gardens",
    },
    {
      title: "Rabbit Farming Setup",
      description:
        "Complete rabbit unit design and setup. Sustainable protein source with comprehensive training included.",
      image: "/modern-rabbit-farming-unit-setup.jpg",
      href: "/services#rabbit-farming",
    },
    {
      title: "Agricultural Training",
      description: "Expert-led training programs for individuals, schools, and organizations in sustainable farming.",
      image: "/agricultural-training-workshop-kenya.jpg",
      href: "/services#training",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive urban agriculture solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
