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

      <AtmosphericHeader
        src="/images/library/ambiance-bible-2.png"
        alt="An open journal with a sketched figure, stacked books, and dried botanicals, overlooking hills at sunset — a quiet place for shared reflection."
        fadeTo="#f5f0e8"
      />

      <div className={styles.page}>
        <main className={styles.main}>
          <p className={`eyebrow ${styles.eyebrow}`}>Workshops</p>
          <h1 className={styles.h1}>Workshops</h1>
          {/* 2026-08-19, per Susan's direct instruction: page opening
              changed to state the workshop's actual premise up front
              ("we bring our own stories" -> "AwakenArts explores what
              they hold") rather than opening on a reassurance about
              required expertise. The prior lede ("Come curious...") is
              kept, moved to lead the first body paragraph immediately
              below -- still useful, just no longer the opening line. */}
          <p className={styles.lede}>
            We bring our own stories to every experience. AwakenArts
            explores what they hold.
          </p>

          {/* Introduction — no section heading, flows directly from the
              hero, same as /method's own opening movement.
              2026-08-19, per Susan's direct instruction: both body
              paragraphs replaced with her own copy. The prior version
              opened on a reassurance ("Come curious...") and named
              specific Edition imagery (dragon, dancer, bowl) before
              explaining what a workshop actually does. This version
              states the workshop's real structure directly: a
              recognizable human story first, poetry and image adding a
              dimension that often goes unseen.
              2026-08-19, later the same day, per Susan's follow-up:
              the former second paragraph ("From there, the workshop
              develops the ideas within the story. We learn more about
              what may be happening, consider different points of
              view, and use writing and conversation to explore where
              the story meets our own lives.") is eliminated as a
              separate paragraph and folded into this one, compressed
              to a single line: "the workshop develops ideas and
              explores different perspectives on common stories, and
              shared experiences" -- reframes the movement from
              individual-story-specific ("where the story meets our
              own lives") to communal ("common stories, and shared
              experiences"). The closing sentence about the purpose not
              being a shared answer is dropped along with the rest of
              the former second paragraph, per her explicit "eliminate
              second paragraph" instruction, leaving one consolidated
              opening paragraph. */}
          <p className={styles.body}>
            Each workshop begins with a story drawn from experiences we
            recognize and explores relationships, choices, change,
            loss, belonging, and the many ways we find our place in the
            world. Poetry and image bring a dimension that often
            remains unseen. The workshop develops ideas and explores
            different perspectives on common stories, and shared
            experiences.
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

          <h2 className={styles.h2}>Workshops with Susan</h2>
          <p className={styles.body}>
            Susan Ann Shepler is an artist, writer, Certified Transformative
            Language Artist, and Certified Journal Instructor. She holds a
            Master of Arts in Counseling and created AwakenArts from her
            sustained work with image, poetry, symbolic language, and
            reflection. She conducts every AwakenArts workshop herself.
          </p>
          <p className={styles.body}>
            Her qualifications inform the care and craft with which she holds
            a gathering; AwakenArts is an artistic and educational practice,
            not counseling or therapy.{' '}
            <Link href="/about" className={styles.inlineLink}>
              Learn more about her background
            </Link>
            .
          </p>

          <h2 className={styles.h2}>The Workshop Landscape</h2>
          <p className={styles.body}>
            An AwakenArts workshop may be a single gathering, a return through
            several Figure Editions, or part of a retreat or community
            program. It can find a home in libraries, churches, reading
            groups, and other places where people gather around art, language,
            story, and reflection.
          </p>
          <p className={styles.body}>
            These are not separate packaged programs. They are different ways
            the same living practice can meet a particular group, place, and
            occasion. Each invitation is shaped in conversation with the
            people who will host it.
          </p>

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
