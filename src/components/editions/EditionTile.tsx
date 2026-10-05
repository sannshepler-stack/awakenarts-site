import Link from 'next/link'
import type { Edition } from '@/data/editions'

// EditionTile — one AwakenArts Edition, shown as the work itself
// (2026-10-05, Susan): figure artwork, title, the Edition's own themes.
// No status, no hosting or event language.

const SCRIPTURE_REF = /^(?:[1-3]\s)?[A-Z][a-z]+\s\d+:\d+/

export function editionThemeLine(e: Pick<Edition, 'themes'>, max?: number) {
  const t = e.themes.filter((x) => !SCRIPTURE_REF.test(x))
  return (max ? t.slice(0, max) : t).join(' · ')
}

export default function EditionTile({ e }: { e: Edition }) {
  return (
    <Link href={`/editions/${e.slug}`} data-cta={`edition-tile-${e.slug}`} style={{ display: 'block', textDecoration: 'none', textAlign: 'left' }}>
      <span style={{ display: 'block', background: '#fff', border: '1px solid var(--mist)', padding: 10, boxShadow: '0 6px 18px rgba(28, 43, 58, 0.08)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/editions/${e.slug}-figure.jpg`}
          alt={`${e.title} — the figure artwork`}
          loading="lazy"
          style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }}
        />
      </span>
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: 'var(--deep)', marginTop: '1rem' }}>
        {e.title} <span aria-hidden="true" style={{ opacity: 0.5 }}>→</span>
      </span>
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.45, color: 'var(--mid)', marginTop: '0.35rem' }}>
        {editionThemeLine(e, 3)}
      </span>
    </Link>
  )
}
