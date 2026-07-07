# AwakenArts — Commerce & Production Architecture

**Status: Governing document. Issued 2026-07-01.**

This is the permanent commerce and production blueprint for AwakenArts. It defines how every product is created, presented, sold, fulfilled, and expanded — independent of any specific software, vendor, or commerce platform.

The Production System (`AwakenArts_Production_System.md`) answers *how* products are made. This document answers *why* each product exists, *what* it earns, *who* it serves, and *when* it enters commerce. The two documents are read together as the complete operating architecture.

---

## Part One — Commercial Identity

### AwakenArts is a publishing imprint, not an online store.

This distinction governs every commerce decision. A store optimizes for conversion. A publishing imprint builds a body of work and offers it to readers who are ready for it. These are different postures, and they produce different architectures.

A publishing imprint:
- Does not discount to drive volume
- Does not interrupt the reader experience with commerce
- Prices its work to reflect quality and to sustain ongoing production
- Builds long-term reader relationships, not one-time transactions
- Offers commerce as a natural extension of the work — not as its purpose

AwakenArts' commercial identity follows from its editorial identity. The site already behaves like a carefully edited publication rather than a marketing website. The commerce system follows the same discipline: quiet, confident, unhurried, and always in service of the work.

### The governing commercial principle

**Commerce at AwakenArts serves the work. The work does not serve commerce.**

This means:
- A visitor who browses the Gallery and buys nothing has had a complete experience. The Gallery is not a funnel — it is a room.
- A reader who downloads a Figure Edition PDF and never returns has received something real. The relationship was not incomplete.
- A customer who purchases a fine art print is acquiring a work that already has meaning. The purchase does not create the meaning; it expresses it.

This principle does not make AwakenArts non-commercial. It makes commerce a natural consequence of the work's value rather than a mechanical extraction from it.

### What AwakenArts will not do commercially

The following commerce practices are incompatible with AwakenArts' identity and are not adopted:

- Countdown timers, "limited time" urgency language, or manufactured scarcity
- Pop-ups, overlays, or interruptions that appear during browsing
- Discount codes, flash sales, or volume pricing
- Upsell sequences or abandoned-cart email campaigns
- Affiliate programs or third-party advertising
- Bundle deals designed to increase order value rather than serve the reader
- "Free plus shipping" offers or other bait-and-switch pricing

These exclusions are architectural. They are not reconsidered case by case.

---

## The Nature of the Work

AwakenArts publishes authored symbolic works.

Every Figure Edition originates in a completed artistic and literary work created by Susan Ann Shepler. Commerce exists to distribute these works in forms appropriate to their purpose — digital publication, gallery print, greeting card, book, workshop, or future publication.

Products are expressions of the work, not the work itself.

This distinction explains why the production system is structured the way it is, and why it produces what it produces. A Figure Edition exists because a symbolic work was completed and deserves a complete publication. A fine art print exists because a figure was painted and deserves to be seen on a wall. A greeting card exists because an image was created that deserves to move from hand to hand.

No product at AwakenArts is manufactured to fill a catalog gap. Every product exists because a completed work naturally lends itself to that form. This is the organizing principle behind the entire commercial architecture, and it is what separates a publishing imprint from a product line.

---

## Part Two — Revenue Architecture

### 2.1 — The Free/Paid Distinction

AwakenArts operates a deliberate free/paid model. The distinction is not "give away the inferior thing, sell the better thing." It is "give away the encounter, offer ownership of the work."

**What is always free:**
- Browsing the Gallery, Encounters, Collection, and all site rooms
- Reading Edition previews on the site
- The Encounter Journal PDF (email-gated — requires an email address, which begins the reader relationship)
- All symbolic content presented on the site (poem excerpts, encounter texts, recognition prompts)

**What is offered for purchase:**
- Figure Edition PDFs (the complete designed publication)
- Fine art prints (Edition Art Prints — archival quality, for display)
- Greeting cards (Sketchbook Works — downloadable and physical)
- Books and other publications (future)
- Workshop and retreat attendance (existing; governed separately)
- Licensing (future; inquiry-based)

**The governing logic:** A visitor can experience the full encounter — see the figure, read the poem, engage with the reflection — through the free site experience. The purchase is an act of ownership: taking the complete, designed work into their life. The purchase page exists at the natural conclusion of that desire, not as an interruption along the way.

### 2.2 — Revenue Streams

The complete map of AwakenArts revenue, organized by product family:

