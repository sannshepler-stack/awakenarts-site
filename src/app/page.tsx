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

      {/* ── MARQUEE ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].flatMap((item, i) => [
            <span key={`i${i}`} className="marquee-item">{item}</span>,
            <span key={`s${i}`} className="marquee-item marquee-sep">✦</span>,
          ])}
        </div>
      </div>

      {/* ── GUIDANCE DECK ── */}
      <section className="deck-section" id="deck" aria-label="Guidance Deck">
        <div className="deck-copy">
          <p className="eyebrow">Illustrated Awakening</p>
          <h2>These cards did not begin<br />as guidance. They began<br />as <em>poems.</em></h2>
          <p>Each of the 52 cards originates in a poem written by Susan Ann Shepler — not written as spiritual guidance but written as a poem, arriving the way poems arrive.</p>
          <p>What emerged was not planned. It <em>manifested.</em> The cards are stepping stones, not a map. Draw a card. Meet what is already moving in you.</p>
          <Link href="#begin" className="btn-gold">Draw a Card <span aria-hidden="true">→</span></Link>
        </div>
        <div className="deck-cards" aria-label="Sample cards">
          {deckPreviews.map(card => (
            <div key={card.name} className="card-preview">
              <Image src={card.src} alt={`${card.name} — ${card.phrase}`} width={1427} height={2000} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="card-preview-label">
                <span className="card-preview-name">{card.name}</span>
                <span className="card-preview-phrase">{card.phrase}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUR STREAMS ── */}
      <section className="path-section" id="library" aria-label="The Four Streams">
        <div className="path-intro">
          <p className="eyebrow">The Framework</p>
          <h2>Four streams.<br /><em>One river.</em></h2>
          <p>AwakenArts draws from four traditions that have always been describing the same territory — the soul&apos;s movement toward its own depth, which is simultaneously a movement toward God.</p>
          <Link href="#begin" className="btn-outline">Enter the Path <span aria-hidden="true">→</span></Link>
        </div>
        <div className="path-streams">
          {streams.map(s => (
            <div key={s.num} className="stream">
              <div className="stream-num">{s.num}</div>
              <div>
                <div className="stream-title">{s.title}</div>
                <p className="stream-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section" aria-label="Founding quote">
        <span className="quote-mark" aria-hidden="true">&ldquo;</span>
        <p className="quote-text">Words acquiesced to shapes and shapes to words — so that the unconscious material had a playground to work and appear.</p>
        <p className="quote-attr">— Susan Ann Shepler, AwakenArts</p>
      </section>

      {/* ── BEGIN HERE ── */}
      <section className="begin-section" id="begin" aria-label="Begin Here">
        <div className="begin-copy">
          <p className="eyebrow">Begin Here</p>
          <h2>You have seen<br /><em>something.</em></h2>
          <p>A dream that stayed with you longer than dreams stay. An image that appeared in prayer or in silence and did not leave. A symbol that kept returning — in Scripture, in life, in the margins of your own thinking.</p>
          <blockquote>It belongs to your tradition. It always has.</blockquote>
          <p>Enter your name and email to receive a free symbolic interpretation guide — and a welcome into the territory AwakenArts was built to accompany.</p>
        </div>
        <div className="begin-form-wrap" id="offerings">
          <h3>Receive the Free Guide</h3>
          <p>A symbolic interpretation guide for those who have seen something they could not name.</p>
          <SignupForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/">
              <Image src="/images/brand/logo-nav.png" alt="AwakenArts" width={700} height={336} className="footer-logo-img" />
            </Link>
            <p>A platform at the intersection of the Christian tradition, Jungian Individuation, Transformational Language Arts, and original symbolic imagery.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="#path">The Path</Link></li>
              <li><Link href="#deck">Guidance Deck</Link></li>
              <li><Link href="#library">The Library</Link></li>
              <li><Link href="#offerings">Offerings</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="#deck">Illustrated Awakening</Link></li>
              <li><Link href="#offerings">Whispers of Awareness</Link></li>
              <li><Link href="#library">Concrete Poetry</Link></li>
              <li><Link href="#library">Maiden Archetype Series</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="#about">Formation &amp; Provenance</Link></li>
              <li><Link href="#begin">Begin Here</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 AwakenArts · AwakenArts.com · All Rights Reserved</span>
          <span>© Susan Ann Shepler · Confidential</span>
        </div>
      </footer>
    </>
  )
}
