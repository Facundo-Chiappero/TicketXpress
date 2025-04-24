import { GO_HOME_BUTTON } from '@/constants/frontend/goHomeButton'
import { PAGES } from '@/constants/frontend/pages'
import Link from 'next/link'

export default function GoHomeButton() {
  return (
    <Link
      href={PAGES.HOME}
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit min-w-fit bg-gray-50 text-gray-900 border-white/15 border-2 self-center hover:bg-gray-200"
      title={GO_HOME_BUTTON.TITLE}
      aria-label={GO_HOME_BUTTON.TITLE}
    >
      {GO_HOME_BUTTON.LABEL}
    </Link>
  )
}
