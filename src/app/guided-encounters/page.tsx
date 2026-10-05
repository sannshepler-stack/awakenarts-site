import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import { guidedEncounters } from '@/data/guidedEncounters'
import {
  EncounterTile,
  Facilitator,
  InquirySection,
  WhatToExpect,
  bodyStyle,
  h2Style,
  labelStyle,
} from '@/components/guided/GuidedParts'

// /guided-encounters — replaces /workshops (Rebuild Plan §5, D3/D4).
// Copy is the former Workshops page's, with "workshop" read as
// "Guided Encounter" where it names the public offering (flagged for
// Susan's review in the Implementation Log).

export const metadata: Metadata = {
  title: 'Guided Encounters',
  description:
    'AwakenArts Guided Encounters with Susan Ann Shepler: a path of discovery through image, language, and symbol — for individuals, churches, clubs, retreats, and groups.',
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
            <p style={bodyStyle}>
              An AwakenArts Guided Encounter begins with original images and poetry and follows what the work reveals.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              <Link href="#current" className="home-coll-cta home-coll-cta--light-surface">Current Offering</Link>
              <Link href="#inquire" className="home-coll-cta home-coll-cta--light-surface" data-cta="guided-index-inquire">Register or Inquire</Link>
            </div>
          </div>
        </section>

        {open.length > 0 && (
          <section id="current" aria-labelledby="current-heading" style={{ ...section, paddingTop: 0 }}>
            <div style={{ ...wrap, maxWidth: 520 }}>
              <h2 id="current-heading" style={{ ...labelStyle, textAlign: 'center', marginBottom: '1.5rem' }}>Current Offering</h2>
              {open.map((g) => (
                <EncounterTile key={g.slug} g={g} emphasis />
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="about-heading" style={{ ...section, background: '#fff' }}>
          <div style={narrow}>
            <p style={labelStyle}>About Guided Encounters</p>
            <h2 id="about-heading" style={h2Style}>A Path of Discovery Through Image, Language, and Symbol</h2>
            <p style={bodyStyle}>
              You already speak in images. We all do. AwakenArts takes that familiar relationship between image and
              language and explores what it can reveal.
            </p>
            <p style={bodyStyle}>
              AwakenArts Guided Encounters are artistic and educational, offering a path of discovery through images,
              poetry, symbolic language, conversation, and reflection. We look more closely at what images and words
              carry, follow their connections, and consider what they may bring into greater awareness.
            </p>
            <h3 style={{ ...h2Style, fontSize: '1.6rem', marginTop: '2.5rem' }}>What to Expect</h3>
            <WhatToExpect />
            <p style={{ ...bodyStyle, marginTop: '1.5rem' }}>
              Each Guided Encounter travels a different symbolic landscape, but the direction remains the same: toward
              greater recognition, awareness, wholeness, and connection.
            </p>
          </div>
        </section>

        <section id="host" aria-labelledby="host-heading" style={section}>
          <div style={wrap}>
            <div style={{ ...narrow, textAlign: 'center', marginBottom: '2.5rem' }}>
              <p style={labelStyle}>For Churches, Clubs, Retreats, and Groups</p>
              <h2 id="host-heading" style={h2Style}>Bring a Guided Encounter to Your Group</h2>
              <p style={bodyStyle}>
                Every AwakenArts Guided Encounter is anchored in one Figure Edition. Each gathers artwork, poetry,
                story, and reflective questions into a world participants enter together.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2.5rem 2rem' }}>
              {host.map((g) => (
                <EncounterTile key={g.slug} g={g} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="facilitator-heading" style={{ ...section, background: '#fff' }}>
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
