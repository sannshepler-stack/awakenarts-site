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
