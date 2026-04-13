import AdminDashboard from '@/components/AdminDashboard'

export const metadata = {
  title: 'Admin Dashboard | Ethio Crafts',
  description: 'Platform analytics, orders, and verification queue',
}

export default function AdminDashboardPage() {
  return (
    <main className="bg-white min-h-screen">
      <AdminDashboard />
    </main>
  )
}
