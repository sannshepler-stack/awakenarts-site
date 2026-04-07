import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'The Ballerina — The Mythopoetic Path · AwakenArts',
  description:
    'The Ballerina dances the dance of individuation — love personified, spinning through the many toward the one. The shaped poem becomes the figure. The symbol works on you.',
}

export default function PathBallerinaPage() {
  return (
    <>
      <Nav />

      {/* ── FIGURE SUB-NAVIGATION — sticky below main nav ── */}
      <nav className="path-subnav" aria-label="Figure navigation">
        <div className="path-subnav__inner">
          <Link href="/path/grismere">Grismere</Link>
          <Link href="/path/ballerina" aria-current="page">The Ballerina</Link>
        </div>
      </nav>

      <main className="path-page" style={{ paddingTop: '2rem' }}>

        {/* ══ SECTION 1 — header + image column + reading text ══ */}
        <section className="path-figure" style={{ borderTop: 'none' }} aria-label="The Ballerina — Second Figure">
          <div className="path-figure__inner">

            <header className="path-figure__header">
              <p className="eyebrow">Second Figure · The Anima</p>
              <h1 className="path-figure__name" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}>
                The Ballerina
              </h1>
              <p className="path-figure__role">
                Love Personified &nbsp;·&nbsp; Dream, Femininity, Energy, Jealousy
              </p>
            </header>

            <div className="path-figure__body">

              {/* Poem image column — 1600×2400 px source (3× retina at 500px display) */}
              <div className="path-poem-column">
                <div className="path-poem-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/figures/ballerina/ballerina.png"
                    alt="The Ballerina — shaped poem by Susan Ann Shepler. Text arranged in the form of a little girl in a tutu."
                    className="path-poem-img"
                    width={1600}
                    height={2400}
                    loading="eager"
                  />
                </div>
                {/* Additional images go here when available — same path-poem-wrap pattern */}
              </div>

              {/* Reading text — extends as long as needed */}
              <div className="path-figure__reading">
                <p className="eyebrow">Anima · Love · The Feminine</p>
                <p>
                  The Ballerina poem is in the shape of a little girl. This is the AwakenArts
                  method made visible: the poem does not describe the figure — it <em>becomes</em> the
                  figure. Pink satin shoes, high laced ribbons crossed at the ankles, a tutu made
                  of words chosen to be felt before they are read.
                </p>
                <p>
                  She dances the dance of individuation. Like most encounters with Jungian
                  archetypes, she arrived not as an idea but as an event — a dream-image, whole
                  and particular, before the analytic mind could arrive to name her. She is love
                  personified. She is also the shadow of love: the projection, the longing, the
                  power given away and slowly reclaimed.
                </p>
                <p>
                  The poem was written seven times. Seven versions. Seven lovably different little
                  girls. Out of the many, at last, came one: Pirouette — animated, spinning,
                  pulsing with a heartbeat. Unity through multiplicity. The hallmark of
                  individuation itself.
                </p>
                <blockquote className="quote-line">
                  If unity and singleness are the hallmarks of individuality,
                  multiplicity and dispersal are their opposites.
                  The Ballerina holds both — and dances between them.
                </blockquote>
                <p>
                  Almost every tradition has an axis — a place where earth and sky unite, where
                  the ego meets something larger than itself. The ballerina stands at hers.
                  The spinning is not restlessness; it is the motion of centering, the visible
                  form of what happens when the parts of the psyche are gathered rather than
                  scattered.
                </p>
              </div>

            </div>

            {/* Links */}
            <div className="path-figure__lib-link" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/path/grismere" className="path-cta__link path-cta__link--quiet">
                ↑ Previous Figure: Grismere
              </Link>
              <Link href="/library/figures/ballerina" className="path-cta__link">
                Read the Ballerina essay in the Library →
              </Link>
            </div>

          </div>
        </section>

        {/* ══ SECTION 2 — video + cards ══ */}
        <section className="path-figure" aria-label="The Ballerina — further exploration">
          <div className="path-figure__inner">

            <div className="path-figure__video">
              <p className="eyebrow">The Ballerina in Motion</p>
              <video
                className="path-video"
                controls
                playsInline
                preload="metadata"
                aria-label="The Ballerina — Pirouette in motion"
              >
                <source
                  src="/video/ballerina_music_v1_02-10-2014.mp4_HD%20copy.mp4"
                  type="video/mp4"
                />
                Your browser does not support video playback.
              </video>
            </div>

            <div className="path-figure__cards">
              <p className="eyebrow">Cards Amplified from this Symbol</p>
              <p className="path-figure__cards-note">
                Four cards emerged from The Ballerina — each one a different face of the
                same energy. The dream that arrives before words. The feminine reclaimed.
                The axis of spinning and centering. The shadow side of love.
              </p>
              <div className="path-cards-row">
                {[
                  { src: '/images/cards/fronts/dream.jpg',      name: 'Dream',      sub: 'The dream speaks before the mind is ready' },
                  { src: '/images/cards/fronts/femininity.jpg', name: 'Femininity', sub: 'The feminine carries more than it is given credit for' },
                  { src: '/images/cards/fronts/energy.jpg',     name: 'Energy',     sub: 'Energy seeks its own center' },
                  { src: '/images/cards/fronts/jealousy.jpg',   name: 'Jealousy',   sub: 'Jealousy names what has not yet been claimed' },
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
              <img src="/images/brand/logo-nav.png" alt="AwakenArts" className="footer-logo" loading="lazy" />
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
