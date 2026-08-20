import Link from 'next/link'

/*
 * HomeChristianSymbols — Homepage Section 5, "Christian Symbols," cream.
 *
 * 2026-08-20, per Susan's "Homepage Recomposition" directive: replaces
 * PathOfRecognition.tsx's homepage role. That component's own copy
 * ("The Stories that Shape Us," "Experience the Encounters") belonged
 * to the old Encounters architecture — Encounters is no longer a
 * participant-facing offering or homepage destination, and the
 * Encounters CTA is removed outright, not just reworded. The
 * substantive former Encounter material (Journey, The Deep, The Table,
 * The Word) now lives on /symbols itself (see SymbolsDeepen.tsx).
 *
 * This section's job in the new page progression: Path of Stones
 * establishes that images already appear throughout ordinary language;
 * Matthew (the section just above this one) establishes the biblical
 * grounding of figurative language; this section then opens the
 * specific symbolic vocabulary of Scripture itself.
 *
 * COPY: per Susan's "avoid creating new explanatory material merely to
 * connect sections... let existing substantive language create the
 * progression" instruction, the heading and statement below are reused
 * directly from /symbols' own hero copy (src/app/symbols/page.tsx),
 * not invented fresh for this section. No new connecting paragraph is
 * added between Matthew and this section — the sequence, the color
 * field (cream, matching Path of Stones' own opening band), and this
 * reused language do that work.
 *
 * IMAGE: the golden sailboat (encounters-symbols-ship-v3.png) is kept
 * exactly as before, per her explicit instruction not to replace it
 * with either Collection asset — it carries journey/passage/setting-out
 * without needing to illustrate any single Christian symbol literally.
 *
 * ONE CTA: "Explore Christian Symbols ->" only. The former "Experience
 * the Encounters" CTA above the image is removed entirely, not
 * repointed — Encounters has no homepage destination anymore.
 *
 * Reuses the existing .home-recognition* CSS wholesale (title,
 * statement, intro, image, CTA) — the same shared button
 * (.home-coll-cta--light-surface) as every other homepage CTA on a
 * cream field. No new classes needed for this rework.
 */
export default function HomeChristianSymbols() {
  return (
    <section className="home-recognition" aria-labelledby="home-recognition-heading">
      <div className="home-recognition__inner">
        <div className="home-recognition__header">
          <p className="eyebrow">Christian Symbols</p>
          <h2 id="home-recognition-heading">Scripture Speaks in Symbols</h2>

          <p className="home-recognition__statement">
            <span className="home-recognition__statement-navy">
              A lamp. A path. A flower. A vine. A shepherd.
            </span>
            <br />
            <span className="home-recognition__statement-gold">
              Ordinary things become carriers of meaning.
            </span>
          </p>
        </div>

        <figure className="home-recognition__encounters-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/homepage/encounters-symbols-ship-v3.png"
            alt="A quiet path opening onto calm water, where a sailing ship waits beneath a soft horizon"
            loading="lazy"
          />
        </figure>

        <div className="home-recognition__cta home-recognition__cta--after-image">
          <Link href="/symbols" className="home-coll-cta home-coll-cta--light-surface">
            Explore Christian Symbols <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
