import Link from 'next/link'

/*
 * HomeSection2 — Workshops, with Queen Ann as its opening example.
 *
 * 2026-08-20, per Susan's "Homepage Section #2 — Integration Job"
 * directive: originally built as one integrated section combining
 * "AwakenArts, A Path of Stones" (light/premise band) with this dark
 * Workshops/practice band. See git history for that pass's rationale.
 *
 * 2026-08-20, later the same day, per Susan's "Section Two / Section
 * Three" directive: the Path of Stones light band moved out to
 * HomeCollectionPremise.tsx; Queen Ann got her own dedicated section
 * (HomeQueenAnn.tsx) between this component and the Compilation.
 *
 * 2026-08-20, later still, per Susan's "revise the architecture"
 * directive: Queen Ann moves again — out of her own independent
 * section and into this one, in cream directly beneath the navy band.
 *
 * 2026-08-20, later still, per Susan's "Workshops / Queen Ann
 * adjustment" directive: Ann's portrait alone (queen-ann-still.png)
 * replaced the Collection Book Cover at the top of the navy band; the
 * cream band beneath kept the poem card/excerpt/PDF link on their own,
 * separated from the portrait.
 *
 * 2026-08-20, later still, per Susan's "Reunite Queen Ann's image and
 * poem in the navy Workshops section" directive: the portrait-alone
 * treatment split one work into two disconnected fragments (portrait
 * in navy, poem in cream) — she asked why they weren't beside each
 * other. Fixed by reuniting them as a single small paired presentation
 * at the top of the navy band: the poem card and the portrait, side by
 * side, "one compact example of an AwakenArts image-poem work... not
 * the headline." The cream band is removed entirely — its content
 * (title, poem card, excerpt, PDF link) is now redundant with the
 * navy pairing, so keeping it would put Queen Ann on the homepage
 * twice. HomeQueenAnn.tsx remains unused in the codebase, per
 * no-silent-deletion, as the only place that content still exists in
 * full (poem excerpt + PDF link included), should it be needed again.
 *
 * SEQUENCE, per Susan: "Here is an image-poem work -> this work
 * becomes a workshop experience -> explore the workshops" — the pair,
 * then Workshops' own title/sub/worlds/CTA, unchanged, below it.
 *
 * SIZE: the pair is deliberately smaller than either the former
 * single 200px portrait or the original cream spread (480px) — "not
 * dominate the Workshops section or recreate the former Queen Ann
 * feature," while still large enough that the poem's shaped form
 * registers. See .section2-dark__pair in globals.css. No title/label
 * is added above or below the pair itself — Workshops' own heading
 * carries the section, and "Queen Ann" already appears in the worlds
 * list; a second label would start to rebuild the feature this pass
 * is explicitly avoiding.
 *
 * The former .section2-dark__portrait (single-image) treatment and
 * the cream band's .qac-poem-solo/.qac-spread__text usage are both
 * superseded by this pass — left defined in globals.css, unused, per
 * no-silent-deletion.
 *
 * 2026-08-20, later the same day, per Susan's "Make the queen ann
 * image 40% larger and put both pages/images on a background that
 * matches the poem background and make it look like a book" follow-
 * up: the pair grows 40% as a unit (portrait and poem card already
 * shared one aspect ratio and size, so scaling both keeps them equal-
 * height "pages") and the two separately bordered/shadowed cards
 * become one continuous white "book" surface with a spine shadow at
 * the seam. No JSX/markup change was needed for this pass — same two
 * images, same structure, only .section2-dark__pair and its children
 * in globals.css changed. See that rule's own comment for the full
 * reasoning, including the pixel-sampling that confirmed the poem
 * card's true background is white, not var(--cream).
 *
 * 2026-08-20, later still, copy-only change: .section2-dark__sub's
 * text replaced -- "Each workshop opens a different world of image,
 * poetry, story, and reflection." -> "Image and language can reveal
 * what experience has been trying to tell us." Styling untouched.
 */
export default function HomeSection2() {
  return (
    <section className="section2" aria-label="Workshops">
      <div className="section2-dark">
        <div className="section2-dark__inner">

          <div className="section2-dark__pair">
            <div className="section2-dark__pair-text">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text-dark-crop.png"
                alt="Queen Ann — the poem, rendered in concrete poetry form"
                className="section2-dark__pair-poem-img"
                loading="lazy"
              />
            </div>
            <div className="section2-dark__pair-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/queen-ann-still.png"
                alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
                loading="lazy"
              />
            </div>
          </div>

          <h3 className="section2-dark__title">Workshops</h3>
          <p className="section2-dark__sub">
            Image and language can reveal what experience has been trying to tell us.
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
