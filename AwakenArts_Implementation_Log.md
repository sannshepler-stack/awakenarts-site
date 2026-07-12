# AwakenArts Implementation Log

**Status: living document.** This is the third tier of AwakenArts' technical documentation, and it is the only one of the three meant to change continuously:

- **Publishing Platform Architecture** — the vision and governing principles. Why anything gets built.
- **Implementation Specification** — the technical blueprint for a given capability. How it gets built.
- **Implementation Log** (this document) — what has actually been built against a given Specification, and what remains. The record of reality, updated as work happens — appended to, never rewritten backward.

**The governing claim this Log checks against.** Per the Architecture doc's 2026-06-29 framing: AwakenArts is becoming a marketing platform for an original body of work. That's an assertion until something is built. This Log exists so the assertion can be checked against what's actually live, at any point, rather than taken on faith.

---

## Foundations already live

Work the Implementation Specification v1.0 depends on and reuses, already built and in production before the Spec existed:

| Capability | Where | Status |
|---|---|---|
| Edition catalog (`slug`, `title`, `kicker`, `contactSheet`, `pdf`) | `src/data/editions.ts` | Live — 6 Editions: Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann |
| Edition landing page | `src/app/editions/[slug]/page.tsx` | Live — contact sheet + direct PDF link |
| Image right-click/drag protection | `src/components/ProtectedImage.tsx` | Live |
| Responsive header-image cropping (CSS `object-fit`, not pre-cropped files) | `src/components/AtmosphericHeader.tsx` | Live, rolled out to Home/Collection/Foundation/About |
| Email capture → Kit V4 (create subscriber, add to form) | `src/app/api/subscribe/route.ts` | Live, two-step Kit call confirmed working |
| Email-gated instant download UI | `src/components/EmailGateDownload.tsx` | Live — currently wired to the free Encounter Journal on `/encounters` only |
| Sitemap, robots, per-page metadata | `src/app/sitemap.ts`, `src/app/robots.ts`, per-route `generateMetadata` | Live |

None of this was built for the Reader — it's the existing infrastructure the Spec's new work plugs into.

## Implementation Specification v1.0 — status by phase

| Phase | Scope | Status | Notes |
|---|---|---|---|
| 1 | Extend `Edition`/`EditionSection` types; hand-build `sections` for one pilot Edition (Dragon) | **Built — `cac1712`** | `tsc --noEmit` clean; no existing consumer reads `.sections` yet, so this is purely additive (confirmed via grep — zero references in `src/app` or `src/components`); the two new image assets (frontispiece, image) visually verified. Other five Editions given `sections: []` stubs to satisfy the now-required field. |
| 2 | Build `EditionReader`, `EditionReaderSection`, `ProgressMarker`; wire `/editions/dragon/read` | **Built — `18e7606` — not yet accepted** | `tsc --noEmit` clean; manual trace confirmed CSS/data wiring is correct (see note below). But correctness of the code is not the same as the Reader fulfilling the Architecture/Relationship Strategy goals — Susan reviewed the built experience and identified four experiential gaps (not bugs) that block acceptance. See the second 2026-06-29 note below. |
| 3 | Point landing-page CTA to `/read`; demote raw PDF link | **Not started** | Blocked by Phase 2 |
| 4 | Build `extract_reader_assets.py` / `generate_responsive_set.py` against Dragon's PDF | **Not started** | Can run in parallel with Phase 1–3 once Phase 1's hand-built assets exist as a known-good comparison |
| 5 | Roll pipeline out to Bowls, Ballerina, Grismere, Poppy, Queen Ann | **Not started — scope superseded, needs redefinition** | The Product Access Model decision (2026-06-29, see below) means the other five Editions do not get a Reader identical to Dragon's. What they get instead is undecided. Phase 5 cannot be scoped until that's answered. |
| 6 | Wire Acquire/email-gate per Edition (`EmailGateDownload` + `/api/subscribe`, tagged per slug) | **Not started** | Blocked by Phase 5; reuses live infrastructure, no new backend work |
| 7 | Add commerce hook stub (`Edition.access`, `hasAccess()`) | **Not started — newly relevant ahead of schedule** | Was "deliberately last and inert" because Purchasing was fully open. Purchasing is now partially resolved (paid/gated tier confirmed for non-featured Editions), so `Edition.access` already has real meaning even though the mechanism behind `hasAccess()` is still undecided. Not pulled forward; flagged so it isn't built later against a stale "still fully open" assumption. |

**Overall: 2 of 7 phases built; Phase 1 accepted, Phase 2 built but not yet accepted — see below.** Susan signed off on the document itself, twice — see the 2026-06-29 note under "Workstream structure" below for the record of that approval and what it changed.

## Two tracks until Dragon's Reader is proven

Per Susan's 2026-06-29 framing, work runs on two parallel tracks rather than one sequential one, until Dragon's Reader is complete — at which point the two merge:

**Engineering Track (Claude).** Phase 1 Reader → Validate → Roll out → Pipeline → Commerce hook. Roughly corresponds to Spec Phases 1–7 above, phrased here as a working arc rather than a strict phase order.

**Publishing Track (Susan).** Platform presentation, marketing strategy, product architecture, customer journey, brand evolution. None of these five areas has an architecture, spec, or log entry yet — as of this entry they exist only as named work areas, not specified work.

**The merge point.** Once Dragon's Reader is complete and proven, the two tracks combine: the engineering work supports the marketing strategy, and the marketing strategy puts the engineering to use. Until then, neither track is sequenced ahead of or blocked by the other — they run concurrently.

## Workstream structure (2026-06-29 refinement)

Per Susan's 2026-06-29 table, the two tracks above are refined into five named workstreams, each with its own status and lead. This refines the Two Tracks framing rather than replacing it — Reader Platform is the Engineering Track; Visitor Experience, Product Development, and Business Strategy together are what the Publishing Track named only loosely; Body of Work is new to this framing, naming the actual creative output as its own ongoing workstream distinct from the platform built around it.

| Workstream | Status | Lead |
|---|---|---|
| Reader Platform | Ready to implement | Claude |
| Visitor Experience | Ready for presentation updates | Claude + Susan |
| Product Development | Ready for definition | Susan |
| Business Strategy | Pending key decisions | Susan |
| Body of Work | Ongoing | Susan |

