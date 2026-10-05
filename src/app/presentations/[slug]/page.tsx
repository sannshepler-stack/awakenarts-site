import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import { Facilitator, InquirySection, bodyStyle, h2Style, labelStyle } from '@/components/guided/GuidedParts'
import { PresentationTile, presentationInquiry } from '@/components/presentations/PresentationParts'
import { PRESENTATIONS, PRESENTATION_AUDIENCES, getPresentation } from '@/data/presentations'
import { editions } from '@/data/editions'
import ProtectedImage from '@/components/ProtectedImage'
import TextLink, { TextLinkRow } from '@/components/TextLink'

// /presentations/[slug] — reusable single presentation/workshop page, built
// to be the landing page a flyer or brochure points to. Every block renders
// only when Susan has supplied it.

export function generateStaticParams() {
  return PRESENTATIONS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPresentation(params.slug)
  if (!p) return {}
  return {
    title: `${p.title} — Presentation`,
    description: p.summary,
    alternates: { canonical: `/presentations/${p.slug}` },
    openGraph: p.image ? { images: [p.image] } : undefined,
  }
}

const section: React.CSSProperties = { padding: 'var(--band-gap) 1.5rem' }
const narrow: React.CSSProperties = { maxWidth: 680, margin: '0 auto' }

export default function PresentationPage({ params }: { params: { slug: string } }) {
  const p = getPresentation(params.slug)
  if (!p) notFound()
  const audiences = p.audiences && p.audiences.length > 0 ? p.audiences : PRESENTATION_AUDIENCES
  const others = PRESENTATIONS.filter((x) => x.slug !== p.slug).slice(0, 3)
  const edition = p.edition ? editions.find((e) => e.slug === p.edition) : undefined
  const editionName = edition ? `the ${edition.title.replace(/^The\s+/i, '')} Edition` : ''
  const facts: [string, string][] = []
  if (p.format) facts.push(['Format', p.format])
  if (p.length) facts.push(['Length', p.length])
  facts.push(['For', audiences.join(' · ')])

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ ...section, paddingTop: 'calc(var(--band-gap) + 2rem)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: p.image ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr', gap: '3rem', alignItems: 'center' }}>
            {p.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.imageAlt || ''} style={{ width: '100%', display: 'block', boxShadow: '0 8px 24px rgba(28,43,58,0.1)' }} />
            )}
            <div style={p.image ? undefined : narrow}>
              <p style={labelStyle}>Presentation</p>
              <h1 style={{ ...h2Style, fontSize: 'var(--t-page)', marginBottom: p.subtitle ? '0.3rem' : undefined }}>{p.title}</h1>
              {p.subtitle && (
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--gold)', margin: '0 0 1.25rem' }}>{p.subtitle}</p>
              )}
              {p.summary && <p style={bodyStyle}>{p.summary}</p>}
              <dl style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: '0.5rem 1.25rem', margin: '1.5rem 0', borderTop: '1px solid var(--mist)', paddingTop: '1.25rem' }}>
                {facts.map(([k, v]) => (
                  <div key={k} style={{ display: 'contents' }}>
                    <dt style={{ ...labelStyle, fontSize: '0.72rem', alignSelf: 'center' }}>{k}</dt>
                    <dd style={{ ...bodyStyle, margin: 0 }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <TextLinkRow>
                <TextLink href="#inquire" cta={`presentation-${p.slug}-inquire`}>Register or Inquire</TextLink>
              </TextLinkRow>
            </div>
          </div>
        </section>

        {edition && (
          <section aria-labelledby="edition-heading" style={{ ...section, background: '#fff', textAlign: 'center' }}>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <p style={labelStyle}>Built from</p>
              <h2 id="edition-heading" style={h2Style}>{editionName.replace(/^the /, 'The ')}</h2>
              <p style={{ ...bodyStyle, maxWidth: 600, margin: '0 auto 2rem' }}>
                The Edition is the work. This presentation is one way to experience it.
              </p>
              <p style={{ ...labelStyle, fontSize: '0.72rem', color: 'var(--mid)', marginBottom: '0.9rem' }}>Edition preview</p>
              <div style={{ background: '#fff', border: '1px solid var(--mist)', padding: 14, boxShadow: '0 8px 24px rgba(28, 43, 58, 0.1)' }}>
                <ProtectedImage src={edition.contactSheet} alt={edition.contactSheetAlt} loading="lazy" className="edition-preview-img" />
              </div>
              <div style={{ marginTop: '2rem' }}>
                <TextLinkRow center>
                  <TextLink href={`/editions/${edition.slug}`} cta={`presentation-${p.slug}-edition`}>Explore {editionName.replace(/^the /, 'the ')}</TextLink>
                </TextLinkRow>
              </div>
            </div>
          </section>
        )}

        {p.covers && p.covers.length > 0 && (
          <section aria-labelledby="covers-heading" style={{ ...section, background: '#fff' }}>
            <div style={narrow}>
              <h2 id="covers-heading" style={h2Style}>What This Presentation Covers</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.8rem' }}>
                {p.covers.map((c) => (
                  <li key={c} style={{ ...bodyStyle, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid var(--gold-lt)' }}>{c}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.related && (
          <section style={{ ...section, textAlign: 'center' }}>
            <p style={labelStyle}>Related</p>
            <p style={{ marginTop: '1rem' }}>
              <Link href={p.related.href} className="home-coll-cta home-coll-cta--light-surface" data-cta={`presentation-${p.slug}-related`}>
                {p.related.label}
              </Link>
            </p>
          </section>
        )}

        <section aria-labelledby="presenter-heading" style={{ ...section, background: p.related ? '#fff' : undefined }}>
          <div style={narrow}>
            <h2 id="presenter-heading" style={labelStyle}>Your Presenter</h2>
            <div style={{ marginTop: '1.25rem' }}>
              <Facilitator note="Creator of AwakenArts and the original image-poem works at the center of its workshops." />
            </div>
          </div>
        </section>

        <InquirySection
          preselect={p.slug}
          heading="Register or Inquire"
          line="Attend this presentation or ask about bringing it to your group."
          config={presentationInquiry()}
        />

        {others.length > 0 && (
          <section aria-label="Other presentations" style={section}>
            <div style={{ maxWidth: 1080, margin: '0 auto' }}>
              <h2 style={{ ...labelStyle, textAlign: 'center', marginBottom: '2rem' }}>Other Presentations &amp; Workshops</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {others.map((o) => (
                  <PresentationTile key={o.slug} p={o} />
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <Link href="/presentations" className="home-coll-cta home-coll-cta--light-surface">All Presentations &amp; Workshops</Link>
              </p>
            </div>
          </section>
        )}
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
