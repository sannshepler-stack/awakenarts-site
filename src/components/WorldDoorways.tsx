import Link from 'next/link'

// WorldDoorways — "into the AwakenArts world": the three doorways a visitor
// can take after a Symbol Portal (Symbol Card → Symbol Portal → AwakenArts
// World). Lines are existing approved site copy; Books has none yet, so it
// shows its title only.

const DOORS: { href: string; title: string; line?: string }[] = [
  {
    href: '/collection',
    title: 'The Collection',
    line: 'Each figure is a distinct world to explore.',
  },
  {
    href: '/awakenarts-path',
    title: 'The AwakenArts Path',
    line: 'Poetry, Image, and Seeing Your Life',
  },
  { href: '/books', title: 'Books & Journals' },
]

export default function WorldDoorways({ heading = 'Continue into AwakenArts' }: { heading?: string }) {
  return (
    <section aria-label={heading} style={{ background: 'var(--cream)', padding: 'var(--band-gap) 1.5rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'var(--t-section)',
            color: 'var(--deep)',
            textAlign: 'center',
            margin: '0 0 2.5rem',
          }}
        >
          {heading}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {DOORS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="world-door"
              style={{
                display: 'block',
                textDecoration: 'none',
                border: '1px solid var(--mist)',
                borderRadius: 4,
                padding: '1.75rem 1.5rem',
                background: '#fff',
              }}
            >
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: 'var(--deep)', margin: 0 }}>
                {d.title} <span aria-hidden="true" style={{ opacity: 0.55 }}>→</span>
              </span>
              {d.line && (
                <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--mid)', marginTop: '0.6rem' }}>
                  {d.line}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
