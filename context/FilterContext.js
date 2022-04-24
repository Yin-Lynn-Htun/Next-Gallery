import { createContext, useState } from 'react'

export const FilterContext = createContext()

const FilterContextProvider = ({ children }) => {
    const [model, setModel] = useState(null)
    const handleChangeModel = (modelName) => {
        setModel(modelName)
    }

    return (
        <FilterContext.Provider
            value={{
                model,
                handleChangeModel,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider
