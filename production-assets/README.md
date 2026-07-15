# AwakenArts Production Assets — Non-Public Archive

**Created:** 2026-07-15, per the AwakenArts Legal and Risk Standards package (`docs/AwakenArts-Legal-Standards/`), Stage 1 item 1 of the Controlled Remediation Directive.

This directory mirrors the convention already established by `brand-assets/` at the repo root: source and production-resolution material that must **not** be reachable through the deployed website lives here, outside `public/`. Nothing under this directory is served by Next.js — only files under `public/` are.

## Why these files moved

An audit found six full CMYK print-resolution TIFFs and two `_masters` folders (five full-resolution PNGs) sitting directly under `public/images/`, which made them directly downloadable by anyone with the URL. `robots.txt` only discourages search-engine crawling of certain page routes — it does not block direct file access, and these specific asset paths were never even in that disallow list. This is exactly the exposure the standard prohibits: "Keep source and print-production files outside publicly served directories."

Before moving anything, each file was checked against every `src/` reference. All eleven files below were confirmed **unreferenced by any live component** — the site's actual `<img>`/`src` references point at sibling web-resolution derivatives that remain in `public/` untouched. No live page depended on any of these paths.

## Source → destination map

| Original public path | New path |
|---|---|
| `public/images/forms/_masters/dragon-text.png` | `production-assets/images/forms/dragon-text.png` |
| `public/images/forms/_masters/grismere-text.png` | `production-assets/images/forms/grismere-text.png` |
| `public/images/forms/_masters/mermaid-grismere-still.png` | `production-assets/images/forms/mermaid-grismere-still.png` |
| `public/images/experiences/_masters/butterfly-wordart.png` | `production-assets/images/experiences/butterfly-wordart.png` |
| `public/images/experiences/_masters/word-form-spiral.png` | `production-assets/images/experiences/word-form-spiral.png` |
| `public/images/encounters/footer-01-print-cmyk.tiff` | `production-assets/images/encounters/footer-01-print-cmyk.tiff` |
| `public/images/encounters/deep/deep-02-print-cmyk.tiff` | `production-assets/images/encounters/deep/deep-02-print-cmyk.tiff` |
| `public/images/encounters/journey/journey-02-print-cmyk.tiff` | `production-assets/images/encounters/journey/journey-02-print-cmyk.tiff` |
| `public/images/encounters/table/table-01-print-cmyk.tiff` | `production-assets/images/encounters/table/table-01-print-cmyk.tiff` |
| `public/images/encounters/word/word-01-print-cmyk.tiff` | `production-assets/images/encounters/word/word-01-print-cmyk.tiff` |
| `public/images/encounters/continue/continue-01-print-cmyk.tiff` | `production-assets/images/encounters/continue/continue-01-print-cmyk.tiff` |

Moved with `git mv`, so full file history is preserved. The now-empty `public/images/forms/_masters/` and `public/images/experiences/_masters/` directories were removed.

## What stayed in `public/`

Every web-resolution derivative that the live site actually references (e.g. `public/images/forms/dragon-text.png` at 275 KB, vs. the 1.9 MB master moved above) was left exactly where it was. No page, image path, or rendered output changes as a result of this move.
