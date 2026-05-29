import type { Metadata } from 'next'

// ─── Journal Prototype — Layout / Metadata ───────────────────────────────────
// AwakenArts · /journal-prototype
//
// Hidden prototype route. Not in navigation. Not indexed by search engines
// or AI crawlers. Lives outside the public surface until promoted.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Journal — Prototype',
  description:
    'Symbolic reflections and journal prompts inspired by recurring motifs, contemplative imagery, and the larger language of symbolic form.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function JournalPrototypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
