# AwakenArts — Documentation Map

**Status: Governing reference. Issued 2026-07-01. Adopted as the repository's primary orientation document 2026-07-01.**

This document identifies every documentation file in the AwakenArts repository and assigns each one an authoritative status. Its purpose is simple: to end the competition between documents. When you or Claude need to know what governs a decision, consult this map first, then go directly to the named document. Do not consult historical or archived documents as current authority.

`AGENTS.md` — the AI assistant orientation file — has been updated to point to this map as the first reference for every new session.

The documents in each tier below are listed in consultation order — what to read first, what to read second.

---

## The Governing Set

These are the authoritative documents for ongoing AwakenArts production. Consult these before acting on any question of identity, sequencing, building, or publishing.

### 1. Identity and Design

**`AwakenArts_Editorial_Identity_and_Design_Standard.md`** — *Locked 2026-06-25.*
The floor for every AwakenArts decision. Covers philosophy, brand identity, visual language, writing standards, and product standards across all surfaces — website, Figure Editions, Facilitator Guides, print. When any other document conflicts with this one, this one wins. Read this before anything else.

**`AwakenArts_Site_Architecture.md`** — *Living reference, last revised 2026-06-24.*
The technical implementation of the Editorial Identity & Design Standard as expressed in the Next.js site. Universal Page Structure, Global Header Navigation, Wayfinding Band, Atmospheric Header system, and the editorial logic of each primary page. Read alongside the Editorial Identity Standard; this is the "how it appears on the site" layer.

### 2. Production Sequence and Vision

**`AwakenArts_Production_Roadmap.md`** — *Locked 2026-06-30.*
The sequencing layer above all other documents. Defines the order in which work is completed across five phases and three product families. New work begins here — not with the Implementation Log or any individual specification. If you are deciding what to build next, consult this first.

**`AwakenArts_Publishing_Platform_Architecture.md`** — *Governing principles.*
The vision document. Explains why AwakenArts is being built the way it is — the governing claim (AwakenArts is a marketing platform for an original body of work), the document hierarchy, and the architectural decisions that follow from that claim. Read when you need to understand *why* something was decided, not just what was decided.

### 3. Technical Blueprint and Build Record

**`AwakenArts_Implementation_Specification_v1.0.md`** — *Preserved, not rewritten.*
The technical blueprint for the Figure Edition Reader — how it gets built, in reviewable detail. Consult before touching the Reader pipeline (asset extraction, responsive generation, Reader route). Amendments are issued as v1.1, v2.0, etc., appended below this baseline.

**`AwakenArts_Implementation_Log.md`** — *Living document.*
The record of what has actually been built against the Specification, and what remains. The reality check. Updated continuously; never rewritten backward. If you want to know whether something is live, built, or still pending, this is where you look.

### 4. Commerce & Production Architecture

**`AwakenArts_Commerce_Architecture.md`** — *Governing document. Issued 2026-07-01.*
The permanent commerce and production blueprint for AwakenArts. Defines commercial identity (AwakenArts as a publishing imprint, not a store), the complete revenue architecture (free/paid distinction, revenue streams, pricing model), the customer journey from first encounter through collector/advocate, catalog management, commerce platform requirements, site commerce architecture, and the governance of commercial expansion. Read alongside the Production System. When any document conflicts with this one on a commercial question, return to the governing principle: commerce serves the work; the work does not serve commerce.

### 5. Production System and Rules

**`AwakenArts_Production_System.md`** — *Governing document. Issued 2026-07-01.*
The master production standard for AwakenArts. Governs every product from artwork creation through customer delivery across seven phases: Product Classification, Asset Production, Product Review, Product Preparation, Fulfillment Options, Website Integration, and Future Scalability. Commerce platforms plug into this system — they do not determine it. Consult before beginning production on any new work. This is the operating manual that answers "how do we produce this?" before the question is asked.

**`AwakenArts_Production_Rules.md`** — *Governing reference. Issued 2026-07-01.*
Production discipline rules that sit above any individual production standard. Rule No. 1: Edition Art Prints and Sketchbook Works are separate product families — classification is determined by intended role, not visual style. Rule No. 2: Website rooms are presentation spaces, not product families — never classify a product by the page where it appears. Rule No. 3: Update the Documentation Map in the same commit as any document change. Rule No. 4: Every commercial product must originate from a published work. Read before `AwakenArts_Production_System.md`.

### 5. Figure Edition Publishing Standard

**`AwakenArts_Editorial_Philosophy.md`** — *Governing document. Issued 2026-07-01.*
Why a Figure Edition is built the way it is: recognition over interpretation (the parable principle), the reader journey (Encounter → Notice → Recognize → Reflect → Respond → Return to Ordinary Life), the governing principle of usefulness, preserving mystery, the Participant Edition/Leader's Resource split, and the five-question governing editorial test. Read before the Production Standard below. This is the document that answers "why does this edition work this way?"

