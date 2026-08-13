# AWAKENARTS FILE AUDIT

**Goal 2 classification and conflict report**  
**Audit date:** August 13, 2026

## Scope and method

This audit inspected the live repository, the Claude AwakenArts working folder, relevant Desktop governance/workshop files, the August 10 Codex repository copy, and legacy Dragon card-art sources. It recorded path, type, area, purpose, modified date, version-like naming, textual references, probable website use, hash relationships, and status in machine-maintainable CSV and JSON inventories.

The inventory includes 4,222 significant file records. Exact hash matches were used for byte-identical duplicates. Same-name/different-hash results were treated as version/conflict indicators, not as permission to choose the newest file.

Important limitation: static reference checks can miss assets selected dynamically in code or CSS. “ORPHANED” is therefore a review flag, not deletion authority.

## Major organizational finding

There is one live Git repository, but at least two large secondary working copies and a separate non-Git Claude production folder contain overlapping AwakenArts materials:

- **Operational primary:** `/Users/sashe/Projects/AwakenArts/awakenarts-site`
- **Claude working files:** `/Users/sashe/Documents/Claude/Projects/AwakenArts -- When Language Shapes a Path`
- **Codex August 10 copy:** `/Users/sashe/Documents/Codex/2026-08-10/referenced-chatgpt-conversation-this-is-an/work/awakenarts-symbol-prototype`
- **Desktop governance/input:** `/Users/sashe/Desktop/Dragon Pass One.docx` and related AwakenArts working files
- **Legacy authored art:** `/Users/sashe/Documents/CARDS-ALL copy/`

The live repository should be treated as operational primary. Secondary copies are not automatically disposable: they may contain unique production outputs or later local edits. The inventory records their relationships so differences can be reviewed deliberately.

## Duplicates and near duplicates

- **1,238 exact duplicate hash groups** were found across the scoped locations. The largest driver is the live repository mirrored in the August 10 Codex working copy and partially mirrored in the Claude folder.
- **108 same-name/different-content groups** were found. These are version-chain or divergence flags, not duplicate-deletion candidates.
- The four `AwakenArts_Logo_Package`, `AwakenArts_Logo_Package 2`, `3`, and `4` directories in the Claude folder were verified as substantively identical; differences were limited to `.DS_Store` files and one render helper. They predate the approved July 14 identity system and have been archived together. The canonical active system is `brand-assets/` in the live repository, with deployed copies in `public/images/brand/` and favicon/app-icon files in `public/`.
- `Dragon_Facilitator_Notes.docx` and `Dragon_Workshop_Plan.docx` were reported by Goal 1 as identical to the supposed “v2” Desktop copies. The “v2” label is misleading because it does not represent a substantive revision.
- `dragon-figure.png` and `dragon_figure.png` coexist in the Claude workbook. Similar names are likely duplicate/near-duplicate candidates; imports and pixel/hash comparison must be checked before consolidation.
- Temporary Word lock file `/Users/sashe/Desktop/~$agon Pass One.docx` is non-substantive and safe to remove after Word is closed, but it was not deleted in this pass.
- `.DS_Store`, build caches, and `_DELETE_ME_*` directories are obvious cleanup candidates. They were inventoried or excluded as operational noise but not deleted.

## Version chains

### Dragon Companion

1. `Dragon_Companion_Manuscript_v1.docx` — earlier manuscript; preserves a warning about citation/phrasing inconsistency.
2. `Dragon_Facilitator_Companion_Prototype.docx` / `_v2.docx` — prototype chain in the Claude folder.
3. `Dragon_Companion_Good_Copy.docx` — best current authored source in the live repository, but it silently carries the inconsistency flagged in v1.
4. Reading/print PDFs — production/render derivatives, not editing authority.

**Classification:** Good Copy is **CURRENT / WORKING** source material; earlier manuscripts/prototypes are **HISTORICAL** or **SOURCE MATERIAL**, not silent authority.

### Dragon Figure Edition

