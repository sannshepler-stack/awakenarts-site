import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'
import { editions } from '@/data/editions'
import styles from './page.module.css'

// ─── /workshops — Workshops Page ─────────────────────────────────────────────
// AwakenArts · Unlisted page.
//
// 2026-07-10 rebuild, per Susan's "Create the Workshops Page" Production
// Directive: this replaces the 2026-06-27 curriculum-first build (a
// six-session GLANCE table mapped one Edition per session, a "What's
// Included" materials checklist, "Three Ways to Begin" format cards — see
// git history / the old page.module.css this shares a filename with) with a
// philosophy-first page that answers one question: "what happens when the
// AwakenArts Method is practiced together?" Not an advertisement for
// classes — the next chapter of /method, not a separate product. No
// scheduling, no pricing, no curriculum table.
//
// Hero rebuilt to match /method's own pattern (AtmosphericHeader image ->
// eyebrow -> h1 -> lede, cream field) instead of the prior solid-navy hero
// block, per Susan's "visual and literary continuity with the Method page"
// instruction. Header image is ambiance-bible-2.png — not yet used
// elsewhere, but the same warm books-and-light family as /method's
// poetry-manuscript.jpg (open book, dried botanicals, low golden light),
// so the two pages read as one visual family without repeating the exact
// same photograph. No asset in the library depicts an actual gathering of
// people (the site never photographs real people — every figure is
// painted/illustrated); this is the closest existing match to "gathering,
// reflection, conversation, attentive presence" without commissioning a
// new image, which is outside this pass's scope.
//
// Per the Unlisted Page System (matching /method and /foundation's own
// precedent): built and live, reachable by direct URL, not yet placed in
// Nav/WayfindingBand/Footer or indexed — publishing into navigation is a
// separate decision, not addressed by this directive.
export const metadata: Metadata = {
  title: 'Workshops | AwakenArts',
  description:
    'AwakenArts workshops with Susan Ann Shepler invite you to explore an image, follow a story, write, reflect, and discover what you notice.',
  alternates: { canonical: '/workshops' },
  robots: { index: true, follow: true },
  openGraph: {
    url: '/workshops',
    title: 'Workshops | AwakenArts',
    description:
      'Come curious. Explore an image, follow a story, write, reflect, and discover what you notice in an AwakenArts workshop with Susan Ann Shepler.',
    images: ['/images/brand/og-hero.jpg'],
  },
}

// 2026-08-20, per Susan's "Let's get you the help you need" full page
// architecture directive: replaces the prior EXPERIENCE list (which
// described the facilitation model being left behind) with the new
// "What to Expect" list — image/poetry encounter, familiar language,
// close reading, connections/amplification, personal reflection.
const WHAT_TO_EXPECT = [
  {
    lead: 'Images and poetry',
    text: 'encounter an original work and the symbolic territory it opens.',
  },
  {
    lead: 'Language we already know',
    text: 'discover familiar metaphors and expressions whose images may have become almost invisible through everyday use.',
  },
  {
    lead: 'Close reading and seeing',
    text: 'look at particular words, lines, images, relationships, rhythms, and details that give the work its substance.',
  },
  {
    lead: 'Connections and amplification',
    text: 'explore relevant literature, psychology, archetypal understanding, story, and Christian sources where they genuinely illuminate the work.',
  },
  {
    lead: 'Personal reflection',
    text: 'use conversation and an Edition journal to consider where what has been discovered intersects with lived experience.',
  },
]

const INQUIRY_MAILTO =
  'mailto:susan@shepler.us?subject=AwakenArts%20Workshop%20Inquiry&body=Hi%20Susan%2C%0A%0AI%27d%20like%20to%20ask%20about%20an%20AwakenArts%20workshop.'

