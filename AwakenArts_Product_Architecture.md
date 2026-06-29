# AwakenArts Product Architecture

**Status: Draft — pending Susan's review.**
**Drafted 2026-06-29, per the "AwakenArts Product Architecture Initiative" directive.**

This document answers the six questions the Initiative posed:

1. The complete family of marketable products.
2. The purpose of each product.
3. The audience for each product.
4. The relationship each product creates.
5. The pathway by which visitors discover, acquire, and use each product.
6. The website features required to support those products.

It was built by surveying every product-defining document already on file — most of which live in `AwakenArts_Workbook/` and were never reconciled with the website-facing Architecture/Spec/Revision Plan this engagement has been producing. **The central finding is that the product family is mostly already defined.** Susan (or a prior collaborator referred to in these documents as "Chat") had already done a great deal of this work, in detail, before this Initiative was issued. This document's job is to assemble what already exists into one place, surface where the existing documents disagree with each other or with what's actually live on the site, and name what's still genuinely undecided.

Nothing here is new architecture invented for this document. Where a product, bundle, or pathway is described below, it is sourced from a named existing document. Where this document adds judgment, it is in the reconciliation (Part Four) and open questions (Part Five) — never in the product definitions themselves.

---

## Part One — The Complete Product Family

AwakenArts' marketable products form four families, all originating from one source: **the Figures** — the authored symbolic works (image + poem + reflection) that are "the origin point of the entire system" (Book 01 Blueprint, Part Five).

Fifteen Figures exist in the Workbook: Grismere, Dragon, Queen Ann, Merri, Ballerina, Poppy, Bear, Dove, Bowls, Chess, King, Ladybug, Angel, Church, Pottery. Six have been developed into complete, deployed Figure Editions and are live on the site today: **Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann** (`editions.ts`). Nine — Merri, Bear, Dove, Chess, King, Ladybug, Angel, Church, Pottery — exist only as authored Workbook material with no Figure Edition built yet.

### Family A — Figure Editions (the reading product)

The complete, designed presentation of a single Figure: image, poem, and reflection, originally authored as an 11-page PDF, now also rendered as a web Reader.

| Product | Status |
|---|---|
| Figure Edition (PDF) — Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann | Built |
| Featured Reader (web) — one Edition, freely readable, abridged per the Two Reader Experiences decision | Grismere named as featured (resolved 2026-06-29); Dragon is the only one actually built so far and remains the engineering proving ground |
| Owner Reader (web) — complete Edition, for owners | Not built |
| Figure Edition (PDF), remaining nine Figures | Not authored as Editions yet |

### Family B — The Workshop Guide Series and Book 01

A series of facilitator-led teaching products built from the Figures, governed by two documents that were drafted close together (both dated June 2026) and that describe the same territory at two different scales — see Part Four for the tension between them.

**The series** (`AwakenArts_Workbook_Series_Architecture.docx`): six guides under the umbrella title *Teaching Symbolic Language Through Visual-Poetic Forms*, each organized around one primary Figure plus several supporting Figures, each teaching one or two specific symbolic-literacy competencies:

| Guide | Primary Figure | Supporting Figures | Primary Competency | Status |
|---|---|---|---|---|
| The Mermaid and Other Works | Grismere | Queen Ann, Dragon, Bowls ("Vessel") | Holding ambiguity; interpretive plurality | Recommended series entry point |
| The Queen | Queen Ann | Ballerina, Merri, Grismere | Form-as-meaning; recognition | Proposed |
| The Vessel | Bowls | Queen Ann, Grismere, Scripture passages | Typological reading | Proposed |
| The Dragon | Dragon | Queen Ann, Grismere | Observation under pressure | Proposed |
| The Ballerina | Ballerina | Queen Ann, Merri, literary companions | Extended metaphor | Planned (not yet specified) |
| Merri | Merri | Bowls, Ballerina | Recognition before naming | Planned (not yet specified) |

**Book 01** (`Book_01_Workshop_System_Blueprint.docx`) takes "The Mermaid and Other Works" and productionizes it into a full nine-component commercial system, with all six Figures (Grismere, Queen Ann, Bowls, Dragon, Ballerina, Merri) as coequal full sections rather than one primary work with lighter supporting mentions:

| # | Component | Audience | Status |
|---|---|---|---|
| 1 | The Work (the Figures) | All | Source material — exists |
| 2a | Participant Teaching Guide | Participants | In progress — Grismere section complete, five remaining |
| 2b | Facilitator Companion | Facilitators only | Not started — depends on 2a |
| 3a | Workshop Slide Deck | Facilitator-operated, participant-seen | Not started |
| 3b | Session Plans (4 formats) | Facilitators | Not started |
| 3c | Printable Handouts | Participants | Not started |
| 3d | Facilitator Quick Reference | Facilitators | Not started |
| 4a | Facilitator Training Notes | Facilitators/program directors | Future product, deferred post-pilot |
| 4b | Workshop Licensing Materials | Institutions | Future product, deferred post-pilot |

