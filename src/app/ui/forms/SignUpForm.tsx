'use client'

import Link from 'next/link'
import AuthFormWrapper from './AuthFormWrapper'
import AuthInput from './AuthInput'
import { Google } from '../icons/Google'
import useAuthAction from '@/hooks/useAuthAction'
import AuthButton from '../buttons/AuthButton'
import RedirectButton from '../buttons/RedirectButton'
import ErrorMessage from './ErrorMessage'
import PasswordInput from './PasswordInput'
import { useState } from 'react'
import { PARAMS } from '@/constants/frontend/params'
import { SIGN_UP_FORM } from '@/constants/frontend/signupForm'
import { PAGES } from '@/constants/frontend/pages'

export default function SignUpForm() {
  const { handleSubmit, loading, error, success, callbackUrl } =
    useAuthAction(true)
  //used in Link tag
  const callbackUrlWithPageUrl = callbackUrl
    ? `?${PARAMS.AUTH_CALLBACK}=${encodeURIComponent(callbackUrl)}`
    : ''
        const [passwordVisible, setPasswordVisible] = useState(false)
    

  return (
    <AuthFormWrapper title={SIGN_UP_FORM.TITLE} loading={loading}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <AuthInput
          name="name"
          type="text"
          required
          autoFocus
          label={SIGN_UP_FORM.LABELS.NAME}
          autoComplete="name"
          placeholder={SIGN_UP_FORM.PLACEHOLDERS.NAME}
        />

        <AuthInput
          name="email"
          type="email"
          required
          label={SIGN_UP_FORM.LABELS.EMAIL}
          autoComplete="email"
          placeholder={SIGN_UP_FORM.PLACEHOLDERS.EMAIL}
        />
                <PasswordInput label={SIGN_UP_FORM.LABELS.PASSWORD} updateVisibility={() => setPasswordVisible(prev => !prev)} passwordVisible={passwordVisible} placeholder={SIGN_UP_FORM.PLACEHOLDERS.PASSWORD} />
        

                {error && <ErrorMessage error={error}/>}
        
        {success && (
          <>
            <p className="text-green-700 text-sm">{success}</p>
            <RedirectButton />
          </>
        )}

        <p className="text-sm text-center">
          {SIGN_UP_FORM.BUTTONS.REDIRECT_TEXT}{' '}
          <Link
            href={`${PAGES.AUTH.LOGIN}${callbackUrlWithPageUrl}`}
            className="text-blue-500 hover:underline"
          >
            {SIGN_UP_FORM.BUTTONS.REDIRECT_LINK}
          </Link>
        </p>

        <AuthButton
          Logo={Google}
          method={SIGN_UP_FORM.METHODS.GOOGLE.NAME}
          text={SIGN_UP_FORM.METHODS.GOOGLE.TEXT}
          callbackUrl={callbackUrl}
        />

        <button
          type="submit"
          className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f]"
        >
          {SIGN_UP_FORM.BUTTONS.SUBMIT}
        </button>
      </form>
    </AuthFormWrapper>
  )
}
