'use client'

import { AUTH_BUTTON } from '@/constants/frontend/authButton'
import { signIn } from 'next-auth/react'

interface Props {
  Logo: () => JSX.Element
  method: string
  text: string
  callbackUrl: string
  classes?: string //used in UserCard
}

// auth button with different methods
export default function AuthButton({
  Logo,
  method,
  text,
  callbackUrl,
  classes,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        signIn(method, { callbackUrl })
      }}
      className={`flex items-center justify-center gap-2 border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-200 w-60 self-center ${classes}`}
      aria-label={text}
    >
      <span>{<Logo />}</span>
      <span className="hidden xs:inline">{text}</span>
      <span className="inline xs:hidden">{AUTH_BUTTON.ALTERNATIVE_TEXT}</span>
    </button>
  )
}
