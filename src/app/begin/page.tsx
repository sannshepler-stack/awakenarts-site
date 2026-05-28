// /begin has been retired. The homepage is now the threshold and entry point.
// This redirect ensures any existing links or bookmarks resolve gracefully.
import { redirect } from 'next/navigation'

export default function BeginRedirectPage() {
  redirect('/')
}
