"use client"

import { useState, useEffect } from "react"
import { useCartStore } from "@/Shamba-Connect-Website/lib/cart-store"
import { CartModal } from "./cart-modal"
import { ShoppingCart } from "lucide-react"

export function ShoppingCart() {
  const { getTotalItems } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const totalItems = getTotalItems()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || totalItems === 0) {
    return null
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer z-40"
      >
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
          {totalItems}
        </span>
      </button>
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
