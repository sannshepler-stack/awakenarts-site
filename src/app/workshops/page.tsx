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
    'Literary-symbolic workshops conducted by Susan Ann Shepler, using imagery, poetry, reflection, and writing to make meaning-making more visible.',
  alternates: { canonical: '/workshops' },
  robots: { index: true, follow: true },
  openGraph: {
    url: '/workshops',
    title: 'Workshops | AwakenArts',
    description:
      'Literary-symbolic workshops conducted by Susan Ann Shepler, using imagery, poetry, reflection, and writing to make meaning-making more visible.',
    images: ['/images/brand/og-hero.jpg'],
  },
}

const EXPERIENCE = [
  'Encounter symbolic imagery before receiving an explanation.',
  'Notice the associations and interpretations that arise.',
  'Observe what changes when poetry and story add new information.',
  'Bring recognition into conscious language through reflection and writing.',
  'Consider what choices become available once a pattern can be seen and named.',
]

const RHYTHM = [
  'Orientation',
  'Encounter',
  'Association',
  'Story / Poem',
  'Disruption',
  'Meta Shift',
  'Recognition',
  'Conscious Language',
  'Application',
  'Return',
]

const FORMATS = [
  {
    name: 'Introductory Workshop',
    desc:
      'A single gathering that introduces the Method through one accessible Figure Edition — a first encounter with noticing, before any commitment to a longer series.',
  },
  {
    name: 'Figure Edition Workshop',
    desc:
      'A focused gathering built around one Figure Edition, giving a group time to notice, remain, and recognize together within a single symbolic landscape.',
  },
  {
    name: 'Church Retreat',
    desc:
      'A weekend or extended gathering that brings the Method into a retreat setting, pairing quiet attention with a community’s own rhythms of worship and reflection.',
  },
  {
    name: 'Library & Community Programs',
    desc:
      'A program Susan brings to libraries, community centers, and reading groups — an accessible entry point for anyone curious about symbolic attention, regardless of background.',
  },
  {
    name: 'Ongoing Recognition Groups',
    desc:
      'A continuing group conducted by Susan that returns to the practice regularly, building the kind of shared attention that only develops over time and repeated encounter.',
  },
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
          <p className={styles.lede}>Recognition deepens in the presence of others.</p>

          {/* Introduction — no section heading, flows directly from the
              hero, same as /method's own opening movement. Links back to
              /method by name, the explicit continuity Susan asked for. */}
          <p className={styles.body}>
            AwakenArts is a literary-symbolic practice conducted by Susan Ann
            Shepler. The workshops are where the{' '}
            <Link href="/method" className={styles.inlineLink}>
              AwakenArts Method
            </Link>{' '}
            becomes lived experience through imagery, poetry, reflection,
            writing, and conversation.
          </p>
          <p className={styles.body}>
            We make meaning from what we encounter, often so quickly that an
            interpretation feels like the event itself. AwakenArts slows that
            process down. The purpose is not to find the correct meaning of a
            symbol, but to notice what our own minds assume, supply, expect,
            resist, and revise.
          </p>

          <h2 className={styles.h2}>The Workshop Experience</h2>
          <p className={styles.body}>In a workshop, participants learn to:</p>
          <ul className={styles.list} aria-label="The Workshop Experience">
            {EXPERIENCE.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <h2 className={styles.h2}>A Consistent Practice</h2>
          <p className={styles.body}>
            Regardless of which Figure Edition a workshop gathers around, it
            moves through the same underlying arc:
          </p>
          <ol className={styles.rhythm} aria-label="The rhythm of the Method">
            {RHYTHM.map((step, i) => (
              <li key={step}>
                <span className={styles.rhythmStep}>{step}</span>
                {i < RHYTHM.length - 1 && (
                  <span className={styles.rhythmArrow} aria-hidden="true">
                    &darr;
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className={styles.body}>
            The arc remains consistent while the symbolic world changes. A
            participant can return through Dragon, Bowls, Ballerina, Grismere,
            Poppy, or Queen Ann and practice the same capacity through
            different imagery, poetry, questions, and stories.
          </p>

          <h2 className={styles.h2}>Figure Editions</h2>
          <p className={styles.body}>
            Every workshop begins with one Figure Edition. The Figure
            Edition provides the symbolic landscape through which
            participants practice the Method together.
          </p>
          <p className={styles.body}>
            <Link href="/collection" className="text-link">
              Explore the Figure Editions <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>

          <h2 className={styles.h2}>Susan&rsquo;s Role</h2>
          <p className={styles.body}>
            Susan holds the sequence, introduces each Edition&rsquo;s symbolic
            material, guides conversation, allows silence, and protects a
            space in which recognition is invited rather than prescribed.
            AwakenArts workshops are conducted experiences, not facilitator
            products or materials for others to purchase and deliver.
          </p>

          <h2 className={styles.h2}>Workshop Formats</h2>
          <ul className={styles.formats} aria-label="Workshop Formats">
            {FORMATS.map((f) => (
              <li key={f.name}>
                <span className={styles.formatsName}>{f.name}</span>
                <p className={styles.formatsDesc}>{f.desc}</p>
              </li>
            ))}
          </ul>

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
