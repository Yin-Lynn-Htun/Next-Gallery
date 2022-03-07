import React from 'react'

const PrimaryButton = ({ children, ...props }) => {
    return (
        <button
            className={`button-utils rays ${
                props.large ? 'py-5 px-7 text-xl w-[170px]' : ''
            } ${props._classname}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default PrimaryButton
