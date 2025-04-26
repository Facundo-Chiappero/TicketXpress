'use client'

import Link from 'next/link'
import AuthFormWrapper from './AuthFormWrapper'
import AuthInput from './AuthInput'
import AuthButton from '../buttons/AuthButton'
import { Google } from '../icons/Google'
import useAuthAction from '@/hooks/useAuthAction'
import RedirectButton from '../buttons/RedirectButton'
import ErrorMessage from './ErrorMessage'
import PasswordInput from './PasswordInput'
import { PARAMS } from '@/constants/frontend/params'
import { LOGIN_FORM } from '@/constants/frontend/loginForm'
import { PAGES } from '@/constants/frontend/pages'
import ReCAPTCHA from 'react-google-recaptcha'
import { useUIStore } from '@/stores/useUIStore'

export default function LoginForm() {
  const { handleSubmit, callbackUrl } = useAuthAction()

  //used in Link tag
  const callbackUrlWithPageUrl = callbackUrl
    ? `?${PARAMS.AUTH_CALLBACK}=${encodeURIComponent(callbackUrl)}`
    : ''

  const {
    recaptchaToken,
    setRecaptchaToken,
    passwordVisible,
    togglePasswordVisible,
    loading,
    error,
    success,
  } = useUIStore()
  return (
    <AuthFormWrapper title={LOGIN_FORM.TITLE} loading={loading}>
      <form
        onSubmit={(e) => handleSubmit(e, recaptchaToken)}
        className="flex flex-col gap-4 w-full"
      >
        <AuthInput
          name="email"
          type="email"
          required
          autoFocus
          label={LOGIN_FORM.LABELS.EMAIL}
          autoComplete="email"
          placeholder={LOGIN_FORM.PLACEHOLDERS.EMAIL}
        />

        <PasswordInput
          label={LOGIN_FORM.LABELS.PASSWORD}
          updateVisibility={togglePasswordVisible}
          passwordVisible={passwordVisible}
          placeholder={LOGIN_FORM.PLACEHOLDERS.PASSWORD}
        />

        {error && <ErrorMessage error={error} />}

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

        <div className="scale-[.85] sm:scale-100 origin-top-left">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY!}
            onChange={(token) => setRecaptchaToken(token)}
          />
        </div>

        <AuthButton
          Logo={Google}
          method={LOGIN_FORM.METHODS.GOOGLE.NAME}
          text={LOGIN_FORM.METHODS.GOOGLE.TEXT}
          callbackUrl={callbackUrl}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-zinc-800 text-white border-white/15 border-2 self-center hover:bg-zinc-900"
        >
          {LOGIN_FORM.BUTTONS.SUBMIT}
        </button>
      </form>
    </AuthFormWrapper>
  )
}
