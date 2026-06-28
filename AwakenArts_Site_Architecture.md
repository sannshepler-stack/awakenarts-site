# AwakenArts — Site Architecture

*Living reference for the site's navigation and content structure. Last revised 2026-06-24 — governing direction, all open questions resolved.*

*Governed by `AwakenArts_Editorial_Identity_and_Design_Standard.md` (locked 2026-06-25) — the imprint-wide identity document covering philosophy, brand identity, visual language, writing standards, and product standards across every AwakenArts product, not just the website. This document is the technical implementation reference for that identity as expressed in the Next.js site. Where the two disagree, the identity document wins.*

AwakenArts is no longer organized as a collection of pages. It is organized around a guided experience.

## Global Page Architecture Standard (locked 2026-06-25) — governing standard

This is the publishing architecture of AwakenArts. Every primary page on the site inherits this structure automatically; it supersedes any nav/footer descriptions further down this document that predate it (e.g. the older "4-item nav" and Gallery references under "Encounters architecture" below are historical record, not current). Susan's words: *"Up to now, you've been designing pages. What you've just arrived at is the publishing architecture of AwakenArts. From this point forward, every new page Claude builds can inherit this framework automatically, which will make the entire site feel like one coherent literary work rather than a collection of individual pages."*

**Guiding principle:** Visitors should always know where they are, where they can continue, and when they have reached the natural conclusion of a page. The structure should feel editorial rather than web-like. Navigation should never compete with the work — whenever possible, the work itself becomes the navigation. The site should feel like moving through chapters of a carefully designed book rather than browsing a conventional website.

**Universal Page Structure** — every primary page follows this sequence:
1. Global Header Navigation
2. Optional Editorial Header Image (where appropriate)
3. Page Title / Introduction
4. Primary Page Content
5. Global Wayfinding Band
6. Standard Footer

**Global Header Navigation** — the dark navigation at the top (unchanged): HOME (optional if the logo links home) · ENCOUNTERS · COLLECTION · POEMS · JOURNAL · ABOUT. Implemented in `src/components/Nav.tsx` — the AwakenArts wordmark already links home, so a separate HOME item isn't needed there.

