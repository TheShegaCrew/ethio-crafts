'use client'

import { Shield, CheckCircle, Truck, Headphones } from 'lucide-react'

export default function TrustBar() {
  const trustItems = [
    {
      icon: Shield,
      label: '500+ Verified Artisans',
      color: 'text-success',
    },
    {
      icon: CheckCircle,
      label: '10,000+ Quality-Checked Products',
      color: 'text-success',
    },
    {
      icon: Truck,
      label: 'Secure Payments (TeleBirr, Chapa)',
      color: 'text-success',
    },
    {
      icon: Headphones,
      label: '24/7 Customer Support',
      color: 'text-success',
    },
  ]

  return (
    <div className="w-full bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${item.color} flex-shrink-0`} />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
