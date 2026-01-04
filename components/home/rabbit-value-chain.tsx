import Link from "next/link"
import { Card } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { Rabbit, Beef, ShoppingBag, Shirt, ArrowRight } from "lucide-react"

export function RabbitValueChain() {
  const offerings = [
    {
      title: "Rabbit Meat",
      description: "Premium, lean, healthy rabbit meat for your family",
      icon: Beef,
      image: "/rabbit-meat-fresh-premium.jpg",
      href: "/shop?category=rabbit-meat",
    },
    {
      title: "Rabbit Hutches",
      description: "Professional outdoor rabbit housing systems",
      icon: ShoppingBag,
      image: "/outdoor-rabbit-hutches-professional.jpg",
      href: "/shop?category=rabbit-hutches",
    },
    {
      title: "Breeder Rabbits",
      description: "Quality breeding stock for your rabbitry",
      icon: Rabbit,
      image: "/breeder-rabbits-quality-stock.jpg",
      href: "/shop?category=breeder-rabbits",
    },
    {
      title: "Rabbit Leather",
      description: "Tanned rabbit leather for crafts and fashion",
      icon: Shirt,
      image: "/tanned-rabbit-leather-premium.jpg",
      href: "/shop?category=rabbit-leather",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Complete Rabbit Value Chain
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From breeding to meat, leather tanning to pet rabbits—we provide everything you need for successful rabbit
            farming
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <Link key={index} href={offering.href}>
                <Card className="group relative overflow-hidden h-[320px] sm:h-[340px] hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                  <div className="absolute inset-0">
                    <img
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                    <div className="bg-primary text-primary-foreground w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{offering.title}</h3>
                    <p className="text-sm md:text-base text-white/90">{offering.description}</p>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="px-8 md:px-10 py-5 md:py-6 h-auto text-base md:text-lg">
            <Link href="/shop">
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
