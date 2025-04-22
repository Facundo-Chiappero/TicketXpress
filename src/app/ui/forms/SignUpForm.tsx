'use client'

import Link from 'next/link'
import AuthFormWrapper from './AuthFormWrapper'
import AuthInput from './AuthInput'
import { Google } from '../icons/Google'
import useAuthAction from '@/hooks/useAuthAction'
import AuthButton from '../buttons/AuthButton'

export default function SignUpForm() {
  const { handleSubmit, loading, error, success, callbackUrl } =
    useAuthAction(true)

  return (
    <AuthFormWrapper title="Crear cuenta" loading={loading}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <AuthInput
          name="name"
          type="text"
          required
          autoFocus
          label="Name"
          autoComplete="name"
        />

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

        {error && (
          <p
            className="text-red-500 text-sm"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
        {success && (
          <p
            className="text-green-700 text-sm"
            dangerouslySetInnerHTML={{ __html: success }}
          />
        )}

        <p className="text-sm text-center">
          ¿Ya tenés cuenta?{' '}
          <Link
            href={`/auth/login${callbackUrl ? `?eventsManagerCallbackUrl=${encodeURIComponent(callbackUrl)}` : ''}`}
            className="text-blue-500 hover:underline"
          >
            Iniciar sesión
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
          className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f]"
        >
          Registrarse
        </button>
      </form>
    </AuthFormWrapper>
  )
}
