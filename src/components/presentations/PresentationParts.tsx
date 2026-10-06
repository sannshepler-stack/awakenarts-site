import Link from 'next/link'
import type { InquiryConfig } from '@/components/guided/InquiryForm'
import type { Presentation } from '@/data/presentations'
import { PRESENTATIONS } from '@/data/presentations'
import { bodyStyle, labelStyle } from '@/components/guided/GuidedParts'

// Shared pieces for Presentations & Workshops (2026-10-05).

/** 'Libraries' → 'library', 'Community groups' → 'community group'. */
function singular(a: string) {
  const w = a.toLowerCase()
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y'
  if (w.endsWith('s')) return w.slice(0, -1)
  return w
}

export function presentationInquiry(p?: Presentation): InquiryConfig {
  return {
    ...(p?.registration
      ? { mode: 'register' as const, confirmation: p.registration.gift, submitLabel: 'Register' }
      : {}),
    subjectPrefix: 'Presentation or workshop inquiry',
    offerings:
      PRESENTATIONS.length > 0
        ? { label: 'Presentation', options: PRESENTATIONS.map((p) => ({ value: p.slug, title: p.title })) }
        : undefined,
    // A presentation with its own audience list offers only those settings
    // (2026-10-05: no church-specific options on Grismere).
    kinds: p?.audiences?.length
      ? [
          'Attending a presentation',
          ...p.audiences.map((a) => `Hosting for a ${singular(a)}`),
          'Something else',
        ]
      : [
          'Attending a presentation',
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
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', lineHeight: 1.2, color: 'var(--deep)', marginTop: '0.35rem' }}>
        {p.title} <span aria-hidden="true" style={{ opacity: 0.5 }}>→</span>
      </span>
      {p.subtitle && (
        <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--gold)', marginTop: '0.2rem' }}>
          {p.subtitle}
        </span>
      )}
      {p.summary && <span style={{ ...bodyStyle, display: 'block', fontSize: '0.95rem', color: 'var(--mid)', margin: '0.6rem 0 0' }}>{p.summary}</span>}
    </Link>
  )
}
