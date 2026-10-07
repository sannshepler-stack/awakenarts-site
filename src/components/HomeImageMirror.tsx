import PoemEnlarge from '@/components/PoemEnlarge'

// Homepage Sections 2 and 3 (2026-10-07, Susan) — two sections rather than
// one squeezed into columns.
//   2: sky band · AWAKENARTS, THE STORIES THAT SHAPE US · "Sometimes an image
//      stays with you." as the headline · the "You already speak in images"
//      paragraph · the three phrases.
//   3: QUEEN ANN · "An image can become a mirror." (with its reflection) ·
//      the Queen Ann poem and figure, with Enlarge the poem.

export default function HomeImageMirror() {
  return (
    <>
      <section aria-labelledby="image-mirror-heading" style={{ background: 'var(--cream)', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="mirror-sky" aria-hidden="true" />
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="eyebrow section2-light__eyebrow" style={{ justifyContent: 'center' }}>AwakenArts, The Stories that Shape Us</p>
          <h2
            id="image-mirror-heading"
            style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', lineHeight: 1.2, color: 'var(--deep)', margin: '1rem 0 1.1rem', ...({ textWrap: 'balance' } as React.CSSProperties) }}
          >
            Sometimes an image stays with you.
          </h2>
          <p className="section2-question">
            You already speak in images. We all do.
            <br />
            AwakenArts brings image and language into conversation,
            <br />
            exploring familiar images.
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

      <section aria-labelledby="queen-ann-mirror-heading" style={{ background: '#fff', padding: 'var(--band-gap) 1.5rem', textAlign: 'center' }}>
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
    </>
  )
}
