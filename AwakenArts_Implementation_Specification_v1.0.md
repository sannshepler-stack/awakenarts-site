# AwakenArts Implementation Specification v1.0

**Status: v1.0 — complete, pending Susan's approval.** This is not an architecture document. The Site Architecture doc, the Editorial Typography Standard, and the Publishing Platform Architecture doc have already settled *what* AwakenArts is and *why* each surface exists; this document settles *how* one specific capability — turning an approved Figure Edition into a deployed, web-native reading experience — gets built. Nothing here has been implemented yet. Two of the three open questions from the Publishing Platform Architecture doc (Purchasing, the reader-as-separate-route) are addressed directly below; the Dragon naming collision is out of scope for this spec. Section 11 was added per Susan's review feedback (2026-06-29) — with it, this is the version she reviews for approval.

**Preservation.** Once approved, this document is treated like the Architecture doc it descends from: preserved, not silently rewritten. Any future revision is issued as v1.1, v2.0, etc., appended below this baseline rather than overwriting it. What has actually been built against this v1.0 blueprint — and what still remains — is tracked separately in the **AwakenArts Implementation Log**, so this document stays the stable plan and the Log stays the changing record of progress against it.

Every fact below was checked against the live codebase, not assumed: `src/data/editions.ts`, `src/app/editions/[slug]/page.tsx`, `src/components/ProtectedImage.tsx`, `src/components/EmailGateDownload.tsx`, `src/app/api/subscribe/route.ts`, `next.config.js`, and `.gitignore`.

---

## Publication Production Pipeline — the lifecycle this spec implements

1. **Approved publication.** Unchanged from today's process: Susan reviews and signs off on the assembled PDF in `public/files/editions/`. That approved PDF remains the single source of truth — nothing downstream is drafted independently of it.
2. **Reader asset generation.** A script reads the PDF's known section template (the consistent ~11-page structure already established across Dragon, Bowls, Ballerina, Grismere, Poppy, and Queen Ann) and extracts/crops each of the 8 template sections into its own master image — replacing today's one-off, per-Edition Python crop scripts with one repeatable step.
3. **Responsive image generation.** From each section's master crop, a second script emits the three widths the Reader needs (desktop/tablet/mobile), the same breakpoint logic `AtmosphericHeader` already uses, but as real distinct files rather than one image cropped by CSS.
4. **Metadata creation.** Title, kicker, alt text, and per-section copy are written once, alongside asset generation, directly into the Edition's entry — not hand-typed into `editions.ts` as a disconnected afterward step.
5. **Website deployment.** Unchanged: commit, Susan runs `git push origin main`, Vercel's existing git integration builds and deploys. No new deploy infrastructure.
6. **Product registration.** Adding the Edition's entry to `editions.ts` is what makes it live — it's what `generateStaticParams` reads to produce the `/editions/[slug]` and `/editions/[slug]/read` routes, and what the Collection grid and Poems gallery read from.
7. **Marketing asset creation.** Once registered, an Edition becomes eligible for the same email-capture pattern already proven on `/encounters` — `EmailGateDownload` calling `/api/subscribe`, tagged with that Edition's slug as the `source` field the route already accepts.
8. **Future commerce integration.** Reserved, not built. A single inert hook (Section 8 below) gives the eventual Purchasing decision one place to attach to, rather than requiring every prior stage to be revisited.

---

## 1. Repository changes

- **New script directory:** `scripts/editions/` — holds the two asset-pipeline scripts (Python, using the same PIL/img2pdf stack already used ad hoc elsewhere in the repo). No new `package.json` dependencies; these scripts run offline, not as part of `next build`.
  - `scripts/editions/extract_reader_assets.py`
  - `scripts/editions/generate_responsive_set.py`
