// ─── CardGrid ────────────────────────────────────────────────────────────────
// AwakenArts · Phase 2 · Responsive card layout container
//
// Breakpoints:
//   ≥ 769px  → 3 columns, 24px gap
//   481–768  → 2 columns, 20px gap
//   ≤ 480px  → 1 column,  24px gap
//
// CSS lives in globals.css (.card-grid).
// This component is a thin semantic wrapper — all layout is in CSS.
// ─────────────────────────────────────────────────────────────────────────────

interface CardGridProps {
  children: React.ReactNode
  /** Optional ARIA label for the grid region */
  label?: string
  /** Optional extra class */
  className?: string
}

export default function CardGrid({ children, label, className }: CardGridProps) {
  const cls = ['card-grid', className ?? ''].filter(Boolean).join(' ')

  return (
    <div
      className={cls}
      role="list"
      aria-label={label ?? 'Card grid'}
    >
      {children}
    </div>
  )
}
