import type { Metadata } from 'next'

// ─── /journal — Layout / Metadata ────────────────────────────────────────────
// AwakenArts · The Journal — curated symbolic archive
//
// Hidden during architecture build. Not in navigation. Not indexed.
// Promotion to public navigation happens in a later pass after Susan
// reviews the territory pages.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Journal',
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

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
