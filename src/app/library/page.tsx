import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Library — AwakenArts',
  description:
    'Image-shaped poems and symbolic forms — concrete poetry as contemplative learning. Each work joins language to visible structure, inviting recognition through form, feeling, and reflection.',
  alternates: { canonical: '/library' },
  openGraph: {
    url: '/library',
    title: 'Library — AwakenArts',
    description:
      'Concrete poems, readings, and symbolic literary works from the world of AwakenArts.',
  },
}

/* ── Data ──────────────────────────────────────────────── */

/*
 * Concrete Poems — literary archive entries for each symbolic figure.
 * Placeholder notes. Each entry will eventually carry: excerpt,
 * reading, reflection, selected imagery, optional audio.
 * Framing is literary — not psychological, not instructional.
 */
const poems = [
  {
    title: 'Grismere',
    note: 'The mermaid embodies divided awareness — the pull between surface life and hidden depth. She teaches the reader to recognize what has been submerged beneath ordinary experience, and why it continues to call.',
    link: '/library/figures/grismere',
  },
  {
    title: 'Queen Ann',
    note: 'The queen stands at the threshold between what has ended and what has not yet begun. She carries the tension of exile and fidelity — the cost of remaining true when the familiar kingdom is gone.',
    link: '/library/figures/queen-ann-between-kingdoms',
  },
  {
    title: 'The Ballerina',
    note: 'The ballerina holds the tension between longing and discipline — the body shaped by devotion toward something it cannot fully reach. She teaches the reader to recognize beauty as both gift and burden.',
    link: '/library/figures/ballerina',
  },
  {
    title: 'Dragon',
    note: 'The dragon cannot be defeated through direct opposition. He embodies the force that must be understood before it can be integrated — fear, power, and the shadow that grows larger when refused.',
    link: '/library/figures/the-dragon',
  },
  {
    title: 'Merri — When Time Stops',
    note: 'Merri arrives when time has run out — when forward movement is no longer possible. She teaches stillness as readiness, not failure. In the moment of suspension, she reveals what the rushing past conceals.',
    link: '/library/figures/merri-when-time-stops',
  },
]

/* ── Page ──────────────────────────────────────────────── */

export default function LibraryPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────
          Literary heading. Quieter than Studio. Typography-led.
          No cinematic layout — just the work, announced simply.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-hero" aria-label="Library">
        <div className="lib-hero__inner">
          <p className="eyebrow">Library</p>
          <h1>
            Image-shaped poems<br />
            <em>and symbolic forms</em>
          </h1>
          <p className="lib-hero__sub">
            These works reflect the movement beneath surface experience into
            deeper layers of memory, longing, conflict, transformation, and
            recognition. The journey inward is not an escape from reality,
            but a search for truthful orientation — where the hidden life of
            the heart encounters wisdom, reflection, and the light that guides
            the path forward.
          </p>
        </div>
      </section>

      {/* ── SYMBOLIC FIGURES ─────────────────────────────────────
          Literary archive entries — atmospheric, not explanatory.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-section" aria-label="Symbolic figures">
        <div className="lib-grid lib-grid--4">
          {poems.map(({ title, note, link }) => (
            <article key={title} className="lib-card">
              <h3>{title}</h3>
              <p className="lib-card__body">{note}</p>
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
              Original symbolic figures for the interior life — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Library</h4>
            <ul>
              <li><Link href="/library">Symbolic Works</Link></li>
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
