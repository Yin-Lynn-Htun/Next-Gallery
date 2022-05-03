import React from 'react'

const Input = ({ label, id, errorMessage, touched, ...props }) => {
    return (
        <div className="flex flex-col my-3">
            <label htmlFor={id} className="text-xl font-semibold">
                {label}
            </label>
            <input
                {...props}
                className="rounded-lg my-1 w-full px-5 py-2 text-black outline-none text-base"
            />
            {touched && errorMessage ? (
                <small className={`text-red-400 text-base `}>
                    {errorMessage}
                </small>
            ) : (
                <small className="text-base opacity-0">No error</small>
            )}
        </div>
    )
}

export default Input
