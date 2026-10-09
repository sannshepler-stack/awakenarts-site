'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { symbolCards } from '@/data/symbolCards'
import { SYMBOLS } from '@/data/symbols'
import { ENCOUNTER_INFO } from '@/data/encounters'
import { JOURNAL_ENTRIES } from '@/components/journal/journal-entries'
import { CATEGORIES } from '@/components/journal/categories'
import { isEntryReady } from '@/components/journal/types'

// "What Symbols Matter to You?" — homepage feature (approved by Susan,
// 2026-10-09). Placed between "An image can become a mirror" and
// "Scripture Speaks in Symbols".
//
// Principles (Susan):
//   - Search is private and entirely in the browser. Nothing typed is
//     stored, logged, or sent anywhere — no analytics on the query.
//   - Only genuine matches from published content. No generated
//     interpretations.
//   - When a symbol is not yet in the collection, say so honestly, then
//     offer A Practice of Attention around the visitor's own words, with
//     the Journal and Make Your Own Word Art.
//   - Interest themes and related-symbol suggestions are a later phase.

type Result = { key: string; name: string; kind: string; line: string; href: string }

const STOPWORDS = new Set([
  'the', 'a', 'an', 'my', 'our', 'your', 'his', 'her', 'their', 'of', 'and', 'or', 'in', 'on', 'at', 'with',
  'to', 'for', 'from', 'is', 'it', 'its', 'that', 'this', 'i', 'me', 'we', 'symbol', 'symbols', 'meaning',
])

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/'s\b/g, '')
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function singular(w: string): string {
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y'
  if (w.length > 4 && /(ches|shes|sses|xes)$/.test(w)) return w.slice(0, -2)
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1)
  return w
}

const keyOf = (name: string) => normalize(name).replace(/^the /, '')

// A query word matches a symbol only when it is the symbol or its plural.
// No partial-word matching: "cross" must not find The Crossroads (genuine
// matches only, per Susan).
function matches(word: string, key: string): boolean {
  return word === key || singular(word) === key
}

// Built once from the site's own published content.
const INDEX: { key: string; result: Result }[] = [
  ...symbolCards.map((c) => ({
    key: c.slug,
    result: {
      key: `card-${c.slug}`,
      name: c.name,
      kind: 'Symbol Card',
      line: c.front.meanings.join(' · '),
      href: `/symbols/${c.slug}`,
    },
  })),
  ...SYMBOLS.map((s) => ({
    key: s.slug,
    result: {
      key: `vocab-${s.slug}`,
      name: s.name.charAt(0) + s.name.slice(1).toLowerCase(),
      kind: 'Symbol Vocabulary',
      line: `${s.meanings.join(' · ')} · ${s.scriptureReference}`,
      href: `/journal?word=${s.slug}#symbol-vocabulary`,
    },
  })),
  ...JOURNAL_ENTRIES.filter(isEntryReady).map((e) => ({
    key: keyOf(e.name),
    result: {
      key: `journal-${e.slug}`,
      name: e.name,
      kind: `Journal · ${CATEGORIES.find((c) => c.slug === e.categorySlug)?.name ?? 'Reflection'}`,
      line: e.orientation ?? '',
      href: `/journal/${e.categorySlug}#entry-${e.slug}`,
    },
  })),
  ...ENCOUNTER_INFO.flatMap((e) =>
    [keyOf(e.title), ...e.keywords].map((k) => ({
      key: k,
      result: {
        key: `encounter-${e.slug}`,
        name: e.title,
        kind: 'Christian Encounter',
        line: `${e.statement} · ${e.source}`,
        href: `/encounters/${e.slug}`,
      },
    })),
  ),
]

function search(query: string): Result[] {
  const words = normalize(query)
    .split(' ')
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w))
  const seen = new Set<string>()
  const out: Result[] = []
  for (const { key, result } of INDEX) {
    if (seen.has(result.key)) continue
    if (words.some((w) => matches(w, key))) {
      seen.add(result.key)
      out.push(result)
    }
  }
  return out
}

const SUGGESTIONS = ['path', 'lamp', 'vine', 'gate', 'pearl']

// Three published card fronts, fanned (decorative).
const FAN = [
  { src: '/images/symbols/Lamp_Card_Front-opt.jpg', left: '2%', rotate: -12, z: 1 },
  { src: '/images/symbols/Pearl_Card_Front-opt.jpg', left: '52%', rotate: 12, z: 2 },
  { src: '/images/symbols/Gate_Card_Front-opt.jpg', left: '27%', rotate: 0, z: 3 },
]

const STEPS: [string, (s: string) => string | null][] = [
  ['Notice.', (s) => `Where does “${s}” appear in your life?`],
  ['Become curious.', () => 'What first drew you to it?'],
  ['Remain with the image.', () => 'Let it stay with you before deciding what it means.'],
  ['Allow recognition to emerge.', () => null],
  ['Do not force interpretation.', () => null],
]

const label: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
}

