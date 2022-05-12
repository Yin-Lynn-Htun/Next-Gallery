/* eslint-disable @next/next/no-page-custom-font */
import Artist from '../../Models/Artist'
import { useSession } from 'next-auth/react'
import ArtistProfile from '../../components/Profile/Profile'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const ArtistItem = () => {
    const { data: session, status } = useSession()
    const [artist, setArtist] = useState(null)
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated') {
            const { userId } = session
            const fetchArtist = async () => {
                const req = await fetch(`/api/artists/${userId}`)
                if (req.ok) {
                    const { data } = await req.json()
                    setArtist(data)
                }
            }
            fetchArtist()
        }
    }, [status, session])

    if (status === 'unauthenticated') {
        router.replace('/login')
        return null
    }

    if (status === 'authenticated') {
        if (!artist) {
            return <div className="text-white">Loading...</div>
        }

        return (
            <>
                <Head>
                    <title>{artist.username} | Profile</title>
                </Head>
                <ArtistProfile artist={artist} profile />
            </>
        )
    }

    if (status === 'loading') {
        return <div className="text-white">Loading...</div>
    }

    return <p className="text-white">Sorry! Profile cannot be loaded now.</p>
}

export default ArtistItem
