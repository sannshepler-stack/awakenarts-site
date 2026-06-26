import type { Metadata } from 'next'

// Internal comparison page — not linked from Nav/Footer, not indexed.
// Built per Susan's June 2026 request: "I would actually ask Claude to
// prototype both versions before deciding... I'd decide by putting both
// versions side by side." Everything is identical between the two
// versions (title page, spacing, facing-pages CSS) except the order of
// the still and the poem within the spread:
//   Version A — poem left, image right ("language becomes image")
//   Version B — image left, poem right (current homepage order),
//               with the strengthened facing-pages treatment applied
// Delete this route once a decision is made.
export const metadata: Metadata = {
  title: 'Queen Ann — Order Prototype (internal)',
  robots: { index: false, follow: false },
}

function QueenAnnSpread({ poemFirst }: { poemFirst: boolean }) {
  const imageFrame = (
    <div className="poems-showcase-ann__frame">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/forms/queen-ann-still.png"
        alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
        loading="lazy"
      />
    </div>
  )
  const poemFrame = (
    <div className="poems-showcase-ann__text">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/forms/ann-text-dark.png"
        alt="Queen Ann — the poem, rendered in concrete poetry form"
        className="poems-showcase-ann__poem-img"
        loading="lazy"
      />
    </div>
  )

  return (
    <div className="poems-showcase-ann">
      {poemFirst ? (
        <>
          {poemFrame}
          {imageFrame}
        </>
      ) : (
        <>
          {imageFrame}
          {poemFrame}
        </>
      )}
    </div>
  )
}

function QueenAnnIntro() {
  return (
    <div className="poems-showcase-intro">
      <p className="poems-showcase-intro__title">Queen Ann</p>
      <p className="poems-showcase-intro__quote">
        When the night strikes with silver light&hellip;
      </p>
    </div>
  )
}

export default function QueenAnnPrototypePage() {
  return (
    <main style={{ background: 'var(--deep)' }}>

      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '3.5rem 2rem 1rem',
          textAlign: 'center',
        }}
      >
        <p className="eyebrow" style={{ color: 'var(--gold-lt)' }}>
          Internal — not for publication
        </p>
        <p
          style={{
            fontFamily: 'var(--serif)',
            color: 'rgba(250,247,242,.78)',
            fontSize: '1rem',
            lineHeight: 1.6,
            margin: '.5rem 0 0',
          }}
        >
          Two versions of the Queen Ann Encounter, identical in every
          respect except the order of poem and image. Scroll to compare.
        </p>
      </div>

      {/* ── VERSION A — poem first ("language becomes image") ── */}
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '2.5rem 2rem 0',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--sans)',
            color: 'var(--gold-lt)',
            fontSize: '.8rem',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Version A — Poem First
        </p>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            color: 'rgba(250,247,242,.7)',
            fontSize: '.95rem',
            margin: '.4rem 0 0',
          }}
        >
          The poem is the language. The image is the encounter. Poem → Image.
        </p>
      </div>
      <section className="poems-showcase-section" aria-label="Queen Ann — Version A">
        <div className="poems-showcase-inner">
          <QueenAnnIntro />
          <QueenAnnSpread poemFirst={true} />
        </div>
      </section>

      {/* ── divider ── */}
      <div
        style={{
          height: 1,
          maxWidth: 760,
          margin: '0 auto',
          background: 'rgba(201,168,76,.25)',
        }}
      />

      {/* ── VERSION B — image first, strengthened facing pages ── */}
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '2.5rem 2rem 0',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--sans)',
            color: 'var(--gold-lt)',
            fontSize: '.8rem',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Version B — Image First
        </p>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            color: 'rgba(250,247,242,.7)',
            fontSize: '.95rem',
            margin: '.4rem 0 0',
          }}
        >
          Current homepage order, with strengthened facing-pages treatment.
        </p>
      </div>
      <section className="poems-showcase-section" aria-label="Queen Ann — Version B">
        <div className="poems-showcase-inner">
          <QueenAnnIntro />
          <QueenAnnSpread poemFirst={false} />
        </div>
      </section>

    </main>
  )
}