- **New asset directory per Edition:** `public/images/editions/{slug}/read/{section}-{breakpoint}.jpg` — additive. Existing flat files in `public/images/editions/` (contact sheets, figure crops already used by Collection/Poems) are untouched.
- **No change to `public/files/editions/`** in v1.0 — the PDFs stay exactly where they are, fully public, exactly as today. (Note for whenever Purchasing ships: that directory is inside `/public`, which Next.js serves unauthenticated; gating the PDF later will require moving it behind an API route or signed URL — flagged here, not solved here.)
- **New component directory:** `src/components/EditionReader/` (Section 5).
- **New library file:** `src/lib/entitlement.ts` (Section 8).
- **`src/data/editions.ts`:** extended, not replaced (Section 3).

## 2. Route changes

- **New route:** `src/app/editions/[slug]/read/page.tsx`, sharing `generateStaticParams` with the existing landing page (same six slugs: dragon, bowls, ballerina, grismere, poppy, queen-ann).
- **Existing route, modified:** `src/app/editions/[slug]/page.tsx` — the current primary CTA, `<a href={edition.pdf} target="_blank">View the Figure Edition (PDF)</a>`, becomes `<Link href={`/editions/${slug}/read`}>Read the Figure Edition →</Link>`. The raw PDF link is not removed — it's demoted to a secondary "Download the PDF" line beneath it, matching Task 3's "download belongs at the close, not the front door" placement, just relocated to the Reader's own Colophon/Acquire step instead (see Section 5).
- **No changes to `next.config.js` redirects.**
- **No new dynamic segments** beyond `/read` — there is no separate `/acquire` or `/purchase` route; that lives inside the Reader as its final section.

## 3. Data model changes

`src/data/editions.ts` — `Edition` interface extended additively. Every existing consumer (`/collection`, `/poems`, the landing page) keeps reading the same top-level fields untouched:

```ts
export interface Edition {
  slug: string
  title: string
  kicker: string
  contactSheet: string
  contactSheetAlt: string
  pdf: string
  sections: EditionSection[]   // NEW — drives the Reader
  access?: 'free' | 'gated'    // NEW — commerce hook, defaults to 'free', read by nothing in v1.0
}

export interface EditionSection {
  id: 'frontispiece' | 'image' | 'encounter' | 'word' | 'recognition' | 'reflection' | 'colophon' | 'acquire'
  image?: {
    desktop: string
    tablet: string
    mobile: string
    alt: string
  }
  text?: string   // for Encounter / Word / Recognition / Reflection
}
```

`sections` is populated per Edition as part of the Publication Workflow (Section 7) — written by hand alongside the generated asset paths, the same way Edition copy has always been drafted, not auto-generated from the PDF's raw text.

## 4. Asset pipeline

- **Input:** one approved PDF per Edition, already in `public/files/editions/`.
- **Step A — `extract_reader_assets.py {slug}`:** renders each of the 8 template-section pages at high DPI and crops to the section's artwork, generalizing the crop logic already proven on the Poems page figure images (mat box at `x:1254–4058, y:900–4465` on a 200dpi/5313×6875 render, shaved ~50px further) into a reusable function instead of a new one-off script per Edition.
- **Step B — `generate_responsive_set.py {slug}`:** from each section's master crop, emits three JPEGs (desktop ≈1600px, tablet ≈1000px, mobile ≈640px wide, quality 85) into `public/images/editions/{slug}/read/`.
- **Step C:** the script writes a JSON fragment of the resulting paths (not TypeScript) — a human merges it into `editions.ts`'s `sections` array by hand. This is deliberate: a script silently rewriting hand-maintained data is a worse failure mode than one extra manual step.

## 5. Reader implementation

