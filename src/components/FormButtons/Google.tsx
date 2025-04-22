import { Google } from '@/app/ui/icons/Google'
import { signIn } from 'next-auth/react'

export default function GoogleButton() {
  const handleLogin = (method: string) => {
    signIn(method, {
      callbackUrl: '/',
    })
  }

  return (
    <button
      onClick={() => handleLogin('google')}
      className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-50 shadow-sm bg-white text-black hover:bg-gray-100 transition-colors"
    >
      {<Google />}
      Log in with Google
    </button>
  )
}
