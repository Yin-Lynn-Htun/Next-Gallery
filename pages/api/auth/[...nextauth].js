import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from '../../../utils/db'
import { isPasswordValid } from '../../../utils/auth'

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const client = await connectToDb()
                const users_collection = client
                    .db('next_gallery')
                    .collection('users')

                console.log(credentials)

                const user = await users_collection.findOne({
                    email: credentials.email,
                })

                if (!user) {
                    client.close()
                    throw new Error('User not found')
                }

                const entered_password = credentials.password
                console.log({ entered_password, hashed: user.password })
                const isValid = await isPasswordValid(
                    entered_password,
                    user.password
                )
                console.log({ isValid })
                if (!isValid) {
                    client.close()
                    throw new Error('Password is incorrect')
                }

                client.close()
                return user
            },
        }),
    ],
})