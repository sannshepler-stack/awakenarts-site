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

/* ── Thematic categories ───────────────────────────────────────────── */

const themes = [
  {
    title: 'Depth and Hidden Life',
    note: 'What lies beneath the surface of ordinary awareness — submerged realities, concealed interior life, and the fear of encountering what we carry within.',
    poems: 'Grismere · The Vase',
    link: '/library/themes/depth-and-hidden-life',
  },
  {
    title: 'Exile and Threshold',
    note: 'The space between what has ended and what has not yet begun — crossing, loss, forced stillness, and the threshold moments where old identity falls away.',
    poems: 'Queen Ann · Merri — When Time Stops',
    link: '/library/themes/exile-and-threshold',
  },
  {
    title: 'Fear and Transformative Force',
    note: 'Forces that cannot be approached through opposition — what must be understood, not defeated, before it can move through us toward integration.',
    poems: 'Dragon',
    link: '/library/themes/fear-and-transformative-force',
  },
  {
    title: 'Longing and Devotion',
    note: 'The body shaped by devotion toward something it cannot fully reach — beauty, aspiration, fragility, and the cost of becoming.',
    poems: 'The Ballerina',
    link: '/library/themes/longing-and-devotion',
  },
  {
    title: 'Containment and Inwardness',
    note: 'What is held within ordinary form — silence, memory, and interior truth carried quietly beneath a still surface.',
    poems: 'The Vase',
    link: '/library/themes/containment-and-inwardness',
  },
  {
    title: 'Grace and the Guarding Presence',
    note: 'The angel who plants in soil, sows love in winter storms, counts your smiles and touches you when you cry. Over all the cold and frost — you are never lost.',
    poems: 'Angel Gardens',
    link: '/library/themes/grace-and-the-guarding-presence',
  },
  {
    title: 'Her Mother\'s Hands',
    note: 'The poem shaped as a California poppy — orange bloom, green stem, flowers crossed over her heart. The center was never lost. It was handed down.',
    poems: 'Her Mother\'s Hands',
    link: '/library/themes/her-mothers-hands',
  },
  {
    title: 'The Watery Cross',
    note: 'The cross that forms where the wooden mast meets the moving water — not in heaven, not in the deep, but at the surface where the two worlds touch.',
    poems: 'Watery Cross',
    link: '/library/themes/the-watery-cross',
  },
]

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
            Essays supporting particular works in the Collection.
          </p>
        </div>
      </section>

      <section className="lib-section" aria-label="Thematic readings">
        <p className="lib-method-note">
          These readings don&rsquo;t explain the works so much as walk
          alongside them — offering a little orientation, not the full
          picture, so there&rsquo;s still something left to discover on your
          own. There&rsquo;s no required order here: read what calls to you,
          skip what doesn&rsquo;t, and come back when something in the
          Collection sends you looking for more.
        </p>
        <div className="lib-grid lib-grid--4">
          {themes.map(({ title, note, poems, link }) => (
            <article key={title} className="lib-card">
              <h3>{title}</h3>
              <p className="lib-card__body">{note}</p>
              <p className="lib-card__poems">{poems}</p>
              <Link href={link} className="library-card__link">Read →</Link>
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
              A body of work rooted in the Christian contemplative tradition —
              created through years of attention to image, language, and the
              inner life. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Library</h4>
            <ul>
              <li><Link href="/library/themes/depth-and-hidden-life">Depth and Hidden Life</Link></li>
              <li><Link href="/library/themes/exile-and-threshold">Exile and Threshold</Link></li>
              <li><Link href="/library/themes/fear-and-transformative-force">Fear and Transformative Force</Link></li>
              <li><Link href="/library/themes/longing-and-devotion">Longing and Devotion</Link></li>
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
