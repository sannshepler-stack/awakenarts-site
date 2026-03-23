import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AwakenArts — Where Symbol Meets Soul',
  description:
    'AwakenArts guides seekers through the symbolic landscape of the psyche — drawing from the living depths of the Christian tradition, Jungian individuation, and the language of myth and archetype.',
  keywords: [
    'Christian contemplative',
    'Jungian individuation',
    'symbolic spirituality',
    'depth psychology',
    'Transformational Language Arts',
    'guidance deck',
    'oracle cards Christian',
    'dream interpretation biblical',
  ],
  openGraph: {
    title: 'AwakenArts — Where Symbol Meets Soul',
    description: 'For those who sense the sacred story goes deeper than they have yet been shown.',
    url: 'https://awakenarts.com',
    siteName: 'AwakenArts',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
