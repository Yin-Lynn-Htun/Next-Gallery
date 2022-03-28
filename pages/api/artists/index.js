import { connectToDb } from '../../../utils/db'
import Artist from '../../../Models/Artist'

const handler = async (req, res) => {
    await connectToDb()

    if (req.method === 'GET') {
        const artists = await Artist.find()
        return res.status(200).send({ ok: true, data: artists })
    }

    // if (req.method === 'POST') {
    //     const artists = await Artist.create(req.body)
    //     return res
    //         .status(200)
    //         .send({ ok: true, message: 'Successfully created.', data: artists })
    // }

    return res.status(405).send({ message: 'Method not allowed' })
}

export default handler
