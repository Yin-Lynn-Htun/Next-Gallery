import React from 'react'

const PrimaryButton = ({ children, ...props }) => {
    return (
        <button className="button-utils rays" {...props}>
            {children}
        </button>
    )
}

export default PrimaryButton
