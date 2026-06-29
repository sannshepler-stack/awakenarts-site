# AwakenArts Publishing Platform — Architecture (Phase One)

**Status: proposal, pending review.** Nothing in this document has been implemented. Per the directive that opened this phase, this is architecture only — no code, no routes, no components have been written. The Site Architecture doc and Editorial Typography Standard already locked govern how anything here would eventually be built; this document governs what gets built and how it relates.

**The governing claim (2026-06-29, per Susan).** AwakenArts began as a body of symbolic creative work. It is becoming a marketing platform for that body of work — built to sustain, present, and grow an audience around it for years, not just to host it. Every task in this document, and in the Implementation Specification and Implementation Log that now follow from it, is judged against that claim: does it make the work easier to discover, read, return to, and eventually support.

**Document hierarchy.** This document, the Implementation Specification, and the Implementation Log are now three distinct, deliberately separate tiers, not drafts of one another:
- **Publishing Platform Architecture** (this document) — the vision and governing principles. What gets built, and why.
- **Implementation Specification** — the technical blueprint. How a given capability gets built, in concrete, reviewable detail.
- **Implementation Log** — what has actually been built against a given Specification, and what remains. The record of reality, kept separate from the plan.

Each tier is preserved once complete, not silently rewritten — later changes are issued as new versions (v1.1, v2.0) or new dated entries, appended rather than overwriting what came before.

**How this document is grounded.** Before drafting, I read the current codebase rather than designing from a blank page: `src/data/editions.ts` (the six live Figure Editions), `src/app/editions/[slug]/page.tsx` (the current minimal Edition page), `src/app/collection/page.tsx`, `src/app/encounters/page.tsx` and the legacy figure-tied Encounter pages still in the repo, `src/app/poems/page.tsx`, the Journal's territory/entry system, and `src/app/workshops/page.tsx`. Three things that came out of that reading shape everything below, and are worth stating up front:

1. **A Figure Edition page already exists** at `/editions/[slug]` — title, contact sheet, a link out to the PDF, a link back to Collection. It is real but thin. Task 2 below is the template for what it should become.
2. **"Dragon" currently names two different things in the codebase**: the new Dragon Figure Edition (the PDF, numbered Edition No. 01 — the most mature Edition on the site) and an older, separate `/encounters/dragon` page — an autoplaying-video page with a different tone (a Scripture verse, observation/reflection prompts) that predates the current Encounters system and was deliberately set aside, not deleted, when Encounters became atmospheric rather than figure-tied. This is a real naming collision and Task 2 proposes a resolution, flagged for your review.
3. **No purchasing mechanism exists anywhere on the site.** Every Edition PDF is currently free to view and download, ungated. The "Purchasing" and "purchase location" Susan asked for in Tasks 2 and 3 are therefore genuinely new architecture, not a retrofit — and the document flags the open question of what "purchasing" should even mean here (a paid tier, or a free Edition with an optional way to own a print or support the work) rather than assuming an answer.

---

## Task 1 — Publishing Architecture

### The governing idea

**The Figure Edition is the master publication.** Every other page on the site is either a *doorway into* an Edition, a *fragment of* an Edition, or a *return path from* an Edition. Nothing else on the site is a competing complete version of a figure's story — Poems, Encounters, and Journal entries all gesture toward an Edition; only the Edition itself is the whole thing.

This is already true in spirit — the Collection page's own copy says it outright: *"The works are the foundation. Everything else grows from them."* Task 1 makes that explicit as the organizing principle for the whole site, not just the Collection page's framing.

### Site architecture today, and what changes

The current top-level structure (Home, Encounters, Collection, Poems, Journal, About — plus the unlisted Workshops and the per-Edition pages already living under Collection) does not need to change. No new item belongs in the primary navigation or the Wayfinding Band. The architecture below is about *deepening the relationships between pages that already exist*, not adding new top-level destinations.

```
                              FIGURE EDITION
                         (the master publication)
                                    |
        +---------------+----------+----------+---------------+
        |               |          |           |               |
     Poems          Encounters   Journal    Workshops      Collection
   (a sample,      (an atmospheric (the symbol,  (the figure as     (the library —
   one excerpt      doorway in,    not the       teaching          where every
   + image, with    not figure-    edition,      material — the    Edition lives
   "View the         specific)     explored as   figure as a       side by side)
   Edition" out)                   contemplative method, not as
                                   practice)      narrative)
        \               |          |           |               /
         \              |          |           |              /
          +-------------+----------+-----------+-------------+
                                    |
                          back to the EDITION
                        (the only complete version)
```

**Content hierarchy.** Reading top to bottom, from least to most complete:

