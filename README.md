# AwakenArts Site

**Where Symbol Meets Soul** · awakenarts.com

Built with Next.js 14 (App Router) · TypeScript · CSS Modules

---

## First-time setup

```bash
npm install
npm run dev        # opens http://localhost:3000
```

---

## Add your remaining images

The folder structure is already created. Drag your files in and rename them
as shown. Full details in `IMAGE_REPOSITORY.md`.

### Quick checklist

**`public/images/brand/`** — already has:
- `logo-nav.png` ✓
- `logo-hero.png` ✓
- `ann-cover.jpg` ✓  (hero background — terracotta Ann figure + king silhouette)
- `ann-cover-mobile.jpg` ✓

Still needed:
- `ann-cover.png` ← original ANN-COVER_copy.png (keep as source reference)
- `queen-ann-poem.png` ← rename from 1A_Queen_Ann__SPIRIT_IMAGE.png
- `tuck-box.jpg` ← rename from final_Tuck_box_packaging.jpg
- `info-card-poems.jpg` ← rename from final_information_card_3_-_front.jpg
- `info-card-ann.jpg` ← rename from final_information_card_4_-_front.jpg
- `book-cover.jpg` ← NEEDED from originator
- `about.jpg` ← NEEDED from originator

**`public/images/cards/originals/`** — all needed:
- `queen-ann-spirit.png` ← rename from Anne-Image-2.png
- `dark-dragon.png` ← rename from Dark-Dragon.png
- `flower.png` ← rename from FLOWER-2.png
- `thoughts-bear.jpg` ← rename from Bear.jpg
- `wonder.png` ← rename from Wonder.png

**`public/images/cards/formatted/`** — all needed (shown in homepage deck preview):
- `fear.jpg` ← rename from Card_-_3.jpg
- `femininity.jpg` ← rename from Card_-_4.jpg
- `grace.jpg` ← rename from Card_-_5.jpg
- `energy.jpg` ← rename from Card_-_6.jpg
- `crossroad.jpg` ← rename from Card_-_8.jpg
- `tricksters.jpg` ← rename from Card_-_9.jpg
- `excess.jpg` ← rename from Card_-_10.jpg
- `thoughts.jpg` ← rename from Card_-_13.jpg
- `card-back.jpg` ← rename from final_front_card.jpg

**`public/images/maiden-archetypes/`**:
- `wonder.png` ← rename from Wonder.png (same file as cards/originals/wonder.png)
- `christmas.png` ← export from Carolynne_CC_Print.pdf

---

## Image background rules

| Image | Background | How displayed |
|---|---|---|
| `logo-nav.png`, `logo-hero.png` | Black | `mix-blend-mode: screen` on dark nav/footer — black disappears |
| `ann-cover.jpg` | Terracotta | Full-bleed hero with cream gradient overlay |
| `queen-ann-spirit.png`, `dark-dragon.png`, `flower.png`, `queen-ann-poem.png` | Black | Place on `#1C2B3A` deep navy |
| `wonder.png`, `ann-cover.png` | Transparent | Place on `#FAF7F2` cream |
| `thoughts-bear.jpg` | White | Place on `#C89A3E` warm gold |
| All formatted cards | Varies | Shown at full size on Offerings page |

---

## Project structure

```
awakenarts-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx        Root layout + SEO metadata
│   │   ├── page.tsx          Homepage (server component)
│   │   └── globals.css       All styles + design system
│   ├── components/
│   │   ├── Nav.tsx           Fixed nav + mobile hamburger (client)
│   │   └── SignupForm.tsx    Email capture form (client)
│   └── data/
│       └── cards.json        All 12 card interpretations + journaling prompts
├── public/
│   └── images/               All site images (see IMAGE_REPOSITORY.md)
├── IMAGE_REPOSITORY.md       Complete asset map — read before touching images
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Deploy to Vercel

```bash
git add .
git commit -m "AwakenArts Phase 3 launch"
git push origin main
```

Vercel detects Next.js automatically. No extra configuration needed.

### Environment variables (add in Vercel dashboard when ready)

| Variable | Purpose |
|---|---|
| `CONVERTKIT_API_KEY` | Email signup → ConvertKit |
| `CONVERTKIT_FORM_ID` | ConvertKit form target ID |

Wire these in `src/components/SignupForm.tsx` via an API route at
`src/app/api/subscribe/route.ts`.

---

## Phase 4 next steps

- [ ] Wire `SignupForm` to ConvertKit (`/api/subscribe`)
- [ ] Build `/guidance-deck` page with interactive card draw component
- [ ] Build `/library` page with article index
- [ ] Build `/offerings` page — deck, book, prints, digital downloads
- [ ] Build `/about` page — formation narrative
- [ ] Build `/begin-here` page — full approved copy from Master Brief Appendix A
- [ ] Add remaining 40+ card originals to `cards.json` (6–8 per Claude session)

---

© Susan Ann Shepler · AwakenArts.com · All Rights Reserved · Confidential
