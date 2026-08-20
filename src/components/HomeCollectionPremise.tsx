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
 */

export default function HomeCollectionPremise() {
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

        <div className="qac-premise">
          <p className="eyebrow section2-light__eyebrow">AwakenArts, The Stories that Shape Us</p>

          <h2 id="collection-premise-heading" className="section2-question">
            We use metaphors so routinely that we stop
            noticing how often images appear in the language we use.
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
            our experiences.
          </p>
        </div>

      </div>
    </section>
  )
}
