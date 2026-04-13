'use client'

import React, { useState } from 'react'
import { Plus, Package, ShoppingBag, DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ArtisanDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  type DashboardStat = {
    key: string
    title: string
    value: string
    subtitle: string
    icon: React.ElementType
    valueClassName?: string
  }

  const stats: DashboardStat[] = [
    {
      key: 'totalProducts',
      title: 'Total Products',
      value: '24',
      subtitle: '21 approved, 3 pending',
      icon: Package,
    },
    {
      key: 'activeOrders',
      title: 'Active Orders',
      value: '8',
      subtitle: '3 shipped, 5 processing',
      icon: ShoppingBag,
    },
    {
      key: 'totalEarnings',
      title: 'Total Earnings',
      value: 'ETB 125,750',
      subtitle: 'This month: ETB 45,200',
      icon: DollarSign,
      valueClassName: 'text-primary',
    },
    {
      key: 'verificationStatus',
      title: 'Verification Status',
      value: 'Verified',
      subtitle: 'Level: Gold',
      icon: CheckCircle,
      valueClassName: 'text-success',
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'order',
      title: 'New Order Received',
      description: 'Order #ORD-2024-001234: Hand-Woven Basket x2',
      date: '2 hours ago',
      status: 'new',
    },
    {
      id: 2,
      type: 'verification',
      title: 'Sample Approved',
      description: 'Traditional Coffee Roaster approved for publishing',
      date: '1 day ago',
      status: 'success',
    },
    {
      id: 3,
      type: 'review',
      title: 'New Review',
      description: '5-star review on Hand-Woven Basket',
      date: '3 days ago',
      status: 'success',
    },
    {
      id: 4,
      type: 'verification',
      title: 'Verification Requested',
      description: 'Please submit sample for: Leather Work',
      date: '5 days ago',
      status: 'pending',
    },
  ]

  const products = [
    {
      id: 1,
      name: 'Hand-Woven Ethiopian Basket',
      status: 'approved',
      views: 1240,
      orders: 45,
      revenue: 128250,
      lastUpdated: 'Feb 15',
    },
    {
      id: 2,
      name: 'Traditional Coffee Roaster',
      status: 'approved',
      views: 890,
      orders: 28,
      revenue: 98000,
      lastUpdated: 'Feb 10',
    },
    {
      id: 3,
      name: 'Leather Messenger Bag',
      status: 'pending',
      views: 0,
      orders: 0,
      revenue: 0,
      lastUpdated: 'Feb 20',
    },
  ]

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="border-b border-border bg-white sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground">Artisan Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, Abeba!</p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Submit New Sample
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.key} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className={`text-3xl font-bold mt-2 ${stat.valueClassName ?? 'text-foreground'}`}>{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">{stat.subtitle}</p>
                </div>
                <stat.icon className="w-8 h-8 text-primary/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-border flex gap-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'products', label: 'Products' },
            { id: 'orders', label: 'Orders' },
            { id: 'settings', label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary -mb-px'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-lg font-serif font-bold text-foreground mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="shrink-0 pt-1">
                        {activity.status === 'success' && (
                          <CheckCircle className="w-5 h-5 text-success" />
                        )}
                        {activity.status === 'pending' && (
                          <Clock className="w-5 h-5 text-warning" />
                        )}
                        {activity.status === 'new' && (
                          <AlertCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="grow">
                        <p className="font-medium text-foreground">{activity.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-serif font-bold text-foreground">Quick Actions</h3>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Submit New Sample
                </Button>
                <Button variant="outline" className="w-full border-border justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  View All Products
                </Button>
                <Button variant="outline" className="w-full border-border justify-start">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Manage Orders
                </Button>
                <Button variant="outline" className="w-full border-border justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  View Earnings
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Views</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Orders</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Revenue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{product.name}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          product.status === 'approved'
                            ? 'bg-success/10 text-success'
                            : 'bg-warning/10 text-warning'
                        }`}>
                          {product.status === 'approved' ? 'Published' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">{product.views}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{product.orders}</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">ETB {product.revenue.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm">
                        <Button variant="outline" className="border-border text-xs h-8">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-serif font-bold text-foreground mb-4">Recent Orders</h2>
            <p className="text-muted-foreground">Order management interface coming soon</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-serif font-bold text-foreground mb-4">Settings</h2>
            <p className="text-muted-foreground">Account settings interface coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}