export default function HomeSymbolSearch() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [results, setResults] = useState<Result[]>([])

  function run(q: string) {
    const trimmed = q.trim().replace(/\s+/g, ' ')
    if (!trimmed) return
    setSubmitted(trimmed.length > 60 ? trimmed.slice(0, 57) + '…' : trimmed)
    setResults(search(trimmed))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    run(value)
  }

  // Results and the not-found response sit beneath the invitation, in open
  // space rather than inside a box (Susan, 2026-10-09: "everything doesn't
  // have to fit inside the same box").
  const resultsBlock = (
    <div aria-live="polite" style={{ maxWidth: 1040, margin: '0 auto' }}>
      {submitted !== null && results.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <p style={{ ...label, margin: '0 0 1.25rem', textAlign: 'center' }}>Found in AwakenArts</p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1rem',
            }}
          >
            {results.map((r) => (
              <li key={r.key}>
                <Link
                  href={r.href}
                  style={{
                    display: 'block',
                    height: '100%',
                    boxSizing: 'border-box',
                    textDecoration: 'none',
                    background: '#fff',
                    borderTop: '2px solid var(--gold)',
                    boxShadow: '0 8px 22px rgba(28, 43, 58, 0.08)',
                    padding: '1rem 1.2rem 1.15rem',
                  }}
                >
                  <span style={{ ...label, display: 'block', fontSize: '0.66rem' }}>{r.kind}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1.35rem', color: 'var(--deep)', margin: '0.3rem 0 0.2rem' }}>
                    {r.name} <span aria-hidden="true" style={{ color: 'var(--gold)' }}>→</span>
                  </span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--mid)' }}>
                    {r.line}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {submitted !== null && results.length === 0 && (
        <div style={{ maxWidth: 620, margin: '3rem auto 0', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', lineHeight: 1.5, color: 'var(--deep)', margin: '0 0 1.5rem' }}>
            We don&rsquo;t yet have a dedicated AwakenArts entry for &lsquo;{submitted},&rsquo; but you can begin
            exploring what it means to you.
          </p>
          <ol style={{ margin: '0 auto 1.75rem', paddingLeft: '1.5rem', maxWidth: 520, textAlign: 'left' }}>
            {STEPS.map(([step, q]) => {
              const question = q(submitted)
              return (
                <li key={step} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-size)', lineHeight: 1.6, color: 'var(--deep)', margin: '0 0 0.45rem' }}>
                  <strong style={{ fontWeight: 600 }}>{step}</strong>
                  {question ? ` ${question}` : ''}
                </li>
              )
            })}
          </ol>
          <p style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.75rem', justifyContent: 'center', margin: 0 }}>
            <Link href="/journal" style={label}>Continue in the Journal &rarr;</Link>
            <Link href="/experience" style={label}>Make Your Own Word Art &rarr;</Link>
          </p>
        </div>
      )}
    </div>
  )

  return (
    <section aria-labelledby="symbol-search-heading" style={{ background: 'var(--cream)', padding: 'var(--band-gap) 1.5rem' }}>
      <div
        style={{
          maxWidth: 1040,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '3rem 4rem',
          alignItems: 'center',
        }}
      >
        {/* Embellishment: three of the published symbol cards, fanned like a
            hand of cards — what is waiting inside. Decorative. */}
        <div aria-hidden="true" style={{ position: 'relative', width: '86%', maxWidth: 380, aspectRatio: '1 / 0.8', margin: '0 auto' }}>
          {FAN.map((f) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={f.src}
              src={f.src}
              alt=""
              loading="lazy"
              style={{
                position: 'absolute',
                top: '6%',
                left: f.left,
                width: '46%',
                aspectRatio: '5 / 7',
                maxHeight: '88%',
                objectFit: 'cover',
                borderRadius: 8,
                transform: `rotate(${f.rotate}deg)`,
                transformOrigin: 'bottom center',
                boxShadow: '0 14px 30px rgba(28, 43, 58, 0.22)',
                zIndex: f.z,
              }}
            />
          ))}
        </div>

        <div style={{ textAlign: 'left' }}>
          <p className="eyebrow">A Personal Invitation</p>
          <h2
            id="symbol-search-heading"
            style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', color: 'var(--deep)', margin: '0.85rem 0 0.75rem', lineHeight: 1.15 }}
          >
            What Symbols Matter to You?
          </h2>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--mid)', margin: '0 0 1.75rem', maxWidth: 480 }}>
            An image you wear, an object you treasure, a symbol from Scripture, or something that keeps appearing in your
            life.
          </p>

          <form
            role="search"
            onSubmit={onSubmit}
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', gap: '0.75rem', maxWidth: 480 }}
          >
            <label htmlFor="symbol-search-input" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
              Type a symbol
            </label>
            <input
              id="symbol-search-input"
              type="search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type a symbol…"
              autoComplete="off"
              maxLength={120}
              style={{
                flex: '1 1 220px',
                minWidth: 0,
                height: 'auto',
                boxSizing: 'border-box',
                fontFamily: 'var(--serif)',
                fontSize: '1.15rem',
                color: 'var(--deep)',
                background: '#fff',
                border: 0,
                borderBottom: '1px solid var(--gold)',
                borderRadius: 0,
                padding: '0.8rem 0.25rem',
              }}
            />
            <button
              type="submit"
              className="home-coll-cta home-coll-cta--light-surface"
              style={{ cursor: 'pointer', background: 'transparent', flex: '0 0 auto', width: 'auto', margin: 0 }}
            >
              Explore
            </button>
          </form>

          <p style={{ margin: '1rem 0 0', fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--mid)' }}>
            Try:{' '}
            {SUGGESTIONS.map((s, i) => (
              <span key={s}>
                <button
                  type="button"
                  onClick={() => {
                    setValue(s)
                    run(s)
                  }}
                  style={{
                    background: 'none',
                    border: 0,
                    padding: 0,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    color: 'var(--deep)',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(138, 106, 31, 0.45)',
                    textUnderlineOffset: 4,
                  }}
                >
                  {s}
                </button>
                {i < SUGGESTIONS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>

      {resultsBlock}
    </section>
  )
}
