import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Grace and the Guarding Presence — Library — AwakenArts',
  description:
    'The angel who works the earth — planting in soil, sowing love in winter storms, counting smiles and touching when you cry. A thematic reading through Angel Gardens.',
  alternates: { canonical: '/library/themes/grace-and-the-guarding-presence' },
}

export default function GraceAndTheGuardingPresencePage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      <header className="essay-header">
        <p className="eyebrow">Thematic Reading</p>
        <h1>Grace and the Guarding Presence</h1>
        <p className="essay-header__subtitle">
          The angel who works in winter storms
        </p>
        <p className="essay-header__sub">
          AwakenArts Library · Angel Gardens
        </p>
      </header>

      <article className="essay-body">
        <section className="figure-section figure-section--intro">
          <div className="figure-shell">
            <div className="figure-intro figure-intro--portrait">
              <div className="figure-intro__text">

                <p className="essay-snippet">
                  "I sow my love with Heaven's care<br />
                  in winter storms when trees are bare."
                </p>

                <p>
                  The poem begins before it speaks. The visual form at the top — Angel, Angel Guardian, Angel Gardens rotating and descending toward the center — creates a hovering presence before a single line of the poem arrives. The shape itself is the guardian. Then it speaks.
                </p>

                <p>
                  And what it says is not what you might expect from an angel. It does not announce. It does not comfort from a distance. It plants in soil. It brings songs to sing. It sows love specifically in winter storms, when the trees are bare and the conditions are least welcoming to anything growing.
                </p>

                <p>
                  This is the essential movement of the poem — the angel is not above the difficulty. It is present within it. Grounded in earth, working in the cold, attending to the most private moments of a life: watching you sleep, hearing your soulful sighs, counting your smiles, touching you when you cry.
                </p>

                <p>
                  The poem expands with each stanza — two lines, then four, then six, then eight, then ten — the cadence held steady as the poem grows longer, each stanza adding one more dimension of the angel's presence. The form itself enacts the accumulation of care: patient, rhythmic, sustained.
                </p>

                <p>
                  The garden matters. Angels in gardens carry the oldest symbolic weight — Gethsemane, Eden, the empty tomb. The garden is where Heaven touches earth, where the divine gets its hands in the soil. This angel does not appear in light or fire or thunder. She appears in the garden. She plants. The bluebells ring.
                </p>

                <p>
                  The final couplet is the counterweight to every other poem in the collection. Where Grismere speaks of hidden depths, where Queen Ann crosses through exile, where the Clay Vase asks what the vessel was made to hold — the Angel answers from outside the wound:
                </p>

                <p className="essay-snippet">
                  "Ice will fill the forests and fields will fill with frost,<br />
                  But there's an angel guarding you, so you are never lost."
                </p>

                <p>
                  Not: you will not suffer. Not: the cold will not come. The ice will come. The frost will come. And over all of it — present, grounded, attending — the guardian remains.
                </p>

                <p className="essay-display">
                  You are never lost.
                </p>

                <div className="essay-figure-nav">
                  <Link href="/library/themes/containment-and-inwardness" className="essay-figure-nav__prev">
                    ← Containment and Inwardness
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
              Symbolic concrete poetry exploring the inward journey — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>
          <div className="footer-col">
            <h4>Library</h4>
            <ul>
              <li><Link href="/library">The Library</Link></li>
              <li><Link href="/library/themes/depth-and-hidden-life">Depth and Hidden Life</Link></li>
              <li><Link href="/library/themes/grace-and-the-guarding-presence">Grace and the Guarding Presence</Link></li>
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
