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

        {/* ── FIGURE SUB-NAVIGATION ── */}
        <nav className="path-subnav" aria-label="Figure navigation">
          <div className="path-subnav__inner">
            <a href="#grismere">Grismere</a>
            <a href="#ballerina">The Ballerina</a>
          </div>
        </nav>

        {/* ── GRISMERE ── */}
        <section className="path-figure" id="grismere" aria-label="Grismere — The Mermaid">
          <div className="path-figure__inner">

            <header className="path-figure__header">
              <p className="eyebrow">First Figure · The Anima</p>
              <h2 className="path-figure__name">Grismere</h2>
              <p className="path-figure__role">
                Goddess of the Deep &nbsp;·&nbsp; The Lure into the Unconscious
              </p>
            </header>

            <div className="path-figure__body">

              {/* Poem image column — supports 1–3 stacked images */}
              <div className="path-poem-column">
                <div className="path-poem-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/figures/grismere/grismere.png"
                    alt="Grismere — shaped poem by Susan Ann Shepler"
                    className="path-poem-img"
                    width={800}
                    height={1200}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Reading text */}
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

            </div>

            {/* Library link */}
            <div className="path-figure__lib-link" style={{display:'flex', gap:'2rem', flexWrap:'wrap', alignItems:'center'}}>
              <Link href="/path/grismere" className="path-cta__link">
                Explore Grismere in Full →
              </Link>
              <Link href="/library/figures/grismere" className="path-cta__link path-cta__link--quiet">
                Library Essay
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

          </div>
        </section>

        {/* ── BALLERINA ── */}
        <section className="path-figure" id="ballerina" aria-label="The Ballerina">
          <div className="path-figure__inner">

            <header className="path-figure__header">
              <p className="eyebrow">Second Figure · The Anima</p>
              <h2 className="path-figure__name">The Ballerina</h2>
              <p className="path-figure__role">
                Love Personified &nbsp;·&nbsp; Dream, Femininity, Energy, Jealousy
              </p>
            </header>

            <div className="path-figure__body">

              {/* Poem image column — supports 1–3 stacked images */}
              <div className="path-poem-column">
                <div className="path-poem-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/figures/ballerina/ballerina.png"
                    alt="The Ballerina — shaped poem by Susan Ann Shepler"
                    className="path-poem-img"
                    width={1600}
                    height={2400}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Reading text */}
              <div className="path-figure__reading">
                <p className="eyebrow">Anima · Love · The Feminine</p>
                <p>
                  The Ballerina poem is in the shape of a little girl. This is the AwakenArts
                  method made visible: the poem does not describe the figure — it <em>becomes</em> the
                  figure. Pink satin shoes, high laced ribbons crossed at the ankles, a tutu made
                  of words chosen to be felt before they are read.
                </p>
                <p>
                  She dances the dance of individuation. Like most encounters with Jungian
                  archetypes, she arrived not as an idea but as an event — a dream-image, whole
                  and particular, before the analytic mind could arrive to name her. She is love
                  personified. She is also the shadow of love: the projection, the longing, the
                  power given away and slowly reclaimed.
                </p>
                <p>
                  The poem was written seven times. Seven versions. Seven lovably different little
                  girls. Out of the many, at last, came one: Pirouette — animated, spinning,
                  pulsing with a heartbeat. Unity through multiplicity. The hallmark of
                  individuation itself.
                </p>
              </div>

            </div>

            {/* Library link */}
            <div className="path-figure__lib-link" style={{display:'flex', gap:'2rem', flexWrap:'wrap', alignItems:'center'}}>
              <Link href="/path/ballerina" className="path-cta__link">
                Explore The Ballerina in Full →
              </Link>
              <Link href="/library/figures/ballerina" className="path-cta__link path-cta__link--quiet">
                Library Essay
              </Link>
            </div>

            {/* Video */}
            <div className="path-figure__video">
              <p className="eyebrow">The Ballerina in Motion</p>
              <video
                className="path-video"
                controls
                playsInline
                preload="metadata"
                aria-label="The Ballerina — Pirouette in motion"
              >
                <source src="/video/ballerina_music_v1_02-10-2014.mp4_HD%20copy.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>

            {/* Associated cards */}
            <div className="path-figure__cards">
              <p className="eyebrow">Cards Amplified from this Symbol</p>
              <p className="path-figure__cards-note">
                Four cards emerged from The Ballerina — each one a different face of the
                same energy. The dream that arrives before words. The feminine reclaimed.
                The axis of spinning and centering. The shadow side of love.
              </p>
              <div className="path-cards-row">
                {[
                  { src: '/images/cards/fronts/dream.jpg',       name: 'Dream',       sub: 'The dream speaks before the mind is ready' },
                  { src: '/images/cards/fronts/femininity.jpg',  name: 'Femininity',  sub: 'The feminine carries more than it is given credit for' },
                  { src: '/images/cards/fronts/energy.jpg',      name: 'Energy',      sub: 'Energy seeks its own center' },
                  { src: '/images/cards/fronts/jealousy.jpg',    name: 'Jealousy',    sub: 'Jealousy names what has not yet been claimed' },
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
