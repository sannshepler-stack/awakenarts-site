# AwakenArts — AI Assistant Orientation

> **Read this file first. Then read `AwakenArts_Production_Charter.md` — the supreme governing document, issued 2026-07-27, which takes precedence over every other document and any prior conversation when the two conflict. Then consult `AwakenArts_Documentation_Map.md` to identify which subordinate governing documents apply to your task.**

---

## What AwakenArts Is

AwakenArts is a literary publishing imprint expressed through symbolic language. The primary product is the **Figure Edition** — a designed publication presenting a single symbolic figure through image, poem, and structured reflection. Six Figure Editions are currently live: Dragon, Bowls, Ballerina, Grismere, Poppy, and Queen Ann.

The website is not a portfolio or gallery. It is an editorial threshold — a publication that leads visitors into a body of symbolic work. Every design decision, piece of copy, and navigation element serves the work. The work does not serve the site.

---

## The Governing Document Set

Consult `AwakenArts_Documentation_Map.md` to determine which document governs any specific decision. The map is the authoritative index; update it whenever a governing document is added or superseded.

The current governing set, in consultation order:

| Question | Document |
|---|---|
| What governs everything else? Current mission, model, and priorities? | `AwakenArts_Production_Charter.md` — **read first; supersedes all conflicts** |
| What is AwakenArts? What are its values and identity? | `AwakenArts_Editorial_Identity_and_Design_Standard.md` |
| What gets built next? What phase are we in? | `AwakenArts_Production_Roadmap.md` |
| How is a specific page or component built? | `AwakenArts_Site_Architecture.md` |
| Why was a major architectural decision made? | `AwakenArts_Publishing_Platform_Architecture.md` |
| How does the Figure Edition Reader get built? | `AwakenArts_Implementation_Specification_v1.0.md` |
| What is currently live vs. still pending? | `AwakenArts_Implementation_Log.md` |
| Why is a Figure Edition built this way? | `AwakenArts_Editorial_Philosophy.md` |
| How should a Figure Edition be produced? | `AwakenArts_Figure_Edition_Production_Standard.md` |
| What were Susan's editorial decisions for Dragon? | `Dragon_Editorial_Responses.md` |

---

## Current Site Architecture

**Navigation (live):** Encounters · Collection · Gallery · Journal · About

**Primary pages:**
- `/` — Homepage
- `/encounters` — Encounters index; five movement pages (Deep, Word, Table, Path, Continue)
- `/collection` — Edition catalog; links to `/editions/[slug]` preview pages
- `/gallery` — Gallery of visual works
- `/journal` — Journal index and entry pages
- `/about` — About Susan Ann Shepler
- `/foundation` — Biblical and theological foundation (unlisted from nav)
- `/sketchbook` — Artist's Studio / work in progress (unlisted from nav)
- `/workshops` — Workshop materials (unlisted from nav)

**Key components:** `Nav.tsx`, `WayfindingBand.tsx`, `AtmosphericHeader.tsx`, `ProtectedImage.tsx`, `EmailGateDownload.tsx`

**Stack:** Next.js 14, TypeScript, deployed via Vercel  
**Local path:** `/Users/sashe/Projects/AwakenArts/awakenarts-site`  
**Deploy flow:** local build → commit → `git push origin main` → Vercel auto-deploys (~60s) → verify on live site

---

## Operational Rules

- **The work is primary.** Every change to imagery, copy, or components serves the symbolic work, not the other way around.
- **Restraint is the posture.** When in doubt: less is more. The site should feel like a carefully edited publication, not a marketing website.
- **Symbolic forms are authored, not generated.** Do not propose AI generation of figures, poems, or symbolic content. Atmospheric imagery may use AI generation; symbolic figures may not.
- **No explaining what should be encountered.** The site invites recognition; it does not explain the work before the visitor has met it.
- **One concrete target per pass.** Inspect → identify one target → make the change → verify locally → commit. Do not simultaneously rewrite routes, nav, metadata, and copy in one pass.
- **Repository-anchored work only.** A change is real only when it is implemented in the repo, locally verifiable, and committed.
- **Update the Documentation Map in the same commit** when a governing document is added, changed, or superseded.

---

## Historical Documents

Documents in `docs/` (THE_FORMS.md, FORWARD_BRIEF_PRODUCTION_PHASE.md, ENCOUNTER_SYSTEM.md, WRITING_STYLE_GUIDE.md, etc.) reflect an earlier phase of the project (May 2026) and are retained as historical record. **Do not consult them as current authority.** Their content has been absorbed into the current governing set. The Documentation Map identifies the status of every document in the repository.

---

*Susan Ann Shepler · AwakenArts · Confidential*
