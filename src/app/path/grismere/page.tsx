import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Grismere — The Mythopoetic Path · AwakenArts',
  description:
    'Grismere is a Goddess of the Deep — a mermaid, an Earth Mother, an inhabitant of the twilight sphere. The shaped poem becomes the figure. The symbol works on you.',
}

export default function PathGrismerePage() {
  return (
    <>
      <Nav />

      {/* ── FIGURE SUB-NAVIGATION — sticky below main nav ── */}
      <nav className="path-subnav" aria-label="Figure navigation">
        <div className="path-subnav__inner">
          <Link href="/path/grismere" aria-current="page">Grismere</Link>
          <Link href="/path/ballerina">The Ballerina</Link>
        </div>
      </nav>

      <main className="path-page" style={{ paddingTop: '2rem' }}>

        {/* ══ SECTION 1 — header + image column + reading text ══ */}
        <section className="path-figure" style={{ borderTop: 'none' }} aria-label="Grismere — First Figure">
          <div className="path-figure__inner">

            <header className="path-figure__header">
              <p className="eyebrow">First Figure · The Anima</p>
              <h1 className="path-figure__name" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}>
                Grismere
              </h1>
              <p className="path-figure__role">
                Goddess of the Deep &nbsp;·&nbsp; The Lure into the Unconscious
              </p>
            </header>

            <div className="path-figure__body">

              {/* Poem image column — 800×1200 px, transparent PNG, cream mat border */}
              <div className="path-poem-column">
                <div className="path-poem-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/figures/grismere/grismere.png"
                    alt="Grismere — shaped poem by Susan Ann Shepler. Text arranged in the form of a mermaid."
                    className="path-poem-img"
                    width={800}
                    height={1200}
                    loading="eager"
                  />
                </div>
                {/* Additional images go here when available — same path-poem-wrap pattern */}
              </div>

              {/* Reading text — extends as long as needed */}
              <div className="path-figure__reading">
                <p className="eyebrow">Anima · Earth Mother · Goddess</p>
                <p>
                  The name <em>Grismere</em> carries her meaning from the start. From
                  the Spanish <em>gris</em> — grey, gloomy — and the French <em>mere</em>
                  — ocean, and also mother. She is the Grey Ocean. She is, perhaps,
                  the Grey Mother.
                </p>
                <p>
                  Grismere is one of a series of archetypal images linked to the process
                  of individuation — the movement Jung understood as universal, leading
                  toward an original state of wholeness. She is an archetype of the
                  collective unconscious: a mermaid, a Goddess, an Earth Mother, an
                  inhabitant of the twilight sphere — bewitching, and luring not toward
                  danger but toward depth.
                </p>
                <blockquote className="quote-line">
                  Whoever looks into the water sees his own image, but behind it living
                  creatures soon loom up&hellip; Sometimes a nixie gets into the
                  fisherman&rsquo;s net, a female, half-human fish.
                  <cite> — C. G. Jung</cite>
                </blockquote>
                <p>
                  Jung associates the mermaid — siren, nixie, elfin — with the anima:
                  the Eternal Feminine and the Soul-image. Grismere personifies this
                  feminine energy, but her tail is more than unconscious symbol. The
                  feminine image is joined to a decidedly masculine energy, holding
                  both in a single form. She is an indirect portrait of wholeness —
                  of gender, of division, of the self that lives both above and below
                  the surface.
                </p>
                <p>
                  She appears as the Handless Maiden: armless, fragile, incomplete in
                  the world of air. Her tail is her connection to the buried self — to
                  the whole of nature hidden in the sea of the unconscious. To meet
                  her is to recognize the divided self, and to begin the movement
                  toward integration.
                </p>
                <blockquote className="quote-line">
                  Eternal truth needs a language that alters with the spirit of the
                  times. The primordial images undergo ceaseless transformation and
                  yet remain ever the same.
                  <cite> — C. G. Jung</cite>
                </blockquote>
              </div>

            </div>

            {/* Links */}
            <div className="path-figure__lib-link" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/library/figures/grismere" className="path-cta__link">
                Read the Grismere essay in the Library →
              </Link>
              <Link href="/path/ballerina" className="path-cta__link path-cta__link--quiet">
                Next Figure: The Ballerina →
              </Link>
            </div>

          </div>
        </section>

        {/* ══ SECTION 2 — video + cards ══ */}
        <section className="path-figure" aria-label="Grismere — further exploration">
          <div className="path-figure__inner">

            <div className="path-figure__video">
              <p className="eyebrow">Grismere in Motion</p>
              <video
                className="path-video"
                controls
                playsInline
                preload="metadata"
                aria-label="Grismere — the mermaid in motion"
              >
                <source src="/video/grismere.mov" type="video/quicktime" />
                <source src="/video/grismere.mov" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>

            <div className="path-figure__cards">
              <p className="eyebrow">Cards Amplified from this Symbol</p>
              <p className="path-figure__cards-note">
                Four cards emerged from Grismere — each one a different face of
                the same energy. The mermaid as threshold. As mystery. As the
                lure of time. As what consciousness cannot yet see in itself.
              </p>
              <div className="path-cards-row">
                {[
                  { src: '/images/cards/fronts/unconscious-energy.jpg', name: 'Unconscious Energy', sub: 'Conscious awareness is only part of the story' },
                  { src: '/images/cards/fronts/mystery.jpg',            name: 'Mystery',            sub: 'As mysterious as the sea' },
                  { src: '/images/cards/fronts/illusion.jpg',           name: 'Illusion',           sub: 'Look beyond the ordinary' },
                  { src: '/images/cards/fronts/time.jpg',               name: 'Time',               sub: 'Time tells many tales' },
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
          <Link href="/path/ballerina" className="path-cta__link path-cta__link--quiet">
            Next Figure: The Ballerina →
          </Link>
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
