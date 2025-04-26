import GeneratePasswordForm from '@/app/ui/user/GeneratePasswordForm'
import { GENERATE_PASSWORD_PAGE } from '@/constants/frontend/generatePassword'
import { PAGES } from '@/constants/frontend/pages'
import confirmSession from '@/lib/session/confirmSession'
import { hasPassword } from '@/lib/session/hasPassword'
import Link from 'next/link'

export default async function GeneratePasswordPage() {
  const session = await confirmSession({
    callback: PAGES.USER.GENERATE_PASSWORD,
  })

  const userHasPassword = await hasPassword()
  const user = session.user
  return (
    <>
      {userHasPassword ? (
        <main className="w-full min-h-[60vh] justify-center items-center flex-col flex">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            {GENERATE_PASSWORD_PAGE.HAS_PASSWORD.TITLE}
          </h3>
          <Link
            href={PAGES.USER.PROFILE}
            className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit bg-gray-50 text-gray-900 border-2 self-center hover:bg-gray-200"
          >
            {GENERATE_PASSWORD_PAGE.HAS_PASSWORD.BUTTON}
          </Link>
        </main>
      ) : (
        <GeneratePasswordForm user={user} />
      )}
    </>
  )
}
