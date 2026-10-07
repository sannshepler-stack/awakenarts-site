import PoemEnlarge from '@/components/PoemEnlarge'

// HomeImageMirror — homepage Section 2 (2026-10-07, Susan): two lines, then
// the Queen Ann poem and figure directly beneath, so visitors reach the
// artwork quickly. The explanatory paragraphs are removed; a short sky band
// replaces the tall threshold. "An image can become a mirror." keeps its
// faint reflection.

export default function HomeImageMirror() {
  return (
    <section aria-labelledby="image-mirror-heading" style={{ background: 'var(--cream)', paddingBottom: '4.5rem', textAlign: 'center' }}>
      <div className="mirror-sky" aria-hidden="true" />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Restored introduction (2026-10-07, Susan) — essential context,
            exactly as written, before the mirror language. Same markup and
            classes as HomeCollectionPremise. */}
        <p className="eyebrow section2-light__eyebrow" style={{ justifyContent: 'center' }}>AwakenArts, The Stories that Shape Us</p>
        <h2 id="collection-premise-heading" className="section2-question">
          You already speak in images. We all do.
          <br />
          AwakenArts brings image and language into conversation,
          <br />
          exploring familiar images leading to further understanding.
        </h2>
        <p className="section2-examples">
          <span className="section2-examples__item">&ldquo;We&rsquo;ve put up walls.&rdquo;</span>
          <span className="section2-examples__sep" aria-hidden="true">·</span>
          <span className="section2-examples__item section2-examples__item--mid">&ldquo;I&rsquo;m at a crossroads.&rdquo;</span>
          <span className="section2-examples__sep" aria-hidden="true">·</span>
          <span className="section2-examples__item section2-examples__item--last">&ldquo;It became a stepping stone.&rdquo;</span>
        </p>

        <h2
          id="image-mirror-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', lineHeight: 1.2, color: 'var(--deep)', margin: '3.25rem 0 1.4rem', ...({ textWrap: 'balance' } as React.CSSProperties) }}
        >
          Sometimes an image stays with you.
        </h2>

        <div className="mirror-line" style={{ margin: '0 auto' }}>
          <p className="mirror-line__text">An image can become a mirror.</p>
          <p className="mirror-line__reflection" aria-hidden="true">
            An image can become a mirror.
          </p>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--t-body)',
            lineHeight: 1.75,
            color: 'var(--mid)',
            maxWidth: 600,
            margin: '0.9rem auto 0',
            ...({ textWrap: 'pretty' } as React.CSSProperties),
          }}
        >
          Not by telling you what it means, but by giving you a place to notice what you recognize in yourself.
        </p>

        {/* Queen Ann — poem and figure (existing images), 25% smaller (2026-10-07). */}
        <div className="mirror-ann">
          <div className="mirror-ann__poem">
            <PoemEnlarge src="/images/forms/ann-text-ink-crop.png" alt="Queen Ann — the poem, rendered in concrete poetry form" />
          </div>
          <div className="mirror-ann__portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/forms/queen-ann-still.png"
              alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
