import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Containment and Inwardness — Library — AwakenArts',
  description:
    'What the outer story cannot fill — the vessel shaped for something the world cannot give. A thematic reading through Decorations on a Clay Vase.',
  alternates: { canonical: '/library/themes/containment-and-inwardness' },
}

export default function ContainmentAndInwardnessPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      <header className="essay-header">
        <p className="eyebrow">Thematic Reading</p>
        <h1>Containment and Inwardness</h1>
        <p className="essay-header__subtitle">
          What the outer story cannot fill
        </p>
        <p className="essay-header__sub">
          AwakenArts Library · Decorations on a Clay Vase
        </p>
      </header>

      <article className="essay-body">
        <section className="figure-section figure-section--intro">
          <div className="figure-shell">
            <div className="figure-intro figure-intro--portrait">
              <div className="figure-intro__text">

                <p className="essay-snippet">
                  "A bride at Beauregard's side, like a sheath to a saber,<br />
                  I gave my love to be denied. He wounded for the flavor."
                </p>

                <p>
                  The poem opens with the outer story already fully assembled. A marriage. A geography. A world complete with beauty and cost. What follows is one of the most vivid catalogs of American life in the collection — Texas wheat prairies, palominos with silver tack, the Portuguese coast, Tennessee country, Carolina blue. The decorations are real. They were beautiful. They happened.
                </p>

                <p>
                  The title announces from the beginning what the narrator discovers only by living through it: these are decorations <em>on</em> a vessel. The outer story is painted on. The vessel itself is something else.
                </p>

                <p>
                  A vase is shaped hollow on purpose. Its interior is not a flaw or an absence — it is the whole point of the form. The empty interior is what gives it meaning, what makes it capable of holding what it was made to receive.
                </p>

                <p>
                  The narrator lives the outer story to its completion. She carries the Dixie flag in one hand and the Bible in the other. She strolls the babies and makes the cornbread and wears the uniform shades of Civil War grey. And beneath all of it — beneath the palominos and the turquoise and the whiskey skirt — the interior of the vessel remains untouched.
                </p>

                <p>
                  The story could not fill it. However vivid the decorations, they were never what the vessel was made to hold.
                </p>

                <p className="essay-snippet">
                  "We have this treasure in earthen vessels."<br />
                  <span style={{ fontSize: '0.88rem', letterSpacing: '0.06em', fontStyle: 'normal' }}>— 2 Corinthians 4:7</span>
                </p>

                <p>
                  The poem does not resolve into peace at the end. The outer story reasserts itself — <em>So I rode off with Beauregard.</em> The world continues. But the vessel now knows what it is. And what it was always waiting to hold.
                </p>

                <p className="essay-display">
                  What were you formed to hold?
                </p>

                <div className="essay-figure-nav">
                  <Link href="/library/themes/depth-and-hidden-life" className="essay-figure-nav__prev">
                    ← Depth and Hidden Life
                  </Link>
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
              <li><Link href="/library/themes/containment-and-inwardness">Containment and Inwardness</Link></li>
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
