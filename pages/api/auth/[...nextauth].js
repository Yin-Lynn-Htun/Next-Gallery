import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from '../../../utils/db'
import { isPasswordValid } from '../../../utils/auth'
import Artist from '../../../Models/Artist'

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const client = await connectToDb()

                const user = await Artist.findOne({
                    email: credentials.email,
                })

                if (!user) {
                    throw new Error('Incorrect username or password.')
                }

                const entered_password = credentials.password
                console.log({ entered_password, hashed: user.password })
                const isValid = await isPasswordValid(
                    entered_password,
                    user.password
                )

                if (!isValid) {
                    throw new Error('Incorrect username or password.')
                }

                return {
                    id: user._id,
                    email: user.email,
                }
            },
        }),
    ],

    callbacks: {
        async session({ session, token }) {
            session.accessToken = token.accessToken
            session.userId = token.sub
            return session
        },
    },
    secret: process.env.JWT_SECRET,
})