The chain includes archived previews/contact sheets/series prototypes, `Dragon_Figure_Edition_11_Good_Copy.docx`, and `Dragon_Figure_Edition_11_Current_Production.pdf`.

**Classification:** the Good Copy and Current Production PDF are **CURRENT / WORKING** source-content files. The Edition form does not govern the new workshop architecture.

### Workshop presentation

`Dragon_Slide_Deck.pptx` and `Dragon_Encounter_Slides_v2.pptx` coexist without a single new-paradigm presentation authority.

**Classification:** both are **CURRENT / WORKING** inputs only. Neither should be called the final ten-stage participant presentation until an authorized build and test pass occurs.

## Contradictory standards

### Four workshop-stage models

- 4 movements — Recognition Model / general facilitation material
- 6 stages / 7 resource sections — Facilitator Resource Brief
- 9 stages — Dragon Workshop Plan
- 10 stages — New AwakenArts Paradigm

**Current rule:** the ten-stage sequence in `/Users/sashe/Desktop/Dragon Pass One.docx` governs workshop architecture. Earlier models remain reference/source material. A future Facilitator Guide should include a crosswalk so valuable older content is not lost.

### Companion packaging conflict

- `AwakenArts_Facilitator_Companion_Brief.docx` specifies separate participant and facilitator products.
- `AwakenArts_Companion_Precedent_and_Template_Standard.md` specifies a single bound document with detachable participant pages.
- The built Dragon Companion follows the latter pattern.
- The New Paradigm defines four distinct deliverables.

**Current rule:** use the New Paradigm's four-deliverable model. Preserve both older standards as source/history; neither may silently override current governance.

### Edition-led model versus workshop-led model

`AGENTS.md`, the Documentation Map, Production Charter, Roadmap, Site Architecture, Edition standards, and handoff material repeatedly describe the Figure Edition as the primary product and workshops/Companions as downstream product extensions. The New Paradigm makes the Edition the content foundation of an AwakenArts workshop and changes contact sheets from product previews into workshop doors.

**Current rule:** retain non-conflicting identity, production, stewardship, and technical guidance. Mark the conflicting product/workshop architecture as superseded.

### Dragon content conflicts

- `/encounters/dragon` quotes James 4:7 (“Resist the devil...”), while the Companion's core reversal says the Dragon is not a monster to defeat.
- Companion Learning cites Ephesians 2:14/16 and says the Dragon “fulfills his duty”; the settled Edition uses different citation/phrasing.
- Existing materials disagree on whether Scripture should precede or follow participant recognition prompts.

**Status:** **UNRESOLVED.** These require Susan's creative/theological direction.

## Misleading or obsolete instructions

- Existing `AGENTS.md` says the Production Charter is supreme over every conflict and describes the Figure Edition as the primary product. This is obsolete for workshop architecture. Goal 2 adds a top-priority current-materials instruction while preserving useful historical context.
- `AwakenArts_Documentation_Map.md` still sends new Edition work to `Figure_Edition_Standard_Dragon.md` in one operational passage even though the same map says that standard was superseded by `AwakenArts_Figure_Edition_Production_Standard.md`.
- `DRAGON_HANDOFF.md` and old roadmap instructions predate the new workshop paradigm and must not direct new work.
- Files called “Good Copy,” “Final,” or “Current Production” indicate production lineage, not governance. Their names do not make them current workshop architecture.

## Orphaned materials

- `src/app/editions/[slug]/read/page.tsx` and the `EditionReader` components implement a paced Dragon reading experience, but the normal visitor path does not link to it.
- `/workshops` and `/facilitator-orientation` are built and philosophically aligned, but are noindexed and absent from primary navigation.
- `/encounters/dragon` is not listed on the Encounters index and carries the unresolved tonal conflict above.
- The inventory marks 94 repository assets as possibly orphaned by static reference analysis. Review dynamic paths and CSS before moving any of them.
- Goal 1 reports an illegible/unconfirmed poem source and no confirmed final Encounter artwork source even though numerous Dragon image assets exist. This is an authority/provenance gap, not merely a missing-file problem.

