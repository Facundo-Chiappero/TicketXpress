import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'
import { User, Account } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { linkGoogleToExistingAccount } from './linkGoogleToExistingAccount'
import { createUserWithGoogle } from './createUserWithGoogle'
import { User as CustomUser } from '@/types'
import { ERRORS } from '@/constants/backend/errors'

declare module 'next-auth' {
  interface Session {
    user: CustomUser
  }

  interface User {
    id: string
    role: string
  }

  interface JWT {
    id: string
    role: string
  }
}
type JWTCallbackParams = {
  token: JWT
  user?: User
  trigger?: 'signIn' | 'update' | 'signUp'
}

export const callbacks = {
  async signIn({ user, account }: { user: User; account: Account | null }) {
    if (account?.provider === 'google') {
      if (!user.email || !user.name) {
        throw new Error(ERRORS.MISSING_EMAIL_OR_NAME)
      }
  
      // Buscamos si ya existe un usuario con ese email
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      })
  
      if (existingUser) {
        if (existingUser.password) {
          await linkGoogleToExistingAccount(user)
        }
      } else {
        await createUserWithGoogle(user)
        return true
      }
    }
  
    return true
  },

  async jwt({ token, user, trigger }: JWTCallbackParams) {
    if (trigger === 'update') {
      const updatedUser = await prisma.user.findUnique({
        where: { id: Number(token.id) },
      })

      if (updatedUser) {
        token.name = updatedUser.name
        token.email = updatedUser.email
        token.image = updatedUser.image
      }
    }

    if (user) {
      token.id = user.id
      token.role = user.role
      token.email = user.email
      token.name = user.name
      token.image = user.image
    }

    return token
  },

  async session({ session, token }: { session: Session; token: JWT }) {
    if (token) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        role: token.role as string,
        image: token.image as string,
      }
    }
    return session
  },
}
