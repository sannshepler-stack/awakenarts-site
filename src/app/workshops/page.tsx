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

const EXPERIENCE = [
  'You meet an image before anyone tells you what it means.',
  'A poem or story changes the picture—and perhaps your first impression of it.',
  'You have time to wonder, write, and notice what feels familiar.',
  'Conversation opens possibilities you may not have seen alone.',
  'You leave with a question, phrase, or recognition to carry into ordinary life.',
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
          {/* 2026-08-20, per Susan's direct instruction: the page is
              consolidated under one heading, "Attend A Workshop" --
              replacing the plain "Workshops" title. The prior lede ("We
              bring our own stories...") and intro paragraph ("Each
              workshop begins with a story...") are removed; the
              explanatory paragraphs from the former separate "The
              Workshops" section (below, which this session built up
              sentence by sentence) move up to become this heading's
              opening copy instead -- condensed from four paragraphs to
              three, per her "first 3 paragraphs maximum" instruction.
              Order: what a workshop is / where it happens -> not
              counseling or therapy, not packaged programs -> Susan's
              background and qualifications (bio and qualifications
              sentence combined into one paragraph to fit the 3-max). */}
          <h1 className={styles.h1}>Attend A Workshop</h1>
          <p className={styles.body}>
            An AwakenArts workshop may be a single gathering, a return
            through several Figure Editions, or part of a retreat or
            community program. It can find a home in libraries, churches,
            reading groups, and other places where people gather around
            art, language, story, and reflection.
          </p>
          <p className={styles.body}>
            AwakenArts is an artistic and educational practice, not
            counseling or therapy. These are not separate packaged
            programs. They are different ways the same living practice can
            meet a particular group, place, and occasion.
          </p>
          <p className={styles.body}>
            Susan Ann Shepler is an artist, writer, Certified Transformative
            Language Artist, and Certified Journal Instructor. She holds a
            Master of Arts in Counseling and created AwakenArts from her
            sustained work with image, poetry, symbolic language, and
            reflection. Her qualifications inform the care and craft with
            which she holds a gathering.
          </p>

          <h2 className={styles.h2}>What You&rsquo;ll Experience</h2>
          <ul className={styles.list} aria-label="The Workshop Experience">
            {EXPERIENCE.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <h2 className={styles.h2}>A Different World Each Time</h2>
          <p className={styles.body}>
            Dragon, Bowls, Ballerina, Grismere, Poppy, and Queen Ann each open
            a different world of imagery, poetry, questions, and stories. The
            welcoming shape of the workshop remains familiar, but the journey
            changes with every Figure Edition. You can return without simply
            repeating the same experience.
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
