import UserCard from '@/app/ui/user/UserCard'
import UserEvents from '@/app/ui/user/UserEvents'
import confirmSession from '@/lib/session/confirmSession'
import { prisma } from '@/lib/prisma'
import { PAGES } from '@/constants/frontend/pages'

export default async function UserProfilePage() {
  const session = await confirmSession({ callback: PAGES.USER.PROFILE })

  const user = session?.user

  const boughtEvents = await prisma.payment.findMany({
    where: {
      userId: Number(user.id),
    },
    include: {
      event: true,
    },
  })

  const futureEvents = boughtEvents
    .filter((p) => p.event !== null)
    .map((p) => p.event)
  const amountFutureEvents = futureEvents.length

  return (
    <>
      <main className="px-4">
        <UserCard user={user} amountFutureEvents={amountFutureEvents} />
        <UserEvents user={user} futureEvents={futureEvents} />
      </main>
    </>
  )
}
