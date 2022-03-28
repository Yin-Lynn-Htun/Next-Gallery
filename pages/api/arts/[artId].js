import Art from '../../../Models/Art'

const handler = async (req, res) => {
    console.log(req)
    if (req.method === 'GET') {
        const art = await Art.findById(req.query.artId)
        if (!art) {
            return res.status(404).send({ ok: false, message: 'Art not found' })
        }
        return res.status(200).send({ ok: true, data: art })
    }

    if (req.method === 'PUT') {
        const art = await Art.findByIdAndUpdate(req.query.artId, req.body, {
            new: true,
        })
        if (!art) {
            return res.status(404).send({ ok: false, message: 'Art not found' })
        }
        return res
            .status(200)
            .send({ ok: true, message: 'Updated successfully', data: art })
    }

    if (req.method === 'DELETE') {
        const art = await Art.findByIdAndDelete(req.query.artId)
        if (!art) {
            return res.status(404).send({ ok: false, message: 'Art not found' })
        }
        return res
            .status(200)
            .send({ ok: true, message: 'Deleted successfully', data: art })
    }

    return res.status(405).send({ message: 'Method not allowed' })
}

export default handler