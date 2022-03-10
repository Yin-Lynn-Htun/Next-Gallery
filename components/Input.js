import React from 'react'

const Input = ({ label, id, errorMessage, touched, ...props }) => {
    console.log(touched, errorMessage, 'asdf')
    return (
        <div className="flex flex-col my-5">
            <label htmlFor={id} className="text-xl font-semibold">
                {label}
            </label>
            <input
                {...props}
                className="rounded-lg my-1 w-full px-5 py-2 text-black outline-none text-base"
            />
            <small
                className={`text-red-400 text-base ${
                    touched && errorMessage ? 'opacity-1' : 'opacity-0'
                } `}
            >
                {errorMessage ? errorMessage : 'no error'}
            </small>
        </div>
    )
}

export default Input
