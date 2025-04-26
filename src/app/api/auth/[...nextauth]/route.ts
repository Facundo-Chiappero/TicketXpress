// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { providers } from '@/lib/auth/providers'
import { callbacks } from '@/lib/auth/callbacks'
import { PAGES } from '@/constants/frontend/pages'

export const GET = (req, res) => NextAuth(req, res, {
  providers,
  callbacks,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: PAGES.AUTH.LOGIN,
  },
  session: {
    strategy: 'jwt',
  },
})

export const POST = (req, res) => NextAuth(req, res, {
  providers,
  callbacks,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: PAGES.AUTH.LOGIN,
  },
  session: {
    strategy: 'jwt',
  },
})
