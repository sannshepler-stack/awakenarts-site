import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Allow Content to Direct the Shape — AwakenArts Library',
  description:
    'The most important rule of the work was simple: allow the content to determine the form. On the discipline of attention over invention, and what happens when the material is trusted to reveal its own shape.',
}

export default function AllowContentPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ─── */}
      <header className="essay-header">
        <p className="eyebrow">Foundations</p>
        <h1>Allow Content to Direct the Shape</h1>
        <p className="essay-header__sub">AwakenArts Library Essay</p>
      </header>

      {/* ── BODY ─── */}
      <article className="essay-body">

        <p>
          The most important rule of the work was simple.
        </p>

        <p className="essay-display">
          <em>Allow the content to determine the form.</em>
        </p>

        <p>
          This principle did not emerge as a theory or a philosophy. It arose as a practical
          necessity. Whenever an image or line of language was forced into a preconceived
          structure, the work immediately lost its vitality. The result felt artificial, as though
          something living had been replaced by something constructed.
        </p>
        <p>
          Gradually it became clear that the only reliable approach was to reverse the usual
          creative process. Instead of deciding what the work should become, the task was to remain
          attentive long enough for the material itself to reveal its shape.
        </p>

        <p className="essay-display">
          The discipline was not invention.<br />
          The discipline was attention.
        </p>

        <h2>The Discipline of Centering</h2>

        <p>
          The process often began with a period of quiet concentration. Rather than searching for
          ideas, the effort was directed toward stillness — allowing the mind to settle until
          images or phrases began to emerge on their own.
        </p>
        <p>
          This form of attention is difficult to describe because it does not resemble ordinary
          thinking. It is less like solving a problem and more like listening for something that
          has not yet been spoken.
        </p>

        <p className="essay-display">
          At first nothing appears.<br />
          Then a small fragment may surface: a line of language,<br />
          the outline of a figure, or the suggestion of a form.
        </p>

        <p>
          The task is not to interpret it immediately but to follow it carefully, allowing it to
          unfold without interference.
        </p>
        <p>
          When this discipline is maintained, the work begins to organize itself. Lines arrange
          themselves into shapes. Words gather into patterns. Figures appear whose meaning is not
          yet understood but whose presence carries a certain gravity.
        </p>
        <p>
          Over time, the emerging material develops a logic of its own.
        </p>

        <h2>When the Images Began Appearing</h2>

        <p>
          As the process continued, certain figures began to return repeatedly.
        </p>

        <p className="essay-display">
          A queen moving between worlds.<br />
          A dragon that could not be defeated by force.<br />
          A cross submerged in water.<br />
          A small flower that carried an unexpected sense of holiness.
        </p>

        <p>
          At first these figures appeared independently, each one forming through the interaction
          of image and language. Many of the poems developed into visual structures, where the
          placement of words created the shape of the figure itself.
        </p>
        <p>
          The result was a form of expression that was both literary and visual at the same time.
          The poems were not simply written lines of language. They were images constructed out
          of language.
        </p>
        <p>
          The figures carried a presence that seemed larger than the act of writing itself.
        </p>
        <p>
          Yet their meaning remained unclear.
        </p>
        <p>
          The work continued without attempting to solve them.
        </p>

        <h2>The Unconscious Entering the Work</h2>

        <p>
          After many images had accumulated, a peculiar realization began to emerge. The work
          often seemed to understand something before the person creating it did.
        </p>
        <p>
          Themes appeared that had not been planned. Certain emotional tones repeated themselves
          across images created months or even years apart. Figures that seemed unrelated at first
          began to form a coherent symbolic landscape.
        </p>
        <p>
          It became difficult to avoid the impression that the material possessed a kind of
          autonomy.
        </p>
        <p>
          The images did not feel like decorations added to ideas. They felt more like
          discoveries — as though something beneath ordinary awareness had been attempting to
          express itself through symbol and form.
        </p>
        <p>
          Only with time did the full pattern begin to reveal itself.
        </p>

        <h2>Discovering Jung Later</h2>

        <p>
          Years after many of these images had already been created, the work of the Swiss
          psychologist Carl Jung came into view.
        </p>
        <p>
          Jung described a psychological process he called individuation — the gradual movement
          of the psyche toward greater wholeness. According to Jung, the unconscious does not
          remain silent during this process. It communicates through symbols, dreams, and images
          that emerge spontaneously in the imagination or in creative work.
        </p>
        <p>
          Reading these descriptions produced a moment of recognition. What Jung described
          theoretically appeared to mirror what had already unfolded in practice.
        </p>
        <p>
          The images had not been designed to illustrate psychological concepts. They had appeared
          first, and only afterward revealed the psychological movement they carried.
        </p>
        <p>
          The realization did not change the work itself. The images continued to arise in the
          same way they always had.
        </p>
        <p>
          What changed was the understanding of what had been happening all along.
        </p>

        <h2>A Discipline of Listening</h2>

        <p>
          Looking back, the central principle of the process remains surprisingly modest.
        </p>
        <p>
          The work did not require extraordinary techniques or complicated methods. It required
          only a willingness to remain still long enough for the unconscious to speak in its own
          language.
        </p>
        <p>
          That language was image.
        </p>
        <p>
          The figures that appear throughout this site emerged through that simple discipline.
          They were not invented to illustrate a system. They were allowed to form gradually, each
          one revealing a small portion of a larger pattern that could only be seen in retrospect.
        </p>

        <p className="essay-display">
          The task was never to force the work into meaning.<br />
          The task was to allow meaning to appear.
        </p>

        <p>
          And the only way that became possible was by following the same quiet rule from
          beginning to end:
        </p>

        <p className="essay-display">
          <strong>Allow the content to direct the shape.</strong>
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
