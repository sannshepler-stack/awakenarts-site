import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import { Facilitator, InquirySection, bodyStyle, h2Style, labelStyle } from '@/components/guided/GuidedParts'
import { PresentationTile, presentationInquiry } from '@/components/presentations/PresentationParts'
import { PRESENTATIONS, PRESENTATION_AUDIENCES, getPresentation } from '@/data/presentations'
import TextLink, { TextLinkRow } from '@/components/TextLink'

// /presentations/[slug] — reusable single presentation/workshop page, built
// to be the landing page a flyer or brochure points to, and where people
// register. A presentation is its own offering, not founded on an Edition
// (2026-10-05, Susan): no Edition material or Edition links here. Every block renders
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
                <TextLink href="#inquire" cta={`presentation-${p.slug}-inquire`}>{p.registration ? 'Register' : 'Register or Inquire'}</TextLink>
              </TextLinkRow>
            </div>
          </div>
        </section>

        {p.happens && p.happens.length > 0 && (
          <section aria-labelledby="happens-heading" style={{ ...section, background: '#fff' }}>
            <div style={narrow}>
              <h2 id="happens-heading" style={h2Style}>What Happens</h2>
              {p.happens.map((t) => (
                <p key={t} style={bodyStyle}>{t}</p>
              ))}
            </div>
          </section>
        )}

        {p.participants && p.participants.length > 0 && (
          <section aria-labelledby="participants-heading" style={section}>
            <div style={narrow}>
              <h2 id="participants-heading" style={h2Style}>What You Will See and Do</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.8rem' }}>
                {p.participants.map((c) => (
                  <li key={c} style={{ ...bodyStyle, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid var(--gold-lt)' }}>{c}</li>
                ))}
              </ul>
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
          heading="Register"
          line={p.registration?.gift ?? 'Attend this presentation or ask about bringing it to your group.'}
          config={presentationInquiry(p)}
        />

        {p.materials && p.materials.length > 0 && (
          <section aria-labelledby="materials-heading" style={section}>
            <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
              <p id="materials-heading" style={labelStyle}>Accompanying the Presentation</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '1.75rem', textAlign: 'left' }}>
                {p.materials.map((m) => (
                  <div key={m.title} style={{ border: '1px solid var(--mist)', background: '#fff', padding: '1.6rem 1.5rem' }}>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: 'var(--deep)', margin: 0 }}>{m.title}</p>
                    <p style={{ ...bodyStyle, margin: '0.5rem 0 0' }}>{m.line}</p>
                    {m.note && <p style={{ ...labelStyle, fontSize: '0.7rem', margin: '0.9rem 0 0' }}>{m.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
