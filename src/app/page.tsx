import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import SignupForm from '@/components/SignupForm'

const deckPreviews = [
  { src: '/images/cards/formatted/crossroad.jpg', name: 'Crossroad', phrase: 'An intersection between heaven and earth' },
  { src: '/images/cards/formatted/grace.jpg',     name: 'Grace',     phrase: 'Our souls are made for life everlasting' },
  { src: '/images/cards/formatted/fear.jpg',      name: 'Fear',      phrase: 'Overcome fears with confidence, courage, and faith' },
]

const marqueeItems = [
  'The Biblical Imagination', 'Jungian Individuation', 'The Mystical Tradition',
  'Transformational Language Arts', 'The Mythopoetic Method', 'Symbol as Epistemic',
]

const streams = [
  { num: '01', title: 'The Biblical Imagination',  body: 'Dreams, visions, parables, and the symbolic imagination of Scripture — the primary mode of divine communication from Genesis to Revelation.' },
  { num: '02', title: 'The Mystical Tradition',    body: 'John of the Cross, Julian of Norwich, Meister Eckhart, Thomas Merton — who mapped the same interior geography Jung would later describe clinically.' },
  { num: '03', title: 'The Mythopoetic Method',    body: 'Image, story, and symbol are not decorative but epistemic — how certain truths are known at all, and how Scripture itself communicates.' },
  { num: '04', title: 'The Jungian Map',            body: 'A modern psychological vocabulary — Individuation, the Self, shadow, archetype — that gives contemporary seekers language for what they are experiencing.' },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────────────
          ann-cover-hero.jpg — 1600×1329 natural proportions (1.2:1)
          Chess king silhouette: LEFT, Ann poem figure: CENTER-RIGHT
          object-fit: cover, object-position: center top
          Crowns/heads preserved — bottom crops as needed
          Overlay fades right→left — cream over copy area, clear over artwork
      ─────────────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        <div className="hero-bg" aria-hidden="true">
          <Image
            src="/images/brand/ann-cover-hero.jpg"
            alt=""
            width={1600}
            height={1685}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '55% center' }}
          />
        </div>

        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-left">
          <div className="hero-inner">
            <p className="eyebrow">Where Symbol Meets Soul</p>
            <h1>Where <em>Symbol</em><br />Meets Soul</h1>
            <p className="hero-sub">
              AwakenArts guides seekers through the symbolic landscape of the
              psyche — drawing from the living depths of the Christian tradition,
              Jungian individuation, and the language of myth and archetype. For
              those who sense that the sacred story goes deeper than they have
              yet been shown.
            </p>
            <Link href="#path" className="hero-cta">
              Enter the Path <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

      </section>

      {/* ── GOLD RULE ── */}
      <div className="gold-rule" aria-hidden="true">
        <div className="gold-rule-line" />
        <span className="gold-rule-glyph">✦ ✦ ✦</span>
        <div className="gold-rule-line" />
      </div>

      {/* ── PATH TILES ── */}
      <section className="tiles-section" id="path" aria-label="Five pathways">
        <div className="tiles-header">
          <p className="eyebrow">Your Path Begins</p>
          <h2>Five thresholds.<br /><em>One interior landscape.</em></h2>
        </div>
        <div className="tiles-grid">
          <div className="tile" tabIndex={0} role="article">
            <div className="tile-flip" aria-hidden="true">
              <p>Symbols speak when words cannot. Each card is a mirror — draw one and meet what is already moving in you.</p>
              <Link href="#deck" className="tile-flip-link">Explore the Deck</Link>
            </div>
            <p className="tile-eyebrow">Primary Offering</p>
            <h3>The Guidance Deck</h3>
            <p className="tile-body">Symbols speak when words cannot. Each card is a mirror — draw one and meet what is already moving in you.</p>
            <Link href="#deck" className="tile-link">Explore the Deck</Link>
          </div>
          <div className="tile" tabIndex={0} role="article">
            <p className="tile-eyebrow">Framework</p>
            <h3>The Mythopoetic Path</h3>
            <Link href="#library" className="tile-link">Enter the Path</Link>
          </div>
          <div className="tile" tabIndex={0} role="article">
            <p className="tile-eyebrow">Foundational Text</p>
            <h3>Whispers of Awareness</h3>
            <Link href="#offerings" className="tile-link">Read the Book</Link>
          </div>
          <div className="tile tile-sm" tabIndex={0} role="article">
            <p className="tile-eyebrow">Free to Explore</p>
            <h3>The Symbolic Library</h3>
            <Link href="#library" className="tile-link">Enter the Library</Link>
          </div>
          <div className="tile tile-sm" tabIndex={0} role="article">
            <p className="tile-eyebrow">Not sure where to start</p>
            <h3>Begin Here</h3>
            <Link href="#begin" className="tile-link">Start here</Link>
          </div>
        </div>
      </section>
