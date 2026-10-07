import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import Footer from '@/components/Footer'
import EditionTile from '@/components/editions/EditionTile'
import { editions, EDITION_ORDER } from '@/data/editions'
import { bodyStyle, h2Style } from '@/components/guided/GuidedParts'

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

export default function CollectionPage() {
  const list = EDITION_ORDER.map((s) => editions.find((e) => e.slug === s)).filter((e): e is (typeof editions)[number] => !!e)

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        {/* 2026-10-07, Susan: Queen Ann was cropped here and she already
            opens the homepage, so the Collection uses the figures themselves. */}
        <AtmosphericHeader
          src="/images/headers/gallery-desk.jpg"
          alt="The AwakenArts figures laid out on a table: Dragon, Queen Ann, Bowls, Ballerina, and Grismere open beside a journal"
          fadeTo="var(--cream)"
        />

        <section style={{ padding: 'var(--band-gap) 1.5rem', paddingTop: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>AwakenArts</p>
            <h1 style={{ ...h2Style, fontSize: 'var(--t-page)' }}>The AwakenArts Collection</h1>
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
