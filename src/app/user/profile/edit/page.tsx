import UpdateUserForm from '@/app/ui/user/UpdateUserForm'
import { UPDATE_PROFILE } from '@/constants/backend/updateProfile'
import { PAGES } from '@/constants/frontend/pages'
import confirmSession from '@/lib/session/confirmSession'
import { hasPassword } from '@/lib/session/hasPassword'
import Link from 'next/link'

export default async function EditProfileForm() {
  const session = await confirmSession({ callback: PAGES.USER.EDIT })

  const userWithPassword = await hasPassword()
  const user = session.user

  return (
    <>
      {userWithPassword ? (
        <UpdateUserForm user={user} />
      ) : (
        <main className="w-full min-h-[60vh] justify-center items-center flex-col flex">
          <h3 className="text-xl font-semibold mb-4 text-center max-w-[500px]">
            {UPDATE_PROFILE.NO_PASSWORD.TITLE}
          </h3>
          <Link
            href={PAGES.USER.PROFILE}
            className="flex items-center justify-center rounded-full px-3 py-1 font-semibold w-fit bg-gray-50 text-gray-900 border-white/15 border-2 self-center hover:bg-gray-200"
          >
            {UPDATE_PROFILE.NO_PASSWORD.BUTTON}
          </Link>
        </main>
      )}
    </>
  )
}
