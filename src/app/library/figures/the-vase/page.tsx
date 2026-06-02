import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Vase — Figures — Library — AwakenArts',
  description:
    'The Vase holds hidden interior life beneath visible form — silence, memory, containment, and emotional depth carried quietly within ordinary appearance.',
  alternates: { canonical: '/library/figures/the-vase' },
}

export default function TheVasePage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ─── */}
      <header className="essay-header">
        <p className="eyebrow">Figures</p>
        <h1>The Vase</h1>
        <p className="essay-header__subtitle">
          What Is Held Within Ordinary Form
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

              <div className="figure-intro__text">

                <p>
                  There are things that appear simple from the outside and are not simple at all.
                </p>

                <p>
                  A vase holds. That is its visible purpose and its visible reality. But what it holds is not always visible. What it holds may be silence. Memory. The accumulated interior life of years. The weight of what has been placed within it — carefully, quietly, over time — and what has never been named aloud.
                </p>

                <p>
                  The Vase is a figure of containment: not the containment of suppression, but the containment of depth. It carries the tension between outer stillness and inner fullness. Between what appears calm on the surface and what moves beneath that surface in ways that never fully announce themselves.
                </p>

                <h2>The interior life beneath ordinary form</h2>

                <p>
                  We inhabit forms the way a vase inhabits space. Our visible presence — what others observe — does not reveal the full reality of what we carry within. The interior life is layered, complex, and often silent. It does not always rise to the surface. It does not always seek to be seen.
                </p>

                <p>
                  Yet it is present. It shapes what we feel, what we remember, what we reach toward, and what we retreat from. The Vase speaks to this hidden interior reality — the life that is genuine and continuous beneath the quieter outward form we present to the world.
                </p>

                <p>
                  In the Christian tradition, this inward reality is not peripheral. It is central. "Man looks at the outward appearance, but the Lord looks at the heart." The heart — the interior — is where identity is truly held. Where longing, love, fear, grief, and hope gather in their most truthful forms.
                </p>

                <p className="essay-display">
                  What appears still<br />
                  is not necessarily empty.
                </p>

                <h2>Silence as depth, not absence</h2>

                <p>
                  The Vase does not speak. It does not announce what it holds. And yet what it holds is real — present within the form, shaping the form from the inside.
                </p>

                <p>
                  There are moments in human experience when this is exactly the quality of our own interior life. We carry things we have not named. We hold what cannot yet be expressed. We contain grief that has not yet found its words, longing that has not yet found its direction, recognition that has not yet found its form.
                </p>

                <p>
                  The Vase honors this condition. It does not press toward visibility or expression. It remains. It holds. It waits. And in its holding, it reveals something true about the nature of interior life itself — that depth does not require display to be real.
                </p>

                <h2>What is held</h2>

                <p>
                  To encounter The Vase is to be invited to consider what you are holding within your own interior form — what has gathered there quietly, what remains present without being spoken, what shapes the texture of your inner life from beneath the surface of ordinary awareness.
                </p>

                <p>
                  This is not a question to be answered quickly. It is an invitation to remain with the question — to notice what rises when you allow the stillness to hold rather than to push.
                </p>

                <p>
                  The Vase does not give answers. It holds the space in which they may eventually emerge.
                </p>

                <div className="essay-figure-nav">
                  <Link href="/library/figures/merri-when-time-stops" className="essay-figure-nav__prev">
                    ← Merri — When Time Stops
                  </Link>
                  <span />
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
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              Symbolic concrete poetry exploring the inward journey — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/path">The Path</Link></li>
              <li><Link href="/library">The Library</Link></li>
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
              <li><Link href="/about">Formation &amp; Provenance</Link></li>
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
