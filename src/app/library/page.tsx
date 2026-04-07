import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'The Library — AwakenArts',
  description:
    'A collection of essays exploring the inner life through image, symbol, and reflection.',
}

/* ── Data ──────────────────────────────────────────────── */

const foundations = [
  {
    title: 'A Process in and of Images',
    subtitle: null,
    body: 'Long before a clear idea appears, the psyche begins speaking in images. This essay traces how images — dreams, figures, symbols — are not decorative but are traces of an organizing process unfolding beneath awareness.',
    link: '/library/foundations/process-in-and-of-images',
  },
  {
    title: 'Allow Content to Direct the Shape',
    subtitle: null,
    body: 'The most important rule of the work was simple: allow the content to determine the form. On the discipline of attention over invention, and what happens when the material is trusted to reveal its own shape.',
    link: '/library/foundations/allow-content-to-direct-the-shape',
  },
  {
    title: 'The Mirror and the Map',
    subtitle: null,
    body: 'Most journeys begin with a map. But there is another kind — one that begins with a mirror. On the difference between journeys that move outward and encounters that reflect what is already present within.',
    link: '/library/foundations/the-mirror-and-the-map',
  },
]

const figures = [
  {
    title: 'Grismere',
    subtitle: 'A Figure at the Threshold of Emergence',
    body: 'Grismere appears at the boundary between what can be seen and what lies beneath — a presence connected to water, depth, and the slow process by which something hidden begins to rise into conscious awareness.',
    link: '/library/figures/grismere',
  },
  {
    title: 'The Ballerina',
    subtitle: 'A Figure of Love, Motion, and Becoming',
    body: 'The Ballerina dances the dance of individuation. She is love personified — pink, perfection, divinity — and also the shadow of love: the projection, the longing, the power given away and slowly reclaimed.',
    link: '/library/figures/ballerina',
  },
  {
    title: 'Queen Ann Between Kingdoms',
    subtitle: null,
    body: 'She moves between worlds. The kingdom behind her is no longer safe. The kingdom ahead is not yet visible. On exile as initiation, and the quiet courage of continuing when the road ahead remains unseen.',
    link: '/library/figures/queen-ann-between-kingdoms',
  },
  {
    title: 'The Dragon',
    subtitle: 'The Battle You Cannot Win by Fighting',
    body: 'In symbolic language, the dragon embodies forces within the psyche that cannot be defeated through opposition — and that grow stronger the more fiercely they are resisted. The way through is a different kind of attention entirely.',
    link: '/library/figures/the-dragon',
  },
  {
    title: 'Merri — When Time Stops',
    subtitle: null,
    body: 'As the Blue Fairy of the Cinderella story, Merri arrives precisely when ordinary time has run out. On the magic of stillness, the threshold between one stage and the next, and the gifts that can only be received in readiness.',
    link: '/library/figures/merri-when-time-stops',
  },
]

/* ── Page ──────────────────────────────────────────────── */

export default function LibraryPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ─── */}
      <section className="deck-page-hero deck-page-hero--quiet" aria-label="The Library">
        <div className="deck-page-hero__inner">
          <p className="eyebrow">The Library</p>
          <h1>
            Writings for
            <br /><em>the symbolic life.</em>
          </h1>
          <p className="deck-page-hero__sub">
            Essays exploring the inner life<br />
            through image, symbol, and reflection.
          </p>
        </div>
      </section>

      {/* ── INTRODUCTION ─── */}
      <section className="lib-intro" aria-label="Library introduction">
        <div className="lib-intro__inner">
          <p>
            These writings accompany a body of symbolic artwork that emerged over time through
            a process of creative discovery. The images appeared first. Only later did their
            deeper patterns become visible.
          </p>
          <p>
            The essays do not explain the artwork completely. They offer orientation — a way
            of entering the symbolic world the images open, and a way of understanding why
            such images carry the weight they do.
          </p>
          <p className="lib-intro__note">
            Visitors do not need to read the essays in a fixed order. Each article stands on
            its own and may be approached whenever a particular image or theme feels meaningful.
          </p>
        </div>
      </section>

      {/* ── FOUNDATIONS ─── */}
      <section className="lib-section" aria-label="Foundations">
        <div className="lib-section__header">
          <p className="eyebrow">Foundations</p>
          <h2>The principles behind the work.</h2>
          <p>
            How the images emerged, what the process of individuation means, and how
            symbols can function as mirrors of the inner life.
          </p>
        </div>
        <div className="lib-grid">
          {foundations.map(({ title, subtitle, body, link }) => (
            <article key={title} className="lib-card">
              <p className="lib-card__eyebrow">Foundations</p>
              <h3>{title}</h3>
              {subtitle && <p className="lib-card__subtitle">{subtitle}</p>}
              <p className="lib-card__body">{body}</p>
              <Link href={link} className="library-card__link">Read the essay</Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── FIGURES ─── */}
      <section className="lib-section lib-section--warm" aria-label="Figures">
        <div className="lib-section__header">
          <p className="eyebrow">Figures</p>
          <h2>The symbolic figures of the journey.</h2>
          <p>
            Each figure represents a distinct moment within the psychological journey —
            emergence, exile, confrontation, stillness, recognition, and transformation.
          </p>
        </div>
        <div className="lib-grid lib-grid--4">
          {figures.map(({ title, subtitle, body, link }) => (
            <article key={title} className="lib-card">
              <p className="lib-card__eyebrow">Figures</p>
              <h3>{title}</h3>
              {subtitle && <p className="lib-card__subtitle">{subtitle}</p>}
              <p className="lib-card__body">{body}</p>
              <Link href={link} className="library-card__link">Read the essay</Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── BRIDGES (coming) ─── */}
      <section className="lib-section lib-section--coming" aria-label="Bridges">
        <div className="lib-section__header">
          <p className="eyebrow">Bridges</p>
          <h2>Connections to the broader tradition.</h2>
          <p>
            Essays showing how the language of symbols speaks alongside psychology,
            philosophy, and contemplative thought. Coming soon.
          </p>
        </div>
      </section>

      {/* ── VOICES LINK ─── */}
      <div className="lib-voices">
        <p>Scholars and theologians who have given language to the symbolic life.</p>
        <Link href="/library/voices" className="scholar-more__link">
          Voices from the tradition →
        </Link>
      </div>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href="/" aria-label="AwakenArts home">
              <img
                src="/images/brand/logo-nav.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              A platform at the intersection of the Christian tradition, Jungian
              Individuation, Transformational Language Arts, and original symbolic imagery.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/#path">The Path</Link></li>
              <li><Link href="/deck">Guidance Deck</Link></li>
              <li><Link href="/library">The Library</Link></li>
              <li><Link href="/#offerings">Offerings</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Library</h4>
            <ul>
              <li><Link href="/library#foundations">Foundations</Link></li>
              <li><Link href="/library#figures">Figures</Link></li>
              <li><Link href="/library/voices">Voices from the Tradition</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/#about">Formation &amp; Provenance</Link></li>
              <li><Link href="/#begin">Begin Here</Link></li>
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
