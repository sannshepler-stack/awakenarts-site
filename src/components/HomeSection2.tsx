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
 * section and into this one, in cream directly beneath the navy band.
 *
 * 2026-08-20, later still, per Susan's "Workshops / Queen Ann
 * adjustment" directive: Ann is pulled further into the navy band
 * itself, not just placed after it. The Collection BOOK COVER
 * (collection-cover-clean.png) at the top of the navy band is replaced
 * with Ann's own portrait (queen-ann-still.png) — restrained in size
 * ("she is an example of the work, not a new hero image"), so the
 * visitor sees Ann herself, not the book, as Workshops' opening image.
 * Workshops' own language (title, sub, worlds list, CTA) is unchanged.
 * The portrait crops the same 2:3 frame / object-fit: cover treatment
 * already proven on this exact image in the cream band's spread below
 * (same source file, same crop, no new imagery), just narrower
 * (200px vs. the book cover's former 260px) to keep her restrained.
 *
 * The cream band beneath now drops its own copy of the portrait — "Ann
 * is now visually integrated into Workshops," so showing her twice in
 * one movement would be redundant. The poem text card (ann-text-dark-
 * crop.png), excerpt, and PDF link remain, per Susan's explicit "do
 * not discard the Queen Ann poem material yet... leave the poem/
 * excerpt/PDF content available" instruction — this material's
 * long-term fate (stay as a smaller example, or come off the homepage
 * entirely) is still an open decision, not made here. See
 * .qac-poem-solo in globals.css for the wrapper that centers the
 * poem card alone now that it's no longer paired with the portrait in
 * a two-column grid; .qac-spread/.qac-spread__frame (the portrait
 * half of that grid) are left defined, unused, per no-silent-deletion.
 *
 * IMAGE ASSET MAP NOTE: the Collection BOOK COVER no longer appears
 * anywhere on the homepage as of this pass — it was previously this
 * band's own image. It remains in use on /collection and /workshops.
 */
export default function HomeSection2() {
  return (
    <section className="section2" aria-label="Workshops">
      {/* ── Navy band — the invitation ───────────────────────── */}
      <div className="section2-dark">
        <div className="section2-dark__inner">
          <div className="section2-dark__portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/forms/queen-ann-still.png"
              alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
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

      {/* ── Cream band — the poem, still available ────────────
          Portrait removed (now integrated above, in navy). Poem card,
          excerpt, and PDF link remain while their long-term homepage
          fate is still undecided — see this file's own header comment. */}
      <div className="qac-section">
        <div className="qac-inner">

          <h3 className="qac-ann__title">Queen Ann</h3>

          <div className="qac-poem-solo">
            <div className="qac-spread__text">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text-dark-crop.png"
                alt="Queen Ann — the poem, rendered in concrete poetry form"
                className="qac-spread__poem-img"
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
