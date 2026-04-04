import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'The Mythopoetic Path — AwakenArts',
  description:
    'Each poem came before the card. The text took the form of the figure — moving through the symbol from within. This is where the work began.',
}

export default function PathPage() {
  return (
    <>
      <Nav />

      <main className="path-page">

        {/* ── OPENING ── */}
        <section className="path-opening">
          <p className="eyebrow path-opening__eyebrow">The Mythopoetic Path</p>
          <h1 className="path-opening__headline">Image comes first.</h1>
          <p className="path-opening__sub">
            Not symbol as label. Not image as illustration. Image as primary event —
            something felt before it is understood, known in the body before the
            mind has words for it.
          </p>
          <p className="path-opening__sub" style={{marginTop: '1rem'}}>
            Each poem in this collection takes the shape of its symbol. The text
            becomes the figure. From that shaped figure, Jungian amplification
            moves outward — producing card images that carry the energy through
            affect and imagery, not through explanation. The cards do not tell you
            what a symbol means. They let the symbol work on you.
          </p>
          <p className="path-opening__sub" style={{marginTop: '1rem'}}>
            Every image here is connected to the Jungian path of Individuation —
            the universal movement toward wholeness that Jung understood as the
            deepest purpose of the psyche. These are not decorative symbols.
            They are interior figures, and they are already at work in you.
          </p>
        </section>

        {/* ── GRISMERE ── */}
        <section className="path-figure" id="grismere" aria-label="Grismere — The Mermaid">

          <header className="path-figure__header">
            <p className="eyebrow">First Figure · The Anima</p>
            <h2 className="path-figure__name">Grismere</h2>
            <p className="path-figure__role">
              Goddess of the Deep &nbsp;·&nbsp; The Lure into the Unconscious
            </p>
          </header>

          <div className="path-figure__body">

            {/* Shaped poem image */}
            <div className="path-poem-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cards/figures/grismere/grismere-poem.jpg"
                alt="Grismere — shaped poem by Susan Ann Shepler"
                className="path-poem-img"
                loading="lazy"
              />
            </div>

            {/* Figure / card placeholder — mermaid card coming */}
            <div className="path-figure__image-wrap">
              {/* Mermaid card image to be added */}
            </div>

          </div>

          {/* Symbolic reading */}
          <div className="path-figure__reading">
            <p className="eyebrow">Anima · Earth Mother · Goddess</p>
            <p>
              The name <em>Grismere</em> carries her meaning from the start. From
              the Spanish <em>gris</em> — grey, gloomy — and the French <em>mere</em>
              — ocean, and also mother. She is the Grey Ocean. She is, perhaps,
              the Grey Mother.
            </p>
            <p>
              Grismere is one of a series of archetypal images linked to the process
              of individuation — the movement Jung understood as universal, leading
              toward an original state of wholeness. She is an archetype of the
              collective unconscious: a mermaid, a Goddess, an Earth Mother, an
              inhabitant of the twilight sphere — bewitching, and luring not toward
              danger but toward depth.
            </p>
            <blockquote className="quote-line">
              Whoever looks into the water sees his own image, but behind it living
              creatures soon loom up&hellip; Sometimes a nixie gets into the
              fisherman&rsquo;s net, a female, half-human fish.
              <cite> — C. G. Jung</cite>
            </blockquote>
            <p>
              Jung associates the mermaid — siren, nixie, elfin — with the anima:
              the Eternal Feminine and the Soul-image. Grismere personifies this
              feminine energy, but her tail is more than unconscious symbol. The
              feminine image is joined to a decidedly masculine energy, holding
              both in a single form. She is an indirect portrait of wholeness —
              of gender, of division, of the self that lives both above and below
              the surface.
            </p>
            <p>
              She appears as the Handless Maiden: armless, fragile, incomplete in
              the world of air. Her tail is her connection to the buried self — to
              the whole of nature hidden in the sea of the unconscious. To meet
              her is to recognize the divided self, and to begin the movement
              toward integration.
            </p>
            <blockquote className="quote-line">
              Eternal truth needs a language that alters with the spirit of the
              times. The primordial images undergo ceaseless transformation and
              yet remain ever the same.
              <cite> — C. G. Jung</cite>
            </blockquote>
          </div>

          {/* Library link */}
          <div className="path-figure__lib-link">
            <Link href="/library/figures/grismere" className="path-cta__link">
              Read the Grismere essay in the Library →
            </Link>
          </div>

          {/* Video */}
          <div className="path-figure__video">
            <p className="eyebrow">Grismere in Motion</p>
            <video
              className="path-video"
              controls
              playsInline
              preload="metadata"
              aria-label="Grismere — the mermaid in motion"
            >
              <source src="/video/grismere.mov" type="video/quicktime" />
              <source src="/video/grismere.mov" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

          {/* Associated cards */}
          <div className="path-figure__cards">
            <p className="eyebrow">Cards Amplified from this Symbol</p>
            <p className="path-figure__cards-note">
              Four cards emerged from Grismere — each one a different face of
              the same energy. The mermaid as threshold. As mystery. As the
              lure of time. As what consciousness cannot yet see in itself.
            </p>
            <div className="path-cards-row">
              {[
                { src: '/images/cards/fronts/unconscious-energy.jpg', name: 'Unconscious Energy', sub: 'Conscious awareness is only part of the story' },
                { src: '/images/cards/fronts/mystery.jpg',            name: 'Mystery',            sub: 'As mysterious as the sea' },
                { src: '/images/cards/fronts/illusion.jpg',           name: 'Illusion',           sub: 'Look beyond the ordinary' },
                { src: '/images/cards/fronts/time.jpg',               name: 'Time',               sub: 'Time tells many tales' },
              ].map(({ src, name, sub }) => (
                <div key={name} className="path-mini-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={name} loading="lazy" />
                  <p className="path-mini-card__name">{name}</p>
                  <p className="path-mini-card__sub">{sub}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ── COMING ── */}
        <section className="path-coming">
          <p className="eyebrow">More Figures</p>
          <p className="path-coming__text">
            Ann. The Dove. The King. The Butterfly. The Swan.{' '}
            <em>Each figure holds its own axis. Each poem is its own threshold.</em>{' '}
            More will be added as the work continues.
          </p>
        </section>

        {/* ── CTA ── */}
        <section className="path-cta">
          <Link href="/deck" className="path-cta__link">Enter the Deck →</Link>
          <Link href="/library" className="path-cta__link path-cta__link--quiet">Enter the Library</Link>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer" aria-label="Site footer">
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
