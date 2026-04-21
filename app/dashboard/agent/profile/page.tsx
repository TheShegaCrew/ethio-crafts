import { Clock, UserCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Agent Profile | Ethio Crafts',
  description: 'Manage agent profile and approval status',
}

export default function AgentProfilePage() {
  const agentProfile = {
    fullName: 'Rahel Tadesse',
    phone: '+251-911-223344',
    email: 'rahel.agent@example.com',
    coverageRegion: 'Addis Ababa, Adama, Debre Birhan',
  }

  return (
    <main className="bg-white min-h-screen font-sans">
      <div className="border-b border-border bg-white sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <UserCircle2 className="w-7 h-7 text-primary" />
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground">Agent Profile</h1>
              <p className="text-muted-foreground mt-1">Personal details and approval status</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="border border-border rounded-lg p-4">
              <p className="text-muted-foreground">Full Name</p>
              <p className="text-foreground font-medium mt-1">{agentProfile.fullName}</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-muted-foreground">Phone</p>
              <p className="text-foreground font-medium mt-1">{agentProfile.phone}</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-muted-foreground">Email</p>
              <p className="text-foreground font-medium mt-1">{agentProfile.email}</p>
            </div>
            <div className="border border-border rounded-lg p-4 md:col-span-2">
              <p className="text-muted-foreground">Coverage Region</p>
              <p className="text-foreground font-medium mt-1">{agentProfile.coverageRegion}</p>
            </div>
          </div>

          <div className="border border-dashed border-border rounded-lg p-6 text-center mt-4">
            <Clock className="w-8 h-8 text-warning mx-auto" />
            <p className="text-foreground font-medium mt-3">Approval Status: Pending Admin Approval</p>
            <p className="text-sm text-muted-foreground mt-2">
              Your account can view tasks, but final submission remains locked until approval.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
