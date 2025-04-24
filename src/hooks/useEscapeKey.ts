import { USE_ESCAPE_KEY } from '@/constants/frontend/useEscapeKey'
import { useEffect } from 'react'

export default function useEscapeKey(onEscape: () => void) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === USE_ESCAPE_KEY.KEY) {
        onEscape()
      }
    }

    window.addEventListener(USE_ESCAPE_KEY.EVENT, handleKey)
    return () => window.removeEventListener(USE_ESCAPE_KEY.EVENT, handleKey)
  }, [onEscape])
}
