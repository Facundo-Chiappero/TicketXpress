import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  onSuccess?: () => void
  onError?: (error: unknown) => void
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

      if (!res.ok) throw new Error(`Error en la acción (${res.status})`)
      await res.json()

      onSuccess?.()
      router.refresh()
    } catch (error) {
      console.error(error)
      onError?.(error)
    } finally {
      setLoading(false)
    }
  }

  return { execute, loading }
}
