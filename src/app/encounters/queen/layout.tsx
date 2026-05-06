import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Queen Encounter',
  robots: { index: false, follow: false },
}

export default function QueenLayout({ children }: { children: React.ReactNode }) {
  return children
}
