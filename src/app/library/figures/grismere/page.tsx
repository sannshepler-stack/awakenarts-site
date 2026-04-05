import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Grismere — AwakenArts Library',
  description:
    'Grismere appears at the boundary between what can be seen and what lies beneath — a presence connected to water, depth, and the slow process by which something hidden begins to rise into conscious awareness.',
}

export default function GrismerePage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ─── */}
      <header className="essay-header">
        <p className="eyebrow">Figures</p>
        <h1>Grismere</h1>
        <p className="essay-header__subtitle">A Figure at the Threshold of Emergence</p>
        <p className="essay-header__sub">AwakenArts Library Essay</p>
      </header>
      <img
        src="/images/figures/grismere/grismere-poem.jpg"
        alt="Grismere"
        style={{ maxWidth: '600px', width: '100%', margin: '1.5rem auto 2rem auto', display: 'block' }}
      />
      {/* ── BODY ─── */}
      <article className="essay-body">

        <p>
          Some images emerge gradually, revealing their meaning over time rather than announcing
          it at once.
        </p>
        <p>
          Grismere is one such figure. It does not arrive fully formed or immediately legible.
          It appears at the boundary between what can be seen and what lies beneath the surface —
          a presence connected to water, to depth, and to the slow process by which something
          hidden begins to rise into conscious awareness.
        </p>
        <p>
          That process of emergence is what Grismere embodies. Not the moment of full
          understanding, but the moment just before it — when something that has long been
          forming in the depths begins, at last, to become visible.
        </p>

        <p className="essay-display">
          Grismere marks the threshold between what the psyche holds in silence<br />
          and what it is ready to show.
        </p>

        <h2>The Water</h2>

        <p>
          In symbolic language, water is among the oldest and most consistent images of the
          unconscious.
        </p>
        <p>
          It holds what lies beneath the surface of ordinary awareness — the depths of memory,
          instinct, emotion, and archetypal pattern that shape the psyche from below. Water
          conceals as much as it reveals. Yet what it holds is not absent. It is present in the
          depths, shaping the currents of thought and feeling that move through daily life without
          being fully seen.
        </p>
        <p>
          The water surrounding Grismere carries this quality. Its surface appears calm, even
          still. But that stillness is not emptiness. It is the stillness of depth — the condition
          in which the interior life is fully present, even when nothing yet breaks the surface.
        </p>
        <p>
          For the observer, this water functions as a mirror of a particular kind. It does not
          show the face that looks into it. It shows what lies beneath that face — the interior
          landscape that exists below conscious thought, patient and continuous, waiting for the
          conditions that allow it to rise.
        </p>

        <h2>The Boundary</h2>

        <p>
          Grismere stands at a threshold between two worlds.
        </p>
        <p>
          One world is visible and conscious: the familiar terrain of daily life, shaped by
          thought, language, and ordinary perception. The other lies beneath the surface: the
          domain of the unconscious, where images form before they are understood, where meaning
          moves in patterns that the conscious mind has not yet learned to read.
        </p>
        <p>
          This boundary is not a wall. It is a permeable edge — a zone of contact between what
          is known and what is not yet known. Grismere occupies that zone. The figure does not
          stand entirely within the conscious world, nor entirely within the unconscious. It stands
          at the point where the two begin to touch.
        </p>
        <p>
          To encounter Grismere is therefore to encounter a psychological moment rather than a
          fixed symbol. It is the moment when the individual begins to recognize that the inner
          life contains meanings and movements that extend beyond the surface of everyday thought —
          that something real and significant has been present all along, beneath the familiar,
          waiting for the right conditions to become visible.
        </p>
        <p>
          Jung described this threshold as one of the central experiences of the individuation
          process. The psyche does not reveal its depths all at once. It reveals them gradually,
          at the boundary, when the individual has developed enough awareness to begin receiving
          what the unconscious is ready to offer.
        </p>

        <h2>The Figure</h2>

        <p>
          What distinguishes Grismere from other symbolic figures of emergence is this: the
          figure is not yet fully separated from the water.
        </p>
        <p>
          It has begun to rise. Something is becoming visible that was not visible before. But the
          emergence is not complete. The figure remains connected to the depths from which it came
          — still partly submerged, still in the process of forming, still carrying the quality of
          the unconscious within its form.
        </p>
        <p>
          This incompleteness is not a flaw. It is the truth of the image.
        </p>
        <p>
          Insight rarely arrives fully formed. It surfaces gradually, and for a time it belongs to
          two worlds at once — partially conscious, partially not. The person who encounters such
          a moment of emergence may feel a quiet recognition without yet knowing what they are
          recognizing. They may sense that something important is present without being able to
          name it.
        </p>
        <p>
          Grismere holds this in-between state with honesty. It does not resolve the tension
          between depth and surface. It inhabits that tension, and in doing so it gives the
          observer permission to inhabit it as well — to remain present in the moment of emergence
          without demanding that it become something faster than it is.
        </p>

        <p className="essay-display">
          Emergence cannot be forced.<br />
          It can only be attended to.
        </p>

        <h2>An Invitation to Look Beneath</h2>

        <p>
          Grismere does not explain itself. It does not offer a doctrine or a method. It offers
          something quieter and more enduring: an invitation to pause at the surface of the inner
          world and acknowledge that something meaningful lies beneath appearances.
        </p>
        <p>
          The figure asks for attention rather than analysis. It invites the observer to slow down,
          to resist the habit of moving quickly past what is unfamiliar, and to remain long enough
          at the threshold for something beneath the surface to become visible.
        </p>
        <p>
          This is a practice as much as a perception. The inner life does not reveal its depths
          to those who approach it only briefly or impatiently. It reveals them to those who are
          willing to remain — to sit with what is not yet clear, and to trust that clarity, when
          it comes, will come in its own time.
        </p>
        <p>
          Grismere marks the beginning of that kind of attention. It stands at the boundary not
          as a guardian who refuses entry, but as a figure who shows that entry is possible — that
          the depths are real, that emergence is already underway, and that something within the
          psyche is quietly preparing itself to be seen.
        </p>

        <p className="essay-display">
          The image does not force interpretation.<br />
          It encourages the patience through which interpretation becomes possible.<br /><br />
          In this sense, Grismere becomes less a fixed symbol and more an ongoing invitation —<br />
          the invitation to look beneath the surface of one's own experience,<br />
          and to notice, with patience and curiosity, what has already begun to appear there.
        </p>

        <div className="essay-back">
          <Link href="/library">← Return to the Library</Link>
        </div>
      </article>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href="/" aria-label="AwakenArts home">
              <img src="/images/brand/logo-nav.png" alt="AwakenArts" className="footer-logo" loading="lazy" />
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
