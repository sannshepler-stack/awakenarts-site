import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Watery Cross — Library — AwakenArts',
  description:
    'The cross appears where the mast meets the water — not in heaven, not in the deep, but at the surface where the two worlds touch. A reading of the Watery Cross poem.',
  alternates: { canonical: '/library/themes/the-watery-cross' },
}

export default function TheWateryCrossPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      <header className="essay-header">
        <p className="eyebrow">Thematic Reading</p>
        <h1>The Watery Cross</h1>
        <p className="essay-header__subtitle">
          The cross that forms where heaven touches the deep
        </p>
        <p className="essay-header__sub">
          AwakenArts Library · The Mandala Series
        </p>
      </header>

      <article className="essay-body">
        <section className="figure-section figure-section--intro">
          <div className="figure-shell">
            <div className="figure-intro figure-intro--portrait">
              <div className="figure-intro__text">

                <p>
                  The poem is shaped as a cross — narrow at the top, expanding wide across the middle, narrowing again to a point at the base. But the edges are not clean. The lines are jagged, irregular, broken. That is not a failure of form. It is the form being honest about what water actually does to a reflection.
                </p>

                <p>
                  The cross is not in the sky. It is not carved in stone. It is a shadow cast by a wooden mast onto moving water. A reflection. Visible only at the surface — only at the threshold where the world above and the deep below meet, the way Scripture so often places its meaning at a crossing-point rather than in either realm alone.
                </p>

                <p className="essay-snippet">
                  "White sails<br />
                  will stay in<br />
                  sight to<br />
                  guide us<br />
                  while a<br />
                  wooden<br />
                  mast<br />
                  a shadow<br />
                  casts like<br />
                  <em>A watery<br />
                  Cross</em><br />
                  beside us."
                </p>

                <p>
                  The tension in the poem is precisely this: the cross is formed from what is most ordinary — a mast, wood, functional — and what carries the weightiest meaning — water, the deep, the place of hidden life, the same waters Scripture returns to again and again to speak of what lies beneath plain sight. Grismere moves through this same water from below. The Watery Cross forms above it. Both are present at the same threshold.
                </p>

                <p>
                  The captain who knows our every hope will never pull up rope and sail without you or me. That promise does not arrive through vision or revelation. It arrives through the shadow of a mast on a moving sea — the way Scripture itself so often speaks: not by stating the thing directly, but by letting the ordinary world carry it into view.
                </p>

                {/* Poppies image — add to /public/images/mandala/ when transparent version is ready */}

                <p>
                  The cross appears at the surface. Not above it — not transcendent, removed, distant. And not beneath it — not hidden in the depths that Grismere inhabits. The cross forms precisely where the two worlds touch. That is the theology of incarnation: God present not above ordinary life or hidden beneath it, but at the membrane where the two make contact.
                </p>

                <p>
                  You can only see the watery cross from one angle — looking at the surface itself, neither up toward heaven nor down into the deep, but at the threshold where they meet.
                </p>

                <p className="essay-snippet">
                  "Our<br />
                  captain<br />
                  knows our<br />
                  every hope.<br />
                  Never<br />
                  would He<br />
                  leave or<br />
                  pull up rope<br />
                  to sail<br />
                  and go<br />
                  without<br />
                  you<br />
                  or me."
                </p>

                <p className="essay-display">
                  The cross appears where the mast meets the water —<br />
                  not in heaven, not in the deep,<br />
                  but at the surface where the two worlds touch.
                </p>

                <div className="essay-figure-nav">
                  <Link href="/library/themes/her-mothers-hands" className="essay-figure-nav__prev">
                    ← Her Mother&rsquo;s Hands
                  </Link>
                  <Link href="/library" className="essay-figure-nav__next">
                    Return to Library →
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
              <li><Link href="/library/themes/her-mothers-hands">Her Mother&rsquo;s Hands</Link></li>
              <li><Link href="/library/themes/the-watery-cross">The Watery Cross</Link></li>
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
