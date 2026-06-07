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
    'Journaling prompts and reflections written alongside particular works in the AwakenArts Collection — a place to slow down, notice, and write down what surfaces.',
  openGraph: {
    title: 'The Journal — AwakenArts',
    description:
      'A space for journaling and reflection alongside the works of AwakenArts — for writing down what stays with you, and returning to it later.',
  },
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
