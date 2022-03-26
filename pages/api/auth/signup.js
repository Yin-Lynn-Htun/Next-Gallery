import { connectToDb } from '../../../utils/db'
import { hashPassword } from '../../../utils/auth'
import Artist from '../../../Models/Artist'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Method not allowed' })
    }

    const { body } = req
    const { username, email, password, confirm_password } = body

    if (password !== confirm_password) {
        return res.status(401).send({ message: 'Passwords must match' })
    }

    const hashedPassword = hashPassword(password)

    await connectToDb()

    const respond = await Artist.create({
        username,
        email,
        password: hashedPassword,
    })

    return res.status(200).send({
        status: 'succeed',
        message: 'User created',
        user_id: respond.insertedId,
    })
}

export default handler
