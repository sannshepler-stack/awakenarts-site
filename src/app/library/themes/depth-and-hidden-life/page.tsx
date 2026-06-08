import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Depth and Hidden Life — Library — AwakenArts',
  description:
    'What lies beneath the surface of ordinary awareness — submerged realities, concealed interior life, and the fear of encountering what we carry within. A thematic reading through Grismere and The Vase.',
  alternates: { canonical: '/library/themes/depth-and-hidden-life' },
}

export default function DepthAndHiddenLifePage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      <header className="essay-header">
        <p className="eyebrow">Thematic Reading</p>
        <h1>Depth and Hidden Life</h1>
        <p className="essay-header__subtitle">
          What lies beneath the surface of ordinary awareness
        </p>
        <p className="essay-header__sub">
          AwakenArts Library · Grismere · The Vase
        </p>
      </header>

      <article className="essay-body">
        <section className="figure-section figure-section--intro">
          <div className="figure-shell">
            <div className="figure-intro figure-intro--portrait">
              <div className="figure-intro__text">

                <p>
                  Some things do not announce themselves. They move beneath the surface of daily life — present, continuous, shaping what we feel and remember without ever fully breaking through to awareness. These poems gather in that territory.
                </p>

                <h2>Grismere</h2>

                <p className="essay-snippet">
                  "sleeping in<br />
                  mindless sleep on<br />
                  water washed knolls,<br />
                  far out to sea...<br />
                  <br />
                  where nighttime fishermen<br />
                  fear to troll to learn<br />
                  your mysteries."
                </p>

                <p>
                  Grismere emerges from the threshold where awareness encounters what lies beneath awareness itself. Her divided form — half human and half fish — reflects a state between worlds: instinct and consciousness, surface and depth, the visible and the concealed.
                </p>

                <p>
                  The sea surrounding Grismere functions as more than physical setting. It becomes a symbolic depth-world — the same figure the Psalms reach for when they speak of deep calling unto deep, of waters that cover and waters that part. Memory, fear, longing, and what stays hidden all move beneath the surface, the way Scripture so often locates truth not in what is plainly stated but in what waits to be drawn up from below.
                </p>

                <p>
                  The nighttime fishermen are essential to the emotional structure of the work. They approach the waters cautiously, fearing what might emerge if they troll too deeply into hidden regions. Their fear is not simply fear of a creature. It is fear of revelation — fear of encountering what remains unknown within the depths of human awareness itself.
                </p>

                <p>
                  Grismere therefore becomes a primordial threshold figure. She belongs neither fully to the human world nor fully to the depths beneath it. The poem preserves that tension rather than resolving it. Her mysteries remain partially hidden, and the work gains power through that restraint.
                </p>

                <p>
                  The reader is not asked to solve Grismere completely. Instead, the work invites recognition of the vast unseen realities that continue to exist beneath the surface of consciousness.
                </p>

                <p className="essay-display">
                  Some mysteries remain beneath the surface not because they are absent,<br />
                  but because we fear what may emerge if we approach them too closely.
                </p>

                <h2>The Vase</h2>

                <p>
                  Where Grismere moves through open water, The Vase holds still. But stillness is not emptiness. What it holds may be silence, memory, the accumulated interior life of years — what has gathered quietly and never been named aloud.
                </p>

                <p>
                  The Vase speaks to the hidden interior reality that does not always rise to the surface. It shapes what we feel, what we remember, what we reach toward — present and continuous beneath the quieter outward form we present to the world.
                </p>

                <p>
                  Together, these two poems explore the same territory from different angles. Grismere moves through it. The Vase contains it. Both ask the same question: what do you carry beneath what you show?
                </p>

                <p className="essay-display">
                  What appears still<br />
                  is not necessarily empty.
                </p>

                <div className="essay-figure-nav">
                  <span />
                  <Link href="/library/themes/exile-and-threshold" className="essay-figure-nav__next">
                    Exile and Threshold →
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

      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/brand/logo.png" alt="AwakenArts" className="footer-logo" loading="lazy" />
            </Link>
            <p>
              Concrete poetry and symbolic form — language given shape in the
              same literary mode Scripture itself uses: parable, image, and
              figure. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>
          <div className="footer-col">
            <h4>Library</h4>
            <ul>
              <li><Link href="/library">The Library</Link></li>
              <li><Link href="/library/themes/depth-and-hidden-life">Depth and Hidden Life</Link></li>
              <li><Link href="/library/themes/exile-and-threshold">Exile and Threshold</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/studio">Studio</Link></li>
              <li><Link href="/journal">Journal</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Formation &amp; Provenance</Link></li>
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
