import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'The Mirror and the Map — AwakenArts Library',
  description:
    'Most journeys begin with a map. But there is another kind — one that begins with a mirror. On the difference between journeys that move outward and encounters that reflect what is already present within.',
}

export default function MirrorAndMapPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ─── */}
      <header className="essay-header">
        <p className="eyebrow">Foundations</p>
        <h1>The Mirror and the Map</h1>
        <p className="essay-header__sub">AwakenArts Library Essay</p>
      </header>

      {/* ── BODY ─── */}
      <article className="essay-body">

        <p>
          Most journeys begin with a map.
        </p>
        <p>
          A map tells us where we are going. It outlines a path, identifies landmarks, and
          promises that if we follow it carefully enough we will eventually arrive at the place
          we seek. Much of human exploration has unfolded this way — moving outward into the
          world, guided by something that shows us what lies ahead.
        </p>
        <p>
          But there is another kind of journey that does not begin with a map.
        </p>

        <p className="essay-display">
          <em>It begins with a mirror.</em>
        </p>

        <h2>Two Kinds of Paths</h2>

        <p>
          The difference between these two approaches is subtle but important.
        </p>
        <p>
          A map directs attention outward. It shows us something we have not yet seen and invites
          us to move toward it. This is the pattern of the heroic journey — the traveler crossing
          unfamiliar landscapes, overcoming obstacles, and returning with knowledge gained through
          exploration.
        </p>
        <p>
          A mirror functions differently. It does not lead us away from ourselves. It shows us
          what is already present. When we look into a mirror, we are not discovering new territory.
          We are encountering our own reflection.
        </p>
        <p>
          The path represented on this site belongs more closely to the second kind of journey.
          It is not primarily a heroic expedition into distant territory. It is an encounter with
          the interior landscape of the psyche.
        </p>

        <h2>A Garden Rather Than a Road</h2>

        <p>
          For this reason, the work presented here should not be approached as a set of
          instructions or a sequence of steps. The images are not arranged as a road to be
          followed in precise order.
        </p>
        <p>
          They are closer to a garden.
        </p>
        <p>
          In a garden, many paths exist at once. One visitor may be drawn toward a particular
          figure or image while another notices something entirely different. Each encounter
          reveals something slightly different about the person who sees it.
        </p>
        <p>
          The images on this site function in a similar way. They do not exist to explain
          themselves fully. Their purpose is to create moments of recognition.
        </p>
        <p>
          A visitor may pause before an image and feel a quiet sense of familiarity without
          immediately understanding why. Another image may seem distant or opaque at first,
          only to become meaningful much later. This is how symbolic language often works.
        </p>

        <p className="essay-display">
          The image waits.<br />
          Recognition arrives when the observer is ready to see it.
        </p>

        <h2>Symbols as Reflective Surfaces</h2>

        <p>
          Because of this, the images in this collection are best understood as reflective
          surfaces rather than objects of analysis.
        </p>
        <p>
          A symbol does not simply communicate a fixed message. It interacts with the person who
          encounters it. The emotional response it evokes — curiosity, resistance, peace, unease
          — often reveals something about the observer as much as the symbol itself.
        </p>
        <p>
          In this sense, the images operate like mirrors. They reflect aspects of the psyche that
          may not yet be fully visible to conscious awareness. A figure that seems powerful to one
          person may appear threatening to another. A scene that feels mysterious at first may
          gradually reveal a deeper meaning as one's own experience changes.
        </p>

        <p className="essay-display">
          The symbol itself remains the same.<br />
          What changes is the person looking into it.
        </p>

        <h2>The Role of the Map</h2>

        <p>
          None of this means that maps are unnecessary.
        </p>
        <p>
          Psychology, mythology, and spiritual traditions have long attempted to chart the patterns
          of human development. Carl Jung's concept of individuation, for example, offers a way of
          understanding how the psyche moves toward greater wholeness over time. Such frameworks
          can help us recognize patterns that might otherwise remain invisible. They give language
          to experiences that might feel confusing or isolated.
        </p>
        <p>
          In this sense, a map can be helpful.
        </p>

        <p className="essay-display">
          <em>But the map is not the journey itself.</em>
        </p>

        <p>
          No psychological theory, however accurate, can replace the direct encounter a person
          has with their own inner life. The map may describe the terrain, but the mirror shows
          us where we stand within it.
        </p>

        <h2>Encountering Yourself</h2>

        <p>
          The figures and poems gathered on this site emerged through a process of symbolic
          discovery described in earlier essays. Over time they formed a landscape that reflects
          certain recurring themes of the psyche: descent, conflict, exile, stillness, recognition.
        </p>
        <p>
          These images are presented not as answers but as invitations.
        </p>
        <p>
          Each one offers a moment in which a visitor might pause and notice something unexpected
          — a feeling, a memory, a question that arises in response to the symbol before them.
        </p>

        <p className="essay-display">
          Sometimes the recognition is immediate.<br />
          Sometimes it arrives quietly, long after the image has been seen.
        </p>

        <p>
          Either way, the significance of the encounter lies not only in the symbol itself, but
          in what it reveals about the person looking.
        </p>

        <h2>The Mirror Within the Map</h2>

        <p>
          In the end, the distinction between mirror and map may not be absolute.
        </p>
        <p>
          A map can help us recognize where we are. A mirror can show us how we have changed
          along the way. Both serve the same larger movement — the gradual expansion of awareness.
        </p>
        <p>
          But the work presented here begins with the mirror.
        </p>
        <p>
          The images are offered as reflective surfaces through which the psyche may glimpse
          itself more clearly. When such moments of recognition occur, even briefly, they can
          open a new way of seeing one's own life.
        </p>

        <p className="essay-display">
          The journey then continues — not because a map demands it,<br />
          but because awareness itself has begun to move.<br /><br />
          And once awareness begins to move,<br />
          the landscape within us is never quite the same again.
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
