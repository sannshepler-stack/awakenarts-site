import Link from 'next/link'

/*
 * PathOfRecognition — homepage section, "A Path of Recognition."
 *
 * Extracted into its own component 2026-07-26 per Susan's "Consolidate
 * and Refine the Existing 'A Path of Recognition' Section" directive:
 * kept as one reusable, self-contained piece (data + markup together)
 * so it stays easy to reposition on the homepage without duplicating it
 * or hunting through page.tsx for a scattered data array.
 *
 * History: built earlier the same day as a new homepage-only section
 * (see globals.css "HOMEPAGE: A PATH OF RECOGNITION"), replacing the
 * old single-image numbered graphic (recognition-revision.png) that
 * used to live on /collection and /encounters -- both already removed
 * that pass. This revision consolidates the section to a single
 * purpose and a single title:
 *   1. A Path of Recognition (title -- no eyebrow, no secondary
 *      heading of any kind above or beside it)
 *   2. Introductory statement (navy / gold two-line pairing)
 *   3. Short contextual paragraph, centered, restrained max-width
 *   4. The five-image sequence -- image + title only, no descriptive
 *      copy, no gold diamond dividers, no hairline rules, no card
 *      framing. One unified editorial sequence, not five explanatory
 *      cards.
 *   5. Experience the Encounters -- the single next-step CTA.
 *      2026-07-26, per Susan's "CTA Refinement" directive: the framed
 *      .primer-btn--quiet button is removed in favor of the same
 *      typographic .hero-invitation treatment used in the Hero (see
 *      globals.css) -- no border, no button frame, navy text, gold
 *      hover transition. One consistent invitation language across the
 *      homepage; the only difference between the two is the
 *      destination (/primer vs. /encounters).
 *      2026-07-26, later the same day, per her follow-up: no subtitle
 *      line here -- an early draft paired this CTA with a full-sentence
 *      subtitle, but .hero-invitation__subtitle's small-caps tracking
 *      was built for a short label ("AN INTRODUCTION TO AWAKENARTS"),
 *      not a sentence, and read heavy. Rather than invent a second
 *      subtitle treatment, the subtitle is dropped entirely -- the
 *      surrounding statement, intro paragraph, and five-image sequence
 *      already carry the context; the CTA itself stays quiet and
 *      uncluttered, just .hero-invitation__label alone.
 *
 * 2026-07-26, per Susan's "Editorial Refinement — Recognition Section
 * & Shared Section Pattern" directive: the CTA moves from after the
 * five-image sequence to immediately after the introductory paragraph
 * -- "the invitation should occur immediately after the visitor
 * understands the section... the images become the visual affirmation
 * of the invitation rather than a barrier between the copy and the
 * action." Reading order is now: title -> statement -> paragraph ->
 * CTA -> images. This is also now the reference instance for a shared
 * editorial-section rhythm applied elsewhere on the homepage (see
 * globals.css, "AwakenArts Editorial Section Pattern," and the
 * Matthew 13 / Foundation section). The .primer-close-divider gold
 * line that used to sit above this CTA (a closing cue, appropriate
 * when a CTA is a section's last element) is dropped now that the CTA
 * sits mid-section, ahead of the images -- it should read as a
 * continuation of the paragraph above it, not a hard stop.
 *
 * 2026-07-26, per Susan's "Visual Balance & Compositional Refinement"
 * directive: two changes, same reading order as above.
 *   (1) CTA: back to a boxed button, reusing .home-coll-cta -- the
 *       same shared outlined-gold button as "Explore the Collection"
 *       -- rather than the typographic .hero-invitation treatment (see
 *       the now-superseded 2026-07-26 "CTA Refinement" note above).
 *       Typography, padding, border, border-radius, and the hover lift
 *       animation are untouched, reused exactly as she asked.
 *   (2) Spacing: title -> statement and statement -> paragraph gaps
 *       tightened (globals.css, .home-recognition__header h2 and
 *       .home-recognition__statement); CTA -> images gap widened
 *       (.home-recognition__cta) -- shifting the section's visual
 *       center of gravity down toward the five images, per her "let
 *       the images become the dominant element" direction.
 *
 * 2026-07-26, per Susan's "Reuse the Same Button Component, Adapt the
 * Theme" directive: the CTA's color fix above is no longer a one-off
 * override scoped to this section -- .home-coll-cta (globals.css) is
 * now formally a two-theme component ("One button component, two
 * color themes: Dark surface / navy, Light surface / cream"), and this
 * link now carries the explicit .home-coll-cta--light-surface theme
 * class rather than a section-specific modifier name. Same button,
 * same structure everywhere; only the theme differs by surface.
 *
 * Artwork: the five individual images, supplied at
 * /public/images/recognition/Recognition_Path_0{1..5}.png, already in
 * the correct sequence (01 Longing -> 05 The Path). File 02 carries a
 * typo in its own filename ("Recognition_Pathi_02.png") -- referenced
 * as-is rather than renaming an asset outside this pass's scope.
 *
 * 2026-08-07 — briefly held a new methodology statement ("Discover how
 * figurative language promotes recognition and learning."), inserted
 * between the statement and the intro paragraph, per Susan's
 * "Figurative Language Methodology Line" directive. Same day, per her
 * follow-up ("the line of text will work better on the hero section"):
 * removed from here and placed in the Hero instead, after the mission
 * paragraph and before the "The AwakenArts Path" invitation — see
 * page.tsx's Hero section and .hero-method in globals.css. This
 * section reverts to its 2026-07-26 form, unchanged.
 */
