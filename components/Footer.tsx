'use client'

import Link from 'next/link'
import { Mail, Instagram, Facebook, Smartphone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t border-border bg-stone-200 mt-16 sm:mt-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Newsletter */}
        {/* <div className="mb-12 pb-12 border-b border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            Stay Connected
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Get updates on new collections, cultural stories, and artisan spotlights.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-background border-border"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
              Subscribe
            </Button>
          </div>
        </div> */}

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Shop */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  On Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/checkout" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Artisan Network
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Impact Report
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-serif text-lg font-bold text-foreground">Ethio Crafts</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <Link
                href="/demo"
                className="p-2 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="p-2 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="p-2 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Mobile app"
              >
                <Smartphone className="h-5 w-5" />
              </Link>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold">Accepted:</span>
              <span className="font-medium">TeleBirr</span>
              <span>•</span>
              <span className="font-medium">Chapa</span>
              <span>•</span>
              <span className="font-medium">Card</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Ethio Crafts. All rights reserved. Supporting Ethiopian artisans.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
