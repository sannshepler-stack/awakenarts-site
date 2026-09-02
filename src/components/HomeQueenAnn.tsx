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
 * 2026-09-02, per Susan's "not sure the dark ann sequence works" /
 * "the two images are juxtaposed" flag, and her approval of Option 1
 * (ink text on cream/parchment, recoloring rather than restructuring):
 * swapped ann-text-dark-crop.png -> ann-text-ink-crop.png. The poem
 * artwork's RGB was solid black with a fully-formed alpha channel
 * (normal font antialiasing, nothing shape/silhouette about it --
 * that was a false lead); it simply hadn't been checked against a
 * proper alpha-composited render, only viewed in a tool that showed
 * raw un-composited pixels, which is why it read as a near-illegible
 * solid black block. Recolored programmatically (black -> var(--ink)
 * #1C2B3A), alpha channel untouched, so every letter's original
 * antialiasing is preserved exactly -- now clean navy ink text,
 * legible against the section's own cream background, sitting
 * comfortably beside queen-ann-still.png's warm sunset palette
 * instead of reading as a flat black rectangle next to it. Old file
 * left on disk, unreferenced, per no-silent-deletion. No CSS changes
 * needed -- .qac-spread__text's existing thin border was already
 * designed to frame this image, and now has real content to frame.
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
              src="/images/forms/ann-text-ink-crop.png"
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
            className="home-coll-cta home-coll-cta--light-surface"
          >
            Download the Poem (PDF)
          </a>
        </p>

      </div>
    </section>
  )
}
