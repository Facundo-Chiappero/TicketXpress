import { GO_HOME_BUTTON } from '@/constants/frontend/goHomeButton'
import { PAGES } from '@/constants/frontend/pages'
import Link from 'next/link'

export default function GoHomeButton() {
  return (
    <Link
      href={PAGES.HOME}
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit min-w-fit dark:bg-gray-50 dark:text-gray-900 bg-zinc-800 text-white border-white/15 border-2 self-center dark:hover:bg-gray-200 hover:bg-zinc-900"
      title={GO_HOME_BUTTON.TITLE}
      aria-label={GO_HOME_BUTTON.TITLE}
    >
      {GO_HOME_BUTTON.LABEL}
    </Link>
  )
}