**`AwakenArts_Figure_Edition_Production_Standard.md`** — *Governing document. Issued 2026-07-01.*
The consolidated technical specification for every Figure Edition: page sequence (reader experience described before page construction), reader-facing language rules, visual rhythm, usability standards, writing-invitation language, colophon requirements, and production consistency. Supersedes `Figure_Edition_Standard_Dragon.md`. This is the document that answers "how should this edition be built?"

**`Figure_Edition_Standard_Dragon.md`** — *Superseded 2026-07-01. Historical record.*
Dragon's original editorial review and the 23 standards it produced — the source material generalized into the two documents above. Retained to understand why a given rule exists; no longer consulted as current authority on its own.

**`AwakenArts_Figure_Edition_Series_Introduction.md`** — *Governing series introduction. Issued 2026-07-06.*
The standing, quotable introduction to the Figure Edition collection — not a standard, but the front-door description to hand anyone (reader, workshop leader, retailer) encountering the series for the first time. Opens and closes with the Figure Edition Series Statement (see the Editorial Philosophy). This is the document that answers "what is the Figure Edition series, in a paragraph?"

### 6. Artwork Production Standard

**`AwakenArts_Artwork_Production_Standard.md`** — *Anticipated. Not yet written.*
The upstream companion to the Production System. Will govern the portion of the production chain that precedes digital asset preparation: photographing and scanning original paintings, color calibration and correction, cropping and composition, signature standards, watermark conventions, and export standards. Covers both product families (Edition Art Prints and Sketchbook Works) since both begin with original artwork that must be captured before any digital production can begin. Once written, the Production System's Phase 2 will reference this document for the Original Artwork → Master Artwork step and pick up from Master Artwork forward. Consult `AwakenArts_Production_System.md` Phase 2 for interim guidance on the full chain until this document exists.

*Anticipated 2026-07-01. Will be created when artwork production begins in earnest.*

---

## Edition Records

These documents are permanent companion records for individual editions. They do not govern future editions directly — they are the editorial history of the edition they describe.

**`Dragon_Editorial_Responses.md`** — *Complete. Closed 2026-07-01.*
The publisher's permanent editorial record for Dragon Figure Edition No. 01. Contains Susan's official decisions (Accept / Accept with Modification / Reject / Deferred / Not Adopted) for every finding in the Dragon Publishing Review, organized by section. The source document for all amendments to `Figure_Edition_Standard_Dragon.md`. Retain indefinitely as part of Dragon's editorial history.

**`Dragon_Christian_Tradition_Research.md`** — *Complete, 2026-07-06. Prerequisite research, precedes and informs the review below; superseded in part, corrected in place — see below.*
Survey of how ten voices from the Christian tradition (Meyer, Willard, Lewis, Ortberg, Keller, Nouwen, Manning, Eldredge, Chambers, Tozer) plus two classical voices (Augustine, à Kempis) — chosen for Dragon specifically, not a standing roster — describe the inner battle Dragon's symbolic story portrays. Originally identified the Legion narrative (Mark 5 / Luke 8) as the strongest fulfillment candidate; this was rejected by Susan (Dragon is not about demonic oppression) and corrected twice more in place, first to Romans 7–8, then — after naming Dragon's central Gospel truth independently of any passage — to the current selection, Colossians 3:10–11 and 3:14–15. All three corrections are recorded in the document itself, in order, per this project's no-silent-rewrite convention. Frames tradition voices as witnesses to a human reality Christians have long recognized, not as validators of the edition — read this before `Dragon_Christian_Fulfillment_Review.md`'s Scripture selection.

**`Dragon_Christian_Fulfillment_Review.md`** — *In progress. First pass 2026-07-06; The Larger Story section now carries seven revisions, all preserved; pending Susan's final review.*
The editorial record of Dragon's page-by-page review under the Christian Fulfillment Lens (`AwakenArts_Editorial_Philosophy.md`). Documents what was revised (Recognition, Living the Message), what was proposed but held out pending a decision (Message Delivered), and what was reviewed and deliberately left unchanged, with reasoning for each. The pattern future editions' own Christian Fulfillment reviews should follow.

**`Dragon_Foundational_Conformance_Review.md`** — *Complete, 2026-07-06. Distinct process from the Christian Fulfillment Review above — read both, but do not conflate them.*
A full, fresh read of all 11 pages of the Dragon Figure Edition against the now-completed `AwakenArts_Editorial_Philosophy.md` and `AwakenArts_Figure_Edition_Production_Standard.md`, asking not "what Scripture fits Dragon" but "does this founding edition now embody the philosophy it gave birth to." Confirms Dragon's structure and the great majority of its language already conform; finds three residual vocabulary inconsistencies on pages The Larger Story's own seven revisions never touched (Recognition, Reflection), plus two open decisions (naming sin on The Larger Story; the still-undecided Message Delivered addition). Findings only — no page was edited as part of this review; see the document itself for what, if anything, Susan directs be applied.

