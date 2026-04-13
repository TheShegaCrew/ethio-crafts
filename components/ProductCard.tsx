'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  category: string
  region: string
  rating: number
  reviews: number
  verified: boolean
  inStock: boolean
}

export function ProductCard({
  id,
  title,
  price,
  image,
  category,
  region,
  rating,
  reviews,
  verified,
  inStock,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <Card className="group overflow-hidden border-border transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
        {/* Placeholder image - in production would be real image */}
        <div className="w-full h-full bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          <span className="text-xs text-muted-foreground text-center px-4">Product Image</span>
        </div>

        {/* Overlay badges and actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Top badges */}
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
          {verified && (
            <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              ✓ Verified
            </div>
          )}
          {!inStock && (
            <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Out of Stock
            </div>
          )}
        </div>

        {/* Hover actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full h-10 w-10 p-0 flex items-center justify-center"
            title="Quick view"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90"
            disabled={!inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>

        {/* Wishlist button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute bottom-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={isWishlisted}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-foreground'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        <Link href={`/product/${id}`} className="group/link">
          <h3 className="text-sm sm:text-base font-semibold text-foreground line-clamp-2 group-hover/link:text-primary transition-colors mb-1">
            {title}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground mb-3">
          <span className="font-medium">{region}</span> • {category}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs">
                {i < Math.floor(rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price and CTA */}
        <div className="mt-auto">
          <div className="text-lg sm:text-xl font-bold text-primary mb-3">
            {price.toLocaleString('en-ET', { style: 'currency', currency: 'ETB' })}
          </div>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={!inStock}
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </Card>
  )
}
