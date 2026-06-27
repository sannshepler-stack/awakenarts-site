// ─── /workshops — Workshops Page ─────────────────────────────────────────────
// AwakenArts · Symbolic Facilitation Workshops
//
// Built per the Global Page Architecture Standard: Nav -> page content ->
// WayfindingBand -> Footer. Content is drawn directly from the Workshop
// Curriculum (AwakenArts_Workshop_Curriculum.docx) — the Series at a Glance
// table, the Three Ways to Begin formats, the four-movement session shape,
// and the Materials Checklist all mirror that document rather than
// inventing new programming. No pricing or booking system exists yet, so
// the page closes on a direct email inquiry rather than a self-serve form.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// Unlisted Page System (2026-06-27): this page is live but deliberately
// unlinked from Nav/WayfindingBand/Footer — reachable only by direct URL
// until Susan decides to publish it into navigation. robots: noindex
// keeps it out of search results in the meantime (matching the
// DISALLOWED_PATHS entry in src/app/robots.ts). See
// AwakenArts_Site_Architecture.md -> "Unlisted Page System".
export const metadata: Metadata = {
  title: 'Workshops — AwakenArts',
  description:
    'Symbolic Facilitation Workshops — a six-session series, taster sessions, and ongoing groups built on the AwakenArts Figure Editions and the Recognition Model.',
  alternates: { canonical: '/workshops' },
  robots: { index: false, follow: true },
  openGraph: {
    url: '/workshops',
    title: 'Workshops — AwakenArts',
    description:
      'Symbolic Facilitation Workshops — a six-session series, taster sessions, and ongoing groups built on the AwakenArts Figure Editions.',
  },
}

const GLANCE = [
  {
    session: 'Session 1',
    edition: 'Poppy — “Her Mother’s Hands”',
    theme: 'Love & Inheritance',
    emphasis: 'Encounter — building trust in noticing, low-stakes entry',
  },
  {
    session: 'Session 2',
    edition: 'Bowls — “Two Forms, One Light”',
    theme: 'Balance & Belonging',
    emphasis: 'Recognition — meeting without competing or comparing',
  },
  {
    session: 'Session 3',
    edition: 'Ballerina — “The Many Become One”',
    theme: 'Playfulness & Becoming',
    emphasis: 'Reflection — performance vs. authentic self',
  },
  {
    session: 'Session 4',
    edition: 'Dragon — “The Dragon”',
    theme: 'Identity & Wholeness',
    emphasis: 'Recognition — integrating what feels like opposites',
  },
  {
    session: 'Session 5',
    edition: 'Grismere — “A Lure Toward the Depths”',
    theme: 'Longing & Mystery',
    emphasis: 'Reflection — sitting with what resists easy meaning',
  },
  {
    session: 'Session 6',
    edition: 'Queen Ann — “Between Two Kingdoms”',
    theme: 'Threshold & Becoming',
    emphasis: 'Integration — carrying recognition into what’s next',
  },
]

const MOVEMENTS = [
  {
    num: '1',
    name: 'Encounter',
    desc: 'An unhurried, silent sitting with the figure and its poem, before anyone is asked what it means.',
  },
  {
    num: '2',
    name: 'Recognition',
    desc: 'The moment something in the figure touches something true in a participant’s own life.',
  },
  {
    num: '3',
    name: 'Reflection',
    desc: 'Putting language around what’s surfaced — through a round of observations, open discussion, and journaling.',
  },
  {
    num: '4',
    name: 'Integration',
    desc: 'A closing gesture toward carrying what’s been recognized out of the room, in its own time.',
  },
]

const PROVIDED = [
  'Edition copies (printed or digital) for each figure used in the series',
  'Facilitator Orientation & Quick-Reference handout',
  'Participant Recognition Model card',
  'Session worksheets — individual, group, and return-session formats',
  'Journals or notebooks for participants',
  'Intake / consent form, reviewed before the first session',
  'Feedback form, distributed after the final session or at the series midpoint',
]

const INQUIRY_MAILTO =
  'mailto:susan@shepler.us?subject=Workshop%20Inquiry&body=Hi%20Susan%2C%0A%0AI%27d%20like%20to%20ask%20about%20a%20Symbolic%20Facilitation%20workshop.'

