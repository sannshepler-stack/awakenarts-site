# Retired Figure video encounters (archived 2026-10-09)

Per Susan: the Figure videos (Dragon, Vase, Queen, Butterfly, Continuum,
and the earlier Mermaid redirect) have served their purpose and no longer
belong on the site. Archived here, not deleted. Folders under `_archive`
are not routed by Next.js.

- Their old addresses (/encounters/dragon, etc.) redirect to /encounters
  (see next.config.js).
- Their video files moved out of `public/` to `archive/videos/` at the
  project root, so they are no longer published with the site.
- To restore one: move its folder back to `src/app/encounters/`, move its
  video back under `public/videos/`, and remove its redirect.
