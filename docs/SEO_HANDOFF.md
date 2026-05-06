# AwakenArts — SEO & Discoverability Handoff

**Updated:** May 2026

This document captures the SEO / AI-indexing work that landed in the repo,
the external one-time steps that only Susan can do, and the open decisions
still pending.

---

## 1. What changed in the repo

### Crawler signals

- `src/app/robots.ts` — generates `/robots.txt` at build time. Explicitly
  welcomes mainstream search bots **and** AI bots: GPTBot, ChatGPT-User,
  OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot,
  Perplexity-User, Google-Extended, Applebot, Applebot-Extended, CCBot,
  Amazonbot, Bytespider, DuckAssistBot. Disallows the four
  encounter sub-pages (`/encounters/vase|dragon|mermaid|queen`) and
  internal paths.
- `src/app/sitemap.ts` — generates `/sitemap.xml` at build time. Lists
  every finished public page with priorities and change frequencies.
  Excludes the encounter sub-pages until they ship.
- `public/llms.txt` — emerging convention for telling AI tools what the
  site is about and where the canonical pages live.

### Metadata

- `src/app/layout.tsx` — adds `metadataBase`, default Open Graph image,
  Twitter card, robots directives, theme color, keywords, authors, and
  a JSON-LD `@graph` block (`Person` + `Organization` + `WebSite`)
  injected once at the root.
- Every major page (`/`, `/about`, `/begin`, `/library`, `/path`,
  `/gallery`, `/deck`, `/experience`) now exports `metadata` with a
  canonical URL and an Open Graph override.
- `/encounters` gets a layout that sets metadata + canonical for the
  entry; the four sub-pages each have a layout that sets
  `robots: { index: false, follow: false }` so they don't surface as
  standalone search results.

### What this fixes

- The "old version of the site is recorded" problem is almost certainly
  caused by missing canonical signals + no sitemap submission. Once this
  ships and you submit the sitemap (see step 2 below), Google and Bing
  will re-crawl from a clean baseline within days to a couple of weeks.
- AI assistants (ChatGPT, Claude, Perplexity, Google AI overviews) will
  now find the site, find the `llms.txt`, find the JSON-LD identity
  graph, and have enough context to attribute the work correctly.
- Sharing any AwakenArts URL on social will now produce a proper card
  with title, description, and image.

---

## 2. External one-time steps (these require your hands)

These can't be done from inside the repo. Set aside ~30 minutes after
the next deploy.

1. **Google Search Console** — go to https://search.google.com/search-console,
   add `https://awakenarts.com` as a property, verify via the DNS or
   meta-tag method (DNS via your domain registrar is cleanest). Then in
   the left sidebar: *Sitemaps* → submit `sitemap.xml`. Then *URL
   Inspection* → enter the homepage URL → "Request indexing".
2. **Bing Webmaster Tools** — https://www.bing.com/webmasters. You can
   import your Google Search Console verification, then submit the same
   sitemap. Bing also feeds ChatGPT search.
3. **Vercel deploy** — push the branch, deploy to production. Confirm
   that `https://awakenarts.com/robots.txt`, `/sitemap.xml`, and
   `/llms.txt` all return content.
4. **Test the social card** — paste your homepage URL into
   https://www.opengraph.xyz/ or share on Slack/Discord/iMessage and
   verify the preview looks right.
5. **Test JSON-LD** — paste the homepage URL into
   https://search.google.com/test/rich-results — should see the
   Person and Organization entities.

---

## 3. Open decisions / TODOs

### Default OG image

Right now the OG image is `queen-ann-hero-desktop.jpg` (1600×1100). Open
Graph prefers 1200×630. The current image will work but will be cropped
on some platforms. **Recommendation:** export a 1200×630 social card —
maybe Queen Ann + the "Symbols speak. The soul listens." tagline + the
logo — and save it as `public/images/brand/og-default.jpg`. Then update
the `images` arrays in `src/app/layout.tsx` to point there.

### Social profile links

Footer now has four `rel="me"` profile links — all verified by Susan:

- Instagram: `https://www.instagram.com/s.shepler/`
- Facebook: `https://www.facebook.com/s.a.shepler/`
- Pinterest: `https://www.pinterest.com/sshepler/`
- LinkedIn: `https://www.linkedin.com/in/sannshepler/`

If you add more platforms later (Substack, Bluesky, etc.), copy the same
`<li>` pattern in the `.footer-social` block of `src/app/page.tsx`.

### Homepage strategy — applied (soft secondary path)

The Alignment Brief reading is preserved: "Begin the Encounter" is still
the primary CTA. A small, muted line now sits beneath it offering
"New here? Begin Here — About Susan" for visitors who arrive via search
or social and want orientation before crossing. The styling is
deliberately quiet (`.hero-secondary` in `globals.css`) so the threshold
reading still dominates. If at any point this feels like too much, the
block lives at the bottom of the `.hero__text` div in `src/app/page.tsx`
and can be removed in 30 seconds.

### Soft-launch encounters — applied (Mermaid)

The Mermaid encounter is the public-facing piece. Its layout exports
real metadata + canonical, it's listed in `sitemap.ts`, and its
disallow line was removed from `robots.ts`. The Dragon, Queen, and Vase
encounters remain `noindex`.

**`/encounters` itself is a transitional doorway** (the intro video that
leads into Mermaid), so it's `noindex, follow` — crawlable so link-flow
passes through to Mermaid, but not surfaced as its own search result.
It's not in the sitemap. Search engines and AI tools should land
visitors directly on `/encounters/mermaid`.

**Pattern for promoting the next encounter:**

1. Edit that encounter's `layout.tsx` — replace the `noindex` block with
   the Mermaid-style metadata pattern.
2. Remove its line from `DISALLOWED_PATHS` in `src/app/robots.ts`.
3. Add a `{ path: '/encounters/<name>', ... }` entry to `src/app/sitemap.ts`.
4. Deploy.
