import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata = {
  description:
    'Grismere appears at the boundary between what can be seen and what lies beneath — a presence connected to water, depth, and the slow process by which something hidden begins to rise into conscious awareness.',
}

export default function GrismerePage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ─── */}
      <header className="essay-header">
        <p className="eyebrow">Figures</p>
        <h1>Grismere</h1>
        <p className="essay-header__subtitle">
          A Figure at the Threshold of Emergence
        </p>
        <p className="essay-header__sub">
          AwakenArts Library Essay
        </p>
      </header>

      {/* ── BODY ─── */}
      <article className="essay-body">
        <section className="figure-section figure-section--intro">
          <div className="figure-shell">
            <div className="figure-intro figure-intro--portrait">

              <img
                src="/images/figures/grismere/grismere.png"
                alt="Grismere — shaped poem"
                className="figure-intro__img"
              />

              <div className="figure-intro__text">
                <p>
                  Some images emerge gradually, revealing their meaning over time rather than announcing it at once.
                </p>

                <p>
                  Grismere is one such figure. It does not arrive fully formed or immediately legible. It appears at the boundary between what can be seen and what lies beneath the surface — a presence connected to water, to depth, and to the slow process by which something hidden begins to rise into conscious awareness.
                </p>

                <p>
                  In symbolic language, water is among the oldest and most consistent images of the unconscious.
                </p>

                <p>
                  It holds what lies beneath the surface of ordinary awareness — the depths of memory, instinct, emotion, and archetypal pattern that shape the psyche from below. Water conceals as much as it reveals. Yet what it holds is not absent. It is present in the depths, shaping the currents of thought and feeling that move through daily life without being fully seen.
                </p>

                <p>
                  The water surrounding Grismere carries this quality. Its surface appears calm, even still. But that stillness is not emptiness. It is the stillness of depth — the condition in which the interior life is fully present, even when nothing yet breaks the surface.
                </p>

                <p>
                  For the observer, this water functions as a mirror of a particular kind. It does not show the face that looks into it. It shows what lies beneath that face — the interior landscape that exists below conscious thought, patient and continuous, waiting for the conditions that allow it to rise.
                </p>

                <h2>The Boundary</h2>

                <p>
                  Grismere stands at a threshold between two worlds.
                </p>

                <p>
                  One world is visible and conscious: the familiar terrain of daily life, shaped by thought, language, and ordinary perception. The other lies beneath the surface: the domain of the unconscious, where images form before they are understood, where meaning moves in patterns that the conscious mind has not yet learned to read.
                </p>

                <p>
                  This boundary is not a wall. It is a permeable edge — a zone of contact between what is known and what is not yet known. Grismere occupies that zone.
                </p>

                <p>
                  To encounter Grismere is to encounter a psychological moment rather than a fixed symbol — the moment when something within begins to emerge.
                </p>

                <p className="essay-display">
                  Emergence cannot be forced.<br />
                  It can only be attended to.
                </p>

                <div className="essay-figure-nav">
                  <span />
                  <Link href="/library/figures/ballerina" className="essay-figure-nav__next">
                    The Ballerina →
                  </Link>
                </div>

                <div className="essay-back">
                  <Link href="/library">← Return to the Library</Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </article>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              <img
                src="/images/brand/logo-nav.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              A platform at the intersection of the Christian tradition, Jungian
              Individuation, Transformational Language Arts, and original symbolic imagery.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/#path">The Path</Link></li>
              <li><Link href="/deck">Guidance Deck</Link></li>
              <li><Link href="/library">The Library</Link></li>
              <li><Link href="/#offerings">Offerings</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Library</h4>
            <ul>
              <li><Link href="/library#foundations">Foundations</Link></li>
              <li><Link href="/library#figures">Figures</Link></li>
              <li><Link href="/library/voices">Voices</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/#about">Formation &amp; Provenance</Link></li>
              <li><Link href="/begin">Begin Here</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 AwakenArts · All Rights Reserved</span>
          <span>© Susan Ann Shepler</span>
        </div>
      </footer>
    </>
  )
}
