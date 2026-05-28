import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Library — AwakenArts',
  description:
    'Concrete poems, readings, and symbolic literary works — the readable archive of AwakenArts by Susan Ann Shepler.',
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
    note: 'Water, depth, and the slow surface of what has long been present.',
    link: '/library/figures/grismere',
  },
  {
    title: 'Queen Ann',
    note: 'Between kingdoms — a threshold between what has ended and what has not yet begun.',
    link: '/library/figures/queen-ann-between-kingdoms',
  },
  {
    title: 'The Ballerina',
    note: 'Movement, longing, and the body as symbolic form.',
    link: '/library/figures/ballerina',
  },
  {
    title: 'Dragon',
    note: 'A presence that cannot be approached through opposition.',
    link: '/library/figures/the-dragon',
  },
  {
    title: 'Merri — When Time Stops',
    note: 'She arrives when time has run out. A poem of stillness and readiness.',
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
            Concrete poetry<br />
            <em>and symbolic works</em>
          </h1>
          <p className="lib-hero__sub">
            The readable archive of AwakenArts — shaped poems, readings,
            reflections, and symbolic literary works encountered as
            literature, not explanation.
          </p>
        </div>
      </section>

      {/* ── CONCRETE POEMS ───────────────────────────────────────
          The symbolic figures as literary archive entries.
          Each title links to its dedicated page. Notes are brief,
          atmospheric, and literary — not explanatory.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-section" aria-labelledby="lib-poems-heading">
        <div className="lib-section__header">
          <p className="eyebrow">Concrete Poems</p>
          <h2 id="lib-poems-heading">
            Symbolic figures<br />
            <em>within the work</em>
          </h2>
        </div>
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

      {/* ── READINGS ─────────────────────────────────────────────
          Placeholder. Contemplative literary reflections connected
          to symbols, memory, image, and atmospheric recognition.
          Not a guidance system.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-section lib-section--warm" aria-labelledby="lib-readings-heading">
        <div className="lib-section__header">
          <p className="eyebrow">Readings</p>
          <h2 id="lib-readings-heading">
            Contemplative<br />
            <em>literary reflections</em>
          </h2>
          <p className="lib-placeholder-note">In preparation.</p>
        </div>
      </section>

      {/* ── REFLECTIONS ──────────────────────────────────────────
          Placeholder. Short contemplative symbolic writing.
          Restrained editorial tone.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-section" aria-labelledby="lib-reflections-heading">
        <div className="lib-section__header">
          <p className="eyebrow">Reflections</p>
          <h2 id="lib-reflections-heading">
            Symbolic writing<br />
            <em>and contemplation</em>
          </h2>
          <p className="lib-placeholder-note">In preparation.</p>
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
              <li><Link href="/library#lib-poems-heading">Concrete Poems</Link></li>
              <li><Link href="/library#lib-readings-heading">Readings</Link></li>
              <li><Link href="/library#lib-reflections-heading">Reflections</Link></li>
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
