import Artist from '../../Models/Artist'
import ArtistProfile from '../../components/Profile/Profile'

// This function gets called at build time
export async function getServerSideProps({ params }) {
    // Get the paths we want to pre-render based on posts

    const id = params.slug
    const data = await Artist.findById(id)
    const artist = JSON.parse(JSON.stringify(data))

    return {
        props: {
            artist,
        },
    }
}

const ArtistItem = ({ artist }) => {
    return <ArtistProfile artist={artist} />
}

export default ArtistItem
