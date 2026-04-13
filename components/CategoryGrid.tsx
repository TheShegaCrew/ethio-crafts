'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'

const categories = [
  { name: 'Pottery', count: 284, color: 'bg-orange-100' },
  { name: 'Weaving', count: 156, color: 'bg-amber-100' },
  { name: 'Leatherwork', count: 93, color: 'bg-yellow-100' },
  { name: 'Metalwork', count: 67, color: 'bg-yellow-50' },
  { name: 'Basketry', count: 142, color: 'bg-orange-50' },
  { name: 'Jewelry', count: 187, color: 'bg-amber-50' },
  { name: 'Wood Carving', count: 76, color: 'bg-orange-100' },
  { name: 'Textiles', count: 203, color: 'bg-amber-100' },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Browse by Craft
        </h2>
        <p className="text-muted-foreground">
          Explore traditional Ethiopian craftsmanship
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`}>
            <Card className="h-40 sm:h-48 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border overflow-hidden group">
              <div className={`w-full h-full ${category.color} flex flex-col items-center justify-center p-4 group-hover:opacity-90 transition-opacity`}>
                <h3 className="font-serif font-bold text-foreground text-center text-lg sm:text-xl mb-2">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {category.count} products
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
