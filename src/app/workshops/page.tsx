import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
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
          <p className={styles.lede}>
            Come curious. You do not need to know anything about art, poetry,
            or symbols.
          </p>

          {/* Introduction — no section heading, flows directly from the
              hero, same as /method's own opening movement. Links back to
              /method by name, the explicit continuity Susan asked for. */}
          <p className={styles.body}>
            Each workshop begins with something to look at&mdash;perhaps a
            dragon above a burning town, a dancer caught between stillness and
            motion, or a simple bowl. Susan invites you to stay with the image
            before explaining it. What do you notice? What story have you
            already begun to tell?
          </p>
          <p className={styles.body}>
            Then poetry, story, quiet writing, and conversation change what is
            possible to see. There is no correct answer to discover and no
            pressure to share more than you wish. The pleasure is in the
            unfolding&mdash;the moment when something once hard to name begins
            to take shape.
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

          <h2 className={styles.h2}>Figure Editions</h2>
          <p className={styles.body}>
            A Figure Edition gathers the artwork, poem, story, and reflective
            questions for one workshop world. It is something Susan brings
            into the shared experience&mdash;not a lesson participants must
            study beforehand. The website offers a visual preview of each
            Edition so you can glimpse the worlds a workshop may enter.
          </p>
          <p className={styles.body}>
            <Link href="/collection" className="text-link">
              View the Edition Previews <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>

          <h2 className={styles.h2}>Workshops with Susan</h2>
          <p className={styles.body}>
            Susan Ann Shepler is an artist, writer, Certified Transformative
            Language Artist, and Certified Journal Instructor. She holds a
            Master of Arts in Counseling and created AwakenArts from her
            sustained work with image, poetry, symbolic language, and
            reflection. Susan conducts every AwakenArts workshop herself.
          </p>
          <p className={styles.body}>
            Her qualifications inform the care and craft with which she holds
            a gathering; AwakenArts is an artistic and educational practice,
            not counseling or therapy.{' '}
            <Link href="/about" className={styles.inlineLink}>
              Learn more about Susan
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
            occasion. Susan shapes the invitation in conversation with the
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
