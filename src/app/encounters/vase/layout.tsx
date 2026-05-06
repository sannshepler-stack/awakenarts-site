import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Vase Encounter',
  robots: { index: false, follow: false },
}

export default function VaseLayout({ children }: { children: React.ReactNode }) {
  return children
}
