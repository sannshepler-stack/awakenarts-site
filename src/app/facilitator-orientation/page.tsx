// ─── /facilitator-orientation — Facilitator Orientation & Quick-Reference ────
// AwakenArts · Unlisted companion page to the Workshops series.
//
// Built per the Unlisted Page System (see AwakenArts_Site_Architecture.md):
// full Global Page Architecture Standard (Nav -> content -> WayfindingBand
// -> Footer), but withheld from Nav/WayfindingBand/Footer and noindexed,
// so it's reachable only by direct URL until Susan decides to publish it.
//
// Content mirrors AwakenArts_Facilitator_Orientation.pdf exactly — Before
// You Begin, Opening, The Ladder, Do/Don't, Watch For, Closing & After, and
// Session Formats at a Glance — rendered as a single scrollable page rather
// than split across multiple linked pages, consistent with the rest of the
// site's "one page, many chapters" editorial rhythm.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Facilitator Orientation & Quick-Reference — AwakenArts',
  description:
    'A working companion to Appendix A of the AwakenArts Guide to Symbolic Facilitation — before you begin, opening, the Ladder, do/don’t, and session formats at a glance.',
  alternates: { canonical: '/facilitator-orientation' },
  robots: { index: false, follow: true },
}

const BEFORE = [
  'Sit with the figure yourself, more than once, before bringing it to anyone else.',
  'Decide your opening question in advance; keep it observational, not interpretive.',
  'If facilitating professionally, know your referral resources before you need them.',
  'Have the Intake / Consent form reviewed before a first session begins.',
]

const OPENING = [
  'Name the kind of time this will be: no required destination, nothing too small to mention.',
  'Give real, unhurried silence before any discussion — at least a minute, often longer.',
  'Ask one open question. Then wait longer than feels natural.',
]

const LADDER = [
  { num: '1', name: 'Observation', desc: 'What is literally, visibly there — shape, color, gesture, composition.' },
  { num: '2', name: 'Association', desc: 'What this brings to mind — a memory, another image, a word.' },
  { num: '3', name: 'Feeling', desc: 'What arises in the body or mood while looking — named, not analyzed.' },
  { num: '4', name: 'Meaning', desc: 'What the participant makes of it, in their own words, on their own timeline.' },
]

const DO = [
  'Default to open questions (‘What do you notice?’).',
  'Treat resistance as information, not an obstacle.',
  'Let productive silence run its course.',
  'Stay present through strong emotion.',
]

const DONT = [
  'Rush to interpret before observation has settled.',
  'Push past resistance to get to a ‘real’ answer.',
  'Fill silence because it feels uncomfortable to you.',
  'Rush to soothe strong emotion away.',
]

const CLOSING = [
  'Brief return to stillness, then one sentence each on where participants are leaving the session.',
  'Name the ending explicitly — don’t let it trail off.',
  'Afterward, note: figure used, what opened or stayed closed, any signals of resistance or strong feeling, anything to return to.',
  'Resist “did it work?” Prefer “what have you noticed since?”',
]

const FORMATS = [
  { name: 'Individual', detail: '45–60 min · one participant · laddered questions at their own pace.' },
  { name: 'Group', detail: '75–90 min · 4–10 participants · round of observations before open discussion.' },
  { name: 'Return / Same Figure', detail: '20–40 min · revisits a figure already encountered, focused on what’s different this time.' },
]

export default function FacilitatorOrientationPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>For Facilitators</span>
          <h1 className={styles.title}>Facilitator Orientation &amp; Quick-Reference</h1>
          <p className={styles.lede}>
            A working companion to Appendix A of the Guide.
          </p>
          <Link href="/workshops" className={styles.backLink}>
            ← Back to Workshops
          </Link>
        </div>
      </main>

      {/* ── Before You Begin (cream) ─────────────────────────────────── */}
      <section className={styles.creamSection} aria-labelledby="before-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Preparation</span>
          <h2 id="before-heading" className={styles.sectionHeading}>Before You Begin</h2>
        </div>
        <ul className={styles.checklist}>
          {BEFORE.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {/* ── Opening (navy) ───────────────────────────────────────────── */}
      <section className={styles.navySection} aria-labelledby="opening-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Starting the Session</span>
          <h2 id="opening-heading" className={styles.sectionHeading}>Opening</h2>
        </div>
        <ul className={styles.checklist}>
          {OPENING.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {/* ── During: The Ladder (cream) ───────────────────────────────── */}
      <section className={styles.creamSection} aria-labelledby="ladder-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>During</span>
          <h2 id="ladder-heading" className={styles.sectionHeading}>The Ladder</h2>
          <p className={styles.sectionLede}>
            Move through these in order — don&rsquo;t skip rungs. Most facilitation
            problems trace back to reaching for meaning before observation has
            had room to settle.
          </p>
        </div>
        <div className={styles.ladderGrid}>
          {LADDER.map((r) => (
            <div key={r.num} className={styles.rung}>
              <span className={styles.rungNum}>{r.num}</span>
              <h3 className={styles.rungName}>{r.name}</h3>
              <p className={styles.rungDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Do / Don't (navy) ────────────────────────────────────────── */}
      <section className={styles.navySection} aria-labelledby="dodont-heading">
        <div className={styles.sectionHeader}>
          <h2 id="dodont-heading" className={styles.sectionHeading}>Do &amp; Don&rsquo;t</h2>
        </div>
        <div className={styles.doDontGrid}>
          <ul className={styles.doDontCol}>
            <span className={styles.doDontLabel}>Do</span>
            {DO.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ul className={styles.doDontCol}>
            <span className={styles.doDontLabel}>Don&rsquo;t</span>
            {DONT.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* ── Watch For (warm caution band) ────────────────────────────── */}
      <section className={styles.watchSection} aria-labelledby="watch-heading">
        <div className={styles.watchInner}>
          <span className={styles.watchLabel} id="watch-heading">Watch For</span>
          <p className={styles.watchBody}>
            Suicidal ideation or self-harm, current abuse or danger, severe
            dissociation, or distress that won&rsquo;t resettle. If present: stay
            calm, name it plainly, and refer rather than attempt to resolve it
            yourself. See the Guide, Chapter Eleven, and the Intake / Consent
            form&rsquo;s scope language.
          </p>
        </div>
      </section>

      {/* ── Closing & After (cream) ──────────────────────────────────── */}
      <section className={styles.creamSection} aria-labelledby="closing-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Ending the Session</span>
          <h2 id="closing-heading" className={styles.sectionHeading}>Closing &amp; After</h2>
        </div>
        <ul className={styles.checklist}>
          {CLOSING.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {/* ── Session Formats at a Glance (navy) ───────────────────────── */}
      <section className={styles.navySection} aria-labelledby="formats-heading">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Reference</span>
          <h2 id="formats-heading" className={styles.sectionHeading}>Session Formats at a Glance</h2>
        </div>
        <table className={styles.formatsTable}>
          <thead>
            <tr>
              <th scope="col">Format</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            {FORMATS.map((f) => (
              <tr key={f.name}>
                <td>{f.name}</td>
                <td>{f.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── Closing note ─────────────────────────────────────────────── */}
      <section className={styles.closingNote}>
        <p className={styles.closingNoteText}>
          Full discussion of each of these: the Guide, Chapters Five through
          Seven, Eleven, and Thirteen; session formats in Appendix B.
        </p>
      </section>

      <WayfindingBand />
      <Footer />
    </>
  )
}