## Missing referenced or required files

- No single file is yet the authorized ten-stage Dragon Participant Presentation.
- No single file is yet Susan's new-paradigm Dragon Facilitator Guide.
- No confirmed authoritative poem-text source and Encounter artwork source are identified for the live workshop Encounter.
- No current crosswalk reconciles the four workshop-stage models.
- No engagement/pacing/entertainment craft layer exists for the presenter.

These are missing components for later authorized goals; Goal 2 does not create their substantive content.

## Recommended archive candidates

Archive means “preserve outside the active working set,” not delete.

| Candidate | Why it can leave the active set | Current replacement or authority |
|---|---|---|
| August 10 Codex repository copy | Large mirror of the live repository with extensive exact duplicates | Live Git repo, after unique/different files are reviewed |
| Four redundant Claude logo packages and ZIP | Substantively identical June-era packages that predate the approved identity system | Archived together; canonical July 14 system is `brand-assets/` with deployed copies under `public/` |
| `_DELETE_ME_duplicate_*` and `_DELETE_ME_superseded_*` | Already labeled duplicate/superseded; operational clutter | Verified primary counterpart, after hash/dependency check |
| `Dragon_Companion_Manuscript_v1.docx` and prototypes | Earlier steps in a documented version chain | `Dragon_Companion_Good_Copy.docx`; retain v1 in history because it preserves the dropped inconsistency note |
| Figure Edition preview/contact-sheet prototypes under explicit Archive folders | Derived production history | Current Production PDF and Good Copy source |
| `Figure_Edition_Standard_Dragon.md` | Explicitly superseded as a general production standard | `AwakenArts_Figure_Edition_Production_Standard.md`; both subordinate to New Paradigm for workshop architecture |
| `DRAGON_HANDOFF.md` and old roadmap | Direct future AI toward an earlier phase | `AWAKENARTS_CURRENT_MATERIALS.md`, New Paradigm, and Goal 1 audit |
| Duplicate Desktop “v2” facilitator files | No substantive revision according to Goal 1 | Live-repository copies, after confirming hashes |
| Word lock file and `.DS_Store` files | Temporary operating-system artifacts | None |

### Completion-pass actions

- Archived all four legacy June logo-package directories and their ZIP at `/Users/sashe/Documents/Claude/Projects/AwakenArts -- When Language Shapes a Path/Archive/Legacy_Logo_Packages_Pre_2026-07-14/`.
- Retained the approved July 14 canonical masters in `brand-assets/` and every website-referenced deployed copy in place.
- Removed 69 `.DS_Store` files from the live repository working tree (excluding `.git`), 37 from the Claude AwakenArts tree, and the temporary `/Users/sashe/Desktop/~$agon Pass One.docx` Word lock file.
- Deleted no authored logo, workshop, Dragon, or website asset.

No archive move was made where provenance, Git history, website imports, or version divergence needed further review.

## Safe architecture adopted

The active repository remains physically stable. Goal 2 adds:

- top-level human map: `AWAKENARTS_CURRENT_MATERIALS.md`
- top-level audit: `AWAKENARTS_FILE_AUDIT.md`
- machine records under `docs/file-system/`
- AI-facing priority rules in `AGENTS.md`

Recommended future physical structure, to implement only during a dedicated migration pass:

```text
AwakenArts/
├── AWAKENARTS_CURRENT_MATERIALS.md
├── governing-current/
├── workshop-development/
│   ├── dragon-prototype/
│   ├── facilitator/
│   ├── participant/
│   └── presentation/
├── website/                 # keep actual repo paths stable
├── visual-assets/
├── research-reference/
├── history-superseded/
└── archive/
```

For now, these categories are implemented logically through the map and inventory. This avoids breaking imports, public URLs, and Git history merely to create tidier folders.
