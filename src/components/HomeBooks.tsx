import TextLink from '@/components/TextLink'
import BookTile from '@/components/books/BookTile'
import { books } from '@/data/books'
import FreeResources from '@/components/books/FreeResources'

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
        <div style={{ marginTop: '3.5rem' }}>
          <FreeResources source="home" />
        </div>
        <p style={{ marginTop: '2.5rem' }}>
          <TextLink href="/books" cta="home-books">Explore Books &amp; Journals</TextLink>
        </p>
      </div>
    </section>
  )
}
