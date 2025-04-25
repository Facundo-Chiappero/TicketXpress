import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ErrorMessage({ error }: { error: string }) {
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null) // Para almacenar el timeout

  useEffect(() => {
    // Si ya hay un timeout pendiente, lo limpiamos
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    // Si hay un error, esperamos 500ms antes de disparar el toast
    if (error) {
      debounceTimeout.current = setTimeout(() => {
        toast.error(error)
      }, 500) // 500ms de debounce
    }

    // Limpiar el timeout cuando el componente se desmonte o el error cambie
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
      }
    }
  }, [error]) // Se ejecuta cuando el 'error' cambia

  return null
}
