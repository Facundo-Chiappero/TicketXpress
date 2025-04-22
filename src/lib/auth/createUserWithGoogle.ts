import { User } from 'next-auth'
import { prisma } from '../prisma'

export const createUserWithGoogle = async (user: User) => {
  if (!user.email || !user.name) return

  return prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
      image: user.image || null,
      role: 'USER',
    },
  })
}
