import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'
import TextLink, { TextLinkRow } from '@/components/TextLink'
import { editions } from '@/data/editions'
import { PRESENTATIONS } from '@/data/presentations'
import { bodyStyle, h2Style, labelStyle } from '@/components/guided/GuidedParts'

// /editions/[slug] — one AwakenArts Edition, presented as the work itself
// (2026-10-05, Susan: Edition = the work). No hosting, inquiry or event
// language. If a presentation has been built from this Edition, one quiet
// link points to it under /presentations.
//
// Replaces the 2026-08 Edition preview page (workshop-inquiry mailto +
// "Back to Current Workshops"); that version is in git history.

export function generateStaticParams() {
  return editions.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const e = editions.find((x) => x.slug === params.slug)
  if (!e) return {}
  return {
    title: `${e.title} — The AwakenArts Collection`,
    description: e.about,
    alternates: { canonical: `/collection/${e.slug}` },
  }
}

const section: React.CSSProperties = { padding: 'var(--band-gap) 1.5rem' }

/** Editions with a complete online reader (D8). */
const READERS: Record<string, string> = { dragon: '/collection/dragon/read' }

export default function EditionPage({ params }: { params: { slug: string } }) {
  const e = editions.find((x) => x.slug === params.slug)
  if (!e) return notFound()
  const presentation = PRESENTATIONS.find((p) => p.editions?.includes(e.slug))
  const reader = READERS[e.slug]
  const shortTitle = e.title.replace(/^The\s+/i, '')

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ ...section, paddingTop: 'calc(var(--band-gap) + 1rem)' }}>
          <div
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div style={{ background: '#fff', border: '1px solid var(--mist)', padding: 14, boxShadow: '0 8px 24px rgba(28, 43, 58, 0.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/editions/${e.slug}-figure.jpg`} alt={`${e.title} — the figure artwork`} style={{ width: '100%', display: 'block' }} />
            </div>
            <div>
              <p style={labelStyle}>A Figure from the AwakenArts Collection</p>
              <h1 style={{ ...h2Style, fontSize: 'var(--t-page)', marginBottom: '1rem' }}>{e.title}</h1>
              <p style={bodyStyle}>{e.about}</p>
              <p style={{ ...labelStyle, fontSize: '0.72rem', marginTop: '1.5rem' }}>Themes</p>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--deep)', margin: '0.4rem 0 0' }}>
                {e.themes.join(' · ')}
              </p>
            </div>
          </div>
        </section>

        {/* The work itself — the primary experience of this page. */}
        <section aria-labelledby="explore-heading" style={{ ...section, paddingTop: 0, textAlign: 'center' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <h2 id="explore-heading" style={{ ...h2Style, marginBottom: '1.75rem' }}>Explore {shortTitle}</h2>
            {/* 2026-10-07, Susan: a look, not the complete Edition — the
                contact sheet only, sized to fit one screen. */}
            <div style={{ display: 'inline-block', background: '#fff', border: '1px solid var(--mist)', padding: 12, boxShadow: '0 8px 24px rgba(28, 43, 58, 0.1)' }}>
              <ProtectedImage src={e.contactSheet} alt={e.contactSheetAlt} loading="lazy" className="edition-sheet-view" />
            </div>
            {/* 2026-10-07, Susan: suggest these are not the complete works. */}
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--mid)', margin: '1rem 0 0' }}>
              A glimpse of the pages of {shortTitle}, not the complete work.
            </p>
            {reader && (
              <div style={{ marginTop: '2rem' }}>
                <TextLinkRow center>
                  <TextLink href={reader} cta={`edition-${e.slug}-reader`}>Read {shortTitle} Online</TextLink>
                </TextLinkRow>
              </div>
            )}
          </div>
        </section>

        {/* Only when a presentation has actually been built from this
            Edition (2026-10-05, Susan) — secondary to the work, farther
            down. No block at all otherwise. */}
        {presentation && (
          <section aria-labelledby="presentation-heading" style={{ ...section, background: '#fff', textAlign: 'center' }}>
            <div style={{ maxWidth: 640, margin: '0 auto' }}>
              <h2 id="presentation-heading" style={h2Style}>Experience {shortTitle} as a Presentation</h2>
              {presentation.editionPitch && <p style={bodyStyle}>{presentation.editionPitch}</p>}
              <div style={{ marginTop: '1.5rem' }}>
                <TextLinkRow center>
                  <TextLink href={`/presentations/${presentation.slug}`} cta={`edition-${e.slug}-presentation`}>
                    View the Presentation
                  </TextLink>
                </TextLinkRow>
              </div>
            </div>
          </section>
        )}

        <section style={{ padding: '3rem 1.5rem 4rem', textAlign: 'center' }}>
          <TextLinkRow center>
            <TextLink href="/collection" cta={`edition-${e.slug}-all`}>All the Figures</TextLink>
          </TextLinkRow>
        </section>
      </main>
      <Footer />
    </>
  )
}
