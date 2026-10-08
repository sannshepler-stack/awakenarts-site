# AwakenArts — Production System

**Status: Governing document. Issued 2026-07-01.**

This is the master production standard for AwakenArts. It governs every product from artwork creation through customer delivery, independent of software, vendors, or commerce platforms. Commerce platforms plug into this system — they do not determine it.

When a new work enters production, this document is the operating manual. It answers every "how do we produce this?" before the question is asked.

---

## Governing Principle

Every product AwakenArts offers begins with original symbolic artwork and ends with a specific customer experience. The production system exists to make the path between those two points repeatable, consistent, and independent of any single platform or vendor.

---

## Phase 1 — Product Classification

Every new work is classified before any other production step begins. Classification determines everything that follows: which assets are required, which review standards apply, which purchase pages are built, and which fulfillment path is used.

### The Three Product Families

**Family A — Figure Edition**
A complete, designed publication presenting a single symbolic figure through image, poem, and structured reflection. The Figure Edition is the master publication. Every other AwakenArts product either originates from a Figure Edition or exists alongside it.

Criteria:
- The work is a complete symbolic encounter (figure + poem + recognition sequence)
- It follows the 12-page Figure Edition sequence (governed by `Figure_Edition_Standard_Dragon.md`)
- It is built as a designed PDF with full production standards applied
- It undergoes a formal editorial review before publication

**Family B — Edition Art Print**
Collectible fine art originating from a completed Figure Edition. The Edition Art Print is the figure artwork — the central image of the Edition — offered as a standalone fine art print.

Criteria:
- The work originates from a completed, published Figure Edition
- The artwork is the Edition's own figure image (not a companion image, motif, or atmospheric photograph)
- The purpose is wall display: archival quality, framed or unframed
- It remains explicitly connected to its originating Edition

**Family C — Sketchbook Work**
Original artwork by Susan Ann Shepler, independent of the Figure Edition production system. Currently expressed through *A Collection of Feminine Motifs*.

Criteria:
- The work is original artwork created outside the Figure Edition system
- It is not intended as a symbolic encounter (no poem, no recognition sequence)
- The purpose is sharing, gifting, or sending: greeting cards and related paper products
- It lives in the Sketchbook, not the Gallery or Collection

### The Classification Decision

Before production begins, ask two questions in order:

1. Is this work part of a Figure Edition? If yes → **Family A**.
2. Is the purpose display (wall art) or sharing/gifting (cards, paper products)?
   - Display → **Family B** (Edition Art Print, originates from a Figure Edition)
   - Sharing/gifting → **Family C** (Sketchbook Work, independent)

**Production Rule No. 4 (in force):** Every commercial product must originate from a published work. AwakenArts does not create products to fill a catalog. A product enters production because a completed work naturally lends itself to that form. See `AwakenArts_Production_Rules.md`.

**Production Rule No. 1 (in force):** Never confuse Edition Art Prints with Sketchbook Works. These are separate product families with separate production paths, assets, purchase pages, and customer experiences. A work's classification is determined by its intended role in the AwakenArts architecture — not by its visual style, subject matter, or the medium it was created in. A feminine portrait may be a Figure Edition figure, an Edition Art Print (if it comes from a Figure Edition), or a Sketchbook Work (if it is original independent artwork) — the visual similarity between them is irrelevant to classification.

**Production Rule No. 2 (in force):** Website rooms are presentation spaces, not product families. The Gallery displays Edition Art Prints; it is not itself a product family. Never classify a product according to the page where it appears. See `AwakenArts_Production_Rules.md`.

---

## Phase 2 — Asset Production

Every product at AwakenArts passes through the same production chain before it reaches a customer:

**Original Artwork → Master Artwork → Production Assets → Website Assets → Print Masters → Products**

- **Original Artwork** — the physical work: the painting on paper, the photograph, the finished illustration. This exists before any digital file exists. It is governed by the *Artwork Production Standard* (anticipated; see Documentation Map).
- **Master Artwork** — the highest-quality digital capture of the Original Artwork: a professional scan or calibrated photograph at the maximum available resolution. The master is the source from which all derivatives are produced. It is never distributed directly and never placed in `/public/`.
- **Production Assets** — intermediate processed files derived from the master: color-corrected, cropped, and exported as working files. The starting point for all downstream preparation.
- **Website Assets** — screen-optimized derivatives: JPEG, sRGB, sized and compressed for fast loading. Never used for print.
- **Print Masters** — high-resolution print-ready files prepared from the master artwork: TIFF at 300 DPI with bleed, meeting fulfillment provider specifications.
- **Products** — the customer-facing deliverables: Edition PDFs, fine art prints, downloadable card PDFs, physical cards.

