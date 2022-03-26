import { connectToDb } from '../../../utils/db'
import Art from '../../../Models/Art'

const handler = async (req, res) => {
    connectToDb()
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed')
    }

    try {
        const art = await Art.create(req.body)
        console.log(art)

        return res
            .status(200)
            .send({ ok: true, message: 'Art added', data: art })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ ok: false, error: err.message })
    }
}

export default handler
