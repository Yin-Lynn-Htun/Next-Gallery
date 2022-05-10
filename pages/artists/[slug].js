import Artist from '../../Models/Artist'
import ArtistProfile from '../../components/Profile/Profile'
import Head from 'next/head'

// This function gets called at build time
export async function getServerSideProps({ params }) {
    // Get the paths we want to pre-render based on posts

    const id = params.slug
    try {
        const data = await Artist.findById(id)
        data.popularity = data.popularity + 1
        await data.save()
        const artist = JSON.parse(JSON.stringify(data))

        return {
            props: {
                artist,
            },
        }
    } catch (err) {
        return {
            props: {
                artist: {},
            },
        }
    }
}

const ArtistItem = ({ artist }) => {
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
