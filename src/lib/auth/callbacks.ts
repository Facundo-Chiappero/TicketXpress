import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'
import { User, Account } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { linkGoogleToExistingAccount } from './linkGoogleToExistingAccount'
import { createUserWithGoogle } from './createUserWithGoogle'
import { User as CustomUser } from '@/../types.d'

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

export const callbacks = {
  async signIn({ user, account }: { user: User; account: Account | null }) {
    if (account?.provider === 'google') {
      if (!user.email || !user.name) {
        throw new Error('Google account must have an email and a name.')
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      })

      if (existingUser) {
        if (existingUser.password) {
          const url =
            'Inicia sesión con el mismo método que utilizaste para crear tu cuenta.'
          const urlCodificada = encodeURIComponent(url)

          return `/auth/login?googleautherror=${urlCodificada}`
        } else {
          await linkGoogleToExistingAccount(user)
          return true
        }
      } else {
        await createUserWithGoogle(user)
        return true
      }
    }

    return true
  },

  async jwt({ token, user }: { token: JWT; user?: User }) {
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
