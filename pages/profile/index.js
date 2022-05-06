/* eslint-disable @next/next/no-page-custom-font */
import Artist from '../../Models/Artist'
import { getSession } from 'next-auth/react'
import ArtistProfile from '../../components/Profile/Profile'
import { useRouter } from 'next/router'
import Head from 'next/head'

// This function gets called at build time
export async function getServerSideProps({ req }) {
    // Get the paths we want to pre-render based on posts
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
            },
        }
    }

    const id = session.userId
    const data = await Artist.findById(id)
    const artist = JSON.parse(JSON.stringify(data))

    return {
        props: {
            artist,
        },
    }
}

const ArtistItem = ({ artist }) => {
    return (
        <>
            <Head>
                <title>{artist.username} | Profile</title>
            </Head>
            <ArtistProfile artist={artist} profile />
        </>
    )
}

export default ArtistItem