**Stream A — Figure Editions (Digital Publications)**
Product: Complete 12-page Figure Edition PDF
Current status: Free to download (discovery phase — no payment gate yet)
Future status: Priced publication once commerce infrastructure is in place
Revenue character: Core product; the highest-margin digital offering; grows as new Editions are published

**Stream B — Edition Art Prints (Fine Art Prints)**
Product: Archival fine art prints of Edition figure artwork
Standard format: 8 × 10 inches; additional sizes available
Revenue character: Premium offering; lower volume but higher per-unit value; grows automatically as new Editions are published

**Stream C — Sketchbook Works (Greeting Cards)**
Product A: Downloadable greeting card PDF (print-at-home)
Product B: Print-on-demand physical greeting card
Revenue character: Accessible price point; highest potential volume; serves sharing and gifting; independent of Figure Edition production cadence

**Stream D — Books and Publications (Future)**
Product: Designed books, workbooks, and journals
Revenue character: High-value individual purchases; builds on the body of work already created; likely lower volume than cards but higher per-unit value than digital PDFs

**Stream E — Workshops and Retreats (Existing)**
Product: Facilitated sessions using AwakenArts materials
Revenue character: Highest per-customer revenue; capacity-constrained; governed separately from digital/physical product commerce

**Stream F — Licensing (Future)**
Product: Rights to use AwakenArts artwork in specified commercial contexts
Revenue character: Inquiry-based; variable; requires individual negotiation and Susan's personal approval for each license

### 2.3 — Revenue Sequencing

Revenue streams are developed in sequence, not simultaneously. Each stream depends on the infrastructure established by the prior one.

**Current phase (Discovery):**
Stream A (PDFs) is the only active stream, and it is free. The goal of this phase is establishing readership, building the email list, and proving demand before pricing.

**Next phase (Initial Commerce):**
Stream B (Edition Art Prints) and Stream C (Sketchbook Works) launch once fulfillment providers are selected (see Part Five). These do not require changes to the editorial or production system — only fulfillment setup and purchase page wiring.

**Following phase (Full Commerce):**
Stream A (PDFs) transitions to a priced model once Streams B and C are established and the purchasing infrastructure is proven. The first Edition to be priced may remain free as the permanent lead work.

**Future phases:**
Streams D (Books) and F (Licensing) follow as the catalog and relationships mature. Stream E (Workshops) continues on its own cadence.

### 2.4 — Pricing Architecture

Specific prices are set per product at the time of production. The architecture below defines the pricing model — the principles by which prices are determined — not the prices themselves.

**Pricing principles:**

*Reflect the work's quality and the production investment.* AwakenArts is a literary publishing imprint with a defined production standard. Prices should reflect that — not match the lowest available alternative, not compete on price.

*Price for the long-term reader, not the impulse buyer.* AwakenArts' customers are people who have encountered the work, spent time with it, and arrived at a purchase with intention. They are not impulse buyers. Pricing should serve that relationship, not exploit it.

*Maintain consistent pricing across the catalog.* All Figure Editions should be the same price. All 8×10 archival prints should be the same price. All A2 greeting cards should be the same price. Catalog consistency signals that the work is valued equally, regardless of which figure it represents.

*Never discount, but consider tiered access.* A lower price point for a downloadable card vs. a physical card is not discounting — it reflects a genuine difference in product. The same work at two price points for two formats is appropriate. The same work at a lower price because it has not sold is not.

