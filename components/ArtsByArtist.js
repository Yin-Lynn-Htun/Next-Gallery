import React from 'react'
import useSWR from 'swr'
import ArtItems from './ArtItems'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ArtsByArtist = ({ artistId }) => {
    const { data, error } = useSWR(`/api/artists/${artistId}/arts`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    // render data
    if (!data.ok) {
        return <p>Error</p>
    }

    if (!data.data.length) {
        return <p>There are no arts that are upload by this artist.</p>
    }

    return <ArtItems artistProfile arts={data.data} />
}

export default ArtsByArtist
