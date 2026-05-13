"use client"

import { useState } from "react"
import { useCartStore } from "@/Shamba-Connect-Website/lib/cart-store"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { Input } from "@/Shamba-Connect-Website/components/ui/input"
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCartStore()
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")

  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  const handleCheckout = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Please enter your name and phone number")
      return
    }

    // Create WhatsApp message with order details
    const orderDetails = items
      .map((item) => `${item.name} x${item.quantity} = KES ${(item.price * item.quantity).toLocaleString()}`)
      .join("\n")

    const message = `Hi Shamba Connect!\n\nI'd like to place an order:\n\n${orderDetails}\n\n*Total: KES ${totalPrice.toLocaleString()}*\n\nCustomer Details:\nName: ${customerName}\nPhone: ${customerPhone}\n${customerEmail ? `Email: ${customerEmail}` : ""}`

    const whatsappUrl = `https://wa.me/254725684352?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Clear cart after checkout
    clearCart()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-primary" />
            <h2 className="text-lg font-bold">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart size={32} className="mx-auto text-muted-foreground mb-2 opacity-50" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg p-3">
                    <div className="flex gap-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <p className="text-sm font-bold text-primary mt-1">
                          KES {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right mt-2 text-sm font-semibold">
                      Subtotal: KES {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>KES {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm text-muted-foreground">
                  <span>Delivery:</span>
                  <span>To be confirmed</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                  <span>Total:</span>
                  <span className="text-primary">KES {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Customer Details Form */}
              <div className="space-y-3 mb-6 border-t border-border pt-4">
                <div>
                  <label className="text-sm font-semibold block mb-1">Full Name *</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+254 725 684 352"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1">Email (Optional)</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button onClick={handleCheckout} className="w-full">
                  Checkout via WhatsApp
                </Button>
                <Button onClick={() => clearCart()} variant="outline" className="w-full">
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
