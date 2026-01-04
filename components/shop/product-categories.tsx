"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Products" },
    { id: "garden-kits", label: "Garden Kits" },
    { id: "seedlings", label: "Seedlings" },
    { id: "inputs", label: "Organic Inputs" },
    { id: "rabbit-supplies", label: "Rabbit Farming" },
  ]

  return (
    <section className="py-8 bg-card border-y border-border sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
