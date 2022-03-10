import React from 'react'

const Input = ({ label, id, type, name, ...props }) => {
    return (
        <div className="flex flex-col my-5">
            <label htmlFor={id} className="text-xl font-semibold">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                {...props}
                className="rounded-lg my-1 w-full px-5 py-2 text-black outline-none text-base"
            />
            <small className="text-red-400 opacity-0 ">
                Password need to be strong
            </small>
        </div>
    )
}

export default Input