**Pricing tiers by product family (reference ranges — not final prices):**
- Downloadable greeting card: accessible (single-digit dollars)
- Physical greeting card: low (low double-digit, inclusive of card)
- Figure Edition PDF: mid (reflects the designed publication's value)
- Fine art print, 8×10: premium (reflects archival quality and production)
- Fine art print, larger: above premium (scales with size and production cost)
- Books: mid-to-premium (reflects length and production quality)

---

## Part Three — The Customer Journey

Commerce at AwakenArts follows a natural relationship arc. Customers do not arrive knowing they want a product. They arrive encountering the work — and the commercial relationship develops from that encounter.

### Stage 1 — First Encounter

*Who:* A visitor who has found AwakenArts for the first time — through search, a referral, a shared greeting card, or any other path.

*What they experience:* The site as a literary publication. One or two rooms. The work itself — a figure, a poem, an encounter.

*What is asked:* Nothing. No email. No account. No decision. The visitor is given the experience freely, and the experience earns their attention or it does not.

*Commerce role:* None. The product of Stage 1 is a first impression of quality.

### Stage 2 — Becoming a Reader

*Who:* A visitor who has spent real time with the work and wants to take something away.

*What they experience:* The Encounter Journal download gate, or a Figure Edition preview that leads to the Collection.

*What is asked:* An email address (for the Encounter Journal) or the first voluntary navigation deeper into the site.

*Commerce role:* The email address begins the reader relationship. This is not a marketing lead — it is the beginning of ongoing contact with someone who found the work meaningful. The Encounter Journal is the fulfillment of that first exchange.

*Email relationship (Kit integration):* Readers who provide an email address receive the Encounter Journal and are added to the AwakenArts list. Future emails are occasional, content-led (a new Edition announcement, a new Sketchbook Work, a workshop opening) — not promotional sequences. The email relationship mirrors the site: publication-like, not sales-like.

### Stage 3 — Deepening Engagement

*Who:* A reader who returns — who has read a Figure Edition, explored the Gallery, or spent time with the Collection.

*What they experience:* The full catalog. Edition preview pages. The Sketchbook. The ability to see the range of the work.

*What is asked:* Still nothing. The site continues to serve without requiring action.

*Commerce role:* Familiarity. A reader who has seen six Editions and knows their quality has already done the work of deciding whether they trust AwakenArts. When a purchase opportunity arrives, it arrives for a reader who is already prepared.

### Stage 4 — First Purchase

*Who:* A reader who has decided to own something — to take the work from the site into their life.

*What they experience:* A purchase page that presents the product simply and honestly. No urgency. No upsell. One clear action.

*First purchase profile:* The most accessible purchase — a downloadable greeting card or a Figure Edition PDF — is the most likely first purchase. It is low-commitment and immediately satisfying. The fine art print is more likely a second or third purchase, made by someone who already knows the work.

*Commerce role:* Fulfillment of an existing desire. The purchase page does not persuade — it completes.

### Stage 5 — Collector / Advocate

*Who:* A customer who has purchased more than once, or who is actively sharing the work.

*What they experience:* New Editions and Sketchbook Works as they are published. New products that extend what they already value.

*What is asked:* Continued engagement — which the work earns by remaining worth returning to.

*Commerce role:* Ongoing catalog growth sustains this relationship. A customer who has purchased three Editions will notice when a fourth is published. A customer who sent a greeting card is already doing the work of advocacy — the card is in someone else's hands.

---

## Part Four — Catalog Architecture

### 4.1 — The Catalog Structure

The AwakenArts catalog is organized by product family, not by date or by Figure. Within each family, works are organized by the Figure Edition they originate from (for Edition Art Prints) or by the collection they belong to (for Sketchbook Works).

**Current catalog:**

| Family | Works | Status |
|---|---|---|
| Figure Editions | Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann | Published — free to download |
| Edition Art Prints | Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann | Eligible; not yet in commerce |
| Sketchbook Works | A Collection of Feminine Motifs | In production; no works published yet |

**Maximum catalog size per phase:**
There is no maximum. The catalog grows as production capacity allows, in the sequence defined by `AwakenArts_Production_Roadmap.md`. Quality is the only constraint on catalog growth.

### 4.2 — Catalog Expansion Rules

New works enter the catalog through the production system, in order:
1. Classified (Phase 1 of Production System)
2. All assets produced (Phase 2)
3. Review passed (Phase 3)
4. Product prepared (Phase 4)
5. Fulfillment wired (Phase 5)
6. Published to site (Phase 6)

No work is published to the site before reaching Phase 6. No work is offered for purchase before its purchase page is complete and its fulfillment path is confirmed.

### 4.3 — Catalog Status Management

Every work in the catalog carries a status that determines its site behavior. (Full status definitions in `AwakenArts_Production_System.md`, Section 6.3.)

The catalog never shrinks — works move to `archived` status rather than being removed from the record. The Gallery and Sketchbook pages may display only `published` works; the internal catalog retains everything.

### 4.4 — Seasonal Considerations

Some product families are seasonal by nature. Greeting cards have higher gift-giving demand in Q4 (November–December) and around specific occasions (Mother's Day, Valentine's Day, birthdays). This does not change the production system, but it should inform:
- The timing of Sketchbook Work launches (a new work published in October serves the Q4 gift season; the same work published in February does not)
- Future calendar products (which are inherently annual)
- Workshop scheduling (which may align with seasons of reflection)

Seasonal awareness is a production planning consideration, not a commercial urgency tactic. AwakenArts does not discount for seasons or create artificial scarcity around holidays.

---

## Part Five — Commerce Platform Requirements

AwakenArts' commerce architecture is platform-independent. Any fulfillment platform that satisfies the requirements below is a candidate. The requirements are derived from the product families and the commercial identity — not from any platform's capabilities.

### 5.1 — Universal Requirements (All Platforms)

- **Payment processing:** Accepts major credit and debit cards; supports one-time purchases (not subscriptions)
- **Brand neutrality:** Customer-facing communications (receipts, shipping notifications) can be branded as AwakenArts or are minimal enough not to undermine the identity
- **No mandatory marketplace:** The product can be sold exclusively from awakenarts.com without requiring a presence on the provider's own marketplace
- **Customer trust:** The platform is widely recognized and trusted for secure transactions
- **Simple setup:** Does not require extensive ongoing technical maintenance
- **Reporting:** Provides clear sales, revenue, and order data

### 5.2 — Digital Delivery Requirements (Figure Editions, Downloadable Cards)

- Delivers a file (PDF) to the customer immediately after purchase
- File delivery does not expire or require ongoing subscription access
- The download link is sent to the customer's email address
- No customer account is required to receive the download

### 5.3 — Physical Fulfillment Requirements (Fine Art Prints, Physical Cards)

- **Print quality:** Produces archival-quality fine art prints (acid-free paper, fade-resistant inks, archival standards) — confirmed by sample evaluation before commitment
- **No minimum order quantity:** Produces single units on demand
- **Fulfillment time:** Standard production and shipping time is reasonable and communicated clearly to customers
- **Size range:** Covers at least 8×10 through 16×20 for fine art prints; A2 and A6 for greeting cards
- **Shipping:** Ships to at minimum the United States; international shipping available or planned

### 5.4 — Platform Separation Model

AwakenArts may use different platforms for different product families. There is no requirement that a single platform handle everything. The following platform separation is acceptable and may be preferable:

- **Digital downloads** (Figure Editions, downloadable cards): one platform
- **Fine art prints** (Edition Art Prints): one platform
- **Physical greeting cards** (Sketchbook Works): one or the same platform as prints

The purchase pages on the site link to whichever platform handles each product. The customer does not need to know which platform is used — they see only the AwakenArts purchase page, then complete their transaction at the provider.

### 5.5 — What Platform Choice Does Not Change

Regardless of which platforms are chosen:
- The production system does not change
- The asset specifications do not change
- The pricing architecture does not change
- The site room structure does not change
- The customer journey does not change

Platform choice is an implementation decision within a stable architecture.

---

## Part Six — Site Commerce Architecture

This section defines how the AwakenArts website — its rooms, pages, and components — supports commerce without becoming a store.

### 6.1 — The Architectural Sequence (Commercial Reading)

The AwakenArts Architectural Sequence was defined for editorial reasons. It also functions as a commercial architecture, because the sequence naturally leads a visitor from encounter to decision:

```
Homepage → Encounters → Gallery → Collection → Edition Preview → Purchase
```

| Room | Commercial function |
|---|---|
| Homepage | First impression; establishes identity; no commerce |
| Encounters | Deepens engagement with the work; no commerce |
| Gallery | Builds familiarity with the catalog; no purchase links by directive |
| Collection | Entry to Edition purchase path; links to Edition Preview |
| Edition Preview (`/editions/[slug]`) | Full Edition presentation; context for purchase; links to Purchase |
| Edition Purchase (`/editions/[slug]/purchase`) | Completes the Figure Edition and Edition Art Print purchase paths |
| Sketchbook (`/sketchbook`) | Introduces Sketchbook Works; links to individual work pages |
| Sketchbook Work (`/sketchbook/[slug]`) | Completes the Sketchbook Work purchase path |

The Gallery is the one room that deliberately breaks the commercial sequence. Its purpose is appreciation, not conversion. Visitors who arrive in the Gallery and leave having purchased nothing have still had a complete experience.

### 6.2 — Purchase Page Requirements

Every purchase page on the site follows the same standard, regardless of product family.

A purchase page must include:
- The work's title and originating family (Figure Edition, Edition Art Print, or Sketchbook Work)
- A high-quality image of the product
- A clear, plain-language description of exactly what the customer receives (digital file / physical print / physical card)
- Product specifications (size, format, delivery method)
- The price
- A single clear action (the purchase link or button)
- Return/replacement policy (brief, honest)

A purchase page must not include:
- Urgency language ("Only 3 left," "Sale ends soon")
- Comparison to a "regular price" or crossed-out pricing
- Multiple competing calls to action
- Upsell or cross-sell offers on the same page as the primary purchase action
- Social proof widgets, star ratings, or review counts

### 6.3 — Email Commerce Integration

The Kit email integration (`/api/subscribe`) is already in place and captures email addresses from the Encounter Journal download gate. As commerce expands, this integration extends:

- **New Edition announcements:** Sent to the list when a new Figure Edition is published
- **New Sketchbook Work announcements:** Sent to the list when a new card is available
- **Workshop openings:** Sent to the list when a workshop has available seats
- **Annual catalog note:** A single annual message summarizing the year's publications

Email communication is publication-like: infrequent, content-led, worth receiving. The list is not segmented by purchase history or used for re-targeting campaigns. Subscribers are readers, not leads.

### 6.4 — Analytics Requirements

AwakenArts tracks commerce performance to understand which products are resonating — not to optimize conversion rates through A/B testing or behavioral targeting.

Minimum analytics:
- Page views per room (which rooms are visited most)
- Downloads per Figure Edition PDF
- Purchase count per product
- Email list growth rate

These metrics inform production decisions (which figures to develop next, which product types are working) without compromising the site's character as a publication.

---

## Part Seven — Governance of Commercial Expansion

### 7.1 — How New Revenue Is Added

New revenue streams and product types are added in sequence, not simultaneously. Each new stream should satisfy three criteria before development begins:

1. **Production readiness:** The production system can support it (assets can be produced, reviewed, and prepared without creating new infrastructure)
2. **Identity alignment:** The product is consistent with AwakenArts' character as a literary publishing imprint
3. **Demand signal:** There is evidence — from reader engagement, email list activity, or direct expression of interest — that the product would be meaningful to existing readers

Revenue is not added simply because a category is available or a platform makes it easy. The production calendar governs timing. The commercial identity governs suitability.

### 7.2 — The One-Platform-at-a-Time Rule

When adding a new fulfillment platform, add one at a time. Confirm that the first platform is working before adding a second. The simplest possible commerce configuration is the right one until complexity is justified by volume.

### 7.3 — The Catalog-First Commitment

AwakenArts builds a catalog — a body of work — rather than a store. A store can be built around one product. A catalog requires many works produced to a consistent standard over time. The production system exists to make that consistency possible.

Every commerce decision is evaluated against the catalog: does this serve the long-term body of work, or does it trade the catalog's coherence for short-term revenue?

### 7.4 — Commercial Expansion Sequence

The following sequence governs when new revenue streams are activated. No stream is skipped, and no stream is added before the prior stream is operating.

**Step 1 (Current):** Figure Editions available free — build readership and email list.

**Step 2:** Edition Art Prints commerce — fine art prints available for purchase from Edition purchase pages. Requires: fulfillment provider selected and sampled; purchase page updated for each Edition.

**Step 3:** Sketchbook Works commerce — greeting cards available (downloadable first, then physical). Requires: first artwork images provided; sketchbook tiles live; individual work pages built; fulfillment provider selected.

**Step 4:** Figure Edition PDFs transition to priced model. The first-published Edition (Dragon) may remain permanently free as the lead work. Requires: Steps 2 and 3 operating; purchasing infrastructure proven.

**Step 5:** Books and extended publications. Requires: consistent publishing cadence demonstrated; reader relationship established through Steps 1–4.

**Step 6+:** Licensing, calendar, limited editions, and other product families as the catalog and relationships mature.

### 7.5 — What Will Not Change

Regardless of how far commerce expands:

- The site will continue to feel like a literary publication, not an online store
- The Gallery will continue to have no purchase links
- Urgency, scarcity, and discount tactics will not be used
- The work will remain the reason for the site's existence; commerce will remain the mechanism that sustains it

These are not temporary constraints. They are the foundation of the AwakenArts commercial identity, and they are architectural.

---

## Appendix — Document Relationships

This document governs the commercial architecture. It is read alongside:

- `AwakenArts_Production_System.md` — how products are made (the operational complement to this document)
- `AwakenArts_Production_Rules.md` — classification discipline that precedes both documents
- `AwakenArts_Publishing_Platform_Architecture.md` — the platform vision from which the commercial architecture derives
- `AwakenArts_Product_Architecture.md` — the product family definitions (draft)
- `AwakenArts_Editorial_Identity_and_Design_Standard.md` — the identity standard that governs every commerce decision
- `AwakenArts_Production_Roadmap.md` — the sequencing that determines when new products enter commerce

When any of these documents and this one appear to conflict, the conflict is resolved by returning to the governing commercial principle: **commerce serves the work; the work does not serve commerce.**

---

*Issued 2026-07-01. Update `AwakenArts_Documentation_Map.md` in the same commit whenever this document is amended.*
