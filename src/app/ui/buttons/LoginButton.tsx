import { LOGIN_FORM } from '@/constants/frontend/loginForm'
import { PAGES } from '@/constants/frontend/pages'
import Link from 'next/link'

export default function LoginButton() {
  return (
    <Link
      href={PAGES.AUTH.LOGIN}
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit dark:bg-gray-50 dark:text-gray-900  border-2 border-black/15 border-solid self-center hover:bg-gray-200 whitespace-nowrap"
      title={LOGIN_FORM.BUTTONS.SUBMIT}
    >
      {LOGIN_FORM.BUTTONS.SUBMIT}
    </Link>
  )
}
