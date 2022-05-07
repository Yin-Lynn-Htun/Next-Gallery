import { connectToDb } from '../../../utils/db'
import { hashPassword } from '../../../utils/auth'
import Artist from '../../../Models/Artist'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res
            .status(405)
            .send({ status: 'failed', message: 'Method not allowed' })
    }

    const { body } = req
    const { username, email, password, confirm_password } = body

    if (password !== confirm_password) {
        return res.status(401).send({
            status: 'failed',
            message: 'Please make sure your passwords match',
        })
    }

    const hashedPassword = hashPassword(password)

    try {
        await connectToDb()
        const respond = await Artist.create({
            username,
            email,
            password: hashedPassword,
        })

        return res.status(200).send({
            status: 'succeeded',
            message: 'User created',
            user_id: respond.insertedId,
        })
    } catch (err) {
        if (err.code === 11000) {
            const errorKey = Object.keys(err.keyValue)[0]
            return res.status(404).send({
                status: 'failed',
                message: `${errorKey} already exists.`,
            })
        }
        return res.status(404).send({ error: err })
    }
}

export default handler
