import Link from 'next/link'
import UserImage from './UserImage'
import { User } from '../../../../types'

interface Props {
  user: User
  amountFutureEvents: number
}

export default function UserCard({ user, amountFutureEvents }: Props) {
  return (
    <section className="min-w-60 max-w-[526px] w-full mx-4 p-6 bg-white dark:bg-zinc-900 shadow-md rounded-md mt-10 justify-self-center">
      <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
        {user.name}
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <UserImage image={user.image} name={user.name} />

        <div>
          <p className="text-lg font-medium text-zinc-800 dark:text-white">
            Email: {user.email}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Future events: {amountFutureEvents}
          </p>

          {user.role === 'ADMIN' && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Role: {user.role}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          href="/user/profile/edit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Edit Profile
        </Link>
      </div>
    </section>
  )
}
