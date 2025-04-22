import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UserCard from '@/app/ui/user/UserCard'
import UserEvents from '@/app/ui/user/UserEvents'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function UserProfilePage() {
  //todo pasar esto a un util
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/auth/login?eventsManagerCallbackUrl=/user/profile')
  }

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
    <main className="px-4">
      <UserCard user={user} amountFutureEvents={amountFutureEvents} />
      <UserEvents user={user} futureEvents={futureEvents} />
    </main>
  )
}
