'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const stories = [
  {
    title: 'The Art of Ethiopian Weaving',
    excerpt: 'Discover how traditional techniques passed down for generations create the vibrant textiles you see today.',
    region: 'Addis Ababa',
  },
  {
    title: 'Basketry: Fibers of Heritage',
    excerpt: 'Explore the intricate patterns and symbolism woven into every hand-crafted Ethiopian basket.',
    region: 'Gondar',
  },
  {
    title: 'Leather Craftsmanship',
    excerpt: 'Learn about the skill and dedication of artisans who transform raw materials into functional art.',
    region: 'Dire Dawa',
  },
]

export function CulturalStories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Cultural Stories
        </h2>
        <p className="text-muted-foreground">
          Behind every craft is a rich tradition and a master artisan
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, idx) => (
          <Card
            key={idx}
            className="border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
          >
            {/* Image placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center border-b border-border">
              <span className="text-sm text-muted-foreground">Story Image</span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">
                {story.region}
              </p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {story.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {story.excerpt}
              </p>
              <Button
                variant="ghost"
                className="justify-start p-0 text-primary hover:text-primary hover:bg-transparent"
              >
                Read Story
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
