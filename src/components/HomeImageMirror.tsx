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
        <h2
          id="image-mirror-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', lineHeight: 1.2, color: 'var(--deep)', margin: '0 0 1.4rem', ...({ textWrap: 'balance' } as React.CSSProperties) }}
        >
          Sometimes an image stays with you.
        </h2>

        <div className="mirror-line" style={{ margin: '0 auto' }}>
          <p className="mirror-line__text">An image can become a mirror.</p>
          <p className="mirror-line__reflection" aria-hidden="true">
            An image can become a mirror.
          </p>
        </div>

        {/* Queen Ann — poem and figure (existing images). */}
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
