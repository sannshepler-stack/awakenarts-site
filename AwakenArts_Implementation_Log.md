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

## How this Log is maintained

Each phase, once actually built and verified (`tsc` clean, visual check, committed), gets its row in the table above updated from "Not started" to "Built — `<commit hash>`," with a short note on what was verified. Entries are never deleted or rewritten to look like they happened differently than they did — if a phase is revised mid-build, that's a new dated note under it, not an edit to the original.
