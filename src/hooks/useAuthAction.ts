'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function useAuthAction(isSignUp: boolean = false) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('eventsManagerCallbackUrl') || '/'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    let name = formData.get('name') as string
    if (name) name = name.trim()
    const email = (formData.get('email') as string).trim()
    const password = (formData.get('password') as string).trim()

    try {
      if (isSignUp) {
        // Aquí es donde el campo `name` es necesario
        if (!name || !email || !password) {
          setError('Todos los campos son obligatorios')
          return
        }

        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        })

        const data = await res.json()

        if (!res.ok) {
          setError(data.error || 'Error al crear cuenta')
          return
        }
      }

      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl,
        redirect: false,
      })

      if (result?.error) {
        setError(
          isSignUp
            ? 'Cuenta creada, pero no se pudo iniciar sesión automáticamente.\nPara ser redireccionado automaticamente <a href="/" class="text-blue-600 underline">haz click aqui</a>'
            : 'Credenciales incorrectas. Intenta de nuevo.'
        )
      } else {
        setSuccess(
          isSignUp
            ? 'Cuenta creada, pronto si no eres redireccionado <a href="/" class="text-blue-600 underline">haz click aqui</a>'
            : 'Logeo exitoso si no eres redireccionado automaticamente <a href="/" class="text-blue-600 underline">haz click aqui</a>'
        )
        router.push(callbackUrl)
        router.refresh()
      }
    } catch (err) {
      console.error(err)
      setError('Hubo un error en el servidor.')
    } finally {
      setLoading(false)
    }
  }

  return { handleSubmit, loading, error, setError, success, callbackUrl }
}
