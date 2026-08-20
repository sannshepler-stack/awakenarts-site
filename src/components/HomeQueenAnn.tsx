/*
 * HomeQueenAnn — Homepage Section 3, "Queen Ann," cream.
 *
 * 2026-08-20, per Susan's follow-up "Section Two / Section Three"
 * directive: Queen Ann is pulled out of the combined Compilation
 * section (see HomeCollectionPremise.tsx, now Section 2, which
 * absorbed the Path of Stones premise instead) and given her own
 * dedicated section that follows it. She's presented here exactly as
 * before — a single quiet italic title, the reduced poem+portrait
 * spread, the excerpt line, and the PDF link — just now standing on
 * her own rather than sharing a section with the Compilation image.
 * Reuses .qac-section/.qac-inner (the same cream shell as Section 2)
 * and the existing .qac-ann__title, .qac-spread (and children),
 * .qac-excerpt, .qac-pdf-link classes from the prior pass; no new
 * styling needed.
 *
 * Full readable access to the poem is preserved via the PDF link. No
 * CTA in this section by design — Workshops (practice) follows next.
 */

export default function HomeQueenAnn() {
  return (
    <section className="qac-section" aria-labelledby="qa-heading">
      <div className="qac-inner">

        <h2 id="qa-heading" className="qac-ann__title">Queen Ann</h2>

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
    </section>
  )
}
