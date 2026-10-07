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
 *
 * 2026-08-20, later still, per Susan: "Add this to the workshop
 * section instead of the list of poems" -- .section2-dark__worlds'
 * content replaced, the Figure Edition name list (Dragon · Bowls ·
 * Ballerina · Grismere · Poppy · Queen Ann) swapped for a sentence,
 * "Each workshop brings the work into conversation with our own
 * experience." Class name/styling kept as-is (plain serif, quiet
 * cream, mild letter-spacing) since it already suits a short sentence
 * as well as it suited a list -- only the copy changed.
 *
 * 2026-08-24, per Susan's direct instruction ("Workshop section
 * creates orphan wording"): .section2-dark__sub's text replaced again
 * -- "Image and language can reveal what experience has been trying
 * to tell us." -> "...trying to say." Fixes an orphan line the prior
 * wording was producing at some widths. Styling untouched.
 *
 * 2026-09-02, per Susan's "not sure the dark ann sequence works" /
 * "the two images are juxtaposed" concern, approval of Option 1
 * (recolor rather than restructure), and her follow-up "not seeing
 * this in localhost": the recolor had first been applied to
 * HomeQueenAnn.tsx, which this component's own header comment already
 * documents as unused dead code (superseded here since the "Reunite
 * Queen Ann's image and poem" pass) -- so the change was never live.
 * This is the actual rendered pairing. ann-text-dark-crop.png ->
 * ann-text-ink-crop.png: same recolor (black -> var(--ink) #1C2B3A,
 * original alpha/antialiasing untouched, see that file's own header
 * comment for the full technical account), now applied where it's
 * actually seen. .section2-dark__pair-text's page background is pure
 * white (#fff, confirmed by this component's own earlier pixel-
 * sampling comment above) rather than cream, but ink navy text reads
 * just as cleanly on white as on cream, so no color changes were
 * needed beyond the swap itself.
 *
 * 2026-09-02, later the same day, per Susan's follow-up proposal ("we
 * can switch the images... Ann images go on section 2 and the
 * collection image goes on section [3]"), confirmed ("Yes... to get
 * the ann images on a creme background"): the Ann poem+portrait
 * pairing (.section2-dark__pair, the white "book") moves OUT of this
 * section entirely -- to HomeCollectionPremise.tsx (Section 2, cream),
 * unboxed, per her separate "not in a box at all... juxtaposes the
 * queen image by being on the page" direction; see that file's own
 * comment for the full reasoning. In its place, this section now shows
 * the Collection gallery banner (collection-banner-02.png, the same
 * image HomeCollectionPremise.tsx used to open with), reframed for
 * navy with a gold-tinted border/shadow matching this band's own
 * .section2-dark__img convention rather than .qac-compilation's cream-
 * tuned shadow. .section2-dark__pair and its children are left
 * defined, unused, per no-silent-deletion.
 *
 * 2026-09-02, later still, per Susan's "The AwakenArts Collection is
 * far more of a statement than you portray by keeping it non
 * consequentially small... dwarfed by the section 1 hero image --
 * give it some relevance... Add some of the copy beneath it" follow-
 * up: three changes.
 * (1) STRUCTURE -- .section2-dark__collection moves OUT of
 *     .section2-dark__inner (which caps at 640px, shared with the
 *     title/sub/worlds/CTA text column below) to become a direct
 *     child of .section2-dark itself, so it can be sized independently
 *     of that text column instead of being trapped under its cap.
 * (2) SIZE -- max-width 640px -> 800px (a 25% increase, inside her
 *     requested 20-30% range), now that it's free of the 640px
 *     constraint.
 * (3) COPY -- a caption line added beneath the image
 *     (.section2-dark__collection-caption), drawn from the source
 *     file's own baked-in text: its tagline ("Poetic encounters in
 *     shape, symbol & story") and its caption band's opening line
 *     ("The works are the foundation...") -- both cropped out of the
 *     visible image itself (see .section2-dark__collection's own
 *     comment for why), now given back as real, readable copy instead
 *     of staying invisible pixels. Wording is a first draft, flagged
 *     to Susan for adjustment rather than presented as locked.
 *
 * 2026-09-02, later still, per Susan's "The line poetic encounters is
 * unnecessary and blurs the space -- leave some comfortable space
 * below the image for the Workshops to get notice (increase image
 * size by 15%)" directive: the caption paragraph added in the prior
 * pass above is removed from render entirely (not just reworded --
 * she called it unnecessary, not wrong). .section2-dark__collection-
 * caption is left defined in globals.css, unused, per no-silent-
 * deletion. The image itself grows 15% (max-width 800px -> 920px) and
 * now carries its own generous bottom margin directly, replacing the
 * spacing job the caption's margin used to do -- see that rule's own
 * comment in globals.css.
 */
export default function HomeSection2() {
  return (
    <section className="section2" aria-label="Workshops">
      <div className="section2-dark">

        <div className="section2-dark__collection">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/collection/collection-banner-02-opt.jpg"
            alt="The AwakenArts Collection — poetic encounters in shape, symbol, and story — six framed visual-literary works displayed as a gallery wall"
            className="section2-dark__collection-img"
            loading="lazy"
          />
        </div>

        <div className="section2-dark__inner">

          <h3 className="section2-dark__title">Workshops</h3>
          {/* 2026-08-24, per Susan's direct instruction: the prior wording
              ("...trying to tell us.") was producing an orphan line at
              some widths. Replaced with a slightly shorter sentence,
              written on one line here so it isn't broken by a manual
              line break -- responsive wrapping still governs actual
              on-screen line breaks; only the source formatting and the
              copy itself changed.

              Checked against tablet (1024px) and mobile (390px) after
              the swap: the new wording still wrapped with "say." alone
              on its own line at both -- the exact orphan problem
              persisting, just with different final words. Added a
              non-breaking space between "to" and "say." (standard
              orphan-control technique) so those two words always wrap
              together as a pair rather than "say." ever standing alone.
              No visible character is added; this only changes where the
              browser is allowed to break the line.

              2026-08-24, later still, per Susan's follow-up: wording
              swapped again -- "Image and language can reveal what
              experience has been trying to&nbsp;say." -> "Images can
              reveal what experience has been trying to tell us." This
              reintroduces "tell us." at the end, the exact phrase whose
              orphaning motivated the FIRST rewrite. Checked at 1440
              (desktop), 1024/768 (tablet), and 390 (mobile): tablet
              fits on one line at both widths and mobile wraps 5/6 words
              with no orphan, but desktop (1440) wrapped with "us." alone
              on its own second line -- the same problem, relocated to a
              new width. Fixed the same way as before: a non-breaking
              space between "tell" and "us." so those two words always
              wrap together.

              2026-08-24, later still, per Susan's conditional follow-up
              ("If it eliminates the orphan -- use: what experience is
              telling us."): tried "Images can reveal what experience is
              telling us." across all eight widths tested before (1920/
              1440/1280/1024/768/500/390/320). It does NOT clear the bar
              -- one line at 1920 through 768, but "us." lands alone on
              its own line again at 500px. Since the condition ("if it
              eliminates the orphan") isn't met, this wording was not
              adopted; the prior sentence with the "tell&nbsp;us." fix
              (verified orphan-free at all eight widths) stays in place. */}
          <p className="section2-dark__sub">
            Images can reveal what experience has been trying to tell&nbsp;us.
          </p>
          <p className="section2-dark__worlds">
            Each workshop brings the work into conversation with our own experience.
          </p>

          <Link href="/workshops#current-workshops" className="home-coll-cta">
            View Current Workshops
          </Link>
        </div>
      </div>
    </section>
  )
}
