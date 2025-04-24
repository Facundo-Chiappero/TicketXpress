import { PAGES } from '@/constants/frontend/pages'
import { SIGN_UP_FORM } from '@/constants/frontend/signupForm'
import Link from 'next/link'

export default function SignupButton() {
  return (
    <Link
      href={PAGES.AUTH.SIGNUP}
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f] whitespace-nowrap"
      title={SIGN_UP_FORM.BUTTONS.SUBMIT}
    >
      {SIGN_UP_FORM.BUTTONS.SUBMIT}
    </Link>
  )
}
