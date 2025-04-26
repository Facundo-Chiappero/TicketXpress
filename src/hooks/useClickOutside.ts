import { useEffect } from 'react'

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: Event) => void,
  eventType: keyof DocumentEventMap = 'mousedown'
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return
      handler(event)
    }

    document.addEventListener(eventType, listener)
    return () => document.removeEventListener(eventType, listener)
  }, [ref, handler, eventType])
}
