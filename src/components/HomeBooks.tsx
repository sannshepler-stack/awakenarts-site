import Link from 'next/link'
import BookTile from '@/components/books/BookTile'
import { books, FREE_RESOURCES } from '@/data/books'

// HomeBooks — homepage section 6, Books & Resources (Rebuild Plan §3).

export default function HomeBooks() {
  return (
    <section aria-labelledby="home-books-heading" style={{ background: 'var(--cream)', padding: 'var(--band-gap) 1.5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Books</p>
        <h2
          id="home-books-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(1.9rem, 3.6vw, 2.6rem)', color: 'var(--deep)', margin: '1rem 0 3rem' }}
        >
          Books &amp; Resources
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem 2.5rem' }}>
          {books.map((b) => (
            <BookTile key={b.slug} book={b} source="home" />
          ))}
        </div>
        <p
          style={{
            margin: '3rem 0 0',
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem 2rem',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'var(--mid)' }}>Free:</span>
          {FREE_RESOURCES.map((r) => (
            <Link key={r.href} href={r.href} style={{ color: 'var(--gold)' }} data-cta={`home-free-${r.href.replace('/', '')}`}>
              {r.title}
            </Link>
          ))}
        </p>
        <p style={{ marginTop: '2.5rem' }}>
          <Link href="/books" className="home-coll-cta home-coll-cta--light-surface" data-cta="home-books">
            All Books &amp; Journals
          </Link>
        </p>
      </div>
    </section>
  )
}
