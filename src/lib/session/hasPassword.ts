import { authOptions } from '@/lib/auth/authOptions'
import { getServerSession } from 'next-auth'
import { prisma } from '../prisma'

export async function hasPassword() {
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findUnique({
    where: { id: Number(session?.user.id) },
    select: { password: true },
  })

  return !!user?.password
}
