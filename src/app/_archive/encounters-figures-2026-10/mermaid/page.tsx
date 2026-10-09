// /encounters/mermaid has been retired.
//
// This route used to hold the Homeward Paths five-movement scroll
// prototype (Journey/Deep/Word/Table/Continue as panels in one forced
// sequence) — a placeholder built under the "mermaid" figure slug purely
// because the route existed. Susan's 2026-06-25 "Begin New Encounter
// Architecture" directive supersedes that prototype entirely: the five
// themes are now their own standalone pages at /encounters/journey,
// /deep, /table, /word, /continue, and figures are not part of
// Encounters at all (see AwakenArts_Site_Architecture.md).
//
// Permanent redirect so the old URL still lands somewhere meaningful
// instead of showing stale, superseded content.
import { redirect } from 'next/navigation'

export default function MermaidRedirectPage() {
  redirect('/encounters/journey')
}
