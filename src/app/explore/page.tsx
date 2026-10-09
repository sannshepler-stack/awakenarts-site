import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'

// /explore — "Discover AwakenArts" hub (Rebuild Plan §1, 2026-10-05).
// Gathers the reflective pages under one doorway. Every line below is that
// page's own existing copy, verbatim. The Method merge into this page is a
// later pass.

export const metadata: Metadata = {
  title: 'Explore',
  description: 'Explore AwakenArts: the Path, the Encounters, the Journal, Christian Symbols, and more.',
  alternates: { canonical: '/explore' },
}

// Images (2026-10-07, Susan): each card shows an image from its own page.
type Door = { href: string; title: string; line?: string; img: string; pos?: string; dark?: boolean }

const DOORS: Door[] = [
  // 2026-10-09, Susan: the learning Path and the free book are separate
  // destinations, with unmistakable links.
  { href: '/awakenarts-path', title: 'The AwakenArts Path', line: 'Explore What Symbol Awareness Can Teach', img: '/images/headers/awakenarts-path-landscape.jpg', pos: 'center 60%' },
  { href: '/about/introduction', title: 'Discover AwakenArts', line: 'Discover how poetry, image, and reflection can open new ways of seeing your own life.', img: '/images/path/when-language-shapes-a-path-cover.jpg', pos: 'center 100%' },
  { href: '/encounters', title: 'Christian Encounters', line: 'Five reflections in image and Scripture.', img: '/images/encounters/journey/journey-02-web-opt.jpg' },
  { href: '/journal', title: 'The Journal', line: 'A place to read, notice, and write — alongside works that prompted\u00A0it.', img: '/images/explore/journal-notebook.jpg' }, // notebook from the table header (Susan, 2026-10-07)
  { href: '/christian-symbols', title: 'Symbols for the Christian Soul', line: 'Scripture speaks in symbols.', img: '/images/homepage/encounters-symbols-ship-v3-opt.jpg' },
  // The Gallery returns as From the Books (2026-10-07, Susan): story images
  // from the books, so it no longer repeats the Collection.
  { href: '/gallery', title: 'From the Books', line: 'Images from the AwakenArts books.', img: '/images/gallery/where-you-stand/03-queen-ann-on-the-balcony.jpg', pos: 'center 35%' },
  // Make Your Own Word Art left the grid for its own section below
  // (2026-10-09, Susan): something to do, not just a place to visit.
  // My Foundation now lives within the Path page (2026-10-07, Susan).
]

export default function ExplorePage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        {/* 2026-10-07, Susan: the poetry manuscript (language) opens Explore;
            the figures table moved to /presentations. */}
        {/* 2026-10-09, Susan: the watercolor of walls, a crossroads, and
            stepping stones (also the Journal's header) now opens Explore,
            beneath "When Language Shapes a Path". White ground blends into
            the cream page (multiply), as on the Journal. */}
        <div style={{ padding: 'calc(var(--band-gap) + 1rem) 1.5rem 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headers/symbols-figurative-landscape.jpg"
            alt="A watercolor landscape: an opening in a stone wall, paths that part, and stepping stones across still water toward the sunrise"
            style={{ display: 'block', width: '100%', maxWidth: 1180, margin: '0 auto', mixBlendMode: 'multiply' }}
          />
        </div>
        <section style={{ padding: '2rem 1.5rem 3.75rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Explore</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-page)', lineHeight: 1.15, color: 'var(--deep)', margin: '1rem 0 0' }}>
            When Language Shapes a Path
          </h1>
          {/* Epigraph (Susan, 2026-10-07; moved here from /gallery): Jung, 1969, p. 38,
              The Archetypes and the Collective Unconscious. */}
          <blockquote style={{ maxWidth: 620, margin: '1.75rem auto 0' }}>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'var(--t-poetic, 1.45rem)', lineHeight: 1.4, color: 'var(--deep)', margin: 0 }}>
              &ldquo;The symbolic process is an experience in images and of images.&rdquo;
            </p>
            <footer style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.75rem' }}>
              C. G. Jung
              <cite style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1rem', letterSpacing: 0, textTransform: 'none', fontStyle: 'italic', color: 'var(--mid)', marginTop: '0.3rem' }}>
                The Archetypes and the Collective Unconscious
              </cite>
            </footer>
          </blockquote>
        </section>
        <section aria-label="Explore AwakenArts" style={{ padding: '0 1.5rem var(--band-gap)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {DOORS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                data-cta={`explore-${d.href.slice(1)}`}
                style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--mist)', background: '#fff' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.img}
                  alt=""
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    objectFit: d.dark ? 'contain' : 'cover',
                    objectPosition: d.pos || 'center',
                    // Word-art PNGs are transparent: shown on cream, not black (Susan).
                    background: d.dark ? 'var(--cream)' : 'var(--warm)',
                    padding: d.dark ? '0.75rem' : 0,
                    boxSizing: 'border-box',
                  }}
                />
                <span style={{ display: 'block', padding: '1.4rem 1.5rem 1.6rem' }}>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', lineHeight: 1.25, color: 'var(--deep)' }}>
                  {d.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>
                    {d.title.split(' ').slice(-1)[0]} <span aria-hidden="true" style={{ opacity: 0.55 }}>→</span>
                  </span>
                </span>
                {d.line && (
                  <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--mid)', marginTop: '0.6rem' }}>
                    {d.line}
                  </span>
                )}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Make Your Own Word Art (2026-10-09, Susan) ─────────────
            Its own section, with both word-art examples, so it reads as
            something to do rather than a place to visit. Wording reuses the
            site's existing Word Art lines. */}
        <section aria-labelledby="explore-word-art" style={{ background: 'var(--cream)', padding: '0 1.5rem var(--band-gap)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ width: 64, height: 1, background: 'var(--gold)', opacity: 0.6, margin: '0 auto 3rem' }} />
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Word · Image · Form</p>
          <h2
            id="explore-word-art"
            style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', color: 'var(--deep)', margin: '1rem 0 0.75rem' }}
          >
            Make Your Own Word Art
          </h2>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--mid)', margin: '0 0 2.5rem' }}>
            Bring your own words and watch them take shape.
          </p>
          <div
            style={{
              // 2026-10-09, Susan: smaller, so the examples don't overwhelm Explore.
              maxWidth: 540,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              { src: '/images/experiences/butterfly-wordart-opt.webp', alt: 'Butterfly Word-Art — words arranged in the shape of a butterfly' },
              { src: '/images/experiences/word-form-spiral-opt.webp', alt: 'Word-Form Spiral — words arranged in a spiral form' },
            ].map((im) => (
              <div key={im.src} style={{ background: 'var(--cream)', border: '1px solid var(--mist)', boxShadow: '0 8px 22px rgba(28, 43, 58, 0.08)', padding: '1rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', aspectRatio: '1 / 1', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          <p style={{ margin: '2.5rem 0 0.75rem' }}>
            <Link href="/experience" className="home-coll-cta home-coll-cta--light-surface" data-cta="explore-word-art">
              Create a Word Form
            </Link>
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--mid)', margin: 0 }}>
            Begin with a word, memory, image, or phrase.
          </p>
          {/* 2026-10-09, Susan: the Studio, presented as About the Poetry
              Shapes, joins Explore beside Word Art: see how the shapes are
              made, then make your own. */}
          <p style={{ margin: '1.75rem 0 0' }}>
            <Link
              href="/studio"
              data-cta="explore-poetry-shapes"
              style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}
            >
              About the Poetry Shapes &rarr;
            </Link>
          </p>
        </section>
        <StayConnected source="explore" />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
