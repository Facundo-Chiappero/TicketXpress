import { PAGES } from '@/constants/frontend/pages'
import { REDIRECT_BUTTON } from '@/constants/frontend/redirectButton'
import Link from 'next/link'

export default function RedirectButton() {
  return (
    <Link
      href={PAGES.HOME}
      className="text-blue-600 underline"
      aria-label={REDIRECT_BUTTON.ARIA_LABEL}
      aria-describedby={REDIRECT_BUTTON.ARIA_DESCRIPTION}
    >
      {REDIRECT_BUTTON.LABEL}
    </Link>
  )
}
