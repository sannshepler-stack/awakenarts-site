import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Library — AwakenArts',
  description:
    'Companion readings for the works of AwakenArts — essays written to help particular pieces in the Collection open up the longer you spend with them.',
  alternates: { canonical: '/library' },
  openGraph: {
    url: '/library',
    title: 'Library — AwakenArts',
    description:
      'Companion essays that walk alongside the works in the Collection — written to deepen, not replace, time spent with the pieces themselves.',
  },
}

/* ── Poem-centric cards ─────────────────────────────────────────────── */

const poemCards = [
  {
    poem: 'Mermaid Grismere',
    note: 'What lies beneath the surface — submerged, hidden, and waiting to be met.',
    link: '/library/themes/depth-and-hidden-life',
  },
  {
    poem: 'Queen Ann',
    note: 'A queen between kingdoms — the threshold where old identity falls away.',
    link: '/library/themes/exile-and-threshold',
  },
  {
    poem: 'Dragon',
    note: 'What cannot be fought until it is named.',
    link: '/library/themes/fear-and-transformative-force',
  },
  {
    poem: 'The Ballerina',
    note: 'The body shaped by devotion toward something it cannot fully reach.',
    link: '/library/themes/longing-and-devotion',
    essay: { label: 'Little Girls Speak Volumes', href: '/essays/little-girls-speak-volumes.pdf' },
  },
  {
    poem: 'The Vase',
    note: 'What an ordinary form holds without showing.',
    link: '/library/themes/containment-and-inwardness',
  },
  {
    poem: 'Angel Gardens',
    note: 'Over all the cold and frost — you are never lost.',
    link: '/library/themes/grace-and-the-guarding-presence',
  },
  {
    poem: "Her Mother's Hands",
    note: 'The center was never lost. It was handed down.',
    link: '/library/themes/her-mothers-hands',
  },
  {
    poem: 'Watery Cross',
    note: 'The cross that forms at the surface where two worlds touch.',
    link: '/library/themes/the-watery-cross',
  },
]

const poemNames = poemCards.map(p => p.poem)

/* ── Page ──────────────────────────────────────────────── */

export default function LibraryPage() {
  return (
    <>
      <Nav />

      <section className="lib-hero" aria-label="Library">
        <div className="lib-hero__inner">
          <p className="eyebrow">Library</p>
          <h1>
            Readings<br />
            <em>to accompany the work.</em>
          </h1>
          <p className="lib-hero__sub">
            The Library gathers writings on poetry, parable, symbol,
            and imagery — amplifying the works of AwakenArts.
          </p>
        </div>
      </section>

      <section className="lib-section lib-section--dark" aria-label="Thematic readings">

        {/* ── Poem navigation ── */}
        <div className="lib-poem-nav">
          <p className="eyebrow lib-poem-nav__label">Selections Include</p>
          <ul className="lib-poem-nav__list">
            {poemNames.map(name => (
              <li key={name} className="lib-poem-nav__item">{name}</li>
            ))}
          </ul>
        </div>

        <div className="lib-grid lib-grid--poems">
          {poemCards.map(({ poem, note, link, essay }) => (
            <article key={poem} className="lib-card">
              <h3 className="lib-card__poem-name">{poem}</h3>
              <p className="lib-card__body">{note}</p>
              <Link href={link} className="library-card__link">Read →</Link>
              {essay && (
                <a
                  href={essay.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="library-card__link lib-card__essay-link"
                >
                  {essay.label} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
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
              A body of work shaped by the literary-symbolic tradition of
              Scripture itself — parable, poetry, and image — built through
              years of close attention to language and form. By Susan Ann
              Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Library</h4>
            <ul>
              <li><Link href="/library/themes/depth-and-hidden-life">Depth and Hidden Life</Link></li>
              <li><Link href="/library/themes/exile-and-threshold">Exile and Threshold</Link></li>
              <li><Link href="/library/themes/fear-and-transformative-force">Fear and What Must Be Named</Link></li>
              <li><Link href="/library/themes/longing-and-devotion">Longing and Devotion</Link></li>
              <li><Link href="/library/themes/containment-and-inwardness">Containment and Hidden Treasure</Link></li>
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
