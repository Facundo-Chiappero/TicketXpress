import { useRouter } from 'next/navigation'
import { ERRORS } from '@/constants/frontend/errors'
import { useUIStore } from '@/stores/useUIStore'

interface Props {
  onSuccess?: () => void
}

export default function useModalAction({ onSuccess }: Props) {
  const { setLoading } = useUIStore()
  const router = useRouter()

  const { setError } = useUIStore()

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
        setError(err.message)
      } else {
        setError(ERRORS.SERVER_ERROR)
      }
    } finally {
      setLoading(false)
    }
  }

  return { execute }
}
