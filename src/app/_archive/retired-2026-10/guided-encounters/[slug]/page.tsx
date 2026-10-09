import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import { guidedEncounters, getGuidedEncounter, editionPhrase } from '@/data/guidedEncounters'
import {
  EncounterTile,
  Facilitator,
  InquirySection,
  bodyStyle,
  h2Style,
  labelStyle,
  statusLine,
} from '@/components/guided/GuidedParts'

// /guided-encounters/[slug] — the reusable Guided Encounter template
// (Rebuild Plan §5). Replaces /editions/[slug]; description and themes are
// the Edition's own, verbatim.

export function generateStaticParams() {
  return guidedEncounters.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuidedEncounter(params.slug)
  if (!g) return {}
  return {
    title: `${g.title} — Guided Encounter`,
    description: g.description,
    alternates: { canonical: `/guided-encounters/${g.slug}` },
    openGraph: { images: [g.image] },
  }
}

const section: React.CSSProperties = { padding: 'var(--band-gap) 1.5rem' }
const narrow: React.CSSProperties = { maxWidth: 680, margin: '0 auto' }

export default function GuidedEncounterPage({ params }: { params: { slug: string } }) {
  const g = getGuidedEncounter(params.slug)
  if (!g) notFound()
  const others = guidedEncounters.filter((x) => x.slug !== g.slug).slice(0, 3)
  const details: [string, string][] = []
  if (g.length) details.push(['Length', g.length])
  if (g.audience) details.push(['For', g.audience])
  if (g.cost) details.push(['Cost', g.cost])

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ ...section, paddingTop: 'calc(var(--band-gap) + 2rem)' }}>
          <div
            style={{
              maxWidth: 1080,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div style={{ background: '#fff', border: '1px solid var(--mist)', padding: 14, boxShadow: '0 8px 24px rgba(28, 43, 58, 0.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.image} alt={g.imageAlt} style={{ width: '100%', display: 'block' }} />
            </div>
            <div>
              <p style={labelStyle}>Guided Encounter · {statusLine(g)}</p>
              <h1 style={{ ...h2Style, fontSize: 'var(--t-page)', marginBottom: '0.3rem' }}>{g.title}</h1>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--gold)', margin: '0 0 1.25rem' }}>
                A Guided Encounter with {editionPhrase(g.title)}
              </p>
              <p style={bodyStyle}>{g.description}</p>
              <p style={{ ...labelStyle, fontSize: '0.72rem', marginTop: '1.5rem' }}>Themes</p>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--deep)', margin: '0.4rem 0 1.75rem' }}>
                {g.themes.join(' · ')}
              </p>
              <Link href="#inquire" className="home-coll-cta home-coll-cta--light-surface" data-cta={`guided-${g.slug}-inquire`}>
                {g.status === 'open' ? 'Register or Inquire' : 'Inquire About Hosting'}
              </Link>
            </div>
          </div>
        </section>

        {(details.length > 0 || (g.sessions && g.sessions.length > 0)) && (
          <section aria-label="Details" style={{ ...section, paddingTop: 0 }}>
            <div style={{ ...narrow, borderTop: '1px solid var(--mist)', borderBottom: '1px solid var(--mist)', padding: '1.5rem 0' }}>
              <dl style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: '0.6rem 1.5rem', margin: 0 }}>
                {details.map(([k, v]) => (
                  <div key={k} style={{ display: 'contents' }}>
                    <dt style={{ ...labelStyle, fontSize: '0.72rem', alignSelf: 'center' }}>{k}</dt>
                    <dd style={{ ...bodyStyle, margin: 0 }}>{v}</dd>
                  </div>
                ))}
                {g.sessions?.map((s, i) => (
                  <div key={s} style={{ display: 'contents' }}>
                    <dt style={{ ...labelStyle, fontSize: '0.72rem', alignSelf: 'center' }}>{i === 0 ? 'Sessions' : ''}</dt>
                    <dd style={{ ...bodyStyle, margin: 0 }}>{s}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {g.companionReader && (
          <section style={{ ...section, paddingTop: 0, textAlign: 'center' }}>
            <Link href={g.companionReader} className="home-coll-cta home-coll-cta--light-surface" data-cta={`guided-${g.slug}-reader`}>
              Read {g.title} Online
            </Link>
          </section>
        )}

        <section aria-labelledby="facilitator-heading" style={section}>
          <div style={narrow}>
            <h2 id="facilitator-heading" style={labelStyle}>Your Facilitator</h2>
            <div style={{ marginTop: '1.25rem' }}>
              <Facilitator />
            </div>
          </div>
        </section>

        <InquirySection preselect={g.slug} />

        <section aria-label="Other Guided Encounters" style={section}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <h2 style={{ ...labelStyle, textAlign: 'center', marginBottom: '2rem' }}>Other Guided Encounters</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2.5rem 2rem' }}>
              {others.map((o) => (
                <EncounterTile key={o.slug} g={o} />
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/guided-encounters" className="home-coll-cta home-coll-cta--light-surface">All Guided Encounters</Link>
            </p>
          </div>
        </section>

        <StayConnected source={`guided-${g.slug}`} />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
