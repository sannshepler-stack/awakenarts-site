import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import SignupForm from '@/components/SignupForm'

export const metadata: Metadata = {
  title: 'The Guidance Deck',
  description:
    'These cards did not begin as guidance. They began as poems. Each holds a symbolic moment — something to be encountered, reflected upon, and allowed to unfold.',
}

/* ── All cards ──────────────────────────────────────────── */

const cards = [
  { src: '/images/cards/guidance.jpg',           title: 'Guidance' },
  { src: '/images/cards/dream.jpg',              title: 'Dream' },
  { src: '/images/cards/fear.jpg',               title: 'Fear' },
  { src: '/images/cards/femininity.jpg',         title: 'Femininity' },
  { src: '/images/cards/grace-figure.jpg',       title: 'Grace' },
  { src: '/images/cards/energy.jpg',             title: 'Energy' },
  { src: '/images/cards/sisters.jpg',            title: 'Sisters' },
  { src: '/images/cards/crossroad.jpg',          title: 'Crossroad' },
  { src: '/images/cards/tricksters.jpg',         title: 'Tricksters' },
  { src: '/images/cards/excess.jpg',             title: 'Excess' },
  { src: '/images/cards/self-awareness.jpg',     title: 'Self Awareness' },
  { src: '/images/cards/journey.jpg',            title: 'Journey' },
  { src: '/images/cards/thoughts.jpg',           title: 'Thoughts' },
  { src: '/images/cards/humility.jpg',           title: 'Humility' },
  { src: '/images/cards/love.jpg',               title: 'Love' },
  { src: '/images/cards/loss.jpg',               title: 'Loss' },
  { src: '/images/cards/life.jpg',               title: 'Life' },
  { src: '/images/cards/cruelty.jpg',            title: 'Cruelty' },
  { src: '/images/cards/blessings.jpg',          title: 'Blessings' },
  { src: '/images/cards/gentleness.jpg',         title: 'Gentleness' },
  { src: '/images/cards/time.jpg',               title: 'Time' },
  { src: '/images/cards/jealousy.jpg',           title: 'Jealousy' },
  { src: '/images/cards/duality.jpg',            title: 'Duality' },
  { src: '/images/cards/adversity.jpg',          title: 'Adversity' },
  { src: '/images/cards/nobility.jpg',           title: 'Nobility' },
  { src: '/images/cards/nurture.jpg',            title: 'Nurture' },
  { src: '/images/cards/wholeness-orange.jpg',   title: 'Wholeness' },
  { src: '/images/cards/faith.jpg',              title: 'Faith' },
  { src: '/images/cards/rebirth.jpg',            title: 'Rebirth' },
  { src: '/images/cards/earth.jpg',              title: 'Earth' },
  { src: '/images/cards/secrets.jpg',            title: 'Secrets' },
  { src: '/images/cards/transformation.jpg',     title: 'Transformation' },
  { src: '/images/cards/lost.jpg',               title: 'Lost' },
  { src: '/images/cards/harmony.jpg',            title: 'Harmony' },
  { src: '/images/cards/growth.jpg',             title: 'Growth' },
  { src: '/images/cards/individuality.jpg',      title: 'Individuality' },
  { src: '/images/cards/illusion.jpg',           title: 'Illusion' },
  { src: '/images/cards/unconscious-energy.jpg', title: 'Unconscious Energy' },
  { src: '/images/cards/mystery.jpg',            title: 'Mystery' },
  { src: '/images/cards/connection.jpg',         title: 'Connection' },
  { src: '/images/cards/inner-life.jpg',         title: 'Inner Life' },
  { src: '/images/cards/broken.jpg',             title: 'Broken' },
  { src: '/images/cards/grace-swan.jpg',         title: 'Grace' },
  { src: '/images/cards/frozen.jpg',             title: 'Frozen' },
  { src: '/images/cards/spirit.jpg',             title: 'Spirit' },
  { src: '/images/cards/wholeness.jpg',          title: 'Wholeness' },
  { src: '/images/cards/together.jpg',           title: 'Together' },
  { src: '/images/cards/darkness.jpg',           title: 'Darkness' },
  { src: '/images/cards/wisdom.jpg',             title: 'Wisdom' },
  { src: '/images/cards/church.jpg',             title: 'Church' },
  { src: '/images/cards/wealth.jpg',             title: 'Wealth' },
  { src: '/images/cards/transcendence.jpg',      title: 'Transcendence' },
]

/* ── Page ──────────────────────────────────────────────── */

export default function DeckPage() {
  return (
    <>
      <Nav />

      {/* ── DECK HERO ─── */}
      <section className="deck-page-hero" aria-label="Guidance Deck">
        <div className="deck-page-hero__inner">
          <p className="eyebrow">The Guidance Deck</p>
          <h1>
            Symbols for
            <br /><em>the life within.</em>
          </h1>
          <p className="deck-page-hero__sub">
            These cards did not begin as guidance. They began as poems.
            Each holds a symbolic moment — something to be encountered,
            reflected upon, and allowed to unfold.
          </p>
        </div>
      </section>

      {/* ── GOLD DIVIDER ─── */}
      <div className="gold-rule" aria-hidden="true">
        <div className="gold-rule-line" />
        <span className="gold-rule-glyph">✦ ✦ ✦</span>
        <div className="gold-rule-line" />
      </div>

      {/* ── CARD GALLERY ─── */}
      <section className="full-deck-section" aria-label="All cards">
        <div className="full-deck-grid" role="list">
          {cards.map(card => (
            <article key={card.title} className="full-deck-card" role="listitem">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.title}
                loading="lazy"
                className="full-deck-card__img"
              />
              <p className="full-deck-card__title">{card.title}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── PULL QUOTE ─── */}
      <section className="quote-section" aria-label="Founding quote">
        <span className="quote-mark" aria-hidden="true">&ldquo;</span>
        <p className="quote-text">
          Art has a way of carrying what language alone cannot. These cards
          began there — in image, in symbol, in the poem beneath awareness.
        </p>
        <p className="quote-attr">— Susan Ann Shepler, AwakenArts</p>
      </section>

      {/* ── BEGIN / SIGNUP ─── */}
      <section className="begin-section" id="begin" aria-label="Begin Here">
        <div className="begin-copy">
          <p className="eyebrow">Begin Here</p>
          <h2>
            You have seen
            <br /><em>something.</em>
          </h2>
          <p>
            A dream that stayed longer than dreams usually stay. An image that
            appeared in prayer, silence, or memory and did not leave. A symbol
            that kept returning — in Scripture, in ordinary life, or at the
            edge of your understanding.
          </p>
          <blockquote>It belongs to your tradition. It always has.</blockquote>
          <p>
            AwakenArts exists to help you approach symbolic material with
            reverence, clarity, and deeper recognition — not as decoration, but
            as a living language of awareness.
          </p>
        </div>

        <div className="begin-form-wrap" id="offerings">
          <p className="eyebrow">Free Offering</p>
          <h3>Receive the Symbolic Interpretation Guide</h3>
          <p>
            Join the list to receive a free guide for approaching symbols,
            images, and recurring inner material with more understanding and
            steadiness.
          </p>
          <SignupForm />
        </div>
      </section>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo-nav.png"
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
            <h4>The Work</h4>
            <ul>
              <li><Link href="/deck">Illustrated Awakening</Link></li>
              <li><Link href="/#offerings">Whispers of Awareness</Link></li>
              <li><Link href="/#library">Concrete Poetry</Link></li>
              <li><Link href="/#library">Maiden Archetype Series</Link></li>
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
