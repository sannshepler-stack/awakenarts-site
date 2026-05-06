import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Dragon Encounter',
  robots: { index: false, follow: false },
}

export default function DragonLayout({ children }: { children: React.ReactNode }) {
  return children
}
