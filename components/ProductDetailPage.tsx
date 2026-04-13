'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Share2, MessageCircle, Star, Truck, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductDetailPageProps {
  productId?: string
}

export default function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [isSaved, setIsSaved] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  // Mock data - replace with real API
  const product = {
    id: productId || '1',
    title: 'Hand-Woven Ethiopian Basket with Intricate Geometric Patterns',
    price: 2850,
    rating: 4.8,
    reviews: 247,
    stock: 5,
    region: 'Addis Ababa',
    material: 'Woven Straw, Natural Dyes',
    dimensions: '35cm diameter × 20cm height',
    productionTime: '7-14 days',
    careInstructions: 'Hand wash, air dry in shade, avoid direct sunlight',
    description: `This exquisite hand-woven basket represents the finest traditions of Ethiopian basketry. Each piece is meticulously crafted by skilled artisans using sustainable straw materials and natural dyes. The geometric patterns tell stories of Ethiopian heritage and cultural significance.

The basket is perfect for storage, decoration, or gift-giving. Its sturdy construction ensures years of use while maintaining its beautiful appearance.`,
    culturalSignificance: `Ethiopian basketwork is one of the oldest crafts in Africa, with techniques passed down through generations. These baskets hold deep cultural meaning and were traditionally used in ceremonies and daily life. The geometric patterns represent protection symbols and stories from Ethiopian folklore.`,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800',
    ],
    verificationDate: '2024-02-15',
    agentId: 'AG-2847',
  }

  const handleAddToCart = () => {
    // TODO: wire up cart action.
  }

  const handleQuantityChange = (delta: number) => {
    const newQty = quantity + delta
    if (newQty >= 1 && newQty <= product.stock) {
      setQuantity(newQty)
    }
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex text-sm">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/products" className="text-primary hover:underline">Shop</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/products?category=basketry" className="text-primary hover:underline">Basketry</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.title.substring(0, 40)}...</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Media Gallery (60%) */}
          <div className="lg:col-span-2">
            {/* Primary Image */}
            <div className="mb-4 bg-card rounded-lg overflow-hidden aspect-square flex items-center justify-center border border-border">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={800}
                height={800}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className="shrink-0 w-20 h-20 rounded-lg border-2 border-border hover:border-primary bg-card overflow-hidden"
                >
                  <Image src={img} alt={`View ${idx + 1}`} width={80} height={80} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* 3D View Button */}
            <Button className="w-full mb-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <Zap className="w-4 h-4 mr-2" />
              View in 3D
            </Button>

            {/* Trust Badges */}
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-success  hrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Physically Verified by Agent</p>
                  <p className="text-sm text-muted-foreground">Inspected on {product.verificationDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <p className="font-medium text-foreground">Authentic Ethiopian Craft</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <p className="font-medium text-foreground">Quality Inspected</p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info (40%) */}
          <div className="sticky top-20 h-fit">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-primary text-primary'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-4xl font-bold text-primary mb-4">
              ETB {product.price.toLocaleString()}
            </p>

            {/* Stock Status */}
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 ${
              product.stock > 5 ? 'bg-success/20 text-success' :
              product.stock > 0 ? 'bg-warning/20 text-warning' :
              'bg-destructive/20 text-destructive'
            }`}>
              {product.stock > 5 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
            </div>

            {/* Specifications */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Region of Origin:</span>
                <span className="font-medium text-foreground">{product.region}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3">
                <span className="text-muted-foreground">Material:</span>
                <span className="font-medium text-foreground">{product.material}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3">
                <span className="text-muted-foreground">Dimensions:</span>
                <span className="font-medium text-foreground">{product.dimensions}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3">
                <span className="text-muted-foreground">Production Time:</span>
                <span className="font-medium text-foreground">{product.productionTime}</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-foreground">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 text-foreground hover:bg-muted"
                >
                  −
                </button>
                <span className="px-4 py-2 font-medium text-foreground border-l border-r border-border">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 text-foreground hover:bg-muted"
                >
                  +
                </button>
              </div>
            </div>

            {/* Primary Action */}
            <Button
              onClick={handleAddToCart}
              className="w-full mb-3 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
              disabled={product.stock === 0}
            >
              Add to Cart
            </Button>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button
                variant="outline"
                onClick={() => setIsSaved(!isSaved)}
                className="border-border"
              >
                <Heart className={`w-4 h-4 mr-2 ${isSaved ? 'fill-primary text-primary' : ''}`} />
                Save
              </Button>
              <Button variant="outline" className="border-border">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground mb-2 font-medium">Why Buy with Confidence?</p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success shrink-0" />
                  Direct from verified artisans
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-success shrink-0" />
                  Free shipping on orders over ETB 2000
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success shrink-0" />
                  14-day returns guarantee
                </li>
              </ul>
            </div>

            {/* Contact Support */}
            <Button variant="outline" className="w-full border-border">
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask a Question
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex gap-8 mb-6 border-b border-border">
            {['description', 'cultural', 'reviews', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary -mb-px'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab === 'description' && 'Description'}
                {tab === 'cultural' && 'Cultural Significance'}
                {tab === 'reviews' && 'Reviews'}
                {tab === 'shipping' && 'Shipping & Returns'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'description' && (
              <div className="prose prose-sm max-w-none">
                <p className="text-foreground whitespace-pre-line">{product.description}</p>
              </div>
            )}

            {activeTab === 'cultural' && (
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground whitespace-pre-line">{product.culturalSignificance}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-foreground font-medium mb-4">Customer Reviews (247 verified purchases)</p>
                  {/* Reviews would be mapped here */}
                  <p className="text-muted-foreground text-sm">Review section coming soon</p>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Shipping</h3>
                  <p className="text-muted-foreground text-sm">Standard delivery: 3-5 business days | Express: 1-2 business days</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h3 className="font-medium text-foreground mb-2">Returns</h3>
                  <p className="text-muted-foreground text-sm">14-day return policy. Items must be in original condition. Free returns for defective items.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h3 className="font-medium text-foreground mb-2">Care Instructions</h3>
                  <p className="text-muted-foreground text-sm">{product.careInstructions}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