Read against everything already recorded in this Log: **Reader Platform / "Ready to implement"** is the one status here that, taken at face value, would mean Phase 1 of the Implementation Specification can begin — which is a change from this Log's standing position that "no phase begins until Susan signs off on the document itself." Recorded here as stated; not yet treated as that sign-off without confirming it directly. **Visitor Experience / "Ready for presentation updates"** covers the two unblocked, no-new-capability fixes already identified (Edition page navigation, Workshops discoverability) plus the copy decisions named in the Relationship Strategy's visitor-experience translation. **Product Development / "Ready for definition"** covers Collection-as-a-product and Retreats — both currently undefined anywhere. **Business Strategy / "Pending key decisions"** is Purchasing (Open Decision #1) and whatever else Susan's product-architecture and customer-journey work surfaces. **Body of Work** — new Figure Editions, poems, and the creative work itself — is recorded here for the first time as its own ongoing workstream, separate from the platform being built to carry it.

**2026-06-29 — Phase 1 approved and built.** The confirmation flagged as missing above has since been given directly, twice: first "Yes — begin Phase 1 now," then reconfirmed as "Approved. Begin Phase 1 exactly as specified. Treat Dragon as the validation of both the engineering and the visitor experience. Implement only the scope defined for Phase 1. Record any discoveries that affect later phases in the Implementation Log rather than expanding Phase 1." Phase 1 was built against that instruction (commit `cac1712`) — scope held to exactly what Section 10's table specifies, nothing pulled forward from Phases 2–4. Three discoveries surfaced while hand-building Dragon's `sections`, recorded here per Susan's instruction rather than used to expand Phase 1 itself:

1. **The 8-section template doesn't cover Dragon's full 11-page PDF.** Page 5 ("Dragon: A Motif") and page 11 ("Facilitator Notes," marked NOT FOR PARTICIPANT DISTRIBUTION in the source PDF itself) have no slot in `frontispiece`/`image`/`encounter`/`word`/`recognition`/`reflection`/`colophon`/`acquire`. Both were excluded from Dragon's `sections` array entirely. Worth a decision before Phase 4's extraction script runs against the other five Editions: confirm the other five PDFs follow the same ~11-page structure with the same two non-template pages, or the script's "generalized" extraction logic will need a per-Edition exception list.
2. **Two pairs of print pages collapse into one Reader section each.** Recognition (pages 6–7) and Reflection (pages 8–9) each became a single `text` string, since `EditionSection.text` is one field, not a multi-block structure. The combined text is long for a single Reader screen — Phase 2 should decide, when building `EditionReaderSection`, whether that's acceptable as one scrollable screen or whether the template itself needs to grow past 8 sections later. Not resolved here; flagged for Phase 2.
3. **Source-priority for section copy.** `Dragon_Notes_on_the_Figure.md` (the Figure Development Catalog) self-identifies as non-participant-facing internal reference material and was deliberately not used as a copy source. All Dragon section text was transcribed from the PDF's own already-approved pages, with the colophon cross-checked against `Dragon_Author_Notes.txt`'s matching "Message Delivered" passage for consistency. Worth carrying forward into Phase 5: each Edition likely has an equivalent internal-notes file that shouldn't be mistaken for a copy source when the other five `sections` arrays get hand-built.

**2026-06-29 — Phase 2 built; live-render verification could not be completed in this environment.** Built against Susan's explicit go-ahead and her own verification checklist for this phase ("The Reader renders correctly. Every section appears in the right order. Navigation works. Mobile, tablet, and desktop layouts work. Assets load correctly. Nothing is broken."). `EditionReader`, `EditionReaderSection`, and `ProgressMarker` were built exactly to Spec Section 5/6, and `/editions/[slug]/read` was wired sharing the landing page's `generateStaticParams` pattern (commit `18e7606`). Two things to record:

1. **The checklist itself could not be run.** This sandbox's `node_modules/@next` only has the `swc-darwin-arm64` binary (built when the dependencies were installed on a Mac); the sandbox itself is Linux/arm64, and its network access is allowlisted in a way that blocks the npm registry, so the missing Linux binary can't be fetched either. `npm run build` fails immediately with "Failed to load SWC binary for linux/arm64" — before any of this phase's code runs. This is an environment constraint, not a defect surfaced by this code; it would block running *any* Next.js build or dev server from this sandbox, on any phase, going forward. In its absence, verification fell back to `tsc --noEmit` (clean) plus a manual trace of each new file against `editions.ts`'s data shape and against every class name referenced in the new `globals.css` rules, confirming the two line up. That trace caught one real bug — the global arrow-key listener was hijacking cursor movement while a visitor typed in the Acquire section's email field, since `ArrowLeft`/`ArrowRight` were being treated as section-navigation keys everywhere, including inside the input. Fixed (skip navigation when the event target is an input/textarea/select/contenteditable) before committing. No other defects found by the trace, but a trace is not a substitute for actually opening the page.
2. **What would close the gap.** Susan's own machine already has the correct `swc-darwin-arm64` binary in `node_modules`, so `npm run dev` should work there without any changes, and `/editions/dragon/read` could be checked directly against her own checklist at mobile/tablet/desktop widths. Recording this here rather than marking Phase 2 "Built" on the same footing as Phase 1 (whose visual check — static image assets — was something this environment actually could do).

**2026-06-29 — Phase 2 reviewed: technically built, not yet accepted (Publishing Track decision, Susan).** Susan reviewed the built Reader against the Architecture and Relationship Strategy and held back acceptance — not as a rejection of the implementation, but as the pilot doing exactly what a pilot is for: surfacing that the Reader experience itself needs to evolve before being proven across six Editions. Her framing: "the Reader implementation is technically successful, but the Reader experience is not yet accepted... the objective is not to reproduce the PDF in a browser, but to create a web-native reading experience that faithfully preserves the intent of the Edition." Four specific gaps, each traced against Dragon's actual `sections` content in `editions.ts` rather than left as general impressions:

1. **No orientation / sense of entering a guided experience.** `EditionReader`'s topbar (return link + "I of VIII" marker) renders immediately on the frontispiece, so the visitor is inside reading-navigation UI before any sense of threshold or beginning has been established.
2. **The opening sequence and section-to-section rhythm aren't working.** Dragon's `frontispiece` and `image` sections are both full-bleed pictures rendered through the identical `reader-section--image` treatment back to back — no escalation from "cover" to "the figure itself" — and every later transition (image → short text → poem → long analytical text) uses the same chrome and pacing regardless of what kind of beat it is.
3. **The Word section isn't presented as an authored work.** Dragon's poem text is a deliberately enjambed, tapering composition (`"...lightning\nbolts of hate\nshouting sun,\nsilent moon,\ntrembling baby stars,"` — line lengths visibly decreasing) followed by a separately attributed quote. `TextBlock`'s current rendering centers every line, which collapses the poem's actual ragged-left/tapering shape into a symmetric block — the opposite of faithful. The attribution also gets no distinct treatment from the poem itself.
4. **Recognition/Reflection read as PDF pages scrolled inside a browser, not web-native.** Dragon's `recognition` text is not flat prose — it has embedded structural markers in the source copy itself (`"OBSERVE"`, `"01 EXPLORE THE PATTERN"`, `"02 DEVELOP THE INSIGHT"`, `"03 RETURN TO THE IMAGE"`, each its own labeled movement). `TextBlock` currently flattens all of it into undifferentiated `<p>` tags inside one `overflow-y: auto` box — exactly the "print page crammed into a div" feeling Susan named. The fix likely isn't more CSS on the current markup; it's recognizing the source content already has a paced, multi-movement structure that a single `EditionSection.text` string can't express, which may mean revisiting the `EditionSection` shape itself (locked in Phase 1) for this section type specifically.

**Where this leaves Phase 2:** items 1–3 are presentation/CSS/component-structure fixes within the existing data model — no Phase 1 changes needed. Item 4 is the one flagged as potentially touching the locked `EditionSection` interface (e.g., an optional structured-movements field alongside `text`), which is exactly the kind of cross-phase discovery this Log exists to hold rather than resolve unilaterally — proposed to Susan rather than built ahead of her direction. Commit `18e7606` stands as the technical foundation (component architecture, route, swipe/keyboard/tap-edge navigation, the `EmailGateDownload` reuse) — none of that is being thrown out; what's being revised is the section-by-section presentation layer built on top of it. Phase 3 (landing CTA) and Phase 4 (asset pipeline) remain correctly blocked behind Phase 2's acceptance, not just its build.

**2026-06-29 — Product Access Model (Governing Decision, Business Strategy / Publishing Track).** Recorded in full in the Publishing Platform Architecture doc's new "Product Access Model" section; summarized here for what it changes in this Log. Supersedes the standing assumption that every Figure Edition gets a freely accessible Reader. The public experience is the homepage, Encounters, Collection browsing, and **one** complete Reader — the featured Edition, confirmed as Dragon (consistent with its existing role as Phase 1's pilot and Phase 2's only built Reader). The other five Editions become commercial — not freely readable in full, with the eventual mechanism (individual purchase, Collections, membership) still undecided. Governing principle: the Reader introduces the body of work, it does not substitute for owning it.

Three concrete effects on this Spec, none requiring code changes today:

1. **Phase 5's scope no longer matches the decision.** It was written as "roll the same pipeline out to the other five Editions," which assumed a Reader identical in kind to Dragon's. That assumption is gone. Phase 5 is blocked not on engineering readiness but on a Product Development decision: what the other five Editions' `/editions/[slug]` and `/read` should actually offer instead (locked preview, excerpt, straight acquire prompt, or something else).
2. **Phase 7's commerce hook stub is no longer purely inert.** `Edition.access?: 'free' | 'gated'` and `hasAccess()` were built in the original Spec as a deliberately meaningless seam ("always `true`," "lands without blocking or being blocked"). Purchasing is now partially resolved — a gated tier is confirmed for non-featured Editions — so the field already has real intent behind it, even though `hasAccess()`'s actual logic still can't be written until the access mechanism is chosen. Not building ahead of that; just not letting Phase 7 get built later against the stale "fully open" framing.
3. **Phase 2's current revision work matters more, not less.** Dragon's Reader is now confirmed as the only Reader the public ever sees in full — it is the demonstration of the entire publication experience, not one of six interchangeable instances. The four experiential gaps Susan identified (orientation, sequence rhythm, poem fidelity, Recognition's web-nativeness) are being addressed against the Edition that actually carries that weight.

The other five Editions currently fall back to `EditionReader`'s `total === 0` empty state ("This Edition's Reader isn't built yet") if their `/read` route is visited — harmless today since nothing links to it, but worth noting that copy implies "coming soon, same as Dragon," which won't be true once Phase 5 is redefined. Not changed now — Phase 5 hasn't begun — flagged so it isn't carried forward by accident.

**2026-06-29 — Governing Directive: Engineering Pilot → Publishing Platform (rollout paused pending review).** Susan issued a directive confirming the engineering question (can a Figure Edition become a native web Reader) is answered, and reframing the open question as a publishing one: what an AwakenArts Figure Edition should *feel* like on the web, not how to reproduce the PDF in a browser. Four scopes were requested before any further phase resumes: a revision of the Reader experience itself (opening, orientation, pacing, sequencing, transitions, poem presentation, Recognition, Reflection, closing); a revision of the product model (the public Reader is now explicitly an *abridged* introduction — the complete Figure Edition remains the published product); a recommendation on whether Grismere, not Dragon, should be the **featured** public Reader; and a presentation strategy for the marketing transition from the Featured Reader through Complete Edition, Additional Editions, Collections, Workshop Resources, Facilitator Resources, and Retreats, without breaking the Reader's contemplative character.

All four were produced as a single deliverable: **`AwakenArts_Reader_Design_Revision_Plan.md`**, committed alongside this note. Grounded directly against Dragon's actual `sections` content (as the prior "not yet accepted" finding already was) and, newly, against the published `Grismere_Figure_Edition.pdf` itself — rasterized and read as images, since like the other five Editions it carries no extractable text layer. That direct check surfaced a concrete, previously unknown fact load-bearing for the plan: Grismere's poem is a literal multi-colored calligram (a shape poem typeset into a figure's outline), not reflowable verse like Dragon's — meaning the Word section needs two presentation modes (live-typeset text, or presented image/SVG artifact), a fact about the underlying poem rather than a global design choice. The plan recommends Grismere as the featured public Reader on tone/identity/purpose grounds (its themes of longing and a divided self map directly onto "Longing," the first step of the site's own locked Path of Recognition model), while recommending Dragon remain the ground the revised Reader pattern is built and proven against first, since redoing that proof on Grismere from zero would discard the Phase 1/2 work already accepted-in-part on Dragon for no engineering reason.

**Per the directive: rollout does not resume, and no Phase 1 data-model change is made, until Susan reviews and approves the Revision Plan.** This supersedes nothing in the table below — it freezes everything below at its current status until that review happens. Tasks #260–263 (the four Phase 2 revision items from the prior round) are superseded by the Revision Plan's Section 1, which restates and extends them; they are not separately resolved by this note.

**2026-06-29 — Four further directives, same day, refining the architecture above before Susan had even reviewed the Revision Plan.** In quick succession: (1) **Two Reader Experiences** — the Public Reader and Owner Reader are not permission states of one Reader but two distinct products, with separate routing, navigation, calls to action, endings, and visitor relationships; site organization split into a Public Website (Encounters, Featured Reader, Collections, About, Foundation, Marketing Platform) and an Owner Platform (My Library, Complete Figure Editions, Download, Print, Future Collections, Workshop Resources, Facilitator Resources). (2) **Three design languages**, identified directly from the published PDF — the Figure page (a formal spread), the Poem page (a designed composition where the whole page, not just the poem, is the artifact), and the Recognition/Reflection pages (built for sustained reading) — which should not all be translated to the web the same way; for some poems the Owner Reader should preserve the composed page nearly as authored. (3) **Marketing Platform First** — the work underway is the AwakenArts marketing platform itself, not a website with a Reader bolted on; the Public Reader is a marketing instrument that must never communicate "here is your free Edition," only "this is the beginning of something larger"; every feature should now be checked against whether it strengthens the platform or accidentally satisfies the visitor so completely that the products become unnecessary. (4) **Build the House Before Furnishing the Rooms** — AwakenArts is a publishing house, not a set of independent features; rooms are named explicitly (Public House: Homepage, Foundation, Encounters, Featured Reader, Collection Preview, About; Transition: Complete Edition, additional Editions, Collections, Workshops, Facilitator Resources, Retreats; Owner House: My Library, Complete Figure Editions, Read Online, Download, Print, Collections, Workshop Resources, Facilitator Resources, Retreat Resources), and this directive **names Grismere directly as the Featured Reader** — resolving, rather than merely accepting, the Revision Plan's Section 6 recommendation.

All four are recorded in full in `AwakenArts_Publishing_Platform_Architecture.md` (dated sections, same day) and worked into `AwakenArts_Reader_Design_Revision_Plan.md` as Sections 7–8: a Two-Reader revision of Sections 3–5, a Marketing-Platform-First addendum to the roadmap, and a new Section 8 room-placement map run against what's actually live on the site today. That map found two genuine placement questions that aren't this plan's to guess at — whether `/collection` (which currently both previews the work and lists Editions toward acquisition) and `/poems` (an excerpt gallery named in neither room list) belong in Public House or Transition — and one feature, the Workshops/Facilitator-orientation pages, built before the Public-House/Owner-House split existed and now spanning both without distinction. None of this changes the standing instruction: **rollout does not resume until Susan has reviewed and approved the Revision Plan**, now inclusive of Sections 7–8.

**2026-06-29 — Governing Principle: Architectural Blueprints Before Construction.** A fifth directive, same day, formalizes the "Build the House" design rule into a standing process requirement rather than adding new architecture: every implementation proposal must now state its architectural location (which room, which house) before any discussion of how it would be built. Architecture determines implementation, not the reverse — recorded as its own dated section in the Architecture doc, directly beneath "Build the House." No change to the room assignments already on file, and no change to the standing rollout freeze.

## 2026-06-29 — AwakenArts Product Architecture Initiative: drafted and recorded.

Susan issued a sixth directive the same day as the five recorded above, reframing the current task entirely: "The current task is no longer the implementation of website features. The current task is to define the complete AwakenArts publishing business before implementing its remaining components." Six requirements were named: the complete family of marketable products, each product's purpose, audience, and the relationship it creates, the discovery-to-acquisition-to-use pathway, and the website features each requires.

A repo survey (not previously done in this engagement) found that most of this work already existed, in detail, across documents in `AwakenArts_Workbook/` that had never been reconciled with this Log, the Architecture doc, or the Spec — chiefly `Book_01_Workshop_System_Blueprint.docx` (a fully worked nine-component, four-bundle commercial system for a six-Figure workshop book) and `AwakenArts_Workbook_Series_Architecture.docx` (a six-guide series plan and a fourteen-section Master Curriculum that the guides feed into). The survey also surfaced nine Figures (Merri, Bear, Dove, Chess, King, Ladybug, Angel, Church, Pottery) that exist as authored Workbook material with no product home anywhere, and two documents (`docs/FORWARD_BRIEF_PRODUCTION_PHASE.md`, `docs/THE_FORMS.md`) describing an apparently superseded earlier identity for the project ("Within the Circle," a Threshold/silhouette vocabulary) that doesn't match anything currently live.

The result is **`AwakenArts_Product_Architecture.md`**, committed alongside this note. It catalogs four product families (Figure Editions; the Workshop Guide Series and Book 01; the currently-built Workshop Kit already live at `/workshops`; free relationship-building products), maps required website features against the Public House / Transition / Owner House rooms, and names five places where the existing source documents disagree with each other or with what's actually live — most significantly, whether Book 01 supersedes the Series Architecture document's six-guide plan, and what becomes of the five guides (The Queen, The Vessel, The Dragon, The Ballerina, Merri) that document proposed but Book 01 doesn't address. None of these tensions were resolved unilaterally; they're recorded as open questions for Susan in the new document's Part Five, alongside the standing Purchasing and `/collection`/`/poems` placement questions carried forward from this Log.

**Per the Initiative's own instruction: no further implementation resumes, on any product family, until Susan has reviewed `AwakenArts_Product_Architecture.md`.** This supersedes nothing recorded below — the Reader Platform rollout freeze already in place stands unchanged; this adds a second, broader gate alongside it.

## 2026-06-29 — Gallery, Collection/Edition Preview, and the Editions Store: room placement resolved, two new pages named

Four rapid-fire directives the same day, all recorded here and cross-referenced into the Architecture doc and the Reader Design Revision Plan:

1. **Gallery (formerly Poems).** `/poems` is renamed Gallery. Purpose: "quiet browsing and appreciation," explicitly not part of the marketing sequence — it presents representative artwork, Edition titles, and existing descriptive text without asking visitors to make decisions. Follow-up directive "Remove links" makes this concrete: the Gallery's defining trait is that it contains no link or decision-point at all, unlike every other Public House/Transition room.
2. **Collection, Edition Preview, and the Architectural Sequence.** `/collection` stays as built (Public House, "introduces the published body of work"). Selecting a contact sheet now opens a newly-named room, the **Edition Preview** — not a document viewer, but "the principal marketing hub" for each Figure Edition, building appreciation and leading toward the Complete Figure Edition, the Featured Reader (Grismere), related Editions, future Collections, workshops, facilitator resources, author notes, and retreats, without ever exposing the complete Edition. The full visitor path is named for the first time: Homepage → Encounters → Gallery → Collection → Edition Preview → Featured Reader or Complete Figure Edition → Owner Platform, governed by "no page should attempt to perform the work of the page that follows it."
3. **Two levels of acquisition.** Edition Preview's content is specified concretely (contact sheet, what the Edition explores, what's included, who it's for, related Editions, workshop applications, facilitator resources, testimonials later, "Acquire [Edition]") — Susan's own framing: "that page sells Dragon." A second, separate page — the **Editions Store** (working name "Figure Editions" or "Acquire Editions") — is new scope: a flat, meaning-free catalog ("the bookstore shelf") showing cover, title, one sentence, formats, price, and Acquire, per product. Susan's explicit instruction: "think like a publisher rather than an online retailer" — the two pages answer different visitor needs, not compete.
4. **Store category scope.** The Editions Store's full category list, per Susan's immediate follow-up: Figure Editions, Collections, Workshop Guides, Facilitator Resources, Retreat Materials, Gift Certificates, Future Courses. This makes the Store the single catalog surface for the entire product line in `AwakenArts_Product_Architecture.md`, not a Figure-Editions-only shelf. Gift Certificates and Future Courses are named here for the first time in any document in this hierarchy — flagged, not yet defined.

**This resolves Task #272** (room placement for `/collection` and `/poems`) **in full.** It does not resolve Open Decision #1 below — the Purchasing/entitlement mechanism remains undecided; what changed is that the pages it will sit behind (Edition Preview, the Editions Store) now have names and content shapes.

**Implementation status: none of this is built.** Per the standing freezes already in force (Reader Platform rollout pending Revision Plan approval; product-family implementation pending Product Architecture review), this is recorded as architecture only. Newly identified, not-yet-started implementation scope: renaming `/poems` to Gallery and removing its links; building Edition Preview as an actual marketing presentation (today it's a plain contact-sheet image viewer); building the Editions Store page from scratch.

## 2026-06-29 — Gallery rename implemented; Editions Store retracted; Each Figure Edition is the center of its own product family

**Gallery rename: built and committed (`70b5084`), per Susan's explicit immediate authorization.** `/gallery` now carries the former `/poems` content — the same six tiles (Poppy, Dragon, Grismere, Bowls, Ballerina, Queen Ann), same images and excerpts — with the per-card "View the Edition" link removed from every tile, per "Remove links." `/poems` now redirects to `/gallery` (same pattern as the existing `/begin` → `/` redirect). `Nav.tsx`, `Footer.tsx`, and `WayfindingBand.tsx` updated from Poems/`/poems` to Gallery/`/gallery`. `tsc --noEmit` clean. This is the first piece of implementation actually completed against today's directives — everything else recorded below is architecture only, per Susan's own sequencing ("proceed now with the Gallery rename... then revise the architectural documents... before additional implementation continues").

**The Editions Store (item 3 in the entry above) is retracted, not built.** Susan's correction, in full: "The Edition remains the source publication. The surrounding products derive from the Edition rather than existing independently. Do not design a separate Store page at this time. Instead, strengthen the Edition Preview pages so they naturally become the entry point into each Edition's product family. The purchasing architecture should emerge from the Edition pages themselves rather than from a generic storefront." No Store page, catalog, or "bookstore shelf" is to be designed. Per this Log's own append-don't-rewrite discipline, the prior entry stands above as the record of what was proposed and then overruled before any of it was built.

**Edition Preview reconfirmed as the existing enlarged contact-sheet page, refined in place — not a new route.** This was already this Log's working assumption (see "Implementation status" in the entry above: "building Edition Preview as an actual marketing presentation" of the page that already exists); Susan's correction forecloses any reading otherwise.

**New governing model: each Figure Edition is the center of its own product family.** Susan: "Dragon doesn't have 'a PDF.' Dragon has a family: Edition, Reader, Workshop Kit, Slides, Facilitator Notes, Collections, Future Retreat use. Those aren't separate products floating around the site." And, naming Edition Preview's role directly: "The Edition Preview (the enlarged contact-sheet page) is not simply introducing the Edition. It is the center of the product family. Everything radiates from that page." Diagrammed for Dragon specifically:

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

The family list, named directly: Complete Figure Edition, Read Online, Download, Print, Workshop Kit, Presentation Slides (derived from the Edition), Facilitator Notes, Participant Materials, Collections containing the Edition, future retreat resources.

**Purchasing has no separate page.** Susan: "The purchasing page is not separate from the Edition Preview. It grows naturally from it." Acquire is a branch of Edition Preview, not an independent destination — consistent with, and the direct reason for, the Store's retraction above. Open Decision #1 below is unchanged in substance (the mechanism is still undecided); what changes is where its eventual UI lives.

**Recorded in full, same day, in both companion documents:** `AwakenArts_Publishing_Platform_Architecture.md` ("Correction: Editions Store Retracted; Each Figure Edition Is the Center of Its Own Product Family") and `AwakenArts_Reader_Design_Revision_Plan.md` (Section 10, "the Store is retracted; Edition Preview is the product family's center").

**Implementation status going forward.** Per Susan's instruction, no further implementation — Edition Preview's actual refinement, any per-Edition product-family build-out, or anything Acquire/purchasing-related — begins until this correction is recorded across all three documents, which this entry and its companions satisfy. The Gallery rename above is the one exception, already authorized and already built ahead of this correction.

## 2026-06-29 — Standard: the Edition Closing Page (Publisher's Imprint)

**Specifies the Colophon (#7) section of the Figure Edition template (Task 2, `AwakenArts_Publishing_Platform_Architecture.md`).** Susan, in full: "For the Editions I would make it a standard closing page that never changes except for the copyright year if needed... This becomes part of your publishing identity, much like a publisher's imprint page. Readers will come to expect it, and every edition will quietly reinforce the AwakenArts brand without interrupting the symbolic experience. I would place it after the final reflection page, so the encounter is complete before the reader arrives at the publishing information." Her example text:

> AwakenArts (logo)
> An AwakenArts Symbolic Edition
> When Language Shapes a Path.
> This edition is part of the AwakenArts Collection—a growing body of symbolic works created through image, poetry, and reflection to invite recognition rather than explanation.
> Explore additional editions, encounters, and resources at:
> AwakenArts.com
> © Susan Ann Shepler. All rights reserved.

Full text, rationale, and the page's relationship to the website's "Acquire" (a different thing — Acquire lives on Edition Preview, this Colophon lives inside the PDF itself) recorded in `AwakenArts_Publishing_Platform_Architecture.md`, "Standard: the Edition Closing Page (Publisher's Imprint)."

**Implementation status.** Architecture only. The standard confirms the Colophon's existing position in the Task 2 template (after Reflection, before Acquire) and locks its content, but none of the six built Edition PDFs (Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann) have been regenerated with it. Retrofitting all six, and applying it to every Edition built going forward, awaits explicit authorization.

## 2026-06-29 — Edition Closing Page: production authorized, prototype built and reviewed, rollout underway

**Authorization.** Susan: "We need this page and don't be too skimpy on the logo or over do it either." Production begins on the standard recorded immediately above.

**Two refinements made along the way**, both recorded in full in `AwakenArts_Publishing_Platform_Architecture.md` ("Production Authorization + Two Refinements: the Edition Closing Page"):

1. The fixed body line is revised to: "This edition is one work within the AwakenArts Collection. Each edition stands on its own while contributing to a larger body of symbolic exploration." Replaces the original example line; still fixed, word-for-word, across every Edition.
2. **Exact placement resolved.** Asked where the Colophon lands against the real as-built page order (Reflection → Guided Journaling → Message Delivered → Facilitator Notes), Susan chose the **very last page of the PDF, after Facilitator Notes** — replacing the placeholder brand sign-off currently at the bottom of each Edition's Facilitator Notes page (`pageN_facilitator.py`'s closing `hr`/`ampersand_glyph`/"AWAKENARTS"/tagline block), rather than inserting it directly after Reflection.

**Prototype built and shown.** Rendered against Dragon using the Figure Edition Engine (`AwakenArts_Workbook/Architecture/Figure_Edition_Engine/engine.py`) — the brand mark redrawn natively in PIL (gold double-arc via the same bezier control points as `public/images/brand/logo-mixed.svg`, P052 wordmark, gold rule, italic tagline) rather than a pasted raster, sized to roughly a quarter of the page width. Shown to Susan; she answered the placement question above without objecting to the visual, taken as approval to proceed.

**Implementation status.** Prototype complete. Production rollout — removing the placeholder sign-off from each Edition's Facilitator Notes page, adding the Colophon as a new final page, regenerating all six PDFs (Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann) and their contact sheets — is in progress.

## 2026-06-29 — Edition Closing Page: rollout complete, all six Editions

All six Figure Edition PDFs now end on the Colophon as their final page, replacing the old placeholder brand sign-off. Every edition is 12 pages; the fixed body line and footer treatment are identical in substance across all six, varying only in per-edition footer label and house style.

**Dragon, Bowls, Ballerina, Grismere** — built from the shared Figure Edition Engine (`engine.py`). The Colophon template was generalized from the approved Dragon prototype into a single parameterized generator (page number and section label substituted per edition), rendered once per edition, then assembled via `pypdf`: pages 1–10 unchanged, the Facilitator Notes page rebuilt without its old sign-off block, the new Colophon appended as page 12. Overwrote both `public/files/editions/` and the corresponding Workbook master copy for each.

**Poppy** — has no shared-engine build; its own `reportlab`-based script (`AwakenArts_Workbook/06_Poppy/build_poppy_pdf.py`) was edited directly: the old sign-off block removed, a new Colophon page added in Poppy's native Pagella/Lato + navy-cream-gold style (same fixed wording, edition-appropriate visual treatment). All other page footers' "X ⁄ 11" denominators were corrected to "X ⁄ 12" site-wide in that script, since the edition is now 12 pages — a consistency fix made along the way, not separately requested. Rebuilt and overwrote `public/files/editions/Poppy_Figure_Edition.pdf`; no Workbook duplicate exists for Poppy.

**Queen Ann** — no surviving source script for this edition, so the retrofit was done by direct raster edit: the existing page 11 (a single full-page embedded image) was extracted losslessly, the placeholder sign-off region painted over with the page's own background color (bounds located by pixel-row scanning, not estimated by eye), and the new Colophon — rendered via the same parameterized template — appended as page 12. Overwrote `public/files/editions/Queen_Ann_Figure_Edition.pdf`; no Workbook duplicate exists for Queen Ann either.

**Verification.** All six PDFs confirmed at 12 pages with correct mediaboxes. Pages 11–12 of every edition were rendered to image and visually inspected: each Facilitator Notes page is clean with no remnant of the old sign-off, and each Colophon page carries the correct fixed body text, "AwakenArts.com," copyright line, and edition-specific footer label.

**Implementation status.** Complete. The Colophon standard recorded above is now live in every shipped Figure Edition PDF. Applying it to any future Edition build is part of the standard template going forward, not a separate task.

## 2026-06-29 — Edition-Specific Purchase Page (evolves the "Editions Store Retracted" correction)

Per Susan's directive (recorded in full in `AwakenArts_Publishing_Platform_Architecture.md`, "Evolution: the Purchase Page Becomes Its Own Edition-Specific Page"), "Acquire" is promoted from a section of the Edition Preview page to its own route, `/editions/[slug]/purchase`, built once and applied uniformly to all six Editions via the existing `editions.ts` + `generateStaticParams` template. This is explicitly not a centralized Store: each Purchase page has exactly one entry point (that Edition's own Preview page) and is not listed, linked, or indexed anywhere else.

**Built this pass:**
- `src/data/editions.ts` — added `about` (a short paragraph on the work and the relationship between image and poem) and `themes` (a short list of theme words/phrases) to the `Edition` interface, populated for all six Editions from real authored source material: Dragon's own already-transcribed `sections` text; Bowls's `Bowls_Notes_on_the_Figure.md` (the "Both Sides Now" two-bowl account, in Susan's own words); Ballerina's and Grismere's `*_Notes_on_the_Figure.txt`; Poppy's PDF text layer (`pdftotext -layout`, the only one of the six with an extractable layer); and Queen Ann's `QueenAnn_Notes_on_the_Figure.txt`. No copy was invented.
- `src/app/editions/[slug]/page.tsx` (Edition Preview) — added an About section, a Themes line, and a "What This Edition Includes" list, all reading as introduction rather than sales copy. Removed the direct `View the Figure Edition (PDF)` link (this had been quietly handing over the complete Edition from the Preview page, contradicting the Preview's own governing constraint that it "must increase desire without ever exposing the complete Edition" — a pre-existing inconsistency, corrected here rather than carried forward). The primary CTA now leads to the new Purchase page.
- `src/app/editions/[slug]/purchase/page.tsx` (new) — the edition-specific Purchase page: what the visitor receives, what's included, format options (Digital Edition / Print Edition), and delivery, with pricing and checkout explicitly marked "to be announced" per Susan's brief ("Use placeholders where purchasing details are not yet finalized") and per Open Decision #1 below, which remains unresolved. No functioning cart or payment flow exists or was built — placeholder UI only.
- `globals.css` — new `.edition-about*`, `.edition-themes*`, `.edition-includes*`, and `.purchase-*` rules, matching the site's existing cream/navy/gold token system (`--cream`, `--deep`, `--gold`, `--mid`, `--serif`, `--sans`) and the Edition page's established "minimal by design" register.

**Implementation status.** Built and verified (`tsc --noEmit` clean). Applied to all six current Editions in one pass, not prototyped on a single one first, per Susan's explicit instruction.

## 2026-06-29 — Refinement: About This Edition describes experience, not meaning

Same day, immediately after the above. Susan reviewed the first draft of the About copy (interpretive: "The Dragon holds two things that look like enemies...") and corrected the framing, using Dragon as the example:

> "This edition presents The Dragon as it was created: image and poem together, followed by guided recognition, reflection, and facilitator notes. It is designed for personal reading, discussion, or group exploration. What kind of experience is this edition? Not: What does the Dragon mean? I'd move toward something much simpler."

Followed by the governing rule, stated explicitly for all six Editions:

> "About This Edition → describes the experience. Themes → suggest the territory. The edition itself → does the symbolic work."

**Built this pass:**
- `src/data/editions.ts` — replaced all six `about` fields with the simpler, structurally identical experience-description (image and poem together, guided recognition, reflection, facilitator notes; for personal reading, discussion, or group exploration), varying only by title. The governing rule is now recorded directly against the `Edition` interface so it survives future edits. `themes` arrays were left as-is — they already read as territory-gestures, not interpretation.
- `src/app/editions/[slug]/page.tsx` — added "About This Edition" and "Themes" eyebrow labels; removed the separate "What This Edition Includes" section, which had become redundant once About took on that job (it was also still using the older "exploring the figure's meaning" language this refinement retires).
- `src/app/editions/[slug]/purchase/page.tsx` — trimmed the parallel "What You'll Receive" includes line to just the one detail About doesn't cover (the closing Colophon), since the rest is now stated once, in About.
- `globals.css` — renamed/simplified the "EDITION PREVIEW — About / Themes / Includes" block to "About This Edition / Themes"; added `.edition-about__eyebrow` / `.edition-themes__eyebrow`; removed the now-unused `.edition-includes*` rules.

## 2026-06-29 — Restructure: the Purchase page stops selling symbolism, starts answering practical questions

Same day, after Susan reviewed a further editorial pass on the Purchase page's own copy and arrived at its governing principle:

> "The Purchase page is not selling symbolism. It's selling a published edition. That subtle shift changes the tone from 'Here's why the Dragon matters…' to 'Here's what you'll receive when you acquire this edition.' ... The literary work has already persuaded the reader. The Purchase page simply removes uncertainty about the format and contents."

Susan specified the resulting section order and content directly: About This Edition (short, generic paragraph), What You'll Receive (a scannable bulleted list, not prose — including two complimentary printable items not previously listed: a printable poem sheet and printable figure image PDF), Formats (just the two delivery formats, pricing removed from this section), Price (its own section, placeholder-only for now), Purchase (one CTA — "Acquire the Figure Edition," not "Buy"), and a single Navigation link back to the Edition's own Preview ("Back to the Collection" eliminated).

**Built this pass — `src/app/editions/[slug]/purchase/page.tsx` fully restructured:**
- About This Edition — new, generic, publisher-voiced paragraph; deliberately not the same text as the Preview page's own About section or the shared `editions.ts` `about` field (this page no longer reads from `edition.about` at all).
- What You'll Receive — converted from prose to an eight-item bulleted list (Complete Figure Edition PDF, original image and concrete poem, Recognition pages, Reflection pages, Facilitator Notes, AwakenArts Colophon, complimentary printable poem sheet, complimentary printable figure image "when available").
- Formats — simplified to title + one line of detail per format; pricing moved out.
- Price — new section, two lines, both "Price to be announced" pending Open Decision #1.
- Purchase — new section with a single disabled button ("Acquire the Figure Edition") and a one-line disclosure that purchasing isn't yet active. Still no functioning cart or checkout — this remains an honest placeholder per the standing prohibition on building real payment logic without a resolved entitlement mechanism.
- Navigation — reduced to the one "← Return to Edition Preview" link.
- `globals.css` — replaced the old two-column Format-card-with-price layout with the new six-section rule set (`.purchase-about*`, `.purchase-receive__intro`/`__list`, simplified `.purchase-option*` without price, `.purchase-price*`, `.purchase-cta*`); removed now-unused `.purchase-option__price` / `.purchase-options__note` rules.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on both the page and the stylesheet). Applied to all six current Editions in one pass via the shared template — no per-edition prototyping.

**Implementation status.** Built and verified (`tsc --noEmit` clean). Applied uniformly across all six Editions in the same pass.

## 2026-06-29 — Homepage hero: invitations stripped to the two doorway links, no teaser text, no arrows

Same day, per Susan's direct brief on the hero: "Homepage hero image section -- preserve a good sized hero image but work well with AWAKENARTS / When Language Shapes a Path / Discover symbolic language through image and poem. / Enter the Encounters / Explore the Collection / Not explanatory text -- no arrows."

The hero already carried exactly that content (logo, two-line tagline, gold mission line, and the two Editorial Invitations), but each invitation also carried a one-line teaser paragraph beneath it ("Guided symbolic encounters through image, poem, and Scripture." / "Discover the growing library of AwakenArts Figure Editions.") and an arrow glyph after the link text — both explicitly ruled out by this brief.

**Built this pass:**
- `src/app/page.tsx` — removed both teaser `<p>` elements and both `<span className="arrow">→</span>` glyphs from the hero invitations; removed the now-unnecessary `.hero-invitation` wrapper `<div>`s since each invitation is now a single link with nothing left to group.
- `src/app/globals.css` — removed the arrow-hover transform rules and the `.hero-invitation__teaser` rule (now unused); pulled the `.hero-invitations` gap back from 2.25rem to 1.5rem (1.25rem on mobile) since the block is now two short lines instead of two short paragraphs-with-teasers; removed the now-unused `--invitation-teaser-size`/`--invitation-teaser-line` tokens from `:root`, leaving `--invitation-title-size`/`-weight` in place since the link styling itself is unchanged.
- The hero image itself (`.hero__media`, the `<picture>` variants, `object-fit: cover` framing) was left untouched — its size is driven by the grid row height via `align-items: stretch`, which the shorter text column doesn't affect, so the "good sized hero image" requirement was already satisfied structurally and needed no change.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on both files returned 0).

## 2026-06-29 — Gallery: AtmosphericHeader removed (second removal of a threshold header on this page)

Same day, per Susan: "I love the header style on the gallery page but it doesn't work with the page -- remove the header."

The `gallery-banner-3.jpg` AtmosphericHeader (added under the "Banner Height + Seam" rollout, Phase: Apply new image + smoothed transition to Gallery page) is removed from `src/app/gallery/page.tsx`. The page now opens directly on `.lib-hero`. No CSS change was needed: `.lib-hero` already owns its own dark (#0e1418) background and enough top padding (6rem desktop / 4rem mobile) to clear the fixed nav (72px / 56px) on every breakpoint — it was never structurally dependent on the header above it, only visually paired with it via the header's `fadeTo` blend.

Note for continuity: this is the second time a threshold-style header has been tried and pulled from this same page — the original Threshold Header on the former /poems page was removed 2026-06-25 for the same reason ("wasn't reading well"), before AtmosphericHeader was reintroduced here later under the site-wide banner rollout. Recorded here so a third attempt, if proposed, is read against this history rather than as a fresh idea.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check returned 0).

## 2026-06-29 — Homepage hero: image elongated, text/image gap closed

Same day, per Susan, immediately after the invitations simplification above: "elongate the hero image rather than flatten its height and move the left content and the hero image close to one another."

This surfaced a side effect of the invitations pass earlier the same day. The previous entry stated the hero image's size was "driven by the grid row height via `align-items: stretch`, which the shorter text column doesn't affect" — that was wrong. `.hero` has no explicit height; with `align-items: stretch` and nothing else fixing the row's height, the row is sized to the taller of the two columns' natural content height, and `.hero__media` had no natural height of its own beyond a `min-height: 420px` floor. Shortening the text column (removing the teaser lines and arrows) meant the row had nothing tall left to stretch to, so it collapsed toward that 420px floor — the image rendered shorter and wider-looking ("flattened") than before, exactly what Susan flagged.

**Built this pass (`src/app/globals.css`):**
- `.hero__media` `min-height` raised from 420px to 640px on desktop, with a scaled-down 540px floor added at the ≤1024px tablet breakpoint (narrower column, so the same floor would over-crop). This is still a floor, not a fixed height — the row can still grow taller if the text column ever needs more room — but it now guarantees the image reads as tall on its own rather than being squeezed down to match short text. `object-fit: cover` absorbs the added height by cropping a bit more off the sides; the existing `object-position: 70% center` keeps the Queen Ann figure in frame as that happens.
- `.hero` `column-gap` pulled in from 3rem to 1.5rem on desktop, matching the value already used at the tablet breakpoint, so the text column and the image sit close together instead of spanning the wide desktop gutter. Tablet/mobile gap values were already tight and untouched.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on `globals.css` returned 0).

## 2026-06-29 — Homepage hero: second gutter pass (single composition) + Gallery title-to-tiles gap tightened

Same day, two further refinements per Susan.

**Hero, second pass.** Susan: "Tighten the homepage hero composition by reducing the horizontal gutter between the text column and the hero artwork. Move the artwork left until the headline and illustration read as a single composition rather than two separate panels. Increase the artwork slightly (approximately 5–10%) if needed to maintain balance after repositioning. Preserve the generous outer page margins while making the center of the hero feel more unified."

The first hero pass earlier today had already pulled `.hero`'s desktop `column-gap` from 3rem to 1.5rem; this asked for something tighter than "close together" — "a single composition." Built (`src/app/globals.css`):
- `column-gap` cut again, 1.5rem → 0.85rem on desktop, 1.5rem → 1rem at the ≤1024px tablet breakpoint.
- `.hero`'s `grid-template-columns` image fraction raised from `1.1fr` to `1.2fr` (text column's `1fr` unchanged). At this container's max-width this both grows the image's rendered width (~6%, inside the 5–10% asked for) and pulls the image's left edge toward the text column — a smaller gap and a larger image column both move that edge left, which is what "move the artwork left" actually required, since `justify-self: end` on a 100%-width media block has no positioning effect on its own.
- `.hero__media`'s `min-height` raised by the same proportion, 640px → 688px on desktop and 540px → 580px on tablet, so the image grows in height as well as width rather than just getting wider and flatter.
- `.hero`'s outer padding (2rem left / 1rem right) was left untouched — only the gutter between the two columns moved, not the page's outer margins, per Susan's explicit "preserve the generous outer page margins."

**Gallery, title-to-tiles gap.** Susan: "Reduce the vertical gap between 'The Gallery' and the first row of contact sheets by perhaps 10–15%. Right now there's a generous amount of empty space. It isn't wrong, but if you eventually have three or four rows of editions, tightening that gap slightly will help the works become the focus sooner."

`.lib-hero` and `.poems-gallery-section` are used only on `/gallery` now (both are vestigial `/poems`-era class names, confirmed by grep — no other page references them), so this was a scoped, safe change. `.poems-gallery-section`'s own top padding was already minimal (1rem), so `.lib-hero`'s bottom padding was effectively the entire visible gap between the H1 and the tile grid. Built (`src/app/globals.css`): `.lib-hero` `padding-bottom` cut 5rem → 4.25rem on desktop (-15%) and 3.5rem → 3rem at the ≤640px breakpoint (-14.3%). Top and side padding on `.lib-hero` were left unchanged — only the title-to-tiles gap moved.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on `globals.css` returned 0).

## 2026-06-29 — Homepage hero: fourth pass, artwork nudged left (translate, not resize)

Same day, per Susan: "moving the artwork 10–20px farther left — not enlarging it, just nudging it slightly toward the headline... subtle visual tension between the two halves without making them touch." She also noted the homepage now reads conceptually clearly.

Distinct from the prior passes, this was explicitly a position-only nudge, not a size change. `.hero__media` already fills its grid column at `width: 100%`, so there's no slack for `justify-self` to use — the only way to move the box itself without touching the grid's track math (which would also move/resize the text column) is a `transform: translateX()` on the media block directly.

**Built (`src/app/globals.css`):**
- `.hero__media` base rule: `transform: translateX(-16px)`. Desktop's gap is 0.85rem (~13.6px), so this brings the two halves close to touching without crossing into the text column's own content at this viewport.
- ≤1024px tablet override: `transform: translateX(-10px)` — tablet's gap is 1rem (16px), so the full -16px would have closed it to zero; dialed back to stay inside "close but not touching" at the narrower width.
- ≤768px mobile override: `transform: none` — the layout stacks into a single column here, so a leftward shift no longer applies and would just push the image toward the edge.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on `globals.css` returned 0).

## 2026-06-29 — Homepage Collection section: body paragraph replaced

Same day, per Susan's exact replacement text: "Each Figure Edition brings image, poem, and reflection together as a single published work. Gallery prints, concrete poems, and companion materials extend the same work, each revealing another aspect of the figure."

Replaces the prior `home-coll-body` copy ("...a complete reading experience built for recognition rather than explanation"). This introduces gallery prints, concrete poems, and companion materials as extensions of the same published work for the first time on the homepage — a small but real claim about product family, so it's worth flagging here in case it needs to line up with how those items are actually offered elsewhere (Collection page, Edition Preview/Purchase pages) as that part of the site develops.

**Built:** `src/app/page.tsx` — `.home-coll-body` paragraph text only, dictated verbatim. No CSS change.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on `page.tsx` returned 0).

## 2026-06-29 — Homepage reader-awareness pass: hero orientation line + Collection claim softened

Susan asked for a homepage evaluation of reader use and goal-awareness. Findings: a first-time visitor isn't told what AwakenArts actually publishes until well past the hero, and the prior Collection paragraph (added same day, see entry above) named "gallery prints, concrete poems, and companion materials" as live extensions of the work before those exist anywhere else on the site. Susan reviewed both findings and approved two of the four proposed fixes, explicitly deferring CTA-hierarchy changes (the calm, no-"buy now" tone is intentional and will resolve naturally once purchasing goes live) and reordering the Wayfinding Band (comprehension happens earlier on the page, not in the closing nav).

**Built**, both in `src/app/page.tsx`:
- `.hero-mission`: "Discover symbolic language through image and poem." → "Discover symbolic language through image and poem in a growing collection of Figure Editions." One added clause naming the product (Figure Editions) before the visitor commits to Encounters or Collection.
- `.home-coll-body`: replaced the same-day "Gallery prints, concrete poems, and companion materials extend the same work" sentence — a claim about product types not yet live elsewhere on the site — with "As the collection grows, related visual forms and companion materials extend the same symbolic figure," which states the same growth idea without naming specific unavailable product types.

Susan's own note for the record: the homepage's three sections (Foundation / Encounters / Collection) are stabilizing into the site's real architecture, with Gallery, Journal, and About each now reading as support for one of the three — a sign the project is shifting from page-by-page design to a settled publishing model.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on `page.tsx`: 30/30).

## 2026-06-30 — Homepage hero: headline + mission line replaced with new two-sentence statement

Per Susan, the hero headline and mission line ("When Language / Shapes a Path" + "Discover symbolic language through image and poem in a growing collection of Figure Editions.") are replaced with a new two-sentence hero statement: "AwakenArts begins with encounter rather than explanation. Here, the soul recognizes what the mind alone cannot." Confirmed scope with Susan first since the new copy reads as a mission statement rather than a short two-line title — she confirmed it should replace both the headline and the mission line, not just the mission line.

**Built**, `src/app/page.tsx`:
- `.hero-tagline` (h1): first sentence, set as plain text rather than the prior two-`<span>` structure. The old spans existed only to force "When Language" / "Shapes a Path" into a balanced two-line title shape (`display: block` + indent on the second line, in `globals.css`); a full sentence doesn't need that treatment and now wraps naturally.
- `.hero-mission` (p): second sentence, in the same paragraph slot as before.

No CSS changes — `.hero-tagline`'s span rules in `globals.css` simply go unused now that the h1 has no child spans.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on `page.tsx`: 30/30).

## 2026-06-30 — Homepage hero: headline restored, correction to prior entry

Susan caught this immediately after the prior entry landed: "Oops — Where Language Shapes a Path remains — then the reason they do this work with AwakenArts — the following text." The headline was never meant to be replaced — only the mission line beneath it.

**Built**, `src/app/page.tsx`:
- `.hero-tagline` (h1): restored to the original two-`<span>` title treatment — "When Language" / "Shapes a Path."
- `.hero-mission` (p): now carries both sentences of today's new copy together — "AwakenArts begins with encounter rather than explanation. Here, the soul recognizes what the mind alone cannot." — as the reason/mission statement beneath the restored headline.

