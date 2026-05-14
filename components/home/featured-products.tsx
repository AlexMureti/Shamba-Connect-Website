"use client"

import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ShoppingCart, ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "10-Pot Vertical Garden Kit",
    useCase: "Perfect for balconies & small spaces",
    image: "/vertical-garden-kit-with-pots.jpg",
    link: "/shop#garden-kits",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%2010-Pot%20Vertical%20Garden%20Kit.%20Can%20you%20provide%20more%20details?",
  },
  {
    id: 2,
    name: "Starter Rabbit Cage (2 Breeders)",
    useCase: "Complete setup for rabbit farming",
    image: "/outdoor-rabbit-hutches-professional.jpg",
    link: "/shop#rabbit-supplies",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%20Starter%20Rabbit%20Cage%202%20Breeders.%20Can%20you%20provide%20more%20details?",
  },
  {
    id: 3,
    name: "Organic Seedling Pack",
    useCase: "Balcony-friendly vegetables",
    image: "/organic-vegetable-seedlings-in-propagation-trays.jpg",
    link: "/shop#seedlings",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%20Organic%20Seedling%20Pack.%20Can%20you%20provide%20more%20details?",
  },
  {
    id: 4,
    name: "Premium Rabbit Meat (1kg)",
    useCase: "Fresh, hormone-free protein",
    image: "/rabbit-meat-fresh-premium.jpg",
    link: "/shop#rabbit-meat",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%20Premium%20Rabbit%20Meat%201kg.%20Can%20you%20provide%20more%20details?",
  },
]

export function FeaturedProducts() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl md:text-2xl font-semibold">Featured Products</h2>
          <Link href="/shop" className="text-sm text-primary hover:underline flex items-center gap-1">
            View Shop
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all"
            >
              <div className="aspect-square overflow-hidden bg-muted/20">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1 leading-tight group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 leading-snug">{product.useCase}</p>
                <div className="flex justify-end">
                  <Button asChild size="sm" variant="ghost" className="h-8 px-3">
                    <a href={product.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart size={14} className="mr-1" />
                      Order
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
