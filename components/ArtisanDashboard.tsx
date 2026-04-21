'use client'

import React, { useState } from 'react'
import { Plus, Package, ShoppingBag, DollarSign, CheckCircle, Clock, AlertCircle, MapPin, CreditCard, ClipboardList } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ArtisanDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showSampleForm, setShowSampleForm] = useState(false)
  const [sampleForm, setSampleForm] = useState({
    productName: '',
    category: '',
    materials: '',
    dimensions: '',
    productionTime: '',
    culturalContext: '',
    careInstructions: '',
    description: '',
    photos: null as FileList | null,
    videos: null as FileList | null,
  })

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

  const sampleSubmissions = [
    {
      id: 'SMP-2026-001',
      itemName: 'Hand-Carved Serving Tray',
      media: '4 photos, 1 video',
      category: 'Wood Craft',
      submittedAt: 'Apr 19, 2026',
      status: 'pending',
    },
    {
      id: 'SMP-2026-002',
      itemName: 'Traditional Coffee Pot',
      media: '3 photos',
      category: 'Ceramics',
      submittedAt: 'Apr 17, 2026',
      status: 'approved',
    },
  ]

  const bankDetails = {
    accountName: 'Abeba Handmade Studio',
    bankName: 'Commercial Bank of Ethiopia',
    accountNumber: '1000 2345 6789',
    branch: 'Piassa Branch',
    payoutFrequency: 'Weekly',
  }

  const locationDetails = {
    workshopName: 'Abeba Workshop',
    city: 'Addis Ababa',
    subCity: 'Bole',
    area: 'Kazanchis',
    addressLine: 'House 112, Road 08',
    landmark: 'Near Friendship Park',
  }

  const handleSampleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, files } = event.target as HTMLInputElement
    if (name === 'photos' || name === 'videos') {
      setSampleForm((prev) => ({
        ...prev,
        [name]: files ?? null,
      }))
      return
    }

    setSampleForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSampleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Replace with API integration for sample submission.
    console.log('Sample submission payload:', sampleForm)
    setShowSampleForm(false)
  }

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
            <Button
              onClick={() => {
                setActiveTab('onboarding')
                setShowSampleForm(true)
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
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
            { id: 'onboarding', label: 'Onboarding' },
            { id: 'sampleStatus', label: 'Sample Status' },
            { id: 'payments', label: 'Payments' },
            { id: 'location', label: 'Location' },
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
                <Button
                  onClick={() => {
                    setActiveTab('onboarding')
                    setShowSampleForm(true)
                  }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 justify-start"
                >
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

        {activeTab === 'onboarding' && (
          <div className="bg-card border border-border rounded-lg p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-serif font-bold text-foreground">Sample Submission</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Submit photos/videos with metadata and a product description for verification.
                </p>
              </div>
              <Button
                onClick={() => setShowSampleForm(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Submit New Sample
              </Button>
            </div>

            {!showSampleForm && (
              <div className="border border-dashed border-border rounded-lg p-8 text-center">
                <p className="text-foreground font-medium">No active sample form</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click &quot;Submit New Sample&quot; to open the submission form.
                </p>
              </div>
            )}

            {showSampleForm && (
              <form onSubmit={handleSampleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="productName" className="text-sm font-medium text-foreground">
                    Product Name
                  </label>
                  <input
                    id="productName"
                    name="productName"
                    value={sampleForm.productName}
                    onChange={handleSampleFormChange}
                    placeholder="e.g. Hand-Carved Serving Tray"
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="text-sm font-medium text-foreground">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={sampleForm.category}
                    onChange={handleSampleFormChange}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="wood-craft">Wood Craft</option>
                    <option value="ceramics">Ceramics</option>
                    <option value="textile">Textile</option>
                    <option value="leather">Leather</option>
                    <option value="metal">Metal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="materials" className="text-sm font-medium text-foreground">
                    Materials
                  </label>
                  <input
                    id="materials"
                    name="materials"
                    value={sampleForm.materials}
                    onChange={handleSampleFormChange}
                    placeholder="e.g. Teak wood, natural oil finish"
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dimensions" className="text-sm font-medium text-foreground">
                    Dimensions
                  </label>
                  <input
                    id="dimensions"
                    name="dimensions"
                    value={sampleForm.dimensions}
                    onChange={handleSampleFormChange}
                    placeholder="e.g. 40cm x 25cm x 4cm"
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="productionTime" className="text-sm font-medium text-foreground">
                    Production Time
                  </label>
                  <input
                    id="productionTime"
                    name="productionTime"
                    value={sampleForm.productionTime}
                    onChange={handleSampleFormChange}
                    placeholder="e.g. 2-3 days per piece"
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="photos" className="text-sm font-medium text-foreground">
                    Upload Photos
                  </label>
                  <input
                    id="photos"
                    name="photos"
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    multiple
                    onChange={handleSampleFormChange}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-2">Minimum 3 clear images (JPG, PNG, WEBP).</p>
                </div>
                <div>
                  <label htmlFor="videos" className="text-sm font-medium text-foreground">
                    Upload Videos (Optional)
                  </label>
                  <input
                    id="videos"
                    name="videos"
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    multiple
                    onChange={handleSampleFormChange}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Show usage process or craftsmanship detail.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="description" className="text-sm font-medium text-foreground">
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={sampleForm.description}
                    onChange={handleSampleFormChange}
                    rows={4}
                    placeholder="Describe design, function, and unique selling points."
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="culturalContext" className="text-sm font-medium text-foreground">
                    Cultural Context
                  </label>
                  <textarea
                    id="culturalContext"
                    name="culturalContext"
                    value={sampleForm.culturalContext}
                    onChange={handleSampleFormChange}
                    rows={3}
                    placeholder="Add story, origin, and cultural significance."
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="careInstructions" className="text-sm font-medium text-foreground">
                    Care Instructions
                  </label>
                  <textarea
                    id="careInstructions"
                    name="careInstructions"
                    value={sampleForm.careInstructions}
                    onChange={handleSampleFormChange}
                    rows={3}
                    placeholder="Explain cleaning, storage, and handling guidance."
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-border pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="border-border"
                  onClick={() => setShowSampleForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit for Review
                </Button>
              </div>
              </form>
            )}
          </div>
        )}

        {activeTab === 'sampleStatus' && (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h2 className="text-lg font-serif font-bold text-foreground">Sample Status Tracking</h2>
              <ClipboardList className="w-5 h-5 text-primary" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Submission ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Item</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Media</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Submitted</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sampleSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{submission.id}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{submission.itemName}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{submission.media}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{submission.category}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{submission.submittedAt}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          submission.status === 'approved' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                        }`}>
                          {submission.status === 'approved' ? 'Approved' : 'Pending Review'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-serif font-bold text-foreground">Bank & Payment Details</h2>
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground">Account Name</p>
                <p className="text-foreground font-medium mt-1">{bankDetails.accountName}</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground">Bank</p>
                <p className="text-foreground font-medium mt-1">{bankDetails.bankName}</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground">Account Number</p>
                <p className="text-foreground font-medium mt-1">{bankDetails.accountNumber}</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground">Branch</p>
                <p className="text-foreground font-medium mt-1">{bankDetails.branch}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Payout schedule: {bankDetails.payoutFrequency}</p>
              <Button variant="outline" className="border-border">Edit Payment Details</Button>
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-serif font-bold text-foreground">Address & Location Management</h2>
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground">Workshop Name</p>
                <p className="text-foreground font-medium mt-1">{locationDetails.workshopName}</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground">City / Sub-City</p>
                <p className="text-foreground font-medium mt-1">{locationDetails.city} / {locationDetails.subCity}</p>
              </div>
              <div className="border border-border rounded-lg p-4 md:col-span-2">
                <p className="text-muted-foreground">Address</p>
                <p className="text-foreground font-medium mt-1">{locationDetails.addressLine}, {locationDetails.area}</p>
                <p className="text-muted-foreground mt-1">Landmark: {locationDetails.landmark}</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="border-border">Update Workshop Location</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
