'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Heart, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
  region: string
  stock: number
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      title: 'Hand-Woven Ethiopian Basket',
      price: 2850,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=200',
      region: 'Addis Ababa',
      stock: 5,
    },
    {
      id: '2',
      title: 'Traditional Ethiopian Coffee Roaster',
      price: 3500,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=200',
      region: 'Hawassa',
      stock: 8,
    },
  ])

  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 2000 ? 0 : 250
  const tax = Math.round(subtotal * 0.15)
  const total = subtotal + shipping + tax

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setPromoApplied(true)
    }
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold text-foreground">Shopping Cart</h1>
          <p className="text-muted-foreground mt-2">{cartItems.length} items in your cart</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {cartItems.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-xl text-foreground font-medium mb-4">Your cart is empty</p>
            <p className="text-muted-foreground mb-6">Start shopping to add items to your cart</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/products">
              Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Panel: Cart Items (66%) */}
            <div className="lg:col-span-2">
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-card border border-border rounded-lg p-4">
                    <div className="flex gap-4">
                      {/* Thumbnail */}
                      <div className="shrink-0">
                        <Image src={item.image} alt={item.title} width={96} height={96} className="w-24 h-24 rounded-lg object-cover" />
                      </div>

                      {/* Details */}
                      <div className="grow min-w-0">
                        <h3 className="font-medium text-foreground truncate">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.region}</p>
                        <p className="text-sm text-primary font-medium mt-1">ETB {item.price.toLocaleString()}</p>

                        {/* Stock Warning */}
                        {item.stock < 5 && (
                          <p className="text-xs text-warning mt-2">Only {item.stock} left in stock</p>
                        )}
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-col items-end justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-foreground hover:bg-muted text-sm"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 font-medium text-foreground border-l border-r border-border text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-foreground hover:bg-muted text-sm"
                            disabled={item.quantity >= item.stock}
                          >
                            +
                          </button>
                        </div>

                        {/* Total & Remove */}
                        <div className="text-right">
                          <p className="font-bold text-foreground mb-2">
                            ETB {(item.price * item.quantity).toLocaleString()}
                          </p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-destructive hover:text-destructive/80 transition-colors"
                              title="Remove"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button
                              className="text-muted-foreground hover:text-primary transition-colors"
                              title="Save for later"
                            >
                              <Heart className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Button asChild variant="outline" className="w-full border-border">
                <Link href="/products">
                Continue Shopping
                </Link>
              </Button>
            </div>

            {/* Right Panel: Order Summary (34% - Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-card border border-border rounded-lg p-6 space-y-6">
                {/* Summary Title */}
                <h2 className="text-lg font-serif font-bold text-foreground">Order Summary</h2>

                {/* Breakdown */}
                <div className="space-y-3 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground font-medium">ETB {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground font-medium">
                      {shipping === 0 ? (
                        <span className="text-success">Free</span>
                      ) : (
                        `ETB ${shipping}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (15%)</span>
                    <span className="text-foreground font-medium">ETB {tax.toLocaleString()}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-baseline">
                  <span className="text-foreground font-medium">Total</span>
                  <span className="text-3xl font-bold text-primary">ETB {total.toLocaleString()}</span>
                </div>

                {/* Promo Code */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="grow px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button
                      onClick={handleApplyPromo}
                      variant="outline"
                      className="border-border text-sm"
                    >
                      Apply
                    </Button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-success mt-2">Code applied successfully</p>
                  )}
                </div>

                {/* Checkout Button */}
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-medium">
                  <Link href="/checkout">
                  Proceed to Checkout
                  </Link>
                </Button>

                {/* Trust Signals */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-xs text-foreground">Secure checkout</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You won't contact the artisan directly. Ethio Crafts handles all communication.
                  </p>
                  <div className="flex items-center gap-2 pt-2 border-t border-primary/10">
                    <span className="text-xs font-medium text-foreground">We Accept:</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {['TeleBirr', 'Chapa', 'Visa', 'Mastercard'].map((method) => (
                      <span
                        key={method}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-medium"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
