import Image from 'next/image'
import Link from 'next/link'

/*
 * HomeSection2 — Workshops (dark band only).
 *
 * 2026-08-20, per Susan's "Homepage Section #2 — Integration Job"
 * directive: originally built as one integrated section combining
 * "AwakenArts, A Path of Stones" (light/premise band) with this dark
 * Workshops/practice band, replacing two formerly separate homepage
 * sections that both duplicated the same content and CTA. See git
 * history for that pass's full rationale.
 *
 * 2026-08-20, later the same day, per Susan's follow-up "Section Two /
 * Section Three" directive: the Path of Stones light band is pulled
 * back out of this component and moved into HomeCollectionPremise.tsx
 * instead, where it now follows the Collection Compilation directly
 * (Section 2). Queen Ann gets her own dedicated section in between
 * (HomeQueenAnn.tsx, Section 3). This component keeps only the dark
 * Workshops band — now Section 4 in the page's running order — and is
 * otherwise unchanged: same image, same copy, same CTA. The component
 * name is left as HomeSection2 rather than renamed, to avoid unrelated
 * file churn; its role going forward is "Workshops," not "Section 2."
 *
 * CONTENT PRESERVED VERBATIM: Workshops as the destination; the
 * anchoring fact that each workshop is anchored in a different Figure
 * Edition; the six current workshop worlds (Dragon, Bowls, Ballerina,
 * Grismere, Poppy, Queen Ann); and the route to Workshops (View
 * Current Workshops ->).
 *
 * IMAGE: 2026-08-20, per Susan's "Homepage Recomposition — Architecture
 * and Asset Placement" directive: the Collection BOOK COVER
 * (collection-cover-clean.png, vertical, pale, featuring Ann) belongs
 * here, in the navy Workshops band — it reads well against navy and
 * creates continuity with the Workshops destination page, where the
 * same cover already appears. The Collection COMPILATION
 * (collection-banner-02.png, the wide gallery-wall banner) lives in
 * HomeCollectionPremise.tsx instead — her explicit instruction was not
 * to confuse the two assets or use either one twice.
 *
 * HIERARCHY: per her explicit instruction, "Figure Editions" does not
 * appear as its own eyebrow/label competing with "Workshops" as though
 * a separate offering. Workshops is named once, as this band's own
 * heading; Figure Edition appears only inside the explanatory
 * sentence, correctly subordinate to Workshops.
 *
 * ONE CTA: "View Current Workshops ->" — this band's single point of
 * arrival.
 *
 * Former light-band CSS (.section2-light*, .section2-question,
 * .section2-examples*, .section2-recognition) is left in place in
 * globals.css, now reused directly by HomeCollectionPremise.tsx rather
 * than orphaned — see that component's own comment. .section2-dark*
 * below is unchanged. .home-coll-cta remains a shared, multi-page
 * button component reused sitewide.
 */
export default function HomeSection2() {
  return (
    <section className="section2" aria-label="Workshops">
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
