import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Queen Ann Between Kingdoms — The Mythopoetic Path · AwakenArts',
  description:
    'Queen Ann does not stand at the end of a journey or the beginning of one. She stands in the space between — the threshold where the old life has fallen away and the new one has not yet taken shape.',
}

export default function PathAnnPage() {
  return (
    <>
      <Nav />

      {/* ── FIGURE SUB-NAVIGATION ── */}
      <nav className="path-subnav" aria-label="Figure navigation">
        <div className="path-subnav__inner">
          <Link href="/path/grismere">Grismere</Link>
          <Link href="/path/ballerina">The Ballerina</Link>
          <Link href="/path/ann" aria-current="page">Queen Ann</Link>
        </div>
      </nav>

      <main className="path-page" style={{ paddingTop: '2rem' }}>

        {/* ══ SECTION 1 — header + image + reading text ══ */}
        <section className="path-figure" style={{ borderTop: 'none' }} aria-label="Queen Ann — Third Figure">
          <div className="path-figure__inner">

            <header className="path-figure__header">
              <p className="eyebrow">Third Figure · The Threshold</p>
              <h1 className="path-figure__name" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}>
                Queen Ann Between Kingdoms
              </h1>
              <p className="path-figure__role">
                Exile as Initiation &nbsp;·&nbsp; The Passage &nbsp;·&nbsp; Loss · Spirit · Humility · Fear
              </p>
            </header>

            <div className="path-figure__body">

              {/* Poem image — 800x1200 px, transparent PNG */}
              <div className="path-poem-column">
                <div className="path-poem-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/figures/ann/ann.png"
                    alt="Queen Ann Between Kingdoms — shaped poem by Susan Ann Shepler"
                    className="path-poem-img"
                    width={800}
                    height={1200}
                    loading="eager"
                  />
                </div>
              </div>

              {/* Reading text */}
              <div className="path-figure__reading">
                <p className="eyebrow">Threshold · Passage · Becoming</p>
                <p>
                  Queen Ann does not stand at the end of a journey or the beginning
                  of one. She stands in the space between — the threshold where the
                  old life has fallen away and the new one has not yet taken shape.
                </p>
                <p>
                  Her name carries the weight of sovereignty. She is a queen. But she
                  is a queen between kingdoms — which means she is a queen without a
                  throne, without the structures that once defined her, walking uncertain
                  ground with nothing left to protect her except the interior courage
                  that does not require certainty to continue.
                </p>
                <p>
                  Four cards rose from her image and together they tell the full story.{' '}
                  <em>Lost</em> — the necessary disorientation of leaving without knowing
                  the destination. <em>Spirit</em> — the invisible resource that sustains
                  movement when no external anchor remains. <em>Humility</em> — not defeat,
                  but the releasing of what the ego once claimed as its own, the emptying
                  that precedes becoming. <em>Fear</em> — the honest acknowledgment of what
                  the crossing costs, the trembling that is not weakness but proof of how
                  much is at stake.
                </p>
                <blockquote className="quote-line">
                  The psyche does not grow in comfort. It grows in the confrontation
                  with what is unknown — in the willingness to remain present within
                  uncertainty long enough for something new to emerge.
                  <cite> — C. G. Jung</cite>
                </blockquote>
                <p>
                  Jung understood this ground as the dissolution of the persona — the
                  necessary falling away of the masks the psyche constructs in its first
                  movements toward the world. Ann is that moment made visible. She walks
                  not because the road is clear but because remaining inside a collapsed
                  structure is its own kind of exile.
                </p>
                <p>
                  She is every person who has had to continue without knowing why or
                  toward what. In that, she is already at work in you.
                </p>
              </div>

            </div>

            {/* Library essay link — essay exists */}
            <div className="path-figure__lib-link">
              <Link href="/library/figures/queen-ann-between-kingdoms" className="path-cta__link">
                Library Essay →
              </Link>
            </div>

          </div>
        </section>

        {/* ══ SECTION 2 — cards ══ */}
        <section className="path-figure" aria-label="Queen Ann — cards">
          <div className="path-figure__inner">

            <div className="path-figure__cards">
              <p className="eyebrow">Cards Amplified from this Symbol</p>
              <p className="path-figure__cards-note">
                Four cards emerged from Queen Ann — each one a different face of the
                crossing. <em>Lost</em> — the necessary disorientation of leaving without
                knowing the destination. <em>Spirit</em> — the invisible resource that
                sustains movement when no external anchor remains. <em>Humility</em> — not
                defeat, but the releasing of what the ego once claimed as its own, the
                emptying that precedes becoming. <em>Fear</em> — the honest acknowledgment
                of what the crossing costs, the trembling that is not weakness but proof
                of how much is at stake.
              </p>
              <div className="path-cards-row">
                {[
                  { src: '/images/cards/fronts/lost.jpg',     name: 'Lost',     sub: 'To be lost is sometimes the beginning of being found' },
                  { src: '/images/cards/fronts/spirit.jpg',   name: 'Spirit',   sub: 'The spirit sustains what the mind cannot explain' },
                  { src: '/images/cards/fronts/humility.jpg', name: 'Humility', sub: 'Humility is the doorway the ego cannot fit through' },
                  { src: '/images/cards/fronts/fear.jpg',     name: 'Fear',     sub: 'Fear names what matters — it does not have to stop the crossing' },
                ].map(({ src, name, sub }) => (
                  <div key={name} className="path-mini-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={name} loading="lazy" />
                    <p className="path-mini-card__name">{name}</p>
                    <p className="path-mini-card__sub">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="path-cta">
          <Link href="/path" className="path-cta__link">← Return to The Path</Link>
          <Link href="/deck" className="path-cta__link path-cta__link--quiet">Enter the Deck →</Link>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/brand/logo.png" alt="AwakenArts" className="footer-logo" loading="lazy" />
            </Link>
            <p>
              A platform at the intersection of the Christian tradition, Jungian
              Individuation, Transformational Language Arts, and original symbolic imagery.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/path">The Path</Link></li>
              <li><Link href="/deck">Guidance Deck</Link></li>
              <li><Link href="/library">The Library</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>The Path</h4>
            <ul>
              <li><Link href="/path/grismere">Grismere</Link></li>
              <li><Link href="/path/ballerina">The Ballerina</Link></li>
              <li><Link href="/path/ann">Queen Ann</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/#about">Formation &amp; Provenance</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
          <span>© Susan Ann Shepler · Confidential</span>
        </div>
      </footer>
    </>
  )
}