Assets are prepared in chain order. No step is skipped. No product moves to Phase 3 (Review) with incomplete assets.

### 2.1 — Master Artwork (Digital Capture)

The master artwork is the original, highest-quality digital file. It is the source from which every other asset is derived. It is never distributed directly to customers. It is never placed in `/public/`.

| Family | Master File | Requirements |
|---|---|---|
| Figure Edition | Assembled PDF at final production resolution | All pages present; PDF/X-1a or PDF/A preferred for archival; all fonts embedded |
| Edition Art Print | Highest-resolution scan or photograph of the original artwork | TIFF preferred; minimum 300 DPI at intended print size; sRGB or Adobe RGB |
| Sketchbook Work | Highest-resolution scan or photograph of the original artwork | TIFF preferred; minimum 300 DPI at intended card size; sRGB or Adobe RGB |

**Storage:** Master files are stored offline (external drive, archival cloud storage) and in a designated `/masters/` directory that is excluded from the repository via `.gitignore`. They are never committed to the git repository or placed in a publicly accessible directory.

**Naming:** `[family-code]-[slug]-master.[ext]`
- Figure Edition: `ed-[slug]-master.pdf` → e.g., `ed-dragon-master.pdf`
- Edition Art Print: `ep-[edition-slug]-master.tif` → e.g., `ep-dragon-master.tif`
- Sketchbook Work: `sk-[work-slug]-master.tif` → e.g., `sk-feminine-01-master.tif`

---

### 2.2 — Website Assets

Web display assets are served from the public site. They are always optimized for screen (sRGB, JPEG, compressed for fast loading) and never used for print.

#### Figure Edition — Website Assets

| Asset | Purpose | Dimensions | Format | Storage Path |
|---|---|---|---|---|
| Contact sheet | Edition preview in Collection grid | 1200 × 900 px (landscape) | JPEG, sRGB, 80% | `/public/images/editions/[slug]-contact-sheet.jpg` |
| Figure crop | Gallery tile, poems tile | 900 × 1125 px (4:5 portrait) | JPEG, sRGB, 82% | `/public/images/editions/[slug]-figure.jpg` |
| Atmospheric image | Encounter pages, atmospheric headers | 1920 px wide × variable height | PNG or JPEG, sRGB | `/public/images/atmosphere/[slug].png` |

#### Edition Art Print — Website Assets

| Asset | Purpose | Dimensions | Format | Storage Path |
|---|---|---|---|---|
| Gallery tile | Gallery page display | 900 × 1125 px (4:5 portrait) | JPEG, sRGB, 82% | `/public/images/gallery/ep-[slug]-tile.jpg` |
| Purchase page image | Edition purchase page | 1200 × 1500 px (4:5 portrait) | JPEG, sRGB, 82% | `/public/images/gallery/ep-[slug]-display.jpg` |

Note: For Edition Art Prints that are the same image as the Edition figure crop, the existing `/public/images/editions/[slug]-figure.jpg` may serve both purposes. A separate Edition Art Print display image is prepared when the Edition Art Print merits its own dedicated higher-resolution crop or treatment.

#### Sketchbook Work — Website Assets

| Asset | Purpose | Dimensions | Format | Storage Path |
|---|---|---|---|---|
| Sketchbook tile | Sketchbook page grid | 600 × 750 px (4:5 portrait) | JPEG, sRGB, 82% | `/public/images/sketchbook/sk-[slug]-tile.jpg` |
| Work display | Individual work page | 1200 × 1500 px (4:5 portrait) | JPEG, sRGB, 82% | `/public/images/sketchbook/sk-[slug]-display.jpg` |
| Card preview | Purchase page, card front preview | 1275 × 1650 px (A2 card) | JPEG, sRGB, 82% | `/public/images/sketchbook/sk-[slug]-card-preview.jpg` |

---

### 2.3 — Print Masters

Print masters are prepared from the master artwork and used to fulfill print product orders. They are stored offline alongside the master files — never in `/public/`.

