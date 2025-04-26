import { LOG_OUT_BUTTON } from '@/constants/frontend/logOutButton'
import { PAGES } from '@/constants/frontend/pages'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({
      callbackUrl: PAGES.HOME,
    })
  }

  return (
    <button
      onClick={handleLogout}
      className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 w-full text-left rounded-sm"
      title={LOG_OUT_BUTTON}
      aria-label={LOG_OUT_BUTTON}
    >
      {LOG_OUT_BUTTON}
    </button>
  )
}
