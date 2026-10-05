import Link from 'next/link'
import { FREE_RESOURCES } from '@/data/books'

// FreeResources — the two free resources as two distinct items (cover +
// title + line), used on the homepage Books section and /books.

export default function FreeResources({ source }: { source: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', maxWidth: 820, margin: '0 auto', textAlign: 'left' }}>
      {FREE_RESOURCES.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          data-cta={`${source}-free-${r.href.replace('/', '')}`}
          style={{ display: 'flex', gap: '1.1rem', alignItems: 'center', textDecoration: 'none', border: '1px solid var(--mist)', padding: '1rem 1.1rem', background: '#fff' }}
        >
          {r.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={r.image} alt={r.imageAlt || ''} loading="lazy" style={{ width: 64, height: 'auto', flex: '0 0 auto', boxShadow: '0 4px 12px rgba(28,43,58,0.15)' }} />
          )}
          <span>
            <span style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Free
            </span>
            <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1.3rem', lineHeight: 1.2, color: 'var(--deep)', marginTop: '0.2rem' }}>
              {r.title} <span aria-hidden="true" style={{ opacity: 0.55 }}>→</span>
            </span>
            <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--mid)', marginTop: '0.25rem' }}>{r.line}</span>
          </span>
        </Link>
      ))}
    </div>
  )
}
