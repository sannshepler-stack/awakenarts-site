import type { Metadata } from 'next'

// The continuum is a quiet stopping place at the end of the encounter
// sequence — not an indexable destination, but a held breath. noindex,
// nofollow matches the convention used by individual encounter pages.

export const metadata: Metadata = {
  title: 'Continuum — AwakenArts',
  description:
    'A closing passage at the end of the present encounters — more figures and forms are taking shape beyond it.',
  robots: { index: false, follow: false },
}

export default function ContinuumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
