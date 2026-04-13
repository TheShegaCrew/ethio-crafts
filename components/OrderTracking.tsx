'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CheckCircle, Clock, Truck, MapPin, Download, MessageCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OrderTrackingProps {
  orderId?: string
}

export default function OrderTracking({ orderId }: OrderTrackingProps) {
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [rating, setRating] = useState(0)

  // Mock order data
  const normalizedOrderId = orderId ? `#${orderId.replace(/^#/, '')}` : '#ORD-2024-001234'

  const order = {
    orderNumber: normalizedOrderId,
    orderDate: 'February 15, 2024',
    estimatedDelivery: 'February 18, 2024',
    status: 'shipped',
    trackingNumber: 'TRK-2024-987654',
    items: [
      {
        name: 'Hand-Woven Ethiopian Basket',
        qty: 1,
        price: 2850,
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=100',
        region: 'Addis Ababa',
      },
      {
        name: 'Traditional Ethiopian Coffee Roaster',
        qty: 2,
        price: 3500,
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=100',
        region: 'Hawassa',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'Addis Ababa',
      phone: '+251 900 123 456',
    },
    total: 7302.5,
  }

  const timeline = [
    {
      step: 'Order Placed',
      date: 'Feb 15, 2024 10:30 AM',
      status: 'completed',
      description: 'Your order has been received and confirmed',
    },
    {
      step: 'Payment Confirmed',
      date: 'Feb 15, 2024 10:35 AM',
      status: 'completed',
      description: 'Payment processed successfully via Chapa',
    },
    {
      step: 'Processing',
      date: 'Feb 15, 2024 2:00 PM',
      status: 'completed',
      description: 'Order being prepared by our team',
    },
    {
      step: 'Agent Verification',
      date: 'Feb 16, 2024 9:00 AM',
      status: 'completed',
      description: 'Quality check completed by Agent AG-2847',
    },
    {
      step: 'Shipped',
      date: 'Feb 16, 2024 4:30 PM',
      status: 'current',
      description: 'Package on its way to your location',
    },
    {
      step: 'Out for Delivery',
      date: 'Expected Feb 18, 2024',
      status: 'pending',
      description: 'Package will arrive at your doorstep',
    },
    {
      step: 'Delivered',
      date: 'Pending',
      status: 'pending',
      description: 'Package delivered',
    },
  ]

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground">Order Tracking</h1>
              <p className="text-muted-foreground mt-2">{order.orderNumber}</p>
            </div>
            <Button variant="outline" className="border-border">
              <Download className="w-4 h-4 mr-2" />
              Download Invoice
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Panel: Timeline (66%) */}
          <div className="lg:col-span-2">
            {/* Status Summary Card */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Tracking Number</p>
                  <p className="text-lg font-mono font-bold text-foreground mt-1">{order.trackingNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                  <p className="text-lg font-bold text-foreground mt-1">{order.estimatedDelivery}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Status</p>
                  <p className="text-lg font-bold text-primary mt-1 capitalize">In Transit</p>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '71%' }} />
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-serif font-bold text-foreground mb-6">Delivery Timeline</h2>

              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline Line */}
                    {idx < timeline.length - 1 && (
                      <div
                        className={`absolute left-6 top-16 w-0.5 h-12 ${
                          item.status === 'completed' ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}

                    {/* Timeline Dot & Content */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-12 h-12 text-success bg-success/10 rounded-full p-2" />
                        ) : item.status === 'current' ? (
                          <Truck className="w-12 h-12 text-primary bg-primary/10 rounded-full p-2 animate-pulse" />
                        ) : (
                          <Clock className="w-12 h-12 text-muted bg-muted rounded-full p-2" />
                        )}
                      </div>

                      <div className="flex-grow pt-2">
                        <p className="font-semibold text-foreground text-lg">{item.step}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <p className="text-sm text-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Details (34% - Sticky) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Items Summary */}
            <div className="sticky top-20 bg-card border border-border rounded-lg p-6 space-y-6">
              <h3 className="font-serif font-bold text-foreground text-lg">Order Summary</h3>

              <div className="space-y-4 pb-6 border-b border-border max-h-48 overflow-y-auto">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Image src={item.image} alt={item.name} width={64} height={64} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-grow min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.qty}</p>
                      <p className="text-sm font-bold text-primary mt-1">ETB {(item.price * item.qty).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground font-medium">ETB 6,350</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground font-medium">ETB 952.50</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="text-foreground font-medium">Total</span>
                <span className="text-2xl font-bold text-primary">ETB {order.total.toLocaleString()}</span>
              </div>

              {/* Shipping Address */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{order.shippingAddress.name}</p>
                    <p className="text-muted-foreground text-xs mt-1">{order.shippingAddress.address}</p>
                    <p className="text-muted-foreground text-xs">{order.shippingAddress.city}</p>
                    <p className="text-muted-foreground text-xs mt-2">{order.shippingAddress.phone}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-border">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>

                {order.status === 'delivered' && (
                  <Button
                    onClick={() => setShowReviewModal(true)}
                    variant="outline"
                    className="w-full border-border h-10 text-sm"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Leave Review
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4">Rate Your Order</h3>

            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-3xl transition-colors"
                >
                  <Star
                    className={star <= rating ? 'fill-primary text-primary' : 'text-muted'}
                  />
                </button>
              ))}
            </div>

            <textarea
              placeholder="Share your experience..."
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32 mb-6"
            />

            <div className="flex gap-3">
              <Button
                onClick={() => setShowReviewModal(false)}
                variant="outline"
                className="flex-1 border-border"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setShowReviewModal(false)
                }}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
