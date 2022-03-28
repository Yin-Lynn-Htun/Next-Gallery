import { connectToDb } from '../../../utils/db'
import Art from '../../../Models/Art'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed')
    }

    const { categories } = req.body

    console.log(categories)
    console.log(categories[0])

    await connectToDb()
    const response = await Art.create(req.body)

    return res
        .status(200)
        .send({ ok: true, message: 'Art added', data: response })
}

export default handler
