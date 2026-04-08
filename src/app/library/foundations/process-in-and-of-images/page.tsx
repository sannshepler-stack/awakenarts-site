import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'A Process in and of Images — AwakenArts Library',
  description:
    'Long before a clear idea appears, the psyche begins speaking in images. This essay traces how images — dreams, figures, symbols — are traces of an organizing process unfolding beneath awareness.',
}

export default function ProcessInAndOfImagesPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ─── */}
      <header className="essay-header">
        <p className="eyebrow">Foundations</p>
        <h1>A Process in and of Images</h1>
        <p className="essay-header__sub">AwakenArts Library Essay</p>
      </header>

      {/* ── BODY ─── */}
      <article className="essay-body">

        <p>
          Most people assume that understanding begins with ideas.
        </p>
        <p>
          We believe something, study something, or decide something — and from that understanding
          we shape our lives. Yet the inner life often moves in another direction. Long before a
          clear idea appears, the psyche begins speaking in images.
        </p>

        <p className="essay-display">
          A dream arrives.<br />
          A symbol repeats itself.<br />
          A figure appears again and again in imagination, poetry, or art.
        </p>

        <p>
          At first these images may seem accidental or decorative. Only later does it become
          clear that they are not random at all. They are expressions of an organizing process
          occurring beneath conscious awareness.
        </p>

        <h2>How This Work Began</h2>

        <p>
          The images gathered here did not begin as illustrations of psychological concepts.
          They appeared first — often unexpectedly — and only afterward revealed a pattern.
          Poems formed shapes. Figures repeated themselves. Themes returned in different forms,
          as though the psyche were attempting to show something through image rather than
          explanation.
        </p>
        <p>
          For a long time, the meaning of this process was not known. The work simply continued.
        </p>
        <p>
          Only later did it become possible to recognize that what had unfolded had already been
          described by the Swiss psychologist Carl Jung. Jung used the term <em>individuation</em>{' '}
          to describe the natural movement of the psyche toward wholeness. In his view, the
          unconscious does not merely store forgotten memories. It actively participates in the
          shaping of a human life.
        </p>

        <h2>The Language of Symbols</h2>

        <p>
          One of the ways the unconscious participates is through symbolic imagery.
        </p>
        <p>
          When unconscious material begins to move toward awareness, it rarely appears as abstract
          ideas. It appears as symbols — figures, landscapes, animals, mythic scenes, or patterns
          that seem to carry more meaning than their literal form suggests. These images do not
          explain themselves immediately. Instead, they function as living expressions of an inner
          process that is unfolding over time.
        </p>
        <p>
          Seen individually, a single image may appear mysterious or ambiguous. Seen across years,
          however, a sequence of images can reveal a psychological movement that was invisible while
          it was happening.
        </p>
        <p>
          This is what Jung meant when he described individuation as a process in and of images.
        </p>
        <p>
          The psyche organizes its development symbolically before the conscious mind understands
          what is taking place. Images arise first. Understanding follows later.
        </p>

        <p className="essay-display">
          They are not instructions.<br />
          They are not doctrines.<br />
          They are traces of movement.
        </p>

        <h2>What You Will Find Here</h2>

        <p>
          The figures, poems, and images throughout this site form such a record. They appeared
          gradually over time, each one carrying a particular atmosphere or emotional weight. Some
          suggest descent into deeper layers of experience. Others show moments of crossing,
          stillness, conflict, or recognition. Taken together, they form a kind of symbolic
          landscape through which the psyche traveled.
        </p>
        <p>
          In many cases the meaning of an image was not understood until long after it appeared.
          The work itself often seemed to know more than the person creating it. Only with distance
          did patterns begin to reveal themselves.
        </p>
        <p>
          This is one of the reasons symbolic imagery can feel strangely powerful. It often carries
          knowledge that has not yet reached conscious thought.
        </p>

        <h2>Images as Mirrors</h2>

        <p>
          Jung observed that when individuals allow the psyche to express itself through dreams,
          images, writing, or art, the unconscious begins to participate more actively in conscious
          life. The relationship between the two layers of the mind becomes less divided. Over time,
          the individual becomes capable of recognizing aspects of themselves that had previously
          remained hidden.
        </p>
        <p>
          This movement toward greater awareness is what Jung described as individuation.
        </p>
        <p>
          Individuation does not mean becoming someone different. It means gradually discovering
          the full pattern of the person one already is.
        </p>
        <p>
          The images that emerge during such a process are not decorations around that discovery.
          They are the language through which the discovery occurs.
        </p>
        <p>
          Because of this, the images here are not meant to deliver fixed interpretations. Their
          purpose is quieter than that.
        </p>
        <p>
          Images function most powerfully when they are allowed to act as mirrors. When a person
          encounters a symbol, the response it awakens often reveals something about the observer
          as much as the image itself. A figure that feels peaceful to one person may feel
          unsettling to another. A symbol that seems mysterious today may become suddenly
          meaningful years later.
        </p>
        <p>
          This is part of the nature of symbolic language. Meaning unfolds gradually, and often
          differently for each individual.
        </p>

        <h2>An Invitation</h2>

        <p>
          Individuation is not reserved for artists, poets, or psychologists. It is the natural
          movement of the human psyche toward greater awareness. Symbols appear whenever that
          movement begins to take shape.
        </p>

        <p className="essay-display">
          Sometimes they appear in dreams.<br />
          Sometimes in moments of imagination.<br />
          Sometimes through creative work that seems to arrive<br />
          from somewhere deeper than conscious intention.
        </p>

        <p>
          Wherever they appear, the symbols carry the same quiet invitation.
        </p>

        <p className="essay-display">
          <strong>Look more closely.</strong><br />
          Something within the psyche is attempting to become visible.
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
