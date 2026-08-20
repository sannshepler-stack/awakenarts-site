import Link from 'next/link'
import styles from '@/app/encounters/encounters-index.module.css'

/*
 * SymbolsEncounters — the third movement on /symbols, replacing
 * SymbolsDeepen.tsx.
 *
 * 2026-08-20, per Susan's "Christian Symbols — Reduce Vocabulary,
 * Restore Encounters" directive: SymbolsDeepen.tsx (the "Following a
 * Symbol Further" section) recreated Journey/The Deep/The Table/The
 * Word from memory of an earlier draft document, as four new prose
 * essays. That was the wrong move — "I would have Claude reuse what
 * exists rather than recreate it from our memory of it. That protects
 * the work we've already done." The actual, already-built Journey ->
 * The Deep -> The Table -> The Word experience lives at
 * /encounters/journey, /encounters/deep, /encounters/table,
 * /encounters/word — full atmospheric pages (hero image, scrim,
 * eyebrow, title, two opening lines, scripture, closing line) built
 * and approved earlier. This component does not reproduce that
 * content inline (it can't — each is a full standalone page with its
 * own WayfindingBand/Footer, see src/app/encounters/_shared/
 * EncounterHero.tsx). Instead it restores the same card-grid
 * *entrance* already established on /encounters/page.tsx — same CSS
 * module (encounters-index.module.css, imported directly, not
 * duplicated), same four images, same four mantras, same dark
 * treatment — as real links into those four pages. The visitor moves
 * from identifying symbols (Symbol Vocabulary, above) to actually
 * experiencing symbolic language (the Encounters themselves), per her
 * stated purpose, rather than reading a fifth summary of what a
 * symbol means.
 *
 * SCOPE: only Journey, The Deep, The Table, The Word — Continue and
 * the free Encounter Journal email-gate card are intentionally left
 * out, matching the disposition SymbolsDeepen.tsx itself already
 * documented for this same placement. Card data (slug/title/mantra/
 * image/position) is copied verbatim from ENCOUNTERS in
 * src/app/encounters/page.tsx, not re-derived from memory — if that
 * array changes, this one should be checked against it.
 *
 * Intro copy (eyebrow "Encounters," "Every journey begins with a
 * single encounter." / "Begin where you are. The work will meet you
 * there.") was originally reused verbatim from the same source page.
 *
 * 2026-08-20 update, per Susan's "From Symbol to Experience" directive:
 * that intro read as a second, redundant page header once the new cream
 * transition passage (SymbolsExperience.tsx, "From Symbol to
 * Experience" / "Symbols do more than carry meaning...") was added
 * immediately above this section — the eyebrow "Encounters," the
 * heading "Encounters," and "Every journey begins with a single
 * encounter" all belonged to the former standalone Encounters page
 * architecture and were removed here per her explicit instruction.
 *
 * 2026-08-20, later the same day, per her follow-up — "take this off,
 * it is old language" (pointing at the remaining secondary line,
 * "Begin where you are. The work will meet you there.") — that line is
 * removed too. This section now opens directly into the four cards,
 * immediately after the cream "From Symbol to Experience" passage
 * above it; no intro copy of its own remains. The section element's
 * aria-label (below) already describes the cards directly rather than
 * depending on this now-removed copy.
 *
 * SymbolsDeepen.tsx is left in the codebase, unused, per the standing
 * no-silent-deletion practice — it is not reused anywhere else.
 */

const ENCOUNTERS = [
  {
    slug: 'journey',
    title: 'Journey',
    mantra: 'I begin.',
    image: '/images/encounters/journey/journey-02-web.png',
    position: 'center 55%',
  },
  {
    slug: 'deep',
    title: 'The Deep',
    mantra: 'I encounter.',
    image: '/images/encounters/deep/deep-02-web.png',
    position: 'center 55%',
  },
  {
    slug: 'table',
    title: 'The Table',
    mantra: 'I receive.',
    image: '/images/encounters/table/table-01-web.png',
    position: 'center 62%',
  },
  {
    slug: 'word',
    title: 'The Word',
    mantra: 'I listen.',
    image: '/images/encounters/word/word-01-web.png',
    position: 'center 55%',
  },
] as const

export default function SymbolsEncounters() {
  return (
    <section
      className={`${styles.page} symbols-encounters-section`}
      aria-label="From Symbol to Experience — Journey, The Deep, The Table, The Word"
    >
      {/* Eyebrow "Encounters", heading "Encounters", primary statement
          "Every journey begins with a single encounter.", and (per
          Susan's follow-up, "take this off, it is old language")
          the secondary line "Begin where you are. The work will meet
          you there." have all been removed — see this file's header
          comment. .intro itself is no longer used here; the section
          opens directly into the card grid below. */}

      {/* .grid's grid-template-columns is repeat(5, 1fr), tuned for
          /encounters' own five cards (Journey/Deep/Table/Word/
          Continue). This placement intentionally uses only four, so
          left as-is it would fill 4 of 5 tracks and sit off-center
          with a visible gap on the right. .symbols-encounters-grid
          (globals.css) overrides just the column count -- 4 at
          desktop, matching the same 2-then-1 responsive collapse the
          original 5-column grid uses, just starting from 4. .grid
          itself (and /encounters/page.tsx, which still needs all 5
          columns) is untouched; the doubled class selector in
          globals.css guarantees this override wins regardless of CSS
          module chunk load order. */}
      <nav className={`${styles.grid} symbols-encounters-grid`} aria-label="Encounters">
        {ENCOUNTERS.map((e) => (
          <Link
            key={e.slug}
            href={`/encounters/${e.slug}`}
            className={styles.card}
            style={{ backgroundImage: `url('${e.image}')`, backgroundPosition: e.position }}
          >
            <div className={styles.cardScrim} />
            <div className={styles.cardInner}>
              <p className={styles.cardTitle}>{e.title}</p>
              <p className={styles.cardMantra}>{e.mantra}</p>
            </div>
          </Link>
        ))}
      </nav>
    </section>
  )
}
