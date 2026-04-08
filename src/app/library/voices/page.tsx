import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Voices from the Tradition — AwakenArts',
  description:
    'A gathering of voices — scholars, theologians, and depth psychologists — who have given language to the symbolic life.',
}

/* ── Quotes ──────────────────────────────────────────────── */

const quotes = [
  {
    text: 'The basic or original unit of mental functioning is the image.',
    author: 'E.C. Whitmont',
    source: 'The Symbolic Quest',
  },
  {
    text: 'Whether we are aware of it or not, much of our behaviour is symbolic.',
    author: 'Robert A. Johnson',
    source: 'Inner Work',
  },
  {
    text: 'The dream is a series of images, which are apparently contradictory and nonsensical, but arise in reality from psychologic material which yields a clear meaning.',
    author: 'C.G. Jung',
    source: null,
  },
  {
    text: 'The unconscious really is unconscious; in other words, it is unknown. And how can you assimilate something unknown.',
    author: 'C.G. Jung',
    source: null,
  },
  {
    text: 'We are bombarded daily with images from various sources, but what we neglect most in these times is to attend to the images that come from within, from the unconscious. These images are often left unattended, let alone remembered, and yet through personal images such as pictures, dreams, poetry, and other creative expressions we are secretly fed.',
    author: 'Nora Swan-Foster',
    source: 'Jungian Art Therapy',
  },
  {
    text: 'I believe that Jung can provide the ideas and language which will enable theologians and Pastors to speak to the condition of their contemporaries and make the old gospel fresh and up to date.',
    author: 'Christopher Bryant',
    source: 'Jung and the Christian Way',
  },
]

/* ── Page ──────────────────────────────────────────────── */

export default function VoicesPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ─── */}
      <section className="deck-page-hero" aria-label="Voices from the Tradition">
        <div className="deck-page-hero__inner">
          <p className="eyebrow">The Library</p>
          <h1>
            Voices from
            <br /><em>the tradition.</em>
          </h1>
          <p className="deck-page-hero__sub">
            Scholars, theologians, and depth psychologists<br />
            who have given language to the symbolic life.
          </p>
        </div>
      </section>

      {/* ── QUOTES ─── */}
      <section className="voices-section" aria-label="Scholarly quotes">
        <div className="voices-grid">
          {quotes.map((q, i) => (
            <blockquote key={i} className="voices-quote">
              <p>"{q.text}"</p>
              <cite>
                — {q.author}
                {q.source && <>, <em>{q.source}</em></>}
              </cite>
            </blockquote>
          ))}
        </div>

        <div className="voices-back">
          <Link href="/library" className="scholar-more__link">
            ← Return to the Library
          </Link>
        </div>
      </section>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href="/" aria-label="AwakenArts home">
              <img
                src="/images/brand/logo.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              A platform at the intersection of the Christian tradition, Jungian
              Individuation, Transformational Language Arts, and original
              symbolic imagery.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/#path">The Path</Link></li>
              <li><Link href="/deck">Guidance Deck</Link></li>
              <li><Link href="/#library">The Library</Link></li>
              <li><Link href="/#offerings">Offerings</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Library</h4>
            <ul>
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
