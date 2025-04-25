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
import { PARAMS } from '@/constants/frontend/params'
import { SIGN_UP_FORM } from '@/constants/frontend/signupForm'
import { PAGES } from '@/constants/frontend/pages'
import ReCAPTCHA from 'react-google-recaptcha'
import { PROVIDERS } from '@/constants/backend/providers'
import { useUIStore } from '@/stores/useUIStore'

export default function SignUpForm() {
  const { handleSubmit, callbackUrl } = useAuthAction(true)
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
    <AuthFormWrapper title={SIGN_UP_FORM.TITLE} loading={loading}>
      <form
        onSubmit={(e) => handleSubmit(e, recaptchaToken)}
        className="flex flex-col gap-4 w-full"
      >
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
          name={PROVIDERS.CREDENTIAL_KEYS.EMAIL}
          type="email"
          required
          label={SIGN_UP_FORM.LABELS.EMAIL}
          autoComplete="email"
          placeholder={SIGN_UP_FORM.PLACEHOLDERS.EMAIL}
        />
        <PasswordInput
          label={SIGN_UP_FORM.LABELS.PASSWORD}
          name={PROVIDERS.CREDENTIAL_KEYS.PASSWORD}
          updateVisibility={togglePasswordVisible}
          passwordVisible={passwordVisible}
          placeholder={SIGN_UP_FORM.PLACEHOLDERS.PASSWORD}
        />

        {error && <ErrorMessage error={error} />}

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

        <div className="scale-[.85] sm:scale-100 origin-top-left">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY!}
            onChange={(token) => setRecaptchaToken(token)}
          />
        </div>

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