**`AwakenArts_Encounter_Journal_Conformance_Review.md`** — *Complete, 2026-07-07. Review only — no revisions implemented.*
A page-by-page conformance review of `AwakenArts_Encounter_Journal.pdf` (the free, 8-page self-guided companion to the five live Encounters) against current publishing standards, the locked Recognition Model, the current Christian Foundation, and the Dragon Figure Edition methodology. Confirms the Journal's five-Encounter sequence, terminology, and cross-sell references remain current and accurate. Finds one substantive cross-page issue — four of five Encounter pages place Scripture before the reader's own Recognition Model prompts, in tension with the "recognition precedes Scripture" principle established through Dragon's Larger Story work — and one secondary formatting issue, where two pages render Scripture and an internal AwakenArts "Echo" quote identically, flattening a distinction the live site itself preserves. Both come with a smallest-possible-revision recommendation; neither has been applied, pending Susan's direction.

*As future editions complete their editorial reviews, their response documents join this tier.*

---

## Reference Materials

These documents are completed or proposed — they contain useful analysis and thinking, but are not yet part of the governing set. Some are awaiting formal review; others are diagnostics that informed decisions already made.

**`AwakenArts_Product_Architecture.md`** — *Draft, pending formal review.*
Maps the complete family of AwakenArts products (Figure Editions, Gallery, Artist's Sketchbook, and related), their purposes, audiences, and site requirements. Drafted 2026-06-29. Well-developed and likely sound, but not yet formally accepted. Consult as useful reference; not yet authoritative.

**`AwakenArts_Platform_Presentation_Evaluation.md`** — *Completed diagnostic, 2026-06-29.*
A visitor-experience read of the site as it existed in June 2026 — what a first-time visitor understands, what creates confidence, what creates uncertainty. Findings were used to inform site refinements in Phase One. Not a governing standard; a completed assessment. Useful as historical context for homepage and Collection decisions.

**`AwakenArts_Reader_Design_Revision_Plan.md`** — *Proposal, pending Susan's approval.*
The design revision plan for the Figure Edition Reader — entrance, pacing, the Word (poem) presentation, Recognition/Reflection architecture, and the Two Reader Experiences model. Built from direct PDF examination of Dragon and Grismere. Not implemented; awaiting approval before resuming Reader work. Consult alongside Implementation Specification v1.0 when Reader work resumes.

**`AwakenArts_Relationship_Strategy.md`** — *Proposed, 2026-06-29.*
A first articulation of what relationship AwakenArts wants to build with visitors at five thresholds (one visit, one edition read, one collection purchased, one workshop, one retreat). Explicitly flagged as "meant to be argued with, not adopted by default." Consult when developing email sequences, purchasing pages, or workshop promotion — but treat as a starting point for discussion, not settled policy.

**`AwakenArts_Relationship_Strategy_Visitor_Experience_Changes.md`** — *Proposed, 2026-06-29.*
The visitor-facing translation of the Relationship Strategy — what a visitor would actually encounter differently at each of the five stages. A companion to the Strategy document; same status: proposed, not governing.

---

## Historical Archive

These documents remain in the repository as historical record. They reflect an earlier phase of AwakenArts' development (primarily May 2026 and before) and were valuable at the time, but their core content has been absorbed into current governing documents or superseded by architectural decisions made since. Do not consult these as current authority. They exist so the record is complete.

| Document | Why Archived |
|---|---|
| `docs/THE_FORMS.md` | Original governing ontology from May 2026. Core content — the primacy of Form, symbolic method, spiritual orientation — is now carried by `AwakenArts_Editorial_Identity_and_Design_Standard.md`. Retain as the foundational philosophical source. |
| `docs/FORWARD_BRIEF_PRODUCTION_PHASE.md` | May 2026 production phase brief. Introduced vocabulary (Symbolic Form, Threshold, Atmosphere) that is now standard. Superseded as a sequencing document by `AwakenArts_Production_Roadmap.md`. |
| `docs/ENCOUNTER_SYSTEM.md` | May 2026 technical architecture for the Encounters system. Describes a navigation structure and component architecture that has since been substantially rebuilt. Historical snapshot only. |
| `docs/WRITING_STYLE_GUIDE.md` | Web writing style guide. Writing standards are now carried in Section 5 of `AwakenArts_Editorial_Identity_and_Design_Standard.md`. Retain for supplemental web copy guidance; not governing. |
| `docs/ACTIVE-IMAGE-MAP.md` | May 2026 image/asset map for the Studio and Homepage. References "Studio page" (now Sketchbook) and a nav structure that no longer exists. Outdated as an asset reference. |
| `docs/CLEANUP-AUDIT.md` | May 2026 post-stabilization structural audit. Describes a navigation structure (Studio, Library, etc.) that predates the current architecture. Historical only. |
| `docs/SEO_HANDOFF.md` | May 2026 SEO documentation. Partially current (robots.ts, sitemap), but reflects a pre-Phase-One site structure. Useful as a technical reference for specific SEO decisions made; not governing. |
| `dragon-companion-system-review.md` | Review of Dragon companion system materials (Workshop Plan, Facilitator Notes, etc.) from an earlier editorial phase, before the Figure Edition Standard existed. Now superseded by `Dragon_Editorial_Responses.md` as the definitive editorial record. |
| `dragon-section-review.md` | Review of Dragon's site presence against author notes from an earlier phase. Analysis was used in site refinements. Historical. |

---

## Source Materials

The `AwakenArts_Workbook/` directory contains the creative source material for all 15 Figures — authored poems, motifs, notes, and production materials for Grismere through Pottery. These are not documentation in the governance sense; they are the creative archive from which editions are built.

When beginning work on a new Figure Edition, the relevant Figure folder inside `AwakenArts_Workbook/` is the source. `Figure_Edition_Standard_Dragon.md` is the production standard. `AwakenArts_Production_Roadmap.md` determines when a given Figure's edition enters production.

`AwakenArts_Workbook/Collection_Introduction.md` and `AwakenArts_Workbook/Series_One_Introduction.md` are early introductory drafts. They may be useful context but are not current copy.

---

## Permanent Vocabulary

These terms are settled. Once a term is established here, it does not change — not in documentation, not in code comments, not in conversation with AI assistants. Consistency in vocabulary prevents the confusion that arises when the same concept has multiple names across documents.

| Term | Definition |
|---|---|
| **Figure Edition** | The publication. A complete, designed symbolic work presenting one Figure through image, poem, and structured reflection. |
| **Edition Art Print** | The collectible print. A fine art print derived from a published Figure Edition; the Edition's own figure image offered for wall display. |
| **Sketchbook Work** | Susan Ann Shepler's independent original artwork. Currently expressed through *A Collection of Feminine Motifs*. |
| **Greeting Card** | A product derived from a Sketchbook Work. Downloadable or print-on-demand. |
| **Sketchbook Art Print** | A potential future product: a fine art print derived from a Sketchbook Work (as distinct from an Edition Art Print). Not yet in production. |
| **Gallery** | The website room at `/gallery`. A presentation space. Displays Edition Art Prints without purchase links. Not a product family. |
| **Collection** | The website room at `/collection`. Displays Figure Editions by contact sheet; leads to Edition Preview. Not a product family. |
| **Sketchbook** | The website room at `/sketchbook`. Displays Sketchbook Works; leads to individual work pages. Not a product family. |

*Vocabulary adopted 2026-07-01 per Susan's review of production architecture.*

---

## Summary: What to Consult and When

| Question | Document to consult |
|---|---|
| What does AwakenArts stand for? What are its values and identity? | `AwakenArts_Editorial_Identity_and_Design_Standard.md` |
| What should be built next? What phase are we in? | `AwakenArts_Production_Roadmap.md` |
| How is a specific page built on the site? | `AwakenArts_Site_Architecture.md` |
| Why was a major architectural decision made? | `AwakenArts_Publishing_Platform_Architecture.md` |
| How does the Figure Edition Reader get built? | `AwakenArts_Implementation_Specification_v1.0.md` |
| What is currently live vs. still pending? | `AwakenArts_Implementation_Log.md` |
| Why is a Figure Edition built this way? | `AwakenArts_Editorial_Philosophy.md` |
| How should a Figure Edition be produced? | `AwakenArts_Figure_Edition_Production_Standard.md` |
| What is the Figure Edition series, in a paragraph? | `AwakenArts_Figure_Edition_Series_Introduction.md` |
| What were the editorial decisions for Dragon? | `Dragon_Editorial_Responses.md` |
| What products does AwakenArts offer? | `AwakenArts_Product_Architecture.md` (draft) |
| What is the plan for the Reader revision? | `AwakenArts_Reader_Design_Revision_Plan.md` (pending) |

---

---

## Maintenance Rule

**Update this map in the same commit** whenever:

- a governing document is added or superseded
- a draft or proposal becomes authoritative
- a new edition record is completed
- a document is renamed or relocated

The Documentation Map must never lag behind the documents it describes. Treating it as a separate maintenance task is what allows documentation systems to drift. When a document changes status, the map changes in the same commit.

---

*Issued 2026-07-01. Adopted as repository primary orientation document 2026-07-01.*
