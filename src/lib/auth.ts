import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import authConfig from "./auth.config"
import { prisma } from "./prisma"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Add your own logic here to find the user from the credentials supplied
        const user = { id: '1', name: 'User Teste', email: 'user@example.com' }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
})