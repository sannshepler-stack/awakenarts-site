import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import SignupForm from '@/components/SignupForm'

/* ── Data ──────────────────────────────────────────────── */

const allCards = [
  { src: '/images/cards/fronts/crossroad.jpg',          title: 'Crossroad' },
  { src: '/images/cards/fronts/grace.jpg',              title: 'Grace' },
  { src: '/images/cards/fronts/illusion.jpg',           title: 'Illusion' },
  { src: '/images/cards/fronts/nurture.jpg',            title: 'Nurture' },
  { src: '/images/cards/fronts/secrets.jpg',            title: 'Secrets' },
  { src: '/images/cards/fronts/thoughts.jpg',           title: 'Thoughts' },
  { src: '/images/cards/fronts/together.jpg',           title: 'Together' },
  { src: '/images/cards/fronts/broken.jpg',             title: 'Broken' },
  { src: '/images/cards/fronts/love.jpg',               title: 'Love' },
  { src: '/images/cards/fronts/frozen.jpg',             title: 'Frozen' },
  { src: '/images/cards/fronts/self-awareness.jpg',     title: 'Self Awareness' },
  { src: '/images/cards/fronts/unconscious-energy.jpg', title: 'Unconscious Energy' },
]

const displayedCards = allCards.slice(0, 8)

const marqueeItems = [
  'The Biblical Imagination',
  'Jungian Individuation',
  'The Mystical Tradition',
  'Transformational Language Arts',
  'The Mythopoetic Method',
  'Symbol as Epistemic',
]

const tiles = [
  {
    eyebrow: 'Primary Offering',
    title: 'The Guidance Deck',
    body: 'Symbols speak when words cannot. Each card is a mirror — draw one and meet what is already moving in you.',
    href: '/deck',
    label: 'Explore the Deck',
    wide: true,
  },
  {
    eyebrow: 'Framework',
    title: 'The Mythopoetic Path',
    body: '',
    href: '/path',
    label: 'Enter the Path',
  },
  {
    eyebrow: 'Foundational Text',
    title: 'Whispers of Awareness',
    body: '',
    href: 'https://www.amazon.co.jp/-/en/Susan-Ann-Shepler/dp/B0G4R4KTZD',
    label: 'Read the Book',
  },
  {
    eyebrow: 'Free to Explore',
    title: 'The Symbolic Library',
    body: '',
    href: '/library',
    label: 'Enter the Library',
    sm: true,
  },
  {
    eyebrow: 'Not sure where to start',
    title: 'Begin Here',
    body: '',
    href: '/begin',
    label: 'Start here',
    sm: true,
  },
]

