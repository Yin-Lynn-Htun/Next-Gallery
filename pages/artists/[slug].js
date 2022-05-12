import Artist from '../../Models/Artist'
import ArtistProfile from '../../components/Profile/Profile'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { ArtistsContext } from '../../context/ArtistsContext'
import { useRouter } from 'next/router'

// This function gets called at build time
// export async function getServerSideProps({ params }) {
//     // Get the paths we want to pre-render based on posts

//     const id = params.slug
//     try {
//         const data = await Artist.findById(id)
//         data.popularity = data.popularity + 1
//         await data.save()
//         const artist = JSON.parse(JSON.stringify(data))

//         return {
//             props: {
//                 artist,
//             },
//         }
//     } catch (err) {
//         return {
//             props: {
//                 artist: {},
//             },
//         }
//     }
// }

const ArtistItem = () => {
    const { artists, addArtists } = useContext(ArtistsContext)
    const {
        query: { slug: artistId },
    } = useRouter()

    const artist = artists.find((artist) => artist._id === artistId)

    useEffect(() => {
        const fetchAritsts = async () => {
            const req = await fetch('/api/artists')
            if (req.ok) {
                const { data } = await req.json()
                addArtists(data)
            }
        }
        if (!artist) {
            fetchAritsts()
        }
    }, [artist, addArtists])

    if (!artists.length) {
        return <div className="text-white">Loading...</div>
    }

    if (!artist) {
        return <div className="text-white">Artist not found</div>
    }

    return (
        <>
            <Head>
                <title>{artist.username} | Profile</title>
            </Head>

            <ArtistProfile artist={artist} />
        </>
    )
}

export default ArtistItem
