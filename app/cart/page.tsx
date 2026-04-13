import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ShoppingCart from '@/components/ShoppingCart'
import TrustBar from '@/components/TrustBar'
import ChatSupport from '@/components/ChatSupport'

export const metadata = {
  title: 'Shopping Cart | Ethio Crafts',
  description: 'View and manage your shopping cart',
}

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TrustBar />
      <ShoppingCart />
      <Footer />
      <ChatSupport />
    </main>
  )
}
