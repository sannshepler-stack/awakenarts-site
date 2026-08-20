import Image from 'next/image'
import Link from 'next/link'

/*
 * HomeSection2 — Workshops + Queen Ann.
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
 * section and into this one. Her reasoning: Ann is a Figure Edition/
 * workshop world, so she can demonstrate what the workshop material
 * actually looks like instead of interrupting the Collection -> Path
 * of Stones progression with a floating third homepage chapter. "She
 * becomes the concrete example: one of those different worlds looks
 * like this." The page is now three movements after the Hero, not
 * five: THE WORK (HomeCollectionPremise) -> THE EXPERIENCE (this
 * component) -> THE SCRIPTURAL FIELD (HomeChristianSymbols, which now
 * also absorbs Matthew — see that component's own comment).
 *
 * STRUCTURE: one <section>, two bands. Navy carries the invitation —
 * book cover, "Each workshop opens a different world...," the six
 * Figure Edition names, and the CTA ("View Current Workshops ->"),
 * unchanged from the prior pass, in that order per Susan's explicit
 * sequence ("Then the Figure Edition names and CTA. Queen Ann follows
 * as part of this workshop movement"). Cream carries Ann herself,
 * directly beneath — reuses .qac-section/.qac-inner and the existing
 * .qac-ann__title/.qac-spread/.qac-excerpt/.qac-pdf-link classes
 * verbatim from HomeQueenAnn.tsx (now unused, left in place per the
 * standing no-silent-deletion practice), just retitled from h2 to h3
 * since Ann is no longer her own document section, and CTA-less as
 * before. COLOR CHOICE (Susan's explicit discretion: "I would let
 * Claude determine whether Ann remains within navy or transitions
 * back to cream, but conceptually she belongs to Workshops"): cream —
 * her poem+portrait spread, text card, and PDF link were all
 * originally designed against a light field, and a light/dark/light
 * rhythm reads Workshops-the-invitation (navy, CTA-driven) and
 * Ann-the-example (cream, quiet, close reading) as two different
 * postures within one movement, rather than trying to force her
 * onto navy. Flagged here as a judgment call, not an assumed
 * settlement.
 *
 * IMAGE: the Collection BOOK COVER (collection-cover-clean.png)
 * belongs in the navy band — see prior pass's comment for the full
 * asset-map rationale. Unchanged.
 *
 * Former light-band CSS (.section2-light*, .section2-question,
 * .section2-examples*, .section2-recognition) remains in place,
 * reused by HomeCollectionPremise.tsx. .section2-dark* is unchanged.
 */
export default function HomeSection2() {
  return (
    <section className="section2" aria-label="Workshops">
      {/* ── Navy band — the invitation ───────────────────────── */}
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
            Each workshop opens a different world of image, poetry, story, and reflection.
          </p>
          <p className="section2-dark__worlds">
            Dragon &middot; Bowls &middot; Ballerina &middot; Grismere &middot; Poppy &middot; Queen Ann
          </p>

          <Link href="/workshops#current-workshops" className="home-coll-cta">
            View Current Workshops <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* ── Cream band — the example ──────────────────────────
          Queen Ann, demonstrating what one workshop world actually
          looks like. Not a new independent chapter — see this file's
          own header comment. */}
      <div className="qac-section">
        <div className="qac-inner">

          <h3 className="qac-ann__title">Queen Ann</h3>

          <div className="qac-spread">
            <div className="qac-spread__text">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text-dark-crop.png"
                alt="Queen Ann — the poem, rendered in concrete poetry form"
                className="qac-spread__poem-img"
                loading="lazy"
              />
            </div>
            <div className="qac-spread__frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/queen-ann-still.png"
                alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
                loading="lazy"
              />
            </div>
          </div>

          <p className="qac-excerpt">
            when the night strikes with silver light&hellip;
          </p>
          <p className="qac-pdf-link">
            <a
              href="/files/poems/Queen_Ann_Poem.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the Poem (PDF) <span aria-hidden="true">→</span>
            </a>
          </p>

        </div>
      </div>
    </section>
  )
}
