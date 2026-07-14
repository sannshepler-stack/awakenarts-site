import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

// /foundation — "The Foundation of AwakenArts" (2026-06-28).
//
// A permanent statement of the theological and artistic framework
// AwakenArts is offered within. Per Susan's directive: accessible but
// not intrusive — linked from the footer and quietly from /about, but
// not placed in primary navigation and not inserted into the main
// visitor journey. Same typography and cream/dark palette tokens used
// everywhere else (see .foundation-* rules in globals.css).
//
// 2026-06-28 revision, per Susan: added the standard Atmospheric
// Header — an open book and quiet window light, chosen from the
// public/images/library folder (specifically Foundations-page.png,
// cropped to remove its baked-in caption text so it reads as a plain
// threshold image, consistent with the site-wide "no text baked into
// the image" rule already used for every other AtmosphericHeader).
// The column was also changed from centered to left-aligned, and the
// copy was tightened into plainer, more direct language — this page
// is a statement of belief, not devotional writing, so it reads more
// clearly when it says what it means without literary flourish.
//
// 2026-07-14 revision, per Susan: replaced the third-person doctrinal
// statement above with her own first-person testimony (supplied
// verbatim). The page opens and closes on the same two-line refrain —
// "This is the only journey I can faithfully share. / Throughout my
// own, I have found Christ to be my true north." — as a deliberate
// ceremonial bookend, not a duplication error.
//
// 2026-07-14, same day (follow-up round): Susan's governing note for
// this page — "no longer tries to persuade the reader into reverence.
// Keep the tone testimonial, grounded, and spare. Avoid language that
// feels evangelistic, triumphant, or emotionally directive. Let the
// story carry the meaning... someone letting you stand near a truth,
// not trying to convert you to it." Two changes followed from that:
// (1) H1 softened from "The Foundation of AwakenArts" to "My
// Foundation" — the fuller title read as institutional/third-person
// beside first-person testimony, and "My True North" (the other option
// considered) was rejected for front-loading the piece's own quiet,
// earned turn ("For me, that true north is Jesus Christ") into a
// headline, which would announce the conclusion instead of letting the
// reader arrive at it. (2) The closing refrain's small-caps/letter-
// spaced/bold treatment was replaced (see .foundation-closing in
// globals.css) — small caps in gold, centered, bordered reads as
// certificate/church-bulletin typography, which cuts against "not
// trying to convert you." It now matches the opening epigraph's plain
// italic serif almost exactly, distinguished only by a quiet top rule
// (a threshold marker, not a label) and the gold color already used
// quietly elsewhere on this page family (eyebrow, credo) — restrained
// rather than solemn.
//
// 2026-07-14, same day (second follow-up): added a small thumbnail of
// Susan's own concrete poem "A Watery Cross" (public/images/mandala/
// watery_cross.png — existing finished artwork, previously unlinked
// anywhere on the site), placed right after the paragraph that mentions
// "an image, a poem" as a direct, wordless illustration of that
// sentence. Per Susan's explicit direction: an image thumbnail, not a
// text link. It links straight to the artwork itself — no new page —
// consistent with /gallery's own "no links, no new decisions" scoping,
// which is why this doesn't live there instead.
//
// 2026-07-14, same day (third follow-up): the water in that artwork was
// faded twice more (see the image's own git history) so the cross has
// more prominence — first 40%, then 55% once 40% proved too subtle at
// actual ~150px thumbnail size. Susan then asked for the thumbnail's own
// background to fade into the page itself. Split into two files at that
// point: watery_cross.png (the clean 55%-faded rectangle, unchanged,
// still the link's full-size target) and watery_cross-thumb.png (same
// colors, alpha-feathered on all four edges), so the full-size view
// keeps a defined edge while only the small inline preview dissolves
// into the page's cream ground.
export const metadata: Metadata = {
  title: 'The Foundation of AwakenArts | Christian Symbolic Art and Reflection',
  description:
    "Susan Ann Shepler on the foundation of AwakenArts: a lifelong journey of recognition through image and symbol, and the Christian faith that has given it language, meaning, and hope. Christ as true north.",
  alternates: { canonical: '/foundation' },
  openGraph: {
    url: '/foundation',
    title: 'The Foundation of AwakenArts',
    description:
      'A lifelong journey of recognition through image and symbol, and the Christian faith that has given it language, meaning, and hope.',
  },
}

export default function FoundationPage() {
  return (
    <>
      <Nav />

      <AtmosphericHeader
        src="/images/headers/foundation.jpg"
        alt="An open book, a cup, and a sprig of greenery on a sunlit windowsill table — a quiet place to read."
        fadeTo="#f5f0e8"
      />

      <div className="foundation-page">
        <main className="foundation-main">
          <div className="foundation-epigraph">
            <p>This is the only journey I can faithfully share.</p>
            <p>Throughout my own, I have found Christ to be my true north.</p>
          </div>

          <p className="eyebrow foundation-eyebrow">Foundation</p>
          <h1 className="foundation-h1">My Foundation</h1>

          <p className="foundation-body">
            Every life tells its story in ways that are often quieter than
            words.
          </p>
          <p className="foundation-body">
            Sometimes that story appears through an image, a poem, a
            memory, or an unexpected moment of recognition. Long before I
            understood what my own artwork was saying, I sensed that it
            was inviting me to pay attention. The images often revealed
            something I had not yet found language to express. They
            became companions on a lifelong journey of observation,
            reflection, and discovery.
          </p>

          <a
            href="/images/mandala/watery_cross.png"
            target="_blank"
            rel="noopener noreferrer"
            className="foundation-poem-link"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mandala/watery_cross-thumb.png"
              alt="A Watery Cross — a shaped poem about a ship anchored near shore, guided by moonlight, its lines tapering into the form of a cross."
              className="foundation-poem-thumb"
            />
            <span className="foundation-poem-caption">A Watery Cross</span>
          </a>

          <p className="foundation-body">
            Over time I came to understand that recognition is only the
            beginning. Awareness invites acceptance. Acceptance makes
            honest action possible. Those movements have shaped both my
            life and the work you find here.
          </p>
          <p className="foundation-body">
            Looking back, I can see that the path has not been random.
            Like a traveler who gradually realizes that a single star has
            been guiding the journey all along, I discovered that the
            recognitions emerging through image and symbol were
            consistently leading me toward the same true north.
          </p>
          <p className="foundation-body">For me, that true north is Jesus Christ.</p>
          <p className="foundation-body">
            The Christian story has given language, meaning, and hope to
            recognitions that first appeared through image and symbol.
            Scripture has not diminished those recognitions; it has
            illuminated them, tested them, and given them their proper
            place.
          </p>
          <p className="foundation-body">
            AwakenArts is an invitation to notice the symbolic language
            that often accompanies ordinary life. The images and writings
            are not presented as answers, but as companions for
            reflection. They invite readers to pay attention, to
            recognize what is already present, and to consider where
            those recognitions may be leading.
          </p>

          <div className="foundation-closing">
            <p>This is the only journey I can faithfully share.</p>
            <p>Throughout my own, I have found Christ to be my true north.</p>
          </div>
        </main>
      </div>

      <WayfindingBand />
      <Footer />
    </>
  )
}
