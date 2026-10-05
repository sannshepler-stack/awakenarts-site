import Link from 'next/link'
import type { Book } from '@/data/books'
import BookCover from '@/components/books/BookCover'

/** 'Available Now' only when true; otherwise no status label at all. */
export function statusText(b: Book) {
  return b.status === 'available' ? 'Available Now' : ''
}

export default function BookTile({ book, source }: { book: Book; source: string }) {
  return (
    <Link href={`/books/${book.slug}`} data-cta={`${source}-book-${book.slug}`} style={{ display: 'block', textDecoration: 'none', textAlign: 'center' }}>
      <span style={{ display: 'block', maxWidth: 280, margin: '0 auto' }}>
        <BookCover book={book} />
      </span>
      {statusText(book) && (
        <span style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '1.1rem' }}>
          {statusText(book)}
        </span>
      )}
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: 'var(--deep)', marginTop: statusText(book) ? '0.25rem' : '1.1rem' }}>
        {book.title}
      </span>
      {(book.subtitle || book.tagline) && (
        <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--mid)', marginTop: '0.2rem' }}>
          {book.subtitle || book.tagline}
        </span>
      )}
    </Link>
  )
}
