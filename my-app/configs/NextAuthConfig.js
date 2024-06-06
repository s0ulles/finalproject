import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthConfig = {
    pages: {
        signIn: '/login'
    },

    session: {
        strategy: 'jwt'
    },

    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials) {

            const prisma = new PrismaClient()
            const user = await prisma.users.findFirst({
                where: {
                    email: credentials.email
                }
            })

            const passCorrect = await compare(credentials.password, user.password)

            if (passCorrect) {
                console.log(passCorrect);

                return {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            }

            return null
        }
    })],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({ token, session }) {
            session.user = {
                id: token.id,
                email: token.email,
                role: token.role
            }
            return session
        }
    }
}