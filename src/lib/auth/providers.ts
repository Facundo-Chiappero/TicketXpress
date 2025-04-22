import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '../prisma'
import bcrypt from 'bcryptjs'

export const providers = [
  CredentialsProvider({
    credentials: {
      email: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null
      const user = await prisma.user.findUnique({
        where: { email: credentials.email },
      })
      if (!user || !user.password) return null
      const isValid = await bcrypt.compare(credentials.password, user.password)
      if (!isValid) return null
      return {
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      }
    },
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    profile(profile) {
      return {
        id: profile.sub,
        name:
          profile.name || profile.email.split('@')[0] || 'Usuario sin nombre',
        email: profile.email,
        image: profile.picture,
        role: 'USER',
      }
    },
  }),
]