| Family | Asset | Minimum Resolution | Format | Notes |
|---|---|---|---|---|
| Edition Art Print | Fine art print master | 3000 × 3750 px (10×12.5" at 300 DPI) — covers 8×10 with bleed | TIFF, sRGB or Adobe RGB | Larger is always better; prepare at the maximum resolution the original artwork permits |
| Sketchbook Work | Greeting card print master | 1650 × 2175 px (5.5×7.25" at 300 DPI, A2 with bleed) | TIFF, sRGB | Include 0.125" bleed on all sides; prepare separate front and back files |

**Color space note:** sRGB is universally accepted by print-on-demand providers. Adobe RGB provides a wider gamut and is preferred for professional offset printing. When the fulfillment provider is chosen, confirm their color space requirement and prepare accordingly. The master file should be kept in the widest available color space; sRGB derivatives can always be produced from it.

**Naming:**
- `ep-[slug]-print-master.tif` → e.g., `ep-dragon-print-master.tif`
- `sk-[slug]-card-front-master.tif` → e.g., `sk-feminine-01-card-front-master.tif`
- `sk-[slug]-card-back-master.tif` → e.g., `sk-feminine-01-card-back-master.tif`

---

### 2.4 — Downloadable Masters (Customer-Facing)

These files are delivered directly to customers. They must be complete, print-ready, and self-contained.

| Family | Asset | Specifications | Notes |
|---|---|---|---|
| Figure Edition | Edition PDF | Final production PDF; all fonts embedded; optimized for download (~10–30 MB target) | `/public/files/editions/[Figure]_Figure_Edition.pdf` — already in place for all 6 editions |
| Sketchbook Work | Downloadable greeting card PDF | Print-at-home quality; A2 or A6 size; 300 DPI equivalent; full bleed included; customer instruction note on reverse side or separate page | Delivered via fulfillment platform (e.g., email link after purchase) |

---

### 2.5 — Greeting Card Layouts (Sketchbook Only)

A complete greeting card product requires two designed surfaces.

**Front panel:** The artwork, presented with sufficient margin. The AwakenArts signature (Susan Ann Shepler) appears on the front if the artwork's composition permits it — consistent with the artist's established practice for signed artwork.

**Back panel:** Contains:
- AwakenArts wordmark (small, restrained)
- "Original artwork by Susan Ann Shepler"
- AwakenArts.com
- Copyright line: "© [Year] Susan Ann Shepler. All rights reserved."
- Card dimensions and "Printed on [paper type]" if applicable
- No descriptive text, no explanation of the artwork — the back serves the publication, not the symbolic content

**Card sizes:**
- A2 (4.25" × 5.5" folded) — standard greeting card; most widely available envelopes
- A6 (4.75" × 6.5" folded) — larger card; appropriate for artwork with significant detail

The initial collection launches with A2 unless the artwork's proportions clearly favor A6. Both sizes may be offered from the same artwork once the first size is established.

**Layout file naming:**
- `sk-[slug]-card-a2-front.tif` / `sk-[slug]-card-a2-back.tif`
- `sk-[slug]-card-a2-layout.pdf` (combined print-ready PDF, front and back)

---

### 2.6 — Asset Checklist Summary

Before any product moves to Phase 3, confirm all required assets are complete.

**Figure Edition:**
- [ ] Master PDF complete (all 12 pages, fonts embedded)
- [ ] Contact sheet prepared and optimized
- [ ] Figure crop prepared and optimized
- [ ] Atmospheric image prepared (if applicable)

**Edition Art Print:**
- [ ] Print master prepared (minimum resolution met)
- [ ] Gallery tile prepared
- [ ] Purchase page display image prepared

**Sketchbook Work:**
- [ ] Master artwork file archived
- [ ] Sketchbook tile prepared
- [ ] Work display image prepared
- [ ] Card front master prepared
- [ ] Card back master prepared
- [ ] Card layout PDF prepared (print-at-home download)
- [ ] Card preview image prepared (for purchase page)

---

## Phase 3 — Product Review

Every product undergoes review before release. Review confirms that assets are complete, that the product meets its family's production standards, and that the work is ready for publication.

Review is a gate — nothing proceeds to Phase 4 without passing it.

### 3.1 — Figure Edition Review

The Figure Edition undergoes a full editorial review following the model established by Dragon Figure Edition No. 01 (see `Dragon_Editorial_Responses.md`). The production checklist below confirms technical readiness independent of editorial review.

**Production Checklist — Figure Edition:**

Sequence and Structure:
- [ ] All 12 pages present in the correct sequence
- [ ] Page count is the result of the sequence, not a predetermined target
- [ ] Every external reference is resolved (published resource, AwakenArts note, or removed)

Content:
- [ ] Poem presented exactly as authored (line breaks, spacing, shaped composition if applicable)
- [ ] Observe section directs dual awareness (figure + reader response), not descriptive inventory
- [ ] Message Delivered is a declaration, not a summary
- [ ] Facilitator Notes marked NOT FOR PARTICIPANT DISTRIBUTION
- [ ] Group Questions extend reflection; do not duplicate it

Visual:
- [ ] Color palette: deep navy, terracotta/amber, gold, cream — no additional primary colors on content pages
- [ ] Dark/light page rhythm follows the emotional arc: Encounter (dark) → Understanding (cream) → Reflection (dark) → Declaration (dark) → Resource (cream)
- [ ] Every visual decision serves the symbolic journey, not decoration
- [ ] Motif page presents a companion image that expands the symbolic world without explaining it

Typography:
- [ ] Section labels follow approved system
- [ ] No "&" on the journaling page
- [ ] Conventional typesetting or shaped composition — no hybrid treatment

Colophon:
- [ ] AwakenArts publishing identity present
- [ ] Series identification present
- [ ] Copyright line present: "© [Year] Susan Ann Shepler. All rights reserved."
- [ ] Publication year present
- [ ] Website reference present (AwakenArts.com)
- [ ] Brief author statement present

---

### 3.2 — Edition Art Print Review

**Production Checklist — Edition Art Print:**

Classification:
- [ ] Work correctly classified as Edition Art Print (not Sketchbook Work)
- [ ] Originating Figure Edition confirmed and published
- [ ] Connection to Edition documented

Assets:
- [ ] Print master meets minimum resolution (3000 × 3750 px or larger)
- [ ] Print master archived in designated offline storage
- [ ] Web display assets prepared and optimized
- [ ] Gallery tile prepared at correct dimensions

Content:
- [ ] Work title matches the Edition (do not rename the figure for the Gallery)
- [ ] Attribution correct: original artwork by Susan Ann Shepler
- [ ] Copyright information confirmed

---

### 3.3 — Sketchbook Work Review

**Production Checklist — Sketchbook Work:**

Classification:
- [ ] Work correctly classified as Sketchbook Work (not Edition Art Print)
- [ ] Independence from Figure Edition system confirmed
- [ ] Confirmed as original artwork by Susan Ann Shepler

Assets:
- [ ] Master artwork archived
- [ ] Sketchbook tile prepared at correct dimensions (600 × 750 px)
- [ ] Work display image prepared (1200 × 1500 px)
- [ ] Card front master prepared (TIFF, 300 DPI, with bleed)
- [ ] Card back master prepared (TIFF, 300 DPI, with bleed)
- [ ] Card layout PDF prepared (print-at-home quality)
- [ ] Card preview image prepared

Card design:
- [ ] Artwork presented with sufficient margin on front panel
- [ ] Artist signature on front panel (if composition permits)
- [ ] Back panel contains: AwakenArts wordmark, artist credit, website, copyright line
- [ ] Back panel contains no descriptive text, no explanation of the artwork
- [ ] Card size confirmed (A2 or A6)

---

## Phase 4 — Product Preparation

Approved assets become products. Product preparation is the step between "review complete" and "available for purchase."

### 4.1 — Figure Edition Products

**Primary product: The Figure Edition PDF**
- Status: Complete for all six current editions (Dragon, Bowls, Ballerina, Grismere, Poppy, Queen Ann)
- Delivery: Direct download from `/public/files/editions/`
- Currently free to access — purchasing architecture reserved for future implementation

**Companion product: Fine Art Print (see Edition Art Print)**
Every published Figure Edition automatically creates an eligible Edition Art Print. The figure artwork from the Edition is the Edition Art Print. No additional creation is required — product preparation for the Edition Art Print begins when the Edition is published.

---

### 4.2 — Edition Art Print Products

**Product: Archival Fine Art Print**

Standard offering:
- 8 × 10 inches, archival quality (acid-free paper, fade-resistant inks)
- Additional sizes available upon request through the fulfillment provider

Product record (prepared per work):
- Work title: matches the Edition figure title
- Edition connection: "From the [Figure] Figure Edition — AwakenArts"
- Sizes available: 8×10 (standard); additional sizes listed if offered
- Price: set per work, consistent with AwakenArts positioning as a literary publishing imprint
- Fulfillment method: [designated fulfillment provider — see Phase 5]
- Product URL: [fulfillment provider product page URL]

Purchase page: The Edition Art Print is purchased from `/editions/[slug]/purchase`. The purchase page includes the product record above plus a link to the fulfillment provider's product page for that work.

---

### 4.3 — Sketchbook Work Products

**Product A: Downloadable Greeting Card (Print-at-Home)**
- Delivery: PDF download after purchase
- File: Card layout PDF, print-at-home instructions included
- Price: set per work
- Fulfillment: digital download via fulfillment platform (see Phase 5)
- Product URL: [fulfillment platform product URL]

**Product B: Print-on-Demand Greeting Card (Physical)**
- Delivery: Printed and shipped by fulfillment provider
- Specification: A2 or A6 (per card design), printed on [provider's card stock]
- Price: set per work (higher than downloadable, reflecting physical production and shipping)
- Fulfillment: print-on-demand via fulfillment provider (see Phase 5)
- Product URL: [fulfillment platform product URL]

Both products are available from the same individual Sketchbook Work page (`/sketchbook/[slug]`).

---

### 4.4 — Future Products

Any future product — book, journal, calendar, licensed artwork, collection bundle — follows this same Phase 4 structure:
1. Identify the product's delivery method (physical / digital / licensed)
2. Prepare the product record (title, description, sizes/variants, price, fulfillment method, product URL)
3. Identify the purchase page on the site
4. Prepare any product-specific assets not already covered by Phase 2

The production system does not change when a new product type is added. A new entry in Phase 2 (Asset Production) and Phase 4 (Product Preparation) extends the system without restructuring it.

---

## Phase 5 — Fulfillment Options

The production system is independent of fulfillment platform. This phase documents the options available so that a fulfillment decision can be made from a position of knowledge. The choice of platform does not change any prior phase.

**What a fulfillment platform must do:**
- Accept artwork files at the resolutions specified in Phase 2
- Produce products that meet the quality standard AwakenArts represents
- Allow the product to be sold from the AwakenArts website (not exclusively from the provider's own marketplace)
- Enable clear attribution and branding consistent with AwakenArts identity
- Handle payment processing, customer communication, and returns

### Fine Art Prints (Edition Art Prints)

| Platform | Model | Strengths | Considerations |
|---|---|---|---|
| **Fine Art America / Pixels** | Marketplace + direct sales | Largest fine art POD marketplace; handles framing, canvas, multiple sizes, global shipping; artists maintain their own storefront; no monthly fee | Artwork is indexed on FAA's own marketplace, which creates additional discovery but also means the work appears in a context AwakenArts does not control |
| **Printful** | On-demand fulfillment (white-label) | Integrates via API or manual orders; white-label (no Printful branding on packaging); handles both fine art prints and greeting cards; wide size range; worldwide shipping | Requires integration work or manual order entry; no marketplace discovery — all traffic must come from your own site |
| **Gelato** | On-demand fulfillment (white-label) | 140+ print partners globally (faster/cheaper local shipping); handles prints and cards; growing format catalog; API available | Smaller fine art print format selection than FAA or Printful; less established for fine art specifically |
| **Local/regional printer** | Custom production per order | Highest quality control; ability to specify paper, inks, finish precisely; relationship with the printer | Manual fulfillment (you receive the print, you ship); does not scale; requires inventory or per-order handling |

### Greeting Cards (Sketchbook Works)

| Platform | Model | Strengths | Considerations |
|---|---|---|---|
| **Gumroad** | Digital product delivery | Instant delivery of downloadable PDFs; simple setup (hours, not days); low fees (percentage of sale only, no monthly fee); works immediately | Digital only — no physical card production or shipping |
| **Printful** | POD greeting cards + digital | Handles both physical greeting cards and digital downloads; API integration; white-label; worldwide shipping | Physical cards require minimum specifications; setup takes more time than Gumroad |
| **Gelato** | POD greeting cards | Strong greeting card product; 140+ local print partners; no minimum order; worldwide shipping | API or manual; less known for digital download delivery |
| **Moo** | Premium print orders | High-quality card stock; distinctive brand; finish options (soft-touch, spot UV) | Requires minimum print runs (not per-order); not a traditional POD model; less suitable for individual on-demand orders |

### Recommended Evaluation Criteria

When choosing fulfillment providers, evaluate in this order:
1. **Product quality** — request samples before committing. The product must represent AwakenArts at the level its identity requires.
2. **Brand neutrality** — packaging, communications, and the customer experience should not prominently feature the fulfillment provider's brand.
3. **Integration simplicity** — favor a provider that requires the least ongoing manual intervention per order.
4. **Scalability** — the provider should be able to handle the volume of a growing catalog without renegotiation.
5. **Price and margin** — evaluate net margin per product at realistic volume, not just per-unit cost.

No fulfillment platform is selected in this document. Selection is Susan's decision, made after product samples are evaluated.

---

## Phase 6 — Website Integration

This phase describes how completed products enter the AwakenArts website and how the site handles product status, metadata, and purchase routing.

### 6.1 — The Room Architecture

AwakenArts' Architectural Sequence determines where products appear:
Homepage → Encounters → Gallery → Collection → Edition Preview → Purchase

Each room has a defined role. Products are added to the room that matches their purpose, not the most visible available space.

| Room | URL | Role | Products displayed |
|---|---|---|---|
| Gallery | `/gallery` | Quiet appreciation; no purchase links; no decisions | Edition Art Prints presented as edition figure images; no purchase links |
| Collection | `/collection` | Entry to Figure Editions; links to Edition Preview | Figure Editions displayed by contact sheet; links to `/editions/[slug]` |
| Edition Preview | `/editions/[slug]` | Full edition presentation; themes, about, context | Figure Edition content; links to Purchase and PDF |
| Edition Purchase | `/editions/[slug]/purchase` | Purchase page for Figure Edition PDF + Edition Art Print fine art print | Figure Edition download; Edition Art Print print order link |
| Sketchbook | `/sketchbook` | Artwork browsing; leads to individual Sketchbook Work pages | Sketchbook Work tiles; links to `/sketchbook/[slug]` |
| Sketchbook Work | `/sketchbook/[slug]` | Individual work page; greeting card purchase | Work display; Download card link; Physical card link |

### 6.2 — Product Metadata

Every product on the site is described by a consistent metadata record. The current site uses `src/data/editions.ts` for Figure Editions. As Edition Art Prints and Sketchbook Works are added, their metadata follows the same pattern.

**Figure Edition metadata (current):**
```
slug, title, kicker, about, themes, contactSheet, pdf, figureImage, atmosphericImage
```

**Edition Art Print metadata (to be added):**
```
slug, editionSlug, title, printSizes[], price, fulfillmentUrl, displayImage, galleryTile
```

**Sketchbook Work metadata (to be added when `/sketchbook/[slug]` pages are built):**
```
slug, title, collection (e.g., "A Collection of Feminine Motifs"), 
cardSize, downloadUrl, printUrl, price, displayImage, tile, cardPreview
```

### 6.3 — Product Status

Every product has a status. Status determines whether a product appears on the site and in what state.

| Status | Meaning | Site behavior |
|---|---|---|
| `in-production` | Assets being prepared | Does not appear on site |
| `in-review` | Assets complete; undergoing Phase 3 review | Does not appear on site |
| `approved` | Review passed; Phase 4 preparation underway | Does not appear on site |
| `published` | Fully live; purchase enabled | Appears in appropriate rooms with purchase links active |
| `display-only` | Live but not yet available for purchase | Appears in Gallery/Sketchbook without purchase links |
| `archived` | No longer offered; retained for historical record | Does not appear in active rooms |

The Gallery is always `display-only` by architectural directive — it shows published works with no purchase links regardless of product status.

### 6.4 — Adding a New Work to the Site

**Figure Edition:**
1. Add entry to `src/data/editions.ts`
2. Place PDF in `/public/files/editions/`
3. Place contact sheet, figure crop, and atmospheric image in their respective directories
4. The Edition immediately appears in Collection and Gallery (via the data file)
5. Build purchase page content at `/editions/[slug]/purchase`

**Edition Art Print:**
1. When an Edition is published, its Edition Art Print is automatically eligible
2. Prepare Edition Art Print display image and tile if not already present
3. Create fulfillment provider product listing and capture the product URL
4. Add purchase section to `/editions/[slug]/purchase` with product URL

**Sketchbook Work:**
1. Prepare all Phase 2 assets (tile, display, card masters, card layout PDF)
2. Upload card layout PDF to fulfillment platform; capture download URL and/or physical card URL
3. Add entry to Sketchbook Work data (to be created alongside `src/app/sketchbook/[slug]` route)
4. Place tile image in `/public/images/sketchbook/`
5. Update `PIECES` array in `/src/app/sketchbook/page.tsx` to include new tile
6. Build individual Sketchbook Work page at `/sketchbook/[slug]`

---

## Phase 7 — Future Scalability

The production system accommodates additional product families without changing its architecture. Classification, asset production, review, preparation, fulfillment, and website integration are the same stages regardless of what the product is. What changes is the content of each stage, not the stages themselves.

### Future Product Families

**Books**
- Classification: standalone literary publication; governed by its own editorial and production standard
- Phase 2 assets: designed PDF master, cover image, interior layout files
- Phase 3 review: manuscript review + production quality review (separate standards)
- Phase 4: print-on-demand physical book + downloadable PDF
- Website integration: dedicated `/books/[slug]` page; purchase from that page

**Journals / Workbooks**
- Classification: designed writing or practice journals associated with AwakenArts content
- Phase 2 assets: interior page layouts, cover design, PDF master
- Phase 4: print-on-demand (spiral-bound or perfect bound); possibly downloadable PDF
- Website integration: Collection-adjacent; linked from relevant Edition pages

**Calendars**
- Classification: annual publication; 12 works selected from the published catalog each year
- Phase 2 assets: 12 edition figures (already prepared); cover design; layout file per month
- Phase 4: print-on-demand calendar; ships in autumn of prior year
- Website integration: `/shop` or Collection page; seasonal availability

**Limited Editions**
- Classification: a Edition Art Print offered in a numbered, signed print run
- Phase 2 assets: same as Edition Art Print, plus certificate of authenticity design
- Phase 3 review: includes verification of print quality and consistency across the run
- Phase 4: physical production with manual quality control; numbered and signed by Susan
- Website integration: Edition Purchase page, distinct from open-edition print offering

**Collections / Bundles**
- Classification: a curated set of existing products offered together at a set price
- No new Phase 2 assets required — uses existing product assets
- Phase 4: bundle pricing; fulfillment routes each component through its normal path
- Website integration: Collection or Sketchbook page; distinct purchase page per bundle

**Licensing**
- Classification: rights granted to use AwakenArts artwork for commercial purposes
- No Phase 2 asset production required — master artwork already exists
- Phase 3 review: legal review of proposed use; Susan's approval required for every license
- Phase 4: licensing agreement; usage guidelines; delivery of approved artwork file at agreed specifications
- Website integration: no public purchase page; contact-based inquiry only

### The Expansion Rule

When a new product family is identified, the following questions are answered in order before production begins:

1. Where does this product fit in the Classification framework (Phase 1)?
2. What assets does it require, and what are their specifications (Phase 2)?
3. What does review look like for this product (Phase 3)?
4. How does an approved asset become a product (Phase 4)?
5. What fulfillment method is appropriate (Phase 5)?
6. Where does it appear on the site, and what metadata does it require (Phase 6)?

Answering these six questions extends the production system without restructuring it.

---

## Quick Reference — The Production Path

| Stage | Figure Edition | Edition Art Print | Sketchbook Work |
|---|---|---|---|
| **Classify** | Complete symbolic encounter → Family A | Originated from published Edition → Family B | Independent original artwork → Family C |
| **Master asset** | Production PDF | High-res TIFF of figure artwork | High-res TIFF of original artwork |
| **Key web assets** | Contact sheet, figure crop, atmospheric image | Gallery tile, purchase display image | Sketchbook tile, work display, card preview |
| **Print master** | (PDF is the product) | TIFF, 300 DPI, 3000×3750 px min | TIFF, 300 DPI, front + back with bleed |
| **Customer download** | Edition PDF | (not downloadable — physical print only) | Card layout PDF (print-at-home) |
| **Review gate** | Editorial review + production checklist | Production checklist | Production checklist |
| **Purchase location** | `/editions/[slug]/purchase` | `/editions/[slug]/purchase` | `/sketchbook/[slug]` |
| **Gallery room** | Displayed in `/gallery` (no links) | Displayed in `/gallery` (same tile as Edition figure) | Displayed in `/sketchbook` |

---

*Issued 2026-07-01. This is a living production standard — update it as new product families are added, fulfillment decisions are made, or production standards evolve. Update `AwakenArts_Documentation_Map.md` in the same commit.*
