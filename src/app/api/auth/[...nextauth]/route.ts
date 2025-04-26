import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth/authOptions"

// Create NextAuth handler
const handler = NextAuth(authOptions)

// Export GET and POST handlers for App Router
export { handler as GET, handler as POST }
