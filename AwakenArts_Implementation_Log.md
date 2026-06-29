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
| 2 | Build `EditionReader`, `EditionReaderSection`, `ProgressMarker`; wire `/editions/dragon/read` | **Not started** | Blocked by Phase 1 |
| 3 | Point landing-page CTA to `/read`; demote raw PDF link | **Not started** | Blocked by Phase 2 |
| 4 | Build `extract_reader_assets.py` / `generate_responsive_set.py` against Dragon's PDF | **Not started** | Can run in parallel with Phase 1–3 once Phase 1's hand-built assets exist as a known-good comparison |
| 5 | Roll pipeline out to Bowls, Ballerina, Grismere, Poppy, Queen Ann | **Not started** | Blocked by Phase 4 |
| 6 | Wire Acquire/email-gate per Edition (`EmailGateDownload` + `/api/subscribe`, tagged per slug) | **Not started** | Blocked by Phase 5; reuses live infrastructure, no new backend work |
| 7 | Add commerce hook stub (`Edition.access`, `hasAccess()`) | **Not started** | Deliberately last; inert by design |

**Overall: 1 of 7 phases built.** Susan signed off on the document itself, twice — see the 2026-06-29 note under "Workstream structure" below for the record of that approval and what it changed.

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

## Open decisions blocking further progress

Carried from the Publishing Platform Architecture doc, current status:

1. **Purchasing** — still open. Blocks Phase 7's `hasAccess()` from ever becoming real (it stays a permanent stub otherwise).
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
