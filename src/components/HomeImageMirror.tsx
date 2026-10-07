import AtmosphericHeader from '@/components/AtmosphericHeader'

// HomeImageMirror — homepage combined Sections 2 & 3 (2026-10-07, Susan).
// Section 1 establishes that symbols are already part of the visitor's
// life; this section shows what recognition can feel like. Copy is
// Susan's, verbatim. The line "An image can become a mirror." carries a
// faint reflection of itself, so the visual suggests mirroring rather
// than explaining it.
//
// Replaces, on the homepage only, HomeSpeakInImages + HomeChristianSymbols
// (both kept in the codebase, unused here).

const body: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--t-body)',
  lineHeight: 1.75,
  color: 'var(--mid)',
  margin: '0 auto',
  maxWidth: 600,
  textWrap: 'pretty',
} as React.CSSProperties

export default function HomeImageMirror() {
  return (
    <section className="poems-showcase-foundation" aria-labelledby="image-mirror-heading">
      {/* 2026-10-07, Susan: the boat image stays with Christian Symbols, so
          this section uses the sky threshold from the former Section 2. */}
      <AtmosphericHeader
        src="/images/headers/collection-threshold.jpg"
        alt="A dark sky heavy with clouds breaking open to warm gold light along the horizon"
        fadeTo="var(--cream)"
      />

      <div className="poems-showcase-foundation__inner" style={{ paddingTop: '4.5rem', paddingBottom: 0, textAlign: 'center' }}>
        <h2
          id="image-mirror-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', lineHeight: 1.2, color: 'var(--deep)', margin: '0 0 1.1rem', ...({ textWrap: 'balance' } as React.CSSProperties) }}
        >
          Sometimes an image stays with you.
        </h2>
        <p style={body}>
          A memory returns. A story speaks differently than it once did. Something in the image catches your
          attention—and you may not yet know why.
        </p>

        {/* The mirror line, with its own faint reflection beneath it. */}
        <div className="mirror-line" style={{ margin: '4.5rem auto 1.4rem' }}>
          <p className="mirror-line__text">An image can become a mirror.</p>
          <p className="mirror-line__reflection" aria-hidden="true">
            An image can become a mirror.
          </p>
        </div>
        <p style={body}>
          Not by telling you what it means, but by giving you a place to notice what you recognize in yourself.
        </p>

        <p style={{ ...body, color: 'var(--deep)', marginTop: '2.5rem' }}>
          Through image, poetry, and symbolic language, AwakenArts invites you to pause, reflect, and follow what draws
          your attention into your own story.
        </p>
      </div>
    </section>
  )
}
