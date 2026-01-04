import Link from "next/link"
import { Card } from "@/Shamba-Connect-Website/components/ui/card"
import { Sprout, Trees, Rabbit, Users, ShoppingBag, Leaf } from "lucide-react"

export function ServiceCardsGrid() {
  const services = [
    {
      title: "Kitchen Gardens",
      icon: Sprout,
      image: "/professional-kitchen-garden-installation-setup-wit.jpg",
      href: "/services#kitchen-gardens",
    },
    {
      title: "Foodscape Design",
      icon: Trees,
      image: "/beautiful-foodscape-landscape-design-combining-aes.jpg",
      href: "/services#landscaping",
    },
    {
      title: "Rabbit Farming",
      icon: Rabbit,
      image: "/modern-rabbit-farming-unit-with-proper-housing-an.jpg",
      href: "/services#rabbit-farming",
    },
    {
      title: "Training",
      icon: Users,
      image: "/agricultural-training-session-hands-on-learning-w.jpg",
      href: "/services#training",
    },
    {
      title: "Seedlings",
      icon: Leaf,
      image: "/organic-vegetable-seedlings-in-propagation-trays.jpg",
      href: "/services#seedlings",
    },
    {
      title: "Farming Supplies",
      icon: ShoppingBag,
      image: "/organic-farming-inputs-and-supplies-garden-kits-t.jpg",
      href: "/shop",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href}>
                <Card className="group relative overflow-hidden h-[200px] sm:h-[240px] md:h-[280px] hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                  <div className="absolute inset-0">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-full flex flex-col justify-end p-3 md:p-5">
                    <Icon className="w-7 h-7 md:w-9 md:h-9 text-white mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="text-sm md:text-lg font-bold text-white leading-tight">{service.title}</h3>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
