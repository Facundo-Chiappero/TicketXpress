import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { providers } from '@/lib/auth/providers'
import { callbacks } from '@/lib/auth/callbacks'
import { PAGES } from '@/constants/frontend/pages'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers,
  callbacks,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: PAGES.AUTH.LOGIN,
  },
  session: {
    strategy: 'jwt',
  },
}
