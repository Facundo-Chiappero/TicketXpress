import { LOGIN_FORM } from '@/constants/frontend/loginForm'
import { PAGES } from '@/constants/frontend/pages'
import Link from 'next/link'

export default function LoginButton() {
  return (
    <Link
      href={PAGES.AUTH.LOGIN}
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit bg-gray-50 text-gray-900 border-white/15 border-2 self-center hover:bg-gray-200 whitespace-nowrap"
      title={LOGIN_FORM.BUTTONS.SUBMIT}
    >
      {LOGIN_FORM.BUTTONS.SUBMIT}
    </Link>
  )
}
