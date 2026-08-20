/*
 * HomeQueenAnnCollection — Homepage Section 2, "Queen Ann / The Actual
 * Works," cream.
 *
 * 2026-08-20, per Susan's "Homepage Recomposition — Architecture and
 * Asset Placement" directive: this section's job is to let a visitor
 * encounter an actual AwakenArts image-poem, then reveal that it
 * belongs to a larger body of original work.
 *
 * 2026-08-20, later the same day, per Susan's "Reverse It" directive —
 * the section's internal order and header are both reversed from the
 * pass above:
 *
 *   ORDER: the Collection Compilation now leads (was: led with Queen
 *   Ann, Compilation revealed after). Its own baked-in title ("The
 *   AwakenArts Collection") becomes the section's visual heading — it
 *   already says "this is a body of original work" wordlessly, so no
 *   separate large textual heading sits above it. Queen Ann follows,
 *   presented as one selected work from that Collection, considerably
 *   quieter than before (the poem+portrait spread and its title
 *   treatment are both reduced again from the already-reduced first
 *   pass). This gives the section the exact hierarchy Susan asked for:
 *   here is the work -> here is one work encountered more closely ->
 *   this becomes the material the workshops grow from (which
 *   HomeSection2, directly below, carries forward).
 *
 *   HEADER: the former AWAKENARTS / QUEEN ANN / "There is a Kingdom
 *   beyond the one that ends" three-line header (eyebrow, title,
 *   tagline) is removed outright, not just reordered — per Susan's own
 *   question, "whether we need [it] at all once the Compilation
 *   leads." With the Compilation announcing the section, Queen Ann now
 *   needs only a simple, quiet identification underneath it, not a
 *   second full title treatment — see .qac-ann__title in globals.css
 *   (a single small italic serif line, no eyebrow, no separate
 *   tagline). This is a judgment call on exactly how "simple and
 *   elegant" translates to a specific style; flagged for Susan's
 *   review rather than assumed settled.
 *
 * Full readable access to the poem is preserved via the PDF link,
 * unchanged by any of this — only display scale and position moved.
 * No CTA in this section by design, per her earlier explicit
 * instruction not to send the visitor to Workshops prematurely when
 * the next section (Path of Stones -> Workshops) already completes
 * that movement.
 *
 * ASSET NOTE: collection-banner-02.png carries a second, lower caption
 * band baked into the source file ("The Works are the Foundation...
 * Explore the Collection ->") from its original /collection-page use —
 * cropped out here via the same aspect-ratio/object-fit technique used
 * in HomeSection2.tsx, since this section has no CTA of its own and
 * that stale link text would read as a false one. No new imagery
 * generated; same technique, same source file, different display
 * window.
 */

export default function HomeQueenAnnCollection() {
  return (
    <section className="qac-section" aria-label="The AwakenArts Collection">
      <div className="qac-inner">

        <div className="qac-compilation">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/collection/collection-banner-02.png"
            alt="The AwakenArts Collection — poetic encounters in shape, symbol, and story — six framed visual-literary works displayed as a gallery wall"
            className="qac-compilation__img"
            loading="lazy"
          />
        </div>

        <div className="qac-ann">
          <h2 className="qac-ann__title">Queen Ann</h2>

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