**Editorial Header Images** — function as visual thresholds, not decorative banners. Each prepares the visitor for what follows: Biblical Foundation → quiet landscape; Poetry → manuscript / written language; Collection → symbolic atmosphere; About → optional portrait or no header; Journal → contemplative atmosphere. Always restrained, never competing with page content, never with text embedded inside the image. (Site-wide rollout of this system is tracked separately — see "Still open / noted for later" / task backlog; Poetry's manuscript header is live, Collection/About/Journal headers are not yet built.)

**Primary Content** — each page develops its own rhythm; the body of each page remains unique.

**Global Wayfinding Band** — a permanent architectural element, cream/gold (not dark), appearing immediately above the footer on every major page. Universal site navigation only: HOME · ENCOUNTERS · COLLECTION · POEMS · JOURNAL · ABOUT. It is quiet, generously spaced, and answers one question: *the visitor has completed this page — where would they like to continue?* It is not a footer and not page-specific navigation. Implemented once in `src/components/WayfindingBand.tsx`, reused everywhere — single source of truth.

**Standard Footer** — every page ends with the same footer: AwakenArts logo, short description, Explore links, About links, copyright. No page terminates without it; the footer communicates completion. Implemented once in `src/components/Footer.tsx` (built 2026-06-25, reusing the existing `FooterSocial` component for the social row), reused everywhere — single source of truth. As of this writing, every primary page (`/`, `/encounters` + all 5 encounter pages, `/collection`, `/poems`, `/journal`, `/journal/[category]`, `/about`) renders `<WayfindingBand />` immediately followed by `<Footer />`. Retired/unlinked pages (`/studio`, `/studio/silhouettes`, `/quotes`, `/gallery`) were deliberately left out of this pass since they're no longer reachable from primary nav.

**Encounter Page Standard** — Encounters follow the same architecture with one distinction: Global Header Navigation → Encounter Introduction → Encounter Cards → generous breathing space → Global Wayfinding Band → Standard Footer. The cards themselves are the navigation. There is no parallel text-listing of the stages ("Encounter I · Encounter II · Encounter III...") — it would duplicate the cards, not scale as new encounters are added, and weaken the visual presentation. The cards already communicate the sequence (Journey / The Deep / The Table / The Word / Continue); future encounters simply become additional cards, and the architecture never changes. (The earlier `ExperienceNav` component that listed the stages as text has been removed entirely — deleted from the codebase, not just restyled — per this directive.)

**Architectural principle, restated:** the visitor moves naturally through image, language, and symbol before making navigational decisions. Future pages should be built to inherit this structure from the start, not have it retrofitted afterward.

## Unlisted Page System (locked 2026-06-27)

A recurring need: a page should exist, fully built and live on the production site, without being publicly discoverable yet — so Susan can call it up by direct URL (in a meeting, an email, a proposal) before deciding whether it belongs in primary navigation. This is the standing recipe for that. It is a system, not a one-off: any future page can follow it.

**An unlisted page still inherits the full Universal Page Structure** (Nav → content → WayfindingBand → Footer) — it looks and feels like any other page on the site. The only difference is discoverability:

1. **No entry in `src/components/Nav.tsx`'s `links` array.**
2. **No entry in `WayfindingBand.tsx`'s `PRIMARY_LINKS` or `Footer.tsx`'s link sets** (those two stay untouched — they are the locked, fixed link sets described above).
3. **`robots: { index: false, follow: true }`** added to the page's own `metadata` export, so search engines don't index it.
4. **The route added to `DISALLOWED_PATHS` in `src/app/robots.ts`** — belt-and-suspenders, matching the existing convention used for the set-aside encounter routes (`/encounters/vase`, `/encounters/dragon`, etc.).

The page is reachable by anyone who has the URL, renders identically to a published page, and ships through the normal commit/push/deploy pipeline — it simply isn't *linked* from anywhere on the site yet.

**To publish an unlisted page later:** remove its `robots` override, remove it from `DISALLOWED_PATHS`, and add it to `Nav.tsx` (and WayfindingBand/Footer if it belongs in universal navigation). Two reversible steps — promotion never requires rebuilding the page.

**Current roster of unlisted pages:**
- `/workshops` — built 2026-06-27, content-complete, withheld from navigation until Susan decides to publish it.
- `/facilitator-orientation` — built 2026-06-27, companion to `/workshops`; mirrors `AwakenArts_Facilitator_Orientation.pdf` as a single scrollable page rather than a multi-page sequence, consistent with the site's "one page, many chapters" rhythm.

**Unlisted File Access (same system, applied to raw files, 2026-06-27):** the source documents behind the Workshops materials needed to exist on the live site, in their original created form (not rebuilt as web pages), reachable by direct link, sharable later but not yet. Same recipe as an unlisted page, applied to static files instead of routes:

1. File placed in `public/files/workshops/` (follows the existing `public/files/editions/` convention used for the Figure Edition PDFs) — Next.js serves anything under `public/` at a matching URL automatically, no route code needed.
2. `/files/workshops/` added to `DISALLOWED_PATHS` in `src/app/robots.ts` — keeps the directory out of search results.
3. Not linked from anywhere on the site yet — `/workshops` and `/facilitator-orientation` don't surface these links, so they're reachable only to someone with the exact URL.

**Current roster of unlisted files** (all under `https://awakenarts.com/files/workshops/`):
- `AwakenArts_Workshop_Curriculum.docx`
- `AwakenArts_Facilitator_Orientation.pdf`
- `AwakenArts_Participant_Handouts.pdf`
- `AwakenArts_Intake_Consent_Form.pdf`
- `AwakenArts_Session_Feedback_Form.pdf`
- `AwakenArts_Guide_to_Symbolic_Facilitation.pdf`

**To make one shareable later:** just send the direct link — no further build needed. To make one *discoverable*, remove its `/files/workshops/` disallow entry (or move it to a public-facing files directory) and link to it from a page.

## AwakenArts Global Design System (locked 2026-06-25) — rollout complete

This is the technical implementation of Section 3 ("Visual Language") of `AwakenArts_Editorial_Identity_and_Design_Standard.md`. Six typographic roles, two structural standards, and one image philosophy now govern every primary page — established once as CSS custom properties in `src/app/globals.css` `:root`, referenced everywhere via `var(--token)`, never adjusted by eye page to page.

**Typography tokens** — applied across all 8 primary pages (homepage, Encounters index + 5 detail pages, Collection, Poems, Journal index + category pages, About):
- `--h1-size` / `--h1-weight` — every page title.
- `--h2-size` / `--h2-weight` — every section title.
- `--label-size` / `--label-weight` / `--label-tracking` — every gold category label (uppercase, sans-serif). Fixed one outlier in the process: Collection's `.col-hero__eyebrow` was gray, not gold — corrected to `var(--gold)`.
- `--subtitle-size` / `--subtitle-line` — every gold/italic subtitle beneath a title. Fixed three outliers that weren't actually gold: Poems' `.lib-hero__sub` (was mist), Collection's `.col-hero__sub` (was navy), About's `.about-credentials` (was mid-gray) — all corrected to `var(--gold)`/`var(--gold-lt)` per the rule that subtitles are always gold.
- `--body-size` / `--body-line` — every editorial paragraph, site-wide. This is a single fixed specification (no `clamp()`, no responsive font-size step-down) — previously ~20 rules ranged 0.95rem–1.2rem with their own per-page clamp curves; a stray mobile override on About's `.about-body` (which would have shrunk text below the standard) was removed.
- `--link-size` / `--link-weight` / `--link-tracking` — every small uppercase link/CTA (`.hero-cta`, `.text-link`, `.poem-card__cta`, `.wordFormLink`, the Wayfinding Band's primary links). Serif/italic "read more" style links (`.home-coll-cta`, `.col-archive-cta__link`) are a deliberately distinct treatment, not converted — they're an editorial-prose link style, not the small-caps CTA role.

**Text Width Standard** — three tiers only, applied to every paragraph's `max-width`: `--measure-narrow` (640px), `--measure-medium` (760px), `--measure-wide` (1100px). Previously 15+ px values and 12+ ch values were in use with no system; all converted to the nearest tier (most editorial paragraphs landed on Medium).

**Vertical Rhythm Standard** — `--band-gap` / `--band-gap-md` / `--band-gap-sm` is the single value for "end of primary content → Global Wayfinding Band," applied identically on all 8 pages (see rollout detail in the now-superseded per-page band-gap tasks; this is the same token family referenced in Section 3 of the identity document).

**"Pause" tier — tried and retired (2026-06-27):** a second, longer tier (`--band-gap-pause`/`-md`/`-sm`, fixed at 1.5x `--band-gap`) was introduced for the Encounters index on the theory that a page closing on a terminal visual statement (the five doorway cards) earns a longer breath before the Wayfinding Band than a page closing on prose. After the structural bug below was fixed and the gap actually became visible on a live build, Susan reported it read as "quite distanced" compared to every other page — the extra 1.5x, once genuinely visible, broke the very consistency the site-wide audit below was trying to establish. Retired the same day: Encounters now uses the plain `--band-gap`/`-md`/`-sm` tokens, identical to every other page, with no exception. The tokens are removed from `globals.css :root`. Lesson for any future "this page is different" instinct: prefer the universal token first and only introduce a variant tier after confirming the difference still looks right once the gap is actually rendering (not just in isolation/in theory).

**Structural bug found and fixed (2026-06-27), same pass:** the gap above was invisible in practice because `WayfindingBand` and `Footer` were nested *inside* `<main className={styles.page}>` on this page only — every other page renders them as siblings *after* its `<main>`, per the Global Page Architecture Standard. With them nested, `.page`'s `padding-bottom` landed after the Footer (off-screen, since the Footer was already the page's last visible element) rather than between the card grid and the band. Fixed by moving `<WayfindingBand />` and `<Footer />` outside `</main>` in `page.tsx`. Worth checking for on any other page if a documented spacing value ever doesn't seem to render: confirm the band/footer are actually siblings of `<main>`, not children of it.

**Site-wide content→band gap audit (2026-06-27)** — prompted by Susan flagging the homepage's Matthew 13:34 closing section (`.poems-showcase-section`) as the reference "done nicely" example, and asking that the same comfortable, repeatable gap happen "on every page... as a certain repeatable path." Every page rendering `WayfindingBand` was checked against that reference for two things: (1) structural — is the band a true sibling of the page's content, not nested inside it; (2) value — does the gap use `--band-gap`/`-md`/`-sm` at all three breakpoints, the way `.poems-showcase-section` does, rather than a partial or hardcoded version of the system.

Structurally, every page already passed except Encounters (the bug above) — no other page repeats that mistake.

On values, only the homepage had the full three-tier rollout; every other page was missing the 1024px `--band-gap-md` tier (jumping straight from the desktop value to a sub-640px mobile override), and two pages had hardcoded, off-token values. Fixed in this pass:
- Added the missing `--band-gap-md` tier (at a `1024px` breakpoint) to: Collection's `.col-archive-cta`, Poems' `.poems-gallery-section`, About's `.about-main`, Journal index's `.wordFormSection`, Journal category's `.page`, Workshops' `.ctaSection`, Facilitator Orientation's `.closingNote`, and the shared `EncounterHero`'s `.closingStrip` (used by all 5 encounter detail pages).
- Collection's `.col-archive-cta` had a hardcoded `3rem`/`2.5rem` bottom padding — well under the site standard (`6rem`/`4rem`) and not wired to any token, despite an in-code comment framing it as deliberate. On closer reading, the deliberate part was the smaller *top* padding (pulling the CTA up near "A Path of Recognition," documented 2026-06-26); the bottom value just hadn't been converted. Changed to `var(--band-gap)` / `var(--band-gap-sm)` so the asymmetry (small top, standard bottom) stays the intentional choice while the actual band gap matches every other page.
- Gallery's `.gal-grid-section` (retired/noindexed page) had hardcoded `6rem`/`4.5rem` — converted to `var(--band-gap)`/`var(--band-gap-sm)` for consistency, even though this page is unlinked from primary nav.
- Gallery's page-local, hand-copied `<footer>` (stale "Path" and self-referencing "Gallery" links) was replaced with the shared `<Footer />` component, matching every other page — there's now exactly one footer implementation site-wide, with no exceptions.

Left as a known, deliberate variation rather than "fixed": Journal index and Journal category use a `560px` mobile breakpoint instead of the site's normal `640px`, because that breakpoint also governs unrelated layout rules on those pages (word-grid item sizing, nav stacking) — changing it would mean auditing rules well outside the band-gap system. The gap itself still resolves correctly at that breakpoint; only the breakpoint *number* differs from the convention used elsewhere.

**The repeatable check, going forward — "Pre-Wayfinding-Band Gap Checklist":** any time a page is built or edited, confirm:
1. `<WayfindingBand />` and `<Footer />` are JSX siblings that come *after* the page's content/`<main>` — never nested inside it.
2. The page's last content block's bottom spacing references `var(--band-gap)` (or `var(--band-gap-pause)` if that block is a terminal visual statement, not prose — see above) — never a hardcoded rem value.
3. All three breakpoints are covered: the bare desktop value, a `max-width: 1024px` override using the `-md` token, and a `max-width: 640px` override using the `-sm` token. Skipping the 1024px tier was the single most common gap found in this audit.

Following this each time keeps the homepage's reference gap reproducible everywhere, rather than something to re-discover and re-tune per page.

**Not yet converted (deliberately out of scope):** Encounters' poetry display text (`.scripture`, `.echo`) and reflective closing lines (`.closingLine`) keep their own sizing — they read as poetry, not paragraph prose, and Section 3's own principle ("consistency should never eliminate quietness... no page should feel mechanical") protects this distinction. Footer typography (heading/link/description hierarchy) was already standardized separately (see "Standard Footer" above) and is intentionally not part of this token set.

**Image Standard** — documented in Section 5 of the identity document (five categories: atmospheric headers, edition covers, encounter cards/hero backgrounds, demonstration images, symbolic compositions). Not yet implemented as shared CSS rules — Encounters renders its images via CSS `background-image`, not `<img>`/`next/image`, which the identity document flags as a known constraint for any future automated, `object-fit`-based image pipeline. Site-wide Editorial Header Image rollout (Collection/About/Journal) remains separately tracked as open work.

## Hero Editorial Invitations Standard (locked 2026-06-28)

Per Susan's "Hero Typographic Hierarchy" directive, the homepage hero's single small "Encounters →" CTA and its Studio/Poems secondary nav have been replaced with two **Editorial Invitations** — "Enter the Encounters" and "Explore the Collection" — each presented as a heading-weight link with its own teaser line beneath it, rather than as small navigation links. This is a content decision as much as a typographic one: the hero no longer says "here are some pages," it says "experience the work" or "explore the body of work" — the two primary entry points everything else on the site grows from.

**The hierarchy, locked:**
- Logo — unchanged.
- Hero headline ("When Language Shapes a Path") — unchanged, `--h1-size` (clamp 38.4px–56px desktop). Never reduced to make room for the invitations below it.
- Introductory sentence ("Discover symbolic language...") — unchanged, `--subtitle-size` (clamp ~19.8px–23.4px desktop).
- Editorial Invitation titles — new `--invitation-title-size` token, clamp(1.35rem, 2.2vw, 1.55rem) ≈ 24.3px–27.9px desktop, serif, gold, sized between `--h2-size` and `--link-size` so they read as section headings rather than links.
- Invitation teasers — new `--invitation-teaser-size` token, clamp(1rem, 1.2vw, 1.11rem) ≈ 18px–20px desktop, held to the `--body-size` floor (18px) per the Editorial Typography Standard's rule that supporting copy is never reduced below body size for visual effect.

**Where this pattern may extend.** Editorial Invitations were introduced as a hero-specific pattern but are tokenized globally (not hardcoded to `.hero-invitation*`) so any future page that wants to present two or three primary doorways at heading weight — rather than a row of small links — can reuse `--invitation-title-size`/`--invitation-teaser-size` directly.

## AwakenArts Editorial Typography Standard (locked 2026-06-28) — governing standard

Supersedes the original brief "Typography Standard" entry locked the same day; this is its full expansion, written directly from Susan's permanent editorial directive ahead of the Publishing Platform phase.

**Readability Primacy Rule (added 2026-06-28, per Susan's review of the homepage Collection section).** Stated in her own words, as the permanent governing sentence for every typography decision from here forward:

> AwakenArts is a publishing environment. Reading comfort always takes precedence over minimalist typography. If there is tension between elegance and readability, choose readability while preserving the site's quiet literary character.

This is not a restatement of "Readability First" below for emphasis — it is the rule that resolves any future disagreement between the two. It governs the homepage, the Collection page, the Edition Reader (once built), the Foundation page, and everything that follows. Practically: the audience is not a designer reviewing the site on a laptop. It includes church members, retreat participants, counselors, and thoughtful readers — many in their 50s, 60s, and 70s, including Susan herself, who reads with intraocular lenses. Never make people work to read. When a section's hierarchy is otherwise correct (heading and subhead read first, exactly as intended) but the reading text itself takes effort to read, the fix is to let the reading text — body copy and calls to action — read with the same confidence as the rest of the page, even if that means it is no longer the smallest, quietest element on screen. A publisher does not whisper the important sentences.

**AwakenArts is a reading experience.** It is not a design portfolio. It is not a marketing landing page. It is a literary publishing environment designed for thoughtful reading and reflection. Typography should always favor readability over visual minimalism.

**The governing hierarchy.** Every future typography decision is checked against this order, and the order itself is not negotiable:
1. The work is the reason the site exists.
2. The reading experience helps the reader engage the work.
3. The design supports the reading experience.

Design serves the reading experience; the reading experience serves the work. A change that serves the design first — quieter, lighter, more minimal — at the expense of the reading experience has the hierarchy backwards, regardless of how good it looks in isolation.

**Readability First.** Body copy stays comfortably readable on desktop, tablet, and mobile. Do not reduce font size simply to create more white space or a lighter visual appearance. If a section feels visually dense, the order of operations is: (1) edit the copy — shorten it, cut a sentence, split it into two paragraphs; (2) improve spacing — margin, padding, the gap between elements; (3) adjust line length / layout — width, alignment, what sits next to what; (4) only then, and only if it genuinely improves readability, consider type size — and never below the body-copy standard for paragraph prose. A page that looks lighter because the text got smaller has not gotten calmer — it has gotten harder to read, which is the opposite of the goal.

**Intended audience.** AwakenArts is written for adults who expect to spend time reading. The experience should invite lingering rather than scanning. Readers should never need to struggle to comfortably read the work. The editorial benchmark, per Susan: the audience includes readers like herself — at 75, with a lifetime of reading and teaching. She should not have to lean in to read her own work. If a typographic choice would make her lean toward the screen, it fails the standard regardless of how it looks in a mockup.

**Editorial philosophy.** White space comes from thoughtful composition, not from shrinking text. The site should feel like reading a beautifully published literary work — typography supporting contemplation rather than visual novelty.

**Consistency — the standard by category, current as of the 2026-06-28 audit:**

- *Body text.* One token, `--body-size: 1rem` (18px at this site's `html` font-size) / `--body-line: 1.8`, used identically for every paragraph of reading prose site-wide (`.foundation-body`, `.about-body`, `.hero-quote-body`, `.home-coll-body`, `.col-hero__body`, etc.). Never reduced below this for density.
- *Quotations.* Scripture, poem epigraphs, and pull quotes are set at or above the subtitle/body scale, never below it (`.hero-quote-text`, `.poems-showcase-intro__quote`, `.quote-text`) — quotations are permitted to scale *up* for emphasis on a title page or threshold moment, but the standard only ever moves that dial upward, not down.
- *Introductions.* The shared `--subtitle-size` token (`clamp(1.1rem, 1.6vw, 1.3rem)`, line-height 1.7) is the one specification for every gold/italic introductory line beneath a heading — mission statements, section subtitles, page intros (`.hero-mission`, `.home-coll-sub`, `.col-hero__sub`). One scale, used everywhere that role appears.
- *Supporting text.* Secondary explanatory paragraphs use the same `--body-size`/`--body-line` token as primary body text — "supporting" describes its place in the hierarchy, not a license to shrink it.
- *Captions.* New `--caption-size: 0.85rem` / `--caption-line: 1.6` token (added this audit) standardizes the smallest, auxiliary, identification-only text — image attributions and plate names — which by long editorial convention sit below body size because they are metadata about a work, not the reading content itself. The one true outlier found, `.about-caption` (previously a hardcoded 0.8rem), now points at this token. Other caption-like elements already sit at or above this floor (`.encounter-caption p` at 1.1rem, `.gal-card__caption` at 0.95rem) and were left as-is — they already meet the standard.
- *Navigation.* Two distinct, intentional registers, not an inconsistency: the persistent header `Nav` is condensed wayfinding chrome by long-standing typographic convention (0.84rem desktop / 0.76rem tablet / 0.9rem full-screen mobile menu) — it is never the reading content, so it is not held to the body-copy floor, only to its own legibility floor. The `WayfindingBand` and footer link columns, which function as a continuation of the reading journey rather than transient chrome, use the shared `--link-size: 0.95rem` token. Future nav-like elements should ask which register they belong to — transient chrome, or continued reading — before choosing a size.

Future pages should reach for these tokens by default rather than inventing new sizes; a new typographic need is first checked against this category list before any new value is introduced.

**Overall objective.** Every page should feel like it belongs to the same publishing house — consistency, comfort, restraint, and quiet confidence throughout. This governs the same `--body-size`/`--body-line`/`--caption-size`/`--subtitle-size`/`--link-size` tokens documented under Global Design System above — this section is the *why*, that section is the *what*. Any future instinct to shrink type to resolve visual density, or to introduce a new one-off size, should be checked against this standard first.

## Encounters architecture (2026-06-25) — supersedes Path

Susan's directive "Begin New Encounter Architecture" replaces the Path experience described below with **Encounters**. This is an architectural change, not a nav relabel — read this section first; sections below that still say "Path" are historical record of how the template was developed, not the current public structure.

- **Navigation:** `PATH` → `ENCOUNTERS`. Encounters is now the primary entrance into the symbolic language of AwakenArts (`/encounters`, indexed, no longer a transitional pre-roll).
- **Purpose shift:** Encounters are *not* completed teaching pages. Each is an atmospheric point of entry into a theme — image, language, Scripture, and a brief **AwakenArts Echo** (a short excerpt from the AwakenArts poetry corpus that resonates with the theme, cited by source). Encounters grow over time; they are not meant to feel "finished."
- **Design standard:** `journey-01-guide.png` is the master design specification for every encounter — its typography, spacing, hierarchy, text placement, movement, scroll cue, and interaction. See "Left-aligned template" below; it still governs. Subsequent encounters reproduce this language with their own imagery/content.
- **Asset convention:** each encounter folder under `public/images/encounters/<slug>/` supplies `<slug>-01-web.png` (the production image) and, where provided, `<slug>-01-web-notes.txt` (section label, title, opening statement, Scripture, AwakenArts Echo, layout guidance, encounter intent). Journey and Deep predate this notes-file convention — their copy carries forward unchanged from the locked copy below.
- **Locked sequence (corrected order):** **Journey → The Deep → The Table → The Word → Continue.** Note this swaps Table and Word relative to the original five-movement template documented further down (which read Journey → Deep → Word → Table → Continue) — the new order is authoritative.
- **Standalone pages, not a forced scroll sequence:** each encounter is its own page (`/encounters/journey`, `/encounters/deep`, `/encounters/table`, `/encounters/word`, `/encounters/continue`), not panels in one mandatory scroll. Each ends in a closing strip linking back to the index and forward to the next encounter (Continue links onward to `/collection` instead). Built this way so additional sections can be added beneath any encounter's opening page later without redesigning it.
- **Dropped from the original template:** the circular/rectangular "Begin" button (each page now stands alone rather than starting a forced flow), the right-edge progress-dot trail, and the "Explore More" thumbnail strip (its only real asset, `journey-02-web.png`, doesn't exist on disk).
- **Figure-tied routes set aside, not deleted:** Dragon, Bowls/Vase, Queen Ann, Butterfly, Continuum, and the old Mermaid prototype (the five-movement scroll built under that route) are unlinked from nav and the new Encounters index, noindexed via `robots.ts`/layout metadata, and left in place on disk. `/encounters/mermaid` now permanently redirects to `/encounters/journey`.
- **AwakenArts Echo:** The Table uses a line from "Angel Gardens" ("I sow my love with Heaven's care…"); The Word uses a line from "Swan Sings" ("She gave a warning. You see what you believe."), added 2026-06-25 at Susan's direction. Continue still omits the Echo block (per the Continue notes' own instruction to omit rather than force one).
- **Journey Scripture, added 2026-06-27:** Journey originally shipped with title + one line only, per its "very little text" locked spec — but with Deep/Table/Word/Continue all carrying a Scripture citation, Journey alone reading with no quote was raised as the page that "doesn't mean anything." Added Hebrews 11:8 ("By faith Abraham obeyed and went, even though he did not know where he was going.") beneath the opening line — same `.scripture`/`.ref` markup the other four pages use, chosen for direct thematic match to "Every journey begins before we know where it leads." No Echo added (Susan asked for "one," not the full Scripture+Echo treatment).
- **Continue's missing Echo, resolved 2026-06-27:** rather than source or invent a corpus quote for Continue (Susan's explicit concern: an outside tool, "Chat," fabricates quotes/attributions when asked to fill a gap like this), the slot was filled with original, unattributed reflective copy instead — "Recognition does not end when the page does — it keeps walking in you, long after this moment closes." No quotation marks, no `.echoRef` source line, since it is not a quote and is not claimed to be sourced from anywhere. Reuses `.echo`'s italic/mist typography for visual consistency with the other four pages' Echo treatment, without claiming to be corpus material. If Susan later finds a real line from her own poetry that fits, it can replace this the same way Table/Word's Echoes are set (with `.echoRef` and a source title).

### Free resource: The AwakenArts Encounter Journal (2026-06-27)

Susan shared a Chat-ideated concept doc ("THE JOURNEY — ENCOUNTER SERIES STRUCTURE") proposing a new six-stage rhythm (Arrive/Open/Behold/Resonate/Receive/Integrate) and a 5-figure hero-image set (Mermaid/Dragon/Vessel/Queen Ann/Ballerina) — i.e., the figure-tied set that was deliberately set aside above, not the live Encounters. Her direction was explicit: the concept "goes too deep for production needs now," and she asked how to turn it into a lighter journal experience, leaving the exact figure set and format to judgment ("your best judgements going forward... I was thinking that the images could lead to pages").

**Decision: retire Chat's six-stage rhythm; reuse the locked Recognition Model instead.** AwakenArts already has one canonical framework — **Encounter → Recognition → Reflection → Integration** — documented in `AwakenArts_Guide_to_Symbolic_Facilitation.pdf` ("The Recognition Model") and operationalized in `AwakenArts_Participant_Handouts.pdf`. Introducing a second, six-stage framework for one concept doc would contradict the one-system standard this whole architecture doc exists to enforce. The Recognition Model is explicitly designed to work solo, with no facilitator — so it maps directly onto a free, self-guided resource without modification.

**What was built:** `AwakenArts_Encounter_Journal.pdf` (repo root and `public/files/free/`) — a free, 8-page, visitor-facing companion. Cover, a "How to Use This Journal" page explaining the four movements, one spread per live Encounter (Journey → Deep → Table → Word → Continue, in locked sequence) using each page's real title/line/Scripture/Echo copy and hero image (no new photography), the same four Recognition Model prompts repeated on every spread, and a closing page pointing to `/collection` and cross-selling the deeper facilitator `Guide to Symbolic Facilitation`. Each spread ends with a link back to its live page (`awakenarts.com/encounters/<slug>`) — directly implementing Susan's "the images could lead to pages" note as a funnel from the free PDF back to the production site, rather than the PDF being a closed, standalone artifact.

**Naming:** titled *The AwakenArts Encounter Journal*, distinct from the existing *Guide to Symbolic Facilitation* (a deeper facilitator/practitioner book) — same Recognition Model, different audience and depth, no naming collision.

**Not yet decided:** whether/how this PDF gets a dedicated download page or CTA on the live site (e.g., linked from `/encounters` as a free offering). The PDF itself is the complete deliverable for this pass; a site-side download surface is a natural next step, not yet built.

## Navigation (4 items)

**ENCOUNTERS · COLLECTION · GALLERY · ABOUT**

Voices, Studio, Poems, and Quotes are retired as standalone nav destinations. Their content is redistributed below — nothing is lost, it just moves to where it serves the visitor.

---

### ENCOUNTERS

*(supersedes PATH — see "Encounters architecture (2026-06-25)" at the top of this doc)*

The primary entrance into the symbolic language of AwakenArts. Visitors browse a quiet index and enter any encounter as a standalone atmospheric page — image, language, Scripture, and a brief AwakenArts Echo. Encounters are not completed teaching pages and are not a forced sequence; they grow over time.

Current Encounter sequence (locked 2026-06-25):
- Journey
- The Deep
- The Table
- The Word
- Continue

Set aside (unlinked from nav/index, left in place, noindexed): Dragon, Bowls/Vase, Queen Ann, Butterfly, Continuum, and the old Mermaid five-movement prototype (now redirects to Journey).

Scripture lives inside each encounter — woven into the experience, never on a separate Scripture page.

**Route decision:** `/encounters` is the index/primary entrance, publicly labeled **Encounters**, and is indexed (no longer noindexed as a transitional pre-roll).

---

### COLLECTION

The publications. Figure Editions remain the primary published works.

Contains:
- Figure Editions
- The Collection Guide
- Workshop Materials
- Facilitator Resources *(future)*
- Edition previews / contact-sheet previews

Author notes live within each Figure Edition (not duplicated in Gallery).

---

### GALLERY

A curated presentation of the symbolic figures and related imagery. Not a poetry gallery, not an archive. It does not present complete poems.

Retains: figure artwork, atmosphere images, related visual studies — only what supports the symbolic figures and future Paths.

Figures shown: Grismere, Dragon, Ballerina, Bowls, **Queen Ann**, **Butterfly**.

- Queen Ann and Butterfly remain **Gallery-only figures** until they become full Figure Editions — they have no Path yet and no Edition yet, so Gallery is currently their only public home.
- Every figure's Gallery card ends with a CTA forward — into its Path if one exists, otherwise into its Figure Edition once published.

Production, process, and superseded material (digital art paintings, concrete-poetry/word-art images, silhouette panels) is archived outside the public site — it does not live in Gallery.

---

### ABOUT

Story, purpose, and contact.

---

## Content redistribution rules

| Old home | New home |
|---|---|
| Scripture (was: Voices) | Inside each Path |
| Companion quotes — Lewis, Augustine, Sanford, etc. (was: Voices) | Placed contextually wherever they deepen a specific figure/theme — never a standalone list |
| Author notes (was: scattered) | Inside each Figure Edition (Collection) |
| Full poem text (was: `/poems`, Studio) | Inside Paths and/or Figure Editions — never in Gallery |
| Figure artwork, atmosphere stills (was: Studio silhouettes) | Gallery |
| Digital art paintings, concrete-poetry/word-art images (was: Studio) | Archived outside the public site |

## Retired as standalone destinations

- **Studio** — split: figure/atmosphere imagery → Gallery; paintings & word-art → archived outside the public site
- **Poems** — full poem text moves to Path/Figure Editions; the page itself retires
- **Quotes / Voices** — content distributed contextually; no standalone page
- **Journal** — stays footer-only, not in main nav

## Resolved decisions (previously open)

1. **Path UX model** — visitors choose a Path from a selection screen, then walk one guided journey. Not a forced sequence through all figures.
2. **Queen Ann / Butterfly** — Gallery-only until each has a Path and/or Figure Edition.
3. **Studio's non-symbolic assets** (paintings, word-art, juggling bear, process content) — archived outside the public site; not part of Gallery.
4. **URL strategy** — keep `/encounters` as the route; label it Path publicly.

## Figure Editions and Paths — the relationship

Two expressions of the same truth, serving different purposes.

**Figure Edition** — a completed artistic work. Brings together the symbolic figure, the complete poem, author notes, reflection, and discussion into a finished publication. Once published, it remains substantially fixed. It is *a work*.

**Path** — a living Scriptural journey inspired by the same symbolic movement that gave rise to the Figure Edition. A Path is not an explanation of the figure and not an illustration of the poem. It is an invitation to walk through Scripture, imagery, silence, and reflection toward recognition.

- Path imagery is not limited to the figure itself — it may draw on the wider vocabulary of biblical visual language: landscapes, light, water, trees, roads, clay, hands, doors, mountains, gardens, and so on.
- The symbolic figure may appear only once within a Path — or not at all.
- A Path stays free to mature over time. As Scripture continues to illuminate the symbolic movement, new imagery, passages, and reflections may be woven in without ever altering the published Figure Edition.

Figure Editions remain enduring works; Paths remain living journeys. The two illuminate one another — neither replaces the other.

Paths are organized around Scriptural themes rather than symbolic figures. Figure Editions are original artistic works that illuminate those same themes through image and poetry.

## Layers of meaning within a Figure Edition (locked 2026-06-24, from Poppy)

Worked out while deciding what Poppy's cover should and shouldn't show. The principle generalizes to every Figure Edition, not just Poppy.

A Figure Edition reveals itself in layers, and each layer has its own work to do:

- **Cover** — invitation. Universal, inviting, never the specific personal story. Anyone should be able to step into it, the same way anyone can step onto the road in a Path's Journey movement.
- **Figure** — encounter. The symbolic figure itself.
- **Poem** — expression. The complete work, in the artist's own words.
- **Notes** — recognition. Where the personal, specific truth behind the symbol is finally given — the place where "Her mother's hands" gets named, not the cover.
- **Reflection** — personal response. Where the reader's own recognition happens.

The governing rule, the editorial compass: **universality invites, specificity reveals.** A cover built around one person's literal hands stops being an invitation and becomes information delivered too early — recognition handed to the reader instead of discovered by them. The cover's abundance (a field, a light, a landscape) should be capable of meaning nothing more than itself on first viewing, and only retroactively reveal itself as having been about inheritance and continuity all along, once the reader has gone deeper into the work.

This sits alongside the earlier idea that "the image prepares the heart, the Word gives it voice" — extended one step further: the notes complete the recognition.

**Each layer carries greater intimacy than the one before it.** That is why the cover must remain spacious and universal. The Figure is more intimate. The Poem is more intimate still. The Notes become personal. The Reflection becomes the reader's own. This isn't just sequencing — it's hospitality. The work doesn't demand the reader begin with the artist's most personal experience. It welcomes them into a shared human landscape first, then gradually reveals the deeper, more particular meaning. The reader is never asked to understand before they've first entered the world of the work.

Worked across the Collection:

| | Cover (invitation) | Figure (encounter) | Poem (expression) | Notes (recognition) | Reflection (personal response) |
|---|---|---|---|---|---|
| **Grismere** | Sea, horizon, longing | The maiden | Grismere | The divided self, longing, recognition | "Where have you experienced this?" |
| **Dragon** | Storm, mountain, gathering clouds | The dragon | Dragon | The divided will, "and," reconciliation | Personal response |
| **Bowls** | Morning table, ocean light | The bowls | Both Sides Now | Two feminine selves, reconciliation | Recognition |
| **Poppy** | Hillside alive with orange poppies | The symbolic composition | Her Mother's Hands | The hands, inheritance, recognition | The reader's own story |

This has become part of the grammar of AwakenArts — not limited to Figure Editions. The same universality-invites/specificity-reveals progression should also shape Homeward Paths (the cover/Journey movement of any Path stays spacious; particularity arrives later, inside The Word, The Table, and beyond), the website's general editorial voice, and eventually workshop design.

*Superseded note (kept for history):* the first Grismere build was figure-centric (a video zoom on the figure herself, throughout). Susan's June 24 master-template direction below explicitly retires this approach — a Path is no longer organized around its symbolic figure at all.

## Path structure — the five movements (master template, 2026-06-24)

*(Historical: this section and most of what follows describes the development of the template that now governs Encounters. Order has since changed — see "Encounters architecture (2026-06-25)" at the top of this doc for the corrected sequence, Journey → The Deep → The Table → The Word → Continue.)*

Every Path — regardless of theme — follows the same five movements. Different Paths use different imagery, Scripture, and reflection, but the structure itself is fixed. This is the template that now governs all Path development, replacing the figure-centric approach above.

1. **Journey** — the invitation; the visitor arrives. Landscape imagery: a road, a shoreline, a field, a mountain, a quiet place. Purpose: invite the visitor to begin.
2. **The Deep** — the place where something is encountered: longing, questions, loss, wonder, silence. Imagery suggests depth rather than answers. Purpose: awaken recognition. *(The symbolic figure, if it appears at all, belongs here — once, quietly, subordinate to the theme of depth — never as a showcased hero image.)*
3. **The Word** — Scripture enters naturally; imagery and Scripture illuminate one another. Emphasis is revelation, not explanation. Purpose: let Scripture speak.
4. **The Table** — invitation: bread, water, fish, cup, hospitality, rest, communion, belonging. Purpose: to receive.
5. **Continue** — the visitor has been walking a path the entire time; this isn't a fifth place but the invitation to keep living what the first four movements opened. A road, morning, light, hope. The ending is always forward. Closing invitation: *"Continue exploring these themes through the AwakenArts Figure Editions."*

The Path is not about a symbolic figure. The symbolic figures inspired the vision, but each Path stands independently as its own Scripturally grounded journey, following the same rhythm: **Journey → The Deep → The Word → The Table → Continue.**

## Path visual language & per-movement copy (locked 2026-06-24, superseded same day — see below)

*Superseded note (kept for history):* the paragraphs immediately below describe the **centered** template, confirmed against Susan's "How the Path Experience Works" explainer. That same day, Susan supplied a fully art-directed reference mockup (`journey-01-guide.png`) for Journey using a **left-aligned** composition instead. The left-aligned version is now the locked template — see "Left-aligned template (locked 2026-06-24, supersedes centered)" further below. The centered description is kept here only as a historical record of the decision path.

Reference direction (superseded): warm, photographic, golden-hour — not the dark/navy-immersive treatment used in the first Grismere build. Dark-ink serif type sits directly on bright photography where the image allows it (Journey); light cream type is used on darker/warmer tones elsewhere. Text was centered, confirmed by Susan's "How the Path Experience Works" reference graphic.

Constant chrome across every movement screen: small `AWAKENARTS` wordmark (top-left) + `MENU` (top-right) — this part is unchanged by the left-aligned pivot. (Superseded) a centered `PATH` eyebrow label, the movement name as a large italic serif headline, a circular "Begin" button + downward chevron + "Scroll" label on the first screen, a simpler chevron + "Scroll" cue on movements 2–4, and a forward link ("Explore the Figure Edition") closing movement 5.

## Left-aligned template (locked 2026-06-24, supersedes centered)

Susan's `journey-01-guide.png` reference established the production template now used for all five movements and every future Homeward Paths series entry:

- **Eyebrow:** `HOMEWARD PATHS` (not `PATH`), gold, with a short rule–diamond–rule beneath, left-aligned.
- **Movement title:** large serif, uppercase, *not* italic (e.g. `JOURNEY`), cream-colored, left-aligned.
- **Body line:** one italic serif line (or two), gold-toned, left-aligned, directly beneath the title.
- **Scripture / short invite:** same position as before (Deep, Word, Table), now left-aligned under the body line instead of centered.
- **Begin / forward button:** a rectangular gold-outlined button with a label + arrow (`BEGIN →` on Journey; `EXPLORE THE EDITION →` closing Continue) — replaces the earlier circular button and plain text link.
- **Scroll cue:** `↓ SCROLL`, gold, positioned independently at the bottom-left of the panel (not stacked under the button) on movements 1–4. Continue has no scroll cue — it's the end of the path.
- **Composition:** text block sits in the left third to half of the frame; the photograph fills the rest, with a scrim darkening the left side only (not full-frame) so the photo stays legible on the right while the text stays readable on the left.
- **Responsive behavior:** the layout is left-aligned on desktop/tablet; on narrow (mobile) viewports it collapses to centered text and a centered scroll cue so nothing crowds the screen edge.

This applies uniformly across Journey, The Deep, The Word, The Table, and Continue, and is the template every future Homeward Paths series entry should also follow.

## Homeward Paths — image production standard (locked 2026-06-24)

Each movement's hero image is produced in **two versions**, named `<movement>-<number>-guide.png` and `<movement>-<number>-web.png` (e.g. `journey-01-guide.png`, `journey-01-web.png`):

1. **Guide / presentation version** — includes baked-in typography, button placement, and navigation cues. This is a *design reference only*, used to propose and approve the art direction for a movement (composition, mood, where the text should sit). It is never read as live text by the site.
2. **Web / production version** — the identical photograph with no text, no buttons, no overlays — pure photographic artwork. This is the only version the production code should use as a background image; all typography, the Begin/forward button, and the Scroll cue are recreated live in HTML/CSS on top of it (see "Left-aligned template" above).

Workflow: Susan creates the guide mockup → reviews/approves the art direction → generates the clean "web" companion image → Claude wires the web image into the page as a background and rebuilds the approved typography/button/scroll-cue live in code. Each movement ends up with both a design board (guide) and a production asset (web), which keeps the whole Homeward Paths series visually consistent without ever depending on flattened, non-editable text baked into an image.

**Current status:** Journey now has two complete guide/web pairs (`journey-01-guide.png`/`journey-01-web.png` and `journey-02-guide.png`/`journey-02-web.png`, both in `public/images/encounters/journey/`). The hero background uses `journey-01-web.png`; `journey-02-web.png` (a forest path with sunbeams) appears as real photography in the Explore More strip below the hero, replacing the earlier placeholder crops. Journey is the first movement to complete the full guide → web → implementation loop, now with two photographs in rotation. Deep, Word, Table, and Continue have no guide or web images yet beyond Deep's earlier draft photo.

## Path visual language & per-movement copy, continued — locked content (unaffected by the layout pivot)

**Figures are not part of Path, full stop.** An earlier draft of this doc allowed a symbolic figure to appear once, quietly, inside The Deep — Susan has explicitly overridden that: Paths carry no figure imagery at all. Figures live in Gallery and Figure Editions only.

**Navigation, confirmed:** the right-edge dot-trail and scrolling are the two ways to move through a Path — click a dot to jump to that movement, or scroll to move forward/back one movement at a time (per Susan's "How the Path Experience Works" reference).

**Below-the-fold "Explore More" — new, part of the template:** each of the five full-screen movements may be followed by an optional, non-mandatory strip of supplementary imagery ("Explore More") for visitors who want to linger. The five-screen scroll experience is complete on its own — Explore More is bonus, never required. Scroll-snap on the Path container should use `proximity` (not `mandatory`) so visitors aren't forced past this content.

Locked per-movement copy (worked example: Homeward Paths — themes drawn from the Grismere Figure Edition):

1. **Journey** — "Every journey begins before we know where it leads." *(very little text — title + one line only)*
2. **The Deep** — "There are places within us that ordinary language cannot reach." + full Scripture: *"Deep calls to deep at the roar of your waterfalls; all your waves and breakers have swept over me."* — Psalm 42:7
3. **The Word** — "Scripture speaks into the journey." + Scripture: *"Your word is a lamp to my feet and a light to my path."* — **Psalm 119:105**, confirmed 2026-06-24 *(supersedes the earlier Psalm 18:16, "He drew me out of many waters")*
4. **The Table** — "Here we are welcomed before we are understood." + "Come and eat." — John 21:12 *(new: Susan's reference added both the short invitation and this citation)*
5. **Continue** — "Walk on. Continue the journey." then, quietly: *"Continue exploring these themes through the AwakenArts Figure Editions."*

This same copy pattern (title + one restrained line, Scripture only where it serves revelation, image carrying meaning over explanation) is the model for every future Path — only the imagery, verse, and line wording change per theme.

**Path-selection screen copy, locked 2026-06-24** — "Homeward Paths," then each movement with its one-line mantra. These don't appear on the hero screens themselves; they belong to the `/encounters` Path-selection screen where visitors choose which movement-card to enter:

- Journey — *I begin.*
- The Deep — *I encounter.*
- The Word — *I listen.*
- The Table — *I receive.*
- Continue — *I walk on.*

## Homeward Paths as a growing series (2026-06-24)

Homeward Paths is not a single journey — it is a series. The five-movement structure stays fixed, but the first two movements are where the Scriptural landscape changes from journey to journey; the last three (**The Word, The Table, Continue**) hold constant across every entry, giving the series a recognizable shape that can grow for years without feeling repetitive.

Worked examples:

- **Homeward Paths** — Journey → The Deep → The Word → The Table → Continue *(current build priority — themes from the Grismere Figure Edition)*
- **Homeward Paths** — Wilderness → Waiting → The Word → The Table → Continue
- **Homeward Paths** — The Garden → The Night → The Word → The Table → Continue

Open implication worth noting, not yet decided: this sits alongside the existing "Paths (aligned to Figure Editions)" list above (Grismere/Dragon/Ballerina/Bowls/Poppy as separate figure-named Paths). Since Paths are now explicitly organized around Scriptural themes rather than figures, future Path entries may end up named like the Homeward Paths examples above (Wilderness, The Garden, etc.) rather than after figures — worth revisiting once the first Homeward Paths entry is live.

## Current build priority

Prototype the master five-movement template as **Homeward Paths**: visually cinematic, Scripturally grounded, emotionally quiet. The visitor should feel they are walking a path, not browsing a website. It is being built using themes that originally emerged alongside the Grismere Figure Edition, but it is not "the Grismere Path" — Grismere stays in the background as the source of inspiration, not the identity of the Path. Once approved, this same structure (not the Homeward-Paths-specific content) becomes the template for every other Path.

## Still open / noted for later

- **Active need: real photography for the remaining movements.** The template, layout, copy, and navigation are now settled — what's left is images. Real photography exists for **Journey** (`/images/encounters/journey/journey-1.png`, hillside trail, golden hour) and a draft for **The Deep** (`/images/encounters/deep/encounter-1-deep.png`, dusk shoreline with a silhouetted figure — Susan flagged this one as a draft that "may be replaced at a later time"). The Word, The Table, and Continue still use warm-toned gradient placeholders, and none of the five movements has real imagery yet for its "Explore More" below-fold strip (Journey's strip currently reuses crops of the one real Journey photo as a stand-in).
- **Asset folder structure, resolved 2026-06-24:** `public/images/encounters/` now has one folder per movement — `journey/`, `deep/`, `word/`, `table/`, `continue/` — replacing the earlier single `Journey/` folder that awkwardly held both the Journey and Deep images. This is the standard structure for staging photography going forward, for this Path and any future Homeward Paths series entry.
- "The Table" has no candidate image yet (bread/cup/water) — the Bowls clay-vessel still was tried earlier as a stand-in but the newer direction expects dedicated Table photography rather than a reused figure asset. Susan's reference mockup envisions a shoreline breakfast scene (bread, fish, a clay jug, a moored boat) — consistent with the new John 21:12 citation.
- Ballerina has an unused video asset ready (`/videos/ballerina-path.mp4`) but no Path page built yet — quick follow-up once the master template is approved and applied across Paths.
- Bowls, Butterfly, and Ballerina Gallery stills were freshly extracted from existing video footage (`/images/forms/bowls-still.jpg`, `butterfly-still.jpg`) as placeholders, with Ballerina now using `/images/library/ballerina-frozen.jpg` since its video frame turned out to be a title card — fine for now, but worth replacing with authored stills at the canonical 1600×2400 standard when available.
- Poppy has no Path, Gallery image, or Figure Edition yet — entirely future work.
