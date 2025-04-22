import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({
      callbackUrl: '/',
    })
  }

  return (
    <button
      onClick={handleLogout}
      className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 w-full text-left"
      title="Log out"
    >
      Log out
    </button>
  )
}
