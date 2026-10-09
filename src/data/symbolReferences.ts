// Symbol References — Susan's editorial reference library (2026-10-09).
//
// Distinct from the published Symbol Cards (symbolCards.ts), the Symbol
// Vocabulary (symbols.ts) and the Journal entries. References are short
// orientation notes that the homepage symbol search can offer AFTER
// published AwakenArts content, never instead of it.
//
// Rules (Susan, 2026-10-09, and the integration Readme):
//   - Only entries with status "approved" are ever shown. Drafts never
//     leave the server: this module runs only on the server, and the
//     homepage passes just the approved, resolved entries to the browser.
//   - Related symbols are names, not URLs. A related link appears only when
//     the name resolves to a real published route (Symbol Card portal,
//     Symbol Vocabulary anchor, or a ready Journal entry). Nothing else is
//     linked, and no new destinations are created.
//   - Biblical contexts are checked editorially before an entry is approved.
//
// To publish an entry: edit src/data/symbol-references.json and change its
// "status" from "draft" to "approved".

import raw from './symbol-references.json'
import { symbolCards } from './symbolCards'
import { SYMBOLS } from './symbols'
import { JOURNAL_ENTRIES } from '@/components/journal/journal-entries'
import { isEntryReady } from '@/components/journal/types'

type RawEntry = (typeof raw.reference_entries)[number]

export interface SymbolReference {
  name: string
  /** Lowercased search keys: the name plus each "also found as" form. */
  keys: string[]
  canSuggest: string[]
  scripture: string[]
  note: string
  question: string
  /** Only related symbols that resolve to a published route. */
  related: { name: string; href: string }[]
}

const split = (s: string) =>
  s
    .split(';')
    .map((x) => x.trim())
    .filter(Boolean)

const bare = (s: string) => s.trim().toLowerCase().replace(/^the /, '')

// A related name resolves only to a published page, most specific first.
export function resolveRelated(name: string): { name: string; href: string } | null {
  const k = bare(name)
  const card = symbolCards.find((c) => c.slug === k)
  if (card) return { name: card.name, href: `/symbols/${card.slug}` }
  const vocab = SYMBOLS.find((s) => s.slug === k)
  if (vocab) {
    return {
      name: vocab.name.charAt(0) + vocab.name.slice(1).toLowerCase(),
      href: `/journal?word=${vocab.slug}#symbol-vocabulary`,
    }
  }
  const entry = JOURNAL_ENTRIES.find((e) => isEntryReady(e) && bare(e.name) === k)
  if (entry) return { name: entry.name, href: `/journal/${entry.categorySlug}#entry-${entry.slug}` }
  return null
}

function toReference(e: RawEntry): SymbolReference {
  return {
    name: e.name,
    keys: [e.name, ...split(e.also_found_as)].map((s) => s.toLowerCase()),
    canSuggest: split(e.can_suggest),
    scripture: split(e.scripture),
    note: e.note,
    question: e.reflection_question,
    related: split(e.related)
      .map(resolveRelated)
      .filter((r): r is { name: string; href: string } => r !== null),
  }
}

export const ALL_REFERENCE_ENTRIES: ReadonlyArray<RawEntry> = raw.reference_entries

/** Approved references only — the sole export the site displays. */
export function getApprovedSymbolReferences(): SymbolReference[] {
  return raw.reference_entries.filter((e) => e.status === 'approved').map(toReference)
}
