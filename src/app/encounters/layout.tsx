import type { Metadata } from 'next'

// /encounters is the intro/threshold video that leads into the Mermaid
// encounter. It's a transitional doorway, not a destination — so it's
// deliberately NOT indexed. Search engines and AI tools should land
// visitors on /encounters/mermaid (the actual encounter content) rather
// than on a pre-roll video page.
//
// Important: index=false but follow=true. We still want crawlers to walk
// through this page and discover the linked Mermaid encounter behind it.
// (We also do NOT add /encounters to robots.ts disallow, because that
// would block crawling entirely; noindex+follow is the right tool for a
// transitional page.)
//
// Children layouts (mermaid, dragon, queen, vase) override this with
// their own metadata.

export const metadata: Metadata = {
  title: 'Encounters — AwakenArts',
  description:
    'A guided encounter with the symbolic life of the soul.',
  robots: { index: false, follow: true },
}

export default function EncountersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
