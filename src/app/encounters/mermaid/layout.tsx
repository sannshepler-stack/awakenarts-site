import type { Metadata } from 'next'

// The Mermaid encounter is the soft-launched, public-ready piece of the
// encounters sequence. It IS indexed; the other encounters (dragon, queen,
// vase) remain noindexed until they ship at the same level of polish.
// When the next encounter is ready, copy this metadata pattern into its
// layout, remove its disallow rule from robots.ts, and add it to sitemap.ts.

export const metadata: Metadata = {
  title: 'The Mermaid Encounter',
  description:
    'A symbolic descent — the first AwakenArts encounter. Step into image and word, into the depths the psyche keeps beneath the surface.',
  alternates: { canonical: '/encounters/mermaid' },
  openGraph: {
    url: '/encounters/mermaid',
    title: 'The Mermaid Encounter — AwakenArts',
    description:
      'A symbolic descent — the first AwakenArts encounter. Step into image and word.',
  },
}

export default function MermaidLayout({ children }: { children: React.ReactNode }) {
  return children
}
