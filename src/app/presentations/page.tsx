import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import { Facilitator, InquirySection, LeadList, bodyStyle, h2Style, labelStyle } from '@/components/guided/GuidedParts'
import { PresentationTile, presentationInquiry } from '@/components/presentations/PresentationParts'
import {
  ABOUT_WORKSHOPS,
  PRESENTATIONS,
  PRESENTATION_AUDIENCES,
  PRESENTATION_FORMAT,
  WORKSHOP_DIRECTION,
  WORKSHOP_WHAT_TO_EXPECT,
} from '@/data/presentations'

// /presentations — Presentations & Workshops, a distinct marketing stream
// (2026-10-05, per Susan): talks and workshops for churches, clubs,
// libraries, retreats, and community groups; supports flyers, brochures and
// per-presentation landing pages (/presentations/[slug]). Separate from
// Guided Encounters — no shared language or offers. Copy is the former
// /workshops page's, verbatim; presentations and format render once
// supplied in src/data/presentations.ts.

export const metadata: Metadata = {
  title: 'Presentations & Workshops',
  description:
    'AwakenArts presentations and workshops with Susan Ann Shepler for churches, clubs, libraries, retreats, and community groups.',
  alternates: { canonical: '/presentations' },
}

const section: React.CSSProperties = { padding: 'var(--band-gap) 1.5rem' }
const narrow: React.CSSProperties = { maxWidth: 680, margin: '0 auto' }

export default function PresentationsPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <AtmosphericHeader
          src="/images/headers/poetry-manuscript.jpg"
          alt="An open manuscript of poetry on a writing desk in soft light"
          fadeTo="var(--cream)"
        />

        {/* What presentations and workshops are */}
        <section style={{ ...section, paddingTop: '2rem' }}>
          <div style={narrow}>
            <p className="eyebrow">Presentations &amp; Workshops</p>
            <h1 style={{ ...h2Style, fontSize: 'var(--t-page)' }}>{ABOUT_WORKSHOPS.lede}</h1>
            {ABOUT_WORKSHOPS.body.map((p) => (
              <p key={p} style={bodyStyle}>{p}</p>
            ))}
            <p style={{ marginTop: '1.75rem' }}>
              <Link href="#inquire" className="home-coll-cta home-coll-cta--light-surface" data-cta="presentations-host-top">
                Host a Presentation
              </Link>
            </p>
          </div>
        </section>

        {/* Current presentations & workshops */}
        {PRESENTATIONS.length > 0 && (
          <section aria-labelledby="current-heading" style={{ ...section, background: '#fff' }}>
            <div style={{ maxWidth: 1080, margin: '0 auto' }}>
              <h2 id="current-heading" style={{ ...h2Style, textAlign: 'center', marginBottom: '2.5rem' }}>Current Presentations &amp; Workshops</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {PRESENTATIONS.map((p) => (
                  <PresentationTile key={p.slug} p={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Audience / venues + typical format */}
        <section aria-labelledby="for-heading" style={section}>
          <div style={narrow}>
            <h2 id="for-heading" style={h2Style}>Who They Are For</h2>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--gold)', margin: 0 }}>
              {PRESENTATION_AUDIENCES.join(' · ')}
            </p>
            {PRESENTATION_FORMAT.length > 0 && (
              <>
                <h3 style={{ ...h2Style, fontSize: 'var(--t-card)', marginTop: '2.5rem' }}>Format &amp; Length</h3>
                {PRESENTATION_FORMAT.map((p) => (
                  <p key={p} style={bodyStyle}>{p}</p>
                ))}
              </>
            )}
          </div>
        </section>

        {/* What participants can expect */}
        <section aria-labelledby="expect-heading" style={{ ...section, background: '#fff' }}>
          <div style={narrow}>
            <h2 id="expect-heading" style={h2Style}>What to Expect</h2>
            <LeadList items={WORKSHOP_WHAT_TO_EXPECT} />
            <p style={{ ...bodyStyle, marginTop: '1.5rem' }}>{WORKSHOP_DIRECTION}</p>
          </div>
        </section>

        {/* Facilitator credentials */}
        <section aria-labelledby="facilitator-heading" style={section}>
          <div style={narrow}>
            <h2 id="facilitator-heading" style={labelStyle}>Your Presenter</h2>
            <div style={{ marginTop: '1.25rem' }}>
              <Facilitator note="Creator of AwakenArts and the original image-poem works at the center of its workshops." />
            </div>
          </div>
        </section>

        {/* Host / inquiry */}
        <InquirySection
          eyebrow="Host or Inquire"
          heading="Bring a Presentation or Workshop to Your Group"
          line="Recognition is rarely a solitary experience. It deepens as we learn to see alongside others."
          config={presentationInquiry()}
        />
        <StayConnected source="presentations" />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
