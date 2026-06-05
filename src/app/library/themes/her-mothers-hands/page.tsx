import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Her Mother\'s Hands — Library — AwakenArts',
  description:
    'The poem is the poppy — orange bloom, green stem, flowers crossed over her heart. A thematic reading of Her Mother\'s Hands.',
  alternates: { canonical: '/library/themes/her-mothers-hands' },
}

export default function HerMothersHandsPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      <header className="essay-header">
        <p className="eyebrow">Thematic Reading</p>
        <h1>Her Mother&rsquo;s Hands</h1>
        <p className="essay-header__subtitle">
          The poem shaped as a poppy
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

                {/* Five poppies image — add to /public/images/mandala/ when transparent version is ready */}

                <p>
                  The poem does not describe a poppy. The poem <em>is</em> a poppy — shaped into the flower through the same centering process that gives all these works their form. The orange of the poem is the California poppy: the state flower, the roadside flower, the flower covering the hillsides of San Luis Obispo where the Portuguese dairy farm stood, where the Brown Azorean Girl grew up knowing she fit in the world the way she was.
                </p>

                <p className="essay-snippet">
                  "A cupful<br />
                  of sugar, two cups of flour,<br />
                  stirring with love in the morning<br />
                  hours, a pinch of salt, folding, rolling, pouring out,<br />
                  buttoning tiny buttons, tying bows and tennis shoes…"
                </p>

                <p>
                  The poem opens at the top — narrow, like the first two petals of a flower just opening — and expands outward through all the actions of a mother's hands. Baking, buttoning, brushing, washing, teaching, reaching, tracing, touching. The poem widens as the bloom widens, until it reaches its full breadth in the middle: the hands that do everything, that know everything, that are always present.
                </p>

                <p>
                  The color shifts tell the story. The orange is the bloom — all the action, all the love, all the ordinary and extraordinary gestures of a life given in service. Then the poem narrows: <em>Praising, praying.</em> The petals begin to gather at the base. Then green begins: <em>Lifting souls.</em> The color of the stem. The color of roots. The color of the calyx — the cup of prayer hands that holds the flower up from below.
                </p>

                <p>
                  The poem closes at the very base of the stem, at the earth:
                </p>

                <p className="essay-snippet">
                  "flowers<br />
                  crossed<br />
                  over her<br />
                  heart."
                </p>

                <p>
                  The flowers crossed over the heart. The prayer hands folded. The calyx holding the seed. The last sight of her mother — hands crossed over her heart in the coffin — is not loss. It is the poppy closing at the end of the day, holding the seed within it for what comes next.
                </p>

                {/* The full poppy silhouette */}
                <div style={{ margin: '3rem auto', textAlign: 'center', maxWidth: '680px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/mandala/mothers-hands.jpg"
                    alt="Her Mother's Hands — the poem shaped as a California poppy"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                    loading="lazy"
                  />
                </div>

                <p>
                  And the companion flower to the right — <em>She has Her Mother&rsquo;s Hands</em> — is the daughter. The next poppy opening beside the first. The hands that write these poems are the same hands, the same graceful form, the same long fingers. The mother is not gone. She is embodied in the hands that shaped the words into the flower.
                </p>

                <p>
                  The California poppy is the mandala of this collection. Four petals, bright center, the cross visible inside the quaternity. The poppies that covered the hillsides of home. The mother buried in the California hills. The flowers crossed over her heart.
                </p>

                <p className="essay-display">
                  The center was never lost.<br />
                  It was handed down.
                </p>

                <div className="essay-figure-nav">
                  <Link href="/library/themes/grace-and-the-guarding-presence" className="essay-figure-nav__prev">
                    ← Grace and the Guarding Presence
                  </Link>
                  <Link href="/library/themes/the-watery-cross" className="essay-figure-nav__next">
                    The Watery Cross →
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
