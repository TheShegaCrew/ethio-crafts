import AgentVerification from '@/components/AgentVerification'

export const metadata = {
  title: 'Agent Verification | Ethio Crafts',
  description: 'Inspect and verify authentic Ethiopian handicrafts',
}

export default function AgentDashboardPage() {
  return (
    <main className="bg-white min-h-screen">
      <AgentVerification />
    </main>
  )
}
