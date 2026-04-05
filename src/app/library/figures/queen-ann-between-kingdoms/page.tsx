import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Queen Ann Between Kingdoms — AwakenArts Library',
  description:
    'She moves between worlds. The kingdom behind her is no longer safe. The kingdom ahead is not yet visible. On exile as initiation, and the quiet courage of continuing when the road ahead remains unseen.',
}

export default function QueenAnnPage() {
  return (
    <>
      <Nav />

      <nav className="essay-nav" aria-label="Breadcrumb">
        <Link href="/library">← The Library</Link>
      </nav>

      {/* ── HEADER ─── */}
      <header className="essay-header">
        <p className="eyebrow">Figures</p>
        <h1>Queen Ann Between Kingdoms</h1>
        <p className="essay-header__sub">AwakenArts Library Essay</p>
      </header>

      {/* ── BODY ─── */}
      <article className="essay-body">

        <p>
          There are figures that appear not at the moment of arrival, but at the moment of
          departure.
        </p>
        <p>
          They do not represent conquest or completion. They appear when something familiar is
          falling away and what comes next has not yet taken shape. They stand at the threshold —
          the narrow passage between one life and another — and their presence marks a particular
          kind of courage: the willingness to move forward without certainty.
        </p>
        <p>
          Queen Ann is such a figure.
        </p>
        <p>
          She moves between worlds. The kingdom behind her is no longer safe. The kingdom ahead
          is not yet visible. Her story is not one of victory but of passage — the crossing of
          that interior ground where the old life dissolves and the new one has not yet formed.
        </p>

        <p className="essay-display">
          She walks the threshold most people spend their lives trying to avoid.
        </p>

        <h2>The Moment of Exile</h2>

        <p>
          Across myths and history, exile often marks the beginning of transformation.
        </p>
        <p>
          When a familiar order collapses — when a kingdom falls, a role disappears, or a life
          that once held meaning no longer does — the individual is forced into unfamiliar
          territory. The loss may appear tragic at first. And often it is. Yet within that loss,
          something else begins to stir. What felt like an ending gradually reveals itself as a
          doorway.
        </p>
        <p>
          Queen Ann stands within this moment. She carries memory behind her and uncertainty
          ahead. Yet the path she walks is not empty. It is the terrain through which the psyche
          learns to release one identity and, in time, discover another.
        </p>
        <p>
          Exile in this sense is not punishment. It is initiation.
        </p>

        <h2>The Inner Kingdom</h2>

        <p>
          The kingdoms described in symbolic language are not only political or historical realms.
        </p>
        <p>
          They are also inner landscapes — the structures of meaning a person builds over a
          lifetime. Each individual inhabits a psychological kingdom composed of beliefs, habits,
          relationships, and expectations. These structures give life its shape. They tell us who
          we are, what we value, and what we can count on.
        </p>
        <p>
          When life changes suddenly — through loss, illness, betrayal, or the slow erosion of
          something once certain — this inner kingdom can collapse. The structures that once gave
          meaning no longer hold. The familiar landmarks disappear. What remains is open ground.
        </p>
        <p>
          This is the landscape Queen Ann moves through.
        </p>
        <p>
          She does not linger in the ruins of what has fallen. She does not pretend the collapse
          did not happen. She continues forward — not because the road ahead is clear, but because
          she understands, even without words, that remaining inside a collapsed structure is its
          own kind of exile.
        </p>
        <p>
          The courage she embodies is not the courage of the warrior. It is quieter than that.
          It is the courage of continuing to move when movement itself feels uncertain.
        </p>

        <h2>The Passage Through Darkness</h2>

        <p>
          Every transformation requires a passage through uncertainty.
        </p>
        <p>
          In mythology, this journey often occurs at night or beneath the moon — symbols of the
          unconscious and the unknown. The traveler moves without full visibility, guided not by a
          map but by intuition, and by the quiet sense that movement itself is necessary even when
          the destination remains unseen.
        </p>
        <p>
          Queen Ann's journey belongs to this realm. She travels not because the road is clear but
          because remaining behind would mean the end of growth. The darkness she moves through is
          not an obstacle placed in her way. It is a condition of the crossing itself.
        </p>
        <p>
          Jung observed that the psyche does not grow in comfort. It grows in the confrontation
          with what is unknown — in the willingness to remain present within uncertainty long
          enough for something new to emerge. Queen Ann embodies exactly this willingness. She does
          not rush toward resolution. She endures the passage.
        </p>

        <h2>A Figure of Transition</h2>

        <p>
          Queen Ann stands as a symbol of the in-between.
        </p>
        <p>
          Not the triumphant moment after transformation is complete. Not the stable life before
          it began. But the crossing itself — the uncertain ground between one form of being and
          another.
        </p>
        <p>
          She reminds us that moments of loss or exile are not always endings. They are often the
          beginning of a deeper movement within the psyche. When the old kingdom falls, the
          individual is not simply left without shelter. They are invited — sometimes against their
          will — to discover what they are when the familiar structures are gone.
        </p>
        <p>
          That discovery does not happen all at once. It happens gradually, in the course of the
          passage, through the small acts of continuing to move.
        </p>

        <p className="essay-display">
          The journey between kingdoms is not a delay before life resumes.<br />
          It is the place where the deeper life begins.<br /><br />
          Queen Ann walks that ground so that others might recognize it<br />
          when they find themselves walking it too.
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
