import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProductListing } from '@/components/ProductListing'
import TrustBar from '@/components/TrustBar'
import ChatSupport from '@/components/ChatSupport'

export const metadata = {
  title: 'Shop Products | Ethio Crafts',
  description: 'Browse authentic Ethiopian handicrafts from verified artisans',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TrustBar />
      <ProductListing />
      <Footer />
      <ChatSupport />
    </main>
  )
}
