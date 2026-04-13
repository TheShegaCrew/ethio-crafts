'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ShoppingCart, User, Home, Zap, HelpCircle, LogOut, Settings, Package, DollarSign, CheckCircle, TrendingUp, Users } from 'lucide-react'

export function GlobalNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = [
    {
      name: 'Pottery',
      subcategories: ['Clay Pots', 'Decorative Bowls', 'Water Vessels'],
    },
    {
      name: 'Weaving',
      subcategories: ['Baskets', 'Shawls', 'Textiles'],
    },
    {
      name: 'Leatherwork',
      subcategories: ['Bags', 'Belts', 'Shoes'],
    },
    {
      name: 'Metalwork',
      subcategories: ['Crosses', 'Jewelry', 'Tools'],
    },
    {
      name: 'Basketry',
      subcategories: ['Storage', 'Decorative', 'Functional'],
    },
    {
      name: 'Wood Carving',
      subcategories: ['Furniture', 'Masks', 'Sculptures'],
    },
  ]

  const regions = ['Addis Ababa', 'Hawassa', 'Gondar', 'Dire Dawa', 'Mekelle', 'Adama']

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-serif font-bold text-primary">
              Timbuktu
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 ml-8">
            {/* Mega Menu */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary font-medium transition-colors py-2">
                Shop
              </button>
              <div className="absolute left-0 mt-0 w-96 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <div key={cat.name}>
                      <p className="font-semibold text-foreground mb-2">{cat.name}</p>
                      <ul className="space-y-1">
                        {cat.subcategories.map((sub) => (
                          <li key={sub}>
                            <Link href={`/products?category=${encodeURIComponent(cat.name)}&subcategory=${encodeURIComponent(sub)}`} className="text-sm text-muted-foreground hover:text-primary">
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-foreground mb-2">By Region</p>
                  <div className="grid grid-cols-2 gap-2">
                    {regions.map((region) => (
                      <Link
                        key={region}
                        href={`/products?region=${encodeURIComponent(region)}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {region}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/demo" className="text-foreground hover:text-primary font-medium transition-colors">
              Stories
            </Link>
            <Link href="/demo" className="text-foreground hover:text-primary font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/demo" className="text-foreground hover:text-primary font-medium transition-colors">
              Support
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xs ml-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-border rounded-lg bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 ml-4">
            {/* Cart */}
            <Link href="/cart" className="relative text-foreground hover:text-primary transition-colors p-2" aria-label="Open cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* User Menu */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors p-2">
                <User className="w-5 h-5" />
              </button>
              <div className="absolute right-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/dashboard/customer" className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-b border-border">
                  <User className="w-4 h-4" />
                  My Account
                </Link>
                <Link href="/dashboard/customer" className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-b border-border">
                  <ShoppingCart className="w-4 h-4" />
                  Orders
                </Link>
                <Link href="/dashboard/customer" className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-b border-border">
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-colors">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="hidden md:flex gap-8 py-3 border-t border-border text-sm">
          <div className="flex items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <span className="text-muted-foreground">500+ Verified Artisans</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <span className="text-muted-foreground">Physical Quality Check</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <span className="text-muted-foreground">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <span className="text-muted-foreground">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>

          {categories.map((cat) => (
            <div key={cat.name}>
              <Link href={`/products?category=${encodeURIComponent(cat.name)}`} className="block font-medium text-foreground mb-2">
                {cat.name}
              </Link>
              <ul className="space-y-1 pl-4">
                {cat.subcategories.map((sub) => (
                  <li key={sub}>
                    <Link href={`/products?category=${encodeURIComponent(cat.name)}&subcategory=${encodeURIComponent(sub)}`} className="text-sm text-muted-foreground hover:text-primary">
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <hr className="border-border" />

          <Link href="/demo" className="block font-medium text-foreground">
            Stories
          </Link>
          <Link href="/demo" className="block font-medium text-foreground">
            How It Works
          </Link>
          <Link href="/demo" className="block font-medium text-foreground">
            Support
          </Link>
        </div>
      )}
    </nav>
  )
}

export function DashboardSidebar({ role }: { role: 'artisan' | 'agent' | 'admin' }) {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = {
    artisan: [
      { label: 'Dashboard', icon: Home, href: '/' },
      { label: 'Products', icon: Package, href: '/products' },
      { label: 'Orders', icon: ShoppingCart, href: '/orders' },
      { label: 'Earnings', icon: DollarSign, href: '/earnings' },
      { label: 'Messages', icon: HelpCircle, href: '/messages' },
      { label: 'Settings', icon: Settings, href: '/settings' },
    ],
    agent: [
      { label: 'Dashboard', icon: Home, href: '/' },
      { label: 'Verification Tasks', icon: Zap, href: '/tasks' },
      { label: 'Completed', icon: CheckCircle, href: '/completed' },
      { label: 'Settings', icon: Settings, href: '/settings' },
    ],
    admin: [
      { label: 'Dashboard', icon: Home, href: '/' },
      { label: 'Analytics', icon: TrendingUp, href: '/analytics' },
      { label: 'Orders', icon: ShoppingCart, href: '/orders' },
      { label: 'Users', icon: Users, href: '/users' },
      { label: 'Verification Queue', icon: Zap, href: '/queue' },
      { label: 'Settings', icon: Settings, href: '/settings' },
    ],
  }

  const items = menuItems[role]

  return (
    <aside
      className={`bg-card border-r border-border transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      } min-h-screen fixed left-0 top-0 pt-20`}
    >
      <div className="p-4 space-y-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
            title={collapsed ? item.label : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </Link>
        ))}
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-24 bg-card border border-border rounded-full p-1 hover:bg-muted"
      >
        {collapsed ? '→' : '←'}
      </button>
    </aside>
  )
}
