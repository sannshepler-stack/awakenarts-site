// ─── /forms-prototype — Page ─────────────────────────────────────────────────
// AwakenArts · The Forms — prototype
//
// Hidden prototype. Not linked from navigation. Not indexed (see layout.tsx).
// Presents the authored Forms from the Symbolic Forms Collection as a
// quiet, image-led gallery — still images with poem names. The complete
// poem-forms themselves are held within the Collection; this page is a
// visual threshold.
//
// Hierarchy (matches /journal pattern):
//   • topBar (upper-left): ← Home — site-level return, standalone
//   • centered identity block: eyebrow + title + lede + intro
//   • gallery of FormPanel entries
//   • footnote
//
// All Forms data is centralized in src/components/forms/. To add a Form,
// edit forms-data.ts. To stage a Form before its artwork is ready, omit
// imageSrc and the panel renders as a restrained placeholder.
//
// IMPORTANT: Forms use authored poem/form names (e.g. "Queen Ann").
// They are not Journal entries, which use symbolic motifs (e.g. "The
// Crown"). Do not mix the two systems.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import FormPanel from '@/components/forms/FormPanel'
import { SYMBOLIC_FORMS } from '@/components/forms/forms-data'
import styles from './page.module.css'

export default function FormsPrototypePage() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.homeArrow} aria-hidden="true">
            ←
          </span>
          Home
        </Link>
      </div>

      <div className={styles.container}>
        <span className={styles.eyebrow}>The Forms</span>
        <h1 className={styles.title}>The Forms</h1>

        <p className={styles.lede}>
          Symbolic concrete poetic forms from the AwakenArts Symbolic
          Forms Collection.
        </p>
        <p className={styles.intro}>
          These image-shaped poems are presented here as visual
          thresholds. The complete works are held within the collection
          itself.
        </p>

        <div className={styles.gallery} role="list" aria-label="Symbolic Forms">
          {SYMBOLIC_FORMS.map((form) => (
            <div key={form.slug} role="listitem">
              <FormPanel form={form} />
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          Prototype · The Forms · not yet linked from navigation
        </p>
      </div>
    </main>
  )
}
