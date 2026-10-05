import type { Book } from '@/data/books'

// BookCover — the real cover when supplied; otherwise a quiet typographic
// cover in the AwakenArts palette (cream, gold frame, navy title), so a
// book can be listed before its cover file is ready.

export default function BookCover({ book, size = 'md' }: { book: Book; size?: 'md' | 'lg' }) {
  const lg = size === 'lg'
  if (book.cover) {
    // 2026-10-05, per Susan: every cover shares one height and keeps its
    // true proportions (never cropped), so the wider 8.5 × 11 journal reads
    // as fully as the 6 × 9 books beside it.
    const h = lg ? 'min(510px, 120vw)' : 'min(345px, 92vw)'
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={book.cover}
        alt={book.coverAlt || `Cover of ${book.title}`}
        loading="lazy"
        style={{ display: 'block', height: h, width: 'auto', maxWidth: '100%', objectFit: 'contain', margin: '0 auto', boxShadow: '0 10px 26px rgba(28, 43, 58, 0.18)' }}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`${book.title} — cover coming`}
      style={{
        width: '100%',
        aspectRatio: '2 / 3',
        background: 'var(--deep)',
        padding: lg ? 18 : 12,
        boxShadow: '0 10px 26px rgba(28, 43, 58, 0.18)',
      }}
    >
      <div
        style={{
          height: '100%',
          border: '1px solid rgba(201, 168, 76, 0.65)',
          outline: '1px solid rgba(201, 168, 76, 0.3)',
          outlineOffset: -6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '1rem',
          gap: '0.6rem',
        }}
      >
        <span style={{ fontFamily: 'var(--serif)', fontSize: lg ? '2.2rem' : '1.55rem', lineHeight: 1.1, color: 'var(--cream)' }}>
          {book.title}
        </span>
        {book.subtitle && (
          <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: lg ? '1.2rem' : '0.95rem', color: 'var(--gold-lt)' }}>
            {book.subtitle}
          </span>
        )}
        <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250, 246, 236, 0.6)', marginTop: '0.75rem' }}>
          Susan Ann Shepler
        </span>
      </div>
    </div>
  )
}