/* ── Page ──────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ───────────────────────────────────────────────
          Two-column layout: image left, text right.
          Stacks vertically on mobile (image top, text bottom).
          object-fit: cover + object-position: center top
          preserves crown/head at every breakpoint.
      ──────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        {/* Left column: image */}
        <div className="hero-image">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/images/brand/queen-ann-hero-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/images/brand/queen-ann-hero-tablet.jpg"
            />
            <img
              src="/images/brand/queen-ann-hero-desktop.jpg"
              alt="Queen Ann — AwakenArts"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Right column: text */}
        <div className="hero-text">
          <div className="hero-content">
            <h1>
              Where <em>Symbol</em>
              <br />Meets Soul
            </h1>

            <p className="hero-sub">
              AwakenArts guides seekers through the symbolic landscape of the
              psyche — drawing from the living depths of the Christian tradition,
              Jungian individuation, and the language of myth and archetype.
            </p>

            <Link href="/path" className="hero-cta">
              Enter the Path <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HERO QUOTE ─── */}
      <section className="hero-quote-section" aria-label="Opening quote">
        <p className="hero-quote-text">&ldquo;Art has a way of carrying what language alone cannot.&rdquo;</p>
      </section>

      {/* ── GOLD DIVIDER ─── */}
      <div className="gold-rule" aria-hidden="true">
        <div className="gold-rule-line" />
        <span className="gold-rule-glyph">✦ ✦ ✦</span>
        <div className="gold-rule-line" />
      </div>

      {/* ── PATH TILES ─── */}
      <section className="tiles-section" id="path" aria-label="Five pathways">
        <div className="tiles-header">
          <p className="eyebrow">Your Path Begins</p>
          <h2>
            Five thresholds.
            <br /><em>One interior landscape.</em>
          </h2>
        </div>

        <div className="tiles-grid">
          {tiles.map(({ eyebrow, title, body, href, label, wide, sm }) => (
            <div
              key={title}
              className={`tile${sm ? ' tile-sm' : ''}`}
              tabIndex={0}
              role="article"
            >
              <p className="tile-eyebrow">{eyebrow}</p>
              <h3>{title}</h3>
              {body && <p className="tile-body">{body}</p>}
              <Link
                href={href}
                className="tile-link"
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >{label}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ─── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].flatMap((item, i) => [
            <span key={`i-${i}`} className="marquee-item">{item}</span>,
            <span key={`s-${i}`} className="marquee-item marquee-sep">✦</span>,
          ])}
        </div>
      </div>

      {/* ── GUIDANCE DECK ─── */}
      <section className="deck-section" id="deck" aria-label="Guidance Deck">
        <div className="deck-header">
          <p className="eyebrow">The Work</p>
          <h2>
            The Guidance Deck
            <br /><em>Symbols for the life within.</em>
          </h2>
          <p>
            These cards did not begin as guidance.
            They began as poems.
          </p>
          <p>
            Each holds a symbolic moment — something to be encountered,
            reflected upon, and allowed to unfold.
          </p>
        </div>

        <div className="deck-grid" role="list">
          {displayedCards.map((card, i) => (
            <Link
              key={card.title}
              href="/begin"
              className="deck-card"
              role="listitem"
              aria-label={card.title}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.title}
                loading={i < 4 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </Link>
          ))}
        </div>

        <div className="deck-cta">
          <Link href="/begin" className="hero-cta">
            Choose Your Path <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

            {/* ── LIBRARY ─── */}
      <section className="library-section" id="library" aria-label="Symbolic Library">
        <div className="library-header">
          <p className="eyebrow">The Library</p>
          <h2>
            Writings for the symbolic life.
            <br /><em>Thresholds into deeper seeing.</em>
          </h2>
          <p>
            A growing body of writing shaped by image, story, and archetype.
            Enter through the figure, the question, or the symbol that is already calling to you.
          </p>
        </div>

        <div className="library-grid">
          <article className="library-card">
            <p className="library-card__eyebrow">Figures</p>
            <h3>Queen Ann: Between Kingdoms</h3>
            <p>
              A meditation on exile, spirit, and the threshold between earthly
              loss and impossible help.
            </p>
            <Link href="/library/figures/queen-ann-between-kingdoms" className="library-card__link">Read the reflection</Link>
          </article>

          <article className="library-card">
            <p className="library-card__eyebrow">Foundations</p>
            <h3>The Mirror and the Map</h3>
            <p>
              On learning to read symbolic material as a way of recognition and inner orientation.
            </p>
            <Link href="/library/foundations/the-mirror-and-the-map" className="library-card__link">Enter the essay</Link>
          </article>

          <article className="library-card">
            <p className="library-card__eyebrow">Bridges</p>
            <h3>Jung and the Gospel</h3>
            <p>
              Two languages, one interior country — where psyche and spiritual
              tradition begin to illuminate each other.
            </p>
            <Link href="/library" className="library-card__link">Explore the bridge</Link>
          </article>
        </div>
      </section>

      {/* ── BEGIN / SIGNUP ─── */}
      <section className="begin-section" id="begin" aria-label="Begin Here">
        <div className="begin-copy">
          <p className="eyebrow">Begin Here</p>
          <h2>Something has stayed with you.</h2>
          <p>
            A dream that lingered longer than dreams usually do.<br />
            An image that appeared in prayer, silence, or memory and did not leave.<br />
            A symbol that kept returning—in Scripture, in ordinary life, or at the edge of your understanding.
          </p>
          <blockquote className="quote-line">It belongs to your tradition. It always has.</blockquote>
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

      {/* ── EXPERIENCE ─── */}
      
{/* — EXPERIENCE — */}
<section className="experience-home">
  <div className="experience-home__inner">
    <p className="experience-home__label">THE EXPERIENCE</p>

    <h2 className="experience-home__title">
      <span>Use your own words.</span>
      <span>Let them take shape.</span>
    </h2>

    <p className="experience-home__text">
      Words become forms. Forms become meaning. Begin with what you know —
      and watch something you have never seen emerge.
    </p>

    <img
      src="/images/experiences/butterfly-wordart.png"
      alt="Butterfly formed from words"
      className="experience-home__image"
    />

    <a href="/experience" className="experience-home__button">
      Begin the Experience
    </a>
  </div>
</section>
      {/* ── SCHOLAR QUOTES ─── */}
      <section className="scholar-section" aria-label="Scholarly voices">
        <p className="eyebrow scholar-eyebrow">The Tradition Speaks</p>
        <div className="scholar-grid">

          <blockquote className="scholar-quote">
            <p>"The basic or original unit of mental functioning is the image."</p>
            <cite>— E.C. Whitmont, <em>The Symbolic Quest</em></cite>
          </blockquote>

          <blockquote className="scholar-quote">
            <p>"Whether we are aware of it or not, much of our behaviour is symbolic."</p>
            <cite>— Robert A. Johnson, <em>Inner Work</em></cite>
          </blockquote>

          <blockquote className="scholar-quote">
            <p>"The dream is a series of images, which are apparently contradictory and nonsensical, but arise in reality from psychologic material which yields a clear meaning."</p>
            <cite>— C.G. Jung</cite>
          </blockquote>

          <blockquote className="scholar-quote">
            <p>"The unconscious really is unconscious; in other words, it is unknown. And how can you assimilate something unknown."</p>
            <cite>— C.G. Jung</cite>
          </blockquote>

        </div>
        <div className="scholar-more">
          <Link href="/library/voices" className="scholar-more__link">
            More voices from the tradition →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              <Image
                src="/images/brand/logo.png"
                alt="AwakenArts"
                width={700}
                height={336}
                className="footer-logo"
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
            <li><Link href="/path">The Path</Link></li>
            <li><a href="#deck">Guidance Deck</a></li>
            <li><a href="/library">The Library</a></li>
            <li><a href="#offerings">Offerings</a></li>
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
              <li><Link href="/begin">Begin Here</Link></li>
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
