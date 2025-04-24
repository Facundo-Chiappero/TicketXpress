'use client'

import Link from 'next/link'
import AuthFormWrapper from './AuthFormWrapper'
import AuthInput from './AuthInput'
import AuthButton from '../buttons/AuthButton'
import { Google } from '../icons/Google'
import useAuthAction from '@/hooks/useAuthAction'
import RedirectButton from '../buttons/RedirectButton'
import ErrorMessage from './ErrorMessage'
import { useState } from 'react'
import PasswordInput from './PasswordInput'
import { PARAMS } from '@/constants/frontend/params'
import { LOGIN_FORM } from '@/constants/frontend/loginForm'
import { PAGES } from '@/constants/frontend/pages'

export default function LoginForm() {
  const { handleSubmit, loading, error, success, callbackUrl } =
    useAuthAction()
    const [passwordVisible, setPasswordVisible] = useState(false)
  //used in Link tag
  const callbackUrlWithPageUrl = callbackUrl
    ? `?${PARAMS.AUTH_CALLBACK}=${encodeURIComponent(callbackUrl)}`
    : ''

  return (
    <AuthFormWrapper title={LOGIN_FORM.TITLE} loading={loading}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <AuthInput
          name="email"
          type="email"
          required
          autoFocus
          label={LOGIN_FORM.LABELS.EMAIL}
          autoComplete="email"
          placeholder={LOGIN_FORM.PLACEHOLDERS.EMAIL}
        />

        <PasswordInput label={LOGIN_FORM.LABELS.PASSWORD} updateVisibility={() => setPasswordVisible(prev => !prev)} passwordVisible={passwordVisible} placeholder={LOGIN_FORM.PLACEHOLDERS.PASSWORD}/>

        {error && <ErrorMessage error={error}/>}

        {success && (
          <>
            <p className="text-green-700 text-sm">{success}</p>
            <RedirectButton />
          </>
        )}

        <p className="text-sm text-center">
          {LOGIN_FORM.BUTTONS.REDIRECT_TEXT}{' '}
          <Link
            href={`${PAGES.AUTH.SIGNUP}${callbackUrlWithPageUrl}`}
            className="text-blue-500 hover:underline"
          >
            {LOGIN_FORM.BUTTONS.REDIRECT_LINK}
          </Link>
        </p>

        <AuthButton
          Logo={Google}
          method={LOGIN_FORM.METHODS.GOOGLE.NAME}
          text={LOGIN_FORM.METHODS.GOOGLE.TEXT}
          callbackUrl={callbackUrl}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f]"
        >
          {LOGIN_FORM.BUTTONS.SUBMIT}
        </button>
      </form>
    </AuthFormWrapper>
  )
}