- **`src/app/editions/[slug]/read/page.tsx`** — server component; looks up the Edition by slug, 404s via `notFound()` if missing (mirroring the existing landing page), passes `edition.sections` to the client component below.
- **`src/components/EditionReader/EditionReader.tsx`** — `'use client'`; holds the current-section index in state; renders one `EditionReaderSection` at a time; advances via arrow keys, swipe (simple touch-delta), or tap-edge, per Task 3's "one section in view at a time," never continuous scroll.
- **`src/components/EditionReader/EditionReaderSection.tsx`** — renders either the section's responsive image (Section 6) or its text block, depending on whether `section.image` or `section.text` is set.
- **`src/components/EditionReader/ProgressMarker.tsx`** — a quiet "II of VIII" cue, not a progress bar, per Task 3's explicit rejection of loading-style indicators.
- **Top bar:** Edition title plus a single "← [Edition Title]" return anchor. No Wayfinding Band, no Footer, while reading — both return once the visitor exits to the landing page or Collection, per Task 3.
- **The 8th section ("Acquire"):** renders the existing `EmailGateDownload` component unmodified, pointed at `edition.pdf` and tagged `source={\`edition-${slug}\`}` — reusing the Kit integration already proven on `/encounters` rather than building a second one.

## 6. Responsive image system

`next/image` is not used anywhere in this codebase today (confirmed: zero imports across all 17 files that render images; all 39 image tags are raw `<img>`). v1.0 does not introduce it. Each `EditionReaderSection` image instead renders as a native `<picture>` with three explicit `<source>` breakpoints matching the pipeline's three generated widths, falling back to a plain `<img>` — and keeps the same right-click/drag-disable protections `ProtectedImage` already applies elsewhere, since these are the same protected intellectual property. This keeps the Reader consistent with the rest of the site's existing image approach instead of running two different image systems side by side.

```
<picture>
  <source media="(max-width: 640px)" srcSet={section.image.mobile} />
  <source media="(max-width: 1000px)" srcSet={section.image.tablet} />
  <img src={section.image.desktop} alt={section.image.alt} className="protected-img" draggable={false} onContextMenu={…} onDragStart={…} />
</picture>
```

## 7. Publication workflow

Restating the Production Pipeline above in concrete operational steps:

1. Susan approves the final PDF (unchanged).
2. Run `extract_reader_assets.py {slug}` → master section crops.
3. Run `generate_responsive_set.py {slug}` → three-width JPEGs in `public/images/editions/{slug}/read/`.
4. Hand-write the Edition's `sections` array in `editions.ts` (copy + the generated asset paths).
5. `npx tsc --noEmit`, then a local visual pass through `/editions/{slug}/read`.
6. Commit; Susan runs `git push origin main`; Vercel deploys (unchanged).

No new infrastructure is required beyond the two scripts — this is the same draft → render → verify → commit → push rhythm already used for every Edition built so far.

## 8. Commerce hooks (without implementing commerce)

- `Edition.access?: 'free' | 'gated'` — added to the data model now, read by nothing yet.
- **`src/lib/entitlement.ts`:**
  ```ts
  export function hasAccess(edition: Edition): boolean {
    // v1.0: always true. Replace this single function once Purchasing
    // is decided (Stripe entitlement check, signed URL, etc.) — every
    // call site below is written against this function so the change
    // is contained to one file.
    return true
  }
  ```
- Every place that will eventually need a gate — the PDF download link in the Reader's Acquire section, and the landing page's secondary "Download the PDF" link — calls `hasAccess(edition)` now, even though it's always `true` in v1.0. This means the actual entitlement logic, whatever Purchasing decides, has exactly one function to change later instead of a sitewide search for every download link.
- **No payment processor, checkout route, or webhook is added in v1.0.** This section exists solely so v1.0's code isn't re-architected when Purchasing is finally decided — it's a seam, not a feature.

## 9. Deployment workflow

Unchanged from today, and v1.0 introduces no changes to it: there is no `vercel.json` and no CI config beyond Vercel's git integration; deployment is `git push origin main` from Susan's own Terminal, after which Vercel runs `next build` automatically. No new environment variables are required — `KIT_API_KEY` and `KIT_FORM_ID` (already configured for the Encounters Journal gate) cover the Acquire section's needs. The asset-pipeline scripts (Section 4) run locally before a commit; they are not part of the Next.js build step.