Four commercial bundles wrap these components (full definitions, pricing logic, and market-entry sequencing in the Blueprint's Part Six):

| Bundle | Contents | Audience |
|---|---|---|
| Exploration Bundle | Guide + Companion | First-time evaluators, solo readers |
| Workshop Bundle | Guides (group qty) + Companion + Presentation Kit | Single-session facilitators — the primary revenue product |
| Series Bundle | Workshop Bundle + Multi-Session Course Plans | Small-group/adult-education, multi-week formats |
| Facilitator Training Bundle | Series Bundle + Training Notes (future) | Institutions training their own facilitators |

Pricing itself is explicitly marked TBD in the source document — not resolved here.

**The Master Curriculum** (`AwakenArts_Workbook_Architecture_Blueprint.docx`): a separate, larger-scale, fourteen-section educational program (Threshold through "Creating Symbolic Forms") that the guides feed into. Per the Series Architecture document, "the guides are the entry points; the curriculum is the destination." This document governs the curriculum in full; it is not re-summarized here beyond naming its existence and relationship to the guides.

### Family C — The Currently Built Workshop Support Kit

A simpler, already-completed set of workshop materials, built earlier in this engagement (tasks #181–197), live on the site today at `/workshops` and `/facilitator-orientation`:

- *AwakenArts: Guide to Symbolic Facilitation* (book — front matter, Parts I–III, appendices)
- Workshop Curriculum document
- Facilitator Orientation / quick-reference handout
- Participant Handouts (Recognition Model card + session worksheets)
- Intake/Consent form
- Session Feedback form

This kit teaches the site's own Recognition Model (Encounter → Recognition → Reflection → Discussion → Learning → Integration) in general terms, not organized around any single Figure as primary. Its relationship to Family B (the Guide Series / Book 01, which is Figure-specific and far more elaborated) is one of the open questions in Part Four — they may be the same product at two different maturity stages, or two genuinely different tiers meant to coexist.

### Family D — Free / Relationship-Building Products

- **The AwakenArts Encounter Journal** — free PDF, email-gated download, built and live. The only existing mechanism in what the Build-the-House directive calls "Transition."
- **Encounters** (web pages) — free, public, partial encounters with individual Figures (`/encounters`).
- **Collection** (web page) — free, public browsing of the body of work; not currently packaged as a single purchasable thing despite functioning as a de facto product surface (per `AwakenArts_Platform_Presentation_Evaluation.md`, line 133).

### Named but undefined products

- **Collections** (plural, as a future purchasable offering distinct from the browsing page) — named in the Build-the-House Transition room; no definition exists anywhere yet.
- **Retreats** — named in the Transition and Owner House rooms; no definition exists anywhere yet.
- **Workshop Licensing / Facilitator Training** — defined in outline only (Book 01 Blueprint, components 4a/4b); explicitly deferred until after a pilot session.
- **Figure Editions for the remaining nine Figures** (Merri, Bear, Dove, Chess, King, Ladybug, Angel, Church, Pottery) — authored material exists; no Edition, guide, or web presence exists for any of them.

---

## Part Two — Purpose, Audience, Relationship, and Pathway

| Product | Purpose | Audience | Relationship Created | Pathway |
|---|---|---|---|---|
| Featured Reader (Grismere) | Introduce AwakenArts; demonstrate the method and quality; create desire to go deeper — never to fully satisfy | First-time visitors, no prior relationship | Visitor → engaged reader; "this is the beginning of something larger," never "here is your free Edition" | Discovered via Homepage/Encounters → reads Featured Reader → routed toward Complete Edition / additional Editions, not given a dead end |
| Figure Edition (purchased, any of the 6) | Deliver one complete authored work for ongoing ownership, reading, printing | Visitors who completed the Featured Reader or an Encounter and want the full piece | Visitor → owner of one piece of the body of work | Acquire flow (not built) → Owner Reader / download / print (not built) |
| Encounter Journal | Free entry point; build the email relationship; demonstrate the Recognition Model in miniature | Any visitor, lowest-commitment | Anonymous visitor → email subscriber | Found via homepage/Encounters → email-gated download (live) → ongoing email relationship |
| Encounters (free pages) | Let a visitor meet a Figure briefly, before any commitment | First-time and returning visitors | Visitor → curious visitor | Homepage/nav → Encounters → toward Featured Reader or Collection |
| Collection (browsing) | Show the shape of the whole body of work | Visitors evaluating whether to go deeper | Visitor → prospective owner | Nav → Collection → individual Edition pages |
| The Mermaid and Other Works (guide/Book 01) | Teach holding ambiguity through sustained group engagement with Grismere and five supporting Figures | Church/retreat/workshop facilitators, via the Participant Teaching Guide first | Facilitator → adopter → repeat purchaser of later books | Discovery (recommendation/catalog) → purchase Guide (read it as a participant first) → Exploration Bundle → Workshop Bundle |
| Facilitator Companion | Equip a facilitator to lead the session well | Facilitators only, never participants | Facilitator → confident session leader | Purchased alongside the Guide as the Exploration Bundle |
| Workshop Presentation Kit | Give a facilitator everything needed to run one session | Facilitators delivering a group session | Facilitator → workshop host | Purchased as the Workshop Bundle once the Exploration Bundle has converted intent into delivery |
| Currently-built Workshop Kit (Guide to Symbolic Facilitation, etc.) | Teach the Recognition Model generally; support today's `/workshops` page | Facilitators, today, with no Figure-specific guide yet to buy | Visitor/facilitator → workshop participant | `/workshops`, `/facilitator-orientation` (live, unlisted pages) |
| Master Curriculum | Sustained, institution-grade symbolic-literacy education across the full 14-section program | Educators, church adult-education programs, retreat directors | Committed facilitator → curriculum graduate → potential future facilitator-trainer | Reached after completing multiple guides, per the Series Architecture document |

---

## Part Three — Website Features Required, Mapped to the Houses

Cross-referencing the Build-the-House room assignments (`AwakenArts_Publishing_Platform_Architecture.md`) against what's actually live:

**Public House** — Homepage, Foundation, Encounters, About: built. Featured Reader: named (Grismere) but the only built Reader is Dragon's, and it is mid-revision per the Reader Design Revision Plan. Collection Preview: live, but see the `/collection` placement question already open (Revision Plan Section 8, Task #272).

**Transition** — Complete Edition, additional Editions, Collections, Workshops, Facilitator Resources, Retreats: almost entirely unbuilt as a distinguished zone. The Encounter Journal's email gate is the only working Transition mechanism today. `/workshops` and `/facilitator-orientation` exist but were built before the Public House / Transition / Owner House split existed, so they aren't yet positioned as Transition rooms specifically — they currently read as freestanding pages.

**Owner House** — My Library, Complete Figure Editions, Read Online, Download, Print, Collections, Workshop Resources, Facilitator Resources, Retreat Resources: entirely unbuilt. Blocked on the Purchasing/entitlement decision (Open Decision #1 in the Implementation Log) — `hasAccess()` is currently a permanently-`true` stub with no real logic behind it.

**Features this Product Architecture newly identifies as required, not previously named in the Spec or Architecture doc:**

- An Acquire/purchase flow for individual Figure Editions (Family A), separate from and prior to any Workshop-product commerce.
- A facilitator-facing discovery/catalog surface once even one Workshop Guide (Family B) exists for sale — `/workshops` today only describes the currently-built kit, not a Figure-specific guide.
- A bundle-selection mechanism (Exploration / Workshop / Series / Training) once Book 01 components exist — not just a single "buy" button.
- Some way to register and price "Collections" (plural) as an actual purchasable unit, since the current `/collection` page is browsing-only.

---

## Part Four — Reconciliation: Where the Existing Documents Disagree

1. **The Guide Series vs. Book 01 — same territory, two different shapes.** The Series Architecture document (`AwakenArts_Workbook_Series_Architecture.docx`) defines "The Mermaid and Other Works" as Grismere (primary) plus three lighter supporting Figures. The Book 01 Blueprint (`Book_01_Workshop_System_Blueprint.docx`), written the same month, expands this into six Figures (Grismere, Queen Ann, Bowls, Dragon, Ballerina, Merri) all treated as full coequal sections. These cannot both be the current plan for the same product as written — the Blueprint reads as a later, more developed expansion of the Series document's first guide, but neither document states that explicitly, and the Series document's remaining five proposed guides (The Queen, The Vessel, The Dragon, The Ballerina, Merri) are not addressed by the Blueprint at all. **Open question for Susan:** does Book 01 supersede and absorb "The Mermaid and Other Works" as the Series document defined it (in which case the other five proposed guides become "Books 02–06" in some form, still needing their own blueprints), or are the Guide Series and Book 01 two parallel products at different scales that need to be reconciled deliberately?

2. **"Vessel" = Bowls, but the naming is inconsistent across documents.** The Series Architecture and Book 01 documents both refer to a Figure called "Vessel" with scripture references to water/vessel/spirit — this is the Figure built and deployed on the live site as **Bowls** (`editions.ts` slug `bowls`). No document states this equivalence directly; it's inferred from content match. Worth fixing before any guide/book copy ships publicly under one name or the other inconsistently.

3. **An earlier, apparently superseded identity and vocabulary exists.** `docs/FORWARD_BRIEF_PRODUCTION_PHASE.md` and `docs/THE_FORMS.md` describe AwakenArts under a different working title ("Within the Circle"), different vocabulary (Threshold / Collection / Encounter / Emergence / Silhouette / Atmosphere replacing "cards, decks, items"), and a flip-card/silhouette-extraction visual system. This does not match any currently-live page, the current "Figure Edition" vocabulary, or the current task history (which shows the flip-card system already retired — task #1 references a "Workbook/deprecated archive"). `AwakenArts_Master_Brief_Reorientation_2026-05-18.docx` appears to be the document that moved the project away from this language toward the current Christ-centered, Figure-Edition-based identity. **Nothing has been changed or deleted based on this — these documents are old enough, and different enough from everything else surveyed, that they read as superseded rather than current.** Flagging rather than silently discarding, per the standing "no document is rewritten without being told to" discipline. **Open question for Susan:** confirm these two documents (and the underlying "Within the Circle" / Threshold framing) are retired, so they can be marked as such rather than left ambiguous in the repository.

4. **The currently-built Workshop Kit's relationship to Family B is unstated.** `/workshops` and `/facilitator-orientation` are live today and teach the Recognition Model generally. Book 01 and the Guide Series teach the same underlying method but organized tightly around specific Figures, with a far more elaborate nine-component commercial structure. Is the live kit a free or low-cost general-audience product that coexists permanently alongside the (future, paid) Figure-specific guides — functioning the way the Book 01 Blueprint describes the Participant Teaching Guide as "the entry product" — or is it an earlier, lighter prototype that the Figure-specific guides are meant to eventually replace? Both documents are silent on this relationship.

5. **Nine of fifteen Figures have no product home at all.** Merri and Ballerina have a planned-but-unspecified guide slot; Bear, Dove, Chess, King, Ladybug, Angel, Church, and Pottery have no Figure Edition, no guide slot, and no Edition built. Whether and when these become products at all is undecided — flagged as a real gap in "the complete family," not assumed to be future Books 02–06 by default.

---

## Part Five — Open Questions for Susan

1. Does Book 01 (six coequal Figure sections) supersede "The Mermaid and Other Works" as defined in the Series Architecture document? If so, what becomes of the other five proposed guides (The Queen, The Vessel, The Dragon, The Ballerina, Merri)?
2. Confirm "Vessel" = Bowls so guide/book copy can use one name consistently.
3. Confirm whether `docs/FORWARD_BRIEF_PRODUCTION_PHASE.md` and `docs/THE_FORMS.md` (the "Within the Circle" / Threshold vocabulary) are retired, so they can be marked superseded rather than left ambiguous.
4. What is the intended long-term relationship between the currently-built Workshop Kit (`/workshops`) and the future Figure-specific Guide Series / Book 01 — permanent coexisting tier, or prototype to be replaced?
5. What happens to the nine Figures with no product assigned (Merri, Ballerina have a planned slot; Bear, Dove, Chess, King, Ladybug, Angel, Church, Pottery have none)?
6. This document deliberately does not propose pricing — the Book 01 Blueprint leaves all four bundle prices as "TBD" and this document follows that lead. Pricing remains open.
7. Carried forward, unchanged, from the Implementation Log: the Purchasing/entitlement mechanism (Open Decision #1) and the `/collection` / `/poems` room-placement questions (Task #272) still need answers before the Owner House or the Transition zone can be built.

---

## Part Six — How This Reconciles With the Implementation Roadmap

Per the Initiative: "the implementation roadmap should then become the construction plan for the publishing business rather than a sequence of independent website features." This document does not replace the Implementation Specification, the Publishing Platform Architecture doc, or the Reader Design Revision Plan — it sits above them as the product-family context those documents' roadmaps should now be read against.

Concretely, this means: the Reader Platform engineering work already underway (Dragon's pilot, Grismere as the Featured Reader) is, and remains, the correct starting point — it is Family A, the most foundational and already-furthest-along product family. The Spec's deliberately sequenced future-capabilities list in the Implementation Log (Dragon proof → five-Edition rollout → commerce → Collections → workshop platform → retreat platform → presentation/slide libraries → facilitator resources → additional educational products) already, independently, follows the same dependency order this document's product families imply: Family A before Family B, free/relationship products (Family D) running alongside both. No resequencing is being proposed here.

What this document adds is the missing middle layer: Family B (the Guide Series / Book 01 / Master Curriculum) is far larger and more developed in existing documentation than the Implementation Log's brief "workshop platform" and "facilitator resources" line items suggested. Once Susan resolves Part Five's open questions, Family B's roadmap (the Book 01 Blueprint's own fourteen-step production sequence, Part Four of that document) can be folded into the Implementation Log as its own tracked workstream, the way Reader Platform already is.

**Per the Initiative's own instruction, no further implementation resumes — on any product family — until Susan has reviewed this document.**
