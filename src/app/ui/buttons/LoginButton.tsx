import Link from 'next/link'

export default function LoginButton() {
  return (
    <Link
      href="/auth/login"
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit bg-gray-50 text-gray-900 border-white/15 border-2 self-center hover:bg-gray-200 whitespace-nowrap"
      title="Log in"
    >
      Log in
    </Link>
  )
}
