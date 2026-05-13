"use client"

import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function BlogCategories() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("all")
  const [mounted, setMounted] = useState(false)

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "kitchen-gardens", label: "Kitchen Gardens" },
    { id: "rabbit-farming", label: "Rabbit Farming" },
    { id: "organic-practices", label: "Organic Practices" },
    { id: "success-stories", label: "Success Stories" },
  ]

  // Set initial category from URL on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category") || "all"
    setActiveCategory(categoryParam)
    setMounted(true)
  }, [searchParams])

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    // Update URL with the selected category
    if (categoryId === "all") {
      router.push("/blog")
    } else {
      router.push(`/blog?category=${categoryId}`)
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="py-8 bg-card border-y border-border sticky top-20 z-40" />
  }

  return (
    <section className="py-8 bg-card border-y border-border sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
