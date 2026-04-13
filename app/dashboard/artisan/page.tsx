import ArtisanDashboard from '@/components/ArtisanDashboard'

export const metadata = {
  title: 'Artisan Dashboard | Ethio Crafts',
  description: 'Manage your products, samples, and orders',
}

export default function ArtisanDashboardPage() {
  return (
    <main className="bg-white min-h-screen">
      <ArtisanDashboard />
    </main>
  )
}
