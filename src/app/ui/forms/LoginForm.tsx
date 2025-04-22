'use client'

import Link from 'next/link'
import AuthFormWrapper from './AuthFormWrapper'
import AuthInput from './AuthInput'
import AuthButton from '../buttons/AuthButton'
import { Google } from '../icons/Google'
import useAuthAction from '@/hooks/useAuthAction'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginForm() {
  const { handleSubmit, loading, error, setError, success, callbackUrl } =
    useAuthAction()

  const searchParams = useSearchParams()
  useEffect(() => {
    const errorFromUrl = searchParams.get('googleautherror')
    if (errorFromUrl) {
      setError(errorFromUrl)
    }
  }, [searchParams, setError])
  return (
    <AuthFormWrapper title="Iniciar sesión" loading={loading}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <AuthInput
          name="email"
          type="email"
          required
          autoFocus
          label="Email"
          autoComplete="email"
        />
        <AuthInput
          name="password"
          type="password"
          required
          label="Password"
          autoComplete="current-password"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {success && (
          <p
            className="text-green-700 text-sm"
            dangerouslySetInnerHTML={{ __html: success }}
          />
        )}

        <p className="text-sm text-center">
          ¿No tenés cuenta?{' '}
          <Link
            href={`/auth/signup${callbackUrl ? `?eventsManagerCallbackUrl=${encodeURIComponent(callbackUrl)}` : ''}`}
            className="text-blue-500 hover:underline"
          >
            Registrate
          </Link>
        </p>

        <AuthButton
          Logo={Google}
          method="google"
          text="Continuar con Google"
          callbackUrl={callbackUrl}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f]"
        >
          Entrar
        </button>
      </form>
    </AuthFormWrapper>
  )
}
