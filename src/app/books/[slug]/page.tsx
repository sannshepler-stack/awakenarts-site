import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import BookCover from '@/components/books/BookCover'
import BookTile, { statusText } from '@/components/books/BookTile'
import { books, getBook, canBuy } from '@/data/books'

// /books/[slug] — the reusable Book template (Rebuild Plan §6).

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const b = getBook(params.slug)
  if (!b) return {}
  return {
    title: b.subtitle ? `${b.title}: ${b.subtitle}` : b.title,
    description: b.description?.[0] || b.tagline || `${b.title} by Susan Ann Shepler.`,
    alternates: { canonical: `/books/${b.slug}` },
    openGraph: b.cover ? { images: [b.cover] } : undefined,
  }
}

const label: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--label-size)',
  fontWeight: 600,
  letterSpacing: 'var(--label-tracking)',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  margin: 0,
}
const body: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--body-size)',
  lineHeight: 'var(--body-line)',
  color: 'var(--deep)',
  margin: '0 0 1rem',
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const b = getBook(params.slug)
  if (!b) notFound()
  const others = books.filter((x) => x.slug !== b.slug)

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ padding: 'calc(var(--band-gap) + 2rem) 1.5rem var(--band-gap)' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div style={{ maxWidth: 420, width: '100%', margin: '0 auto' }}>
              <BookCover book={b} size="lg" />
            </div>
            <div>
              {statusText(b) && <p style={label}>{statusText(b)}</p>}
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-page)', color: 'var(--deep)', margin: '0.6rem 0 0.4rem', lineHeight: 1.05 }}>
                {b.title}
              </h1>
              {b.subtitle && <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.45rem', color: 'var(--gold)', margin: '0 0 1.25rem' }}>{b.subtitle}</p>}
              {b.tagline && <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--mid)', margin: '0 0 1.25rem' }}>{b.tagline}</p>}
              {b.description?.map((p, i) => (
                <p key={i} style={body}>{p}</p>
              ))}
              {b.details && b.details.length > 0 && (
                <dl style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: '0.4rem 1.25rem', margin: '1.5rem 0', borderTop: '1px solid var(--mist)', paddingTop: '1.25rem' }}>
                  {b.details.map((d) => (
                    <div key={d.label} style={{ display: 'contents' }}>
                      <dt style={{ ...label, fontSize: '0.7rem', alignSelf: 'center' }}>{d.label}</dt>
                      <dd style={{ ...body, margin: 0, fontSize: '0.95rem' }}>{d.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {canBuy(b) ? (
                // 2026-10-08, Susan: once live — "Available now on Amazon." linked
                // to that edition's Amazon page.
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--gold)', margin: '0.5rem 0 0' }}>
                  <a href={b.buyUrl} target="_blank" rel="noopener noreferrer" data-cta={`buy-${b.slug}`} style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '0.2em' }}>
                    Available now on Amazon.
                  </a>
                </p>
              ) : (
                // Until the buy link is confirmed: a quiet note, no signup
                // (2026-10-07 — "Hear When It's Ready" pointed at the Journal signup).
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--gold)', margin: '0.5rem 0 0' }}>
                  Coming soon.
                </p>
              )}
            </div>
          </div>
        </section>

        {b.samples && b.samples.length > 0 && (
          // A Look Inside (2026-10-07, Susan): a few images only — holding
          // back sells better than showing too much.
          <section aria-labelledby="look-inside" style={{ background: '#fff', padding: 'var(--band-gap) 1.5rem', textAlign: 'center' }}>
            <h2 id="look-inside" style={{ ...label, marginBottom: '0.6rem' }}>A Look Inside</h2>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--mid)', margin: '0 0 2rem' }}>
              A glimpse inside the book.
            </p>
            <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem', alignItems: 'start' }}>
              {b.samples.map((s) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={s.src} src={s.src} alt={s.alt} loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block', border: '1px solid var(--mist)', boxShadow: '0 8px 22px rgba(28, 43, 58, 0.12)' }} />
              ))}
            </div>
          </section>
        )}

        {b.related && (
          <section style={{ padding: '0 1.5rem var(--band-gap)', textAlign: 'center' }}>
            <Link href={b.related.href} className="home-coll-cta home-coll-cta--light-surface">{b.related.label}</Link>
          </section>
        )}

        {/* Encounter Journal signup removed from book pages (Susan, 2026-10-07). */}

        <section aria-label="More books" style={{ padding: 'var(--band-gap) 1.5rem' }}>
          <h2 style={{ ...label, textAlign: 'center', marginBottom: '2rem' }}>More Books &amp; Journals</h2>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
            {others.map((o) => (
              <BookTile key={o.slug} book={o} source={`book-${b.slug}-more`} />
            ))}
          </div>
        </section>

        {/* "Continue into AwakenArts" removed (Susan, 2026-10-08): on a book page the visitor stays with the books. */}
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
