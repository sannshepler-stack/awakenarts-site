# AwakenArts Reader Design Revision Plan

**Status: proposal, pending Susan's review and approval.** Issued in response to the 2026-06-29 Governing Directive ("Transition from Engineering Pilot to Publishing Platform"). Per that directive, rollout does not resume until this plan is reviewed and approved — nothing in this document has been implemented. It sits alongside, not inside, the Implementation Specification v1.0: where it proposes a concrete change to that document, the change is named explicitly in Section 5 below rather than applied directly, consistent with the standing rule that the Spec is preserved, not silently rewritten.

**How this is grounded.** Three sources were checked directly rather than assumed: Dragon's actual `sections` content in `src/data/editions.ts` (already the basis of the prior "not yet accepted" finding); the Architecture, Relationship Strategy, and Implementation Log documents already on file; and — new this round — the published `Grismere_Figure_Edition.pdf` itself. That PDF has no extractable text layer (it is page-composited, like the other five Editions), so its frontispiece, Encounter, Word, and Recognition pages were rasterized and read directly as images rather than guessed at from the Workbook's planning material, which describes a related but separate deliverable (a teaching workbook, not the Figure Edition). The finding that follows from that — Grismere's poem is a literal calligram, not reflowable verse — is load-bearing for Section 6 and could not have been reached from documentation alone.

---

## 1. Reader experience changes

**Opening.** Frontispiece and Image currently advance with the same mechanic as every other section — two slides in a row, not a threshold. The entrance should read as different in kind from the reading that follows: a slower reveal on the Frontispiece, a held beat before any advance affordance appears, and a slow cross-dissolve into the Image rather than a cut. The visitor should feel they are being let in, not handed page one.

**Orientation.** Nothing today tells a visitor they have entered a guided sequence distinct from browsing the rest of the site. The position marker ("II of VII") should be visible from the first section, not only once they've advanced, and a single quiet cue — not instructional copy, just a soft signal that fades after the first interaction — should mark the start. The goal is a visitor who senses "I am inside something paced" within the first few seconds, without being told so directly.

**Pacing.** Every section currently advances on the same mechanic regardless of what it holds. Image-only sections should feel held — generous dwell, no pressure to move on. The Encounter's single line should feel light and quick. Recognition and Reflection, which carry real reading weight, need room to breathe internally rather than being compressed to fit one screen at the pace of an image.

**Sequencing and transitions.** Recommend the transition style vary by what's changing, not stay uniform throughout: image-to-image (Frontispiece → Image) as a slow dissolve; image-to-text (Image → Encounter) as a hold-then-reveal, where the image stays in place and text rises into it, rather than a hard cut to a new page. The rhythm should mirror how a reader's attention actually moves — held by the image, then gently joined by language — rather than advancing every section identically.

**The Word (poem presentation).** This is the most consequential finding of this revision. Dragon's poem is free verse with authored, tapering line breaks — a real but solvable web-typesetting problem: left-align it (don't center it), preserve every line break exactly as written, and set it in a measure that respects the taper rather than fighting it. Grismere's poem is a different kind of object entirely. The published page (verified directly, not inferred) is a literal calligram — a multi-colored shape poem typeset into the outline of a figure, where color and line placement are the composition, not a formatting choice layered on top of it. That cannot be reduced to plain text and centered; it can't be reduced to plain text at all without ceasing to be the work. The Reader needs to support two different ways of presenting "the Word," not one: poems whose meaning lives in line breaks and spacing can be typeset live in HTML; poems whose meaning lives in literal visual composition need to be presented as the designed artifact itself — a high-resolution image or inline SVG, with a written long-description carried alongside for accessibility, not as a substitute for it. Which mode a given Edition's poem needs is a fact about that poem, checked PDF by PDF — it isn't a single global decision.

**Recognition.** Confirmed on both Dragon and Grismere: each carries an embedded internal structure — two named movements ("Recognition · I," "Recognition · II") and a three-step OBSERVE / 01 / 02 / 03 progression — that the current build flattens into one continuous block of text on one screen. That flattening is exactly the "PDF page scrolled in a browser" feeling Susan named, and it isn't specific to Dragon; Grismere's Recognition pages use the identical structural pattern. Recognition should become its own short sequence inside the Reader — each named movement and each numbered step its own brief beat the visitor moves through, at the Reader's own pacing, rather than one long scroll asked to hold four ideas at once.

