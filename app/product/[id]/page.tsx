import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ProductDetailPage from '@/components/ProductDetailPage'
import TrustBar from '@/components/TrustBar'
import ChatSupport from '@/components/ChatSupport'

export const metadata = {
  title: 'Product Details | Ethio Crafts',
  description: 'View authentic Ethiopian handicraft details, reviews, and specifications',
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TrustBar />
      <ProductDetailPage productId={params.id} />
      <Footer />
      <ChatSupport />
    </main>
  )
}
