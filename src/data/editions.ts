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
  background?: string
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
        id: 'image',
        image: {
          desktop: '/images/editions/dragon/read/image-desktop.jpg',
          tablet: '/images/editions/dragon/read/image-tablet.jpg',
          mobile: '/images/editions/dragon/read/image-mobile.jpg',
          alt: 'A painted dragon figure in teal and gold tones, wings raised, rendered on a weathered cream ground',
        },
      },
      {
        id: 'encounter',
        text: 'Be still. Let the figure arrive before the explanation does.',
      },
      {
        // Page 4 — Dragon Poem. Revised 2026-07-12 per DRAGON-PRODUCTION.docx:
        // atmospheric watercolor field is now the primary visual (title
        // "The Dragon Fight" baked into the artwork itself), with the
        // dragon reduced to a quiet abstracted accent rather than a full
        // illustration — the figure frames the reading experience instead
        // of interrupting it. Poem text is unchanged; only the artwork
        // behind it changed. Asset: Workbook 04_Atmosphere/dragon-background.png.
        id: 'word',
        background: '/images/editions/dragon/read/word-bg.jpg',
        text:
          'cranked its weight like an iron crane with\n' +
          'its frame, torching breath across the sky\n' +
          'down one side. Dragon claws scored\n' +
          'dragon nails like metal rakes. With\n' +
          'cut and whack, dragon wings\n' +
          'cracked. The steaming\n' +
          'lightning\n' +
          'bolts of hate\n' +
          'shouting sun,\n' +
          'silent moon,\n' +
          'trembling baby stars,\n\n' +
          '"Like two sides of a golden coin, the parts were made to live as one."\n' +
          '— Susan Ann Shepler',
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
        // recognize it, Christ alone reconciles it. Plain text, no
        // background art — none was specified for this page.
        id: 'larger-story',
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
        id: 'reflection',
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
        // Journal — new page, added 2026-07-12 per DRAGON-PRODUCTION.docx.
        // Background: Workbook 04_Atmosphere/journal-bkg.png (ruled lines,
        // archway motif).
        id: 'journal',
        background: '/images/editions/dragon/read/journal-bg.jpg',
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
        // 04_Atmosphere/living-message.png.
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
        // background), then the collection statement. Background:
        // Workbook 04_Atmosphere/colophon-bkg.png.
        id: 'colophon',
        background: '/images/editions/dragon/read/colophon-bg.jpg',
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
