'use client'

import React from 'react'
import { Shield, CheckCircle, Zap, Truck, Award, Lock, Star } from 'lucide-react'

interface BadgeProps {
  type: 'verified' | 'quality-checked' | 'authentic' | 'fast-shipping' | 'bestseller' | 'limited' | 'inspection-timestamp'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  agentId?: string
  date?: string
}

export function TrustBadges({ type, size = 'md', showLabel = true, agentId, date }: BadgeProps) {
  const badgeConfig = {
    verified: {
      icon: CheckCircle,
      color: 'text-success bg-success/10',
      label: 'Platform Verified',
      description: 'Verified by Timbuktu',
    },
    'quality-checked': {
      icon: Shield,
      color: 'text-primary bg-primary/10',
      label: 'Quality Checked',
      description: 'Agent inspected',
    },
    authentic: {
      icon: Award,
      color: 'text-accent bg-accent/10',
      label: 'Authentic Craft',
      description: 'Cultural authenticity guaranteed',
    },
    'fast-shipping': {
      icon: Truck,
      color: 'text-success bg-success/10',
      label: 'Free Shipping',
      description: '3-5 day delivery',
    },
    bestseller: {
      icon: Star,
      color: 'text-accent bg-accent/10',
      label: 'Best Seller',
      description: 'Popular choice',
    },
    limited: {
      icon: Zap,
      color: 'text-warning bg-warning/10',
      label: 'Limited Stock',
      description: 'Only few left',
    },
    'inspection-timestamp': {
      icon: Lock,
      color: 'text-primary bg-primary/10',
      label: 'Inspection',
      description: date ? `Verified ${date}` : 'Quality assured',
    },
  }

  const config = badgeConfig[type]
  const Icon = config.icon

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${config.color} ${size === 'lg' ? 'py-3 px-4' : ''}`}>
      <Icon className={sizeClasses[size]} />
      {showLabel && (
        <div>
          <p className="text-xs font-semibold text-foreground">{config.label}</p>
          {size === 'lg' && <p className="text-xs text-muted-foreground">{config.description}</p>}
        </div>
      )}
    </div>
  )
}

export function TrustBar() {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">500+</p>
          <p className="text-xs text-muted-foreground">Verified Artisans</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">10,000+</p>
          <p className="text-xs text-muted-foreground">Quality-Checked Products</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-xs text-muted-foreground">Secure Payments</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">24/7</p>
          <p className="text-xs text-muted-foreground">Customer Support</p>
        </div>
      </div>
    </div>
  )
}

export function VerificationTimeline() {
  const steps = [
    { label: 'Sample Submitted', completed: true, date: 'Feb 15' },
    { label: 'Admin Review', completed: true, date: 'Feb 15' },
    { label: 'Agent Verification', completed: true, date: 'Feb 16' },
    { label: 'Published', completed: false, date: 'Pending' },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="font-semibold text-foreground mb-6">Verification Timeline</h3>
      <div className="flex items-center justify-between">
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                  step.completed
                    ? 'bg-success text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step.completed ? '✓' : idx + 1}
              </div>
              <p className="text-xs font-medium text-foreground text-center">{step.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{step.date}</p>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`h-1 mx-1 mt-6 mb-12 ${
                  step.completed ? 'bg-success' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function AgentVerificationBadge({ agentId, date }: { agentId: string; date: string }) {
  return (
    <div className="flex items-center gap-3 bg-success/10 border border-success/30 rounded-lg p-3">
      <Shield className="w-5 h-5 text-success flex-shrink-0" />
      <div className="text-sm">
        <p className="font-medium text-success">Agent Verified</p>
        <p className="text-xs text-muted-foreground">
          Inspected by {agentId} on {date}
        </p>
      </div>
    </div>
  )
}
