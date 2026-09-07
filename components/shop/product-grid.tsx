"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ShoppingCart, Phone } from "lucide-react"
import { useState } from "react"
import { useCartStore } from "@/Shamba-Connect-Website/lib/cart-store"
import { PRODUCTS } from "@/Shamba-Connect-Website/lib/products"

export function ProductGrid() {
  const { addItem } = useCartStore()
  const [addedMessage, setAddedMessage] = useState<number | null>(null)

  const products = PRODUCTS

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
    setAddedMessage(product.id)
    setTimeout(() => setAddedMessage(null), 2000)
  }

  const whatsappOrder = (product: (typeof products)[0]) => {
    const message = `Hi! I'm interested in ordering: ${product.name} (KES ${product.price})`
    window.open(`https://wa.me/254725684352?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="flex-shrink-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <CardTitle className="text-base md:text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="text-xs md:text-sm">{product.category}</CardDescription>
                  </div>
                  <p className="text-base md:text-lg font-bold text-primary whitespace-nowrap flex-shrink-0">
                    KES {product.price.toLocaleString()}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              </CardContent>
              <CardFooter className="flex-col gap-2 pt-0">
                <Button 
                  onClick={() => handleAddToCart(product)} 
                  className="w-full"
                  variant={addedMessage === product.id ? "default" : "default"}
                >
                  <ShoppingCart size={16} className="mr-2" />
                  {addedMessage === product.id ? "Added!" : "Add to Cart"}
                </Button>
                <Button onClick={() => whatsappOrder(product)} variant="outline" className="w-full">
                  <Phone size={16} className="mr-2" />
                  Order via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>


      </div>
    </section>
  )
}
