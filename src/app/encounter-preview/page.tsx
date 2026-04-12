// ─── /encounter-preview ──────────────────────────────────────────────────────
// TEMPORARY REVIEW PAGE — not linked from any production route.
// Review at: http://localhost:3000/encounter-preview
// DELETE or replace with real landing page before Phase 4 launch.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import EncounterCard from '@/components/encounter/EncounterCard'

export const metadata: Metadata = {
  title: 'Encounter Preview — AwakenArts [DEV]',
  robots: { index: false, follow: false },
}

export default function EncounterPreview() {
  return (
    <>
      <Nav />

      {/* ── DEV banner ── */}
      <div style={{
        position: 'fixed',
        top: '72px',  /* clears fixed nav */
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#1C2B3A',
        color: '#C9A84C',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '.65rem',
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '.4rem 1rem',
      }}>
        Dev review only — not linked from any production page
      </div>

      {/* ── Single centered encounter block ── */}
      <main style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',   /* nav + banner clearance */
        paddingBottom: '4rem',
        background: '#FAF7F2',
      }}>
        <EncounterCard />
      </main>
    </>
  )
}
