// ─── Card ────────────────────────────────────────────────────────────────────
// AwakenArts · Phase 2 + 3 · Structural card primitive
//
// SPEC REQUIREMENTS (non-overrideable):
//   • aspect-ratio: 3 / 5  — locked on outer container
//   • object-fit: cover     — inline on both img elements
//   • object-position: center top — subject preserved at every breakpoint
//   • Front/back layering via absolute position + z-index — zero DOM reflow
//   • No layout shift — container size driven by aspect-ratio only
//
// PHASE 3 ADDITIONS (opt-in via props, CSS-driven):
//   • interactive prop → adds .card--interactive → CSS hover scale + shadow
//   • variant="fade"  → adds .card--fade       → CSS opacity cross-fade on reveal
//
// USAGE:
//   <Card frontSrc="..." frontAlt="..." />
//   <Card frontSrc="..." frontAlt="..." interactive revealed />
//   <Card frontSrc="..." frontAlt="..." variant="fade" interactive revealed />
//
// ASSET INSERTION:
//   Drop final card fronts into /public/images/cards/fronts/
//   Drop final card backs into  /public/images/cards/backs/
//   Replace frontSrc / backSrc props in DrawExperience MOCK_CARDS.
//   No component changes required.
// ─────────────────────────────────────────────────────────────────────────────

const CARD_BACK_DEFAULT = '/images/cards/backs/card-back.jpg'
const CARD_BACK_ALT_DEFAULT = 'AwakenArts card back — ornamental design'

interface CardProps {
  /** Front artwork path — set to placeholder until final assets available */
  frontSrc: string
  /** Accessible alt for the front face */
  frontAlt: string
  /** Back image path — defaults to standard deck back */
  backSrc?: string
  /** Accessible alt for the back face */
  backAlt?: string
  /**
   * false (default) → back face visible
   * true            → front face visible
   * Driven by DrawExperience state in Phase 3.
   */
  revealed?: boolean
  /**
   * Enables CSS hover interaction (scale 1.03 + shadow elevation).
   * Only set this on cards the user is expected to click.
   */
  interactive?: boolean
  /**
   * 'fade' → adds .card--fade → CSS opacity cross-fade on reveal (250ms ease).
   * undefined → instant z-index swap (no transition).
   * Used by DrawExperience. NOT used on CardGrid preview cards.
   */
  variant?: 'fade'
  /** Optional extra class forwarded to root element */
  className?: string
}

export default function Card({
  frontSrc,
  frontAlt,
  backSrc      = CARD_BACK_DEFAULT,
  backAlt      = CARD_BACK_ALT_DEFAULT,
  revealed     = false,
  interactive  = false,
  variant,
  className,
}: CardProps) {

  const rootClass = [
    'card',
    revealed     ? 'card--revealed'     : '',
    interactive  ? 'card--interactive'  : '',
    variant === 'fade' ? 'card--fade'   : '',
    className ?? '',
  ].filter(Boolean).join(' ')

  return (
    <div
      className={rootClass}
      aria-label={revealed ? frontAlt : backAlt}
    >
      {/* Back face — z-index 2 by default, drops to 1 when revealed */}
      <div className="card__face card__back" aria-hidden={revealed}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={backSrc}
          alt={backAlt}
          draggable={false}
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>

      {/* Front face — z-index 1 by default, rises to 2 when revealed */}
      <div className="card__face card__front" aria-hidden={!revealed}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frontSrc}
          alt={frontAlt}
          draggable={false}
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
    </div>
  )
}
