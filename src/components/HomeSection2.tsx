import Image from 'next/image'
import Link from 'next/link'

/*
 * HomeSection2 — "AwakenArts, A Path of Stones" + Workshops, integrated.
 *
 * 2026-08-20, per Susan's "Homepage Section #2 — Integration Job"
 * directive: the homepage's former "AwakenArts, A Path of Stones"
 * section and the former dark "Collection"/Workshops section
 * (home-coll-section — despite its class name, its own h2 already read
 * "Workshops") were never two separate homepage ideas. They are one
 * conceptual movement: recognition -> AwakenArts work -> participation
 * through Workshops. Path of Stones is the premise (ordinary language
 * already carries images we stop noticing); Workshops is the practice
 * (where AwakenArts deliberately works with that same material). This
 * component replaces both former sections with one integrated Section
 * #2, ending the duplication that developed because they were built in
 * separate passes: both independently led to Workshops, both used the
 * same Collection cover image, and Path of Stones alone had grown long
 * enough to erase the homepage's light/dark sectional rhythm.
 *
 * STRUCTURE: one <section>, two internal bands, no border or gap
 * between them — the color change from cream to navy is itself the
 * seam, expressing the internal turn from recognition to participation
 * (explicitly sanctioned by her directive: "a light-to-dark movement
 * may actually help express the internal progression"). Light band
 * carries the premise; dark band carries the practice. This is NOT two
 * homepage sections glued together — one aria-labelledby, one visual
 * unit, one CTA at the very end.
 *
 * CONTENT PRESERVED VERBATIM (per her explicit list): the eyebrow
 * "AwakenArts, A Path of Stones"; the foundational question; the three
 * metaphor examples (wall / crossroads / stepping-stone, in that
 * order); the recognition statement ("The images are already there...
 * ") ; Workshops as the destination; the anchoring fact that each
 * workshop is anchored in a different Figure Edition; the six current
 * workshop worlds (Dragon, Bowls, Ballerina, Grismere, Poppy, Queen
 * Ann); and the route to Workshops (View Current Workshops ->).
 *
 * ECONOMIZED, PER HER EXPLICIT DESIGN DISCRETION: the three metaphor
 * examples no longer render as three stacked list items with individual
 * gloss sentences and dividers (the prior treatment's main source of
 * vertical length). They now run as a single compact line, wall ->
 * crossroads -> stepping-stone, with the same progressive weight
 * treatment as before (muted -> full ink -> gold/medium) carrying the
 * sequence, since the recognition statement immediately after already
 * does the explanatory work the individual glosses used to carry.
 *
 * IMAGE: 2026-08-20, per Susan's follow-up "Homepage Recomposition —
 * Architecture and Asset Placement" directive, which supersedes this
 * component's original image choice below. Her explicit asset map: the
 * Collection BOOK COVER (collection-cover-clean.png, vertical, pale,
 * featuring Ann) belongs here, in the navy Workshops band — it reads
 * well against navy and creates continuity with the Workshops
 * destination page, where the same cover already appears. The
 * Collection COMPILATION (collection-banner-02.png, the wide gallery-
 * wall banner) moved OUT of this component entirely and now lives in
 * HomeQueenAnnCollection.tsx (Homepage Section 2, cream) instead — her
 * explicit instruction was not to confuse the two assets or use either
 * one twice. (Original rationale, superseded: this band briefly used
 * the Compilation instead, reasoning that six framed works better
 * represented "a different Figure Edition" plurality than one cover —
 * corrected per her direct asset-map instruction above.) The light/
 * premise band still carries no image — see the "no image" reasoning
 * below, still accurate.
 *
 * HIERARCHY: per her explicit instruction, "Figure Editions" no longer
 * appears as its own eyebrow/label competing with "Workshops" as though
 * a separate offering (the former home-coll-section's eyebrow read
 * "Figure Editions" above an h2 reading "Workshops" — exactly the
 * competing-category problem she flagged). Workshops is named once, as
 * the practice band's own heading; Figure Edition appears only inside
 * the explanatory sentence, correctly subordinate to Workshops.
 *
 * ONE CTA: "View Current Workshops ->" appears once, at the end of the
 * dark band — the section's single point of arrival, not duplicated at
 * the end of the premise band the way the two former sections each had
 * their own competing CTA to the same destination.
 *
 * Former sections' own CSS (.path-of-stones-*, .home-coll-*) is left in
 * place in globals.css, unused by this component but not deleted this
 * pass — .home-coll-cta itself IS still reused here (it's a shared,
 * multi-page button component, not section-specific) and elsewhere
 * sitewide (Path of Recognition, Encounters, /collection), so it stays
 * untouched either way.
 */
export default function HomeSection2() {
  return (
    <section className="section2" aria-labelledby="section2-heading">
      {/* ── Light band — the premise ─────────────────────────── */}
      <div className="section2-light">
        <div className="section2-light__inner">
          <p className="eyebrow section2-light__eyebrow">AwakenArts, A Path of Stones</p>

          <h2 id="section2-heading" className="section2-question">
            Do we use metaphors so routinely that we stop noticing how
            often images appear in the language we use?
          </h2>

          <p className="section2-examples">
            <span className="section2-examples__item">
              &ldquo;We&rsquo;ve put up walls.&rdquo;
            </span>
            <span className="section2-examples__sep" aria-hidden="true">·</span>
            <span className="section2-examples__item section2-examples__item--mid">
              &ldquo;I&rsquo;m at a crossroads.&rdquo;
            </span>
            <span className="section2-examples__sep" aria-hidden="true">·</span>
            <span className="section2-examples__item section2-examples__item--last">
              &ldquo;It became a stepping stone.&rdquo;
            </span>
          </p>

          <p className="section2-recognition">
            The images are already there. We use them to give shape to
            experiences we are trying to understand.
          </p>
        </div>
      </div>

      {/* ── Dark band — the practice ─────────────────────────── */}
      <div className="section2-dark">
        <div className="section2-dark__inner">
          <div className="section2-dark__image">
            <Image
              src="/images/collection/collection-cover-clean.png"
              alt="AwakenArts Figure Editions — the changing symbolic worlds that anchor the workshops"
              width={1122}
              height={1402}
              className="section2-dark__img"
              loading="lazy"
            />
          </div>

          <h3 className="section2-dark__title">Workshops</h3>
          <p className="section2-dark__sub">
            Each workshop is anchored in a different Figure Edition.
          </p>
          <p className="section2-dark__worlds">
            Dragon &middot; Bowls &middot; Ballerina &middot; Grismere &middot; Poppy &middot; Queen Ann
          </p>

          <Link href="/workshops#current-workshops" className="home-coll-cta">
            View Current Workshops <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
