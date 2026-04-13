import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import OrderTracking from '@/components/OrderTracking'
import TrustBar from '@/components/TrustBar'
import ChatSupport from '@/components/ChatSupport'

export const metadata = {
  title: 'Order Tracking | Ethio Crafts',
  description: 'Track your order status and delivery updates',
}

export default function OrderTrackingPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TrustBar />
      <OrderTracking orderId={params.id} />
      <Footer />
      <ChatSupport />
    </main>
  )
}
