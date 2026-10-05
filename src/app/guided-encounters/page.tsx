import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import { guidedEncounters, editionPhrase } from '@/data/guidedEncounters'
import { EncounterTile, Facilitator, InquirySection, bodyStyle, h2Style, labelStyle } from '@/components/guided/GuidedParts'

// /guided-encounters — Edition-based reflective experiences only
// (2026-10-05, per Susan). The Edition is the source work; a Guided
// Encounter is one way to experience it. Presentations & Workshops are a
// separate offering at /presentations-workshops and use none of this copy.

export const metadata: Metadata = {
  title: 'Guided Encounters',
  description:
    'Each Guided Encounter brings one AwakenArts Edition into conversation with lived experience through image, poetry, reflection, and discussion.',
  alternates: { canonical: '/guided-encounters' },
}

const section: React.CSSProperties = { padding: 'var(--band-gap) 1.5rem' }
const wrap: React.CSSProperties = { maxWidth: 1080, margin: '0 auto' }
const narrow: React.CSSProperties = { maxWidth: 680, margin: '0 auto' }

export default function GuidedEncountersPage() {
  const open = guidedEncounters.filter((g) => g.status === 'open')
  const host = guidedEncounters.filter((g) => g.status === 'host')

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <AtmosphericHeader
          src="/images/headers/queen-ann-threshold.jpg"
          alt="A crowned figure with windswept hair facing a wide evening sky"
          fadeTo="var(--cream)"
        />

        <section style={{ ...section, paddingTop: '2rem', textAlign: 'center' }}>
          <div style={narrow}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Guided Encounters</p>
            <h1 style={{ ...h2Style, fontSize: 'clamp(2.3rem, 5vw, 3.2rem)' }}>AwakenArts Guided Encounters</h1>
            {/* Orientation, per Susan 2026-10-05: the Edition is the work; the
                Guided Encounter is the experience of that work. */}
            <p style={bodyStyle}>A Guided Encounter is a facilitated experience built from an AwakenArts Edition.</p>
            <p style={bodyStyle}>
              An Edition is the original work — image, poetry, symbolic reflection, and related material. The Guided
              Encounter brings that work into conversation through reflection and discussion.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              {open[0] && (
                <Link href={`/guided-encounters/${open[0].slug}`} className="home-coll-cta home-coll-cta--light-surface" data-cta="guided-index-explore-current">
                  Explore {open[0].title}
                </Link>
              )}
              <Link href="#inquire" className="home-coll-cta home-coll-cta--light-surface" data-cta="guided-index-inquire">
                Register or Inquire
              </Link>
            </div>
          </div>
        </section>

        {open.map((g) => (
          <section key={g.slug} id="current" aria-labelledby="current-heading" style={{ ...section, paddingTop: 0 }}>
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
              <p style={labelStyle}>Current Guided Encounter{g.length ? ` · ${g.length}` : ''}</p>
              <h2 id="current-heading" style={{ ...h2Style, fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: '0.6rem 0 0.2rem' }}>{g.title}</h2>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--gold)', margin: '0 0 2rem' }}>
                A Guided Encounter with {editionPhrase(g.title)}
              </p>
              <Link href={`/guided-encounters/${g.slug}`} data-cta={`guided-index-current-${g.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                <span style={{ display: 'block', background: '#fff', border: '1px solid var(--mist)', padding: 14, boxShadow: '0 8px 24px rgba(28, 43, 58, 0.1)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.editionImage} alt={g.editionImageAlt} loading="lazy" style={{ width: '100%', display: 'block' }} />
                </span>
                <span style={{ ...labelStyle, display: 'block', fontSize: '0.72rem', marginTop: '1rem', color: 'var(--mid)' }}>
                  The {g.title.replace(/^The\s+/i, '')} Edition
                </span>
              </Link>
            </div>
          </section>
        ))}

        <section id="host" aria-labelledby="host-heading" style={{ ...section, background: '#fff' }}>
          <div style={wrap}>
            <div style={{ ...narrow, textAlign: 'center', marginBottom: '2.5rem' }}>
              <p style={labelStyle}>The Editions</p>
              <h2 id="host-heading" style={h2Style}>Bring a Guided Encounter to Your Group</h2>
              <p style={bodyStyle}>
                Every Guided Encounter is anchored in one AwakenArts Edition. Each Edition gathers artwork, poetry,
                story, and reflective questions into a world participants enter together — and can be brought to your
                church, club, retreat, or group.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2.5rem 2rem' }}>
              {host.map((g) => (
                <EncounterTile key={g.slug} g={g} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="facilitator-heading" style={section}>
          <div style={narrow}>
            <h2 id="facilitator-heading" style={labelStyle}>Your Facilitator</h2>
            <div style={{ marginTop: '1.25rem' }}>
              <Facilitator />
            </div>
          </div>
        </section>

        <InquirySection />
        <StayConnected source="guided-encounters" />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
