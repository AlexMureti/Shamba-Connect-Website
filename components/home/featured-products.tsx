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
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Our Marketplace
            </div>
            <h2 className="bold-heading text-4xl md:text-5xl text-foreground">
              Featured <span className="text-primary">Products</span>
            </h2>
          </div>
          <Button asChild variant="link" className="text-secondary font-bold text-lg hover:no-underline group">
            <Link href="/shop" className="flex items-center gap-2">
              Browse Full Shop
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:border-secondary/30 transition-all duration-500"
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
                  <h3 className="font-bold text-xl mb-2 group-hover:text-secondary transition-colors line-clamp-1">
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
