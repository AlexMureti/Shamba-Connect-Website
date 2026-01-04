"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ShoppingCart, Phone } from "lucide-react"
import { useState } from "react"

export function ProductGrid() {
  const [cart, setCart] = useState<number[]>([])

  const products = [
    // Rabbit Products
    {
      id: 101,
      name: "Fresh Rabbit Meat (1kg)",
      category: "Rabbit Meat",
      price: 800,
      description: "Premium lean rabbit meat, healthy and delicious",
      image: "/rabbit-meat-fresh-premium.jpg",
    },
    {
      id: 102,
      name: "Outdoor Rabbit Hutch - Standard",
      category: "Rabbit Hutches",
      price: 12000,
      description: "Durable outdoor hutch for 2-4 rabbits with feeding area",
      image: "/outdoor-rabbit-hutches-professional.jpg",
    },
    {
      id: 103,
      name: "Outdoor Rabbit Hutch - Premium",
      category: "Rabbit Hutches",
      price: 25000,
      description: "Large commercial-grade hutch for 8-12 rabbits",
      image: "/outdoor-rabbit-hutches-professional.jpg",
    },
    {
      id: 104,
      name: "California White Breeder Pair",
      category: "Breeder Rabbits",
      price: 8000,
      description: "Proven breeding pair, healthy and productive",
      image: "/breeder-rabbits-quality-stock.jpg",
    },
    {
      id: 105,
      name: "New Zealand White Breeder Pair",
      category: "Breeder Rabbits",
      price: 9000,
      description: "Large breed, excellent for meat production",
      image: "/breeder-rabbits-quality-stock.jpg",
    },
    {
      id: 106,
      name: "Tanned Rabbit Leather (per piece)",
      category: "Rabbit Leather",
      price: 1500,
      description: "Premium quality tanned rabbit leather for crafts",
      image: "/tanned-rabbit-leather-premium.jpg",
    },
    {
      id: 107,
      name: "Pet Rabbit - Dwarf Breed",
      category: "Pet Rabbits",
      price: 2500,
      description: "Friendly pet rabbit, perfect for families",
      image: "/pet-rabbit-dwarf-friendly.jpg",
    },
    {
      id: 108,
      name: "Rabbit Farming Starter Kit",
      category: "Rabbit Farming",
      price: 35000,
      description: "Complete kit: 2 hutches, breeding pair, feeds, and training",
      image: "/rabbit-farming-complete-kit.jpg",
    },
    // Garden Products
    {
      id: 1,
      name: "Starter Garden Kit",
      category: "Garden Kits",
      price: 3500,
      description: "Complete kit with raised bed, soil, and 20 seedlings",
      image: "/starter-garden-kit-kenya.jpg",
    },
    {
      id: 2,
      name: "Tomato Seedlings (Pack of 10)",
      category: "Seedlings",
      price: 200,
      description: "Organic Roma tomato seedlings ready for transplanting",
      image: "/organic-tomato-seedlings.jpg",
    },
    {
      id: 3,
      name: "Kale Seedlings (Pack of 20)",
      category: "Seedlings",
      price: 150,
      description: "Sukuma wiki seedlings, organic and disease-free",
      image: "/organic-kale-seedlings.jpg",
    },
    {
      id: 4,
      name: "Organic Compost (20kg)",
      category: "Organic Inputs",
      price: 800,
      description: "Premium quality organic compost for healthy soil",
      image: "/organic-compost-fertilizer.jpg",
    },
    {
      id: 5,
      name: "Garden Tool Set",
      category: "Garden Kits",
      price: 2500,
      description: "Essential tools: spade, fork, hoe, and watering can",
      image: "/garden-tool-set.jpg",
    },
    {
      id: 7,
      name: "Spinach Seedlings (Pack of 15)",
      category: "Seedlings",
      price: 180,
      description: "Fresh organic spinach seedlings",
      image: "/organic-spinach-seedlings.jpg",
    },
    {
      id: 8,
      name: "Herb Garden Collection",
      category: "Garden Kits",
      price: 1200,
      description: "Basil, mint, coriander, and parsley seedlings",
      image: "/herb-garden-collection.jpg",
    },
    {
      id: 9,
      name: "Organic Pest Control",
      category: "Organic Inputs",
      price: 600,
      description: "Natural pest control solution, safe for vegetables",
      image: "/organic-pest-control.jpg",
    },
  ]

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const whatsappOrder = (product: (typeof products)[0]) => {
    const message = `Hi! I'm interested in ordering: ${product.name} (KES ${product.price})`
    window.open(`https://wa.me/254724731425?text=${encodeURIComponent(message)}`, "_blank")
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
                <Button onClick={() => addToCart(product.id)} className="w-full">
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
                <Button onClick={() => whatsappOrder(product)} variant="outline" className="w-full">
                  <Phone size={16} className="mr-2" />
                  Order via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer z-50">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
              {cart.length}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