- *The Work* — the original visual-literary piece itself. The reason any of this exists.
- *The Figure Edition* — the Work, fully published: image, text, poem, reflection, in finished form. The master publication.
- *Derivative touchpoints* — a Poems tile (one excerpt + one image), an Encounter (an atmospheric mood, not tied to any one figure), a Journal entry (the figure's symbol, treated as a subject for reflection, independent of its Edition's specific story), a Workshop session (the figure used as teaching material for a group). Each of these is real and valuable on its own terms, but each is partial by design, and each should make it easy to go to the Edition for the whole thing.

**Navigation philosophy.** The primary nav is organized by *mode of engagement* — how a visitor wants to spend their time (encounter something atmospheric, browse the library, sample a poem, reflect on a symbol) — not by *which figure* they want. Figures live one layer down, as the content found inside those modes. This is consistent with the decision already made for Encounters (explicitly not figure-tied) and should now be treated as the standing rule for the whole site, not a one-off: AwakenArts navigates by *kind of experience*, and a visitor arrives at a specific figure by descending into one of those experiences, never by choosing a figure from a top-level menu.

**Publishing philosophy.** A publishing house puts one canonical edition of a work into the world and lets shorter pieces — reviews, excerpts, study guides — point back to it. AwakenArts should behave the same way. Practically: every page that touches a figure (a Poems tile, a Journal entry, a Workshop reference) should carry a visible path back to that figure's Edition. No page should try to *retell* the Edition in miniature; it should *point toward* it.

**Reader journey.** The site already has the right model for this, used identically on both Collection and Encounters: **A Path of Recognition** — Longing → Recognition → The Figure → The Word → The Path. Rather than invent a separate "reader journey" framework for this document, Task 1 maps the real site onto the model that's already locked:

| Step | What it means | Where it happens today |
|---|---|---|
| Longing | The visitor arrives wanting something they can't quite name | Homepage, the atmospheric entry into Encounters |
| Recognition | Something in the work meets them | The five Encounter movements; the Journal's symbolic territories |
| The Figure | A specific image takes shape | Poems preview tiles; the Collection's Edition grid |
| The Word | The work speaks in language | Reading the Figure Edition itself — the deepest point in the journey |
| The Path | The visitor carries it forward | Workshops, return to Collection for the next Edition, the free Encounter Journal as a take-with-you companion |

The Figure Edition sits at "The Word" — the center of the journey, not a side door. Every other page either leads toward it or leads away from it afterward.

---

## Task 2 — Figure Edition Specification (Dragon as prototype)

This is the publishing template — the shape every completed Edition should take, regardless of which figure it is. It is not specific Dragon content; it is the structure Dragon (and the other five) should be checked against and, eventually, extended to fill.

### Resolving the Dragon naming collision (flagged for review)

Before specifying the template, the collision needs a stated direction, because it affects what "Encounter" means inside the template below. Recommendation: **retire the old `/encounters/dragon` page (and its siblings vase/queen/butterfly) as a standalone route**, and treat what it was trying to do — a contemplative pause with the figure, framed by a short piece of text — as a *section inside the Figure Edition itself* (see "The Encounter," below) rather than a separate page living outside the Edition entirely. This keeps "Encounter" meaning one consistent thing site-wide: the atmospheric, non-figure-tied entry points at `/encounters`, full stop. The old pages stay set aside in the codebase (already true today) until you confirm whether to formally delete them or keep them dormant.

### The Figure Edition template

A completed Edition, in reading order:

