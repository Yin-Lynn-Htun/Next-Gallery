import { createContext, useState } from 'react'

const initalState = {
    arts: [],
}

export const ArtsContext = createContext(initalState)

const ArtsContextProvider = ({ children }) => {
    const [arts, setArts] = useState([])

    const addArts = async (arts) => {
        // arts will be an array of arts
        setArts([...arts])
    }

    return (
        <ArtsContext.Provider
            value={{
                arts,
                addArts,
            }}
        >
            {children}
        </ArtsContext.Provider>
    )
}
export default ArtsContextProvider
