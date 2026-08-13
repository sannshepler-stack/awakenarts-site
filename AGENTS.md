# AwakenArts — AI Assistant Orientation

> **Read this file first. Then read `AWAKENARTS_CURRENT_MATERIALS.md`, the authoritative current-working-set map. For workshop, Dragon, Companion/facilitator, participant-material, and workshop-related website work, read the New AwakenArts Paradigm (`/Users/sashe/Desktop/Dragon Pass One.docx`) and `AwakenArts_Dragon_Paradigm_Audit_and_Map.md` before older standards. Consult `AwakenArts_Documentation_Map.md` for non-conflicting subordinate guidance, but do not let its earlier Edition-led architecture silently override current governance.**

## Goal 2 governance correction — August 13, 2026

The repository contains valuable documents from several AwakenArts phases. Newer filenames and labels such as “Final,” “Good Copy,” or “Current Production” do not by themselves establish authority.

- `AWAKENARTS_CURRENT_MATERIALS.md` is Susan's primary map of the active working set, source material, superseded material, and unresolved decisions.
- `/Users/sashe/Desktop/Dragon Pass One.docx` is the **New AwakenArts Paradigm**. Its ten-stage workshop arc and four-deliverable model supersede conflicting earlier workshop, Edition-as-product, and Companion-packaging architecture.
- `AwakenArts_Dragon_Paradigm_Audit_and_Map.md` is the completed Goal 1 map for applying that paradigm to Dragon and the current site.
- Older Figure Edition, Companion, Resource, Roadmap, Charter, handoff, and architecture documents may remain useful within their valid domains or as authored source/history. They cannot silently override the New Paradigm on workshop architecture.
- Preserve non-conflicting identity, authorship, editorial, design, safety, production-discipline, and technical guidance.
- Surface conflicts requiring creative, theological, or project-direction judgment to Susan. Do not choose for her merely to remove ambiguity.
- AI should perform discovery, comparison, duplicate detection, classification, cross-referencing, implementation, testing, and maintenance when capable. Susan retains creative authority and project direction.
- Do not delete substantive AwakenArts work. Before moving files, check imports, URLs, build paths, references, and Git history; update and test dependencies or leave the file in place and classify it.

---

## What AwakenArts Is

AwakenArts is a literary and workshop practice expressed through symbolic language. Figure Editions remain substantial authored content foundations: designed publications presenting a symbolic figure through image, poem, and structured reflection. Under the New AwakenArts Paradigm, the Edition is no longer assumed to be the primary facilitator product; it becomes the content foundation of an AwakenArts workshop. Six Figure Editions are currently represented on the site: Dragon, Bowls, Ballerina, Grismere, Poppy, and Queen Ann.

The website is not a portfolio or gallery. It is an editorial threshold — a publication that leads visitors into a body of symbolic work. Every design decision, piece of copy, and navigation element serves the work. The work does not serve the site.

---

## The Governing Document Set

Start with `AWAKENARTS_CURRENT_MATERIALS.md`. Consult `AwakenArts_Documentation_Map.md` for the older document system and non-conflicting domain guidance; it is no longer sufficient by itself for workshop work and must be read through the Goal 2 governance correction above.

The current governing set, in consultation order:

| Question | Document |
|---|---|
| What governs the current working set and conflict order? | `AWAKENARTS_CURRENT_MATERIALS.md` — **read first** |
| What governs workshop purpose, sequence, and deliverables? | `/Users/sashe/Desktop/Dragon Pass One.docx` — **New AwakenArts Paradigm** |
| What maps current Dragon/site material to that paradigm? | `AwakenArts_Dragon_Paradigm_Audit_and_Map.md` |
| What governs general production where it does not conflict with the New Paradigm? | `AwakenArts_Production_Charter.md` |
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

**Navigation (live):** The Path · Symbols · Collection · Gallery · Journal · About

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
