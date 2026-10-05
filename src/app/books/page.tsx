import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import BookTile from '@/components/books/BookTile'
import { books } from '@/data/books'
import FreeResources from '@/components/books/FreeResources'

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
            <FreeResources source="books-index" />
          </div>
        </section>

        <StayConnected source="books" />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
