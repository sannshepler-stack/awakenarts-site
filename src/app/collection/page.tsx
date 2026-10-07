import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CollectionBanner from '@/components/CollectionBanner'
import Footer from '@/components/Footer'
import EditionTile from '@/components/editions/EditionTile'
import { editions, EDITION_ORDER } from '@/data/editions'
import { bodyStyle } from '@/components/guided/GuidedParts'

// /collection — the AwakenArts Collection (2026-10-07, Susan: no longer
// called "Editions"; each work is a Figure). Formerly /editions, 2026-10-05.
// This page only explains and presents the Editions themselves: no
// status labels, no registration, nothing implying an Edition is an event.
// Facilitated experiences built from some Editions live under
// /presentations.

export const metadata: Metadata = {
  title: 'The AwakenArts Collection',
  description:
    'Each figure in the Collection is an original AwakenArts work, built from image, poetry, story, and symbolic reflection. Each is a distinct world to explore.',
  alternates: { canonical: '/collection' },
}

const SR_ONLY: React.CSSProperties = {
  position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0,
}

export default function CollectionPage() {
  const list = EDITION_ORDER.map((s) => editions.find((e) => e.slug === s)).filter((e): e is (typeof editions)[number] => !!e)

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        {/* 2026-10-07, Susan: the table header moved to Explore; the
            Collection banner now opens this page on its own. */}

        <section style={{ padding: 'calc(var(--band-gap) + 1rem) 1.5rem 3.5rem', textAlign: 'center' }}>
          {/* 2026-10-07, Susan: the Collection banner (also on Explore) is
              this page's title; the h1 stays for screen readers and search. */}
          <h1 style={SR_ONLY}>The AwakenArts Collection</h1>
          <CollectionBanner marginBottom="2.5rem" tone="light" />
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p style={bodyStyle}>
              Each figure in the Collection is an original AwakenArts work, built from image, poetry, story, and
              symbolic reflection. Each is a distinct world to explore.
            </p>
          </div>
        </section>

        <section aria-label="The Figures" style={{ padding: '0 1.5rem var(--band-gap)' }}>
          <div
            style={{
              maxWidth: 1080,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '3rem 2.5rem',
            }}
          >
            {list.map((e) => (
              <EditionTile key={e.slug} e={e} />
            ))}
          </div>
        </section>

        {/* No Encounter Journal signup here (2026-10-05, Susan): the
            Editions are for exploration; nothing is attached to them. */}
      </main>
      <Footer />
    </>
  )
}
