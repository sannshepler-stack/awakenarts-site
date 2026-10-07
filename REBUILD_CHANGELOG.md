# AwakenArts Rebuild — Branch Change Log

Branch: `rebuild/home-and-templates` (staging workspace; preview on Vercel).
Live site stays on `main` at `9d3746a` until Susan approves the structure,
navigation and core pages. Production path: preview branch → review →
cleanup pass → final commit set → merge to `main` → live build.

Working rules (Susan, 2026-10-05): one focused revision per commit; each
entry below = one commit; review in Vercel before the next; no unrelated
local project files in the branch. Resume notes: `REBUILD_RESUME.md`.

## Completed revisions — 2026-10-05

| # | Revision | Status |
|---|---|---|
| 1 | Remove public Kit diagnostic; no false signup success in production | On preview |
| 2 | Symbol Card system scaffold: two-sided card, Portal template, `/symbols` card index, `/s/[symbol]` QR addresses; Christian Symbols moved to `/christian-symbols` | On preview (content pending) |
| 3 | Guided Encounters index + reusable template, inquiry form, redirects from Editions | On preview |
| 4 | Books & Journals index + reusable Book template; Stay Connected page | On preview |
| 5 | Homepage rebuilt in symbol-first order | On preview |
| 6 | **Edition vs Guided Encounter distinction** — "A Guided Encounter with the Grismere Edition"; homepage section copy per Susan | On preview |
| 7 | **Real book covers** from AARTS PROJECTS (web-sized) | On preview |
| 8 | Covers share one height at true proportions; 6×9 print front for *Shape, Symbol & Story*; subtitles match the covers | On preview |
| 9 | Hero: gold AWAKENARTS eyebrow + site serif heading; logo lockup removed | On preview |
| 10 | Guided Encounters shown by Figure artwork | On preview |
| 11 | **Guided Encounters separated from Presentations & Workshops**; **Presentations & Workshops index (`/presentations`) and reusable presentation template (`/presentations/[slug]`)**; Explore hub (`/explore`); **six-item navigation: EXPLORE · SYMBOLS · GUIDED ENCOUNTERS · PRESENTATIONS · BOOKS · ABOUT** | On preview |
| 12 | **Books & Resources revisions**: status shown only when accurate (no blanket "Coming Soon"); two free resources as distinct items; EXPLORE BOOKS & JOURNALS | On preview |
| 13 | Hero refinement: headline at section-heading scale; **CTA treatment** — EXPLORE A SYMBOL (gold) and DISCOVER AWAKENARTS (navy) as identical text links with thin gold underline, same baseline | On preview |
| 14 | **Hero, current treatment and approved copy**: eyebrow AWAKENARTS · "Every life holds a pattern, a memory, a direction, a truth, or a story waiting to be revealed." · supporting line "AwakenArts brings image, poetry, and symbolic language into conversation, creating space to notice what may already be taking shape." · Queen Ann reduced; text group centred against the image | On preview |
| 15 | AwakenArts Collection image restored: Explore page and homepage Guided Encounters band (not the hero) | On preview |
| 16 | Checkpoint: this change log + `REBUILD_RESUME.md` | On preview (`2908d1c`) |
| 17 | **Homepage review pass**: hero headline ~35 px / supporting line ~19 px; repeated Queen Ann poem + portrait removed from "You already speak in images" (concept + three phrases kept, phrase-by-phrase one-time reveal, reduced-motion safe); section headings and centred eyebrows made consistent; all homepage CTAs unified as gold-underlined text links (`TextLink`); phone clipping of the Grismere card fixed; footer: stale workshop wording replaced, "Formation & Provenance" → "About AwakenArts"; repeated menu band removed above the homepage footer; desktop nav spacing made fluid | Committed — awaiting push |
| 18 | CTA states: both hero links gold by default with identical type and underline; hover/focus → navy with the underline thickening and settling toward the text; brief darker active state; light-gold variant on navy bands (cream on hover); reduced-motion safe. Styles moved to `.text-link` in globals.css | Committed — awaiting push |
| 19 | Homepage heading scale: hero headline −17% (~35 → ~29 px, line width narrowed to keep its three-line shape); major section headings −20% (~47 → ~37 px; About and Stay Connected reduced in proportion, Stay Connected on the homepage only). Eyebrows, body copy and CTAs unchanged | Committed — awaiting push |
| 20 | **One type scale across the site** (tokens in globals.css), desktop: page titles 49 px · section headings 37 px · card titles 26 px. The homepage hero statement is a separate hero text style (33 px), sized to the hero composition and outside the scale. Applied to Home, Explore, Symbols + Portal, Guided Encounters, Presentations, Books, About, Stay Connected. Eyebrows, body copy, links unchanged; Christian Symbols' two-line title lockup left as designed | Committed — awaiting review on localhost |
| 21 | Homepage Guided Encounters copy (Susan): tighter intro line; Psalm 18:16 left out of the card's theme line (kept in the Edition data); simpler closing sentence; CTAs reduced to EXPLORE GRISMERE and REGISTER OR INQUIRE | Committed — awaiting review on localhost |
| 22 | **Guided Encounters page content** (Susan's KEEP/CHANGE/REMOVE): opening reduced to "The Edition is the work. The Guided Encounter is the experience of that work."; opening buttons removed (same next steps sit under Grismere); Grismere: CURRENT GUIDED ENCOUNTER · title · subline · one sentence on what participants do (**draft, from the Edition's own copy — Susan to approve**); contact sheet labelled EDITION PREVIEW · THE GRISMERE EDITION and no longer a link; host section says the images come from Editions; each host tile gets one line of that Edition's own themes (Scripture citations left out); five tiles in one row; inquiry form: REGISTER OR INQUIRE + "Attend a Guided Encounter or ask about bringing one to your group." | Committed — awaiting review on localhost |
| 23 | Guided Encounters page, Editions section: "Explore the AwakenArts Editions" + "Each Edition is a distinct body of image, poetry, story, and reflection. Some may become the basis for future presentations, workshops, or guided experiences."; AVAILABLE TO HOST removed from the five Edition cards (only Grismere carries a status) | Committed — awaiting review on localhost |
| 24 | **Editions page** (`/editions`): AWAKENARTS · The AwakenArts Editions · definition (Susan's wording) · six Edition cards (Grismere, The Dragon, Queen Ann, Bowls, Ballerina, Poppy) with their own themes, no status. **Edition pages** (`/editions/[slug]`) restored as the work itself: figure, About, Themes, Edition preview, All Editions; Dragon reader link kept (D8); a quiet link to a presentation only when one is built from that Edition. Redirect `/editions/:slug` → Guided Encounters removed; `/collection` → `/editions`; `/editions/:slug/purchase` → `/editions/:slug`. Previous Edition page version in git history | Committed — awaiting review on localhost |
| 25 | **Grismere moved under Presentations**: `/presentations/grismere` — PRESENTATION · Grismere · *A Guided Encounter with the Grismere Edition* · draft sentence (Susan to approve) · Format Guided Encounter · 75 minutes · For; "Built from: The Grismere Edition" with Edition preview and link to `/editions/grismere`; inquiry REGISTER OR INQUIRE (attend or host). Presentations index shows Grismere under Current Presentations & Workshops; inquiry gains "Attending a presentation" | Committed — awaiting review on localhost |
| 26 | **Navigation and links follow the architecture**: nav EXPLORE · EDITIONS · PRESENTATIONS · SYMBOLS · BOOKS · ABOUT (Guided Encounters no longer top-level); footer and menu band match; homepage Grismere links → `/presentations/grismere`; Christian Symbols continues to the Editions; doorway card → The Editions; temporary redirects `/guided-encounters` → `/presentations`, `/guided-encounters/grismere` → `/presentations/grismere`, other `/guided-encounters/:slug` → `/editions/:slug` (old pages kept, retire in cleanup); sitemap updated. Presentation template answers what happens · what participants see/do · who for · format/length · attend/host/inquire (first two render once Susan supplies them); "This presentation is drawn from the Grismere Edition." links to `/editions/grismere`; a presentation can draw on several Editions or none. Edition descriptions: "used within the AwakenArts workshop experience" and "participants" wording removed (**Susan to approve**) | Committed — awaiting review on localhost |
| 27 | **Edition page order** (Susan): the work first — figure, About, Themes, then "Explore the [X] Edition" with the Edition at full width (Dragon: Read Online). Only where a presentation exists, farther down and secondary: "Experience Grismere as a Presentation" + Susan's pitch + EXPLORE THE GRISMERE PRESENTATION. No block on Editions without a presentation | Committed — awaiting review on localhost |
| 28 | **Edition pages show the whole Edition, page by page**, rendered for web from each Edition's PDF (`public/images/editions/pages/[slug]/`, ~1.5 MB per Edition), under "Explore the [X] Edition". **For review on localhost — Susan to decide before it goes live** (earlier rule: previews never expose the complete Edition) | Committed — localhost review only |
| 29 | **Presentation page is the registration page, independent of the Edition** (Susan): "drawn from the Grismere Edition" line and Edition link removed; subtitle now "A Guided Encounter"; heading image kept. The Grismere Edition page keeps its link to the Grismere workshop | Committed — awaiting review on localhost |
| 30 | **Presentation page as the participant action page** (Susan): overview → Register (name, email, attending/hosting/question, dates, message) → in-page confirmation "You’re registered" + "With your registration, you’ll receive the Grismere Symbol Card as a digital PDF you can save or print." → ACCOMPANYING THE PRESENTATION: Grismere Workbook (revealed during the presentation) · Going Further. Registration posts to new `/api/register` (Kit: subscriber + details as custom fields + presentation tag). Reusable for every future presentation | Committed — localhost review only |
| 31 | Homepage: card subline "A Guided Encounter"; intro "Each Guided Encounter brings an AwakenArts figure into conversation…" (Edition → figure). Editions page: Encounter Journal signup removed | Committed — awaiting review on localhost |
| 32 | Hero statement 12% smaller (~33 → ~29 px desktop) | Committed — awaiting review on localhost |
| 33 | **Hero line revised by Susan**: "Every life holds a pattern, a memory, a truth, or a story waiting to be revealed." ("a direction" removed); another 10% smaller (~26 px desktop), two lines | Committed — awaiting review on localhost |
| 34 | Hero heading added (Susan): "When Language Shapes a Path" (same phrase as the Explore page title) at section-heading size (~37 px); "Every life holds…" becomes the statement beneath it (~26 px) | Committed — awaiting review on localhost |
| 35 | Hero heading "When Language Shapes a Path" 10% larger (~41 px desktop); nothing else changed | Committed — awaiting review on localhost |
| 36 | Hero statement in italic, setting it apart from the heading; paragraph no longer leaves "shape." alone on its last line | Committed — awaiting review on localhost |
| 37 | Hero: about 20 px more space above the two links | Committed — awaiting review on localhost |
| 38 | Hero paragraph (Susan): "…creating space to notice what is wanting to take shape." | Committed — awaiting review on localhost |
| 39 | Homepage section 2 (Susan): "AwakenArts begins with the images already present in everyday language and experience, then follows them toward deeper meaning, reflection, and understanding." Eyebrow, heading and three phrases unchanged | Committed — awaiting review on localhost |
| 40 | **Text roles made consistent on the homepage** (tokens `--t-body`, `--t-poetic`): body copy Lora ~19 px soft grey in both sections; poetic/quoted lines gold italic ~24 px (three phrases, "Ordinary things…", Matthew 13:34); "A lamp. A path…" stays the smaller dark italic lead-in | Committed — awaiting review on localhost |
| 41 | Caption under the AwakenArts Collection image (homepage and Explore): "The AwakenArts Collection is a series of images. These are a select few." | Committed — awaiting review on localhost |
| 42 | Homepage Guided Encounters band matched to the shared text roles: heading at regular weight without extra tracking (was semi-bold, spaced); body lines at the shared body size (~19 px, was 16 px) | Committed — awaiting review on localhost |
| 43 | Homepage line under the Grismere card (Susan): "Experience Grismere as a Guided Encounter, or inquire about bringing the presentation to a library, club, or community group." Grismere presentation page: no church-specific language — For: Libraries · Clubs · Community groups; form hosting options follow that list (more settings can be added to the presentation's audience list later) | Committed — awaiting review on localhost |
| 44 | Homepage band line (Susan): "Each Encounter brings an AwakenArts figure into conversation through image, poetry, and reflection." | Committed — awaiting review on localhost |
| 45 | Homepage Grismere card: themes stacked one per line, no separator dots | Committed — awaiting review on localhost |
| 46 | Homepage line under the Grismere card (Susan): "Experience Grismere. Inquire about bringing the presentation to a library, club, or community group." | Committed — awaiting review on localhost |
| 47 | **"You already speak in images" and "Scripture Speaks in Symbols" combined** into one homepage section under the ship image: movement 1 (recognition) → short gold rule → movement 2 (Christian Symbols, awareness). Supporting line (Susan): "AwakenArts begins with familiar images found in everyday language and experience." Sky header of the first section removed from the homepage (component keeps it for any standalone use) | Committed — awaiting review on localhost |
| 48 | Combined section: gold divider and CHRISTIAN SYMBOLS label removed; "Scripture Speaks in Symbols" begins where the divider was | Committed — awaiting review on localhost |
| 49 | "Jesus taught through image, story, and metaphor…" paragraph removed from the homepage and placed on the Christian Symbols page, under its opening lines | Committed — awaiting review on localhost |
| 50 | Christian Symbols page: one heading "Symbols for the Christian Soul" at page-title size; "Ordinary things become carriers of meaning." removed there; paragraph follows "A lamp. A path…" | Committed — awaiting review on localhost |
| 51 | Christian Symbols (main page and every symbol page, now one shared opening): "Ordinary things…" removed everywhere there; paragraph (Susan): "AwakenArts works within the Christian tradition while engaging literature, psychology, mythology, folklore, and a long history of human imagination." | Committed — awaiting review on localhost |
| 52 | "Symbols for the Christian Soul" on one line on desktop (wraps evenly on phones) | Committed — awaiting review on localhost |
| 53 | Christian Symbols heading: "Symbols for the" in a smaller soft italic, "Christian Soul" in roman, one line | Committed — awaiting review on localhost |
| 54 | Three-phrase reveal slowed: each phrase fades in over 1.8 s (was 0.9 s), 1.4 s apart (was 0.7 s) | Committed — awaiting review on localhost |
| 55 | Christian Symbols is its own homepage section again, on white, with the CHRISTIAN SYMBOLS label back and no header image; "You already speak in images" stays under the ship image on cream | Committed — awaiting review on localhost |
| 56 | "You already speak in images" section: more cream space — text lowered below the ship image, more room beneath the phrases | Committed — awaiting review on localhost |
| 57 | Gap between "You already speak in images" and Christian Symbols reduced ~28% (about 290 → 210 px desktop) | Committed — awaiting review on localhost |
| 58 | Three-phrase animation removed (Susan); the phrases simply appear | Committed — awaiting review on localhost |
| 59 | Whispers of Awareness card: subtitle on two lines — "Awakening Through" / "Art, Stories, and Symbols" | Committed — awaiting review on localhost |
| 60 | Hero copy (Susan, section-by-section revision): statement "Every life holds patterns, memories, images, and stories waiting to be recognized."; paragraph "You already live with symbols. AwakenArts helps you recognize them, explore what they carry, and use image, poem, and reflection to understand your own story more deeply." Design, heading and CTAs unchanged | Committed — awaiting review on localhost |
| 61 | **Homepage combined Sections 2 & 3** (Susan): one section under the ship image — "Sometimes an image stays with you." · "A memory returns…" · "An image can become a mirror." (gold italic with a faint reflection) · "Not by telling you what it means…" · "Through image, poetry, and symbolic language…". Replaces "You already speak in images" and "Scripture Speaks in Symbols" on the homepage (components kept) | Committed — awaiting review on localhost |
| 62 | Homepage after Section 1 (Susan's instructions file): mirror section kept, now under the sky image (boat stays with Christian Symbols); **The AwakenArts Collection as its own dark section** after it, with the caption "These figures are a selected group from the larger AwakenArts series, a continuing body of figurative work created through image, poetry, and story." (also on Explore); workshop band follows unchanged except the banner moved out of it. Christian Symbols + boat preserved for its own section, position TBD | Committed — awaiting review on localhost |
| 63 | Homepage correction (Susan): Queen Ann poem and figure restored at the end of the mirror section (existing images, unchanged); less empty space above and below that section. Collection with its caption kept; later sections untouched | Committed — awaiting review on localhost |
| 64 | Homepage order (Susan): The AwakenArts Collection is Section 2, right after the hero (image and caption only); the mirror section with Queen Ann follows as Section 3. Caption: "These figures are a selected group from the larger AwakenArts series, a body of figurative work created through image and poetry." ("continuing" and "story" removed — the poems are a finite body of work) | Committed — awaiting review on localhost |
| 65 | Collection caption (Susan): "These figures are a selection from the larger AwakenArts series, created through image and poetry." | Committed — awaiting review on localhost |
| 66 | Collection caption on one line on desktop: "…created through image & poetry." | Committed — awaiting review on localhost |
| 67 | **Homepage reorder and trim** (Susan): Hero — "Images and words. Your own way in." / "Explore art and poetry. See what speaks to you." / EXPLORE A SYMBOL only (Discover AwakenArts removed). Section 2 — short sky band, "Sometimes an image stays with you.", "An image can become a mirror." (reflection kept), Queen Ann poem + figure directly beneath, larger, with an Enlarge the poem view; explanatory paragraphs removed. Section 3 — Collection banner (no caption) + Workshops: "Explore the collection through image, poetry, and conversation. Notice what draws you in and how it connects with your own experience." · VIEW CURRENT WORKSHOPS → /presentations (existing workshop destination). The Guided Encounters band is off the homepage (component kept) | Committed — awaiting review on localhost |
| 68 | Hero restored as originally written (Susan): "When Language Shapes a Path" · "Every life holds patterns, memories, images, and stories waiting to be recognized." · "You already live with symbols…" · EXPLORE A SYMBOL / DISCOVER AWAKENARTS. Collection caption restored above Workshops | Committed — awaiting review on localhost |
| 69 | Mirror section (Susan): restored introduction first, exactly as written — AWAKENARTS, THE STORIES THAT SHAPE US · "You already speak in images. We all do. / AwakenArts brings image and language into conversation, / exploring familiar images leading to further understanding." · the three phrases; then "Sometimes an image stays with you.", "An image can become a mirror." (reflection kept) and its supporting sentence restored; Queen Ann poem + figure 25% smaller, centred; Enlarge the poem unchanged | Committed — awaiting review on localhost |
| 70 | Mirror reflection a little darker so it reads as intentional | Committed — awaiting review on localhost |
| 71 | Section 2 shortened by layout: sky band → introduction (unchanged) → two columns: "Sometimes an image stays with you." / mirror line / supporting sentence beside the Queen Ann poem + figure (stacked on phones). No copy removed | Committed — awaiting review on localhost |
| 72 | Two sections instead of columns (Susan). Section 2: sky band · AWAKENARTS, THE STORIES THAT SHAPE US · headline "Sometimes an image stays with you." · "You already speak in images. We all do. / AwakenArts brings image and language into conversation, / exploring familiar images." ("leading to further understanding" removed) · three phrases. Section 3 (white): QUEEN ANN · "An image can become a mirror." with reflection · Queen Ann poem + figure with Enlarge. "Not by telling you what it means…" removed | Committed — awaiting review on localhost |
| 73 | Section 2 paragraph (Susan): "You already speak in images. We all do. / AwakenArts explores familiar images to bring image and language into conversation." | Committed — awaiting review on localhost |
| 74 | Section 2 (Susan): headline "You already speak in images. We all do." · "Sometimes an image stays with you." · three phrases; "AwakenArts explores familiar images…" removed. The sky header moves to open the Queen Ann section | Committed — awaiting review on localhost |
| 75 | Section 2 on the warmer, darker cream (`--warm`); "Sometimes an image stays with you." as an italic serif line under the headline | Committed — awaiting review on localhost |
| 76 | Christian Symbols back on the homepage as its own section, with its boat image, after Collection + Workshops and before Books | Committed — awaiting review on localhost |
| 77 | Books & Resources on white, so it separates from the cream Christian Symbols section above (sections now alternate cream / white / warm) | Committed — awaiting review on localhost |
| 78 | Section 2 ("You already speak in images") on white | Committed — awaiting review on localhost |
| 79 | Mirror reflection flattened and softly blurred so it reads as a reflection rather than upside-down lettering | Committed — awaiting review on localhost |
| 80 | Free resource cards (The AwakenArts Path, Encounter Journal) on cream so they stand out on the white Books sections (homepage and Books page) | Committed — awaiting review on localhost |

## Saved for a later homepage section (Susan, 2026-10-07)

- Why image and poetry are central to the work: **"Poetry is a biblical language of faith. Image gives that language a shape."**
- **Christian Symbols + the boat image**: keep together as their own intentional homepage section (HomeChristianSymbols, kept); exact position decided in the page review.
- Working rule (Susan, 10-07): the existing site is source material; localhost is the workbench; keep strong material even when temporarily out of the homepage flow.

## Governing distinctions (Susan, 2026-10-05)

- **Edition** = the work; the Editions are the product line, for exploration. `/editions` is the product page; each Edition opens to its readable version, enlarged, not downloadable.
- **Presentation / workshop / Guided Encounter** = a separate offering, where people register. It is not founded on an Edition and its page carries no Edition material. An Edition page may link to a related presentation (the Grismere Edition → the Grismere workshop).
- The site must not imply Edition = Guided Encounter. Only Grismere currently has a facilitated experience in development.
- A presentation is **anchored to a figure, not to the Edition created for that figure**. Nothing (Encounters, Encounter Journal) goes with the Editions; they are good content, for people interested in the images.
- **Homepage principle (Susan, 10-07):** less said on the homepage; it leads into the interior pages, which carry the fuller information.
- **Christian Symbols = AWARENESS. Marketing Symbol Cards = EXPLORATION.**

## Still pending

- **Symbol Card / Portal content** — the system is built but `src/data/symbolCards.ts` is empty; homepage "Begin with a Symbol" and all Portals stay hidden until Susan's card copy and art arrive (front: broad meanings; back: Christian meanings + Scripture).
- **Presentations & Workshops content** — list of presentations, format and length (`src/data/presentations.ts`).
- Book availability and buy links (D5); analytics (D7).
- Name for the existing Encounters sequence (D2).
- Church-specific audience language: not used on Grismere unless Susan approves it later. The Presentations index still lists Churches under "Who They Are For" and in its description.
- **Where the free Encounter Journal belongs** (Susan unsure, 10-05). It is currently the Stay Connected signup on the homepage, Presentations, Books and Stay Connected pages.

- **Type roles (Susan, 10-05):** eyebrow/section label · page title · section heading · lead sentence · body · card/item title · CTA · quote/poetic line · metadata/status — to become site-wide styles. Exact sizes NOT locked: finish content first, pick 2–3 pages that feel right, derive the scale from them. The Guided Encounters opening is a candidate page-title reference. The size tokens from #20 are provisional until then.

## Before the Grismere registration goes live

- [ ] Grismere Symbol Card PDF (not yet in AARTS PROJECTS)
- [ ] Kit: tag for Grismere registrations; its numeric ID in Vercel as `KIT_TAG_GRISMERE`
- [ ] Kit: automation on that tag that emails the Symbol Card PDF
- [ ] Kit: custom fields `registration_presentation`, `registration_kind`, `registration_dates`, `registration_message` (so Susan sees the details)
- [ ] Workbook and Going Further: final wording (drafts exist: GRIS-PRESENTATION/Going_Deeper_with_Grismere_Further_Interest_Draft.docx, Where_Fishermen_Fear_to_Troll_Going_Further.docx)

## Cleanup pass before merge (checklist)

- [ ] Navigation consistency (nav, wayfinding band, footer)
- [ ] Duplicate or outdated wording
- [ ] Spacing / typography
- [ ] Redirects (no chains, no retired destinations)
- [ ] Hidden placeholders (nothing bracketed or empty shows)
- [ ] Mobile layout, all core routes
- [ ] Footer consistency (incl. legal pages, /experience) — homepage footer wording done 10-05
- [ ] Repeated menu band (WayfindingBand) above the footer on other pages — removed on homepage 10-05
- [ ] Stale workshop language outside Presentations & Workshops
- [ ] Book status labels
- [ ] Unused components / routes (documented, then retired)
