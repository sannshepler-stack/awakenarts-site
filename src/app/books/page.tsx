import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import BookTile from '@/components/books/BookTile'
import { books, FREE_RESOURCES } from '@/data/books'

// /books — Books & Journals (Rebuild Plan §6). Books first, as paid work;
// free resources in their own, quieter section below.

export const metadata: Metadata = {
  title: 'Books & Journals',
  description: 'Books and Seek & Find journals by Susan Ann Shepler, with free AwakenArts resources.',
  alternates: { canonical: '/books' },
}

const label: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--label-size)',
  fontWeight: 600,
  letterSpacing: 'var(--label-tracking)',
  textTransform: 'uppercase',
  color: 'var(--gold)',
}

export default function BooksPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ padding: 'calc(var(--band-gap) + 2rem) 1.5rem 3rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Books</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(2.3rem, 5vw, 3.2rem)', color: 'var(--deep)', margin: '1rem 0 0' }}>
            Books &amp; Journals
          </h1>
        </section>

        <section aria-label="Books" style={{ padding: '0 1.5rem var(--band-gap)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '3rem 2.5rem' }}>
            {books.map((b) => (
              <BookTile key={b.slug} book={b} source="books-index" />
            ))}
          </div>
        </section>

        <section aria-labelledby="free-heading" style={{ background: '#fff', padding: 'var(--band-gap) 1.5rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 id="free-heading" style={{ ...label, textAlign: 'center', margin: '0 0 2rem' }}>Free Resources</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {FREE_RESOURCES.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  data-cta={`free-${r.href.replace('/', '')}`}
                  style={{ display: 'flex', gap: '1.1rem', alignItems: 'center', textDecoration: 'none', border: '1px solid var(--mist)', padding: '1.1rem', background: 'var(--cream)' }}
                >
                  {r.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={r.image} alt={r.imageAlt || ''} loading="lazy" style={{ width: 72, height: 'auto', boxShadow: '0 4px 12px rgba(28,43,58,0.15)' }} />
                  )}
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--deep)' }}>{r.title} →</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--mid)', marginTop: '0.25rem' }}>{r.line}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StayConnected source="books" />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