**Reflection.** Carries the same issue in miniature: three named questions plus a closing instruction, currently one block. Reflection should feel like the Reader handing the visitor one thing to carry away, not a fourth Recognition page or a worksheet to complete before moving on — closer to a single spacious offering than a list to read top to bottom.

**Closing.** Today the Reader ends at Colophon, then Acquire (a single email-gate download) — functionally complete, but no longer sufficient given the Governing Directive's marketing-transition requirement. Section 4 below proposes what replaces it.

## 2. Reader sequence changes

The eight-section template (Frontispiece, Image, Encounter, Word, Recognition, Reflection, Colophon, Acquire) is not being abandoned — every section still earns its place. What changes is internal: Recognition stops being one block and becomes an ordered set of beats; the Word section gains a second presentation mode for poems that can't live as reflowable text; the opening two sections and the final section change in *character* (threshold, then bridge) without changing their position in the sequence. This keeps the template — and the work already built against it — intact, while fixing the experience inside it.

## 3. Product presentation changes

The featured Edition's Reader is now explicitly an abridged public experience, not a free-standing complete one — per the Governing Directive, it introduces the work rather than replacing it. That needs a visible signal somewhere near the close (most naturally at Colophon, before the bridge described below), in AwakenArts' own restrained voice, naming that what's just been read is the heart of the published Edition, and that the complete Edition is the fuller object this Reader exists to introduce. This is a tone problem, not a paywall — it should read as an honest framing of what the visitor just experienced, not a sales line.

For the five non-featured Editions, Phase 5 remains genuinely undecided and is not resolved by this plan — that is still Susan's Product Development call. What this plan does narrow: the Governing Directive's own marketing chain (Featured Reader → Complete Figure Edition → **Additional Figure Editions** → ...) implies that after the featured Reader, a visitor should at minimum be shown that the other Figure Editions exist as things to acquire, not necessarily be handed a second free Reader. That's consistent with whichever answer Susan eventually gives Phase 5 — it doesn't presume one.

## 4. Marketing transition design

Requested chain: Featured Reader → Complete Figure Edition → Additional Figure Editions → Collections → Workshop Resources → Facilitator Resources → Retreats. This is close to, but not identical to, the five thresholds already named in the Relationship Strategy (one visit, one Edition read, one Collection purchased, one workshop attended, one retreat attended) — the Governing Directive's chain adds two intermediate stops (Additional Figure Editions, Facilitator Resources) specific to how this is presented at the close of the Reader, rather than naming new relationship tiers.

