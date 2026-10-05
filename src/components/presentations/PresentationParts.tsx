import Link from 'next/link'
import type { InquiryConfig } from '@/components/guided/InquiryForm'
import type { Presentation } from '@/data/presentations'
import { PRESENTATIONS } from '@/data/presentations'
import { bodyStyle, labelStyle } from '@/components/guided/GuidedParts'

// Shared pieces for the Presentations & Workshops stream (2026-10-05).
// Deliberately separate from Guided Encounters: no shared copy or labels.

export function presentationInquiry(): InquiryConfig {
  return {
    subjectPrefix: 'Presentation or workshop inquiry',
    offerings:
      PRESENTATIONS.length > 0
        ? { label: 'Presentation', options: PRESENTATIONS.map((p) => ({ value: p.slug, title: p.title })) }
        : undefined,
    kinds: [
      'Hosting for a church',
      'Hosting for a club',
      'Hosting for a library',
      'Hosting for a retreat',
      'Hosting for a community group',
      'Something else',
    ],
    keepLabel: 'Keep me informed about AwakenArts presentations and workshops.',
    kitSource: 'presentation-inquiry',
    cta: 'presentation-inquiry',
  }
}

export function PresentationTile({ p }: { p: Presentation }) {
  return (
    <Link
      href={`/presentations/${p.slug}`}
      data-cta={`presentation-tile-${p.slug}`}
      style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--mist)', background: '#fff', padding: '1.5rem' }}
    >
      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.imageAlt || ''} loading="lazy" style={{ width: '100%', aspectRatio: '3 / 2', objectFit: 'cover', display: 'block', marginBottom: '1.1rem' }} />
      )}
      {(p.format || p.length) && (
        <span style={{ ...labelStyle, display: 'block', fontSize: '0.72rem' }}>
          {[p.format, p.length].filter(Boolean).join(' · ')}
        </span>
      )}
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1.6rem', lineHeight: 1.2, color: 'var(--deep)', marginTop: '0.35rem' }}>
        {p.title} <span aria-hidden="true" style={{ opacity: 0.5 }}>→</span>
      </span>
      {p.summary && <span style={{ ...bodyStyle, display: 'block', fontSize: '0.95rem', color: 'var(--mid)', margin: '0.6rem 0 0' }}>{p.summary}</span>}
    </Link>
  )
}
