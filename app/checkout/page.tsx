import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import CheckoutPage from '@/components/CheckoutPage'
import TrustBar from '@/components/TrustBar'

export const metadata = {
  title: 'Checkout | Ethio Crafts',
  description: 'Complete your purchase securely',
}

export default function CheckoutPageRoute() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TrustBar />
      <CheckoutPage />
      <Footer />
    </main>
  )
}
