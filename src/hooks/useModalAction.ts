import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ERRORS } from '@/constants/frontend/errors'

interface Props {
  onSuccess?: () => void
  onError?: (error: string) => void
}

export default function useModalAction({ onSuccess, onError }: Props) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const execute = async <T = unknown>(
    url: string,
    options: RequestInit,
    body?: T
  ) => {
    setLoading(true)
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
        body: body ? JSON.stringify(body) : undefined,
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      onSuccess?.()
      router.refresh()
    } catch (err) {
      if (err instanceof Error) {
        onError?.(err.message)
      }else{
        onError?.(ERRORS.SERVER_ERROR)
      }
    } finally {
      setLoading(false)
    }
  }

  return { execute, loading }
}
