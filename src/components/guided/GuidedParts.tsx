import Link from 'next/link'
import type { GuidedEncounter } from '@/data/guidedEncounters'
import InquiryForm, { type InquiryConfig } from '@/components/guided/InquiryForm'

// Shared building blocks for the Guided Encounter template (2026-10-05).

export const ink = 'var(--deep)'
export const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--label-size)',
  fontWeight: 600,
  letterSpacing: 'var(--label-tracking)',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  margin: 0,
}
export const h2Style: React.CSSProperties = {
  fontFamily: 'var(--serif)',
  fontWeight: 400,
  fontSize: 'var(--t-section)',
  color: ink,
  margin: '0.75rem 0 1rem',
  lineHeight: 1.15,
}
export const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--body-size)',
  lineHeight: 'var(--body-line)',
  color: ink,
  margin: '0 0 1rem',
}

export function statusLine(g: GuidedEncounter): string {
  return g.status === 'open' ? 'Now offering' : 'Available to host'
}

export function EncounterTile({ g, emphasis = false }: { g: GuidedEncounter; emphasis?: boolean }) {
  return (
    <Link
      href={`/guided-encounters/${g.slug}`}
      data-cta={`guided-tile-${g.slug}`}
      style={{ display: 'block', textDecoration: 'none', textAlign: 'left' }}
    >
      <span
        style={{
          display: 'block',
          background: '#fff',
          border: '1px solid var(--mist)',
          padding: emphasis ? 14 : 10,
          boxShadow: '0 6px 18px rgba(28, 43, 58, 0.08)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={g.image} alt={g.imageAlt} loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }} />
      </span>
      <span style={{ ...labelStyle, display: 'block', fontSize: '0.72rem', marginTop: '1rem' }}>{statusLine(g)}</span>
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: ink, marginTop: '0.3rem' }}>
        {g.title} <span aria-hidden="true" style={{ opacity: 0.5 }}>→</span>
      </span>
      {g.length && (
        <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--mid)', marginTop: '0.25rem' }}>
          {g.length}
        </span>
      )}
    </Link>
  )
}

/** A lead + text list (used by Presentations & Workshops). */
export function LeadList({ items }: { items: { lead: string; text: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.9rem' }}>
      {items.map((item) => (
        <li key={item.lead} style={{ ...bodyStyle, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid var(--gold-lt)' }}>
          <strong style={{ fontWeight: 600 }}>{item.lead}</strong> — {item.text}
        </li>
      ))}
    </ul>
  )
}

export function Facilitator({ note }: { note?: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/about/susan-ann-shepler.jpg"
        alt="Susan Ann Shepler"
        loading="lazy"
        style={{ width: 128, height: 128, objectFit: 'cover', objectPosition: '50% 35%', borderRadius: '50%', border: '1px solid var(--gold-lt)' }}
      />
      <div style={{ flex: '1 1 260px' }}>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: ink, margin: 0 }}>Susan Ann Shepler</p>
        <p style={{ ...bodyStyle, color: 'var(--mid)', margin: '0.2rem 0 0.6rem', fontSize: '0.95rem' }}>
          M.A. Counseling · Certified Journal Instructor · Certified Transformative Language Artist
        </p>
        {note && <p style={{ ...bodyStyle, margin: 0 }}>{note}</p>}
        <Link href="/about" style={{ display: 'inline-block', marginTop: '0.6rem', fontFamily: 'var(--sans)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          About Susan →
        </Link>
      </div>
    </div>
  )
}

export function InquirySection({
  preselect,
  id = 'inquire',
  eyebrow = 'Register or Inquire',
  heading = 'Attend a Guided Encounter',
  line,
  config,
}: {
  preselect?: string
  id?: string
  eyebrow?: string
  heading?: string
  line?: string
  config?: InquiryConfig
}) {
  return (
    <section id={id} aria-label={eyebrow} style={{ background: 'var(--warm)', padding: 'var(--band-gap) 1.5rem' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={labelStyle}>{eyebrow}</p>
          <h2 style={h2Style}>{heading}</h2>
          {line && <p style={{ ...bodyStyle, color: 'var(--mid)' }}>{line}</p>}
        </div>
        <InquiryForm preselect={preselect} config={config} />
      </div>
    </section>
  )
}
