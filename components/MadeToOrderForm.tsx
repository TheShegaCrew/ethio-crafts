'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'

interface Customization {
  material?: string
  color?: string
  dimensions?: {
    length?: number
    width?: number
    height?: number
  }
  quantity: number
  notes: string
}

interface MadeToOrderFormProps {
  productId?: string
  productTitle?: string
  basePricePerUnit?: number
}

export default function MadeToOrderForm({
  productId = '',
  productTitle = 'Custom Product',
  basePricePerUnit = 1000,
}: MadeToOrderFormProps) {
  const [customization, setCustomization] = useState<Customization>({
    material: '',
    color: '',
    dimensions: {},
    quantity: 1,
    notes: '',
  })
  const [step, setStep] = useState(1)
  const [estimatedDays, setEstimatedDays] = useState(14)

  const materials = ['Straw', 'Leather', 'Metal', 'Wood', 'Cotton', 'Silk']
  const colors = ['Natural', 'Black', 'Brown', 'Red', 'Gold', 'Silver']

  const handleMaterialChange = (material: string) => {
    setCustomization({ ...customization, material })
  }

  const handleColorChange = (color: string) => {
    setCustomization({ ...customization, color })
  }

  const handleDimensionChange = (
    dimension: 'length' | 'width' | 'height',
    value: string
  ) => {
    setCustomization({
      ...customization,
      dimensions: {
        ...customization.dimensions,
        [dimension]: value ? parseFloat(value) : undefined,
      },
    })
  }

  const handleQuantityChange = (delta: number) => {
    const newQty = customization.quantity + delta
    if (newQty >= 1 && newQty <= 10) {
      setCustomization({ ...customization, quantity: newQty })
    }
  }

  const calculatePrice = () => {
    const customizationFee = customization.material ? 500 : 0
    return (basePricePerUnit + customizationFee) * customization.quantity
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Custom order request submitted! You\'ll be contacted within 24 hours.')
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h3 className="text-lg font-serif font-bold text-foreground mb-2">Order Custom Version</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Work with the artisan to create a product tailored to your specifications.
      </p>

      {/* Progress Indicator */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1 rounded-full transition-all ${
              s <= step ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Material & Color */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in-50">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Select Material
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {materials.map((material) => (
                  <button
                    key={material}
                    type="button"
                    onClick={() => handleMaterialChange(material)}
                    className={`px-4 py-2 rounded-lg border transition-all text-sm font-medium ${
                      customization.material === material
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-foreground hover:border-primary/50'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Select Color
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => handleColorChange(color)}
                    className={`px-4 py-2 rounded-lg border transition-all text-sm font-medium ${
                      customization.color === color
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-foreground hover:border-primary/50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <Button
              type="button"
              onClick={() => setStep(2)}
              disabled={!customization.material || !customization.color}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Next: Dimensions
            </Button>
          </div>
        )}

        {/* Step 2: Dimensions */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in-50">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Standard Dimensions</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Provide custom dimensions or leave blank for standard size
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['length', 'width', 'height'].map((dimension) => (
                <div key={dimension}>
                  <label className="block text-sm font-medium text-foreground mb-2 capitalize">
                    {dimension} (cm)
                  </label>
                  <input
                    type="number"
                    placeholder="—"
                    onChange={(e) =>
                      handleDimensionChange(
                        dimension as 'length' | 'width' | 'height',
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 border-border"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Next: Review
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in-50">
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Material:</span>
                <span className="font-medium text-foreground">{customization.material}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3">
                <span className="text-sm text-muted-foreground">Color:</span>
                <span className="font-medium text-foreground">{customization.color}</span>
              </div>
              {Object.values(customization.dimensions).some((v) => v) && (
                <div className="flex justify-between border-t border-border pt-3">
                  <span className="text-sm text-muted-foreground">Custom Dimensions:</span>
                  <span className="font-medium text-foreground text-right text-sm">
                    {Object.entries(customization.dimensions)
                      .filter(([, v]) => v)
                      .map(([k, v]) => `${k}: ${v}cm`)
                      .join(', ')}
                  </span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                value={customization.notes}
                onChange={(e) =>
                  setCustomization({ ...customization, notes: e.target.value })
                }
                placeholder="Any additional details or preferences..."
                maxLength={500}
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 border border-border rounded-lg text-foreground hover:bg-muted"
                >
                  −
                </button>
                <span className="font-medium text-foreground min-w-12 text-center">
                  {customization.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 border border-border rounded-lg text-foreground hover:bg-muted"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground">Base Price × {customization.quantity}:</span>
                <span className="font-medium text-foreground">
                  ETB {(basePricePerUnit * customization.quantity).toLocaleString()}
                </span>
              </div>
              {customization.material && (
                <div className="flex justify-between text-sm border-t border-border pt-2">
                  <span className="text-foreground">Customization Fee:</span>
                  <span className="font-medium text-foreground">ETB 500</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold border-t border-border pt-3">
                <span className="text-foreground">Total:</span>
                <span className="text-primary">ETB {calculatePrice().toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Estimated Completion:</span> {estimatedDays}{' '}
                days from order confirmation
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 border-border"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request Custom Order
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
