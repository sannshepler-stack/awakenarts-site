// Figure Editions — shared data for the Collection page's "Edition Previews"
// section and the individual /editions/[slug] pages.
//
// Add new editions here, in order, as they are completed — both surfaces
// (the Collection page grid and the per-edition page route) read from this
// single array, so no redesign is required as the Collection grows.
export interface Edition {
  slug: string
  title: string
  kicker: string
  contactSheet: string
  contactSheetAlt: string
  pdf: string
  sections: EditionSection[]   // NEW — drives the Reader (Implementation Spec v1.0, Section 3)
  access?: 'free' | 'gated'    // NEW — commerce hook, defaults to 'free', read by nothing in v1.0
  // about / themes — added 2026-06-29 for the Edition Preview page's new
  // About This Edition + Themes sections and the new edition-specific
  // Purchase page (see AwakenArts_Publishing_Platform_Architecture.md,
  // "Evolution: the Purchase Page Becomes Its Own Edition-Specific Page").
  //
  // Governing rule, locked the same day per Susan, after reviewing a first
  // draft that leaned too far into interpretation ("What does the Dragon
  // mean?" rather than "What kind of experience is this edition?"):
  //   - About This Edition -> describes the experience (the format: image
  //     and poem together, guided recognition, reflection, facilitator
  //     notes; how it's meant to be used — personal reading, discussion,
  //     group exploration). Identical in structure across every Edition,
  //     since the underlying 12-page template is now identical across all
  //     six. Only the title varies.
  //   - Themes -> suggests the territory in a few words. Not an
  //     explanation, just a gesture toward what the Edition is about.
  //   - The Edition itself -> does the actual symbolic work. The
  //     website's job is to introduce and orient, not to interpret on the
  //     Edition's behalf.
  // Themes are transcribed/distilled from real authored source material —
  // each Edition's own Workbook "Notes on the Figure" file, the Edition's
  // own PDF text where extractable, or (Dragon) the Edition's own already-
  // transcribed `sections` text — never invented.
  about: string
  themes: string[]
}

// EditionSection — one screen of the paced Reader experience (Implementation
// Spec v1.0, Section 3/5). Each Edition's `sections` array is hand-written,
// not auto-generated from the PDF — see that document for the full rationale
// and the 8-section template (frontispiece, image, encounter, word,
// recognition, reflection, colophon, acquire) this id list follows.
export interface EditionSection {
  id:
    | 'frontispiece'
    | 'image'
    | 'encounter'
    | 'word'
    | 'recognition'
    | 'larger-story'
    | 'reflection'
    | 'journal'
    | 'message-delivered'
    | 'living-message'
    | 'colophon'
    | 'acquire'
  image?: {
    desktop: string
    tablet: string
    mobile: string
    alt: string
  }
  // background — a single decorative full-bleed image behind a text section
  // (added for the Dragon Production revision, 2026-07-12). Unlike `image`,
  // this is not the section's entire content — text still renders on top —
  // so it doesn't need desktop/tablet/mobile art direction, just one
  // reasonably-sized asset with background-size: cover.
  //
  // Two ids override the generic cover-background treatment in
  // EditionReaderSection.tsx: 'journal' positions this art as a bottom-
  // right corner accent (not a full-bleed cover) so it can sit behind real
  // ruled lines rather than under a full page of text; 'colophon' renders
  // it as a bottom-band-only strip that fades into the page rather than a
  // full-page cover. See the Dragon Revision Directive, 2026-07-12.
  background?: string
  // overlayImage — a single piece of authored artwork (e.g. the Dragon
  // poem's own concrete-poem image) composited on top of `background`,
  // with no text field. Added for the Dragon Revision Directive,
  // 2026-07-12, for the Word/Poem page: the poem is real artwork, not
  // HTML text, and the atmospheric background supports it rather than
  // replacing it.
  overlayImage?: {
    src: string
    alt: string
  }
  text?: string   // for Encounter / Word / Recognition / Reflection / Colophon / etc.
}

