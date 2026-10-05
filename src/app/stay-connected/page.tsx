import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import WorldDoorways from '@/components/WorldDoorways'

// /stay-connected — the standalone signup page (footer link, Books free
// resource, any QR or social link that should land on the signup itself).

export const metadata: Metadata = {
  title: 'Stay Connected',
  description: 'Receive the AwakenArts Encounter Journal — a self-guided companion to the Encounters.',
  alternates: { canonical: '/stay-connected' },
}

export default function StayConnectedPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)', paddingTop: '4rem' }}>
        <StayConnected source="stay-connected-page" />
        <WorldDoorways />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
