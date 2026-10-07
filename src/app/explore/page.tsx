import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import AtmosphericHeader from '@/components/AtmosphericHeader'

// /explore — "Discover AwakenArts" hub (Rebuild Plan §1, 2026-10-05).
// Gathers the reflective pages under one doorway. Every line below is that
// page's own existing copy, verbatim. The Method merge into this page is a
// later pass.

export const metadata: Metadata = {
  title: 'Explore',
  description: 'Explore AwakenArts: the Path, the Encounters, the Journal, Christian Symbols, and more.',
  alternates: { canonical: '/explore' },
}

const DOORS: { href: string; title: string; line?: string }[] = [
  { href: '/awakenarts-path', title: 'The AwakenArts Path', line: 'Poetry, Image, and Seeing Your Life' },
  { href: '/encounters', title: 'Encounters', line: 'Every journey begins with a single encounter.' },
  { href: '/journal', title: 'The Journal', line: 'A place to read, notice, and write — alongside the works that prompted it.' },
  { href: '/christian-symbols', title: 'Symbols for the Christian Soul', line: 'Scripture speaks in symbols.' },
  // The Gallery returns as From the Books (2026-10-07, Susan): story images
  // from the books, so it no longer repeats the Collection.
  { href: '/gallery', title: 'From the Books', line: 'Images from the AwakenArts books.' },
  { href: '/experience', title: 'Make Your Own Word Art', line: 'Bring your own words and watch them take shape.' },
  { href: '/foundation', title: 'My Foundation', line: 'Every life tells its story in ways that are often quieter than words.' },
]

export default function ExplorePage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        {/* 2026-10-07, Susan: the table header (from the Collection page)
            opens Explore; the Collection banner moved to /collection. */}
        <AtmosphericHeader
          src="/images/headers/gallery-desk.jpg"
          alt="The AwakenArts figures laid out on a table: Dragon, Queen Ann, Bowls, Ballerina, and Grismere open beside a journal"
          fadeTo="var(--cream)"
        />
        <section style={{ padding: '2rem 1.5rem 3rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Explore</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-page)', lineHeight: 1.15, color: 'var(--deep)', margin: '1rem 0 0' }}>
            When Language Shapes a Path
          </h1>
        </section>
        <section aria-label="Explore AwakenArts" style={{ padding: '0 1.5rem var(--band-gap)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {DOORS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                data-cta={`explore-${d.href.slice(1)}`}
                style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--mist)', background: '#fff', padding: '1.75rem 1.5rem' }}
              >
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: 'var(--deep)' }}>
                  {d.title} <span aria-hidden="true" style={{ opacity: 0.55 }}>→</span>
                </span>
                {d.line && (
                  <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--mid)', marginTop: '0.6rem' }}>
                    {d.line}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
        <StayConnected source="explore" />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
