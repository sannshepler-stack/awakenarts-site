import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import WorldDoorways from '@/components/WorldDoorways'
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
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: 'var(--deep)', margin: '0.6rem 0 0.4rem', lineHeight: 1.05 }}>
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
                <a href={b.buyUrl} target="_blank" rel="noopener noreferrer" className="home-coll-cta home-coll-cta--light-surface" data-cta={`buy-${b.slug}`}>
                  {b.buyLabel || 'Buy the Book'}
                </a>
              ) : (
                <Link href="#stay-connected" className="home-coll-cta home-coll-cta--light-surface" data-cta={`notify-${b.slug}`}>
                  Hear When It&rsquo;s Ready
                </Link>
              )}
            </div>
          </div>
        </section>

        {b.samples && b.samples.length > 0 && (
          <section aria-label="Sample pages" style={{ background: '#fff', padding: 'var(--band-gap) 1.5rem' }}>
            <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {b.samples.map((s) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={s.src} src={s.src} alt={s.alt} loading="lazy" style={{ width: '100%', border: '1px solid var(--mist)' }} />
              ))}
            </div>
          </section>
        )}

        {b.related && (
          <section style={{ padding: '0 1.5rem var(--band-gap)', textAlign: 'center' }}>
            <Link href={b.related.href} className="home-coll-cta home-coll-cta--light-surface">{b.related.label}</Link>
          </section>
        )}

        <div id="stay-connected">
          <StayConnected source={`book-${b.slug}`} />
        </div>

        <section aria-label="More books" style={{ padding: 'var(--band-gap) 1.5rem' }}>
          <h2 style={{ ...label, textAlign: 'center', marginBottom: '2rem' }}>More Books &amp; Journals</h2>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
            {others.map((o) => (
              <BookTile key={o.slug} book={o} source={`book-${b.slug}-more`} />
            ))}
          </div>
        </section>

        <WorldDoorways />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
