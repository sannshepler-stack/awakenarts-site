// Opening of /christian-symbols and each /christian-symbols/[slug] page —
// one shared block so both stay identical (2026-10-05, Susan).

export default function ChristianSymbolsHero() {
  return (
    <section className="symbols-hero">
      <h1
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 400,
          fontSize: 'var(--t-page)',
          lineHeight: 1.15,
          color: 'var(--deep)',
          margin: '0 0 1.25rem',
          // One line on desktop (2026-10-05, Susan): the heading may run
          // wider than the narrow text column; it wraps evenly on phones.
          width: 'max-content',
          maxWidth: 'calc(100vw - 3rem)',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          ...({ textWrap: 'balance' } as React.CSSProperties),
        }}
      >
        Symbols for the Christian Soul
      </h1>
      <p className="symbols-hero__lead">Scripture speaks in symbols.</p>
      <p className="symbols-hero__line">A lamp. A path. A flower. A vine. A shepherd.</p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--t-body)',
          lineHeight: 1.7,
          color: 'var(--mid)',
          maxWidth: 620,
          margin: '1.25rem auto 0',
          ...({ textWrap: 'pretty' } as React.CSSProperties),
        }}
      >
        AwakenArts works within the Christian tradition while engaging literature, psychology, mythology, folklore, and
        a long history of human imagination.
      </p>
    </section>
  )
}
