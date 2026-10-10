import Link from 'next/link'
import type { Presentation } from '@/data/presentations'
import { bodyStyle, labelStyle } from '@/components/guided/GuidedParts'

// Shared pieces for Presentations & Workshops (2026-10-05).

export function PresentationTile({ p }: { p: Presentation }) {
  return (
    <Link
      href={`/presentations/${p.slug}`}
      data-cta={`presentation-tile-${p.slug}`}
      style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--mist)', background: '#fff', padding: '1.5rem' }}
    >
      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.imageAlt || ''} loading="lazy" style={{ width: '100%', aspectRatio: '3 / 2', objectFit: 'cover', objectPosition: p.imagePosition || 'center', display: 'block', marginBottom: '1.1rem' }} />
      )}
      {(p.format || p.length) && (
        <span style={{ ...labelStyle, display: 'block', fontSize: '0.72rem' }}>
          {[p.format, p.length].filter(Boolean).join(' · ')}
        </span>
      )}
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', lineHeight: 1.2, color: 'var(--deep)', marginTop: '0.35rem' }}>
        {p.title}{'\u00A0'}<span aria-hidden="true" style={{ opacity: 0.5 }}>→</span>
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