export default function WorkshopsPage() {
  return (
    <>
      <Nav />

      {/* 2026-08-20, per Susan's "Collection Image — Dual Use" directive:
          testing the same Collection artwork already used on the homepage
          (see page.tsx, "AwakenArts, A Path of Stones") as this page's top
          visual, to establish that workshops arise from Susan's existing
          body of image-poem work. This is a placement test only — the
          prior header image (ambiance-bible-2.png) is not deleted, just
          swapped out here; nothing else on the page is redesigned around
          it. AtmosphericHeader is built for full-bleed landscape images
          (~21:6-21:7, object-fit: cover) and collection-cover-clean.png is
          portrait (1122x1402), so object-fit: cover will crop it to a
          vertical center slice at this height — flagged for review rather
          than solved unprompted. */}
      <AtmosphericHeader
        src="/images/collection/collection-cover-clean.png"
        alt="The AwakenArts Collection — the gathered body of image-poem work each workshop draws from."
        fadeTo="#f5f0e8"
      />

      <div className={styles.page}>
        <main className={styles.main}>
          <p className={`eyebrow ${styles.eyebrow}`}>Workshops</p>
          {/* 2026-08-20, per Susan's "Let's get you the help you need" full
              page architecture directive: complete restructure, replacing
              the prior "Attend A Workshop" opening (which led with format/
              venue, then her bio) with a page ordered around the visitor's
              actual sequence of questions -- what are these workshops ->
              what to expect -> what can I experience (Current Workshops)
              -> who is leading this (Your Facilitator) -> how do I
              participate (Attend a Workshop, moved to the bottom as the
              action, once a visitor has a reason to want it). Her
              credentials move out of the opening entirely -- per her
              explicit note that they "interrupt the participant's first
              question" -- into their own brief Your Facilitator section
              further down the page. */}
          <h1 className={styles.h1}>AwakenArts Workshops</h1>

          <h2 className={styles.h2}>What These Workshops Are</h2>
          <p className={styles.lede}>
            A Path of Discovery Through Image, Language, and Symbol
          </p>
          <p className={styles.body}>
            An AwakenArts workshop begins with original images and poetry
            and follows what the work reveals.
          </p>
          <p className={styles.body}>
            Through images, metaphor, close reading, symbolic language,
            conversation, and reflective writing, participants explore
            patterns in language and experience that may be present before
            we fully recognize them.
          </p>
          <p className={styles.body}>
            AwakenArts workshops are artistic and educational, offering a
            path of discovery through images, poetry, symbolic language,
            conversation, and reflection. We look more closely at what
            images and words carry, follow their connections, and consider
            what they may bring into greater awareness.
          </p>

          <h2 className={styles.h2}>What to Expect</h2>
          <ul className={styles.list} aria-label="What to Expect">
            {WHAT_TO_EXPECT.map((item) => (
              <li key={item.lead}>
                <strong>{item.lead}</strong> &mdash; {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.body}>
            Each workshop travels a different symbolic landscape, but the
            direction remains the same: toward greater recognition,
            awareness, wholeness, and connection.
          </p>

          <span id="workshop-worlds" className={styles.anchorAlias} aria-hidden="true" />
          <span id="collection" className={styles.anchorAlias} aria-hidden="true" />
          <section id="current-workshops" className={styles.worlds} aria-labelledby="current-workshops-heading">
          <h2 id="current-workshops-heading" className={styles.h2}>Current Workshops</h2>
          <p className={styles.body}>
            Every AwakenArts workshop is anchored in one Figure Edition. Each
            gathers artwork, poetry, story, and reflective questions into a
            world participants enter together.
          </p>
          <div className={styles.worldGrid}>
            {editions.map((edition) => (
              <Link key={edition.slug} href={`/editions/${edition.slug}`} className={styles.worldCard}>
                <span className={styles.worldFrame}>
                  <ProtectedImage
                    src={edition.contactSheet}
                    alt={edition.contactSheetAlt}
                    className={styles.worldImage}
                    loading="lazy"
                  />
                </span>
                <span className={styles.worldKicker}>Figure Edition</span>
                <span className={styles.worldTitle}>{edition.title}</span>
                <span className={styles.worldAction}>View Preview <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          </section>

          {/* 2026-08-20, per Susan's directive: a brief facilitator
              identification, moved out of the page's opening and placed
              here instead -- after What These Workshops Are, What to
              Expect, and Current Workshops have already answered "what
              would I be attending." Name, credentials, and one sentence
              of context. "That's sufficient," per her explicit note --
              no bio paragraph, no link, nothing further added here. */}
          <h2 className={styles.h2}>Your Facilitator</h2>
          <p className={styles.body}>
            <strong>Susan Ann Shepler</strong>
            <br />
            M.A. Counseling &middot; Certified Journal Instructor &middot;
            Certified Transformative Language Artist
          </p>
          <p className={styles.body}>
            Creator of AwakenArts and the original image-poem works at the
            center of its workshops.
          </p>

          {/* 2026-08-20, per Susan's directive: "Attend a Workshop"
              belongs near the bottom as the action, once a visitor
              understands what she would be attending -- not at the top,
              before she has a reason to want it. Heading added ahead of
              the existing closing quote + inquiry link; that content is
              unchanged, now simply named. */}
          <h2 className={styles.h2}>Attend a Workshop</h2>
          <div className={styles.closing}>
            <p>
              Recognition is rarely a solitary experience. It deepens as we
              learn to see alongside others.
            </p>
            <a className={styles.closingLink} href={INQUIRY_MAILTO}>
              Inquire About a Workshop <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </main>
      </div>

      <WayfindingBand />
      <Footer />
    </>
  )
}
