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
            <a href="#ann">Queen Ann</a>
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
                  The name <em>Grismere</em> holds her meaning within it. From the
                  Spanish <em>gris</em> — grey, gloomy — and the French <em>mer</em>
                  — the sea — with <em>mère</em> folded silently inside it: mother.
                  She is the Grey Sea. She is the Grey Mother. The two are not separate
                  in her. They never were. This is the nature of the anima — the interior
                  feminine, the soul-image, the figure through which the psyche first
                  turns toward its own depth. Grismere is that figure. She does not point
                  toward the anima. She <em>is</em> the anima.
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
            <div className="path-figure__lib-link">
              <Link href="/library/figures/grismere" className="path-cta__link">
                Library Essay →
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
                <source src="/images/figures/grismere/grismere.mov" type="video/quicktime" />
                <source src="/images/figures/grismere/grismere.mov" type="video/mp4" />
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
                    width={800}
                    height={1200}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Reading text */}
              <div className="path-figure__reading">
                <p className="eyebrow">Femininity · Love · Unity · Integration</p>
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
            <div className="path-figure__lib-link">
              <Link href="/library/figures/ballerina" className="path-cta__link">
                Library Essay →
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
                <source src="/images/figures/ballerina/ballerina.mp4" type="video/mp4" />
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

        {/* ── ANN ── */}
        <section className="path-figure" id="ann" aria-label="Queen Ann Between Kingdoms">
          <div className="path-figure__inner">

            <header className="path-figure__header">
              <p className="eyebrow">Third Figure · The Threshold</p>
              <h2 className="path-figure__name">Queen Ann Between Kingdoms</h2>
              <p className="path-figure__role">
                Exile as Initiation &nbsp;·&nbsp; The Passage &nbsp;·&nbsp; Loss · Spirit · Humility
              </p>
            </header>

            <div className="path-figure__body">

              <div className="path-poem-column">
                <div className="path-poem-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/figures/ann/ann.png"
                    alt="Queen Ann Between Kingdoms — shaped poem by Susan Ann Shepler"
                    className="path-poem-img"
                    width={800}
                    height={1200}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Reading text */}
              <div className="path-figure__reading">
                <p className="eyebrow">Threshold · Passage · Becoming</p>
                <p>
                  Queen Ann does not stand at the end of a journey or the beginning
                  of one. She stands in the space between — the threshold where the
                  old life has fallen away and the new one has not yet taken shape.
                </p>
                <p>
                  Her name carries the weight of sovereignty. She is a queen. But she
                  is a queen between kingdoms — which means she is a queen without a
                  throne, without the structures that once defined her, walking uncertain
                  ground with nothing left to protect her except the interior courage
                  that does not require certainty to continue.
                </p>
                <p>
                  The three cards that rose from her image tell her story. <em>Lost</em> —
                  the necessary disorientation of leaving without knowing the destination.
                  <em> Spirit</em> — the invisible resource that sustains movement when no
                  external anchor remains. <em>Humility</em> — not defeat, but the releasing
                  of what the ego once claimed as its own, the emptying that precedes becoming.
                </p>
                <blockquote className="quote-line">
                  The psyche does not grow in comfort. It grows in the confrontation
                  with what is unknown — in the willingness to remain present within
                  uncertainty long enough for something new to emerge.
                  <cite> — C. G. Jung</cite>
                </blockquote>
                <p>
                  She is every person who has had to continue without knowing why or
                  toward what. In that, she is already at work in you.
                </p>
              </div>

            </div>

            {/* Library essay link */}
            <div className="path-figure__lib-link">
              <Link href="/library/figures/queen-ann-between-kingdoms" className="path-cta__link">
                Library Essay →
              </Link>
            </div>

            {/* Associated cards */}
            <div className="path-figure__cards">
              <p className="eyebrow">Cards Amplified from this Symbol</p>
              <p className="path-figure__cards-note">
                Four cards emerged from Queen Ann — each one a different face of the
                crossing. The disorientation that precedes growth. The spirit that
                sustains when nothing external remains. The humility that makes
                passage possible. And the fear that names what the crossing costs.
              </p>
              <div className="path-cards-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '840px' }}>
                {[
                  { src: '/images/cards/fronts/lost.jpg',     name: 'Lost',    sub: 'To be lost is sometimes the beginning of being found' },
                  { src: '/images/cards/fronts/spirit.jpg',   name: 'Spirit',  sub: 'The spirit sustains what the mind cannot explain' },
                  { src: '/images/cards/fronts/humility.jpg', name: 'Humility',sub: 'Humility is the doorway the ego cannot fit through' },
                  { src: '/images/cards/fronts/fear.jpg',     name: 'Fear',    sub: 'Fear names what matters — it does not have to stop the crossing' },
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
            The Dove. The King. The Butterfly. The Swan.{' '}
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