export default function PathOfRecognition() {
  return (
    <section className="home-recognition" aria-labelledby="home-recognition-heading">
      {/* 2026-08-19, per the Rework Pass 2 Implementation Standard,
          Susan's second pass: "A Path of Recognition" named a
          mechanism (a path, a practice of recognizing) rather than the
          value underneath it, and no longer matched its own body copy,
          which already leads with story and image, not the word
          "recognition." The heading moved through "What the Facts
          Don't Show," "Uncovering the Stories in Our Lives," and
          "Uncovering the Stories that Shape Us" before settling on
          its final, shortest form: "The Stories that Shape Us" --
          drops "Uncovering" as an unneeded verb and keeps the "shape
          us" language the intro paragraph's own closing sentence and
          the Hero now share, so heading and copy use one consistent
          phrase for the same idea. She also tightened the
          intro paragraph: "our own lives" -> "our lives" (not a
          possessive distinction the sentence needs); "AwakenArts
          begins there, with the images a life has already chosen" ->
          "AwakenArts begins with the images life chooses" (present
          tense, no "there," no indefinite article); and the closing
          sentence rewritten from "Through image, poem, reflection, and
          conversation, what first feels difficult to name gradually
          takes shape" to "through image, poem, and understanding, we
          can name the experiences that shape us." Body statement and
          both CTAs are unchanged. */}
      <div className="home-recognition__inner">
        <div className="home-recognition__header">
          <h2 id="home-recognition-heading">The Stories that Shape Us</h2>

          <p className="home-recognition__statement">
            <span className="home-recognition__statement-navy">
              People tell their stories with facts.
            </span>
            <br />
            <span className="home-recognition__statement-gold">
              They reveal their lives through images.
            </span>
          </p>

          <p className="home-recognition__intro">
            Long before we settle on words, certain pictures return to
            us—in conversation, in memory, and in the stories we tell
            about our lives. AwakenArts begins with the images life
            chooses. And through image, poem, and understanding, we can
            name the experiences that shape us.
          </p>
        </div>

        <div className="home-recognition__cta">
          <Link href="/encounters" className="home-coll-cta home-coll-cta--light-surface">
            Experience the Encounters <span aria-hidden="true">→</span>
          </Link>
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
