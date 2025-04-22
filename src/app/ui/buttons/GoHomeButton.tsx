import Link from 'next/link'

export default function GoHomeButton() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit bg-gray-50 text-gray-900 border-white/15 border-2 self-center hover:bg-gray-200 m-4 absolute"
      title="Ir al inicio"
    >
      Go Home
    </Link>
  )
}
