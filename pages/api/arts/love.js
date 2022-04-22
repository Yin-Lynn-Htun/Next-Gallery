import Art from '../../../Models/Art'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed')
    }

    const data = JSON.parse(req.body)
    const artId = data.artId

    if (!artId) {
        return res.status(400).send({ ok: false, error: 'ArtId is required' })
    }

    const art = await Art.findByIdAndUpdate(
        artId,
        { $inc: { love: 1 } },
        { new: true }
    )

    return res.status(200).send({ ok: true, data: art })
}

export default handler
