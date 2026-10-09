import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Butterfly Encounter',
  robots: { index: false, follow: false },
}

export default function ButterflyLayout({ children }: { children: React.ReactNode }) {
  return children
}
