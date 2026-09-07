"use client"

import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ShoppingCart, ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "10-Pot Vertical Garden Kit",
    useCase: "Perfect for balconies & small spaces",
    image: "/media/shamba-12.webp",
    link: "/shop#garden-kits",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%2010-Pot%20Vertical%20Garden%20Kit.%20Can%20you%20provide%20more%20details?",
  },
  {
    id: 2,
    name: "Starter Rabbit Cage (2 Breeders)",
    useCase: "Complete setup for rabbit farming",
    image: "/media/shamba-17.webp",
    link: "/shop#rabbit-supplies",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%20Starter%20Rabbit%20Cage%202%20Breeders.%20Can%20you%20provide%20more%20details?",
  },
  {
    id: 3,
    name: "Organic Seedling Pack",
    useCase: "Balcony-friendly vegetables",
    image: "/media/shamba-07.webp",
    link: "/shop#seedlings",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%20Organic%20Seedling%20Pack.%20Can%20you%20provide%20more%20details?",
  },
  {
    id: 4,
    name: "Premium Rabbit Meat (1kg)",
    useCase: "Fresh, hormone-free protein",
    image: "/media/shamba-33.webp",
    link: "/shop#rabbit-meat",
    whatsappLink: "https://wa.me/254725684352?text=Hi%20Shamba%20Connect!%20I'm%20interested%20in%20the%20Premium%20Rabbit%20Meat%201kg.%20Can%20you%20provide%20more%20details?",
  },
]

export function FeaturedProducts() {
  return (
    <section className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-headline text-foreground">
              Featured products
            </h2>
          </div>
          <Button asChild variant="link" className="text-secondary font-semibold text-base hover:no-underline group px-0">
            <Link href="/shop" className="flex items-center gap-2">
              Browse full shop
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30"
            >
              <div className="relative aspect-square overflow-hidden bg-muted/20">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 orange-gradient-bg text-white rounded-full flex items-center justify-center shadow-lg">
                    <ShoppingCart size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.useCase}</p>
                </div>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-secondary/10">
                  <a href={product.whatsappLink} target="_blank" rel="noopener noreferrer">
                    Order via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
