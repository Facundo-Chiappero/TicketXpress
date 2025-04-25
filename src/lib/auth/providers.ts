import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '../prisma'
import bcrypt from 'bcryptjs'
import { ROLES } from '@/types'
import { PROVIDERS } from '@/constants/backend/providers'

export const providers = [
  CredentialsProvider({
    credentials: {
      email: {
        label: PROVIDERS.FORM_LABELS.EMAIL,
        type: PROVIDERS.CREDENTIAL_KEYS.EMAIL,
      },
      password: {
        label: PROVIDERS.FORM_LABELS.PASSWORD,
        type: PROVIDERS.CREDENTIAL_KEYS.PASSWORD,
      },
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
        image: user.image,
      }
    },
  }),

  GoogleProvider({
    clientId: PROVIDERS.GOOGLE.CLIENT_ID,
    clientSecret: PROVIDERS.GOOGLE.CLIENT_SECRET,
    profile(profile) {
      return {
        id: profile.sub,
        name:
          profile.name ||
          profile.email.split('@')[0] ||
          PROVIDERS.PROFILE_DEFAULTS.NAME,
        email: profile.email,
        image: profile.picture,
        role: ROLES.USER,
      }
    },
    allowDangerousEmailAccountLinking: true, //needed to link an existing account made with credentials
    
  }),
]
