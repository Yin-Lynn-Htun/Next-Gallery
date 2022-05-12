import { createContext, useState } from 'react'

const initalState = {
    artists: [],
}

export const ArtistsContext = createContext(initalState)

const ArtistsContextProvider = ({ children }) => {
    const [artists, setArtists] = useState([])

    const addArtists = (artists) => {
        setArtists([...artists])
    }

    return (
        <ArtistsContext.Provider
            value={{
                artists,
                addArtists,
            }}
        >
            {children}
        </ArtistsContext.Provider>
    )
}
export default ArtistsContextProvider
