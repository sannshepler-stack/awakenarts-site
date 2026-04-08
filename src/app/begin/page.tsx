import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Begin Here — AwakenArts',
  description:
    'A gentle entry into the work. Begin with an image, a question, or a reflection — wherever something opens.',
}

const paths = [
  {
    eyebrow: 'Begin with an image',
    title: 'The Guidance Deck',
    body: 'Draw a card. See what meets you.',
    href: '/deck',
    label: 'Enter the Deck',
  },
  {
    eyebrow: 'Begin with a question',
    title: 'The Library',
    body: 'Enter through a figure, a symbol, or a question already present in you.',
    href: '/library',
    label: 'Enter the Library',
  },
  {
    eyebrow: 'Begin with understanding',
    title: 'The Path',
    body: 'Read how the work unfolds and how symbols function as guides.',
    href: '/path',
    label: 'Enter the Path',
  },
]

export default function BeginPage() {
  return (
    <>
      <Nav />

      <main className="begin-page">

        {/* ── OPENING ─── */}
        <section className="begin-page__opening">
          <p className="eyebrow begin-page__eyebrow">Begin Here</p>
          <h1 className="begin-page__headline">You are already in it.</h1>
          <p className="begin-page__sub">
            Something has stirred, returned, or remained.<br />
            You do not need to search for it. Only to meet it.
          </p>
        </section>

        {/* ── ORIENTATION ─── */}
        <section className="begin-page__orientation">
          <p>
            There are different ways into this work.
            You may begin with an image, a question, or a reflection.
            Choose the path that feels closest.
          </p>
        </section>

        {/* ── THREE PATHS ─── */}
        <section className="begin-page__paths" aria-label="Entry paths">
          {paths.map(({ eyebrow, title, body, href, label }) => (
            <div key={title} className="begin-path">
              <p className="begin-path__eyebrow">{eyebrow}</p>
              <h2 className="begin-path__title">{title}</h2>
              <p className="begin-path__body">{body}</p>
              <Link href={href} className="tile-link begin-path__link">{label}</Link>
            </div>
          ))}
        </section>

        {/* ── CLOSING ─── */}
        <p className="begin-page__closing">
          There is no correct order. Only the place that opens.
        </p>

      </main>

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
              A platform at the intersection of the Christian tradition, Jungian
              Individuation, Transformational Language Arts, and original symbolic imagery.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/deck">Guidance Deck</Link></li>
              <li><Link href="/library">The Library</Link></li>
              <li><Link href="/begin">Begin Here</Link></li>
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
