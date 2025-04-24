'use client'

import AuthFormWrapper from '../forms/AuthFormWrapper'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import RefreshSession from '@/lib/session/RefreshSession'
import { User } from '@/types'
import RedirectButton from '../buttons/RedirectButton'
import ErrorMessage from '../forms/ErrorMessage'
import PasswordInput from '../forms/PasswordInput'
import { ERRORS } from '@/constants/frontend/errors'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { GENERATE_PASSWORD_FORM } from '@/constants/frontend/generatePassword'
import { PAGES } from '@/constants/frontend/pages'

export default function GeneratePasswordForm({ user }: { user: User }) {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false)
  const [newPasswordVisible, setNewPasswordVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (newPassword !== confirmPassword) {
      setError(ERRORS.GENERATE_PASSWORD_FORM.DIFFERENT_PASSWORDS)
      setLoading(false)
      return
    }

    try {
      const res = await fetch(API_ENDPOINTS.CREATE_PASSWORD, {
        method: HTTP_METHODS.PATCH,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error ?? ERRORS.GENERATE_PASSWORD_FORM.GENERAL)
      }
      
      setUpdated(true)
      setSuccess(GENERATE_PASSWORD_FORM.SUCCESS)
      router.push(PAGES.USER.PROFILE)
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

  return (
    <>
      <AuthFormWrapper
        title={GENERATE_PASSWORD_FORM.TITLE}
        loading={loading}
        minHeight="min-h-[70vh]"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {/* asked by google for the autocomplete to work properly */}
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="hidden"
            value={user.email}
          />

          <PasswordInput updateVisibility={() => setCurrentPasswordVisible(prev => !prev)} label={GENERATE_PASSWORD_FORM.NEW_PASSWORD.LABEL} passwordVisible={currentPasswordVisible} placeholder={GENERATE_PASSWORD_FORM.PLACEHOLDER} name={GENERATE_PASSWORD_FORM.NEW_PASSWORD.NAME} onChange={(e) => setConfirmPassword(e.target.value)}/>

          <PasswordInput updateVisibility={() => setNewPasswordVisible(prev => !prev)} label={GENERATE_PASSWORD_FORM.CONFIRM_PASSWORD.LABEL} passwordVisible={newPasswordVisible} placeholder={GENERATE_PASSWORD_FORM.PLACEHOLDER} name={GENERATE_PASSWORD_FORM.CONFIRM_PASSWORD.NAME} onChange={(e) => setNewPassword(e.target.value)}/>

          {error && <ErrorMessage error={error}/>}
          
          {success && (
            <>
              <p className="text-green-700 text-sm">{success}</p>
              <RedirectButton />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f]"
          >
            {GENERATE_PASSWORD_FORM.BUTTON}
          </button>
        </form>
      </AuthFormWrapper>

      {updated && <RefreshSession updated={updated} />}
    </>
  )
}
