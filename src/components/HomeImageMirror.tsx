import PoemEnlarge from '@/components/PoemEnlarge'

// Homepage Sections 2 and 3 (2026-10-07, Susan) — two sections rather than
// one squeezed into columns.
//   2: AWAKENARTS, THE STORIES THAT SHAPE US · "You already speak in images.
//      We all do." as the headline · "Sometimes an image stays with you." ·
//      the three phrases.
//   3: sky header · QUEEN ANN · "An image can become a mirror." (reflection) ·
//      the Queen Ann poem and figure, with Enlarge the poem.

/** Section 2 — "You already speak in images." */
export default function HomeImageMirror() {
  return (
    <section aria-labelledby="image-mirror-heading" style={{ background: '#fff', padding: '3.5rem 1.5rem 4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p className="eyebrow section2-light__eyebrow" style={{ justifyContent: 'center' }}>AwakenArts, The Stories that Shape Us</p>
        <h2
          id="image-mirror-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', lineHeight: 1.2, color: 'var(--deep)', margin: '1rem 0 1.1rem', ...({ textWrap: 'balance' } as React.CSSProperties) }}
        >
          You already speak in images. We all do.
        </h2>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'var(--hero-statement)', lineHeight: 1.3, color: 'var(--deep)', margin: '0 0 1.6rem' }}>
          Sometimes an image stays with you.
        </p>
        <p className="section2-examples">
          <span className="section2-examples__item">&ldquo;We&rsquo;ve put up walls.&rdquo;</span>
          <span className="section2-examples__sep" aria-hidden="true">·</span>
          <span className="section2-examples__item section2-examples__item--mid">&ldquo;I&rsquo;m at a crossroads.&rdquo;</span>
          <span className="section2-examples__sep" aria-hidden="true">·</span>
          <span className="section2-examples__item section2-examples__item--last">&ldquo;It became a stepping stone.&rdquo;</span>
        </p>
      </div>
    </section>
  )
}

/** Queen Ann — "An image can become a mirror." (2026-10-07: now its own
 *  component so Christian Symbols can sit between the two.) */
export function HomeQueenAnnMirror() {
  return (
    <section aria-labelledby="queen-ann-mirror-heading" style={{ background: 'var(--cream)', padding: '0 1.5rem var(--band-gap)', textAlign: 'center' }}>
      {/* The sky header now opens the Queen Ann section (2026-10-07, Susan). */}
      <div className="mirror-sky" aria-hidden="true" style={{ margin: '0 -1.5rem 1.75rem' }} />
      <p className="eyebrow" style={{ justifyContent: 'center' }}>Queen Ann</p>
      <div className="mirror-line" style={{ margin: '1rem auto 0' }}>
        <h2 id="queen-ann-mirror-heading" className="mirror-line__text">An image can become a mirror.</h2>
        <p className="mirror-line__reflection" aria-hidden="true">
          An image can become a mirror.
        </p>
      </div>

      <div className="mirror-ann" style={{ marginTop: '2.25rem' }}>
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
    </section>
  )
}
