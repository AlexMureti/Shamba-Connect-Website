"use client"

import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ShoppingCart, ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "10-Pot Vertical Garden Kit",
    price: "KES 4,500",
    useCase: "Perfect for balconies & small spaces",
    image: "/vertical-garden-kit-with-pots.jpg",
    link: "/shop#garden-kits",
  },
  {
    id: 2,
    name: "Starter Rabbit Cage (2 Breeders)",
    price: "KES 8,000",
    useCase: "Complete setup for rabbit farming",
    image: "/outdoor-rabbit-hutches-professional.jpg",
    link: "/shop#rabbit-supplies",
  },
  {
    id: 3,
    name: "Organic Seedling Pack",
    price: "From KES 800",
    useCase: "Balcony-friendly vegetables",
    image: "/organic-vegetable-seedlings-in-propagation-trays.jpg",
    link: "/shop#seedlings",
  },
  {
    id: 4,
    name: "Premium Rabbit Meat (1kg)",
    price: "KES 1,200",
    useCase: "Fresh, hormone-free protein",
    image: "/rabbit-meat-fresh-premium.jpg",
    link: "/shop#rabbit-meat",
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
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-primary">{product.price}</span>
                  <Button asChild size="sm" variant="ghost" className="h-8 px-3">
                    <Link href={product.link}>
                      <ShoppingCart size={14} className="mr-1" />
                      Order
                    </Link>
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
