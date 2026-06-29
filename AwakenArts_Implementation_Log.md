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
| 1 | Extend `Edition`/`EditionSection` types; hand-build `sections` for one pilot Edition (Dragon) | **Not started** | |
| 2 | Build `EditionReader`, `EditionReaderSection`, `ProgressMarker`; wire `/editions/dragon/read` | **Not started** | Blocked by Phase 1 |
| 3 | Point landing-page CTA to `/read`; demote raw PDF link | **Not started** | Blocked by Phase 2 |
| 4 | Build `extract_reader_assets.py` / `generate_responsive_set.py` against Dragon's PDF | **Not started** | Can run in parallel with Phase 1–3 once Phase 1's hand-built assets exist as a known-good comparison |
| 5 | Roll pipeline out to Bowls, Ballerina, Grismere, Poppy, Queen Ann | **Not started** | Blocked by Phase 4 |
| 6 | Wire Acquire/email-gate per Edition (`EmailGateDownload` + `/api/subscribe`, tagged per slug) | **Not started** | Blocked by Phase 5; reuses live infrastructure, no new backend work |
| 7 | Add commerce hook stub (`Edition.access`, `hasAccess()`) | **Not started** | Deliberately last; inert by design |

**Overall: 0 of 7 phases started.** The Spec is approved-for-review, not approved-for-build — no phase begins until Susan signs off on the document itself.

## Open decisions blocking further progress

Carried from the Publishing Platform Architecture doc, current status:

1. **Purchasing** — still open. Blocks Phase 7's `hasAccess()` from ever becoming real (it stays a permanent stub otherwise).
2. **Reader as a separate route** — resolved by the Implementation Specification: `/editions/[slug]/read`, distinct from the landing page. No longer open.
3. **The Dragon naming collision** (`/encounters/dragon` vs. the Dragon Figure Edition) — still open, and unrelated to this Spec's scope.

## How this Log is maintained

Each phase, once actually built and verified (`tsc` clean, visual check, committed), gets its row in the table above updated from "Not started" to "Built — `<commit hash>`," with a short note on what was verified. Entries are never deleted or rewritten to look like they happened differently than they did — if a phase is revised mid-build, that's a new dated note under it, not an edit to the original.
