import Link from 'next/link'

export default function SignupButton() {
  return (
    <Link
      href="/auth/signup"
      className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f] whitespace-nowrap"
      title="Sign up"
    >
      Sign up
    </Link>
  )
}
