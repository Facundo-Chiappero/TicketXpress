import NextAuth, { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { providers } from '@/lib/auth/providers'
import { callbacks } from '@/lib/auth/callbacks'

export const authOptions: AuthOptions = {
  providers,
  callbacks,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: 'jwt',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
