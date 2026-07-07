# AwakenArts Production Roadmap

**Status: Governing document — locked 2026-06-30, per Susan's directive "Establish the AwakenArts Production Roadmap."**

**Purpose.** This is not a planning document or a vision statement. It defines the order in which work is completed so that each phase supports the next and the publishing house grows in a deliberate, sustainable way. From this point forward, it is the primary production guide for AwakenArts. New ideas may continue to emerge, but work should be completed according to this sequence unless there is a compelling reason to alter it. The goal is steady, coherent development rather than simultaneous expansion in every direction.

**Document hierarchy, updated.** `AwakenArts_Publishing_Platform_Architecture.md`, the Implementation Specification, and the Implementation Log already govern vision, technical blueprint, and build record respectively (see the Publishing Platform Architecture doc's "Document hierarchy" section). This Roadmap sits above all three as the sequencing layer: it does not replace any of them, it governs the *order* in which their content gets acted on. Within any phase, those three documents still govern what gets built and how.

---

## Guiding Principle

The objective is not simply to create more content. The objective is to publish, present, and sustain a coherent body of work.

Every future task should support that objective.

---

## Phase One — Complete the Website

Complete the public-facing architecture before expanding products.

This includes:

- Final homepage refinement.
- Final About page.
- Artist's Sketchbook integration.
- Gallery architecture.
- Review and refinement of every Figure Edition preview page.
- Design and implementation of all Edition purchasing pages.
- Product pages prepared for future commerce.

## Phase Two — Establish the Publishing System

Build the infrastructure that allows products to be offered consistently.

Define:

- Figure Edition production standards.
- Print specifications.
- Greeting card specifications.
- Packaging standards.
- Print-on-demand fulfillment.
- Payment and purchasing workflow.

The objective is to establish one publishing system capable of supporting multiple product lines.

## Phase Three — Publish the Initial Catalog

Launch the first complete public offering.

This includes:

- Initial Figure Editions.
- Gallery prints derived from those Editions.
- Initial Artist's Sketchbook collection.
- Greeting card collection.
- Purchase workflow fully operational.

The emphasis should be on quality and coherence rather than quantity.

## Phase Four — Companion Resources

Once the published works are available, develop the educational layer.

This includes:

- Companion Resources.
- Reflection Guides.
- Facilitator Notes.
- Workshop slides.
- Workshop structure.
- Downloadable resources.

These remain secondary to the published Figure Editions and should support rather than replace them.

## Phase Five — Marketing and Audience Development

Only after the publishing system is functioning should marketing become a primary focus.

Develop a coordinated strategy for:

- Personal artistic presence.
- AwakenArts presence.
- Artist's Sketchbook.
- Social media.
- Workshops and presentations.
- Email communication.
- Future video content.

Marketing should invite people into the publishing house through multiple entry points rather than relying on a single audience.

---

## Product Architecture

The roadmap continues to recognize three distinct product families.

### Figure Editions

The published symbolic works.

- Printed Editions.
- Digital Editions.
- Companion Resources.
- Workshops.

### Gallery

Products derived from published Figure Editions.

- Archival prints.
- Future print collections.
- Optional print upgrades.

Every Gallery product originates from a published Figure Edition.

### Artist's Sketchbook

Susan Ann Shepler's continuing body of original artwork.

This area will gradually include:

- Original artwork.
- Greeting cards.
- Studio prints.
- Future visual collections.

The Sketchbook represents the artist's ongoing creative practice and complements, rather than replaces, the AwakenArts publishing program.

---

## How This Reconciles With Existing Documents

**Supersedes the four-family draft in `AwakenArts_Product_Architecture.md`.** That document (drafted 2026-06-29, still marked "Draft — pending Susan's review," never approved) proposed four product families (A: Figure Editions, B: the Workshop Guide Series/Book 01, C: the currently-built Workshop Kit, D: free/relationship products). This Roadmap's three-family model — Figure Editions, Gallery, Artist's Sketchbook — is Susan's own simplification and is now the governing product-family definition. `AwakenArts_Product_Architecture.md` is left in place, unedited, as a record of the surveying work that was done and the open questions it raised (Part Five of that document), but its four-family structure no longer governs; this Roadmap's three-family structure does. Where that document's open questions (guide-series naming, the nine unproduced Figures, pricing, etc.) become relevant, they should be read as questions to resolve *within* Phase Two or Phase Four of this Roadmap, not as a competing architecture.

**Confirms, rather than changes, the "each Figure Edition is the center of its own product family" decision** (Implementation Log, 2026-06-29): Gallery prints and companion materials extend a Figure Edition rather than existing independently of one. That decision is restated here as "every Gallery product originates from a published Figure Edition."

**Where Open Decision #1 (Purchasing mechanism, Implementation Log) now lives.** Phase One calls for Edition purchasing *pages* to be designed and implemented — the visible structure visitors will eventually use. Phase Two is where the actual *payment and purchasing workflow* — the still-undecided mechanism referenced as Open Decision #1 — gets resolved and wired in. Building the pages in Phase One does not require that decision to be made first; making the pages functional does.

**Where the in-progress Reader revision work sits (#256, #260–263).** The web Reader is part of the Figure Editions product family's Digital Editions. Its revision was already paused, pending Susan's acceptance, before this Roadmap was issued. That pause stands; resuming it falls naturally under Phase One ("review and refinement of every Figure Edition preview page") or Phase Two ("Figure Edition production standards"), whichever Susan prefers once she's ready to pick it back up — this Roadmap does not resolve that choice on her behalf.

---

## Phase Status (as of 2026-06-30)

This section is a snapshot, not part of the governing text above. It will go stale as work proceeds and is not maintained the way the Implementation Log is — it exists only to anchor this Roadmap's first day against what was already true of the site at the moment the Roadmap was established.

**Phase One — in progress.** Homepage, About page, and Sketchbook integration have all had recent rounds of refinement (most recently, the About-page closing links and the Sketchbook placeholder gallery, 2026-06-30). Gallery architecture is live. Figure Edition preview pages exist for all six live Editions but have not had a dedicated review pass under this Roadmap yet. Edition purchasing pages exist at `/editions/[slug]/purchase` but are structural only — no live payment workflow (see Phase Two). No product pages for future commerce beyond Editions exist yet (no Gallery-print or Sketchbook-product pages).

**Phase Two — not started.** No Figure Edition production standard, print spec, greeting card spec, packaging standard, or print-on-demand fulfillment plan exists yet. Payment/purchasing workflow is the carried-forward Open Decision #1 in the Implementation Log.

**Phase Three — not started.** No catalog has been launched; the six Editions, the Gallery, and the Sketchbook are all presented but none are purchasable end-to-end yet.

**Phase Four — partially exists, pre-Roadmap.** A Workshop Kit (curriculum, facilitator orientation, participant handouts, intake/feedback forms) was already built and is live at `/workshops` and `/facilitator-orientation`, predating this Roadmap. It was built out of sequence relative to this phase ordering; per the Guiding Principle, no further Phase Four work should be added until Phases One through Three are substantially complete, and the existing kit's relationship to a future, Figure-specific companion-resource model remains one of `AwakenArts_Product_Architecture.md`'s open questions.

**Phase Five — not started as a coordinated strategy.** Some individual pieces exist in isolation (the free Encounter Journal email-gate, the Journal's email relationship), but no coordinated marketing/audience-development strategy across personal presence, AwakenArts presence, Sketchbook, social media, workshops, email, and video has been built.

**Net effect:** the site is mid-Phase-One. Per this Roadmap's own sequencing, Phase Two should not begin in earnest until Phase One's remaining items (Edition preview review, purchase-page completion, commerce-ready product pages) are finished — and Phases Three through Five wait on Phase Two.
