'use client'

import { ProductCard } from '@/components/ProductCard'

const featuredProducts = [
  {
    id: '1',
    title: 'Hand-Woven Habesha Basket',
    price: 2500,
    image: '/images/basket.jpg',
    category: 'Basketry',
    region: 'Addis Ababa',
    rating: 4.8,
    reviews: 24,
    verified: true,
    inStock: true,
  },
  {
    id: '2',
    title: 'Traditional Clay Water Pot',
    price: 1200,
    image: '/images/pottery.jpg',
    category: 'Pottery',
    region: 'Hawassa',
    rating: 4.9,
    reviews: 18,
    verified: true,
    inStock: true,
  },
  {
    id: '3',
    title: 'Artisanal Leather Journal',
    price: 1800,
    image: '/images/leather.jpg',
    category: 'Leatherwork',
    region: 'Dire Dawa',
    rating: 4.7,
    reviews: 31,
    verified: true,
    inStock: true,
  },
  {
    id: '4',
    title: 'Hand-Painted Wooden Box',
    price: 950,
    image: '/images/wood.jpg',
    category: 'Wood Carving',
    region: 'Gondar',
    rating: 4.6,
    reviews: 15,
    verified: true,
    inStock: false,
  },
  {
    id: '5',
    title: 'Woven Cotton Shawl',
    price: 3200,
    image: '/images/textile.jpg',
    category: 'Textiles',
    region: 'Mekelle',
    rating: 5.0,
    reviews: 42,
    verified: true,
    inStock: true,
  },
  {
    id: '6',
    title: 'Ethiopian Brass Candle Holder',
    price: 1600,
    image: '/images/brass.jpg',
    category: 'Metalwork',
    region: 'Addis Ababa',
    rating: 4.8,
    reviews: 19,
    verified: true,
    inStock: true,
  },
  {
    id: '7',
    title: 'Handmade Beaded Necklace',
    price: 2100,
    image: '/images/jewelry.jpg',
    category: 'Jewelry',
    region: 'Addis Ababa',
    rating: 4.9,
    reviews: 28,
    verified: true,
    inStock: true,
  },
  {
    id: '8',
    title: 'Traditional Prayer Carpet',
    price: 2800,
    image: '/images/carpet.jpg',
    category: 'Weaving',
    region: 'Axum',
    rating: 4.7,
    reviews: 22,
    verified: true,
    inStock: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Featured Pieces
        </h2>
        <p className="text-muted-foreground">
          Handpicked authentic crafts from our verified artisan network
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
