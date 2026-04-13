'use client'

import React, { useState } from 'react'
import { CreditCard, Phone, Truck, MapPin, AlertCircle, CheckCircle } from 'lucide-react'

/**
 * Payment Gateway Integration Component
 * Supports: Chapa, TeleBirr, Card payments
 */
export function PaymentGateway() {
  const [selectedMethod, setSelectedMethod] = useState('chapa')
  const [loading, setLoading] = useState(false)

  const paymentMethods = [
    {
      id: 'chapa',
      name: 'Chapa',
      description: 'Card payment via Chapa gateway',
      icon: CreditCard,
      fee: 0,
    },
    {
      id: 'telebirr',
      name: 'TeleBirr',
      description: 'Mobile payment via Ethiopian Telecom',
      icon: Phone,
      fee: 0,
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when you receive your order',
      icon: MapPin,
      fee: 0,
    },
  ]

  const handlePayment = async () => {
    setLoading(true)

    // Integration point for payment processing
    // Replace with actual payment gateway API calls
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <div>
        <h3 className="text-lg font-serif font-bold text-foreground mb-4">Select Payment Method</h3>
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon
            return (
              <label
                key={method.id}
                className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-all"
                style={{
                  borderColor: selectedMethod === method.id ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: selectedMethod === method.id ? 'var(--primary)/5' : 'transparent',
                }}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="w-4 h-4 text-primary cursor-pointer"
                />
                <Icon className="w-5 h-5 ml-3 text-primary" />
                <div className="ml-3 flex-grow">
                  <p className="font-medium text-foreground">{method.name}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
                {method.fee > 0 && (
                  <span className="text-sm font-medium text-foreground">+{method.fee}%</span>
                )}
              </label>
            )
          })}
        </div>
      </div>

      {/* Payment Integration Notes */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3 text-sm">
        <div className="flex gap-2">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground">Integration Required</p>
            <p className="text-muted-foreground mt-1">
              To enable payments, integrate with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Chapa API (chapa.co)</li>
              <li>TeleBirr API (ethiopiantelecoms.et)</li>
              <li>SSL/TLS encryption for card data</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Test Mode Indicator */}
      <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 flex gap-3 text-sm">
        <AlertCircle className="w-5 h-5 text-warning flex-shrink-0" />
        <p className="text-muted-foreground">
          Currently in <strong>demo mode</strong>. Replace payment handlers with live API keys in production.
        </p>
      </div>
    </div>
  )
}

/**
 * Shipping Integration Component
 * Supports: Standard (3-5 days), Express (1-2 days)
 */
export function ShippingOptions() {
  const [selectedShipping, setSelectedShipping] = useState('standard')

  const shippingMethods = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      timeframe: '3-5 business days',
      cost: 250,
      description: 'Reliable delivery to most areas',
      icon: Truck,
    },
    {
      id: 'express',
      name: 'Express Delivery',
      timeframe: '1-2 business days',
      cost: 750,
      description: 'Fast delivery for urgent orders',
      icon: Truck,
    },
  ]

  const handleShippingSelect = async (methodId: string) => {
    setSelectedShipping(methodId)

    // Integration point for shipping calculation.
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-serif font-bold text-foreground">Shipping Method</h3>

      <div className="space-y-3">
        {shippingMethods.map((method) => {
          const Icon = method.icon
          return (
            <label
              key={method.id}
              className="flex items-start p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-all"
              style={{
                borderColor: selectedShipping === method.id ? 'var(--primary)' : 'var(--border)',
                backgroundColor: selectedShipping === method.id ? 'var(--primary)/5' : 'transparent',
              }}
            >
              <input
                type="radio"
                name="shippingMethod"
                value={method.id}
                checked={selectedShipping === method.id}
                onChange={(e) => handleShippingSelect(e.target.value)}
                className="w-4 h-4 text-primary cursor-pointer mt-1"
              />
              <Icon className="w-5 h-5 ml-3 text-primary flex-shrink-0 mt-0.5" />
              <div className="ml-3 flex-grow">
                <p className="font-medium text-foreground">{method.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                <p className="text-xs text-muted-foreground mt-1">Estimated: {method.timeframe}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">ETB {method.cost}</p>
              </div>
            </label>
          )
        })}
      </div>

      {/* Shipping Info */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-3 text-sm">
        <p className="font-medium text-foreground">Shipping Coverage</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
            Addis Ababa and major cities
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
            Regional centers (Hawassa, Gondar, etc.)
          </li>
          <li className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-warning flex-shrink-0" />
            Remote areas subject to availability
          </li>
        </ul>
      </div>

      {/* Integration Notes */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm space-y-2">
        <p className="font-medium text-foreground">Integration Points</p>
        <p className="text-muted-foreground">
          Integrate with logistics provider APIs for:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Real-time shipping rate calculation</li>
          <li>Address validation and geocoding</li>
          <li>Tracking updates and notifications</li>
          <li>Delivery confirmation webhooks</li>
        </ul>
      </div>
    </div>
  )
}

/**
 * Order Shipping Status Component
 */
export function ShippingStatus({ trackingNumber }: { trackingNumber: string }) {
  const statuses = [
    { step: 'Ordered', date: 'Feb 15, 10:30 AM', completed: true },
    { step: 'Processing', date: 'Feb 15, 2:00 PM', completed: true },
    { step: 'Shipped', date: 'Feb 16, 4:30 PM', completed: true },
    { step: 'In Transit', date: 'Feb 17, 8:00 AM', completed: false },
    { step: 'Out for Delivery', date: 'Feb 18, Expected', completed: false },
    { step: 'Delivered', date: 'Pending', completed: false },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Tracking Number</p>
        <p className="text-lg font-mono font-bold text-foreground">{trackingNumber}</p>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {statuses.map((status, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  status.completed
                    ? 'bg-success text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {status.completed ? '✓' : idx + 1}
              </div>
              {idx < statuses.length - 1 && (
                <div
                  className={`w-0.5 h-16 ${
                    status.completed ? 'bg-success' : 'bg-muted'
                  }`}
                />
              )}
            </div>

            <div className="pt-1">
              <p className={`font-medium ${
                status.completed ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {status.step}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{status.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
