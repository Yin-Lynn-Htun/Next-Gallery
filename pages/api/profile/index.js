import { getSession } from 'next-auth/react'
import Artist from '../../../Models/Artist'

const handler = async (req, res) => {
    const session = await getSession({ req })
    const { email } = session.user

    // update user from db
    const artist = await Artist.findOneAndUpdate({ email }, req.body, {
        new: true,
    })

    return res.status(200).send({ message: 'Create a profile', data: artist })
}

export default handler
