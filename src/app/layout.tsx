import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'AwakenArts — Where Symbol Meets Soul',
    template: '%s | AwakenArts',
  },
  description:
    'AwakenArts guides seekers through the symbolic landscape of the psyche — drawing from the Christian tradition, Jungian individuation, and the language of myth and archetype.',
  openGraph: {
    siteName: 'AwakenArts',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