// contactSheet paths point to web-optimized JPEGs (~1280px wide, ~150-190KB
// each) rather than the print-resolution PNGs the pages were rendered at
// (2320x2216, ~2-2.6MB) — per the "Homepage / Collection Flow Revision"
// directive's image-protection guidance: previews shown in-browser should
// be web-resolution, not print-resolution, assets. The original print PNGs
// remain on disk alongside these but are no longer referenced by the site;
// the actual downloadable product is the full-resolution PDF in
// /files/editions/, untouched by this change.
export const editions: Edition[] = [
  {
    slug: 'dragon',
    title: 'The Dragon',
    kicker: 'Figure Edition No. 01',
    contactSheet: '/images/editions/dragon-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of The Dragon Figure Edition',
    pdf: '/files/editions/Dragon_Figure_Edition.pdf',
    about:
      'This edition presents The Dragon as it was created: image and poem together, followed by guided recognition, reflection, and facilitator notes. It is designed for personal reading, discussion, or group exploration.',
    themes: ['Reconciliation', 'Wholeness', 'Strength and Tenderness', 'Not This or That, but And'],
    // Hand-built per Implementation Specification v1.0, Phase 1. Text is
    // transcribed faithfully from the approved PDF's own participant-facing
    // pages (and, for the colophon, cross-checked against Dragon_Author_Notes.txt's
    // matching "Message Delivered" passage) — never from Dragon_Notes_on_the_Figure.md's
    // Figure Development Catalog, which is explicitly internal, non-participant-facing
    // reference material. Page 5 ("Dragon: A Motif") and page 11 ("Facilitator Notes" —
    // marked NOT FOR PARTICIPANT DISTRIBUTION in the source PDF) have no slot in this
    // 8-section template and are deliberately excluded. See the Implementation Log
    // for both exclusions and the recognition/reflection page-combining decision.
    sections: [
      {
        id: 'frontispiece',
        image: {
          desktop: '/images/editions/dragon/read/frontispiece-desktop.jpg',
          tablet: '/images/editions/dragon/read/frontispiece-tablet.jpg',
          mobile: '/images/editions/dragon/read/frontispiece-mobile.jpg',
          alt: 'Cover page of The Dragon, AwakenArts Figure Edition No. 01 — title over a dark, mist-covered mountain landscape, with the line "Not this or that, but and."',
        },
      },
      {
        // Encounter — revised 2026-07-12 per the Dragon Revision Directive:
        // "Restore the original Encounter artwork. Do not leave this page
        // text-only." Background restores the storm-clouds-parting-to-
        // sunset atmospheric art; layout and text are unchanged.
        id: 'encounter',
        background: '/images/editions/dragon/read/encounter-bg.jpg',
        text: 'Be still. Let the figure arrive before the explanation does.',
      },
      {
        // Figure — reverted 2026-07-12 per the Dragon Revision Directive:
        // "Replace the current figure with the Dragon figure used on the
        // Gallery page. Use the original artwork rather than generating a
        // new dragon." This is the SECOND reversal of this section's art in
        // the same production day — the 2026-07-12 "corrected" pass earlier
        // today had replaced the Gallery figure with the atmospheric
        // "Dragon Fight" field (see the superseded comment this replaces).
        // The Directive is explicit and is today's governing instruction:
        // the Gallery's painted dragon (teal/gold, public/images/editions/
        // dragon-figure.jpg) belongs on the Figure page; the atmospheric
        // "Dragon Fight" field moves to the Poem ('word') section below,
        // as the backdrop for the actual poem artwork. Rendered by
        // EditionReaderSection.tsx at a smaller, matted size (not
        // full-bleed) — at full size this wings-spread piece read as too
        // dominating on the page; the manuscript's own production note for
        // this page already describes it as "the framed watercolor dragon
        // figure on a cream mat," which the matted CSS treatment matches.
        id: 'image',
        image: {
          desktop: '/images/editions/dragon/read/image-desktop.jpg',
          tablet: '/images/editions/dragon/read/image-tablet.jpg',
          mobile: '/images/editions/dragon/read/image-mobile.jpg',
          alt: 'The Dragon — a painted watercolor figure in teal and gold, wings spread, from the AwakenArts Gallery',
        },
      },
      {
        // Word / Poem — rebuilt 2026-07-12 per the Dragon Revision
        // Directive: "Remove the AI-generated poem. Use the original
        // Dragon poem artwork file. Place the poem over the Dragon Fight
        // background. The background supports the poem; it does not
        // replace it. The poem artwork remains the focal point." No `text`
        // field — the poem is real authored artwork (Dragon_Poem_Master.png,
        // confirmed against Susan's reference image: orange "THE DRAGON
        // FLUNG" title, blue body text, red closing lines, transparent
        // background), composited over the atmospheric "Dragon Fight" field
        // that previously (mistakenly, then correctly-but-now-superseded)
        // lived on the Figure page.
        id: 'word',
        background: '/images/editions/dragon/read/word-bg.jpg',
        overlayImage: {
          src: '/images/editions/dragon/read/poem-artwork.png',
          alt: 'The Dragon Flung — the original concrete-poem artwork, dragon-shaped, with orange title, blue body text, and the closing line "Like two sides of a golden coin, the parts were made to live as one." — Susan Ann Shepler',
        },
      },
      {
        // Recognition — revised 2026-07-12 per DRAGON-PRODUCTION.docx.
        // Header uses the approved atmospheric banner (RECOGNITION baked
        // into the art), Workbook 04_Atmosphere/dragon-header-1.png.
        id: 'recognition',
        background: '/images/editions/dragon/read/recognition-bg.jpg',
        text:
          'Recognition\n\n' +
          '"The dragon didn’t seem to know tails and heads are one somehow."\n\n' +
          'Observe\n' +
          'The dragon is not an enemy to be defeated. It is a living metaphor for the ways we become divided within ourselves. What appears to be conflict is often the struggle between the self that strives, judges, and controls, and the self that simply longs to live. The battle is not between two creatures, but within one life that has forgotten its own wholeness.\n\n' +
          '01 · Recognize the Division — A Battle the Dragon Did Not Choose\n' +
          'The dragon did not choose to be divided. Like us, it learned to mistake difference for opposition. Strength and tenderness, action and stillness, discipline and rest were never created to compete. The conflict began when one part believed the other had to lose.\n\n' +
          '02 · Notice the Judge — The Voice That Keeps the Battle Alive\n' +
          'The deepest struggle is not with our thoughts but with the voice that continually measures them. Self-judgment keeps the battle alive by insisting that one part of us must conquer another. Thoughts arise naturally. They are not failures. What softens the division is not resistance, but presence.\n\n' +
          '03 · Return to the Image — The Word That Reconciles\n' +
          'The ampersand reveals the dragon’s true form: not this or that, but and. Presence replaces striving. Recognition quiets judgment. What once appeared divided begins to belong together. The parts were never meant to destroy one another — they were made to live as one.',
      },
      {
        // The Larger Story — new page, added 2026-07-12. Text is the Good
        // Copy master's final, sixteen-times-revised wording (Dragon_Figure_
        // Edition_11_Good_Copy.docx, Page 6), APPROVED and closed 2026-07-07.
        // Susan's own framing of the page: Scripture names the divided
        // condition, Augustine confesses it, the Dragon helps the reader
        // recognize it, Christ alone reconciles it. Approved text is
        // unchanged; a subtle faded background (landscape with sun and
        // moon, blended 72% toward the page cream) was added 2026-07-12 per
        // the Dragon Revision Directive — "Add visual atmosphere. Avoid a
        // plain text presentation."
        id: 'larger-story',
        background: '/images/editions/dragon/read/larger-story-bg.jpg',
        text:
          'The Larger Story\n\n' +
          'Christian Scripture and tradition have long named the divided heart, and the God who alone can unite it.\n\n' +
          'Scripture\n' +
          '"A double minded man is unstable in all his ways." — James 1:8 (KJV)\n\n' +
          'The Christian Tradition\n' +
          '"Thus did my two wills, one new, and the other old, one carnal, the other spiritual, struggle within me; and by their discord, undid my soul." — Augustine, Confessions, Book VIII\n\n' +
          'Augustine’s confession reminds us that the Dragon is not inventing a struggle. The Dragon gives symbolic form to one the Christian tradition has long recognized.\n\n' +
          'Returning to the Dragon\n' +
          'The Dragon gives symbolic form to a human struggle. Scripture names that struggle. Augustine gives voice to the experience of living it.\n\n' +
          'The divided heart is not only the Dragon’s story. It is ours.\n\n' +
          'The Dragon teaches us to recognize the struggle. Scripture reveals the One who reconciles it.\n\n' +
          'Carry that recognition with you — not as confidence in your own insight, but as an invitation to receive more fully the reconciling work of Christ.',
      },
      {
        // Reflection — revised 2026-07-12 per DRAGON-PRODUCTION.docx (five
        // prompts, replacing the prior three-question "Where It Meets You").
        // Banner background added 2026-07-12 per the Dragon Revision
        // Directive — "Add visual atmosphere similar to Recognition. Avoid a
        // plain white page." Uses the same swirl-motif atmospheric art family
        // as Recognition's banner, rendered the same way (a real <img> banner
        // above the text, not a stretched cover background — see
        // EditionReaderSection.tsx's useBanner note).
        id: 'reflection',
        background: '/images/editions/dragon/read/reflection-bg.jpg',
        text:
          'Reflection\n\n' +
          'These questions are an invitation to notice what is already present. There is nothing to conquer, only something to recognize.\n\n' +
          'Where Do I Notice Division Within Myself?\n' +
          'Where in your life have you begun treating two parts of yourself as though one must win and the other must lose? Where might strength and tenderness, action and rest, discipline and grace already belong together?\n\n' +
          'Where Does the Voice of Judgment Appear?\n' +
          'Notice the voice that measures, compares, condemns, or continually asks you to be more than you are in this moment. What happens when you simply recognize that voice without believing everything it says?\n\n' +
          'What Am I Still Trying to Conquer?\n' +
          'Is there a part of yourself you have been resisting, correcting, or trying to overcome? What if it is not asking to be defeated, but understood?\n\n' +
          'What Would "And" Look Like Here?\n' +
          'Rather than choosing one side of yourself over another, what might it look like to hold both with compassion? Where might presence replace striving, and recognition replace judgment?\n\n' +
          'Carry One Recognition With You\n' +
          'As you leave this page, carry one simple recognition into your ordinary life. Notice what changes when you stop fighting yourself and begin paying attention with kindness.',
      },
      {
        // Journal — revised 2026-07-12 per the Dragon Revision Directive:
        // "Separate the arch illustration from the journal lines. Remove
        // ruled lines from the artwork area. Add journal lines only beneath
        // the introductory text. Preserve generous writing space." The
        // full-page journal-bkg.png (ruled lines baked in under the whole
        // page) is replaced with journal-arch.png — the same arch/foliage
        // art, cropped to just the illustration corner and with its baked-in
        // ruled lines erased (vertical blur + alpha feather), rendered by
        // EditionReaderSection.tsx as a bottom-right corner accent rather
        // than a full-bleed cover. Real CSS-drawn ruled lines are rendered
        // beneath the intro text separately, in the open writing space below.
        id: 'journal',
        background: '/images/editions/dragon/read/journal-arch.png',
        text:
          'Journal\n\n' +
          'Choose one recognition from this Edition to carry with you today.\n\n' +
          'You do not need to resolve it. You do not need to fix it. Simply notice what returns to your attention as you move through ordinary life.\n\n' +
          'Often the deepest changes begin, not with certainty, but with quiet recognition.',
      },
      {
        // Message Delivered — split out of the old combined `colophon`
        // section, 2026-07-12, per DRAGON-PRODUCTION.docx. Body copy
        // revised; design retained as specified: navy field, gold
        // ampersand as the page's visual protagonist, no added imagery.
        id: 'message-delivered',
        text:
          'Message Delivered\n\n' +
          'The dragon’s message is not about defeating ourselves, but about recognizing the places where we have become divided.\n\n' +
          'The voice that judges, strives, and condemns cannot create the peace it seeks. What is separated is not healed through greater effort, but through recognition.\n\n' +
          'Presence softens what striving cannot.\n\n' +
          'The parts were never meant to compete.\n' +
          'They were made to live as one.\n\n' +
          'Not this or that.\n' +
          'But and.',
      },
      {
        // Living the Message — new page, added 2026-07-12. Text is Susan's
        // final revision, confirmed 2026-07-12, superseding the Good Copy
        // master's own version of this page. Background: Workbook
        // 04_Atmosphere/living-message.png, faded 55% toward the page
        // cream (re-rendered 2026-07-12 per the Dragon Revision Directive
        // — "Fade the arch behind the text. The arch should function as
        // atmosphere. Do not allow the illustration to dominate the page.")
        id: 'living-message',
        background: '/images/editions/dragon/read/living-message-bg.jpg',
        text:
          'Living the Message\n\n' +
          'Recognition rarely arrives all at once. It continues quietly as we begin to notice the same pattern in ordinary moments. The invitation is not to master the message, but to live with it.\n\n' +
          'What recognition has remained with you?\n' +
          'Where have you begun to notice this pattern in your everyday life?\n' +
          'What changes when you replace judgment with attention?\n' +
          'Where might "not this or that, but and" invite a different response today?\n\n' +
          'There is nothing here to complete.\n' +
          'Simply continue noticing.\n' +
          'Sometimes the smallest recognition becomes the beginning of the deepest change.',
      },
      {
        // Colophon ("About This Edition") — revised 2026-07-12 per
        // DRAGON-PRODUCTION.docx: leads with the AwakenArts wordmark
        // (rendered via the site's own brand asset, not baked into the
        // background), then the collection statement. Background asset
        // changed 2026-07-12 per the Dragon Revision Directive — "Add the
        // watercolor landscape/arch image along the bottom of the page.
        // Fade it naturally into the paper. Let it quietly close the
        // edition." `colophon-band.png` is the bottom ~52% of the original
        // colophon-bg.jpg, with its own top edge alpha-feathered to
        // transparent (pre-composited via PIL, not a CSS mask, so it
        // renders identically in every browser and in the print PDF).
        // EditionReaderSection.tsx positions it flush to the bottom of the
        // section rather than stretching it to a full-page cover.
        id: 'colophon',
        background: '/images/editions/dragon/read/colophon-band.png',
        text:
          'When Language Shapes a Path\n\n' +
          'This Figure Edition is part of the AwakenArts collection.\n\n' +
          'Each Edition stands complete in itself while contributing to a growing body of symbolic exploration through image, poetry, reflection, and conversation.\n\n' +
          'May these works continue to reveal new recognitions as you return to them over time.\n\n' +
          'AwakenArts.com\n' +
          '© 2026 Susan Ann Shepler. All rights reserved.',
      },
      {
        id: 'acquire',
      },
    ],
  },
  {
    slug: 'bowls',
    title: 'Bowls',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/bowls-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Bowls Figure Edition',
    pdf: '/files/editions/Bowls_Figure_Edition.pdf',
    about:
      'This edition presents Bowls as it was created: image and poem together, followed by guided recognition, reflection, and facilitator notes. It is designed for personal reading, discussion, or group exploration.',
    themes: ['Duality of the Feminine', 'Wholeness, Not Repair', "Finding One's Voice", 'The Ordinary as Sacred'],
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'ballerina',
    title: 'Ballerina',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/ballerina-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Ballerina Figure Edition',
    pdf: '/files/editions/Ballerina_Figure_Edition.pdf',
    about:
      'This edition presents Ballerina as it was created: image and poem together, followed by guided recognition, reflection, and facilitator notes. It is designed for personal reading, discussion, or group exploration.',
    themes: ['Movement and Stillness', 'Embodied Wisdom', 'Multiplicity Held as One', 'Trust'],
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'grismere',
    title: 'Grismere',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/grismere-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Grismere Figure Edition',
    pdf: '/files/editions/Grismere_Figure_Edition.pdf',
    about:
      'This edition presents Grismere as it was created: image and poem together, followed by guided recognition, reflection, and facilitator notes. It is designed for personal reading, discussion, or group exploration.',
    themes: ['Conscious Awareness', 'The Hidden Self', 'Mystery Beneath the Surface', 'Psalm 18:16'],
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'poppy',
    title: 'Poppy',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/poppy-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Poppy Figure Edition',
    pdf: '/files/editions/Poppy_Figure_Edition.pdf',
    about:
      'This edition presents Poppy as it was created: image and poem together, followed by guided recognition, reflection, and facilitator notes. It is designed for personal reading, discussion, or group exploration.',
    themes: ['Inheritance', 'Love Carried Forward', 'Recognition', 'Continuity Across Generations'],
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'queen-ann',
    title: 'Queen Ann',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/queen-ann-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Queen Ann Figure Edition',
    pdf: '/files/editions/Queen_Ann_Figure_Edition.pdf',
    about:
      'This edition presents Queen Ann as it was created: image and poem together, followed by guided recognition, reflection, and facilitator notes. It is designed for personal reading, discussion, or group exploration.',
    themes: ['Transition and Relinquishment', 'Pilgrimage', 'Trust Beyond Possession', 'The Kingdom Beyond the One That Ends'],
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
]
