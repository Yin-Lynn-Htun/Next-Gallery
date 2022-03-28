import Artist from '../../../../Models/Artist'

const handler = async (req, res) => {
    const { artistId } = req.query

    if (req.method === 'GET') {
        try {
            const artist = await Artist.findById(artistId)
            if (!artist) {
                return res
                    .status(404)
                    .send({ ok: false, message: 'Artist not found' })
            }
            return res.status(200).send({ ok: true, data: artist })
        } catch (err) {
            return res
                .status(404)
                .send({ ok: false, message: 'Artist not found' })
        }
    }

    if (req.method === 'PUT') {
        try {
            const artist = await Artist.findByIdAndUpdate(artistId, req.body, {
                new: true,
            })
            return res.status(200).send({ ok: true, data: artist })
        } catch (err) {
            return res
                .status(500)
                .send({ ok: false, message: 'Error updating artist' })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const artist = await Artist.findByIdAndDelete(artistId)
            return res.status(200).send({ ok: true, data: artist })
        } catch (err) {
            return res
                .status(500)
                .send({ ok: false, message: 'Error deleting artist' })
        }
    }
}

export default handler