export default function WorkshopsPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Workshops</span>
          <h1 className={styles.title}>Symbolic Facilitation Workshops</h1>
          <p className={styles.lede}>
            Six sessions. Six figures. One practice of noticing.
          </p>
          <p className={styles.intro}>
            This series turns the practice taught in <em>The AwakenArts Guide
            to Symbolic Facilitation</em> into a runnable group experience: an
            unhurried encounter with a figure and a poem, room for whatever
            surfaces, and a closing gesture toward carrying it forward. The
            Recognition Model — Encounter, Recognition, Reflection,
            Integration — is the lens for every session; the Figure Editions
            are the material.
          </p>
          <a className={styles.heroCta} href={INQUIRY_MAILTO}>
            Inquire About a Workshop
          </a>
        </div>
      </main>

      {/* ── Three Ways to Begin ──────────────────────────────────────── */}
      <section className={styles.waysSection} aria-labelledby="ways-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Formats</span>
          <h2 id="ways-heading" className={styles.sectionHeading}>
            Three Ways to Begin
          </h2>
          <p className={styles.sectionLede}>
            The same four-movement shape, run at three different scales —
            from a single sampler to an ongoing practice.
          </p>
        </div>

        <div className={styles.waysGrid}>
          <div className={styles.wayCard}>
            <span className={styles.wayLabel}>Full Series</span>
            <h3 className={styles.wayTitle}>Six-Session Series</h3>
            <p className={styles.wayBody}>
              Weekly or biweekly sessions, one Edition per session, moving
              from a gentle entry point toward material that asks more of
              participants. The full arc described below.
            </p>
          </div>

          <div className={styles.wayCard}>
            <span className={styles.wayLabel}>Sampler</span>
            <h3 className={styles.wayTitle}>Taster Session</h3>
            <p className={styles.wayBody}>
              A single 90-minute introduction using one accessible Edition —
              Poppy or Bowls work well as a first encounter. Useful as an
              open house before a group commits to the full series.
            </p>
          </div>

          <div className={styles.wayCard}>
            <span className={styles.wayLabel}>Continuing</span>
            <h3 className={styles.wayTitle}>Ongoing / Return Group</h3>
            <p className={styles.wayBody}>
              Once a group has completed the series, return sessions revisit
              a figure already encountered — a brief check-in, a silent
              re-encounter, and discussion focused on what&rsquo;s different
              this time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Series at a Glance ───────────────────────────────────────── */}
      <section className={styles.glanceSection} aria-labelledby="glance-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>The Full Series</span>
          <h2 id="glance-heading" className={styles.sectionHeading}>
            Series at a Glance
          </h2>
          <p className={styles.sectionLede}>
            The sequence moves from gentler entry points toward material
            that asks more of participants, closing on a figure of
            transition.
          </p>
        </div>

        <table className={styles.glanceTable}>
          <thead>
            <tr>
              <th scope="col">Session</th>
              <th scope="col">Edition &amp; Theme</th>
              <th scope="col">Recognition Model Emphasis</th>
            </tr>
          </thead>
          <tbody>
            {GLANCE.map((row) => (
              <tr key={row.session}>
                <td>{row.session}</td>
                <td>
                  <span className={styles.glanceEdition}>{row.edition}</span>
                  <span className={styles.glanceTheme}>{row.theme}</span>
                </td>
                <td>{row.emphasis}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className={styles.glanceNote}>
          Adjust the order to fit a particular group&rsquo;s pace — this is a
          suggested arc, not a required one.
        </p>
      </section>

      {/* ── What Each Session Holds ──────────────────────────────────── */}
      <section className={styles.shapeSection} aria-labelledby="shape-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>The Shape</span>
          <h2 id="shape-heading" className={styles.sectionHeading}>
            What Each Session Holds
          </h2>
        </div>

        <div className={styles.shapeGrid}>
          {MOVEMENTS.map((m) => (
            <div key={m.num} className={styles.movement}>
              <span className={styles.movementNum}>{m.num}</span>
              <h3 className={styles.movementName}>{m.name}</h3>
              <p className={styles.movementDesc}>{m.desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.timingNote}>
          Each group session runs roughly <strong>90 minutes</strong> for
          four to ten participants: arrival and centering, opening, a silent
          encounter with the figure and poem, a round of observations, open
          discussion, individual reflection, and a closing. One-on-one
          sessions use the Guide&rsquo;s <strong>45–60 minute</strong> Individual
          format instead.
        </p>
      </section>

      {/* ── What's Included ──────────────────────────────────────────── */}
      <section className={styles.providedSection} aria-labelledby="provided-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Materials</span>
          <h2 id="provided-heading" className={styles.sectionHeading}>
            What&rsquo;s Included
          </h2>
        </div>

        <div className={styles.providedGrid}>
          {PROVIDED.map((item) => (
            <p key={item} className={styles.providedItem}>
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaInner}>
          <h2 id="cta-heading" className={styles.ctaHeading}>
            Begin a Series
          </h2>
          <p className={styles.ctaBody}>
            Workshops can run as a six-session group series, a single taster
            session, one-on-one, or as an ongoing return group for those
            who&rsquo;ve already completed the series. To ask about scheduling a
            workshop or bringing this practice to your own group, reach out
            directly.
          </p>
          <a className={styles.ctaLink} href={INQUIRY_MAILTO}>
            Email Susan →
          </a>
        </div>
      </section>

      <WayfindingBand />
      <Footer />
    </>
  )
}
