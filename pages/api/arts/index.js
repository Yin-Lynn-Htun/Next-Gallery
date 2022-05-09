import { connectToDb } from '../../../utils/db'
import Art from '../../../Models/Art'
import Artist from '../../../Models/Artist'
import { getSession } from 'next-auth/react'

const handler = async (req, res) => {
    await connectToDb()
    const session = await getSession({ req })

    // console.log(session)
    // { user: {email: 'yinlynnhtun@gmail.com'}, userId: '623...'    }

    if (req.method === 'POST') {
        try {
            const art = await Art.create({
                ...req.body,
                artist: session.userId,
            })

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
            .sort({ _id: 'desc' })
            .populate('artist', 'username firstName lastName imgUrl')

        // const arts = await Art.find()
        return res.status(200).send({ ok: true, data: arts })
    }

    return res.status(405).send('Method Not Allowed')
}

export default handler
