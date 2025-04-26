import NextAuth, { AuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { providers } from "@/lib/auth/providers"
import { callbacks } from "@/lib/auth/callbacks"
import { PAGES } from "@/constants/frontend/pages"

export const authOptions: AuthOptions = {
  providers,
  callbacks,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: PAGES.AUTH.LOGIN,
  },
  session: {
    strategy: "jwt",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
