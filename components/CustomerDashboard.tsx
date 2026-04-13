'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShoppingBag,
  Heart,
  MapPin,
  CreditCard,
  User,
  Bell,
  Star,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Edit2,
  LogOut,
  Eye,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [editingProfile, setEditingProfile] = useState(false)

  const customerStats = {
    totalOrders: { count: 12, icon: ShoppingBag, color: 'text-primary' },
    wishlistItems: { count: 8, icon: Heart, color: 'text-red-500' },
    addressesOnFile: { count: 3, icon: MapPin, color: 'text-blue-600' },
    memberSince: { date: 'Jan 15, 2024', icon: User, color: 'text-primary' },
  }

  const orders = [
    {
      id: 'ORD-2024-005432',
      date: 'Mar 8, 2024',
      status: 'delivered',
      items: 'Hand-Woven Basket x2, Coffee Roaster',
      total: 8500,
      trackingUrl: '/orders/ORD-2024-005432',
      estimatedDelivery: 'Delivered Mar 10',
    },
    {
      id: 'ORD-2024-004891',
      date: 'Feb 28, 2024',
      status: 'in-transit',
      items: 'Leather Messenger Bag',
      total: 4200,
      trackingUrl: '/orders/ORD-2024-004891',
      estimatedDelivery: 'Arrives Mar 15',
    },
    {
      id: 'ORD-2024-003221',
      date: 'Feb 15, 2024',
      status: 'delivered',
      items: 'Traditional Coffee Grinder',
      total: 3500,
      trackingUrl: '/orders/ORD-2024-003221',
      estimatedDelivery: 'Delivered Feb 18',
    },
    {
      id: 'ORD-2024-002156',
      date: 'Feb 1, 2024',
      status: 'delivered',
      items: 'Ceramic Plates Set (6pc)',
      total: 5600,
      trackingUrl: '/orders/ORD-2024-002156',
      estimatedDelivery: 'Delivered Feb 4',
    },
  ]

  const wishlist = [
    {
      id: 1,
      name: 'Hand-Painted Ethiopian Cross',
      artisan: 'Abebe Crafts',
      price: 2800,
      image: '/api/placeholder/150/150',
      inStock: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Woven Table Runner',
      artisan: 'Tigray Textiles',
      price: 1800,
      image: '/api/placeholder/150/150',
      inStock: true,
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Leather Journal Handbound',
      artisan: 'Addis Leather Works',
      price: 2200,
      image: '/api/placeholder/150/150',
      inStock: false,
      rating: 4.9,
    },
  ]

  const reviews = [
    {
      id: 1,
      product: 'Hand-Woven Basket',
      artisan: 'Gete Basket Company',
      rating: 5,
      date: 'Mar 8, 2024',
      content: 'Excellent quality! Exactly as pictured. Very satisfied with purchase.',
      verified: true,
    },
    {
      id: 2,
      product: 'Traditional Coffee Roaster',
      artisan: 'Ethiopian Coffee Masters',
      rating: 5,
      date: 'Feb 18, 2024',
      content: 'Beautiful craftsmanship. Been using daily and loving it.',
      verified: true,
    },
    {
      id: 3,
      product: 'Ceramic Plates Set',
      artisan: 'Harar Ceramics',
      rating: 4,
      date: 'Feb 5, 2024',
      content: 'Great set, one small chip on arrival but seller was responsive.',
      verified: true,
    },
  ]

  const savedAddresses = [
    {
      id: 1,
      label: 'Home',
      address: '123 Main Street, Addis Ababa, 1000',
      phone: '+251-900-123456',
      isDefault: true,
    },
    {
      id: 2,
      label: 'Office',
      address: '456 Business Ave, Addis Ababa, 1100',
      phone: '+251-900-654321',
      isDefault: false,
    },
    {
      id: 3,
      label: 'Weekday Place',
      address: '789 Market Street, Hawassa, 5000',
      phone: '+251-900-999888',
      isDefault: false,
    },
  ]

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      lastFour: '4242',
      brand: 'Visa',
      expiry: '12/25',
      isDefault: true,
    },
    {
      id: 2,
      type: 'card',
      lastFour: '5555',
      brand: 'Mastercard',
      expiry: '08/26',
      isDefault: false,
    },
    {
      id: 3,
      type: 'mobile',
      provider: 'Chapa',
      phone: '+251-900-123456',
      isDefault: false,
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
      delivered: {
        bg: 'bg-green-50',
        text: 'text-green-700',
        icon: <CheckCircle className="h-4 w-4" />,
      },
      'in-transit': {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        icon: <Package className="h-4 w-4" />,
      },
      pending: {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        icon: <Clock className="h-4 w-4" />,
      },
    }
    return statusConfig[status] || statusConfig.pending
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="border-b border-border bg-white sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground">My Account</h1>
              <p className="mt-1 text-sm text-muted-foreground">Manage orders, addresses, and preferences</p>
            </div>
            <Button variant="outline" className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[customerStats.totalOrders, customerStats.wishlistItems, customerStats.addressesOnFile, customerStats.memberSince].map((stat, idx) => {
            const Icon = stat.icon as any
            return (
              <div key={idx} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground capitalize">
                      {idx === 0 ? 'Total Orders' : idx === 1 ? 'Wishlist Items' : idx === 2 ? 'Saved Addresses' : 'Member Since'}
                    </p>
                    <p className="mt-2 text-2xl font-bold font-serif text-foreground">
                      {stat.count || stat.date}
                    </p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: ShoppingBag },
              { id: 'orders', label: 'Orders', icon: Package },
              { id: 'wishlist', label: 'Wishlist', icon: Heart },
              { id: 'reviews', label: 'Reviews', icon: Star },
              { id: 'addresses', label: 'Addresses', icon: MapPin },
              { id: 'payment', label: 'Payment Methods', icon: CreditCard },
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'notifications', label: 'Notifications', icon: Bell },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 border-b-2 px-4 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Recent Orders</h2>
              <div className="space-y-3">
                {orders.slice(0, 2).map((order) => {
                  const statusConfig = getStatusBadge(order.status)
                  return (
                    <div key={order.id} className="rounded-lg border border-border bg-white p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-mono font-semibold text-primary">{order.id}</span>
                            <span className={`rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 ${statusConfig.bg} ${statusConfig.text}`}>
                              {statusConfig.icon}
                              {order.status === 'delivered' ? 'Delivered' : 'In Transit'}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{order.items}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{order.estimatedDelivery}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-foreground">{order.total} ETB</p>
                          <Button asChild variant="outline" size="sm" className="mt-2 gap-2">
                            <Link href={order.trackingUrl}>
                            <Eye className="h-3 w-3" />
                            View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Button variant="outline" className="mt-4 w-full gap-2">
                View All Orders
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Wishlist Highlights</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {wishlist.map((item) => (
                  <div key={item.id} className="rounded-lg border border-border bg-white p-4 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative mb-4">
                      <Image src={item.image} alt={item.name} width={300} height={128} className="h-32 w-full object-cover rounded" />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/40 rounded flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.artisan}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-primary font-bold">{item.price} ETB</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs text-muted-foreground">{item.rating}</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-3 w-full bg-primary hover:bg-primary/90">
                      View Product
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">Order History</h2>
            <div className="space-y-3">
              {orders.map((order) => {
                const statusConfig = getStatusBadge(order.status)
                return (
                  <div key={order.id} className="rounded-lg border border-border bg-white p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono font-semibold text-primary">{order.id}</span>
                          <span className="text-xs text-muted-foreground">{order.date}</span>
                          <span className={`rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 ${statusConfig.bg} ${statusConfig.text}`}>
                            {statusConfig.icon}
                            {order.status === 'delivered' ? 'Delivered' : 'In Transit'}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{order.items}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{order.estimatedDelivery}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">{order.total} ETB</p>
                        <Button asChild variant="outline" size="sm" className="mt-2">
                          <Link href={order.trackingUrl}>
                          Track
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === 'wishlist' && (
          <div>
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">My Wishlist</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {wishlist.map((item) => (
                <div key={item.id} className="rounded-lg border border-border bg-white p-4 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative mb-4">
                    <Image src={item.image} alt={item.name} width={300} height={160} className="h-40 w-full object-cover rounded" />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/40 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.artisan}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">{item.price} ETB</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 w-full bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="outline" className="mt-2 w-full">
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif font-bold text-foreground">My Reviews</h2>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                Write Review
              </Button>
            </div>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="rounded-lg border border-border bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{review.product}</h3>
                      <p className="text-sm text-muted-foreground">by {review.artisan}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                        {review.verified && (
                          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                            <CheckCircle className="h-3 w-3" />
                            Verified Purchase
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === 'addresses' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif font-bold text-foreground">Saved Addresses</h2>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                Add Address
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {savedAddresses.map((address) => (
                <div key={address.id} className="rounded-lg border border-border bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{address.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{address.address}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{address.phone}</p>
                      {address.isDefault && (
                        <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Default Address
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 gap-1">
                      <Edit2 className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Methods Tab */}
        {activeTab === 'payment' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif font-bold text-foreground">Payment Methods</h2>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                Add Payment Method
              </Button>
            </div>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="rounded-lg border border-border bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">
                          {method.type === 'card'
                            ? `${method.brand} •••• ${method.lastFour}`
                            : `${method.provider} - ${method.phone}`}
                        </h3>
                      </div>
                      {method.type === 'card' && (
                        <p className="mt-1 text-sm text-muted-foreground">Expires {method.expiry}</p>
                      )}
                      {method.isDefault && (
                        <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Default Method
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 gap-1">
                      <Edit2 className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div>
            <h2 className="text-xl font-serif font-bold text-foreground mb-6">Personal Information</h2>
            <div className="max-w-2xl space-y-6">
              <div className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">Abeba Getnet</h3>
                    <p className="mt-1 text-sm text-muted-foreground">abeba.getnet@example.com</p>
                    <p className="text-sm text-muted-foreground">+251-900-123456</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => setEditingProfile(!editingProfile)}
                  >
                    <Edit2 className="h-4 w-4" />
                    {editingProfile ? 'Cancel' : 'Edit'}
                  </Button>
                </div>
              </div>

              {editingProfile && (
                <div className="rounded-lg border border-border bg-white p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Abeba Getnet"
                      className="mt-1 block w-full rounded border border-border px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      defaultValue="abeba.getnet@example.com"
                      className="mt-1 block w-full rounded border border-border px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+251-900-123456"
                      className="mt-1 block w-full rounded border border-border px-3 py-2 text-sm"
                    />
                  </div>
                  <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                    Save Changes
                  </Button>
                </div>
              )}

              <div className="rounded-lg border border-border bg-white p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Preferences</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-foreground">Email me about new products and special offers</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-foreground">Notify me when items in my wishlist go on sale</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-foreground">Send SMS notifications for order updates</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div>
            <h2 className="text-xl font-serif font-bold text-foreground mb-6">Notification Settings</h2>
            <div className="max-w-2xl space-y-4">
              {[
                { title: 'Order Updates', description: 'Get notified about order status changes' },
                { title: 'Wishlist', description: 'Notifications when wishlist items are back in stock' },
                { title: 'New Arrivals', description: 'Weekly digest of new handcrafts added' },
                { title: 'Promotions', description: 'Special offers and discount codes' },
                { title: 'Messages', description: 'Important messages from Ethio Crafts support' },
              ].map((notif, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-white p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{notif.title}</h3>
                    <p className="text-sm text-muted-foreground">{notif.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
