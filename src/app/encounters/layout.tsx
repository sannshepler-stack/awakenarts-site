import type { Metadata } from 'next'

// Encounters architecture (2026-06-25): /encounters is now the primary
// entrance into the symbolic language of AwakenArts in its own right —
// not a transitional pre-roll in front of a single piece of content.
// It's indexed, and its own page introduces the five encounters
// (Journey, The Deep, The Table, The Word, Continue) directly.
//
// The figure-tied routes set aside by this change (dragon, vase, queen,
// butterfly, continuum, and the retired mermaid redirect) keep their own
// noindex metadata / robots.ts disallow rules — see those files.

export const metadata: Metadata = {
  title: 'Encounters — AwakenArts',
  description:
    'Quiet doorways into the symbolic world of AwakenArts — image, language, Scripture, and a brief AwakenArts Echo. Journey, The Deep, The Table, The Word, Continue.',
  openGraph: {
    title: 'Encounters — AwakenArts',
    description:
      'Quiet doorways into the symbolic world of AwakenArts — image, language, Scripture, and a brief AwakenArts Echo.',
  },
  robots: { index: true, follow: true },
}

export default function EncountersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
