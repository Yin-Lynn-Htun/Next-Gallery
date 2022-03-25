import { connectToDb } from '../../../utils/db'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed')
    }

    const { categories } = req.body

    console.log(categories)
    console.log(categories[0])

    const client = await connectToDb()
    const art_collection = client.db('next_gallery').collection('arts')
    const response = await art_collection.insertOne({
        ...req.body,
    })
    console.log(response)
    return res
        .status(200)
        .send({ ok: true, message: 'Art added', data: response })
}

export default handler