1. **Frontispiece** — kicker ("Figure Edition No. —"), title, nothing else. The visitor's first impression of the work, uncluttered.
2. **The Image** — the figure's artwork, given full visual weight before any text intervenes.
3. **The Encounter** — a short, contemplative passage that frames the figure: what it is, why it matters, sometimes anchored by a single line of Scripture or text (the existing Dragon page's use of James 4:7 is the right register for this, just relocated here from its own standalone page).
4. **The Word** — the figure's poem or core text, presented as its own spread.
5. **Recognition** — one or more numbered passages (the Queen Ann Edition's "Recognition I" is the existing precedent) that draw out meaning from the image and the text together.
6. **Reflection** — a small set of prompts for the reader, written to lead naturally into the Journal entry for the same figure (see below) rather than duplicating it.
7. **Colophon** — credits, copyright, the Edition's place in the wider Collection.
8. **Acquire** — download and (pending the open question below) purchase, placed last, after the work has made its impression rather than before.

### How the Edition relates to each surface Susan named

- **Encounter.** Per the resolution above, the Edition's own "The Encounter" section absorbs what the old figure-tied pages were doing. The standalone `/encounters` pages remain a separate, earlier, non-figure-tied doorway — they bring a visitor *toward* the Collection in general, not toward any specific Edition.
- **Journal.** Each figure should have a corresponding Journal entry (Dragon already does, filed under "Power & Identity," with its own orientation/reflection/art prompts). The relationship is two-way: the Edition's "Reflection" section should link out to "Continue in the Journal," and the Journal entry should link back with "View the Dragon Figure Edition." The Journal entry is the figure considered as a symbol, independent of plot; the Edition is the figure as a complete published work. Neither replaces the other.
- **Related Figures.** Not present on the Edition page today. Recommend adding a closing strip — two or three other Editions, in the same premium-card treatment already used on Collection — so an Edition page never dead-ends; it always offers a next Edition.
- **Collections.** The relationship is library-to-book. The Collection page is where every Edition lives side by side (already built, already working well); the Edition page is the detailed read of one of them. No change needed to Collection's structure — it already presents the Editions before any explanation, which is the right instinct for a library.
- **Workshops.** Workshops should treat Editions as primary material — a session built around Dragon should name and link to the Dragon Edition directly, rather than describing the figure generically. Currently the Workshops materials are figure-agnostic teaching method; recommend each session's curriculum reference specific Editions by name as it's adapted for use going forward.
- **Purchasing.** This is the one relationship with no existing site behavior to anchor to. Open question for your review: is a Figure Edition meant to stay free-to-read-and-download indefinitely, with "purchasing" meaning something like a printed edition or a voluntary support option — or is a paid tier intended? The template above places "Acquire" as one combined closing section so either answer fits without restructuring the page; the actual mechanism is a decision for you to make before Task 3's "purchase location" can be built.

---

## Task 3 — Digital Reader Specification

### Objective

A reading experience, not a PDF viewer and not a flipbook. The visitor should feel like they opened a beautifully designed book, not that they're looking at an embedded document. Concretely, that means: one section in view at a time, deliberate pacing through the template above, generous space, and no visible PDF-viewer chrome (page-count widgets, zoom controls, toolbars) anywhere in the experience.

### Where it lives

Recommend the existing `/editions/[slug]` page stay exactly what it is today — the Edition's *landing page* (now enriched per Task 2's template) — and the reading experience live at a new address one level deeper, e.g. `/editions/[slug]/read`. That keeps "browse this Edition's cover and choose to begin" and "read this Edition" as two distinct, appropriately different experiences, rather than asking one page to be both a showcase and a reader.

### Reading flow and navigation

The reader advances through the template's sections in order — Frontispiece, Image, Encounter, Word, Recognition, Reflection, Colophon — one section filling the screen at a time, advanced by a simple forward/back control (arrow, swipe, or tap-edge depending on device) rather than continuous scroll. This mirrors how a printed Edition is actually experienced — turning from one composed page to the next — without simulating a literal page-curl animation, which would tip the experience toward novelty rather than restraint.

### Desktop layout

A centered reading column, using the site's existing `--measure-medium` width for text-led sections and a wider frame for the Image section so the artwork isn't constrained to body-copy width. A minimal top bar holds only the Edition title and a way back out — no persistent navigation chrome competing with the page itself while reading.

### Tablet layout

The same sequential, one-section-at-a-time model as desktop, narrowed to a single column with reduced side margins. No layout behavior changes between desktop and tablet beyond column width — only mobile gets a structurally different treatment, below.

### Mobile layout

Full-bleed treatment for image-led sections; text sections keep generous top/bottom breathing room rather than shrinking type to fit more on screen (consistent with the Editorial Typography Standard's readability-first floor). Advance by swipe or a simple tap-to-continue affordance.

### Progress

A quiet position marker rather than a conventional progress bar — something closer to an editorial page cue ("II of VII," matching the Edition's own section count) than a loading-style indicator. It should be visible enough to orient the reader, never prominent enough to compete with the page itself.

### Return navigation

While reading, the full Wayfinding Band would be too much — it belongs to "I've finished a page's content," not to mid-read. Recommend a single, minimal "← [Edition Title]" anchor instead, present but quiet throughout the reading experience. The full Wayfinding Band and Footer return once the visitor exits back to the Edition's landing page or to Collection.

### Download location and purchase location

Both belong at the natural close of the reading experience — after the Colophon, not before the work has made its impression and not floating persistently during the read itself. They sit together as the reading session's last beat: "Take the Edition with you" (download) paired with whatever the Acquire mechanism turns out to be (see the open Purchasing question in Task 2). The architecture reserves this placement regardless of how that question is ultimately answered.

---

## Open questions for your review

Three decisions in this document are flagged rather than assumed, because they affect what gets built next:

1. **The Dragon naming collision** — retire the old figure-tied `/encounters/dragon` (and vase/queen/butterfly) pages and fold their intent into the Edition's own "Encounter" section, as recommended above? Or keep them as a separate, distinct experience type?
2. **Purchasing** — is a Figure Edition meant to remain free indefinitely (with "purchasing" meaning a printed copy or voluntary support), or is a paid-access tier intended for some or all Editions?
3. **The reader as a separate route** — does `/editions/[slug]/read` as a distinct address from the Edition's landing page match your intent, or did you picture the reading experience opening in place on the same page?

Per the original directive: this is where I stop. No implementation has begun. I'm ready to proceed in phases once you've reviewed this and the three questions above are settled.