## 10. Phase-by-phase implementation order

| Phase | Scope | Why this order |
|---|---|---|
| 1 | Extend `Edition`/`EditionSection` types; hand-build the `sections` array for one pilot Edition (recommend **Dragon** — already "the most mature Edition on the site" per the Publishing Platform Architecture doc) without touching the scripts yet | Proves the Reader components against real content before any pipeline automation exists |
| 2 | Build `EditionReader`, `EditionReaderSection`, `ProgressMarker`; wire `/editions/dragon/read` | Validates Task 3's pacing and no-PDF-chrome requirement visually, on one Edition |
| 3 | Update the landing page's CTA to point to `/read`; demote the raw PDF link | Small, reversible change; can ship as soon as Phase 2 is verified |
| 4 | Build `extract_reader_assets.py` and `generate_responsive_set.py` against Dragon's existing approved PDF; confirm scripted output matches the hand-built Phase 1 assets | De-risks the pipeline against a known-good answer before trusting it on the other five |
| 5 | Roll the pipeline out to Bowls, Ballerina, Grismere, Poppy, Queen Ann | Repeatable once Phase 4 is proven |
| 6 | Wire the Acquire/email-gate section per Edition (`EmailGateDownload` + `/api/subscribe`, tagged per slug) | Depends on Phase 5's sections existing; reuses infrastructure already live in production |
| 7 | Add the commerce hook stub (`Edition.access`, `hasAccess()`) | Deliberately last and inert — lands without blocking or being blocked by Phases 1–6 |

## 11. Future Platform Expansion

Sections 1–10 specify the Reader. This section adds no new build scope and no new phase — Phases 1–7 stay exactly as written above. What it documents is which decisions already made in Sections 1–10 were deliberately kept generic, so building the Reader now doesn't have to be revisited or undone when the platform grows past Figure Editions into the long-term marketing, publishing, and educational platform the Architecture doc's governing claim names.

**Publishing.** The `EditionSection` shape in Section 3 — `id`, an optional `image`, an optional `text` — isn't written to be Edition-specific; it's a generic "one screen of a paced reading experience" unit. `EditionReader` and `EditionReaderSection` (Section 5) consume an array of these without knowing or caring what content lives inside them. That means the same Reader shell, asset pipeline, and responsive image system built here is the same mechanism that could eventually present the already-drafted AwakenArts book (front matter, three parts, appendices) or a Workshop's curriculum materials, rather than requiring a second reading-experience codebase built from scratch when that day comes.

**Marketing.** `/api/subscribe`'s `source` field (used today as a flat string tag) is the seam for audience segmentation: Section 5's `source={`edition-${slug}`}` already produces per-Edition signup data, distinct from the single undifferentiated Encounters Journal list. Nothing in this codebase needs to change for Susan to later message Dragon readers differently from Poppy readers, or run a figure-specific campaign — that capability is built entirely inside Kit (tags, segments, sequences) on top of data this Spec already generates.

**Education.** `hasAccess(edition)` (Section 8) is written against the generic `Edition` shape, not "Figure Edition" specifically. When Workshops or a future course need a gate — a free preview session versus a paid one, public material versus facilitator-only material — the same single function is where that decision gets made, rather than a second entitlement system invented per content type.

**What this section is not.** It is not a commitment to build a book reader, a Workshop gate, or segmented email campaigns. It exists so Phases 1–7 are approved knowing what they're quietly compatible with — and so a future Specification covering any of the above can point back to this section instead of re-litigating whether the Reader's data model was built too narrowly to extend.

This is the thread back to the Architecture doc's governing claim: each decision above was kept open specifically so that building the Reader now doesn't narrow what the marketing, publishing, and educational platform can become later.

---

Per the standard set by the prior architecture documents: this is where implementation review happens before any phase begins. Nothing above has been built.
