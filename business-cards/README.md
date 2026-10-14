# AwakenArts business cards — series (Oct 14, 2026)

Preserved on the `assets/business-cards` branch only. Not part of the website; do not merge to `main`.

## Status
Near-final, ready for a printed proof. Four fronts share one back.

| Card | Artwork | Title placement |
|---|---|---|
| Merriweather | Author-Page illustration, cropped to left 40%, fades to cream right and bottom | MERRIWEATHER, navy, under the art |
| Grismere | Seascape painting (figure on the rocks), fades to cream top, right, bottom | GRISMERE, navy, under the art |
| Poppy | Tree word-figure cut from the Poppy Motif page, whole, on cream | POPPY, navy, under the art |
| Queen Ann | Chess piece + Queen Ann word-figure on rust; chess piece runs off left; gold line at panel edge | QUEEN ANN, cream, top-left (bottom is the word-figure itself) |

**Front (all):** compact horizontal logo · "When Language / Shapes a Path" · gold rule · *Explore the Symbols / Shaping Your Story* · AWAKENARTS.COM.
**Back (shared):** all cream; gold monogram · Susan Ann Shepler · gold leaf divider · MA, Counseling / Certified Transformative Language Artist / Certified Journal Instructor · info@awakenarts.com · AwakenArts.com (navy) · QR 0.64 in → https://awakenarts.com (tested).

## Decisions made
- Credential is locked as "MA, Counseling"; Transformative Language Artist is spelled out.
- No border frame (read clinical). No foliage on the back (tried faded and full-colour; both rejected).
- Email signature keeps the navy logo panel (light vs dark).

## Files
- `print/` — send these: 3.75 × 2.25 in (3.5 × 2 trim + 0.125 bleed), 2 pages (front, back), no marks.
- `proofs/` — letter sheet at 100% with trim, safe area and crop marks.
- `mockups/` — four fronts + back.
- `email-signature/` — HTML signature; its logo PNG must be hosted at awakenarts.com/images/brand/email/ before it shows in mail.
- `source-art/` — originals as supplied. `build/` — scripts and prepared panels to regenerate.

## Printing (open)
- Recommended: MOO Cotton (soft, uncoated) or Jukebox Print Mohawk Superfine (truer colour). Order a printed proof first: blues (Merriweather) may dull in CMYK.
- MOO's standard bleed is smaller (3.66 × 2.16 in); make a MOO-sized file if ordering there.

## Regenerate
`python3 build.py` (shared back, email signature) then `python3 variants.py` (four fronts). Needs Playwright Chromium, Pillow, qrcode, cairosvg; Lora is a system font, Cormorant Garamond is in `build/fonts/`. Paths in the scripts point to the original working folder and need adjusting.
