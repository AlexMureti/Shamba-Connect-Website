import data from "@/Shamba-Connect-Website/content/products.json"

/**
 * One catalogue, read by the shop grid, the Product schema and the assistant.
 *
 * These fifteen products were declared inline inside product-grid.tsx, a
 * "use client" component. Nothing else could see them -- so the assistant would
 * have had to be told the prices separately, which is exactly how a chatbot ends
 * up quoting a price the shop no longer charges.
 */
export interface Product {
  id: number
  name: string
  category: string
  price: number
  description: string
  image: string
}

export const PRODUCTS = data as Product[]

export function productCategories(): string[] {
  return [...new Set(PRODUCTS.map((p) => p.category))].sort()
}

export function priceRange(): { low: number; high: number } {
  const prices = PRODUCTS.map((p) => p.price)
  return { low: Math.min(...prices), high: Math.max(...prices) }
}
