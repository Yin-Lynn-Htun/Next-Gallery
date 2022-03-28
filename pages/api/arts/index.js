import { connectToDb } from '../../../utils/db'
import Art from '../../../Models/Art'

const handler = async (req, res) => {
    await connectToDb()
    if (req.method === 'POST') {
        try {
            const art = await Art.create(req.body)

            return res
                .status(200)
                .send({ ok: true, message: 'Art added', data: art })
        } catch (err) {
            console.log(err)
            return res.status(400).send({ ok: false, error: err.message })
        }
    }

    if (req.method === 'GET') {
        const arts = await Art.find()
            .populate('artist', 'username')
            .select('-__v')
        // const arts = await Art.find()
        return res.status(200).send({ ok: true, data: arts })
    }

    return res.status(405).send('Method Not Allowed')
}

export default handler
