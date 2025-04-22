import { User } from 'next-auth'
import { prisma } from '../prisma'

export const linkGoogleToExistingAccount = async (user: User) => {
  if (!user.email || !user.name) return

  return prisma.user.update({
    where: { email: user.email },
    data: {
      image: user.image || null,
    },
  })
}
