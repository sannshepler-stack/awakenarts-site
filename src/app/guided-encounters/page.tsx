import type { Metadata } from 'next'
import TextLink, { TextLinkRow } from '@/components/TextLink'
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
            <h1 style={{ ...h2Style, fontSize: 'var(--t-page)' }}>AwakenArts Guided Encounters</h1>
            {/* Orientation, per Susan 2026-10-05: one simple distinction. */}
            <p style={{ ...bodyStyle, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', lineHeight: 1.5 }}>
              The Edition is the work. The Guided Encounter is the experience of that work.
            </p>
          </div>
        </section>

        {open.map((g) => (
          <section key={g.slug} id="current" aria-labelledby="current-heading" style={{ ...section, paddingTop: 0 }}>
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
              <p style={labelStyle}>Current Guided Encounter</p>
              <h2 id="current-heading" style={{ ...h2Style, margin: '0.6rem 0 0.2rem' }}>{g.title}</h2>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--gold)', margin: '0 0 1rem' }}>
                A Guided Encounter with {editionPhrase(g.title)}
              </p>
              {/* DRAFT for Susan's approval — drawn from the Grismere Edition's own copy. */}
              <p style={{ ...bodyStyle, maxWidth: 600, margin: '0 auto 2.5rem' }}>
                {g.length ? `In ${g.length}, participants` : 'Participants'} practice attention at the threshold between
                what is visible and what remains beneath the surface.
              </p>
              {/* The Edition is shown as a preview of the source work — never as
                  the encounter itself (2026-10-05, Susan). */}
              <p style={{ ...labelStyle, fontSize: '0.72rem', color: 'var(--mid)', marginBottom: '0.9rem' }}>
                Edition preview · {editionPhrase(g.title).replace(/^the /, 'The ')}
              </p>
              <span style={{ display: 'block', background: '#fff', border: '1px solid var(--mist)', padding: 14, boxShadow: '0 8px 24px rgba(28, 43, 58, 0.1)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.editionImage} alt={`Preview of ${editionPhrase(g.title)}: ${g.editionImageAlt}`} loading="lazy" style={{ width: '100%', display: 'block' }} />
              </span>
              <div style={{ marginTop: '2.25rem' }}>
                <TextLinkRow center>
                  <TextLink href={`/guided-encounters/${g.slug}`} cta={`guided-index-explore-${g.slug}`}>Explore {g.title}</TextLink>
                  <TextLink href="#inquire" cta="guided-index-inquire">Register or Inquire</TextLink>
                </TextLinkRow>
              </div>
            </div>
          </section>
        ))}

        <section id="host" aria-labelledby="host-heading" style={{ ...section, background: '#fff' }}>
          <div style={wrap}>
            <div style={{ ...narrow, textAlign: 'center', marginBottom: '2.5rem' }}>
              <p style={labelStyle}>The Editions</p>
              <h2 id="host-heading" style={h2Style}>Explore the AwakenArts Editions</h2>
              {/* 2026-10-05, Susan: say what these works are, not what may
                  eventually happen with them. */}
              <p style={bodyStyle}>
                Each Edition is a distinct body of image, poetry, story, and reflection. Some may become the basis for
                future presentations, workshops, or guided experiences.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2.5rem 2rem' }}>
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
