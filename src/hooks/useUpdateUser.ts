'use client'

import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { ERRORS } from '@/constants/frontend/errors'
import { useState } from 'react'

export default function useUpdateUser() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [updated, setUpdated] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(API_ENDPOINTS.UPLOAD_PROFILE, {
        method: HTTP_METHODS.PATCH,
        body: formData,
      })

      const data = await res.json()
      if (!res.ok)
        throw new Error(data.error ?? ERRORS.UPDATE_USER.UNKNOWN_ERROR)

      setUpdated(true)
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

  return { handleSubmit, loading, updated, error }
}