Net effect of today's two hero entries combined: headline unchanged from where it started; mission line moved from the Figure-Editions orientation sentence to this new statement.

**Implementation status.** Built and verified (`tsc --noEmit` clean, brace-balance check on `page.tsx`: 30/30).

## 2026-06-30 — Encounters pages: scroll cue removed, closing line given more visibility and space

Susan: "Now on the encounters page — remove the scroll button on each page — unnecessary and interrupts the experience to say there is something else that must be done — make sure the text at the bottom in the dark space is visible — maybe more space around it — as a thought not a journal prompt."

**Built**, all 5 shared-template Encounters pages (`journey`, `deep`, `table`, `word`, `continue`) plus the shared template itself:
- `src/app/encounters/{journey,deep,table,word,continue}/page.tsx`: removed the `<ScrollCue />` element and its now-unused import from each page. Each hero now flows straight from its text block to the closing strip with no intermediate "scroll" prompt.
- `src/app/encounters/_shared/EncounterHero.tsx`: removed the now-unused `ScrollCue` export entirely (confirmed via repo-wide grep that no other file imported it).
- `src/app/encounters/_shared/encounter.module.css`: removed the dead `.scrollCue`, `.scrollArrow`, `@keyframes encBob`, `.scrollWord` rules and the `.scrollCue` override inside the ≤720px media query. Updated the file's top design-note comment to record the removal.
- Same file, `.closingStrip`/`.closingLine` (the dark `#11181d` strip holding each page's reflective closing sentence — the "text at the bottom in the dark space"): top padding increased 3.8rem → 5.2rem (4rem on ≤640px) for more breathing room around the line; text color brightened `--enc-mist` → `--enc-cream` and size nudged up (`clamp(1.1rem,2.2vw,1.3rem)` → `clamp(1.15rem,2.4vw,1.4rem)`, line-height 1.6 → 1.7) for stronger visibility against the dark background; line capped to a `38rem` centered measure so it sits as one self-contained quiet thought rather than running edge-to-edge like an instruction.
- The 5 existing closing sentences themselves were left as-is — none were phrased as imperative prompts already (e.g. "The path continues into stiller water."), so "as a thought not a journal prompt" was treated as styling/spacing guidance rather than a copy rewrite.

**Implementation status.** Built and verified (`tsc --noEmit` clean; brace-balance check 0 across all 7 edited files; repo-wide grep confirms no remaining `ScrollCue` usage outside the explanatory code comment).

## 2026-06-30 — Homepage Queen Ann section: single-purpose-per-element refinement

Susan's directive: each element in the Queen Ann section should have one job, and the section should "progress through recognition rather than explanation" — Title → Orientation → Experience → Invitation.

**Built**, `src/app/page.tsx` (Queen Ann Introduction + Invitation to Read):
- Removed the poem excerpt ("when the night strikes with silver light…") from beneath the title page heading entirely — it was competing with the title as a second focal point.
- The title page (`.poems-showcase-intro`) now carries only "Queen Ann" (title) and the one orientation line, "Every AwakenArts work is born as both image and poem." (tagline), directly beneath it.
- Image + poem spread (`.poems-showcase-ann`) — the Experience movement — left untouched.
- Added a new Invitation to Read: the poem excerpt now sits as its own paragraph (`.poems-showcase-ann__excerpt`) immediately above the "Download the Poem (PDF) →" link, so the excerpt's job is to draw the visitor toward the full poem rather than introduce the section.

**Built**, `src/app/globals.css`:
- `.poems-showcase-intro__tagline`: brought down from its prior "enlarged to pair with the gold quote" treatment (`clamp(1.2rem,1.9vw,1.45rem)`, `--deep`) to a quiet secondary register — `calc(--body-size + 2px)`, `--mid` (muted tone), tightened top margin — since it's now the title page's only supporting line, not a companion statement to a quote that no longer sits beside it.
- New `.poems-showcase-ann__excerpt`: italic, gold, `clamp(1.05rem,1.5vw,1.25rem)` — smaller than the excerpt's old title-page scale (`clamp(1.35rem,2.2vw,1.7rem)`) so it reads as an invitation, not a heading. Carries the `1.75rem` top margin that used to sit on the PDF link, so the gap now falls between the image pair and the excerpt.
- `.poems-showcase-ann__pdf-link`: top margin removed (`1.75rem` → `0`) since the excerpt directly above it now carries that spacing — excerpt and link read as one close two-line invitation.
- `.poems-showcase-intro__quote` (the old title-page excerpt style) was left untouched in the CSS — it's still used by `src/app/queen-ann-prototype/page.tsx`, an existing comparison prototype page, so removing it would have broken that page.

**Implementation status.** Built and verified (`tsc --noEmit` clean; brace-balance check: `page.tsx` 30/30, `globals.css` 1252/1252).

## 2026-06-30 — About page: credentials line revised with certification acronyms

Susan: "Artist - Writer - (AS IS) / Certified Transformative Language Artist (TLAN) / Certified Journal Instructor (CJT)." Clarified on follow-up that "Artist · Writer · MA Counseling" should stay as written (not dropped), with the two certification lines added beneath it, and asked for the block's text size to come down slightly now that it's three lines instead of two.

**Built**, `src/app/about/page.tsx`:
- `.about-credentials` now reads three lines: `Artist · Writer · MA Counseling`, `Certified Transformative Language Artist (TLAN)`, `Certified Journal Instructor (CJT)` — each certification now carries its governing body's acronym.

**Built**, `src/app/globals.css`:
- `.about-credentials`: font-size reduced from the shared `--subtitle-size` token to a scoped `clamp(1.05rem, 1.4vw, 1.2rem)`, line-height `1.55`. This is a deliberate one-off exception to the Global Design System's subtitle token (logged at length on 2026-06-28 specifically to avoid one-off overrides) — scoped to `.about-credentials` only, since this block now carries a third line and Susan asked for it to read smaller; no other page using `--subtitle-size` is affected.

**Implementation status.** Built and verified (`tsc --noEmit` clean; brace-balance check: `page.tsx` 15/15, `globals.css` 1252/1252).

## 2026-06-30 — Encounters index: Kit-gated Journal card copy shortened

Susan: "A self-guided companion to the Encounters. Can replace the text (as one line) currently on the Kit access link card."

**Built**, `src/app/encounters/page.tsx`:
- `.journalCopy` line on the "Free Companion" card (the Kit email-gated download for the Encounter Journal PDF) changed from "A short, self-guided companion to the five introductory Encounters." to "A self-guided companion to the Encounters." — one line, as requested.

**Implementation status.** Built and verified (`tsc --noEmit` clean; brace-balance check: `page.tsx` 41/41).

## 2026-06-30 — About page ending restructured to two equal quiet links; new Artist's Sketchbook unlisted page built

Susan's directive (full text, abridged here — see chat history for the complete original): "Looking at the page, I would do this: Finish the narrative. Keep the credentials immediately below, as they are. Then, after normal paragraph spacing, introduce the two links as the final expression of the page. Not cards. Not another section. Not another heading. Just two quiet destinations... I also think the two links should be treated equally. Right now the Foundation has visual prominence because it is alone. Once the Sketchbook exists, they become companions... Create the Artist's Sketchbook page as a complete destination within AwakenArts, but implement it as a framework only... using placeholders until the final image selections are made." Full spec covered Purpose, Page Title, Introduction, Layout, Future Expansion, Navigation, and Design Philosophy — see chat history for the complete directive.

**Built**, `src/app/about/page.tsx`:
- Reordered the page's closing block: the MA/TLA/Journal-Instructor credentials paragraph now comes immediately after the narrative, unchanged, as Susan specified ("as they are").
- Removed the standalone Foundation-only link paragraph (which had its own `marginBottom: 2.5rem` inline override, creating an artificially large gap meant for a mid-page transition).
- Added a new heading-less `.about-links` block as the page's final expression, directly before `<WayfindingBand />`/`<Footer />`: two equally-weighted destinations, each a `.text-link` (the existing Global Design System small-link token, unchanged) paired with one quiet descriptive line — Foundation ("Read the Foundation of AwakenArts →" / "A literary and biblical exploration of the work.") and the new Sketchbook ("Visit the Artist's Sketchbook →" / "Original artwork and visual creations."), using Susan's example phrasing verbatim. No heading, no card, no new section — normal paragraph spacing only.

**Built**, `src/app/globals.css`:
- New `.about-links` / `.about-links__item` / `.about-links__desc` rules: a flex column of equally-styled link+description pairs, `margin-top: 1.75rem` (normal paragraph spacing, not a large section gap), descriptions in `var(--serif)` / `var(--mid)` at `0.92rem`. No precedent for this exact pattern existed elsewhere on the site (Footer.tsx's link lists carry no per-link description), so this is new, narrowly-scoped CSS rather than a reused component.

**Built**, `src/app/sketchbook/page.tsx` (new) and `src/app/sketchbook/page.module.css` (new):
- New Unlisted Page System page (same pattern as `/workshops` and `/facilitator-orientation`: full Nav → content → WayfindingBand → Footer chrome, `robots: { index: false, follow: true }`, reachable only by direct URL or the new About page link — not yet added to primary navigation, per Susan).
- Title "The Artist's Sketchbook," single intro sentence "A continuing collection of original visual creations." — no further explanation, per Susan's "let the work speak for itself" instruction.
- Framework-only placeholder gallery: a `PIECES: SketchbookPiece[]` data array (currently 6 entries, `id` + optional `title`) mapped to a responsive grid — 3 columns desktop, 2 tablet, 1 mobile, cream background, large square placeholder tiles (`var(--mist)` field, no icon/label/text — "no visual clutter"), generous gaps, same 1180px measure and margins used elsewhere on the site (Gallery/poems grid). Adding a real piece later means adding one object to `PIECES`; no structural change needed. No purchase links, no captions, no lightbox yet — each tile is a single `<div>` today so future enlargement behavior can be added without redesigning the grid.

**Built**, `src/app/robots.ts`:
- Added `/sketchbook` to `DISALLOWED_PATHS`, alongside the existing `/workshops` and `/facilitator-orientation` Unlisted Page System entries.

**Implementation status.** Built and verified (`tsc --noEmit` clean; brace-balance check: `about/page.tsx` 13/13, `sketchbook/page.tsx` 26/26, `sketchbook/page.module.css` 15/15, `globals.css` 1255/1255, `robots.ts` 6/6). `next build` could not be run to completion in this sandbox — it fails on a missing SWC binary for linux/arm64, an environment issue unrelated to these changes — so verification relies on the project's standing `tsc`/brace-balance standard, consistent with prior entries in this log. Sketchbook is not yet linked from Footer or primary nav, matching Susan's "reached from the About page... not yet in primary navigation" instruction.

## 2026-06-30 — Sketchbook placeholder tiles revised: portrait, not square

Susan, immediately after the build above: "Change the Sketchbook gallery placeholders from square tiles to portrait-oriented rectangles. The gallery should be designed around the natural proportions of Susan's artwork, which is predominantly vertical. Avoid cropping images to square formats. The page should present the work as it was created rather than forcing it into a generic gallery grid." Followed immediately by a refinement: "Three columns. Vertical portrait thumbnails (roughly 4:5 or 2:3). Consistent height. Equal spacing."

**Built**, `src/app/sketchbook/page.module.css`:
- `.thumb` changed from a fixed 1:1 square to a fixed 4:5 portrait `aspect-ratio` — one consistent ratio across every tile (not varied per piece), per Susan's "consistent height" follow-up, which superseded an intermediate per-tile-ratio approach.
- `.grid` gap simplified to a single `3rem` (was `3.5rem 2.5rem`) for visibly equal spacing in both directions; tablet/mobile gaps adjusted to match (`2.5rem` at both breakpoints).
- Comment on `.thumb` now documents the future-image path: when a placeholder is replaced with real artwork, render it with `object-fit: contain` inside this frame (the same non-cropping approach already used for `.poem-card__imageFrame` on the Gallery page) so the work is matted within the consistent portrait frame rather than cropped to fill it.

**Built**, `src/app/sketchbook/page.tsx`:
- Updated the `PIECES` array comment to reflect the final single-ratio approach (no per-piece `aspectRatio` field — that was an intermediate idea, replaced once Susan asked for consistent height).

**Implementation status.** Built and verified (`tsc --noEmit` clean; brace-balance check: `sketchbook/page.tsx` 26/26, `sketchbook/page.module.css` 15/15).

## 2026-06-30 — About + Sketchbook copy refinement (link descriptions, lede, eyebrow label)

Susan reviewed the live copy and proposed specific wording changes for definiteness and authorship credit, plus one structural label change on the Sketchbook page.

**Built**, `src/app/about/page.tsx`:
- Foundation link description: "A literary and biblical exploration of the work." → "The literary and biblical foundations of the work." (more definite, per Susan).
- Sketchbook link description: "Original artwork and visual creations." → "Original artwork by Susan Ann Shepler." — Susan's stated preference among several options, because it credits authorship directly rather than reading as generic.

**Built**, `src/app/sketchbook/page.tsx`:
- Intro lede sentence: "A continuing collection of original visual creations." → "Original artwork by Susan Ann Shepler." (Susan's explicit favorite — "It feels authentic. It doesn't oversell. It doesn't explain.").
- Metadata `description` updated to match the new lede ("Original artwork by Susan Ann Shepler.") for consistency, since it was originally derived word-for-word from the lede.
- Gold eyebrow label above the title: "Sketchbook" → "Artist's Studio." Per Susan: the small label tells the visitor where they are (the studio), the large H1 tells them what this place is called (The Artist's Sketchbook) — page title is unchanged.

**Implementation status.** Built and verified (`tsc --noEmit` clean; brace-balance check: `about/page.tsx` 13/13, `sketchbook/page.tsx` 26/26).

## 2026-06-30 — AwakenArts Production Roadmap established as the governing production sequence

Susan: "The website architecture has reached a point where the production sequence should now be considered stable. Before additional products or content are created, establish a single AwakenArts Production Roadmap that will become the governing work path for development." Full text supplied a Guiding Principle, five phases (Complete the Website → Establish the Publishing System → Publish the Initial Catalog → Companion Resources → Marketing and Audience Development), and a three-family Product Architecture (Figure Editions, Gallery, Artist's Sketchbook).

**Built:** `AwakenArts_Production_Roadmap.md` (new) — Susan's directive text reproduced as the governing structure, plus three sections this document adds beyond a literal transcription:

1. **Document hierarchy note** — positions the Roadmap above the existing Publishing Platform Architecture / Implementation Specification / Implementation Log tiers as the *sequencing* layer, not a replacement for any of them.
2. **"How This Reconciles With Existing Documents"** — flags that the new three-family Product Architecture (Figure Editions, Gallery, Sketchbook) supersedes the four-family draft model in `AwakenArts_Product_Architecture.md` (Families A–D), which was never approved past draft status. That document is left in place unedited, as a record of its own surveying work and open questions, but no longer governs the product-family definition. Also states explicitly where Open Decision #1 (purchasing mechanism) now sits — Phase One builds the purchase *pages*, Phase Two resolves and wires in the actual *workflow* — and notes that the paused Reader revision work (#256, #260–263) falls under Phase One or Two once Susan is ready to resume it, without forcing that choice now.
3. **"Phase Status (as of 2026-06-30)"** — an explicit, dated snapshot reconciling the current site against the five phases, marked as a snapshot that will go stale and is not maintained like this Log. Net finding: **the site is mid-Phase-One.** Notable out-of-sequence item surfaced: the Workshop Kit (`/workshops`, `/facilitator-orientation`, tasks #189–197) is Phase Four work that was already built before this Roadmap existed — flagged, not undone, per the standing no-silent-rewrite discipline.

**Reconciled against the standing task backlog:**

| Backlog item | Phase |
|---|---|
| #8 Retire Studio/Poems/Quotes routes from public nav/footers | One (site completion/cleanup) |
| #12 Source real photography for Deep/Word/Table/Path movements | One, lower priority — Homeward Paths isn't named in the Roadmap's Phase One bullets; worth confirming with Susan whether Paths remain in current scope |
| #49 Roll out Atmospheric Header system site-wide | One |
| #71 Verify deploy on awakenarts.com after push | Standing ops item, not phase-specific |
| #208/#209/#212 Kit/Vercel email signup wiring; #210 test live signup flow | Operational completion of already-built Phase Four/Five infrastructure (the free Encounter Journal email-gate) — finishing these is leftover implementation work, not new scope, so it proceeds regardless of phase sequencing |
| #256, #260–263 Reader revision (paused, not yet accepted by Susan) | One or Two, per the Roadmap doc's note above |

No backlog item was found to contradict the phase order; nothing has been reprioritized or dropped as a result of this reconciliation — it is a mapping, not a re-plan.

**Implementation status.** `AwakenArts_Production_Roadmap.md` created and reviewed against `AwakenArts_Product_Architecture.md`, `AwakenArts_Publishing_Platform_Architecture.md`, `AwakenArts_Site_Architecture.md`, and this Log's open-decisions section for consistency before being written. Per Susan's directive, this Roadmap now governs the order of all future AwakenArts production work; deviation requires a compelling stated reason.

## 2026-07-01 — Dragon Figure Edition 11: participant/facilitator split, reader-facing language pass, continuing-cultivation closing page

Working session with Susan, prompted by discovering that the Figure Edition PDF referenced by `editions.ts` had been deleted locally (only Trash-restorable) while ten numbered working drafts ("edition 2" through "edition 10") existed only on Susan's machine, never in the repo. Restoring "edition 10" (9 pages) surfaced that it diverges from `Figure_Edition_Standard_Dragon.md`'s 12-page standard, and separately surfaced a previously-built but unreferenced 21-page **Dragon Companion** (`AwakenArts_Workbook/02_Dragon/Companion/`) — a complete facilitator/workshop resource built from `Dragon_Author_Notes.txt`, `Dragon_Notes_on_the_Figure.md`, and the Learning/Reflection/Facilitator/Workshop Workbook docs, already produced as PDFs (Reading Copy + Print-with-bleed).

**Governing decision:** the Standard and Editorial Responses documents are authoritative over any individual production file when the two disagree. Dragon becomes **Dragon Figure Edition 11**, the new production standard, per Susan's direction — not a merge of the Companion into the Figure Edition, but a defined split:

- **Dragon Figure Edition** — the participant product. Complete enough to lead an individual or small group on its own. No facilitation scripts, timing, or teaching guidance.
- **Dragon Companion** — the separate facilitator/leader resource, untouched by this revision, retaining all workshop timing, teaching cautions, and leader scripts.

**Content decisions, applied to the Figure Edition only:**
1. Facilitator Notes page removed entirely (moved exclusively to the Companion) — activating the condition Editorial Responses Section 2 Item 4 anticipated ("until Participant and Facilitator editions become separate publications").
2. Colophon page added — was missing from the 9-page working file entirely. Wording revised: dropped "AN AWAKENARTS SYMBOLIC EDITION"; softened collection line to "This edition is one work within the AwakenArts collection. Each edition is complete in itself while contributing to a larger body of symbolic exploration." Dragon-specific for now, not retrofitted to the other five editions.
3. New closing page, **Living the Message**, added between Message Delivered and the Colophon — five short movements (Notice / Reflect / Practice / Continue / Share), the last of which offers five short questions usable as private journal prompts or group conversation starters, resolving "could a small group use only the participant edition" without turning the edition into a discussion guide.
4. Full reader-facing terminology pass: page titles changed from production vocabulary to reader-addressed language — Encounter Threshold → Begin, The Figure/The Motif → The Image, Guided Journaling → Journal, Colophon → About This Edition. Recognition and Reflection retained (they name an experience, not a production category).

**Standards updated in `Figure_Edition_Standard_Dragon.md`:** new Standard 21 (Reader-Facing Language) and Standard 22 (Continuing Cultivation), amendments appended to Standards 1, 12, and 13, and a new "Dragon Figure Edition 11 — Revision Record" section recording the full page sequence and finalized page text.

**Not resolved by this session, carried forward:**
- Whether edition 10's compression of Figure+Motif into one page and Recognition I+II into one page (and reordering Poem ahead of both) should be restored to the Standard's original separate-page sequence, or adopted as Dragon's intentional model.
- Whether "Living the Message" fits on one page with 01–04, or needs its own page for 05 — deferred to production/layout review.
- Whether "Dragon Companion" should be formally renamed "Leader's Resource" / "Facilitator Guide" — Susan used this language in conversation; not yet confirmed as a rename of the actual product/files.
- Whether the Colophon wording change and the Facilitator Notes split should extend to the other five live editions (Bowls, Ballerina, Grismere, Poppy, Queen Ann), none of which currently have a Companion resource.

**Implementation status.** Content and structural decisions recorded in `Figure_Edition_Standard_Dragon.md`. No production/typesetting performed — the restored "edition 10" PDF at `public/files/editions/Dragon_Figure_Edition.pdf` has not yet been rebuilt to this specification. A Good Copy content document for handoff to production has been drafted separately (see `AwakenArts_Workbook/02_Dragon/Figure_Edition/Dragon_Figure_Edition_11_Good_Copy.docx`).

## 2026-07-01 — Editorial philosophy: Recognition, Not Interpretation (the parable principle)

Follow-up directive from Susan, same day as the Dragon Figure Edition 11 session above: "Reorient the Closing Movement Around Recognition in Ordinary Life." This is recorded as a governing editorial-philosophy shift, not a Dragon-specific content edit — per Susan: "Until now, the editions have asked, 'What does this symbol mean?' Now they're asking, 'Where have you begun to see this pattern in your own life?'"

**The principle (new Standard 23):** AwakenArts Figure Editions are not designed to teach symbolic interpretation. They are designed to cultivate recognition. Like a parable, the value of the encounter is discovered after the book is closed, as the reader begins recognizing the same pattern in ordinary life. Closing-movement language must be invitational, not instructional — open questions, not exercises or assignments. Refined once more by Susan immediately after: every edition should leave the reader with something they can *recognize, reflect upon, and use* in the ordinary movements of life — folded into Standard 22's own definition verbatim.

**Applied to Dragon:** the "Living the Message" page drafted earlier the same day — a numbered 01 Notice/02 Reflect/03 Practice/04 Continue/05 Share structure — was superseded. Its imperative, exercise-like format ("Before reacting... ask...") was in tension with the principle just adopted. Replaced with three open questions (Susan's own examples): "Did you notice anything new?" / "Where have you begun to see this pattern in ordinary life?" / "How might seeing it differently make a difference moving forward?" — framed by a short invitational passage, with no separate discussion-question list, since these three questions already serve private reflection and group conversation equally.

**Built:** `Figure_Edition_Standard_Dragon.md` — new Standard 23 (Recognition, Not Interpretation — The Parable Principle); Standard 22 amended to Susan's exact "recognize, reflect upon, and use" phrasing; the Dragon Figure Edition 11 Revision Record's "Living the Message" text replaced with the three-question version, old version retained inline as a struck-through record of what it superseded (per this Log's own no-silent-rewrite discipline). `Dragon_Figure_Edition_11_Good_Copy.docx` Page 9 updated to match.

**Not yet done:** this Standard is stated as governing "every edition going forward," but the other five live editions' closing pages (all currently end at Message Delivered/Colophon, with no Living-the-Message-equivalent at all) have not been touched. That's a full-catalog implication of today's session, carried forward, not actioned.

## 2026-07-01 — Figure Edition standards consolidated into two documents: Editorial Philosophy + Production Standard

Susan's directive: refine the accumulating Dragon-specific standards into "the governing editorial and production standard for all future AwakenArts Figure Editions," structured so the document reads as publishing philosophy rather than a production checklist, and split into two documents so philosophy and mechanics can each be maintained without diluting the other.

**Built:**
- `AwakenArts_Editorial_Philosophy.md` (new) — the what-and-why: the edition's purpose statement, the parable principle (recognition, not interpretation), the Reader Journey (Encounter → Notice → Recognize → Reflect → Respond → Return to Ordinary Life), the Governing Principle of Usefulness, Preserve Mystery, the Participant Edition/Leader's Resource split (purpose-level), and the five-question Governing Editorial Test.
- `AwakenArts_Figure_Edition_Production_Standard.md` (new) — the mechanics: page-by-page sequence rewritten reader-experience-first ("what should the reader experience here" before "what appears on the page"), a reader-facing-title reference table, an instructional-to-literary language substitution table, Visual Rhythm (palette, cadence, typography, the thematic ornament as connector rather than decoration), Usability Standards (reference reproduction of artwork adjacent to any page asking the reader to reconsider it), Writing Invitations (permission over instruction), standardized Colophon requirements, and Production Consistency.
- `Figure_Edition_Standard_Dragon.md` — status line updated to Superseded; retained as the historical record the two new documents were generalized from.
- `AGENTS.md` and `AwakenArts_Documentation_Map.md` — governing-document tables updated to point to the two new documents in place of `Figure_Edition_Standard_Dragon.md`, per the Documentation Map's own maintenance rule (update in the same commit as any governing-document change).

**Not yet done:** the two new documents are written and cross-referenced, but no other live edition (Bowls, Ballerina, Grismere, Poppy, Queen Ann) has been reviewed against them yet — Dragon Figure Edition 11 remains the only reference implementation. Extending this standard to the rest of the catalog is future work, not assumed here.

**Implementation status.** Both documents written, cross-referenced to each other and to `Figure_Edition_Standard_Dragon.md`, and registered in `AGENTS.md` / `AwakenArts_Documentation_Map.md`. No code or production files touched in this entry.

## 2026-07-01 — Message Delivered corrected to a series-wide publishing signature; Production Standard second review pass

Two follow-up rounds from Susan reviewing the newly-consolidated documents above.

**Round one — the Message Delivered page and the ampersand.** Susan corrected a real error in the just-issued standard: the ampersand had been described (in `Figure_Edition_Standard_Dragon.md` Standard 14 and echoed in the new Production Standard) as a symbol each figure discovers independently, with Dragon's ampersand offered as one example. It is not — it is the official, series-wide AwakenArts publishing mark, fixed across every edition. Corrected: the Message Delivered page is now specified as a consistent publishing signature (deep navy, the large centered ampersand, one recognition statement, one closing signature line) with only the statement and signature line varying by edition; the ampersand's *scale* is now specified as contrastive rather than uniform — large only on Message Delivered, small and quiet as a connector everywhere else, since that contrast is what gives the page its impact. Dragon's Message Delivered text also revised to remove "the ampersand is not ornament but revelation" — naming and explaining the symbol in the text was over-explanation the symbol's own visual presence should carry instead (Editorial Philosophy, Preserve Mystery). New text: "...Strength and tenderness. Sun and moon. Action and reflection. They were never meant to compete. They were made to live as one." followed by the unchanged "Not this or that. But and."

**Round two — eight refinements to the Production Standard itself**, applied directly: the Message Delivered and ampersand sections rewritten to Susan's suggested language; "The purpose is not to produce answers but to cultivate continued noticing" added to Living the Message; a governing usefulness sentence added near the document's opening; a recognition-over-explanation sentence added to the Recognition page section; a new "Editorial Voice" subsection added (invite/observe/recognize/ask/remain literary, each opposed to its instructional counterpart); the three closing questions locked in as their own named production standard (framed as patterns to draw from, not a fixed script); and a softening qualifier ("unless a future edition's symbolic needs require another solution") added at the document's opening and to the page-sequence section, so the standard reads as governing the series rather than requiring every edition to replicate Dragon exactly.

**Built:** `Figure_Edition_Standard_Dragon.md` (Standards 11 and 14 amended, Revision Record's Message Delivered text updated), `AwakenArts_Figure_Edition_Production_Standard.md` (all eight points above applied), `Dragon_Figure_Edition_11_Good_Copy.docx` (Page 8 text and production note updated).

**Susan's own assessment, recorded verbatim for the file:** "The document is no longer describing how to build Dragon. It is describing how to build an AwakenArts Edition."

**Implementation status.** All three files updated and consistent with each other. No other live edition's Message Delivered page has been reviewed against the corrected ampersand standard yet.

## 2026-07-01 — First visual preview of Dragon Figure Edition 11 rendered

Susan asked to see an actual updated PDF, not only the Good Copy content document. Built one directly from the approved content and the real Dragon Workbook art assets (`Dragon-Atmospheric.png`, `dragon-figure.png`, `Dragon_Poem_Master.png`, plus the site's existing `frontispiece-desktop.jpg` cover), typeset in HTML/CSS against the palette and structure in `AwakenArts_Figure_Edition_Production_Standard.md`, rendered to PDF (WeasyPrint).

**Incidental discovery:** `Dragon_Poem_Master.png`, previously flagged in the Companion's Good Copy master as illegible/untranscribable, renders clearly at full resolution. The complete poem text is now confirmed and used as the actual image asset on the Poem page — the poem-text gap flagged earlier in this project is resolved.

**Built:** `AwakenArts_Workbook/02_Dragon/Figure_Edition/Dragon_Figure_Edition_11_Preview.pdf` — 10 pages, matching the Good Copy's page sequence exactly (Facilitator Notes absent, Living the Message and About This Edition present, Message Delivered text corrected).

**Important distinction, stated plainly so it isn't mistaken for finished production art:** this PDF is a layout-accurate content preview, not the professionally typeset print file. It approximates the palette and structure using ordinary HTML/CSS rendering (no bleed, no print marks, the ampersand is a large serif glyph rather than the actual AwakenArts mark). It was saved as a new file in the Workbook, not written over `public/files/editions/Dragon_Figure_Edition.pdf` — the live file the site actually serves — so the site's current download is untouched until a real production pass (or Susan's own review of this preview) replaces it deliberately.

**Implementation status.** Preview built and reviewed page-by-page before delivery (rendered to images and visually checked, one bug caught and fixed — a duplicated cover title). Not deployed; not linked from the site.

## 2026-07-01 — Designated the Dragon Series Prototype; ampersand visual hierarchy corrected on Message Delivered

Susan's Prototype Review Directive reframes what this whole effort has actually been testing: not just Dragon, but the publishing language, reader journey, and design system for the entire AwakenArts Figure Edition series. Renamed accordingly — "Dragon Figure Edition 11" becomes the **Dragon Series Prototype** — and the maturity of individual elements made explicit: locked (Encounter→Living the Message progression, recognition-over-instruction language, Reflection→Journal, Message Delivered as culmination, Living the Message as the bridge to ordinary life) vs. still evolving (page rhythm, typography, transitions, image hierarchy, white space, publishing identity, cross-edition consistency). Spacing, typography, and page counts in the preview remain explicitly non-final.

**Design correction — Message Delivered's ampersand.** Susan's read: the ampersand had grown too large, competing with the message rather than framing it. Corrected in the preview's rendering: reduced roughly 35% (210pt → 132pt), repositioned into the upper third of the page, and the gap before the recognition text roughly doubled (320pt → 372pt) so the two feel sequential rather than visually fused. The intended reading order — page purpose, then the mark, then the recognition statement, then the closing line — is now recorded as a named visual-hierarchy standard, not just applied to this one page.

**Built:** `AwakenArts_Workbook/02_Dragon/Figure_Edition/Dragon_Figure_Edition_11_Series_Prototype.pdf` (new, supersedes `..._Preview.pdf`, which is left in place rather than deleted/renamed, per the workspace's own no-silent-rewrite handling of prior files). `Figure_Edition_Standard_Dragon.md` and `AwakenArts_Figure_Edition_Production_Standard.md` updated with the Series Prototype designation, the locked/evolving list, and the Message Delivered visual-hierarchy standard.

**Implementation status.** New PDF rendered and the Message Delivered page visually checked before delivery. Still a content/layout preview, not production art — see the standing caveat recorded in the prior entry.

## 2026-07-01 — The Bridge Question elevated to a permanent editorial principle

Susan's commentary on Dragon's revised language (recast out of Jungian vocabulary — "integrating the shadow" — into ordinary experience: strength and tenderness, sun and moon, action and reflection, not this or that but and) led to a specific elevation: of the three closing questions, "Where have you begun to notice this pattern in ordinary life?" is not one option among equals. It is named **the Bridge Question** — the sentence that does a parable's actual work, returning the reader to ordinary life without explaining what to find there — and is now required, verbatim in function, in every edition's closing movement. The other two closing questions remain adaptable per edition.

**Built:** `AwakenArts_Editorial_Philosophy.md` — new "The Bridge Question" subsection under the Parable Principle, plus the accessibility observation (recognition available without specialized vocabulary) recorded as a general test for edition language, not only for this question. `AwakenArts_Figure_Edition_Production_Standard.md` — Closing Questions standard amended to distinguish the required Bridge Question from the two adaptable supporting questions.

**Implementation status.** Both documents updated and consistent with each other.

## 2026-07-01 — Bridge Question generalized to the Bridge Principle; defining sentence added to Editorial Philosophy

Susan's refinement to the prior entry: "Bridge Question" named the wrong level of thing — it's an editorial principle (every edition should bridge the symbolic encounter to ordinary life), and Dragon's specific sentence is one working example of it, not the principle itself. Renamed accordingly in both governing documents; Dragon's sentence retained as the worked example, future editions free to build their own bridge in different words as long as the function holds.

Also added, verbatim, as the opening thesis statement of `AwakenArts_Editorial_Philosophy.md`: "An AwakenArts Figure Edition does not seek to explain experience. It offers a symbolic shape through which readers may recognize patterns already present in ordinary life." Susan connected the word "shape" here to the site's own tagline, "When Language Shapes a Path" — noted directly in the document rather than left as a passing observation.

**Built:** `AwakenArts_Editorial_Philosophy.md` (opening thesis statement + shape/tagline connection; "The Bridge Question" retitled "The Bridge Principle" with the principle stated above the worked example). `AwakenArts_Figure_Edition_Production_Standard.md` (Closing Questions standard updated to match).

**Implementation status.** Both documents updated and consistent with each other.

## 2026-07-01 — Message Delivered: eyebrow title added to the evolving prototype

Susan shared a reference layout for the Message Delivered page — a "MESSAGE DELIVERED" eyebrow label in gold small caps with a short gold rule beneath it, above the ampersand — and asked for it in the evolving prototype. Applied directly to `Dragon_Figure_Edition_11_Series_Prototype.pdf`: eyebrow + rule added above the ampersand, ampersand and body text repositioned slightly to keep the same sequential spacing (symbol, gap, recognition, closing line) established in the prior round. This also closes a real gap in the prototype: Standard 11 calls for a visible page title on Message Delivered, which the earlier rendering omitted entirely.

**Built:** `Dragon_Figure_Edition_11_Series_Prototype.pdf` updated in place at its existing path (not a new filename — this file is explicitly the evolving test copy, per Susan's Prototype Review Directive; only Dragon-specific content milestones get their own new filename, not layout iterations on the standing prototype).

**Implementation status.** Rendered and visually checked against the reference layout before saving.

## 2026-07-06 — Core Brand Statement added; Dragon Series Prototype closed out; Grismere next

Susan reviewed all ten pages of the Series Prototype page by page and approved the edition to move forward, with one final refinement to Message Delivered: the ampersand read as floating rather than anchored to the message beneath it. Corrected by moving the ampersand down roughly 0.67in and shortening the gap to the paragraph below, while keeping the space above it generous — reading now as one visual unit (symbol, then message) rather than two separate elements.

Susan's closing observation: nothing in the AwakenArts ecosystem states, in one sentence, what a Figure Edition is and why the series carries that name — not a Dragon defect, a series-identity gap. This matches a directive already in progress this session: promoting a single sentence to core brand language across the series. Resolved by adding a **Core Brand Statement** to `AwakenArts_Editorial_Philosophy.md`: "Each Figure Edition invites readers into a symbolic story that becomes a way of recognizing patterns that shape ordinary life" — with the rationale recorded alongside it (leading with what the reader receives, not what went into making it; ingredient language stays in production documentation only). Cross-referenced in `AwakenArts_Figure_Edition_Production_Standard.md`. Website copy (`src/app/collection/page.tsx`, `src/data/editions.ts`) still carries the older ingredients-first language and is queued as a follow-up pass, not done in this session — Susan's immediate instruction was to save Dragon and produce a contact sheet, not to touch live site code.

Susan's conclusion: stop revising Dragon. Move on. The next round of standards should come from building Grismere against this standard, not from further Dragon revision.

**Built:** `Dragon_Figure_Edition_11_Series_Prototype.pdf` updated in place (Message Delivered spacing only). `Dragon_Series_Prototype_Contact_Sheet.png` (new) — a ten-page thumbnail grid of the current Series Prototype, saved alongside the PDF. `Figure_Edition_Standard_Dragon.md` — closing review recorded, Series Prototype formally locked, Grismere named as next. `AwakenArts_Editorial_Philosophy.md` — Core Brand Statement section added. `AwakenArts_Figure_Edition_Production_Standard.md` — cross-reference to the Core Brand Statement added.

**Implementation status.** PDF re-rendered and the Message Delivered page visually checked. Contact sheet generated from the current PDF and visually checked. Website integration explicitly deferred, not forgotten — flagged above and in the Standard doc as the next pass, to run alongside or after Grismere.

**Correction, same day:** the first contact sheet added a title bar, gold borders, and page-number captions not present in the earlier `Dragon_Figure_Edition_Contact_Sheet.png` (Jun 24) convention. Susan flagged the inconsistency — contact sheets are meant to be representative of the actual product, with no added chrome. Rebuilt to match the original convention: a bare grid of pages on a cream field, each page's own printed footer serving as its identifier.

**Standardized, same day: two contact sheets per edition.** Susan's assessment — seeing all six editions presented this same way is what will make the series read as coherent to a visitor, not as one prototype and five unrelated experiments — led to formalizing a two-tier contact sheet standard, recorded as new Section 9 of `AwakenArts_Figure_Edition_Production_Standard.md`: a **Production Contact Sheet** (every page, bare grid, documents the complete edition, internal use) and a **Collection Contact Sheet** (6–8 representative pages, larger thumbnails, used on the website and in marketing — "the production sheet documents the edition; the collection sheet sells it"). Built both for Dragon: `Dragon_Figure_Edition_Production_Contact_Sheet.png` (all 10 pages) and `Dragon_Figure_Edition_Collection_Contact_Sheet.png` (cover, opening image, figure image, poem, recognition, Message Delivered, Living the Message, colophon — 8 pages, omitting the open reflection/journal working pages). The earlier `Dragon_Series_Prototype_Contact_Sheet.png` and `Dragon_Figure_Edition_Contact_Sheet.png` are left in place, superseded by the standardized filenames, per the workspace's no-delete/no-rename handling of prior files.

Susan's framing of the next milestone: no longer "finish Dragon," but "place Dragon beside Grismere and see whether the same publishing language carries across both" — the real test of the standard, not further Dragon revision.

**Contact sheets reframed as publishing-system assets, not production byproducts.** Susan's follow-up: the Production Contact Sheet is also an archival record and can be offered as a "collector's overview" to a purchaser or a serious inquiry; the Collection Contact Sheet functions as the edition's built-in visual product description for workshops, facilitator marketing, retreat brochures, and sales material — answering "what will participants experience," not "what pages are included." Every Figure Edition now produces three related assets by default: the edition itself, its Production Contact Sheet, and its Collection Contact Sheet. Susan's note on sequencing: don't promise the Production Contact Sheet with every purchase yet — position it as added value (a digital companion with purchase, or sent to a qualified inquiry), keeping flexibility while the commerce model is still open (see Open Decisions, Purchasing). A longer-range idea, recorded but not built: a future "Reader Preview" — four or five full-size sample pages as a standalone downloadable PDF, giving a prospective buyer the feel of the edition without the whole thing.

**Cover redesigned to the public-name standard.** Formalized the internal-name/public-name distinction as new Production Standard Section 9a: internal working name (`Dragon Figure Edition 11 — Founding Edition (Editorial Master)`) for documentation and files only; public name (`The Dragon` / `An AwakenArts Figure Edition`) for the cover, website, and all reader-facing material — no version number, no repeated wordmark. Susan's instruction was explicit that legacy text baked into existing artwork is not preserved by default once a cleaner standard exists. The prior cover (baked-in eyebrow "AWAKENARTS · A FIGURE EDITION," footer "FIGURE EDITION · NO. 01 / AWAKENARTS") was rebuilt from the underlying textless background art (`Dragon-Atmospheric` source, `04_Atmosphere/dragon-atmospheric-2.png`) with the two-line public name and the approved tagline "Not this or that, but and." preserved as edition content, not internal naming.

**Built:** `Dragon_Figure_Edition_11_Series_Prototype.pdf` — page 1 replaced with the redesigned cover, pages 2–10 unchanged, merged in place at the existing filename. `Dragon_Figure_Edition_Production_Contact_Sheet.png` and `Dragon_Figure_Edition_Collection_Contact_Sheet.png` regenerated to reflect the new cover. `AwakenArts_Figure_Edition_Production_Standard.md` — new Section 9a (Internal Working Name vs. Public Name).

**Implementation status.** New cover rendered standalone and checked, then merged into the full PDF and re-checked at actual page size before saving. Both contact sheets regenerated from the updated PDF.

## 2026-07-06 — Figure Edition Series Statement integrated across the ecosystem; wording refined

Susan's directive: the series statement (first added 2026-07-01 as the "Core Brand Statement") is permanent AwakenArts publishing language, not promotional copy — "the defining description of what distinguishes an AwakenArts Figure Edition from an art book, poetry collection, workbook, or study guide" — and should be integrated consistently everywhere the series is introduced. She also refined the wording: adding "the" before "patterns" ("...a way of recognizing **the** patterns that shape ordinary life") for cadence, without changing meaning.

**Wording updated everywhere it appears** (Editorial Philosophy, Production Standard) to the refined sentence. Prior log entries recording the earlier wording are left as-is, per this Log's own no-rewrite convention — this entry is the record of the change, not a correction to history.

**Relocated in `AwakenArts_Editorial_Philosophy.md`.** The statement previously sat after the Parable Principle section; moved to immediately follow "What an AwakenArts Figure Edition Is" (the opening section) and retitled "The Figure Edition Series Statement," per Susan's instruction that it establish the series' purpose before editorial standards are discussed.

**`AwakenArts_Figure_Edition_Production_Standard.md`** — introductory reference reworded to state plainly that the Series Statement governs every production decision in the document, not just a description alongside them.

**New document: `AwakenArts_Figure_Edition_Series_Introduction.md`.** Susan's directive named this as a required location but no such document existed yet. Built as a short, standalone front-door introduction to the series (not a standard) — opens and closes with the Series Statement, describes what a Figure Edition is and is not, and names Dragon as the founding edition the other five will follow. Added to the Documentation Map (Section 5 and the summary table).

**Website Collection page** (`src/app/collection/page.tsx`, "The Works" section) — the ingredients-first opening paragraph ("These original visual-literary pieces serve as points of entry into reflection, discussion...") replaced with the Series Statement leading into a shorter description of the underlying works. Verified with `tsc --noEmit` (clean).

**Leader's Resource / Dragon Companion — deferred, not skipped.** `Dragon_Companion_Good_Copy.docx` is a page-numbered verbatim content master (Page 1 Cover, Page 2 Encounter divider, etc.) with no existing "introduction/philosophy" page before facilitation content begins. Inserting one would shift every subsequent page number in a document already flagged for a larger pending restructure (Companion → Leader's Resource rename, facilitator-content audit). Recommended, not required, per the directive — better done as part of that restructuring pass than as an isolated insert that could conflict with it.

**Implementation status.** Editorial Philosophy and Production Standard updated and cross-checked for consistent wording. Series Introduction document created and linked from the Documentation Map. Collection page edited and type-checked clean. Companion integration explicitly deferred and reasoned above, not forgotten.

## 2026-07-06 — Contact sheet "Uses" added; Dragon reference terminology matured from Prototype to Founding Edition

Susan's follow-up to the Series Statement pass: Section 9 (Contact Sheets) distinguished the two contact sheet types but didn't yet state how each is actually used. Added a **Uses** subsection directly beneath the two definitions: the Production Contact Sheet as archival/editorial record, optionally offered as a collector's reference or sent on request before purchase; the Collection Contact Sheet as a publishing and marketing asset for websites, workshop descriptions, facilitator materials, speaking engagements, brochures, product pages, proposals, and participant information — communicating what the edition feels like, not what pages it contains.

Susan also flagged that the Production Standard's reference-implementation line still called Dragon the "Series Prototype," which had fallen out of sync with the maturity of the work: the standards it was testing are now codified in this document, so Dragon reads more accurately as the series' **Founding Edition / Editorial Master** than as a prototype still being evaluated. Function is unchanged — same file, same role as the working example — only the terminology caught up. Updated the Reference Implementation line in `AwakenArts_Figure_Edition_Production_Standard.md` accordingly.

**Forward-looking note, not acted on:** Susan observed that AwakenArts is accumulating a small hierarchy of standardized asset types per edition — Figure Edition (reader's publication), Leader's Resource (facilitator's publication), Production Contact Sheet (archival record), Collection Contact Sheet (visual product description), the website's Encounter page (introduction), and a possible future Edition Preview (downloadable sample) — and that this is "no longer just a collection of files, it is a publishing system." Recorded here as a framing to revisit once more editions exist to test it against; explicitly not added to the Production Standard yet, per Susan's own instruction not to let a future idea delay the current document.

**Built:** `AwakenArts_Figure_Edition_Production_Standard.md` — Section 9 "Uses" subsection added; Reference Implementation line reworded.

**Implementation status.** Both edits are text-only additions to an existing governing document; no other file depended on the "Series Prototype" wording being exact, so no downstream changes were needed.

## 2026-07-06 — New developmental phase: the Christian Fulfillment Lens

Susan's directive: incorporate the Christian story into the development of every Figure Edition, from the earliest stage of development rather than as a closing pass. This does not replace the symbolic, literary, psychological, and experiential recognition work already established — it completes it. The governing question: *how does this symbolic story find its fulfillment within the Christian story?*

Explicitly, this is process, not interpretation. Susan's own framing: this directive establishes a new developmental lens; it does not tell Claude how to read Dragon (or any other edition) through it. That interpretive work happens edition by edition, starting with Dragon, when each is next revised — not in this pass.

**Built:** `AwakenArts_Editorial_Philosophy.md` — new section "The Christian Story: Where Recognition Finds Its Fulfillment," placed just before the Governing Editorial Test. States what the lens is and is not (not a new section, lesson, or doctrinal appendix — the larger narrative the symbolic story's meaning ultimately completes within), the five review questions (human pattern, invited truth, resonance with Scripture, participation in the larger Christian story, faithfulness to both the symbolic story and the Christian understanding of transformation), the governing principle (symbolic story remains the reader's first experience; Christian story provides its deepest fulfillment; neither competes), and where results get documented (each edition's own editorial record, per the pattern already set by `Dragon_Editorial_Responses.md`).

`AwakenArts_Figure_Edition_Production_Standard.md` — new Section 11, "Applying the Christian Fulfillment Lens," cross-referencing the Philosophy doc and stating that this review runs alongside the Governing Editorial Test (Section 10), not in place of it.

**Implementation status.** The lens itself is fully documented and now governs future development and revision of every edition, existing and new. No edition has been reviewed through it yet — Dragon is next, when it is revisited, per Susan's explicit instruction not to do that interpretive work in this pass.

## 2026-07-06 — Christian Fulfillment Lens applied to Dragon: first interpretive pass

Susan's follow-up directive: apply the lens just established to Dragon itself — read the edition page by page, ask where each movement resonates with the Christian story, and integrate rather than append, weaving the fulfillment into the existing pages (Recognition, Reflection, Living the Message, Message Delivered) rather than adding a separate "Christian Perspective" page. Governing compass for the pass, in Susan's words: *the Christian story should answer the question the symbolism raises — not replace the symbolism.*

Full page-by-page findings, including the reasoning behind pages left unchanged, are recorded in the new `Dragon_Christian_Fulfillment_Review.md` (added to the Documentation Map, Edition Records tier). Summary:

- **Recognition (page 5)** — revised. The page's closing insight ("the parts were made to live as one") named the recognition but not its source. Added: "A peace like that is never self-made. It is given — the way every true reconciliation is: not achieved by force of will, but received."
- **Living the Message (page 9)** — revised. The closing invitation to keep noticing didn't yet situate the pattern in anything larger than the reader's own noticing of it. Added: "The pattern is older than the dragon, and larger than this book: the same peace, quietly making one what was never meant to be two."
- **Message Delivered (page 8)** — proposed, not applied. A parallel addition ("He did not write this message. He only carries it...") was drafted and rendered as a current-vs-proposed comparison, but held out of the working text: this page's wording was only just finalized on 2026-07-01 and praised as "much stronger than earlier versions," and the addition visibly lengthens a page whose power comes partly from restraint. Left for Susan's explicit decision.
- **Reflection (page 6)** — reviewed, no change proposed. Judgment call: this page's private, personal-encounter register does the diagnostic work; fulfillment is already framed by Recognition just before it and completed by Living the Message a few pages later. Flagged as open to override.
- **Cover, Begin, The Image, The Poem, Journal, Colophon** — reviewed, no change. Two of these turned up existing, unprompted resonance worth recording: the Poem's closing line ("Like two sides of a golden coin, the parts were made to live as one") already performs the Ephesians 2:14 movement in the edition's own words; the Colophon's "When Language Shapes a Path" already echoes John 1 and Psalm 119:105. Both noted in the review document, neither altered.

**Built:** `Dragon_Christian_Fulfillment_Review.md` (new). `Dragon_Figure_Edition_11_Good_Copy.docx` — Recognition and Living the Message text revised in place, dated production notes added marking both pending Susan's confirmation; Message Delivered option flagged inline, not applied. `Dragon_Figure_Edition_11_Series_Prototype.pdf` — pages 5 and 9 re-rendered with the revised text, all other pages unchanged. `Dragon_Message_Delivered_Christian_Fulfillment_Option.pdf` (new) — two-page current-vs-proposed comparison for page 8. Both Dragon contact sheets regenerated. `AwakenArts_Documentation_Map.md` — new entry for the review document under Edition Records.

**Implementation status.** Two pages revised and rendered into the working prototype, marked pending, not yet locked into the governing standard per Susan's own framing that this pass produces something for her review first. One page's option rendered for comparison but not applied. Not yet extended to the other five editions — out of scope for this pass, noted as future work in the review document.

## 2026-07-06 — The Christian story becomes a defining movement: a new required page

Susan's follow-up directive: the earlier light-touch integration (previous entry) was not sufficient on its own — every Figure Edition now requires a dedicated movement, placed immediately after Recognition and before Reflection, where Scripture is explicitly and directly brought into contact with the symbolic recognition just reached. Her rationale, recorded in full in `AwakenArts_Editorial_Philosophy.md`: Jesus taught through story and parable not because stories are memorable but because they open the heart to recognize truths about the Kingdom of God; AwakenArts has adopted the same approach, so the symbolic figure is not an independent source of truth but preparation to recognize truths Scripture has already been revealing. Her closing framing: "The symbolic story awakens recognition; the Christian story provides the larger narrative within which that recognition finds hope, meaning, and direction."

**New page built for Dragon: "The Larger Story"** (working title, per Susan: "Finding Fulfillment Within the Christian Story" — both recorded, open for her decision), placed as the new page 6, immediately after Recognition. Opens by recalling the symbolic recognition just reached, asks plainly where the same movement is found within the Christian story, quotes Ephesians 2:14 (KJV — public domain, no licensing question) as the single illuminating passage, offers a brief literary reflection connecting it to Dragon's own movement, and closes by handing the recognition forward into Reflection. One passage only, deliberately — a second (Colossians 1:19–20 was considered) was judged likely to tip the page toward the "Bible study" feel the directive warns against. Full rationale, including why this specific verse, in `Dragon_Christian_Fulfillment_Review.md`.

**Reflection's intro line extended** (page 7, was page 6) per Susan's explicit instruction that this placement lets Reflection respond to both the symbolic story and the Christian story, not only the symbolism. The three private questions themselves are untouched.

**All subsequent pages renumbered by one** (Journal 7→8, Message Delivered 8→9, Living the Message 9→10, About This Edition 10→11). The two light-touch additions from the previous entry (Recognition, Living the Message) are retained as-is — reasoned in the review document as bookends (foreshadow, then echo) around the new page's explicit fulfillment, not redundant with it.

**Governing documents updated to make this permanent, not Dragon-specific:** `AwakenArts_Editorial_Philosophy.md` — the Christian Fulfillment section gained the "why" rationale, a note that the lens now produces a required page (not only a review discipline), and Susan's closing vision paragraph. `AwakenArts_Figure_Edition_Production_Standard.md` — Section 2 gained a new "The Larger Story" page entry between Recognition and Reflection, with Reflection's entry updated to note it now responds to both stories; Section 11 updated to state that the five review questions now govern this page's content specifically, one carefully chosen passage rather than a survey of connections.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` — new Page 6 inserted, pages 6–10 renumbered to 7–11, Reflection intro extended. `Dragon_Figure_Edition_11_Series_Prototype.pdf` — now 11 pages (was 10); pages 1–5 carried over unchanged, pages 6–11 rebuilt to match the edition's established visual style. Both Dragon contact sheets regenerated against the 11-page PDF; the Collection Contact Sheet swapped "Begin" for "The Larger Story" to keep the sheet at eight pages while surfacing the new movement on the asset that markets the edition. `Dragon_Christian_Fulfillment_Review.md` updated throughout — new page-6 section, Reflection's status changed from "no change" to "revised," page numbers corrected, summary table and file list updated.

**Implementation status.** New page rendered and visually checked against the edition's existing style before merging into the full document. Renumbered pages spot-checked for correct footer numbers after the merge. Both contact sheets regenerated and reviewed. Not yet extended to the other five editions, and not yet locked into the governing standard as final — everything in this pass remains marked pending Susan's review, consistent with the previous entry's framing.

## 2026-07-06 — Scripture selection corrected: research before selection, not selection then justification

Susan's correction to the previous entry's approach: Ephesians 2:14 had been selected because its vocabulary ("peace," "made... one," "hostility") matched Dragon's own language — a backward method. Her instruction was to identify Dragon's actual narrative movement first, then research how the Christian tradition — named authors (Meyer, Willard, Lewis, Ortberg, Keller, Nouwen, Manning, Eldredge, Chambers, Tozer) plus classical voices — describes that same struggle, and only then ask which biblical *narrative* (not verse) tells the same story, evaluated by whether it's the passage Christ himself might use to complete this movement, not by shared vocabulary.

**Research conducted and recorded in full in the new `Dragon_Christian_Tradition_Research.md`.** Five findings emerged consistently across all ten authors and both classical voices: the inner battle is treated as the common human condition, not a personal defect; the most theologically careful accounts (Augustine explicitly, Lewis implicitly) describe it as one self not yet unified rather than two natures at war — which is the exact claim Dragon's own Recognition page already makes, independently; resolution is consistently described as received through surrender, not self-willed through insight or effort; the wound, once faced rather than hidden, becomes useful to others (Nouwen's wounded healer) rather than merely healed and set aside; and transformation is gradual and whole-person, never a single fix to an isolated part.

**Scripture candidate changed as a result:** the man restored from "Legion" (Mark 5:1–20 / Luke 8:26–39) replaces Ephesians 2:14 as the leading candidate — a narrative, not a doctrinal statement, whose plot matches Dragon's own beat for beat (one person violently unintegrated, not two beings at war; restoration received, not self-achieved; the restored man sent out as a messenger of what happened to him). This candidate had actually been proposed in the immediately preceding conversation turn (before this formal research was requested) on narrative-shape grounds alone; the research conducted here was an independent check on that instinct, and it converges on the same passage from a different direction — by tradition and cross-author consensus rather than by close reading of the Dragon text alone.

**Not yet done:** drafting "The Larger Story" around this passage, and updating the Good Copy/PDF/contact sheets accordingly. Susan's own instruction, echoed from the prior pass, is that the conversation about the passage happens before any paragraph is written — this entry records the research and the resulting candidate, not a finished page.

**Built:** `Dragon_Christian_Tradition_Research.md` (new). `AwakenArts_Documentation_Map.md` — entry added under Edition Records, positioned to be read before `Dragon_Christian_Fulfillment_Review.md`'s Scripture-selection material.

**Implementation status.** Research complete and documented. No edits made yet to the Good Copy docx, the working PDF, or either contact sheet — the Mark 5 / Luke 8 passage is a confirmed recommendation, not yet an applied change, pending Susan's confirmation before drafting begins.

## 2026-07-06 — The Larger Story becomes a permanent three-voice page; Sources of Interpretation added to Editorial Philosophy

Susan's directive: make "The Larger Story" a permanent three-voice structure across every Figure Edition — **Scripture** (the authoritative witness), **Christian Reflection** (one or two accurately quoted respected Christian authors, demonstrating the struggle has been recognized across centuries, not proving the point), and **Returning to the Figure** (a literary paragraph letting all three illuminate one another). Her stated rationale: this places AwakenArts within the broader Christian intellectual and spiritual tradition, rather than reading as an edition with Bible verses added.

**New governing hierarchy: Sources of Interpretation**, added to `AwakenArts_Editorial_Philosophy.md` — four voices, each with a distinct job and none substituting for another: the symbolic story prepares the imagination; Scripture is the primary authority; the Christian tradition illuminates Scripture with wisdom and historical continuity; the reader's lived experience is where all three converge. Scripture remains primary — Christian authors are read as witnesses to the same struggle, not as a second authority alongside Scripture.

**`AwakenArts_Figure_Edition_Production_Standard.md`, Section 2** — "The Larger Story" entry rewritten around the three-voice structure, with an explicit copyright note: Scripture in a public-domain translation (KJV) needs no permission, but quotations from named contemporary or twentieth-century Christian authors are copyrighted and must be cleared against each publisher's quotation policy before an edition is printed or sold. Section 11 gained a stated method, phrased the way Susan put it: identify the edition's central movement before researching; research the tradition before searching Scripture; and ask whether a candidate passage is one Christ himself might use to complete the movement, not one that merely shares vocabulary.

**Dragon's own page rebuilt a third time.** The Ephesians 2:14 draft (vocabulary-matched) and the single-passage Luke 8 draft (narrative-matched, from the research pass) are both superseded, not deleted — `Dragon_Christian_Fulfillment_Review.md` keeps all three drafts visible as the record of how the page arrived at its current form. Current page: Scripture is Luke 8:35, 38–39 (KJV), the man restored from "Legion," carried over from the research pass. Christian Reflection is two verified quotations: C.S. Lewis (*Mere Christianity*, Book IV, Chapter 9 — "not like a fresh coat of paint, but a dyeing or staining which soaks right through") and Henri Nouwen (*The Wounded Healer* — wounds "made available as a source of healing"). Returning to the Dragon ties all three back to the dragon's own arc, ending, as before, by handing the reader into Reflection.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` — Page 6 rebuilt with the three labeled voices; production note updated with revision history and the copyright flag. `Dragon_Figure_Edition_11_Series_Prototype.pdf` — page 6 re-rendered and re-merged; still 11 pages total, pages 1–5 and 7–11 untouched. Both Dragon contact sheets regenerated. `AwakenArts_Editorial_Philosophy.md` — new "Sources of Interpretation" subsection. `AwakenArts_Figure_Edition_Production_Standard.md` — Section 2 and Section 11 updated. `Dragon_Christian_Fulfillment_Review.md` — Page 6 section rewritten with full revision history and the copyright note.

**Implementation status.** New page layout rendered and visually checked — three voices fit comfortably on one page without crowding. Both Lewis and Nouwen quotations verified against original source text via search before use, not quoted from memory. Copyright clearance itself is **not** resolved — flagged as a standing pre-print requirement, not something this pass can close out. Everything in this pass remains marked pending Susan's review, consistent with prior entries in this thread.

## 2026-07-06 — Correction: authority reframed, terminology changed to "voices from the Christian tradition"

Susan's correction to Editorial Objective 3's framing: asking "where does Dragon already align with Christian understanding" quietly makes Augustine, Lewis, and Nouwen the judges of whether Dragon qualifies as Christian enough — backward authority. The corrected question: *where has the Christian tradition already recognized the same human reality?* Dragon doesn't become Christian because Augustine agrees with it; Augustine, Lewis, and Nouwen become witnesses that Christians have long wrestled with the same reality the symbolic story explores. Scripture remains the sole authority; the tradition witnesses to it.

Also corrected: the category name itself. "Christian authors" is retired in favor of **"voices from the Christian tradition"** — a broader, more enduring phrase that includes Church Fathers, Reformers, contemporary pastors, spiritual writers, theologians, Christian philosophers, and Christian psychologists, not only modern published authors. Susan's framing: this makes each edition a conversation across centuries, not a reflection on a single modern book.

**Standardized as a research discipline, not a fixed roster:** every edition researches and finds its own voices from the tradition — there is no reused list of ten names applied to every figure. Dragon's own ten (Meyer, Willard, Lewis, Ortberg, Keller, Nouwen, Manning, Eldredge, Chambers, Tozer, plus Augustine and à Kempis) belong to Dragon's research specifically. Susan's own example: Grismere's research might turn up Lewis and Nouwen again, but also Madeleine L'Engle and Elisabeth Elliot; Bowls and Queen Ann will each surface their own. This is recorded as richer than requiring the whole series to sound alike by citing the same names.

**Built:** `Dragon_Christian_Tradition_Research.md` — Editorial Objective 3 reframed with the corrected question and authority language; intro/method updated to name the per-edition scope explicitly; "Cross-Author Findings" retitled "Findings Across the Tradition." `AwakenArts_Editorial_Philosophy.md` — "Sources of Interpretation" voice 3 rewritten around "voices from the Christian tradition" and the witness-not-validator framing, with a new note that every edition finds its own voices. `AwakenArts_Figure_Edition_Production_Standard.md` — Section 2's Christian Reflection description and Section 11's method both updated to match. `AwakenArts_Documentation_Map.md` — the research document's summary line updated to the corrected terminology and framing.

**Implementation status.** Terminology and authority-framing correction applied consistently across all four documents that referenced the prior language. No change to Dragon's actual page content or Scripture/quotation selection — this pass corrects how the research and its authority are described, not what was found.

---

## Open decisions blocking further progress

Carried from the Publishing Platform Architecture doc, current status:

1. **Purchasing** — **partially resolved 2026-06-29.** A paid/gated tier is confirmed for every Edition except the featured one (Dragon); the exact mechanism (individual purchase, Collections, membership) is still open and still blocks Phase 7's `hasAccess()` from becoming real logic.
2. **Reader as a separate route** — resolved by the Implementation Specification: `/editions/[slug]/read`, distinct from the landing page. No longer open.
3. **The Dragon naming collision** (`/encounters/dragon` vs. the Dragon Figure Edition) — still open, and unrelated to this Spec's scope.
4. **Future platform capabilities — the expansion strategy, not new scope.** The Reader is the enabling capability: once it is proven (Dragon) and generalized (the other five Editions), the platform can safely expand into commerce, collections, workshops, retreats, facilitator resources, and other educational products without requiring architectural redesign — because Sections 3, 5, and 8 of the Implementation Specification were built against the generic `EditionSection`/`Edition`/`hasAccess()` shapes, not Figure-Edition-specific ones (see Spec Section 11). Per Susan's 2026-06-29 framing, the capabilities below are deliberately sequenced rather than concurrent: each one is read as "comes after the previous one succeeds," not as an unrelated future project competing for priority alongside Phases 1–7.
   1. Dragon Reader proof (Spec Phases 1–3)
   2. Five-Edition rollout (Spec Phases 4–5)
   3. Commerce activation (Spec Phase 7, once Purchasing is decided)
   4. Collections
   5. Workshop platform
   6. Retreat platform
   7. Presentation/slide libraries
   8. Facilitator resources
   9. Additional educational products

   Items 4–9 are not specified anywhere yet — no architecture, no spec, no code. Recording the sequence here is not a commitment to build any of them; it exists so that when one of them is eventually proposed, it's read against this order rather than as a surprise insertion.

## 2026-07-06 — Dragon: "peace" corrected to "wholeness"; Scripture citation made a literary choice, not a fixed rule

Susan reviewed the first Christian Fulfillment pass on Recognition and Living the Message and flagged a word-choice error: "peace" was too abstract, and not Dragon's own vocabulary. Dragon's movement is wholeness and reconciliation — a divided self made one — and "peace is the result, not the movement." She supplied the corrected phrasing herself: "A wholeness like this is never self-made. It is received before it is lived."

**Built this pass:**
- Recognition (page 5) and Living the Message (page 10), in the rendered PDF pages, the Good Copy `.docx`, and `Dragon_Christian_Fulfillment_Review.md` — "peace" replaced with "wholeness" throughout, using Susan's own phrasing. `Dragon_Figure_Edition_11_Series_Prototype.pdf` was rebuilt with the corrected pages 5 and 10; both contact sheets regenerated against the corrected PDF.
- `Dragon_Message_Delivered_Christian_Fulfillment_Option.pdf` (the still-unapplied optional proposal) updated to the same wording, so it doesn't fall out of sync if it's approved later.
- `Dragon_Christian_Tradition_Research.md`, Editorial Objective 3 — the bullet quoting the Recognition addition updated to the corrected wording, with a note recording the correction and why (peace is Dragon's result, wholeness is its movement); the underlying finding (resolution is received, not self-willed) is unchanged and still holds.

A second correction, same review: I had written that the Recognition/Living the Message additions worked specifically because "No Scripture is cited or named," which Susan flagged as an accidental rule rather than an observation — "Sometimes Scripture should be named. Sometimes it should simply echo beneath the language." This is now a stated editorial principle rather than an absolute: **Scripture may be explicitly cited or may remain implicitly present, depending on what best serves the literary movement of the edition; the goal is faithful witness, not uniform presentation.** Added to `AwakenArts_Editorial_Philosophy.md` and softened into `AwakenArts_Figure_Edition_Production_Standard.md` Section 11. `Dragon_Christian_Fulfillment_Review.md`'s Page 5/10 rationale now references this principle instead of stating the retired absolute, while preserving the original "no Scripture is cited" line as superseded history rather than deleting it.

Susan also named, and asked to have documented as standing guidance, the technique this pass actually used: introducing theological content through vocabulary and sentence logic rather than by naming doctrine outright — and the larger editorial-question shift it represents, from "how do I add Christian content" to "where does the language itself already begin to carry the Christian story." Both are now recorded in `AwakenArts_Editorial_Philosophy.md` under the Christian Story section, immediately beneath the citation-flexibility principle above.

**Built:** `Dragon_Figure_Edition_11_Series_Prototype.pdf`, `Dragon_Figure_Edition_11_Good_Copy.docx`, `Dragon_Figure_Edition_Production_Contact_Sheet.png`, `Dragon_Figure_Edition_Collection_Contact_Sheet.png`, `Dragon_Message_Delivered_Christian_Fulfillment_Option.pdf`, `Dragon_Christian_Fulfillment_Review.md`, `Dragon_Christian_Tradition_Research.md`, `AwakenArts_Editorial_Philosophy.md`, `AwakenArts_Figure_Edition_Production_Standard.md`.

**Implementation status.** Complete. The wording correction and the citation-flexibility principle are now consistent across every document and rendered artifact that referenced the superseded "peace" wording or the retired absolute rule.

## 2026-07-06 — The Larger Story, fourth revision: Scripture's authority reversed, "Christian Reflection" renamed, closing paragraph names Christ's reconciling work

Susan reviewed the three-voice Larger Story page and identified that, structurally sound as the three-part movement was, the authority relationship between the symbolic story and Scripture was backward: the page read as the dragon's story being confirmed or explained by Scripture, rather than the dragon's story preparing the reader to hear Scripture. Three specific corrections, all applied to Dragon's actual page 6, and all now standing template guidance for every future edition:

1. **Scripture is the center of gravity.** The reader should feel "the Dragon prepared me to hear Scripture," not "the Dragon is being explained by Scripture." Added to `AwakenArts_Editorial_Philosophy.md` as a named principle directly beneath "The governing principle," alongside Susan's own summary sentence — "The symbolic story prepares the reader to recognize; Scripture reveals; the Christian tradition helps us understand; Christ remains the center" — recorded verbatim as the sentence meant to govern this lens across the whole series.
2. **The overstated parallel softened.** "…the dragon enacts in image and poem what Scripture tells plainly…" is corrected to the principle that the symbolic figure never enacts or fulfills Scripture in its own right — it gives symbolic form to a human struggle Scripture reveals within the larger story of God's redemptive work.
3. **The closing paragraph now answers what Christ has done.** Previously ended on recognition alone ("carry that recognition… as something already true"); now names the movement explicitly — symbolic figure → recognition, Scripture → revelation, Christ → reconciliation, reader → response — and closes on an invitation to live in the reconciling work of Christ, not merely to notice a pattern.

A fourth change, terminology rather than content: "Christian Reflection" is renamed **"The Christian Tradition"** everywhere it appears as a section heading — Susan's reasoning: "'Christian Reflection' sounds like a devotional. 'The Christian Tradition' says: here are voices from the Church helping us think about this." The generic third heading is now named "Returning to the Story" in the template (Production Standard), personalized per edition in practice — Dragon's own page keeps "Returning to the Dragon."

**Built this pass:**
- Page 6 of `Dragon_Figure_Edition_11_Series_Prototype.pdf` re-rendered and merged in place with the corrected heading and text; both contact sheets (`Dragon_Figure_Edition_Production_Contact_Sheet.png`, `Dragon_Figure_Edition_Collection_Contact_Sheet.png`) regenerated against the corrected 11-page PDF.
- `Dragon_Figure_Edition_11_Good_Copy.docx` — page 6 heading and both "Returning to the Dragon" paragraphs replaced; a dated correction note appended to the page's existing production note rather than overwriting it.
- `Dragon_Christian_Fulfillment_Review.md`, Page 6 section — a fourth revision entry appended (Susan's three edits quoted in full, current text in full, governing sentence recorded), preserving the first three drafts already on record.
- `AwakenArts_Editorial_Philosophy.md` — authority-reversal principle and governing sentence added under "The Christian Story."
- `AwakenArts_Figure_Edition_Production_Standard.md`, Section 2 — "The Larger Story" entry updated: heading rhythm renamed (Scripture / The Christian Tradition / Returning to the Story), authority-reversal principle stated in the Reader Experience line, closing-movement structure (figure → recognition, Scripture → revelation, Christ → reconciliation, reader → response) named directly.

**Implementation status.** Complete for Dragon. This is now the standing template for every future edition's Larger Story page — heading names, the authority-reversal principle, and the four-clause governing sentence apply series-wide, not only to Dragon. Still open, unchanged from before: final title decision for the page itself ("The Larger Story" vs. Susan's working title), the still-unapplied optional Message Delivered addition, and copyright clearance for the Lewis/Nouwen quotations before print.

## 2026-07-06 — Editorial Philosophy matures: series governing sentence, two selection criteria; title left open; rollout explicitly paused pending Dragon's finalization

Susan reviewed the fourth revision of The Larger Story and confirmed the underlying methodology — a literary symbolic encounter interpreted within the Christian tradition, distinct from either "symbolic psychology" or "symbolic psychology with Bible verses" — as the one uniquely belonging to AwakenArts. Three things were still missing, all now recorded:

1. **A governing sentence for why the editions exist, not only how this lens works.** Added to `AwakenArts_Editorial_Philosophy.md` at the top of "The Christian Story" section, ahead of everything else in it: "Each Figure Edition invites readers into a symbolic story that becomes a way of recognizing patterns that shape ordinary life. Those patterns ultimately find their fullest meaning within the larger story of God's redemptive work in Christ." Framed explicitly as a statement of purpose, not of method — every other principle in the section serves this sentence.
2. **A selection criterion for voices from the Christian tradition**, closing a real gap (today Lewis and Nouwen are used because they're good choices; nothing on record said why any voice qualifies): "Voices from the Christian tradition should be selected because they illuminate the biblical witness rather than replace it. They serve Scripture, not the reverse." Added to `AwakenArts_Editorial_Philosophy.md` (Sources of Interpretation, voice 3) and `AwakenArts_Figure_Edition_Production_Standard.md` (Section 2, Larger Story voice 2).
3. **A selection criterion for Scripture itself**, naming as a standard the lesson already learned but not yet stated as one: "The biblical passage is selected because it shares the same redemptive movement as the symbolic story, not merely similar vocabulary or themes." Added in the same two places (Sources of Interpretation voice 2; Production Standard Section 2, Larger Story voice 1), with the Ephesians 2:14 → Luke 8 history cited as the record of how this was learned.

**The page title remains open, expanded rather than resolved.** Susan is not convinced by "The Larger Story" (vague) or her own working title (too academic), and added four further candidates without choosing one: "The Story Fulfilled," "Within the Christian Story," "The Gospel's Larger Story," "Seen in the Light of Christ." All five candidates now recorded in `AwakenArts_Figure_Edition_Production_Standard.md`, Section 2, and in `Dragon_Christian_Fulfillment_Review.md`, Page 6.

**Explicit standing instruction: do not generalize yet.** Susan: "I would slow down before applying it to the other editions... Once you finalize Dragon, you won't just have completed one edition — you'll have established a methodology that can govern the entire AwakenArts Figure Edition series." Recorded as a standing gate in `Dragon_Christian_Fulfillment_Review.md`: no other edition receives this lens until Dragon's own application is finalized and approved. This supersedes nothing about the standard's *content* (which is written to be series-wide already) — it only holds back *applying* that content to Grismere, Bowls, Queen Ann, or any other edition.

**Built:** `AwakenArts_Editorial_Philosophy.md`, `AwakenArts_Figure_Edition_Production_Standard.md`, `Dragon_Christian_Fulfillment_Review.md`.

**Implementation status.** Complete. The methodology is now stated at three levels — why (governing sentence), what qualifies each voice (two selection criteria), and how (the three-voice page structure and heading rhythm already on record) — with the one open item (page title) expanded rather than forced to a premature decision, and rollout to other editions explicitly gated on Susan's approval of Dragon's finalized version.

## 2026-07-06 — The Larger Story, fifth revision: reframed as a conversation among witnesses; closing beat passed to the reader; title held open by explicit instruction

Susan's reflection on the fourth revision surfaced something the page had already become without being named: not a commentary on Dragon, and not the symbolic story restated in Christian language, but a conversation among witnesses — the symbolic figure witnessing through image and story, Scripture witnessing through God's revealed Word, the Christian tradition witnessing through those who have reflected on these same truths across church history, and the reader invited to recognize that same movement in ordinary life. This reframing is now recorded as a standing description of what this page is, in both `AwakenArts_Editorial_Philosophy.md` ("Sources of Interpretation," new opening paragraph) and `AwakenArts_Figure_Edition_Production_Standard.md` (Section 2, new "What this page actually is" line) — series-wide, not specific to Dragon.

Two concrete edits followed directly from the reframing, applied to Dragon's actual page 6:

1. **The Christian Tradition section no longer reads as "Scripture plus quotations."** A bridging line now opens the section ("The Church has recognized this same movement long before this edition was written, and speaks of it in its own words, across centuries"), and the Nouwen sentence was rewritten to connect forward from Lewis rather than stand as a second, disconnected quotation. Recorded as a standing production guideline: treat voices from the Christian tradition as companions in an ongoing conversation, not competing authorities, and always bridge quotations to each other rather than presenting them as isolated pull-quotes.
2. **The closing paragraph's final beat now belongs to the reader, not the figure.** Removed the trailing clause "so that, like the man Luke describes, he goes and tells" — Susan's reasoning: the dragon has already delivered his message elsewhere in the edition; closing on the figure taking further action re-enacted Scripture's own outcome a second time, when the last movement should pass naturally to the reader instead. Recorded as a standing production rule in Section 2: "the final beat belongs to the reader, not to the figure."

**The page title stays open, by explicit instruction, not by default.** Susan named the tension precisely — "The Larger Story" describes introducing a larger narrative, but the page is doing something more specific: bringing witnesses into conversation. She asked this be held as a live question rather than resolved now ("Do not change the title yet"). The five-candidate list from the prior pass stands unchanged; it is now read against the witnesses framing rather than replaced by it.

**Built this pass:**
- Page 6 of `Dragon_Figure_Edition_11_Series_Prototype.pdf` re-rendered and merged in place (fifth draft); both contact sheets (`Dragon_Figure_Edition_Production_Contact_Sheet.png`, `Dragon_Figure_Edition_Collection_Contact_Sheet.png`) regenerated against the corrected 11-page PDF.
- `Dragon_Figure_Edition_11_Good_Copy.docx` — bridging line inserted before the Lewis quotation, Nouwen sentence rewritten, closing paragraph's trailing clause removed, correction note appended to the existing production note.
- `Dragon_Christian_Fulfillment_Review.md`, Page 6 — a fifth revision entry appended in full (reflection, both edits, current text, status), preserving all four prior drafts already on record.
- `AwakenArts_Editorial_Philosophy.md` — "conversation among witnesses" framing added to "Sources of Interpretation."
- `AwakenArts_Figure_Edition_Production_Standard.md`, Section 2 — "What this page actually is" framing added; Christian Tradition voice description gained the companions-not-authorities/bridging guidance; Returning-to-the-Story voice description gained the "final beat belongs to the reader" rule; title note expanded to flag the open reflection without resolving it.

**Implementation status.** Complete for Dragon. The "conversation among witnesses" framing, the tradition-as-companions guidance, and the "final beat belongs to the reader" rule are now standing, series-wide production standards — available to every future edition once the standing rollout gate (Dragon must be finalized and approved first) is lifted. The page title remains the one open item on this page, held open deliberately.

## 2026-07-06 — Editorial Philosophy: "Series Identity and Individual Voice" added under the Series Statement

Susan added a short, standing paragraph to `AwakenArts_Editorial_Philosophy.md`, placed directly under "The Figure Edition Series Statement": every edition shares a common editorial architecture, reader journey, and publishing identity, but is expected to develop its own symbolic voice and its own conversation with Scripture and the Christian tradition — consistency lives in the series' rhythm and methodology, not in repeated themes, authors, or conclusions. This states directly, at the philosophy level, what several of today's more specific corrections already implied piece by piece (no standing roster of tradition voices, every edition finds its own Scripture and voices, the three-voice page structure is a rhythm not a script) — now recorded as its own named principle rather than left implicit across multiple sections.

**Built:** `AwakenArts_Editorial_Philosophy.md`.

**Implementation status.** Complete. No other document required a corresponding change — this names a principle already operating in practice; it does not alter the Larger Story template, the research method, or any of Dragon's own text.

## 2026-07-06 — The Larger Story, sixth revision: Luke 8 rejected outright; rebuilt on Romans 7–8

Susan rejected the governing Scripture itself, not the surrounding language: "The Dragon is not about demonic oppression. Do not use Luke 8 as the governing Scripture. That passage changes the nature of the edition and leads readers toward the wrong interpretation." Her correction of the edition's actual subject: Dragon is about the divided human condition — false oppositions within the person (strength/tenderness, action/reflection, fire/breath, self-protection/longing for wholeness) — and the need for their reconciliation under God, not deliverance from an external, invading force. Governing test, sharper than the one adopted in the third revision: not "which passage looks like the Dragon" but "what biblical truth makes 'and' possible."

This sharpens, rather than repeats, the earlier vocabulary-vs-narrative-shape lesson. Legion's plot genuinely rhymed with Dragon's (many made one, restored, sent as messenger) closely enough to survive a full dedicated research pass — which is exactly why the gap matters: **narrative shape is necessary but not sufficient; the passage must also share the symbolic story's theological center of gravity.** Legion is a story of deliverance from an invading force; Dragon is a story of one person's own opposing parts needing reconciliation. Recorded as a new, sharper clause on the standing Scripture-selection standard in `AwakenArts_Editorial_Philosophy.md` and `AwakenArts_Figure_Edition_Production_Standard.md`, Section 2.

**Selected replacement, researched from Susan's own shortlist** (Romans 7–8; Romans 12:2; Ephesians 4:22–24; Colossians 3:9–15; 2 Corinthians 5:17–19; Ezekiel 36:26–27): **Romans 7:15 (the divided will) paired with Romans 8:1–2 (freedom in Christ)**, KJV text verified by direct search before use. This passage was already present in `Dragon_Christian_Tradition_Research.md` as Augustine's own anchor text for the divided-will finding — set aside there, in the original research pass, as "argument, not story" in favor of Legion. This correction promotes it from supporting echo to centerpiece; it is a correction consistent with that research's own findings, not a departure from them.

Two framing lines on the page were corrected alongside the Scripture swap: a new opening line, "Christian Scripture and tradition have long spoken of this divided human condition and of the reconciling work of God in Christ" (Susan's own wording, replacing the fifth revision's "The Church has recognized this movement before this edition," which centered the edition rather than Scripture and Christ); and the Christian Tradition section's bridging line, simplified to "Voices from the Church have named this same reality across the centuries," which keeps the ongoing-conversation feel without the retired phrasing. The Lewis and Nouwen quotations, and the "Returning to the Dragon" / closing paragraphs, needed no rewrite — none of them depended on the Legion narrative, confirming that the fourth and fifth revisions' work on authority and voice held up independent of which Scripture anchors the page.

**Built this pass:**
- Page 6 of `Dragon_Figure_Edition_11_Series_Prototype.pdf` re-rendered and merged in place (sixth draft, new opening frame line, new Scripture, corrected Tradition bridging line); both contact sheets regenerated.
- `Dragon_Figure_Edition_11_Good_Copy.docx` — new opening frame paragraph inserted; Scripture intro line and quotation replaced with the two Romans quotations in order; Tradition bridging line replaced; correction note appended to the existing production note.
- `Dragon_Christian_Tradition_Research.md`, Editorial Objective 1 — correction appended recording the rejection and the promotion of Romans 7–8 from supporting text to centerpiece, plus Susan's verbatim governing sentence for Dragon.
- `Dragon_Christian_Fulfillment_Review.md`, Page 6 — sixth revision entry appended in full (directive, rationale, current text, what didn't need to change, status), preserving all five prior drafts already on record.
- `AwakenArts_Editorial_Philosophy.md` and `AwakenArts_Figure_Edition_Production_Standard.md`, Section 2 — Scripture-selection standard sharpened with the theological-center-of-gravity clause, generalized past Dragon.

**Implementation status.** Complete for Dragon. The sharpened Scripture-selection standard (narrative shape is necessary but not sufficient) is now series-wide, available to every future edition once the standing rollout gate is lifted. All six drafts of this page's Scripture selection remain on record — Ephesians 2:14 → single-passage Luke 8 → three-voice Luke 8 → authority-corrected Luke 8 → witnesses-framed Luke 8 → Romans 7–8 — an intentional, visible record of how the page arrived here, per this project's own no-silent-rewrite convention.

## 2026-07-06 — The Larger Story's purpose redefined; seventh revision selects Colossians 3

Susan stepped back from six rounds of line-editing to name the actual pattern: the underlying question kept changing beneath the wording, which is why each revision corrected the previous one rather than settling anything. Her diagnosis and correction, now recorded as governing, series-wide methodology in `AwakenArts_Editorial_Philosophy.md` ("The Christian Story" section) and `AwakenArts_Figure_Edition_Production_Standard.md` (Section 11):

- **The symbolic figure is not the Gospel. It prepares the heart to receive the Gospel.** The Larger Story's job is to answer the question the figure raises, not to explain the figure, prove it with Scripture, or find a biblical story that resembles it.
- **The corrected governing question:** not "what Scripture fits the symbolic story" but **"what aspect of the Gospel does the symbolic story prepare the reader to receive?"** This replaces Review Question 3 in both documents (previously "Where does this recognition naturally resonate with Scripture?").
- **The corrected method, in strict order:** stop searching for resembling passages or parallel stories; identify the central Christian truth the recognition points toward, independent of any passage; only then check whether Scripture, tradition, and the reader's response naturally grow from that truth — continuing to search rather than forcing a text if none do.

Applying this to Dragon exposed something the sixth revision's own correction had missed: Romans 7–8, while a real improvement on Luke 8, still resolves the divided will by mortifying the flesh (Romans 8:13) — casting one part of the self as something to be put to death rather than reconciled. That is the same category error the Legion narrative made, in a quieter register. Naming Dragon's central truth first — the reconciling, unifying work of Christ, in which what seemed divided is made whole together, each part kept rather than defeated — led to a better fit: **Colossians 3:10–11 ("Christ is all, and in all") paired with Colossians 3:14–15 (love as the bond of perfectness, the peace of God ruling in one body)**, KJV verified. This is the closest biblical language yet found to Dragon's own "not this or that, but and."

Notably, nothing else on the page required a rewrite. The opening frame line, the Christian Tradition bridging line, the Lewis and Nouwen quotations, and both Returning-to-the-Dragon paragraphs carried over unchanged for the second consecutive revision — none were ever written in terms specific to one passage. Three different Scripture passages (Luke 8, Romans 7–8, Colossians 3) have now been swapped underneath the same surrounding page without touching the rest of it, confirming the fourth and fifth revisions' work on authority, voice, and the witnesses framing was sound independent of Scripture choice.

**Built this pass:**
- Page 6 of `Dragon_Figure_Edition_11_Series_Prototype.pdf` re-rendered and merged in place (seventh draft, Colossians 3); both contact sheets regenerated.
- `Dragon_Figure_Edition_11_Good_Copy.docx` — Scripture intro line and both quotations replaced with Colossians 3:10–11 and 3:14–15; correction note appended to the existing production note.
- `Dragon_Christian_Tradition_Research.md`, Editorial Objective 1 — second correction appended: central truth named independently, Romans 7–8 tested against it and found wanting, Colossians 3 selected with full rationale.
- `Dragon_Christian_Fulfillment_Review.md`, Page 6 — seventh revision entry appended in full, preserving all six prior drafts.
- `AwakenArts_Editorial_Philosophy.md` and `AwakenArts_Figure_Edition_Production_Standard.md` — the "not the Gospel, prepares the heart to receive it" distinction, the corrected governing question, and the corrected three-step method added as series-wide standards, superseding (without deleting) the narrative-shape-focused method recorded in earlier passes.

**Implementation status.** Complete for Dragon. The redefined purpose and corrected method are now the standing methodology for every future edition's Larger Story page, once the standing rollout gate is lifted. Seven drafts of this one page's Scripture selection remain on record — Ephesians 2:14 → Luke 8 (single-passage) → Luke 8 (three-voice) → Luke 8 (authority-corrected) → Luke 8 (witnesses-framed) → Romans 7–8 → Colossians 3 — the fullest visible record yet of how a page's underlying question, not just its wording, can keep changing until it's named directly.

## 2026-07-06 — Christian Story methodology restated in full; Dragon's page confirmed compliant without further edits

Susan restated the redefined-purpose directive from the prior pass in fuller form, adding language not previously captured as its own governing statement: a fifth step in the editorial movement ("the reader is invited to live in that reality," following symbolic recognition, Scripture's revelation, the tradition's illumination, and Christ remaining the center), three sharp exclusions for the symbolic figure (never the source of wisdom, never a parallel gospel, never a biblical character — only "a symbolic witness that prepares the reader to hear the Christian story with fresh eyes"), and an explicit statement that the Christian story is never Christian content attached to an otherwise complete edition.

All three additions are now recorded in `AwakenArts_Editorial_Philosophy.md` ("The Christian Story" section, and "What this is not") and `AwakenArts_Figure_Edition_Production_Standard.md` (Section 2's "What this page actually is," and Section 11), alongside — not replacing — the four-part governing sentence and corrected method recorded in the immediately preceding pass.

Checked directly against Dragon's seventh-revision page (Colossians 3): no text required revision. The closing paragraph already ends "as an invitation to live more fully in the reconciling work of Christ" — the fifth movement step was already present in substance, simply not yet named as its own governing step. Neither Returning-to-the-Dragon paragraph treats the dragon as a source of wisdom, a parallel gospel, or a biblical character. This is recorded in `Dragon_Christian_Fulfillment_Review.md` as a confirmation note rather than an eighth revision — the page already satisfied a standard that had not yet been fully articulated when it was written.

**Built:** `AwakenArts_Editorial_Philosophy.md`, `AwakenArts_Figure_Edition_Production_Standard.md`, `Dragon_Christian_Fulfillment_Review.md`.

**Implementation status.** Complete. The Christian Story methodology — why it exists, what it is not, the five-part movement, the three exclusions for the symbolic figure, and the corrected research-and-selection method — is now stated fully and consistently across both governing documents, confirmed against Dragon as its working example, and ready to govern Grismere and every subsequent edition once the standing rollout gate (Dragon finalized and approved) is lifted.

## 2026-07-06 — The theological center of the series named directly, in the Editorial Philosophy only

Susan named, in full, what the many revisions to Dragon's Larger Story page had actually been reaching for without yet naming: not "know yourself," not "integrate your shadow," not even "become whole" — the Gospel itself, stated plainly as "God has acted in Christ to reconcile what humanity could not reconcile for itself." AwakenArts' symbolic figures help a reader recognize where that reconciliation is needed; they do not accomplish it. Christ does.

This is recorded in `AwakenArts_Editorial_Philosophy.md`, at the top of "The Christian Story" section, as its own named theological center rather than folded into the existing principles beside it — including Susan's own paragraph verbatim ("The purpose of every Figure Edition is not merely to awaken recognition but to prepare the imagination to receive the deeper truth revealed in the Gospel. Recognition is the doorway; Christ is the fulfillment.") and the reframed core question, "How does this figure prepare us to hear the Gospel more deeply?"

Susan was explicit that this is different in kind from the layout, typography, question-wording, and production-standard work refined repeatedly over the past weeks — this is the foundation that work stands on, not one more thing to iterate at the same pace. Per that caution, this pass makes no other changes: Dragon's page is not touched, the Production Standard is not touched, no new revision is opened. The addition stands on its own in the Editorial Philosophy, exactly as asked.

**Built:** `AwakenArts_Editorial_Philosophy.md`.

**Implementation status.** Complete, and deliberately left there. Whether and how this theological center reshapes the Production Standard's mechanics, or invites a fresh look at Dragon's own page in light of it, is left for a future, unhurried pass — not assumed or begun here.

## 2026-07-06 — "Recognition and Truth" added to the Editorial Philosophy

Following directly from the theological center named in the previous entry, Susan drafted and refined the section that states AwakenArts' actual governing editorial test: not "does this sound Christian" but "is this true?" — and only then, "is it true in a way that is faithful to Christ and the witness of Scripture?" She revised an earlier draft of this (presented to her first, then corrected in her own hand) to ensure Scripture is not treated as one witness among several — creation, human experience, and the symbolic story may illuminate the same reality, but Scripture uniquely bears authoritative witness to Christ and is the measure the others are tested against, not a peer to them.

Recorded verbatim, as Susan wrote it, under a new "### Recognition and Truth" subheading in `AwakenArts_Editorial_Philosophy.md`, immediately after the theological center and its caution against revising this material at the same pace as layout or wording work.

**Built:** `AwakenArts_Editorial_Philosophy.md`.

**Implementation status.** Complete. No other document touched this pass, per the same standing caution. This is now the second of two foundational additions (theological center; Recognition and Truth) forming the constitutional layer beneath the Christian Story lens — both explicitly marked as slower-moving than the rest of the document.

## 2026-07-06 — The vocation of a Figure Edition named; the dual standard recorded; Dragon's seven revisions reframed as method discovery

Three additions, all following directly from the theological center and "Recognition and Truth" recorded in the two preceding entries:

1. **The vocation.** Susan named, explicitly, something she said had not yet been stated: an AwakenArts Figure Edition's purpose is not merely to present beautiful symbolic art, not merely to stimulate discussion, and not merely to teach Christian doctrine — its purpose is to prepare the imagination. Recorded under a new "### The Vocation of a Figure Edition" heading in `AwakenArts_Editorial_Philosophy.md`, immediately after "Recognition and Truth." This section also names the Figure Edition explicitly as a *modern literary parable* — sharing a biblical parable's educational movement (recognizable → sustained reflection → deeper truth revealed → received into God's larger truth → faithful living) without claiming to be a biblical parable itself — connecting this new naming back to the long-standing "Recognition, Not Interpretation — The Parable Principle" section rather than duplicating it.
2. **The dual standard.** A new, structural publishing principle: every edition is judged on two independent levels — does it stand as a complete literary work on its own (full artistic integrity even for a reader who stops before The Larger Story), and does The Larger Story faithfully receive that work into the truth revealed in Christ. Both must pass; an edition satisfying only one is not finished. Recorded in `AwakenArts_Editorial_Philosophy.md` (same new section) and operationalized as a sign-off check in `AwakenArts_Figure_Edition_Production_Standard.md`, Section 10, alongside the existing five-question Governing Editorial Test.
3. **Dragon's seven revisions, reframed for the record.** Susan was explicit that these were not seven attempts to fix Dragon — they were the steps by which this entire methodology (the vocation, the dual standard, the corrected Scripture-selection method) was discovered, not a pre-existing rule applied to an unlucky edition. This is recorded in the same new section, with the direct consequence stated plainly: future editions begin from a mature editorial philosophy, production standard, theological methodology, and literary rhythm, and should need fewer revisions to reach the same place — though fewer is not none.

**Built:** `AwakenArts_Editorial_Philosophy.md`, `AwakenArts_Figure_Edition_Production_Standard.md`.

**Implementation status.** Complete. This closes out the theological-foundation work opened by the "theological center" entry — vocation, truth-test, and dual standard are now all recorded, cross-referenced, and ready to govern Grismere or any future edition. No Dragon-specific text was touched this pass.

## 2026-07-06 — Foundational Conformance Review: all 11 pages read fresh; three residual findings, two open decisions

Susan asked for a fundamentally different assignment than another Larger Story revision: read the entire Dragon edition, cover to colophon, as if encountering it for the first time, against the now-completed Editorial Philosophy and Production Standard — testing whether the founding edition embodies the philosophy it helped discover, not whether any one page's wording is polished. Explicitly framed as refinement, not reinvention, and as the last major Dragon pass before it can be called, in substance and not only in sequence, the Founding Edition.

The review confirms the great majority of Dragon already conforms without change — Cover, Begin, The Image, The Poem, Journal, Living the Message, and About This Edition all pass as written, and Recognition and The Larger Story pass in substance. Three residual vocabulary inconsistencies were found, all on pages the Larger Story's seven revisions never touched, because none of those revisions looked outside page 6: Recognition's "02 · Develop the Insight" still says "peace" where the rest of the edition now says "wholeness"; Reflection's intro line references "the peace named on the page before this one," a stale pointer to the very first, since-superseded Ephesians 2:14 draft of The Larger Story; and Reflection's second prompt repeats the same "peace" vocabulary. Two further items are recorded as open decisions rather than defects: whether to work Susan's "disordered by sin" diagnosis into The Larger Story's own language, and whether to apply the still-undecided Message Delivered addition now that the methodology has matured.

**Built:** `Dragon_Foundational_Conformance_Review.md` (new), `AwakenArts_Documentation_Map.md` (new entry; `Dragon_Christian_Tradition_Research.md`'s entry corrected to reflect its own three-stage Scripture history).

**Implementation status.** Review complete; no page of the PDF or Good Copy docx was edited in this pass. Awaiting Susan's direction on which findings to act on.

## 2026-07-07 — The Larger Story, eighth revision: Colossians rejected, page rebuilt around the divided heart, shortened

Susan identified that Colossians 3 had repeated the same category error as every prior Scripture choice on this page, just less visibly: it was selected because its vocabulary ("one body," "the bond of perfectness," "peace") echoed the edition's own language, not because it carried Dragon's actual movement. Corrected premise, stated directly: Dragon is not about unity between people — it is about division within the person. The governing question changed accordingly, from "what does Scripture say about unity" (still a resemblance test) to "what does Scripture say about the divided heart, the divided will, the double-minded person."

Evaluated against a new shortlist (Romans 7, James 1:8, Psalm 86:11, Ezekiel 36:26, Romans 12:2, Galatians 5): Romans 7 and Galatians 5 set aside again for resolving the divided condition by defeating one side rather than reconciling both. **Selected: James 1:8 ("a double minded man is unstable in all his ways") + Psalm 86:11 ("unite my heart to fear thy name")** — a diagnosis-then-prayer pairing that names the condition without casting either half of the person as an enemy, and treats unity as received rather than self-willed. Both verified against KJV text.

Cutting the plot retelling (rage, fire) from "Returning to the Dragon," per Susan's own trimmed draft and her instruction that the page should become shorter, not longer, orphaned Henri Nouwen's wound-healing tradition quote. Replaced with Augustine's *Confessions*, Book VIII (Pusey translation, public domain): "Thus did my two wills, one new, and the other old, one carnal, the other spiritual, struggle within me; and by their discord, undid my soul" — independently flagged earlier in `Dragon_Christian_Tradition_Research.md` as the single most precise account of Dragon's own claim.

**Built:** `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 replaced), `Dragon_Figure_Edition_11_Good_Copy.docx`, both contact sheets regenerated, `Dragon_Christian_Tradition_Research.md` (fourth correction appended), `Dragon_Christian_Fulfillment_Review.md` (eighth revision entry appended, all seven prior drafts retained on record).

**Implementation status.** Complete. The closing paragraph is unchanged for the fourth revision running — further confirmation the authority/voice/witnesses framing settled in the fourth and fifth revisions is durable across Scripture changes. Title remains open. The three residual "peace"→"wholeness" items and the Message Delivered decision from the Foundational Conformance Review remain outstanding and untouched by this pass.

## 2026-07-07 — Christian Sentiment vs. Christian Content lens recorded; six-page review sequence adopted

Susan drew a distinction not previously named: reviewing Recognition and Reflect under the Christian Fulfillment Lens does not mean adding Christian content to them — it means checking their implicit anthropology. Her own test case: a line implying "you already possess everything you need within yourself" fails, not for lacking a citation, but for teaching a self-sufficient anthropology the series has already ruled out; a line asking "where do you recognize this struggle in your own life?" passes, because it invites recognition without implying recognition is itself the resolution. She also named the review order going forward — Image, Poem, Recognition, Reflect, The Larger Story, Living the Message, each against its own governing question — and named The Larger Story directly as the one page in the architecture still finding its mature voice, since it has no years of implicit development behind it the way the other five pages do.

**Built:** `AwakenArts_Editorial_Philosophy.md` — new "Christian Sentiment, Not Merely Christian Content" and "The Six-Page Review Sequence" subsections under "Sources of Interpretation."

**Implementation status.** Complete, documentation only. This is the lens the same-day Recognition and Reflect rewrites below were built against.

## 2026-07-07 — Page Titles and Reader Voice: The Larger Story confirmed permanent; Reflection retitled Reflect

Two title decisions, both from Susan directly, closing out the one standing open item ("title reflection not yet resolved") this page has carried since its first revision. **The Larger Story** is retained permanently as the series-standard title — deliberately not "The Christian Story," "The Gospel Story," or "Scripture's Answer," each of which would announce the page's conclusion before the reader enters it. Governing posture, her words: invitation, not persuasion. **Reflection becomes Reflect** — the noun described content; the imperative invites participation, matching "Begin" and turning the two-word bookend (Begin / Reflect) into a deliberate structural echo.

One open item surfaced in the process, not resolved here: Susan's own directive listed the edition's titles in the order Begin, The Image, The Poem, Recognition, Reflect, The Larger Story, Living the Message — Reflect ahead of The Larger Story. Dragon's built page order has The Larger Story at page 6 and Reflect at page 7, the reverse, per the standing rationale that Reflect should be able to respond to both the symbolic story and the Christian story, not only the symbolism. Recorded as a title standard only; Dragon's page order was not changed against this list, and the discrepancy is being put to Susan directly rather than resolved unilaterally in either direction.

**Built:** `AwakenArts_Figure_Edition_Production_Standard.md` (Section 2 — Larger Story title resolved; Reflection section retitled Reflect; reader-facing title table updated; new "Page Titles and Reader Voice" note recorded in full, including the order discrepancy).

**Implementation status.** Complete, documentation only in this entry — the rename is carried into Dragon's actual pages in the entry immediately below.

## 2026-07-07 — Recognition (ninth revision) and Reflect rewritten; both applied to the edition

Following the section-by-section drafting workflow Susan set for this pass — offer rewrites in chat first, apply nothing until all sections in a batch are settled — Recognition and Reflect were both rewritten and, once confirmed, applied to the edition together in a single pass, alongside the title rename above.

**Recognition, ninth revision.** Susan rewrote "Observe," "01," and "02" directly, naming the structural shift herself: "This Recognition page is no longer a page about the dragon. It is a page about the reader. The dragon remains the doorway. Recognition becomes the mirror." One sentence in 02 — "Before we can understand what we are fighting, we must first recognize what has become divided within us" — was deliberately sat with before being confirmed: it carries James 1:8's logic without quoting it, and hands Recognition's last word directly to The Larger Story's first move. The word "peace" no longer appears anywhere on the page, resolving the Foundational Conformance Review's flagged peace→wholeness item on this page without a separate fix.

**Reflect, retitled and rewritten.** Susan removed every line that told the reader what they were experiencing rather than asking them to discover it — named explicitly: "feels too much," "wants too much," "the part still waiting to be reconciled," "the dragon's rage," "longing for rest." This is the Reflect-page application of the same-day "Christian sentiment, not content" lens: a prompt that presumes the reader's resolution fails the test regardless of theological language; a prompt that only invites recognition passes. The intro line's stale reference to "the peace named on the page before this one" — a leftover pointer to the long-superseded Ephesians 2:14 draft, flagged in the Foundational Conformance Review — is gone along with the rest of the interpretive framing.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (pages 5 and 7 rewritten in place; production notes updated in full), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (pages 5 and 7 rebuilt and merged in, still 11 pages total), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (ninth Recognition revision and the Reflect retitle/rewrite both appended in full).

**Implementation status.** Complete. Two of the Foundational Conformance Review's three residual "peace"→"wholeness" items are now resolved as a side effect of content rewrites rather than word-substitution fixes (Recognition's 02; Reflect's intro line and second prompt). The one page-order question raised by the title directive (Reflect vs. The Larger Story sequence) remains open and has been put to Susan directly rather than resolved here.

## 2026-07-07 — Recognition, tenth revision: three word-level refinements, near series-standard

Same day, three further edits to Recognition on top of the ninth revision, each removing a remaining trace of explanation rather than changing the page's structure: "has become divided" → "is divided" in Observe (names the condition without implying a cause); "each struggling for mastery over the other" removed from 01 (trusts the image and the reader rather than re-describing the struggle the image already shows); "what we are fighting" → "the conflict" in 02 (keeps attention on the condition rather than shifting it toward an opponent). 03 and its closing sentence are unchanged and were explicitly reconfirmed — Susan named it the settled hinge between Recognition and The Larger Story, and "exactly the kind of Christian sentiment" the lens recorded earlier the same day is asking for.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx`, `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 5 rebuilt again, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (tenth revision appended).

**Implementation status.** Complete. Susan's own framing: this draft is near the series standard for how a Figure Edition's Recognition page should be built — not merely a Dragon-specific fix.

## 2026-07-07 — Recognition approved and closed; four-step movement adopted as series standard

Susan approved the tenth-revision text as final, reading it as a first-time reader against exactly what Recognition is supposed to do: it no longer explains the dragon, no longer leans on psychological language, and names a recognizable human condition before stopping. She closed the page's four-step structure — Observe, Explore the Pattern, Develop the Insight, Return to the Image — as the Recognition model future Figure Editions should emulate, distinct from Dragon's specific wording, which each future edition will find in its own symbolic language.

**Built:** `AwakenArts_Figure_Edition_Production_Standard.md` (Recognition section — four-step movement recorded as series standard, status marked closed), `Dragon_Christian_Fulfillment_Review.md` (approval recorded in full, Page 5).

**Implementation status.** Complete. No file change was required to the edition itself — the approved text was already live as of the tenth revision. Per Susan's explicit instruction, Dragon's Recognition page is not to be revisited again unless a future edition surfaces something fundamentally new about the Recognition page itself. Attention moves to Reflect next.

## 2026-07-07 — Reflect rewritten across several rounds and approved; Recognition/Reflect pair closed

Following Recognition's closed four-step standard, Reflect went through the same text-only, round-by-round review before anything touched the files: intro line shortened to trust the title; Q1 retitled "Where Do I Recognize This Struggle?" so the question invites discovery rather than presuming the reader is already fighting themselves; Q2's "dragon" lowercased and "entirely" removed for rhythm and honesty about mixed conflicts; Q3 retitled "What Might 'And' Change?" and worked through two further drafts before landing on "the possibility of *and*," italicized rather than quoted, keeping the edition's central symbol a symbol rather than a word being defined. Susan named the resulting shape herself — remember, recognize, reimagine — and confirmed Reflect complete: it promises no healing, integration, or reconciliation, leaving that work entirely to The Larger Story.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (page 7, "and" set as an italic run), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 7 rebuilt, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (full revision history and approval recorded).

**Implementation status.** Complete. Recognition and Reflect are both now closed, approved, and applied. Per Susan's direction, the remaining open work on Dragon is The Larger Story — the one section she has named repeatedly as still finding its mature voice — and the standing page-order question (Reflect vs. The Larger Story sequence), still unresolved.

## 2026-07-07 — Reflect's three-question movement (remember, recognize, reimagine) locked in as series standard

Susan named the progression across Reflect's three finalized questions — Q1 asks the reader to remember, Q2 to recognize, Q3 to reimagine — and asked to lock it in as a path for future editions' Reflect pages, the same way Recognition's four-step movement was closed as a series structure rather than a Dragon-specific solution.

**Built:** `AwakenArts_Figure_Edition_Production_Standard.md` (Reflect section — three-question movement recorded as series standard, structure only, wording left to each edition).

**Implementation status.** Complete, documentation only — no change to Dragon's own already-approved Reflect text. Recognition and Reflect are now both closed with matching series-standard structures recorded; only The Larger Story and the page-order question remain open on Dragon.

## 2026-07-07 — The Larger Story, ninth revision: reduced now that Recognition and Reflect carry their own weight

With Recognition and Reflect both closed, Susan redefined The Larger Story's purpose as singular — receive the Dragon into the larger story revealed by God in Christ — and directed that it stop explaining, retelling, or interpreting the symbol, since Recognition already does that work. Scripture cut from two passages to one (James 1:8 alone; Psalm 86:11 removed, on the reasoning that a single verse points rather than proves); the Christian Tradition voices (Lewis, Augustine) kept exactly as they were; "Returning to the Dragon" rewritten and re-split into four short closing sentences.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (Psalm 86:11 paragraph removed; closing section rewritten), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt, visibly shorter again, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (ninth revision appended in full; all eight prior drafts remain on record).

**Implementation status.** Complete. This was executed directly from Susan's explicit, itemized editorial directive rather than run through a draft-and-confirm cycle, consistent with how comparably explicit directives were handled earlier in this project. The page-order question (Reflect vs. The Larger Story sequence) remains the one open item on Dragon.

## 2026-07-07 — The Larger Story, tenth revision: "Final Maturation" — quiet convergence, Augustine given primacy

Susan issued the page's most explicit directive yet, naming the mature voice it has been seeking: not the Dragon proving Scripture or Scripture proving the Dragon, but all three witnesses — symbolic story, Scripture, Christian tradition — bearing witness to the same human reality, with Scripture as the authority throughout. Two changes: the Christian Tradition section reordered so Augustine holds primary place, unexplained, trusting recognition alone; and "Returning to the Dragon" compressed further, its second sentence cut from a four-part list down to a single clause ("The divided heart is not only the Dragon's story. It is ours."), since Recognition and Reflect have already done that naming work.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (Christian Tradition quotes reordered; closing sentences one and two rewritten), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt again, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (tenth revision appended; all nine prior drafts remain on record).

**Implementation status.** Complete. Applied directly from Susan's itemized directive, consistent with the ninth revision. This is the tenth revision to this page's Scripture/content and the fourth to be executed as a direct directive rather than a draft-and-confirm round — Recognition, Reflect, and The Larger Story have each now been worked through to a settled state. The page-order question (Reflect vs. The Larger Story sequence) remains the one open item on Dragon.

## 2026-07-07 — The Larger Story, eleventh revision: two rhythm refinements; "four voices converging" named

Susan called the tenth revision the strongest version yet and made two small wording changes: Scripture's intro line shortened to "Scripture has long named this same condition" (removing the Dragon as the reference point, since Scripture stands on its own); "Returning to the Dragon"'s first sentence changed from "Augustine bears witness to living it" to "Augustine gives voice to its lived experience," keeping Augustine a witness rather than letting the wording drift toward endorsement of the divided condition. She also named something true about the page's own history: it no longer connects the Dragon to Christianity, it lets four voices converge — Scripture names, Augustine confesses, Lewis describes transformation, the Dragon helps the reader recognize — ending on Christ rather than on any of the four witnesses along the way.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx`, `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt again, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (eleventh revision and the convergence observation both recorded in full).

**Implementation status.** Complete. Eleven revisions now stand on record for this page's content. The one open item remaining anywhere on Dragon is the Reflect-vs-Larger-Story page-order question.

## 2026-07-07 — The Larger Story, twelfth revision: Lewis removed, Augustine given sole voice plus a brief bridge

Susan removed the C. S. Lewis quotation entirely — a genuinely new distinction, not previously drawn: Lewis's claim is about transformation already underway, and this page's job by the twelfth revision is recognition, not remedy. Augustine now stands alone as the Christian Tradition's voice, quoted without explanation, followed by one short unquoted bridge sentence connecting his confession directly to the Dragon. Scripture, the opening sentence, and "Returning to the Dragon" are all unchanged from the eleventh revision.

**Incidental effect:** removing Lewis also removes the one standing copyright-clearance item on this page — Augustine (Pusey translation) and the KJV are both public domain, so The Larger Story now requires no publisher permission before print.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (Lewis paragraph replaced with the editorial bridge sentence), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt, Lewis's italic-quote styling removed, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (twelfth revision recorded in full; eleven prior drafts remain on record).

**Implementation status.** Complete. Twelve revisions now stand on record for this page. The one item still open anywhere on Dragon is the Reflect-vs-Larger-Story page-order question.

## 2026-07-07 — The Larger Story, thirteenth revision: FINAL — both remaining bridging lines cut

Susan supplied final text directly and marked it complete: no further expansion, no additional Scripture, no restoring Lewis, no explaining Augustine. Both remaining bridging/intro lines were cut so each heading (Scripture, The Christian Tradition) moves straight into its quotation with no lead-in — the sparest of all thirteen drafts this page has been through. The editorial bridge after Augustine and "Returning to the Dragon"'s first sentence were each tightened once more. Susan's statement of the completed movement: Scripture names the divided condition, Augustine confesses it, the Dragon helps the reader recognize it, Christ alone reconciles it — every sentence pointing beyond itself, ending in invitation rather than explanation.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (both bridging lines removed; two sentences tightened), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (thirteenth and final revision recorded; all twelve prior drafts remain on record).

**Implementation status.** Complete. The Larger Story is now marked final per Susan's explicit direction — thirteen revisions in total, from the first Ephesians 2:14 draft through this text. Recognition, Reflect, and The Larger Story are all now closed. The one item still open on the entire edition is the Reflect-vs-Larger-Story page-order question raised by the Page Titles directive.

## 2026-07-07 — The Larger Story, fourteenth revision: literary refinement, two exact-wording fixes

Susan requested clarity-only refinement, not content revision: the editorial bridge's ambiguous "It" was replaced with "The Dragon" to remove pronoun ambiguity, and "Returning to the Dragon"'s opening sentence was reworded to stop repeating "gives symbolic form to a human struggle" (already stated one sentence above, in the bridge) — now reads "Here the symbolic story returns—not to explain the struggle again, but to let us recognize it more clearly." The remaining three sentences of that section are unchanged, per explicit instruction.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (two sentences replaced with exact wording as directed), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (fourteenth revision recorded; all thirteen prior drafts remain on record).

**Implementation status.** Complete. Fourteen revisions now stand on record for this page. The Reflect-vs-Larger-Story page-order question remains the one open item on Dragon.

## 2026-07-07 — The Larger Story, fifteenth revision: two final word-level fixes; named the mature form

Susan made two last refinements: "the symbolic story" replaced with "the Dragon" in the Returning-to-the-Dragon opening sentence, since the abstract phrase broke the page's literary voice and read as commentary rather than the edition speaking; and "human" dropped from "the Dragon is not inventing a human struggle," letting Augustine's own quotation carry more of the weight. She named the resulting four-step progression — Scripture names, Augustine bears witness, the Dragon helps recognize, Christ reconciles — "restrained, coherent, and faithful to the methodology," and called this the mature form of The Larger Story.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx`, `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (fifteenth revision recorded; all fourteen prior drafts remain on record).

**Implementation status.** Complete. Fifteen revisions now stand on record for The Larger Story. The Reflect-vs-Larger-Story page-order question remains the one open item on the whole edition.

## 2026-07-07 — Page-order question RESOLVED: Recognition → Reflect → The Larger Story → Living the Message

The one open item carried since the Page Titles directive is closed. Susan confirmed Dragon's built order is correct: Recognition (names what is genuinely true) → Reflect (remember, recognize, reimagine) → The Larger Story (receives that recognition into the Christian story) → Living the Message (invites life in Christ). Her reasoning: Reflect must precede The Larger Story because it is the recognition being received there, not the other way around — the methodology itself answers the question, and no further discussion is needed. This is recorded as the series-standard sequence, not only Dragon's own.

**Built:** `AwakenArts_Figure_Edition_Production_Standard.md` — the "Page Titles and Reader Voice" note's flagged discrepancy replaced with this resolution.

**Implementation status.** Closed. Per the project's standing no-silent-rewrite convention, this entry and the Production Standard note record the resolution rather than deleting the prior open-item notes — the history of the question being raised and put to Susan stays on record; only its status changes, from open to resolved. With this closed, Dragon has no remaining open production items: Recognition, Reflect, and The Larger Story are all approved and final, and the page order is confirmed.

## 2026-07-07 — The Larger Story, sixteenth and final revision: original sentence restored; historical note approved; page closed

Susan reverted the fifteenth revision's "Here the Dragon returns" back to the original "The Dragon gives symbolic form to a human struggle. Scripture names that struggle. Augustine gives voice to the experience of living it." Her reasoning: the editorial bridge already answers "what is the Dragon"; "Returning to the Dragon" should answer a different question — the relationship between the Dragon, Scripture, and Augustine — which the restored sentence completes rather than repeats. The rejected wording, on reflection, called attention to the book's own architecture rather than staying inside the literary experience.

She also approved a historical note, in her own exact wording, as the closing record of this page's revision history: "Across these revisions, The Larger Story found its mature voice. It no longer seeks to justify the Dragon through Christian sources. Instead, it locates the Dragon within a reality that Scripture names, Augustine confesses, and Christ ultimately reconciles. The Dragon is not presented as a source of truth, but as a symbolic witness that prepares the reader to recognize a human condition the Christian story has long revealed." Her own framing: this describes not only what changed on this page, but what the Dragon edition discovered for the entire AwakenArts series.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx`, `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 6 rebuilt, still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (sixteenth revision and the approved historical note both recorded in full; all fifteen prior drafts remain on record).

**Implementation status.** Complete. The Larger Story is now marked final. Sixteen revisions stand on record for this page, from the first Ephesians 2:14 draft through this closing text. Recognition, Reflect, and The Larger Story are all closed and approved; the page order is resolved. Dragon has no open production items remaining.

## 2026-07-07 — Dragon Christian Fulfillment Review: final sign-off on The Larger Story; core revision work CLOSED; two unrelated items flagged still open

Susan signed off on The Larger Story's sixteenth revision as final, reading it as a reader rather than an editor and naming its anchor sentence directly: "The Dragon teaches us to recognize the struggle. Scripture reveals the One who reconciles it" — "both the literary and theological center of the page." Her governing observation, now the standard every future edition is measured against: the page does not use Scripture to validate the Dragon, nor elevate the Dragon alongside Scripture — it places the Dragon in its proper role, a symbolic witness preparing the reader to recognize a reality Christian tradition has long understood and Christ alone resolves.

She also named Dragon's larger significance: it is no longer simply the first completed Figure Edition, but the edition in which the AwakenArts methodology was discovered, tested, and finally articulated — Recognition, Reflect, The Larger Story, and the Editorial Philosophy now reinforce each other rather than competing. This confirms the "method discovery, not fix-attempts" reframing recorded earlier in this Log.

**Recognition, Reflect, and The Larger Story are formally closed.** Page order is resolved. Susan indicated this closes the Dragon revision phase and opens applying the methodology to Grismere next.

**Two items flagged before treating Dragon as fully closed, so they aren't quietly lost in the larger sign-off:** Page 9 (Message Delivered)'s optional Christian Fulfillment addition remains "PENDING DECISION, NOT APPLIED," undecided since first proposed; Page 10 (Living the Message)'s added closing sentence remains marked "PENDING SUSAN'S APPROVAL," undecided since 2026-07-06. Neither is part of today's sign-off; both are genuinely still open.

**Built:** `Dragon_Christian_Fulfillment_Review.md` (Final Sign-Off section added at document's end, recording the approval, the anchor sentence, the larger claim, and the two flagged open items).

**Implementation status.** Dragon's Recognition/Reflect/Larger Story revision arc is complete and signed off. Two unrelated, smaller decisions remain open on Pages 9 and 10, put to Susan directly rather than assumed resolved.

## 2026-07-07 — Message Delivered and Living the Message decided; the entire Dragon Figure Edition is now complete

Susan closed both remaining open items. **Message Delivered:** the proposed messenger paragraph is declined, not added — "The Dragon has already been placed in its proper relationship to Scripture and Christ in The Larger Story. Repeating that idea here weakens its impact. Let Message Delivered remain literary, and let The Larger Story remain theological." The page stands exactly as it was. **Living the Message:** a literary-only refinement, per explicit instruction (no Scripture, no explanation, no summary) — the opening and all three questions are unchanged; only the closing paragraph changes, dropping the pending "the pattern is older than the dragon, and larger than this book" sentence ("summarizes the edition rather than releasing the reader into it") for "As life unfolds, you may find yourself recognizing the Dragon's story in places you had not seen before" — an invitation, not a conclusion.

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (Message Delivered note updated to reflect the decline; Living the Message closing paragraph replaced), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (page 10 rebuilt — a stale "09" footer page number also corrected to "10" along the way — still 11 pages), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (both decisions recorded in full; Message Delivered's declined option retained on record, not deleted).

**Implementation status.** Complete. With these two decisions, every page of the Dragon Figure Edition — all eleven — is now finalized with no open items anywhere. Susan: "I would consider the Dragon edition complete. It ends not by telling the reader what to think, but by inviting them to continue recognizing what is true as they return to their own lives." Per her earlier direction, the same methodology is now ready to be applied to Grismere and the editions that follow.

## 2026-07-07 — Governing workflow directive: Section-First Revision Policy adopted for all Figure Editions

Susan formalized the section-by-section drafting rhythm this session gradually settled into as a standing, named policy, effective for all Figure Editions until otherwise instructed: revise one section at a time as text only, no production files touched; approve that section's text explicitly; only rebuild the master DOCX, master PDF, both contact sheets, the Implementation Log, and review documentation once told directly — either "Commit this section to production" (one section) or "Commit all approved sections to production" (a full review cycle). Governing principle: "words are the product; production files are simply containers for those words."

**Built:** `AwakenArts_Figure_Edition_Production_Standard.md` — new "0. Editorial Workflow — Section-First Revision Policy" section, placed before Section 1 as a governing directive rather than a page-content rule.

**Implementation status.** Complete, and now in effect. This changes my own default behavior starting immediately: no PDF, contact-sheet, docx, log, or review-doc updates on any Figure Edition until Susan gives one of the two commit phrases above, even if a section's wording looks settled. This entry is the one exception made under the old behavior — recorded per normal log practice, not as a violation, since the directive took effect with this message.

## 2026-07-07 — Message Delivered and Living the Message reopened, refined, approved, and committed; Dragon editorially complete

Under the newly-adopted Section-First Revision Policy, both pages went through one further text-only round before Susan's explicit commit instruction. **Message Delivered:** "fulfills his duty" replaced with "brings a message discovered through struggle" — through an interim "learned," corrected to "discovered" to protect the governing distinction that the dragon recognizes truth rather than generating it. Susan named the resulting five-step progression explicit for the first time: the truth already exists; the Dragon discovers it; the reader recognizes it; Scripture names it; Christ reconciles it. **Living the Message:** the closing sentence's "recognizing the Dragon's story" was revised to "recognizing this struggle—and its invitation," so the page points the reader forward into their own life rather than back to the figure — "the reader is no longer looking for dragons; they're learning to recognize reality." Quotation marks around "and" were confirmed deliberately kept as the edition's own literary motif.

Susan then gave the commit instruction directly: "Commit both approved sections to production. Update the master DOCX, master PDF, contact sheets, and revision history."

**Built:** `Dragon_Figure_Edition_11_Good_Copy.docx` (both paragraphs updated, production notes appended), `Dragon_Figure_Edition_11_Series_Prototype.pdf` (pages 9 and 10 both rebuilt — page 9 reconstructed against its dark-field/gold-ampersand design, matched closely to the existing asset — still 11 pages total), both contact sheets regenerated, `Dragon_Christian_Fulfillment_Review.md` (both pages' final approved text and rationale recorded in full).

**Susan's closing observation, recorded because it names the completed structure of the whole edition, not just these two pages:** the poem awakens recognition; Recognition names what is true; Reflect invites personal engagement; The Larger Story receives that recognition into the Christian story; Message Delivered expresses what has been discovered; Living the Message sends the reader back into life without closing the conversation. Each page has its own distinct responsibility; no page attempts another page's work.

**Implementation status.** Complete. Dragon is now editorially complete under the current Editorial Philosophy and Production Standard — all eleven pages finalized, approved, and committed. This is the first full commit cycle run under the new Section-First Revision Policy.

## 2026-07-07 — Companion Series Naming adopted; Dragon Companion Recovery begun; permanent Companion architecture discovered and approved

Susan issued a new series-wide publishing standard: every symbolic figure now consists of two companion publications, the **[Figure] Edition** (participant-facing) and the **[Figure] Companion** (support material that deepens understanding without duplicating the participant experience — "not another edition"). This replaces "Leader's Resource (Facilitator Guide)" as the series term. Governing sentence: "The [Figure] Edition is the encounter. The [Figure] Companion explains, supports, and facilitates the encounter without becoming the encounter itself."

Alongside the naming standard, Susan opened a Recovery Task for Dragon specifically: locate every facilitator, teaching, workshop, and companion document created during Dragon's development, with an explicit constraint — do not rewrite any content; recovery and organization only. This ran as a staged process, each stage requiring approval before the next: (1) a full inventory of candidate files; (2) Susan's own four-category revision (Primary Source Documents / Secondary Reference Documents / Existing Companion Drafts / Production and Verification Files), later extended to five categories with Edition Editorial History added as a consistency-check-only category; (3) structural (not content) recovery of all five Primary Source Documents — `Dragon_Author_Notes.txt`, `Dragon_Learning.docx`, `Dragon_Reflection.docx`, `Dragon_Facilitator_Notes.docx`, `Dragon_Workshop_Plan.docx` — read two or three at a time, never merged; (4) an editorial-function evaluation of each document (role, and whether it should remain independent or be incorporated elsewhere), with no content edited.

That evaluation surfaced a permanent architecture, confirmed and refined by Susan into four layers: **Foundation** (Author's Perspective — the author's original voice, preserved inside the Companion rather than externalized or expanded into a full chapter), **Interpretation** (Learning — the Companion's singular center of gravity, everything else radiates from it), **Engagement** (Reflection and Facilitator Notes, as two parallel, non-overlapping paths — individual and group — from the same Interpretation), and **Application** (Workshop Plan, placed as an appendix rather than a chapter, since "it isn't teaching — it is using the Companion"; future figures may add retreats, study groups, online courses, or sermons under this same layer). Susan named this the permanent architecture for every future Figure Companion, explicitly comparing it to how the Dragon Edition became the prototype for the Figure Edition series: "Today you completed the Edition methodology. And today you've almost completed the Companion methodology. Those are the two halves of the AwakenArts publishing system."

Two known open items were named but deliberately deferred, not resolved, per Susan's own instruction that historical recovery is not the same phase as editing: the Companion's existing "Word That Reconciles" material quotes Ephesians 2:14, 16, while the Edition's finished Larger Story settled on James 1:8; and the Companion's existing "Message Delivered" language ("fulfills his duty by bringing the message...") predates the Edition's approved "brings a message discovered through struggle." Both are flagged for a future Edition–Companion Conformance Review, not fixed now.

**Built:** `AwakenArts_Editorial_Philosophy.md` — "Two Audiences, Two Publications" renamed "Two Publications: Edition and Companion," rewritten to the new naming standard, with the governing sentence and a pointer to the new architecture section. `AwakenArts_Figure_Edition_Production_Standard.md` — Section 1 retitled "The Figure Edition and the Figure Companion" and updated to the new terminology; new Section 1a, "The Figure Companion — Internal Architecture (series standard)," records the four-layer model and its governing notes in full.

**Implementation status.** Naming standard and Companion architecture: adopted and recorded. Dragon Companion recovery: the five Primary Source Documents are structurally recovered and their editorial architecture is approved; no chapters, page order, or table of contents have been designed yet — Susan has explicitly held that for a later, separately-approved phase.

## 2026-07-07 — Dragon Companion Manuscript v1 constructed and presented for editorial review

Following the approved Companion architecture and a two-refinement Construction Map (Author's Perspective loosened from a fixed "1–2 subsections" estimate to an open curatorial call, decided during construction rather than pre-constrained; a new Construction Principle added — "preserve the strongest expression of an idea in one location... reduce duplication while preserving the author's original intent"), Susan gave the build instruction directly: "Begin building the Dragon Companion... Build the Companion as a coherent publication rather than as a collection of recovered documents."

**Built:** `Dragon_Companion_Manuscript_v1.docx` — five sections in the approved order: Author's Perspective, Learning, Reflection, Facilitator Notes, Workshop Plan (Application, placement undetermined). Editorial decisions made during construction, per the Construction Principle: Author's Perspective was curated to two subsections only (Origin, Central Meaning) from the full `Dragon_Author_Notes.txt`, omitting Key Themes, Biblical Associations, Rage in My Shadow, Symbolic Layers, What Should Be Avoided, Key Image Moments, The Hero and the Dragon, and Message Delivered — all of which are developed further, and more strongly, in Learning and Facilitator Notes. Learning, Reflection, and Facilitator Notes were reproduced in full, unedited. Workshop Plan's and Facilitator Notes' cross-references to each other as separate external files ("the Dragon Reflection document," "the Dragon Facilitator Notes," "the Dragon Learning document") were updated to internal references, since all five sections are now bound as one publication — a mechanical integration, not a content change.

Known Edition–Companion inconsistencies (Learning's Ephesians 2:14, 16 vs. the Edition's James 1:8; Learning's "fulfills his duty" vs. the Edition's "brings a message discovered through struggle") were deliberately left unresolved, per instruction, and are recorded in the manuscript's own closing Construction Note as reserved for the Edition–Companion Conformance Review.

**Implementation status.** Manuscript v1 complete and saved to `02_Dragon/Companion/`. This is a draft for editorial review — no production copies (formatted PDF, print files, contact sheets) have been made. Awaiting Susan's review before any further construction or production work.

## 2026-07-07 — Development Notes added to Dragon Companion; Author's Perspective scope and standing workflow recorded

Two refinements to the Companion, both recorded as permanent series standards, not Dragon-specific choices. First, Susan asked for a brief Development Notes section within (not alongside) every Figure Companion — selected authorial discoveries that changed how a figure was understood (early observations, symbolic discoveries, editorial turning points, theological insights, clarifying revisions, and where relevant, the emergence of the Companion methodology itself), written as reflections rather than editorial record, with no requirement to preserve every revision — "the outline governs the intent, not the quantity." Five notes were selected for Dragon: The Enemy That Wasn't There, Image Before Theory, Finding the Anchor Sentence, A Page About the Reader, and Not This or That, But And — Applied to the Book Itself. Placed after Workshop Plan and before the Construction Note, so the reflective material stays distinct from the purely editorial one.

Second, Susan narrowed and clarified Author's Perspective: one to three pages, not a memoir or production history, focused on the figure's unfolding recognition rather than the author's life. More significantly, she reframed how it should be built going forward — not a recovery project performed after a figure is finished, but a light ongoing habit during the actual creative conversation: when a statement surfaces naturally ("I kept drawing this enormous tail...") either party can simply flag "this belongs in Author's Perspective," and it's set aside as the figure develops. Dragon's version was necessarily assembled after the fact from an existing notes document, since that's what was available; future figures won't require that reconstruction.

**Built:** `Dragon_Companion_Manuscript_v1.docx` — Development Notes section added. `AwakenArts_Figure_Edition_Production_Standard.md`, Section 1a — new subsection "Author's Perspective — scope and standing workflow" recording both the size/focus constraint and the light-habit workflow.

**Implementation status.** Recorded as series standard. Manuscript v1 still awaiting Susan's editorial review; no production copies made.

## 2026-07-07 — Encounter Journal Conformance Review complete

Per Susan's directive, applying "the same editorial discipline used for the Dragon Edition" to `AwakenArts_Encounter_Journal.pdf": review first, revise only where necessary. Reviewed all 8 pages against Editorial Philosophy, Figure Edition Production Standard, Production Rules, the locked Recognition Model, the current Christian Foundation, and the Dragon methodology — cross-checking claims against the live `/encounters` pages and their source components rather than assuming the PDF still matches them.

Pages 1, 2, 3, and 8 confirmed in full conformance. Two findings on pages 4–7: (1) four of five Encounter pages place Scripture before the reader's own Recognition Model prompts, in tension with the "recognition precedes Scripture" principle Dragon's Larger Story work established — the Journal predates that discovery, so this is the standard maturing after the document was finished, not drift; (2) pages 5 and 6 render Scripture and an internal AwakenArts "Echo" quote identically, where the live site (`encounter.module.css`, `.scripture` vs `.echo`) deliberately renders Scripture brighter and more prominent. Both findings carry a smallest-possible-revision recommendation (reorder existing blocks; add a light typographic distinction) — no rewording, no expansion, no structural change beyond that.

**Built:** `AwakenArts_Encounter_Journal_Conformance_Review.md` (new). `AwakenArts_Documentation_Map.md` updated with the new document's entry, per Production Rule No. 3.

**Implementation status.** Review complete. No revisions have been made to the Journal itself — findings are presented for Susan's direction, per instruction that this phase was verification, not editing.

## 2026-07-07 — Encounter Journal revised and republished (Scripture/Echo distinction)

Per Susan's approval of the Conformance Review, implemented the two approved fixes only. **Scripture/Echo distinction (pages 5 and 6):** Scripture is now visually primary — navy ink (`#1C2B3A`) quote text, gold (`#8b6914`) reference line — and the AwakenArts Echo quote is now visually secondary — muted gray (`#8a8a8a`) quote text, muted gold-gray (`#ab9a68`) reference line — mirroring the brighter/dimmer relationship the live `/encounters/table` and `/encounters/word` pages already carry (`.scripture` vs `.echo` in `encounter.module.css`) but which the Journal had flattened. No wording changed on either page. **Closing page (page 8):** reviewed again; confirmed no update needed — "The AwakenArts Guide to Symbolic Facilitation" and "the AwakenArts Collection" both remain the current, correct product names per `AwakenArts_Product_Architecture.md`. Deliberately did not add a direct link to `/workshops` — that page is intentionally unlisted ("live but... reachable only by direct URL until Susan decides to publish it into navigation" per `AwakenArts_Site_Architecture.md`), and deep-linking it from a widely-distributed free PDF would be a bigger publication decision than this targeted revision authorized.

**Scripture sequencing was explicitly not touched**, per instruction — remains an open editorial question for a future series-wide decision, not applied here.

**Method:** rather than rebuilding the Journal from scratch (no source generation script exists in the repo), patched only the two affected pages surgically — white-out plus redrawn text at the same position or the old, undifferentiated Scripture/Echo blocks — and left pages 1–4, 7, and 8 byte-identical to the prior version. Verified visually (rendered every page) and via metadata/link-text extraction that all `awakenarts.com/...` links, the document title, and page count (8) are unchanged.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced with the revised version.

**Implementation status.** Complete. This revised Journal is now the current public edition of the free AwakenArts resource.

## 2026-07-08 — Encounters Revision: website pages and printable Journal rebuilt to a shared production template

Per Susan's "Encounters Revision — Final Implementation Brief," which superseded her own preceding draft directive on the same day and explicitly retired the three legacy planning files (`table-01-web-notes.txt`, `word-01-web-notes.txt`, `continue-01-notes.txt` — confirmed stale before this work began: they still referenced the "Scroll Cue" field removed site-wide 2026-06-30, and `continue-01-notes.txt` misattributed Psalm 119:105 to Continue when the live site and Journal both use Psalm 121:8 for Continue and 119:105 for The Word only, per Susan's own clarification in the brief). `public/images/encounters/mock-up.png` ("Thought Path #1 / The Invitation") is adopted as the printable Journal's production template; `journey-02-web.png` and `deep-02-web.png` are confirmed as the only two new hero images (Table, Word, Continue keep their existing `-01-web` images, per Susan's own note); `footer-01.png` is adopted as the shared "path forward" image for the bottom of every Journal Encounter page.

**Website — all five Encounter pages (`src/app/encounters/{journey,deep,table,word,continue}/page.tsx`).** Each hero now carries two opening statements (new `.lineSecond` style added to `encounter.module.css`, reusing the existing `--subtitle-size`/`--subtitle-line` tokens rather than forking a new one) in place of the former single line, and a single Christian companion per Susan's exact copy: Journey retains Hebrews 11:8; Deep's Scripture is replaced (Psalm 42:7 → Proverbs 20:5); Table's Scripture (Psalm 23:5) and the Angel Gardens echo are both removed, replaced by a single Swindoll quote given the primary (`.scripture`) treatment since it's now the page's only quote; Word retains Psalm 119:105 and drops the Swan Sings echo; Continue retains Psalm 121:8 as Scripture and replaces its former unattributed reflective line with an attributed C.S. Lewis quote in the secondary (`.echo`) slot. Journey and Deep's hero images updated to the `-02-web` files.

**Printable Journal (`AwakenArts_Encounter_Journal.pdf`).** Pages 3–7 (the five Encounters) fully rebuilt from scratch against the mock-up template — full-bleed hero band (scrim + cream/gold title treatment, matching the website hero's own visual language, since the source photos aren't uniformly pale like the mock-up's demo image), two opening statements, a "Journal Reflection" label (added to satisfy the brief's explicit content requirement, since the mock-up itself doesn't show one), two reflection questions each with three ruled writing lines, a closing invitation kept in the cream field rather than overlaid on the photo (an overlay placement was tried first and found illegible against several of the brighter source images — moved for legibility, not decoration), and the shared `footer-01.png` path image as a purely visual closer. Page 2 ("How to Use This Journal") was also rewritten — not requested explicitly, but required for consistency: its prior text described the four-movement Encounter/Recognition/Reflection/Integration model, which the rebuilt pages no longer show. New copy describes the actual two-question/one-invitation structure while preserving the page's original tone and its closing paragraph naming the five Encounters in order. Pages 1 and 8 are byte-identical to the prior version (copied through via `pypdf`, not regenerated). The functioning "Continue this encounter" link to each `/encounters/<slug>` page is preserved on every rebuilt page (`reportlab.Canvas.linkURL`, verified present and correct on all five pages after build).

**Image production.** Band composites for the PDF are saved as JPEG rather than PNG after an initial build came in at 38.5MB — JPEG at quality 88 brought the file to 3.2MB, checked against a rendered page to confirm no visible quality loss. Separately, per Susan's request for two media from one set of assets, CMYK 300dpi TIFF masters were generated for all five hero images plus `footer-01.png` (`journey-02-print-cmyk.tiff` etc., saved alongside each source file). **Flagged directly, not glossed over:** the source images are 1402–1536px wide; at true 300dpi that supports clean print reproduction only up to about 4.7–5.1 inches of width, not a full 8.5" letter bleed. The CMYK conversion is correct as far as color space goes, but if these images are ever sent to a commercial press at full page width, higher-resolution source photography would be needed first — noted here so it isn't discovered only at the print stage.

**Verification.** `tsc --noEmit` clean after the website page edits. All 8 Journal pages rendered to image and visually checked; all 5 continue-links extracted via `pypdf` and confirmed pointing to the correct `awakenarts.com/encounters/<slug>` URLs; metadata (title, author, subject) confirmed intact; both `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` replaced and confirmed byte-identical to each other. The live download link on `/encounters` (`pdfHref="/files/free/AwakenArts_Encounter_Journal.pdf"`) required no code change since the filename and path are unchanged.

**Implementation status.** Complete. This is the current public Encounters experience across both the website and the free Journal download.

## 2026-07-08 — Encounter Journal: final design refinements (numbering, bottom image, white space)

Per Susan's review of the rebuilt Journal ("The journal redesign is a significant improvement... A few final refinements will strengthen the printed journal even further"), five refinements applied to the five rebuilt Encounter pages (3–7):

1. **Numbered markers removed.** The "1./2./3." markers before the opening statements and each reflection question are gone; all body text now sits on one quiet left margin with no list treatment, so the page reads as invitation rather than assignment.
2. **Bottom landscape image removed.** The shared `footer-01.png` path band at the bottom of each page is retired. The hero image is now each page's only photograph.
3. **Hero image prominence preserved** — untouched (232pt full-bleed band, scrim, cream/gold title treatment).
4. **White space increased, not filled.** The space reclaimed by removing the bottom band was deliberately left as open cream field beneath the closing invitation — line spacing and inter-section gaps were loosened slightly, but no new content, rule, or ornament was added to occupy it. The closing invitation ("Are you ready to begin?" etc.) is now the last visual element on the page.
5. **"Journal Reflection" label softened.** Reduced from 8.5pt gold to 7.5pt light-gold (`--enc-gold-lt` equivalent), with wider letter-spacing and more room above and below it, so it now reads as a quiet transition rather than a section heading.

Image production (RGB web + CMYK 300dpi print, per Susan's point 6) was already completed in the prior entry for all five hero images; that work is unaffected by this pass. `footer-01-print-cmyk.tiff` remains on disk as an unused asset now that the bottom band is retired — left in place rather than deleted, in case it's wanted elsewhere.

**Verification.** All 8 pages re-rendered and visually checked; all 5 continue-links and metadata re-verified via `pypdf` after rebuild. File size dropped further (2.1MB, from 3.2MB) with one fewer embedded image per page.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced with the refined version; confirmed byte-identical to each other.

**Implementation status.** Complete. This refined Journal is now the current public edition.

## 2026-07-08 — Encounter Journal: "How to Use" page removed; continue-links removed; renumbered

Two further directives, same day. First: "Permanently remove the How to Use page — unnecessary." Second, sent while the first was in progress: "Remove gold text under Are you ready to begin (as it appears across all pages)."

**"How to Use This Journal" removed entirely.** The journal is now seven pages, not eight: cover, the five Encounters, closing — down from cover, How to Use, five Encounters, closing. The five Encounter pages are renumbered 2–6 (were 3–7).

**Closing page footer corrected.** The closing/colophon page is still carried over from the source PDF with its title, copy, and links-styled text untouched — but as the new last page it needed its footer to read "· 7," not "· 8." Rather than rebuild the page, only the footer band (rule, "AWAKENARTS," page number) was whited out and redrawn with the corrected number via a `merge_page` overlay, the same surgical technique used for the earlier Scripture/Echo patch. Everything above the footer on that page is pixel-identical to before. (Note for the record: the whiteout covers the old "· 8" visually but doesn't delete its underlying text object, so raw text-layer extraction — not normal viewing or printing — would see both numbers superimposed; this is the same known characteristic of the whiteout-patch method used earlier this session, not a new issue.)

**The small gold "Continue this encounter — awakenarts.com/encounters/[slug]" line beneath each closing invitation is removed from all five Encounter pages.** This was also the one working hyperlink on those pages (via `reportlab.Canvas.linkURL`); removing the line removes the link along with it, per Susan's instruction to remove the text "as it appears across all pages" — not replaced elsewhere. Each page's closing invitation (e.g., "Are you ready to begin?") is now the single, final visual element before the footer.

**Verification.** All 7 pages re-rendered and visually checked, including a close-up crop of the closing page's footer to confirm no visual ghosting from the whiteout. Metadata confirmed intact; page count confirmed at 7.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced; confirmed byte-identical to each other.

**Implementation status.** Complete. This seven-page Journal is now the current public edition.

## 2026-07-08 — Encounter Journal: renamed, closing page rebuilt

Two further directives, same day. First: "Change name of document to A Journal Companion to the Five Encounters." Second: "Revise the last page," with new copy and layout supplied directly.

**Renamed.** The cover page's subtitle beneath "The Encounter Journal" changes from "A Self-Guided Companion to the Five Encounters" to "A Journal Companion to the Five Encounters." Patched via the whiteout+redraw technique (text band located by pixel-scanning a 200dpi render: centered, x 161–449pt, y 527–539pt, muted warm gray, Times-Italic ~14pt) rather than rebuilding the cover — everything else on that page (title, author line, epigraph) is untouched. The PDF's `/Subject` metadata field, which already mirrored this subtitle text, was updated to match.

**Closing page rebuilt in full,** from Susan's own drafted copy and layout (a centered `<div align="center">` composition): title "Continue," "Thank you for taking this journey," a short paragraph on the Collection, an invitation to continue at awakenarts.com (linked, gold), the real AwakenArts brand mark, a second standalone awakenarts.com link, and the copyright line — replacing the prior closing page's two-link "Guide to Symbolic Facilitation" copy entirely. The brand mark is the actual logo asset (`public/images/brand/logo-navy.svg`, the navy double-arc + wordmark + tagline variant), rasterized via `cairosvg` (newly installed) rather than a text placeholder or a hand-redrawn approximation. Both awakenarts.com mentions carry real `linkURL` annotations.

**Verification.** Both patched/rebuilt pages rendered and visually checked; metadata confirmed (`/Subject` updated); both link annotations on the closing page confirmed pointing to `https://awakenarts.com`. Page count remains 7.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced; confirmed byte-identical to each other.

**Implementation status.** Complete. This is the current public edition.

## 2026-07-08 — Encounter Journal: closing page, final pass

Susan reviewed the rebuilt closing page ("substantial improvement... a graceful farewell") and asked for five refinements, four of them affirming what to keep:

1. **"Continue" heading removed.** "Thank you for taking this journey" is now the page's opening line, given more top white space and more weight (19pt italic, up from 13pt as a subordinate subtitle) since it now carries the page on its own.
2. **Middle paragraph strengthened.** "The five Encounters are only the beginning. The journey continues throughout the AwakenArts Collection..." — "the same themes continue" became "the journey continues," echoing the journal's own title back at its close.
3. **Invitation sentence kept verbatim**, per Susan ("It doesn't feel promotional. It feels hospitable.").
4. **Logo kept as built**, per Susan ("Perfect. Exactly where it belongs.").
5. **Repeated "awakenarts.com" beneath the logo removed** — the link already lives naturally in the invitation paragraph; the logo now sits alone above the copyright line.

**Verification.** Rendered and visually checked; confirmed exactly one link annotation remains on the page (`https://awakenarts.com`, in the invitation paragraph), down from two.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced; confirmed byte-identical to each other.

**Implementation status.** Complete. This is the current public edition.

## 2026-07-08 — Encounter Journal: closing page, one-word-level wording pass

Susan revised the closing page's middle paragraph once more: "invite deeper reflection and conversation" → "invite further reflection and discovery." Applied as a direct text swap, no layout change. Rendered and confirmed; both live copies (`AwakenArts_Encounter_Journal.pdf`, `public/files/free/AwakenArts_Encounter_Journal.pdf`) replaced and byte-identical to each other.

**Implementation status.** Complete. This is the current public edition.

## 2026-07-08 — Encounter Journal: cover page rebuilt, brand-forward

Susan shared a sketch of a new front-page structure: logo mark, AWAKENARTS wordmark, title, "When Language Shapes a Path" tagline, author. Asked whether this replaced the current subtitle ("A Journal Companion to the Five Encounters," renamed earlier today) and the epigraph ("Symbols do not explain. They reveal."), or added to them — Susan chose to replace both.

**Cover rebuilt in full** (previously only ever patched): the real AwakenArts arc mark (cropped from `public/images/brand/logo-navy.svg`, rasterized via `cairosvg`, wordmark/rule/tagline cropped out since the cover sets those as its own live text), "AWAKENARTS" wordmark, "The Encounter Journal" title (unchanged), "When Language Shapes a Path" tagline, "Susan Ann Shepler." The subtitle and epigraph are both retired. Since every page is now generated fresh, this build no longer reads anything from the original source PDF at all — the last remaining carried-over content (the cover) has been fully superseded by original construction.

**Verification.** Rendered and visually checked; page count (7), metadata, and the closing page's link annotation all reconfirmed unchanged.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced; confirmed byte-identical to each other.

**Implementation status.** Complete. This is the current public edition — cover through closing, every page now built directly from source assets and approved copy rather than inherited from the pre-redesign file.

## 2026-07-08 — Encounter Journal: cover uses the complete logo lockup

Susan's refinement: "Use the complete AwakenArts logo exactly as it exists... No separate 'AWAKENARTS' text." The cover now uses the full logo image (`logo-navy.svg` rasterized whole — arc mark, AWAKENARTS wordmark, rule, and tagline together, the same asset already used on the closing page) rather than a cropped arc-only mark paired with hand-set wordmark text. Below the logo: title, tagline, author, unchanged from the prior pass.

**Noted for the record, not corrected without asking:** because the tagline "When Language Shapes a Path" is baked into the logo asset itself, it now appears twice on the cover — once small beneath the wordmark inside the logo, once larger in italic beneath the title. This is a direct, faithful consequence of using the logo "exactly as it exists" combined with keeping the separately-specified tagline line; flagging it in case the repetition isn't wanted on a second look, rather than silently choosing to drop one instance.

**Verification.** Rendered and visually checked; page count (7), metadata, and the closing page's link annotation reconfirmed unchanged.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced; confirmed byte-identical to each other.

**Implementation status.** Complete. This is the current public edition.

## 2026-07-08 — Encounter Journal: cover, duplicate tagline resolved

Following the flag raised in the prior entry, Susan confirmed: remove the tagline beneath "The Encounter Journal." The cover now carries "When Language Shapes a Path" exactly once — inside the logo lockup — followed directly by the title and "Susan Ann Shepler," no second tagline line.

**Verification.** Rendered and visually checked; page count (7), and the closing page's link annotation reconfirmed unchanged.

**Built:** `AwakenArts_Encounter_Journal.pdf` (repo root) and `public/files/free/AwakenArts_Encounter_Journal.pdf` both replaced; confirmed byte-identical to each other.

**Implementation status.** Complete. This is the current public edition.

## 2026-07-08 — Encounter Journal: cover, author line tightened

Susan: move "Susan Ann Shepler" up a quarter to half inch. Gap between the title and the author line reduced from 50pt to 22pt (~0.39in), within the requested range. Rendered and confirmed; both live copies replaced and byte-identical to each other.

**Implementation status.** Complete. This is the current public edition.

## 2026-07-08 — Encounters index: card thumbnails synced to the revised image set

Susan flagged that the individual Encounter hero pages were updated correctly, but `/encounters`'s own card grid (`src/app/encounters/page.tsx`) was still pulling the old images — the two are separate hardcoded `ENCOUNTERS` arrays (`encounters/page.tsx` for the index, and each `encounters/<slug>/page.tsx` for its own hero), so the earlier hero-image swap never touched the index.

**Journey and Deep cards** now use `journey-02-web.png` / `deep-02-web.png` (open golden path / warm coastal path), matching their individual pages, with the same `center 55%` crop position tuned for those photos — the old `-01` images (enclosed forest path; darker shoreline figure) are no longer referenced anywhere in the redesigned Encounters. **Table, Word, and Continue cards** were already on their correct, current `-01-web` images (confirmed against Susan's descriptions: warm table/chairs; Bible/table/window light; crossroads signpost) — no change needed there. Card titles and mantras (I begin. / I encounter. / I receive. / I listen. / I walk on.) are untouched.

**Verification.** `tsc --noEmit` clean.

**Implementation status.** Complete. The Encounters index and the individual Encounter pages now draw from the same image set.

## 2026-07-08 — The Table: orphan word fixed

Susan flagged an orphaned "us" on The Table's second opening statement. "What we need most is often already waiting for us." → "What we need most is often waiting for us." (dropped "already"). Applied to both `src/app/encounters/table/page.tsx` and the Journal build script, so the website page and the Journal's Table page stay in sync.

**Verification.** `tsc --noEmit` clean; Journal rebuilt and rendered, confirmed the line now wraps without an orphan; both live Journal copies replaced and byte-identical.

**Implementation status.** Complete.

## 2026-07-08 — Continue: pared to one quote

Susan: "Paring down to one quote per encounter page — remove the C.S. Lewis quote from continue page." Removed the Lewis `.echo` block from `src/app/encounters/continue/page.tsx`; Psalm 121:8 now stands alone as Continue's single companion, matching the one-quote pattern already in place on Journey, Deep, Table, and Word. The Journal PDF was unaffected — it never displayed companion quotes.

**Verification.** `tsc --noEmit` clean.

**Implementation status.** Complete. Every Encounter page now carries exactly one Christian companion quote.

## 2026-07-08 — The Word: Scripture line shortened to fit

Susan asked to shorten Psalm 119:105 to fit the line: "Your word is a lamp to my feet…" (ellipsis), dropping "and a light to my path." Confirmed this is standard, acceptable practice for a truncated quotation — the core sense (God's word as guidance) holds even though the verse's parallelism is cut short. Applied to `src/app/encounters/word/page.tsx`. The Journal PDF never displayed this quote, so no corresponding change was needed there.

**Verification.** `tsc --noEmit` clean.

**Implementation status.** Complete.

## 2026-07-10 — Sketchbook Collection: production standard established (Collection Sheet)

Susan issued the "Claude Directive — Refine the Sketchbook Collection Page," moving `/sketchbook` from a framework-only placeholder (3-column grid of empty gray tiles, `PIECES` array with no images — see `src/app/sketchbook/page.tsx`, built 2026-06-30) toward a curated, purchase-ready painting collection. Initial research phase vetted every candidate image in `public/images/gallery/paintings-susan/` against her Collection Standard (painterly head-and-shoulders feminine portraits, white/quiet-neutral backgrounds; excluding landscapes, Figure Edition assets, flowers, angels, full-figure compositions) — findings: 2 clean matches (`dark-girl-painting.jpg`, `hawaiian-girl-painting.jpg`), several clear excludes (angels, mermaids, flower-subject paintings, patterned backgrounds), and 4 borderline pieces with the right subject/crop but colored or dark backgrounds.

That curation question is superseded, not answered, by what Susan specified next: each piece admitted to the collection will get its own **Collection Sheet** — a fixed-layout production/presentation asset, not a plain thumbnail — built one at a time as paintings are finished. Susan: "This is now the presentation standard for the Sketchbook Collection... Treat it as the first production asset for the collection... Maintain consistency while allowing only the following elements to change: Painting, Title, Optional subtitle, Detail enlargements, Color palette, Brief descriptive text. Typography, spacing, proportions, and overall presentation should remain consistent... The Sketchbook page should be designed to showcase these Collection Sheets as the primary visual assets rather than functioning as a simple image gallery. This page is becoming a curated collection rather than a portfolio."

**The first Collection Sheet, "Julie — A Portrait of Grace,"** was supplied as a finished 1122×1402px PNG (`public/images/sketchbook/collection-sheets/julie-collection-sheet.png`), establishing the locked layout precisely: large portrait painting occupying roughly two-thirds of the sheet on the left, full height; a right-hand column containing (top to bottom) a bordered title block (script title, small-caps subtitle, "Original artwork by Susan Ann Shepler" / "AwakenArts Collection" credit line), three stacked bordered detail-enlargement crops, a row of palette swatches pulled from the painting, and an "About This Piece" block (script heading, rule, four short centered descriptive lines, small flourish) closing with a centered "AWAKENARTS COLLECTION" wordmark line. A second piece is in production; Susan's own framing: "the work becomes repeating the system — creating one Collection Sheet after another until the Sketchbook Collection is established."

**Implementation status.** Standard recorded. One real Collection Sheet asset (Julie) exists in the repo; page rebuild to showcase it is in progress (see next entry).

## 2026-07-10 — Sketchbook page rebuilt around the sheet asset; format refined mid-build to the landscape Contact Sheet

`src/app/sketchbook/page.tsx` and `page.module.css` rebuilt the same day: the 3-column placeholder grid (`.grid`/`.tile`/`.thumb`/`.tileTitle`, empty gray boxes) is retired in favor of a single-column showcase (`.collection`/`.sheet`/`.sheetImg`) that renders each finished sheet full-size, via `ProtectedImage` (the existing right-click/drag-protection component already used for Edition artwork), with no added caption or card chrome — the sheet already carries its own title, credit, and description. `PIECES` (id + optional title, no image field) replaced with `COLLECTION` (id + image src/alt); intro copy above the showcase left untouched.

**Mid-build, Susan refined the format itself and supplied a second finished piece.** The sheet evolved from the portrait "Collection Sheet" (1122×1402px, described in the entry above) to a landscape **Contact Sheet** — same governing elements (painting, title, subtitle, detail enlargements, palette, description) reflowed wider, plus one new locked element common to every sheet going forward: a closing footer band (credit line, AwakenArts monogram, and a shared collection tagline/CTA — "Each portrait speaks. Each soul recognizes." / "Collect the images that speak to your soul." / AwakenArts.com) — identical across both supplied sheets, confirming it's part of the fixed template, not per-piece content. Two finished Contact Sheets were supplied: `Julie-contact-sheet.png` (1402×1122px) and `May-contact-sheet.png` (1536×1024px), both in `public/images/sketchbook/collection-sheets/` (Susan's own folder placement — the directory name wasn't changed to match the new "Contact Sheet" term, since renaming/deleting files already written to the connected project folder requires separate authorization, and doing so wasn't necessary for the page to function). `COLLECTION` updated to both pieces at their real filenames; `.sheet`'s max-width widened 900px → 1100px to suit the wider landscape proportions.

**Verification.** `tsc --noEmit` clean; brace/paren balance check on both files returned 0; confirmed both image files exist on disk at the referenced paths.

**Implementation status.** Complete. `/sketchbook` now shows two live Contact Sheets (Julie, May); adding the next finished piece is a one-line addition to `COLLECTION`.

## 2026-07-12 — AwakenArts Publisher Identity: brand system replaced, traced from the approved master

The double-arc logo (five-variant SVG system built around two concentric arcs + "AWAKENARTS" wordmark) is retired. Three prior attempts to build its replacement were hand-coded approximations — font glyphs standing in for the flourish, hand-drawn bezier leaves — built from looking at a reference image rather than from real artwork, which is why each one kept reading as a reinterpretation rather than the approved design. Susan: "You have used your own image logo -- not the one that we created."

She then supplied the actual master: `public/images/library/NEW-LOGO.png`. Adobe's vectorizer was unreachable from this environment (network egress and the file-picker flow both failed), so the file was traced locally with `vtracer` instead — a direct vector trace of the real artwork's curves, not a rebuild. The trace's decomposed path groups (monogram / wordmark / tagline, split by their translate-Y clusters) became the basis for the full production family named in the "AwakenArts Logo Production Assets" work order: `AwakenArts-Logo-Primary.svg` (stacked), `AwakenArts-Logo-Horizontal.svg`, `AwakenArts-Monogram.svg`, single-color Navy/Gold/White/Black versions, the favicon family (svg + 9 PNG sizes + ico), and `og-logo.png`.

**Per the "AwakenArts Publisher Identity" work order,** placements were assigned: Stacked mark → colophon pages, About, Foundation, print materials, title pages (no live colophon page exists in the site yet, so nothing to wire there today); Horizontal mark → website header (hero) and footer; Monogram → favicon, app icon, social profile, watermark. Implemented: `page.tsx` hero now loads `AwakenArts-Logo-Horizontal.svg` (`.hero-logo` switched from fixed-height to width-based sizing — the horizontal lockup is ~5:1, the opposite proportion of the stacked mark the old rule was tuned for). `Footer.tsx`, `studio/page.tsx`, `studio/silhouettes/page.tsx`, and `quotes/page.tsx` all sit on the navy `.site-footer` field, where the Horizontal mark's navy wordmark is invisible — added `AwakenArts-Logo-Horizontal-OnNavy.svg` (same geometry and gold monogram, cream wordmark/tagline/rule) as the practical fix, not a new creative variant, and wired all four footer instances to it. `favicon.ico` / `apple-touch-icon.png` were already Monogram-derived from the prior round, confirmed still correct.

**Cleanup.** `public/images/brand/old-logo/` (the retired double-arc originals and both interim hand-built rounds), the unreferenced `aalogo-final.svg`, and `AwakenArts_Logo_Master.af` (the old double-arc's source file) were all deleted from the project — the new system is confirmed, and all of it remains recoverable from git history (`76dc129`, `8f26ed4`, `001138a`, `49cf83a`) if ever needed.

**Verification.** `tsc --noEmit` clean; every SVG rendered and visually checked at its actual target size (hero width, footer height, favicon 16/32/48px) before wiring; grep confirmed zero remaining references to any retired filename anywhere in `src/`.

**Implementation status.** Complete. With this update, the AwakenArts visual identity is considered established. Future work should focus on developing the Editions and the publishing system rather than continuing to redesign the brand.

## 2026-07-12 — Header/footer navy treatment: cream panel replaces white wordmark

Susan flagged that `AwakenArts-Logo-Horizontal-OnNavy.svg`'s white wordmark didn't integrate with the gold monogram, and set a permanent standard: "The navy type is part of the identity. If a dark header requires a white logo, I would rather change the header treatment than change the publisher's mark." Rebuilt the file rather than recolor around it — the gold monogram now sits directly on the navy field (gold already reads on navy, no panel needed there), and the official navy wordmark/tagline sit on a subtle rounded cream panel instead of being recolored. Gold tagline rules unchanged. Same filename, same four call sites (Footer.tsx, studio/page.tsx, studio/silhouettes/page.tsx, quotes/page.tsx) — only Footer.tsx's explicit width/height attributes needed updating, to the panel version's slightly taller viewBox (1263×268 vs. 1237×244).

Per Susan's stated preference to never use a white wordmark anywhere, `AwakenArts-Logo-White.svg` (part of the original approved asset list) is retired — it was never wired into any page, so no code changes needed beyond deleting the file. Recoverable from git history at `49cf83a` if a genuine need for a white-ink version arises later.

**Verification.** `tsc --noEmit` clean; rendered against a navy composite at both header scale and footer scale (48px-equivalent) to confirm the wordmark stays sharp and legible at both sizes.

**Implementation status.** Complete.

## 2026-07-12 — Wordmark rendering defect: root cause and fix

Susan reported the navy-on-cream wordmark still didn't work — "it looks like a bad inking job the way the workmark is bleeding on itself with the empty spaces filled in." Investigated rather than re-guessed at another cosmetic pass.

**Root cause.** "AWAKENARTS" and the tagline were never hand-drawn — they're ordinary typeset text in the master artwork, which the raster trace (vtracer) captured as roughly 230 small overlapping shapes representing anti-alias color bands from the source PNG. On the full-color lockups (Primary, Horizontal) those bands blend smoothly and the eye reads clean letterforms. On every single-color lockup — the four files where the word and tagline get flattened to one flat ink color for a solid navy/gold/black mark — that blending disappears, and the trace's small geometric imprecision at sharp serif vertices and stroke joins (an inherent limit of tracing small raster text, not a redesign and not a file-minification artifact) becomes a visible gap or blob. Confirmed by isolating and re-rendering the raw untraced path data straight from the master trace: the defect was present in the geometry itself, before any merging or minification touched it.

**Fix.** Text is not artwork, so it doesn't need to be traced — it needs to be set. Rebuilt the four single-color files (`AwakenArts-Logo-Horizontal-OnNavy.svg`, `AwakenArts-Logo-Navy.svg`, `AwakenArts-Logo-Gold.svg`, `AwakenArts-Logo-Black.svg`) with the wordmark and tagline as live SVG `<text>`, set in the site's own standing typeface (Cormorant Garamond, already loaded site-wide via `globals.css`) — sized and positioned with `textLength` to occupy the exact footprint the traced version held, so proportions and spacing are unchanged. The gold monogram is untouched in every file: it is genuine hand-illustrated artwork (the botanical "A"), traces cleanly, and was never part of the complaint. The gold tagline rule lines are unchanged. `AwakenArts-Logo-Primary.svg` and `AwakenArts-Logo-Horizontal.svg` (the two full-color lockups) don't exhibit the defect and were left alone.

**Verification.** Rendered all four rebuilt files with `resvg` — a spec-accurate SVG engine with full `textLength` support, a more reliable check than the coarser previewer used earlier in this project — at both full size and footer scale; no gaps, no blobs, rule lines sit cleanly outside the tagline with no overlap. `tsc --noEmit` clean. Re-minified with `svgo` and confirmed the minified output renders identically to the pre-minified version.

**Implementation status.** Complete.

## How this Log is maintained

Each phase, once actually built and verified (`tsc` clean, visual check, committed), gets its row in the table above updated from "Not started" to "Built — `<commit hash>`," with a short note on what was verified. Entries are never deleted or rewritten to look like they happened differently than they did — if a phase is revised mid-build, that's a new dated note under it, not an edit to the original.

## 2026-07-12 — Dragon Edition: production revision pass (DRAGON-PRODUCTION.docx)

Susan supplied `DRAGON-PRODUCTION.docx`, a page-by-page review of the Dragon Figure Edition (created/modified same day — the newest of several Dragon production documents in the project, layered on top of, not replacing, the prior "Good Copy" master's approved 11-page structure). Implemented against the live `/editions/dragon/read` Reader, which until now only reflected an older 8-section transcription of the Edition.

**Content.** `src/data/editions.ts`'s Dragon `sections` array is rewritten: Recognition and Reflection get the revised wording from the production doc; two pages entirely absent from the site are added — The Larger Story (text: the Good Copy master's own final, sixteen-times-revised copy, APPROVED 2026-07-07 — kept rather than cut, since the production doc's silence on this page reflects it not being part of this review round, not its removal) and Journal (new); Message Delivered is split out of the old combined `colophon` section into its own page with revised body copy and the navy-field/gold-ampersand treatment the Production Standard calls for; Living the Message is added using Susan's own text, confirmed 2026-07-12, which supersedes the Good Copy master's earlier version of that page per her explicit instruction; Colophon is retitled in spirit (About This Edition content) and now leads with the actual AwakenArts wordmark image rather than describing it in prose.

**Art.** The production doc's reference images matched, exactly, production-ready assets already sitting unused in `AwakenArts_Workbook/02_Dragon/Images/04_Atmosphere/` — this was a wiring job, not a new compositing job. Copied and web-optimized into `public/images/editions/dragon/read/`: `word-bg.jpg` (from `dragon-background.png` — atmospheric field with "The Dragon Fight" title and a reduced, symbolic-accent dragon motif already baked into the art, replacing the old full-dominance illustration), `recognition-bg.jpg` (`dragon-header-1.png`), `journal-bg.jpg` (`journal-bkg.png`), `living-message-bg.jpg` (`living-message.png`), `colophon-bg.jpg` (`colophon-bkg.png`).

**Reader.** `EditionSection` gains a `background?: string` field (a single decorative image behind a text section, distinct from the existing `image` field's full-bleed responsive triple) and four new section ids (`larger-story`, `journal`, `message-delivered`, `living-message`). `EditionReaderSection.tsx`: background art renders as a CSS cover-background behind short-text sections (Word, Journal, Living the Message, Colophon), or as a real `<img>` banner above the text for Recognition specifically — its art is landscape and its text is long/internally-scrolling, so a stretched cover background would crop it badly. Message Delivered gets no background image at all, per the doc's explicit "do not add imagery" instruction — it's a pure navy-field (`#0F2340`) / gold-ampersand (`#C8A24A`) CSS treatment, with a large `&` rendered as its own element above the text. Colophon gets the `AwakenArts-Logo-Primary.svg` wordmark rendered above its text. All of this is written generically by section id, not Dragon-specific, so any future Edition's `sections` can reuse the same `background` field and get the same treatment.

**Verification.** `tsc --noEmit` clean. `next build` could not be run in this environment (missing native SWC binary for linux/arm64 — a pre-existing sandbox limitation, not related to this change); relied on `tsc` plus direct inspection of every new asset and CSS rule against the production doc's reference images. Grepped for the retired "Where It Meets You" / "fulfills his duty" copy — no remaining references outside a code comment noting the change.

**Implementation status.** Complete.
