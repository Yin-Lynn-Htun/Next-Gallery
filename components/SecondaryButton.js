import React from 'react'

const SecondaryButton = ({ children }) => {
    return (
        <button className="bg-text-dark hover:bg-black button-utils">
            {children}
        </button>
    )
}

export default SecondaryButton
