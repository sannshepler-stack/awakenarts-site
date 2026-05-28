// /journey has been retired. Route permanently redirects to /studio.
// See next.config.js for the 308 redirect; this component is a
// server-side fallback in case the config redirect is bypassed.
import { redirect } from 'next/navigation'

export default function JourneyRedirectPage() {
  redirect('/studio')
}
