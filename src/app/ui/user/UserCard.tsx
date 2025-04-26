import Link from 'next/link'
import UserImage from './UserImage'
import { ROLES, User } from '@/types'
import { hasPassword } from '@/lib/session/hasPassword'
import { prisma } from '@/lib/prisma'
import { Google } from '../icons/Google'
import AuthButton from '../buttons/AuthButton'
import { USER_CARD } from '@/constants/frontend/userCard'
import { PAGES } from '@/constants/frontend/pages'

interface Props {
  user: User
  amountFutureEvents: number
}

export default async function UserCard({ user, amountFutureEvents }: Props) {
  const userHasPassword = await hasPassword()
  const account = await prisma.account.findFirst({
    where: {
      userId: Number(user.id),
      provider: 'google',
    },
  })
  const isGoogleLinked = Boolean(account)

  return (
    <section className="min-w-60 w-[80%] mx-4 p-6 bg-white dark:bg-zinc-900 shadow-md rounded-md mt-10 justify-self-center">
      <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
        {user.name}
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <UserImage image={user.image} name={user.name} />

        <div>
          <p className="text-lg font-medium text-zinc-800 dark:text-white">
            {USER_CARD.EMAIL_LABEL} {user.email}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {USER_CARD.FUTURE_EVENTS_LABEL} {amountFutureEvents}
          </p>

          {user.role === ROLES.ADMIN && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {USER_CARD.ROLE_LABEL} {user.role}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        {userHasPassword ? (
          <Link
            href={PAGES.USER.EDIT}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            <span className="hidden xs:inline">
              {USER_CARD.EDIT_PROFILE_BUTTON}
            </span>
            <span className="inline xs:hidden">
              {USER_CARD.ALTERNATIVE_TEXT}
            </span>
          </Link>
        ) : (
          <Link
            href={PAGES.USER.GENERATE_PASSWORD}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {USER_CARD.GENERATE_PASSWORD_BUTTON}
          </Link>
        )}

        {/* if user is not liked with google */}
        {!isGoogleLinked && (
          <AuthButton
            Logo={Google}
            method={USER_CARD.LINK_WITH_GOOGLE.METHOD}
            text={USER_CARD.LINK_WITH_GOOGLE.TEXT}
            callbackUrl={USER_CARD.LINK_WITH_GOOGLE.CALLBACK}
            classes="bg-white text-black"
          />
        )}
      </div>
    </section>
  )
}
