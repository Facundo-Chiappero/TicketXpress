'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { PARAMS } from '@/constants/frontend/params'
import { PAGES } from '@/constants/frontend/pages'
import { ERRORS } from '@/constants/frontend/errors'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { verifyCaptchaClient } from '@/lib/auth/verifyCaptchaClient'
import { PROVIDERS } from '@/constants/backend/providers'
import { useUIStore } from '@/stores/useUIStore'

export default function useAuthAction(isSignUp: boolean = false) {
  const {setLoading, setError, setSuccess} = useUIStore()
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get(PARAMS.AUTH_CALLBACK) || PAGES.HOME

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    recaptchaToken: string | null
  ) => {
    e.preventDefault()

    setLoading(true)
    setError(null)
    setSuccess(null)

    const formData = new FormData(e.currentTarget)

    let name = formData.get('name') as string
    if (name) name = name.trim()
    const email = (formData.get('email') as string).trim()
    const password = (formData.get('password') as string).trim()

    try {
      
      if (!recaptchaToken) throw new Error(ERRORS.INVALID_CAPTCHA)
      const isCaptchaValid = await verifyCaptchaClient(recaptchaToken)

      if (!isCaptchaValid) throw new Error(ERRORS.INVALID_CAPTCHA)

      
      if (isSignUp) {
        if (!name || !email || !password) {
          setError(ERRORS.SIGN_UP_FORM.REQUIRED_FIELDS)
          return
        }

        const res = await fetch(API_ENDPOINTS.SIGNUP, {
          method: HTTP_METHODS.POST,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        })

        const data = await res.json()
        if (!res.ok) {
          setError(data.error ?? ERRORS.SIGN_UP_FORM.GENERAL)
          return
        }
      }

      const result = await signIn(PROVIDERS.AUTH_PROVIDERS.CREDENTIALS, {
        email,
        password,
        callbackUrl,
        redirect: false,
      })

      if (result?.error) {
        setError(
          isSignUp
            ? ERRORS.SIGN_UP_FORM.LOGIN_FAILED_AFTER_SIGNUP
            : ERRORS.LOGIN_FORM.CREDENTIALS_ERROR
        )
      } else {
        setSuccess(
          isSignUp
            ? ERRORS.SIGN_UP_FORM.REDIRECT_SUCCESS
            : ERRORS.LOGIN_FORM.REDIRECT_SUCCESS
        )
        router.push(callbackUrl)
        router.refresh()
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError(ERRORS.UPDATE_USER.UNKNOWN_ERROR)
      }
    } finally {
      setLoading(false)
    }
  }

  return { handleSubmit, callbackUrl }
}
