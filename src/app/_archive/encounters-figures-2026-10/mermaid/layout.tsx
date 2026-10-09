import type { Metadata } from 'next'

// Retired 2026-06-25: this route now just redirects to /encounters/journey
// (see page.tsx). Noindexed since there's no standalone content here
// anymore — the real metadata lives on the five new encounter pages.

export const metadata: Metadata = {
  title: 'Encounters',
  robots: { index: false, follow: true },
}

export default function MermaidLayout({ children }: { children: React.ReactNode }) {
  return children
}
