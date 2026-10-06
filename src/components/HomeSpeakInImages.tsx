import AtmosphericHeader from '@/components/AtmosphericHeader'

// HomeSpeakInImages — homepage section 3, "You already speak in images"
// (2026-10-05, per Susan). Replaces HomeCollectionPremise on the homepage:
// same wording, without the repeated Queen Ann poem/portrait (Queen Ann is
// already the hero image). The three phrases reveal once, phrase by phrase,
// when the section first scrolls into view; with reduced motion they simply
// appear. HomeCollectionPremise.tsx is kept in the codebase, unused.

const PHRASES = ['“We’ve put up walls.”', '“I’m at a crossroads.”', '“It became a stepping stone.”']

export default function HomeSpeakInImages({ bare = false }: { bare?: boolean }) {
  const content = (
      <div style={{ maxWidth: 820, margin: '0 auto', padding: bare ? '0 0 0' : '1rem 1.5rem var(--band-gap)', textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>AwakenArts, The Stories that Shape Us</p>
        <h2
          id="speak-in-images-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', lineHeight: 1.2, color: 'var(--deep)', margin: '1rem 0 1rem' }}
        >
          You already speak in images. We all do.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', lineHeight: 1.7, color: 'var(--mid)', maxWidth: 760, margin: '0 auto 2.25rem', ...({ textWrap: 'pretty' } as React.CSSProperties) }}>
          AwakenArts begins with familiar images found in everyday language and experience.
        </p>
        {/* No animation (2026-10-05, Susan): the phrases simply appear. */}
        <p style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem 2rem', margin: 0 }}>
          {PHRASES.map((p) => (
            <span
              key={p}
              style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'var(--t-poetic)', color: 'var(--gold)', whiteSpace: 'nowrap' }}
            >
              {p}
            </span>
          ))}
        </p>
      </div>
  )

  // 2026-10-05, Susan: on the homepage this is the first movement of one
  // combined section with Christian Symbols (see HomeChristianSymbols'
  // `prelude`), so it renders bare there.
  if (bare) return content
  return (
    <section aria-labelledby="speak-in-images-heading" style={{ background: 'var(--cream)' }}>
      <AtmosphericHeader
        src="/images/headers/collection-threshold.jpg"
        alt="A dark sky heavy with clouds breaking open to warm gold light along the horizon"
        fadeTo="var(--cream)"
      />
      {content}
    </section>
  )
}
