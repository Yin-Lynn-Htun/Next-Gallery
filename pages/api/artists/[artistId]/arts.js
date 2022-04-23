import { connectToDb } from '../../../../utils/db'
import Arts from '../../../../Models/Art'

const handler = async (req, res) => {
    const { artistId } = req.query
    connectToDb()

    const arts = await Arts.find({ artist: artistId })
    return res.status(200).send({ ok: true, data: arts })
}

export default handler