The constraint stated in the directive — preserve the contemplative character — rules out a conventional upsell grid at the bottom of the Reader. The recommended shape: the current single "Acquire" beat becomes one continuous, quiet passage (replacing, not just relabeling, today's `EmailGateDownload`-only Acquire section) structured as a single path read top to bottom, not a dashboard of competing offers. First and most prominent: a quiet line naming what the complete Edition adds beyond what was just read. Beneath that, smaller and quieter, in the same descending order Susan named: the wider Collection, then Workshop Resources, then Facilitator Resources, then Retreats — each a single restrained line, not a card grid. A visitor who only wants the next Edition sees it first and can stop there; a visitor curious about the wider world can keep reading without ever being asked twice. The email capture already built (`EmailGateDownload` → `/api/subscribe`) stays as the connective tissue throughout this passage — reframed as the way to continue the relationship, not as a separate transaction bolted onto the end.

Exact copy and visual treatment are implementation work for the next phase, once this plan is approved — this section proposes the shape, not the pixels.

## 5. Changes required to the Implementation Specification

These are proposed amendments, not yet made. Per the Spec's own preservation rule, none of this is applied to the existing document directly; if approved, it would be issued as v1.1.

- **`EditionSection` (Section 3 of the Spec).** The single optional `text: string` field is not expressive enough for two things this revision needs: Recognition as an ordered set of labeled sub-beats rather than one string, and the Word section needing to choose between live-typeset text and a presented image/SVG artifact depending on the actual poem. This is the data-model question flagged at the end of the prior revision round and left open pending Susan's direction — this plan proposes resolving it as part of the same v1.1 pass, since both Recognition's structure and the Word's two presentation modes touch the same interface.
- **A `featured` designation.** Nothing in `editions.ts` today marks which Edition is the featured one — it's only true by virtue of being the only Edition with a built Reader. Recommend adding an explicit field (e.g. `featured?: boolean`) so the code states this fact rather than leaving it implicit in which `sections` array happens to be non-empty. Small, safe, and necessary regardless of which Edition is chosen in Section 6.
- **Phase 2** stays "built, not yet accepted." This plan is the proposed path to acceptance — Phase 2 isn't being redone from zero, it's being revised against the four findings above.
- **Phases 3 and 4** remain correctly blocked behind Phase 2's acceptance, unchanged.
- **Phase 5** remains "not started — scope superseded," still pending Susan's Product Development decision. Not resolved here, but Section 3 above narrows the shape that decision is likely to take.
- **Phase 6** (Acquire/email-gate) scope expands in content but not in mechanism: the single email-gate beat becomes the quiet multi-stop passage in Section 4, built on the same `EmailGateDownload` / `/api/subscribe` infrastructure already live — no new backend work.
- **Phase 7** (commerce hook) unchanged in mechanism; its relevance ahead of schedule was already flagged in the prior Log entry and stands.

## 6. Featured Reader recommendation

**Resolved by Susan, 2026-06-29: Grismere is the Featured Reader.** Her "Build the House Before Furnishing the Rooms" directive names "Featured Reader (Grismere)" directly as a room in the Public House. The recommendation below is left as written for the record of how that conclusion was reached, and because it still does the remaining work this decision needs: explaining why Grismere, and sequencing how the already-proven Dragon pattern gets applied to it without redoing Phase 1/2 from nothing.

**Original recommendation: Grismere should become the featured public Reader; Dragon should remain the engineering pilot the revision above is built and proven against, with the same proven pattern then applied to Grismere for launch.**

The case for Grismere, on the criteria named — tone, identity, and purpose: Grismere's own language is markedly closer to the register the rest of the site already speaks in. Its frontispiece line, "She is the lure toward what lies beneath," and its author material's own descriptors — mysterious, quiet, elusive, dreamlike, timeless, "waiting rather than acting" — sit naturally beside the homepage and Encounters' hushed, atmospheric register (moonlit water, a cave-mouth threshold, "Be still"). More specifically, Grismere's central theme — a divided self, suspended between conscious and unconscious, sea and shore, longing for a wholeness not yet named — maps almost directly onto "Longing," the first step of the site's own locked Path of Recognition model (Longing → Recognition → The Figure → The Word → The Path). A first-time visitor meeting Grismere is, in effect, meeting the site's own opening movement in figure form. Dragon's theme — reconciling internal opposites through the imagery of battle: claws, "cut and whack," "lightning bolts of hate" — is real and proven content, but it's a more combative first encounter than Grismere's threshold imagery, and the site's general voice elsewhere doesn't lead with conflict.

The case against switching now: Dragon is the only Edition with a built Reader — Phase 1 and Phase 2 both complete, `tsc` clean. Making Grismere featured means hand-building its `sections` array from scratch, the same scope of work Phase 1 was for Dragon. And Grismere's poem, confirmed directly from the published PDF, is the harder case of the two for the Word-section redesign in Section 1 above — a true calligram, not reflowable verse — so choosing Grismere as featured makes the "render as artifact" mode load-bearing on day one rather than a future case to handle later. Both Editions share the identical Recognition/Reflection structural issue in equal measure, so that finding doesn't favor either one.

Recommend resolving the tension by decoupling the two roles the prior plan had merged: keep Dragon as the build-and-prove ground for the revised Reader pattern in Sections 1–2 (lower risk — its poem is the more tractable text case, and the components already exist), then apply the proven pattern to a freshly hand-built Grismere `sections` array as the Edition the public actually meets first. This is the publishing decision the Governing Directive reserved for Susan; the engineering sequencing above is offered as the path that gets there without re-doing already-accepted Phase 1/2 work on Dragon for nothing.

---

## 7. Revision (2026-06-29) — Two Reader Experiences

Susan's follow-up directive corrects a premise this plan was written on. Sections 1–6 above treat "the Reader" as one component that becomes abridged for the public and complete for an owner — a single feature with two access states. That is no longer the architecture. **The Public Reader and the Owner Reader are two distinct products**, not two permission levels of one Reader, and they don't share routing, navigation, calls to action, endings, or relationship with the visitor. This section corrects Sections 3–5 accordingly; Sections 1, 2, and 6 stand largely as written, applied now specifically to the Public Reader, with one refinement noted below.

**The two products, restated from the Architecture doc's new section.** The Public Reader introduces — first-time visitors, a curated and abridged Edition, living on the public marketing platform, never a substitute for the published work. The Owner Reader delivers — owners only, the complete Edition as authored, with reading, download, and print together, living in a separate Owner Platform (My Library, Complete Figure Editions, Download, Print, Future Collections, Workshop Resources, Facilitator Resources) that represents the relationship *after* acquisition, not a deeper view of the same page.

**Refinement to Section 1's poem-presentation finding.** The original finding was that a poem's meaning sometimes lives in visual composition rather than reflowable text, requiring a second presentation mode (image/SVG artifact) for poems like Grismere's. Susan's direct review of the source PDF sharpens this: for some poems, it isn't only the poem that's the designed artifact — the *whole page* is, including the Encounter heading, title hierarchy, the cream field, and the typographic balance around the poem. That whole-page composition is what the Owner Reader should preserve nearly as authored, for poems where the page itself is the work. The Public Reader's curated Word section can present the same composition during the demonstration — it isn't excluded from the Featured Reader — but the Owner Reader is where preserving it exactly, rather than adapting it, is the actual design requirement. The three design languages Susan identified directly in the published PDF — the Figure page (a formal spread), the Poem page (a designed composition, page and poem as one unit), and the Recognition/Reflection pages (built for sustained reading) — are not interchangeable, and shouldn't be flattened into one web treatment. Recognition and Reflection are the sections free to become more web-native (the multi-beat restructuring in Section 1 above) without losing their meaning; the Figure and Poem pages are where fidelity to the authored composition matters more than web-native adaptation.

**Revision to Section 3 (Product presentation).** Section 3 as written assumed one Reader that becomes "abridged" for everyone and "complete" once purchased. Replace that with: the Public Reader is *built* curated and abridged from the start — it never unlocks into something more complete in place. Ownership doesn't change what the Public Reader shows; it grants entry to an entirely separate Owner Reader, reached through the Owner Platform, not through the same route with different content loaded into it.

**Revision to Section 4 (Marketing transition).** The quiet, single-path "Continue" passage proposed in Section 4 still describes the *end of the Public Reader* correctly — it's the bridge from Featured Reader to Complete Edition to the wider Collection/Workshop/Facilitator/Retreat paths, and that design doesn't change. What's added: that passage's first link (acquiring the complete Edition) is now understood to lead somewhere structurally distinct — into the Owner Platform — rather than into a more-unlocked version of the page the visitor is already on. The ending the visitor reaches after acquiring the work should itself feel like arriving somewhere new (My Library), not like a setting being switched on the same page.

**Revision to Section 5 (Implementation Specification changes).** Two additions to what was already flagged:

- **Routing and navigation double, deliberately.** Where Section 5 originally proposed a `featured` field to mark which Edition the Public Reader serves, the Two-Reader architecture additionally needs an Owner Platform route namespace entirely separate from `/editions/[slug]/read` (e.g., something like `/library/[slug]/read`, not decided here) with its own navigation chrome, since per the Governing Directive these must not share routing or navigation with the Public Reader.
- **`hasAccess()` stops being a future concern and becomes the Owner Platform's hard dependency.** Spec Phase 7's commerce hook (`Edition.access`, `hasAccess()`) was scoped as "deliberately last and inert" in v1.0, then flagged as "relevant in intent" by the Product Access Model note. The Owner Reader cannot exist without it actually working — there is no Owner Platform without a real answer to "does this visitor own this Edition." That makes the still-open Purchasing/entitlement mechanism (Open Decision #1 in the Implementation Log) a hard prerequisite for any Owner Reader build work, not a parallel concern. The Public Reader has no such dependency and can proceed once this plan is approved.

**Revised roadmap — two tracks, not one sequence.**

*Track A — Public Reader* (no new dependency beyond this plan's approval): finish the Section 1 revision against Dragon (orientation, pacing, the Word section's two presentation modes, Recognition as a beat sequence, Reflection as a single offering); decide and build the actual featured Edition per Section 6 (Grismere, built fresh, with Dragon retained as the proven pattern's origin); build the Section 4 closing passage. This is the direct continuation of Spec Phases 2–3 and the existing Implementation Log entries — nothing here is new scope, only corrected scope.

*Track B — Owner Reader* (blocked on the Purchasing decision): define the Owner Platform's routing/navigation/entitlement architecture; build the Owner Reader component itself, including the faithful whole-page treatment for Figure and Poem pages described above; build Read Online / Download / Print as owner capabilities; define My Library. None of this is specified in detail yet — no architecture, no spec, no code — and per the Governing Directive's own instruction, it should be distinguished from Track A *before* additional Figure Editions are deployed, not designed in full before Track A's revision is approved and proven.

Susan's note that "the Dragon engineering pilot remains valid" is recorded here directly: nothing in this revision discards Phase 1 or Phase 2's work on Dragon. Track A is that work, corrected and continued; Track B is new scope built alongside it once the Purchasing decision unblocks it.

**Addendum — Marketing Platform First.** Susan's follow-up directive of the same date reframes Track A's purpose more sharply than this plan originally stated: the Public Reader is a marketing instrument, not a free edition. Section 1's "selected Recognition, selected Reflection" treatment is therefore not only a pacing choice anymore — it is the mechanism by which the Public Reader avoids accidentally satisfying the visitor so completely that the complete Edition starts to feel unnecessary. Every Track A decision should now be checked against that directive's standing question (does this increase understanding and confidence and create a desire to continue, or does it quietly remove the reason to acquire the complete work) before it's checked against this plan's own design language. Track B is unaffected in substance — the Owner Reader's job is to reward ownership with the complete experience, which this plan already treats as the opposite end of that same spectrum.

---

## 8. Room placement map (2026-06-29) — "Build the House Before Furnishing the Rooms"

Susan's directive asks one question of every feature before implementation: where does this belong — Public House, Transition, or Owner House? What follows is that placement run against what's actually built on the live site today, so the design rule has something concrete to apply to rather than only future features.

**Already placed correctly, no action needed.** Homepage, Foundation, Encounters (and its five pages), and About are squarely Public House rooms as named in the directive, and that's exactly what they already are on the site — nothing here is in the wrong room.

**Featured Reader (Grismere) — named but not yet built.** The room exists in the directive; the occupant doesn't yet exist in code. What's live at `/editions/[slug]/read` today is Dragon's Reader, which is correctly understood as the engineering pilot, not a misplaced occupant of this room — it was never the Featured Reader, only the proof that the room's pattern works. Track A above is the work of actually furnishing this room with Grismere.

**Both rooms below are now resolved by Susan's direct answer — recorded 2026-06-29, superseding the "ask before assuming" posture this section originally took.**

- **`/collection` — resolved.** Susan's Collection directive keeps `/collection` exactly as built (Current Editions section, interactive contact sheets) and names its purpose precisely: "introduce the AwakenArts Collection as a published body of work." That's Public House. The acquire-style path this section had flagged as `/collection`'s second job isn't a misplaced feature of the page itself — it's a separate room one step later. Selecting a contact sheet opens what Susan now names the **Edition Preview**, a new Transition room (see Architecture doc, 2026-06-29). `/collection` stays single-purpose; the page it currently links to needs to become that new room's actual occupant rather than the plain document viewer it is today.
- **`/poems` — resolved, and renamed.** Susan's directive: rename to **Gallery**. Placement: Public House, beside Encounters — confirmed by the Architectural Sequence (Section 9 below), which runs Encounters → Gallery → Collection. Purpose: "quiet browsing and appreciation," explicitly **not** part of the marketing sequence. Per Susan's follow-up ("Remove links"), the Gallery's defining trait is that it asks the visitor for no decision at all — every other Public House and Transition room moves a visitor somewhere; this is the one room that doesn't. The page's current excerpt-tile links back to each Edition no longer belong on this page under that rule.

**Newly named room, not previously tracked anywhere in this plan: Edition Preview.** Sits in the Transition house, between Collection and the Featured Reader/Complete Figure Edition fork. Occupies the interaction currently built as "open the enlarged contact sheet" — but that occupant is a placeholder; today it is a plain image viewer, not a marketing presentation. Its job per Susan's directive: explain the Edition, deepen familiarity, and lead toward (where appropriate) the Complete Figure Edition, the Featured Reader, related Editions, future Collections, workshops, facilitator resources, author notes, and retreats — while never giving away the complete Edition. This is the room the map above still shows as unbuilt.

**Workshops material — split across two houses, only one of which exists yet.** `/workshops` (unlisted) and `/facilitator-orientation` (unlisted) currently hold both the introduction to what a workshop is (Transition's job) and the actual curriculum, intake forms, and handouts (Owner House's "Workshop Resources" and "Facilitator Resources" job) on the same unlisted pages, with no distinction between the two. This is the clearest existing case of a feature built before its room existed: it isn't misplaced so much as built in a house that didn't have separate rooms yet at the time.

**The Transition bridge that exists today is thinner than the directive's room.** The Encounter Journal's email-gated download (`/api/subscribe`, `EmailGateDownload`) is the only mechanism currently linking discovery to anything further, and it leads to an email list, not yet to the Complete Figure Edition, additional Editions, Collections, Workshops, Facilitator Resources, or Retreats the Transition room is supposed to hold. This matches Section 4's "Continue" passage proposal above — it's the same gap, restated in the house metaphor.

**The Owner House has no rooms built yet.** My Library, Complete Figure Editions, Read Online, Download, Print, Collections (as an owned thing rather than a previewed one), Workshop Resources, Facilitator Resources, and Retreat Resources are all unbuilt, consistent with Track B above, and blocked on the same Purchasing/entitlement dependency already named there.

---

Per the Governing Directive: no rollout resumes, and no Phase 1 data-model change is made, until this plan is reviewed and approved.

---

## 9. Architectural Sequence and the Acquire/Store split (2026-06-29)

**The full visitor path, named for the first time.** Susan's Collection directive states the complete order a visitor moves through, room by room: **Homepage → Encounters → Gallery (Appreciation) → Collection (the published body of work) → Edition Preview (Contact Sheet Marketing Presentation) → Featured Reader (where applicable) or Complete Figure Edition → Owner Platform.** Governing rule attached to it: "No page should attempt to perform the work of the page that follows it." This confirms and replaces Section 8's "genuinely unclear" framing for `/collection` and Gallery (Section 8 above has been updated to match) and fixes their order relative to the new Edition Preview room.

**The Acquire step itself now has two distinct rooms, not one.** A follow-up diagram from Susan splits what this plan had been treating as a single "acquire" beat at the end of each Edition Preview:

```
Gallery → Collection → Edition Preview (The Dragon) → ┬─ Acquire Dragon
                                                        └─ Figure Editions Store → Dragon / Grismere / Bowls / Queen Ann / etc.
```

Read together with her explicit framing ("think like a publisher rather than an online retailer"), this names two purchasing levels:

- **Level 1 — Per-Edition marketing page.** Every Edition has its own dedicated page (Edition Preview, per the directive above) because, in Susan's words, "every Edition tells a different story." Its content, per her own worked example for The Dragon: contact sheet, what this Edition explores, what is included, who it is for, related Editions, workshop applications, facilitator resources, testimonials (later), and a single "Acquire [The Dragon]" call to action. This is not new architecture — it's the Edition Preview room, now specified down to its actual content blocks rather than only its purpose.
- **Level 2 — A single Editions Store.** A second, separate page (working names offered: "Figure Editions" or "Acquire Editions") that is deliberately *not* about meaning — "it is simply the storefront." Per Edition, it shows only: cover, title, one sentence, available formats, price, and an Acquire action. Susan's own analogy: "the bookstore shelf." This is new scope — a flat, catalog-style page that did not exist in any prior version of this plan or the Architecture doc, sitting structurally beside the Edition Previews rather than inside the Encounters→Gallery→Collection sequence above it.

**A further directive extends the Store beyond Figure Editions alone.** Susan's next message lists the Store's full category set: Figure Editions, Collections, Workshop Guides, Facilitator Resources, Retreat Materials, Gift Certificates, Future Courses. This confirms the Store (Level 2) is the single catalog surface for AwakenArts' entire commercial product line, not only the six Figure Editions — consistent with `AwakenArts_Product_Architecture.md`'s four product families, several of which (Workshop Guide Series, Collections, Retreats) previously had no named website surface at all. Gift Certificates and Future Courses are newly named products with no prior mention anywhere in this documentation hierarchy — flagged here, not designed further, pending Susan's review.

**What this resolves and what it doesn't.** This sharpens Edition Preview's content (Level 1) and adds the Store as a second, catalog-style room (Level 2) — both architecture. It does **not** resolve Open Decision #1 (the Purchasing/entitlement mechanism — what "Acquire" actually does technically: payment processor, access grant, fulfillment). That remains the same open dependency already named in Section 7 and the Implementation Log; what's new is that the *pages* the mechanism will live behind are now named, while the mechanism itself is still undecided.

**Status: architecture only.** No code has changed. The standing line above this section — no rollout resumes until this plan is reviewed and approved — still governs.

---

## 10. Correction (2026-06-29) — the Store is retracted; Edition Preview is the product family's center

**Section 9's Level 2 (the Editions Store) is retracted by Susan, in the same conversation, before any of it was built.** Her words: "Do not design a separate Store page at this time. Instead, strengthen the Edition Preview pages so they naturally become the entry point into each Edition's product family. The purchasing architecture should emerge from the Edition pages themselves rather than from a generic storefront." Per this plan's own append-don't-rewrite discipline, Section 9 stands unedited above as the record of what was proposed and then overruled; this section is the correction, not a deletion.

**What remains true from Section 9:** the Architectural Sequence (Homepage → Encounters → Gallery → Collection → Edition Preview → Featured Reader/Complete Figure Edition → Owner Platform) and Level 1's content list for Edition Preview (contact sheet, what this Edition explores, what is included, who it is for, related Editions, workshop applications, facilitator resources, testimonials, an Acquire call to action) are unaffected by the retraction — only Level 2, the separate catalog page, is withdrawn.

**Edition Preview is not a new route — it is the existing enlarged contact-sheet page, refined in place.** Susan: "Refine these pages rather than creating a separate Preview page — the enlarged contact sheet remains the centerpiece." This had already been the position taken in Section 8 above ("occupies the interaction currently built as 'open the enlarged contact sheet'"); this correction forecloses any reading of Section 9's Store language as implying Edition Preview itself was ever meant to be a new address — only the now-retracted Store was that, and it is gone.

**The governing model going forward: each Figure Edition is the center of its own product family, and Edition Preview is that center.** Susan: "Dragon doesn't have 'a PDF.' Dragon has a family: Edition, Reader, Workshop Kit, Slides, Facilitator Notes, Collections, Future Retreat use. Those aren't separate products floating around the site." And, naming Edition Preview specifically: "The Edition Preview (the enlarged contact-sheet page) is not simply introducing the Edition. It is the center of the product family. Everything radiates from that page."

**Dragon's family, as Susan diagrammed it:**

```
                THE DRAGON
            (Edition Preview)
         Contact Sheet Overview
         What this Edition explores
         Why it matters
         What is included
                    |
       +------------+------------+
       |            |            |
       v            v            v
   Acquire       Featured     Related
   Edition        Reader      Editions
       |
       v
 Owner Resources
  - Read Online
  - Download
  - Print
 Future Resources
  - Workshop Kit
  - Presentation Slides
  - Facilitator Notes
  - Participant Materials
  - Collections containing Dragon
  - Retreat Resources
```

This both confirms and sharpens Section 9's Level 1 content list: Acquire, Featured Reader, and Related Editions are the three immediate branches from Edition Preview, and Acquire itself branches further into Owner Resources (the existing Owner Platform items — Read Online, Download, Print) and Future Resources (Workshop Kit, Presentation Slides derived from the Edition, Facilitator Notes, Participant Materials, Collections containing the Edition, retreat resources) — the same family list Susan named directly: "Complete Figure Edition, Read Online, Download, Print, Workshop Kit, Presentation Slides (derived from the Edition), Facilitator Notes, Participant Materials, Collections containing the Edition, Future retreat resources."

**Purchasing has no separate page or route of its own.** Susan: "The purchasing page is not separate from the Edition Preview. It grows naturally from it." Acquire is a branch of Edition Preview, not a different room reached from it — this rules out a distinct "Acquire" address with its own design language, consistent with the retraction of the Store above. Open Decision #1 (the Purchasing/entitlement mechanism itself — payment processor, access grant, fulfillment) remains exactly as open as before; what changes is where that mechanism's UI lives: inside Edition Preview, not on a page beside or beyond it.

**Implementation status.** The Gallery rename (poems → gallery, per-card Edition links removed) is built and committed — Susan authorized it for immediate implementation ahead of this correction, separately from the Store retraction. Per her instruction to revise the architectural documents "before additional implementation continues," no work begins on refining Edition Preview itself, or on any per-Edition product family, until this section and its companions in the Architecture doc and Implementation Log are recorded — which this section satisfies.
