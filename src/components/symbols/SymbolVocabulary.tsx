'use client'

import { useState } from 'react'
import { SYMBOLS } from '@/data/symbols'

// Symbol Vocabulary (2026-10-09, Susan: "the vocabulary is good and can
// find a place on the Symbols page"). The same 20-word vocabulary and
// fixed reveal area as /christian-symbols' SymbolsExperience, as a
// standalone piece so it can sit on /symbols. Same classes, same styles.

export default function SymbolVocabulary() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const active = activeSlug ? SYMBOLS.find((s) => s.slug === activeSlug) : undefined

  return (
    <section className="symbols-vocab-section" aria-labelledby="symbols-vocab-heading">
      <h2 id="symbols-vocab-heading" className="symbols-vocab-heading">
        Symbol Vocabulary
      </h2>
      <p className="symbols-vocab-cue">Choose a symbol to discover its meaning.</p>

      <div className="symbols-vocab-list" role="list">
        {SYMBOLS.map((symbol, i) => (
          <span key={symbol.slug} role="listitem" className="symbols-vocab-item">
            <button
              type="button"
              className={`symbols-vocab-word${activeSlug === symbol.slug ? ' is-active' : ''}`}
              onClick={() => setActiveSlug(symbol.slug)}
              aria-pressed={activeSlug === symbol.slug}
            >
              {symbol.name}
            </button>
            {i < SYMBOLS.length - 1 && (
              <span className="symbols-vocab-sep" aria-hidden="true">·</span>
            )}
          </span>
        ))}
      </div>

      {/* Fixed reveal area — content changes here, the list above never moves. */}
      <div className="symbols-vocab-reveal" aria-live="polite">
        {active ? (
          <div className="symbols-vocab-reveal__inner">
            <p className="symbols-vocab-reveal__name">{active.name}</p>
            <p className="symbols-vocab-reveal__meanings">{active.meanings.join(' · ')}</p>
            <p className="symbols-vocab-reveal__ref">{active.scriptureReference}</p>
          </div>
        ) : (
          <div className="symbols-vocab-reveal__inner symbols-vocab-reveal__inner--empty" aria-hidden="true" />
        )}
      </div>
    </section>
  )
}
