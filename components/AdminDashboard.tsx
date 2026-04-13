'use client'

import React, { useState } from 'react'
import { TrendingUp, Users, Package, DollarSign, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('analytics')

  // KPI Cards Data
  const kpis = [
    { label: 'Total Users', value: '15,234', change: '+12%', icon: Users },
    { label: 'Active Products', value: '8,456', change: '+8%', icon: Package },
    { label: 'Orders Today', value: '342', change: '+23%', icon: TrendingUp },
    { label: 'Revenue (MTD)', value: 'ETB 2,145,600', change: '+15%', icon: DollarSign },
    { label: 'Verification Backlog', value: '87', change: '-5%', icon: Clock },
    { label: 'Support Tickets', value: '24', change: '+3', icon: AlertCircle },
  ]

  const salesData = [
    { period: '7 days', value: 450000 },
    { period: '30 days', value: 2145600 },
    { period: '90 days', value: 5234000 },
  ]

  const recentOrders = [
    { id: '#ORD-001234', customer: 'John Doe', amount: 7302.50, status: 'delivered', date: '2 hours ago' },
    { id: '#ORD-001233', customer: 'Jane Smith', amount: 5450, status: 'shipped', date: '5 hours ago' },
    { id: '#ORD-001232', customer: 'Ahmed Hassan', amount: 3200, status: 'processing', date: '1 day ago' },
    { id: '#ORD-001231', customer: 'Almaz Tekle', amount: 8900, status: 'delivered', date: '2 days ago' },
  ]

  const topProducts = [
    { name: 'Hand-Woven Basket', views: 12400, orders: 345, revenue: 983250 },
    { name: 'Coffee Roaster', views: 8900, orders: 254, revenue: 889000 },
    { name: 'Leather Bag', views: 6200, orders: 128, revenue: 448000 },
    { name: 'Ceramic Pot', views: 5600, orders: 92, revenue: 276000 },
  ]

  const pendingVerifications = [
    { id: 'SAMPLE-001', artisan: 'Abeba Tekle', product: 'Leather Messenger Bag', submittedDays: 3 },
    { id: 'SAMPLE-002', artisan: 'Girma Assefa', product: 'Coffee Roaster', submittedDays: 2 },
    { id: 'SAMPLE-003', artisan: 'Meaza Getnet', product: 'Woven Shawl', submittedDays: 5 },
  ]

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="border-b border-border bg-white sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Platform analytics and management</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {kpis.map(({ label, value, change, icon: Icon }) => (
            <div key={label} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
                  <p className={`text-sm mt-2 ${change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                    {change} vs last period
                  </p>
                </div>
                <Icon className="w-8 h-8 text-primary/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-border flex gap-8">
          {[
            { id: 'analytics', label: 'Analytics' },
            { id: 'orders', label: 'Recent Orders' },
            { id: 'products', label: 'Top Products' },
            { id: 'verification', label: 'Pending Verifications' },
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
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sales Trend Chart */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-serif font-bold text-foreground mb-4">Sales Trend</h2>
              <div className="space-y-4">
                {salesData.map((data) => (
                  <div key={data.period}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{data.period}</span>
                      <span className="text-sm font-bold text-primary">ETB {data.value.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(data.value / 5234000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Distribution */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-serif font-bold text-foreground mb-4">Category Distribution</h2>
              <div className="space-y-4">
                {[
                  { name: 'Basketry', percentage: 28 },
                  { name: 'Metalwork', percentage: 22 },
                  { name: 'Leatherwork', percentage: 18 },
                  { name: 'Textiles', percentage: 16 },
                  { name: 'Pottery', percentage: 12 },
                  { name: 'Other', percentage: 4 },
                ].map((category) => (
                  <div key={category.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{category.name}</span>
                      <span className="text-sm font-bold text-primary">{category.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Heatmap */}
            <div className="bg-card border border-border rounded-lg p-6 lg:col-span-2">
              <h2 className="text-lg font-serif font-bold text-foreground mb-4">Order Distribution by Region</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { region: 'Addis Ababa', orders: 1240, color: 'bg-primary/40' },
                  { region: 'Hawassa', orders: 445, color: 'bg-primary/30' },
                  { region: 'Gondar', orders: 234, color: 'bg-primary/20' },
                  { region: 'Dire Dawa', orders: 178, color: 'bg-primary/15' },
                  { region: 'Mekelle', orders: 156, color: 'bg-primary/15' },
                  { region: 'Adama', orders: 134, color: 'bg-primary/10' },
                  { region: 'Other', orders: 89, color: 'bg-muted' },
                ].map((item) => (
                  <div key={item.region} className={`${item.color} rounded-lg p-4 text-center`}>
                    <p className="text-sm font-medium text-foreground">{item.region}</p>
                    <p className="text-lg font-bold text-foreground mt-2">{item.orders}</p>
                    <p className="text-xs text-muted-foreground">orders</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Order</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-primary">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{order.customer}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">ETB {order.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'delivered'
                            ? 'bg-success/10 text-success'
                            : order.status === 'shipped'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-warning/10 text-warning'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Views</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Orders</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {topProducts.map((product) => (
                    <tr key={product.name} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{product.views.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{product.orders}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">ETB {product.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'verification' && (
          <div className="bg-card border border-border rounded-lg">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-serif font-bold text-foreground">Pending Verification Queue</h2>
              <p className="text-sm text-muted-foreground mt-2">{pendingVerifications.length} samples awaiting review</p>
            </div>
            <div className="divide-y divide-border">
              {pendingVerifications.map((item) => (
                <div key={item.id} className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm font-mono text-primary">{item.id}</p>
                      <p className="text-sm font-medium text-foreground mt-1">{item.product}</p>
                      <p className="text-xs text-muted-foreground mt-1">Artisan: {item.artisan}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.submittedDays > 5
                        ? 'bg-destructive/10 text-destructive'
                        : item.submittedDays > 3
                        ? 'bg-warning/10 text-warning'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {item.submittedDays} days ago
                    </span>
                  </div>
                  <Button variant="outline" className="border-border text-xs h-8 mt-3">
                    Review Sample
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
