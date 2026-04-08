import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'The Ballerina — AwakenArts Library',
  description:
    'The Ballerina dances the dance of individuation — a figure of love, motion, and the slow integration of what the psyche holds in many forms before it becomes one.',
}

export default function BallerinaPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ── */}
      <header className="essay-header">
        <p className="eyebrow">Figures</p>
        <h1>The Ballerina</h1>
        <p className="essay-header__subtitle">A Figure of Love, Motion, and Becoming</p>
        <p className="essay-header__sub">AwakenArts Library Essay</p>
      </header>

      {/* ── BODY ── */}
      <article className="essay-body">

        <div className="figure-intro">
          <img
            src="/images/figures/ballerina/ballerina.png"
            alt="The Ballerina — poem as figure"
            className="figure-intro__img"
          />
          <div className="figure-intro__text">
            <p>
              The Ballerina does not arrive quietly.
            </p>
            <p>
              She enters the way archetypes always do — through image, through feeling, through
              the ambiguous territory that lies between what we consciously intend and what the
              psyche has been quietly arranging beneath the surface. She is a figure of
              individuation: a presence that dances the tension between the one and the many,
              between the known and the not-yet-known, between love as projection and love as
              genuine encounter.
            </p>
            <p>
              Like most encounters with Jungian archetypes, this figure arrived not as an idea
              but as an event. The poem that formed around her took the shape of a little girl
              in a tutu — pink, centered, spinning on the lighted stage of the Valentine&apos;s
              imagination. The form preceded the meaning. The image came first.
            </p>
          </div>
        </div>

        <p className="essay-display">
          She is Love personified —<br />
          pink, perfection, divinity —<br />
          twirling on tippy toes<br />
          in the bright lights of little girls.
        </p>

        <h2>The Poem as Shape</h2>

        <p>
          The Ballerina poem is in the shape of a little girl.
        </p>
        <p>
          This is the AwakenArts method made visible: the poem does not describe the figure,
          it becomes the figure. Words arranged into the outline of a ballerina in a tutu,
          centered on the page, held in the particular posture of performance — pink satin
          shoes, high laced ribbons crossed at the ankles, eyes shining in the bright lights.
          The shape is not decoration. The shape is the meaning.
        </p>
        <p>
          The words chosen for the body of the poem — divinity, candy kisses in crackly paper
          wrapping, tufts and frills, bouquets of white carnations in a wavy milk glass vase —
          were chosen to materialize a tutu. To make the form felt before it is read.
          This is what symbolic language does: it carries more than it states. It allows
          the image to arrive in the body before it arrives in the mind.
        </p>

        <h2>One and Many</h2>

        <p>
          The poem was not written once. It was written seven times.
        </p>
        <p>
          Seven versions. Seven lovably different little girls. Each one a genuine iteration,
          not a mistake to be corrected — because the figure the psyche was reaching toward
          could only be revealed through the accumulation of approaches, through the patient
          willingness to begin again. Something essential shifted between one version and the
          next. The heart in the center was still not quite right. The centering was still
          being worked out.
        </p>
        <p>
          And then, at last: Pirouette. The one made of many. The seven versions stacked and
          animated into a single figure that hops, spins, and pulses with a heartbeat.
          Unity through multiplicity. The hallmark of individuation itself — not the arrival
          at a fixed and finished self, but the gathering of everything the psyche has been
          holding into a form that moves.
        </p>

        <p className="essay-display">
          If unity and singleness are the hallmarks of individuality,<br />
          multiplicity and dispersal are their opposites.<br />
          The Ballerina holds both —<br />
          and dances between them.
        </p>

        <h2>The Axis</h2>

        <p>
          The Ballerina spins, and the spinning carries meaning that reaches beyond
          the literal image of a child at a recital.
        </p>
        <p>
          The image contains what may be understood as axis symbolism: a vertical plane —
          the figure herself, rising — and a horizontal plane, the lighted floor. The two
          are connected at the precise point where the word &quot;in&quot; rests at the tip of the
          toe shoe. Inner and outer worlds touching. Earth and the upward gesture meeting
          in a single point of balance.
        </p>
        <p>
          Almost every tradition has such an axis — a place where earth and sky unite, where
          the ego meets something larger than itself. The ballerina stands at hers. And the
          spinning is not restlessness; it is the motion of centering, the visible form of
          what happens when the parts of the psyche are gathered rather than scattered.
        </p>

        <h2>The Color Pink</h2>

        <p>
          Pink is not incidental to this image. It is the image.
        </p>
        <p>
          Pink is the color with which the feminine has long been identified — in culture,
          in childhood, in the language of gifts and celebrations that surround a little
          girl&apos;s earliest years. Soft and sweet. Candy sweet. Suggesting that power was
          not something she was permitted to carry herself — that it had to be found
          elsewhere, sought in the brightness of another&apos;s approval.
        </p>
        <p>
          The ballerina poem is saturated with this color, and the saturation is the
          point. Every archetype contains both a bright side and a shadow side — the
          favorable and the chthonic, the upward-pointing and the hidden. The pink that
          named love and sweetness also named the wound. The Ballerina holds this without
          judgment. She asks what the color has always meant — and whether the energy
          it carries might be reclaimed, not as limitation, but as something genuine the
          psyche has been holding in trust.
        </p>

        {/* ── VIDEO ── */}
        <div className="figure-video-wrap">
          <video controls playsInline>
            <source
              src="/images/figures/ballerina/ballerina.mp4"
              type="video/mp4"
            />
            Your browser does not support the video element.
          </video>
        </div>

        <p className="essay-display">
          She is twirling still —<br />
          not because she has arrived,<br />
          but because arriving<br />
          is what she is made of.
        </p>

        {/* ── CARD MOTIFS ── */}
        <div className="essay-motifs">
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Card Motifs</p>
          <ul className="essay-motifs__list">
            <li>Dream</li>
            <li>Femininity</li>
            <li>Energy</li>
            <li>Jealousy</li>
          </ul>
        </div>

        <div className="essay-figure-nav">
          <Link href="/library/figures/grismere" className="essay-figure-nav__prev">
            ← Grismere
          </Link>
          <Link href="/library/figures/queen-ann-between-kingdoms" className="essay-figure-nav__next">
            Queen Ann →
          </Link>
        </div>

        <div className="essay-back">
          <Link href="/library">← Return to the Library</Link>
        </div>

      </article>

      {/* ── FOOTER ── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href="/" aria-label="AwakenArts home">
              <img src="/images/brand/logo.png" alt="AwakenArts" className="footer-logo" loading="lazy" />
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
