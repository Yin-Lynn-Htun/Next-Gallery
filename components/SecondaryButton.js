import React from 'react'

const SecondaryButton = ({ children, ...props }) => {
    return (
        <button
            className={`bg-text-dark button-utils ${
                props.large ? 'py-5 px-7 text-xl w-[170px]' : ''
            }`}
        >
            {children}
        </button>
    )
}

export default SecondaryButton
