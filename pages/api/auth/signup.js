import { connectToDb } from '../../../utils/db'
import { hashPassword } from '../../../utils/auth'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Method not allowed' })
    }

    const { body } = req
    const { full_name, email, password, confirm_password } = body

    if (password !== confirm_password) {
        return res.status(401).send({ message: 'Passwords must match' })
    }

    const hashedPassword = hashPassword(password)

    const client = await connectToDb()
    const users_collection = client.db('next_gallery').collection('users')

    const respond = await users_collection.insertOne({
        full_name,
        email,
        hashedPassword,
    })

    return res.status(200).send({
        status: 'succeed',
        message: 'User created',
        user_id: respond.insertedId,
    })
}

export default handler
