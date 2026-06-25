import type { Metadata } from 'next'

// ─── /journal — Layout / Metadata ────────────────────────────────────────────
// AwakenArts · The Journal — curated symbolic archive
//
// Restored as a primary navigation destination (2026-06-25, "Retire
// Gallery and Reinstate Journal" directive). The Journal continues the
// AwakenArts experience after Encounters/Collection/Poems — a place for
// visitors to extend their own observation, reflection, and symbolic
// recognition. Indexed and public. (Individual /journal/[category]
// territory pages remain noindex while still in prototype — see that
// route's own generateMetadata.)
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Journal',
  description:
    'Journaling prompts and reflections written alongside particular works in the AwakenArts Collection — a place to slow down, notice, and write down what surfaces.',
  alternates: { canonical: '/journal' },
  openGraph: {
    url: '/journal',
    title: 'The Journal — AwakenArts',
    description:
      'A space for journaling and reflection alongside the works of AwakenArts — for writing down what stays with you, and returning to it later.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
