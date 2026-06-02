import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Library — AwakenArts',
  description:
    'Thematic readings of symbolic concrete poetry — depth, exile, fear, longing, and inwardness explored through image-shaped poems by Susan Ann Shepler.',
  alternates: { canonical: '/library' },
  openGraph: {
    url: '/library',
    title: 'Library — AwakenArts',
    description:
      'Thematic readings of symbolic concrete poetry — what the poems reveal about depth, exile, fear, longing, and the hidden interior life.',
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
            The poems<br />
            <em>and what they reveal.</em>
          </h1>
          <p className="lib-hero__sub">
            Each concrete poem carries hidden meaning in its shape, language,
            and symbolic tension. These readings draw that out — exploring
            the human realities the poems hold: depth and hidden life, exile
            and threshold, fear, longing, inwardness.
          </p>
        </div>
      </section>

      <section className="lib-section" aria-label="Thematic readings">
        <p className="lib-method-note">
          These poems do not explain themselves. You encounter them the way you
          encounter a parable — through image, tension, and recognition rather
          than summary. Each thematic reading gathers poems that speak to the
          same territory of human experience.
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
              Symbolic concrete poetry exploring the inward journey — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
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
