/*
 * HomeCollectionPremise — Homepage Section 2, "The AwakenArts
 * Collection / A Path of Stones," cream.
 *
 * 2026-08-20, per Susan's follow-up "Section Two / Section Three"
 * directive, reviewed against a live screenshot of the prior
 * arrangement (Compilation -> Queen Ann -> Path of Stones question, all
 * in sequence): the Path of Stones question ("Do we use metaphors...")
 * becomes part of the Compilation section rather than following Queen
 * Ann — Queen Ann is pulled out into her own section instead (see
 * HomeQueenAnn.tsx, now Section 3). This component is the result: the
 * Collection Compilation (leading, its own baked-in title still doing
 * the section's announcing) directly followed by the Path of Stones
 * premise -- eyebrow, question, the three metaphor examples, and the
 * recognition statement -- as one unified cream section. The idea is
 * that "this is a body of work" (Compilation) and "here is the premise
 * behind it" (Path of Stones) belong together as one thought, with
 * Queen Ann -- one actual work, encountered closely -- as its own
 * distinct next beat.
 *
 * CONTENT: the Path of Stones eyebrow/question/examples/recognition
 * copy is moved here verbatim from HomeSection2.tsx's former light
 * band -- see that file's own updated comment for what it now
 * contains instead (the Workshops dark band only). Typography classes
 * (.section2-question, .section2-examples*, .section2-recognition,
 * .section2-light__eyebrow) are reused as-is; only the surrounding
 * section shell changed -- see .qac-premise in globals.css for the
 * plain wrapper that replaces .section2-light's own background/
 * padding/border-top (no longer needed now that this content shares
 * .qac-section's single cream field with the Compilation above it,
 * rather than sitting in its own separately-bordered band).
 *
 * ASSET NOTE: collection-banner-02.png carries a second, lower caption
 * band baked into the source file ("The Works are the Foundation...
 * Explore the Collection ->") from its original /collection-page use —
 * cropped out here via the same aspect-ratio/object-fit technique used
 * elsewhere on the homepage. No new imagery generated.
 *
 * 2026-08-20, later the same day, three copy-only revisions from
 * Susan, no structural/markup change:
 * 1. Eyebrow: "AwakenArts, A Path of Stones" -> "AwakenArts, The
 *    Stories that Shape Us" (wording change only; the "Path of
 *    Stones" name persists elsewhere in the codebase's own history
 *    comments and in unrelated code, e.g. workshops/page.tsx's own
 *    comment referencing this section by its old name — left as-is,
 *    those are dated log entries, not live copy).
 * 2. Heading: no longer a question. "Do we use metaphors so routinely
 *    that we stop noticing how often images appear in the language we
 *    use?" -> "We use metaphors so routinely that we stop noticing how
 *    often images appear in the language we use." (dropped "Do we,"
 *    dropped the question mark; .section2-question's styling is
 *    otherwise untouched and still reads as the section's most
 *    prominent statement).
 * 3. Closing line, tightened: "The images are already there. We use
 *    them to give shape to experiences we are trying to understand."
 *    -> "The images are already there. We use them to give shape to
 *    our experiences."
 *
 * 2026-08-24, per Susan's "Homepage Revision Directive" (Section 3, the
 * locked "You already speak in images" USP statement; Section 8, the
 * Keep/Remove/Revise/Relocate editorial principle): the heading above
 * is revised to the new locked statement (see its own inline comment),
 * and the former closing line is removed as now-redundant with it. The
 * three example quotes and the Compilation image are unchanged.
 *
 * 2026-08-24, later the same day, per Susan's "CLAUDE DIRECTIVE --
 * HOMEPAGE REVISION": the heading's locked wording is superseded again
 * -- one combined sentence now replaces both this section's prior
 * statement and the separate Further Understanding section's own
 * sentence (that section is retired in page.tsx). Gallery banner image
 * confirmed to stay -- explicitly not replaced with the crossroad or
 * Recognition_Path imagery considered earlier. See the heading's own
 * inline comment for the full wording rationale.
 *
 * 2026-09-02, per Susan's "we can switch the images... Ann images go
 * on section 2 and the collection image goes on section [3]" proposal,
 * confirmed with "Yes... to get the ann images on a creme background":
 * the Collection gallery banner that opened this section moves OUT to
 * HomeSection2.tsx (Section 3, navy) -- see that file's own comment.
 * In its place, this section now opens with the Queen Ann poem +
 * portrait pairing, formerly boxed as a white "book" on the navy band.
 * Per her separate direction ("the ann image (poem) is not in a box at
 * all but juxtaposes the queen image by being on the page"), the poem
 * is NOT reboxed here -- ann-text-ink-crop.png's own transparent
 * background sits directly on this section's cream field (.qac-ann-
 * spread__poem, no border/background of its own), genuinely on the
 * page rather than packaged in a card; the portrait keeps a quiet thin
 * frame (.qac-ann-spread__portrait), echoing the original pre-"book"
 * .qac-spread__frame treatment this pairing used before it moved to
 * navy. .qac-compilation/.qac-compilation__img are left defined,
 * unused, per no-silent-deletion.
 */

export default function HomeCollectionPremise() {
  return (
    <section className="qac-section" aria-label="The AwakenArts Collection">
      <div className="qac-inner">

        <div className="qac-ann-spread">
          <div className="qac-ann-spread__poem">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/forms/ann-text-ink-crop.png"
              alt="Queen Ann — the poem, rendered in concrete poetry form"
              className="qac-ann-spread__poem-img"
              loading="lazy"
            />
          </div>
          <div className="qac-ann-spread__portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/forms/queen-ann-still.png"
              alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
              loading="lazy"
            />
          </div>
        </div>

        <div className="qac-premise">
          <p className="eyebrow section2-light__eyebrow">AwakenArts, The Stories that Shape Us</p>

          {/* 2026-08-24, per Susan's "Homepage Revision Directive," Section
              3: this heading previously read "We use metaphors so routinely
              that we stop noticing how often images appear in the language
              we use." -- already doing nearly the same job as the new
              locked USP statement (recognizing that everyday language is
              full of image). Rather than add a separate section for the USP
              statement and leave this one standing beside it -- two
              statements making the same point -- the locked statement
              replaces this heading directly. A Revise, not an addition, per
              her own Section 8 editorial principle.

              2026-08-24, later the same day, per Susan's "CLAUDE DIRECTIVE
              -- HOMEPAGE REVISION": that first locked sentence ("AwakenArts
              takes that familiar relationship between image and language
              and explores what it can reveal.") is itself superseded --
              along with the separate "Further Understanding" section's own
              sentence ("AwakenArts explores what is familiar to us, while
              opening the way to further understanding.") -- by ONE new
              combined locked sentence, below. Her explicit language intent:
              brings image and language into conversation (the method),
              begins with familiar images, explores rather than instructs or
              imposes meaning, and "opens the way" (deliberately not "create
              a way") toward further understanding. This is now the single
              statement doing that job on the homepage -- see page.tsx for
              the standalone Further Understanding section's retirement. */}
          <h2 id="collection-premise-heading" className="section2-question">
            You already speak in images. We all do. AwakenArts brings
            image and language into conversation, exploring familiar
            images to open the way to further understanding.
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

          {/* 2026-08-24, same pass: the former closing line ("The images
              are already there. We use them to give shape to our
              experiences.") is removed -- it restated the same claim the
              new opening statement above now makes directly, so the section
              was repeating itself top and bottom. The three examples are a
              sufficient closing beat on their own. Flagged to Susan as a
              Remove, not assumed silently. */}
        </div>

      </div>
    </section>
  )
}
