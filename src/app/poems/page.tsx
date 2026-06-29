// /poems has been retired and renamed Gallery (2026-06-29 directive).
// "The current Poems page should be renamed Gallery." This redirect
// ensures any existing links or bookmarks resolve gracefully.
import { redirect } from 'next/navigation'

export default function PoemsRedirectPage() {
  redirect('/gallery')
}
