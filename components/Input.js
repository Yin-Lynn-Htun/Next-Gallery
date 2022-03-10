import React from 'react'

const Input = ({ label, id, type, name, ...props }) => {
    return (
        <div className="flex flex-col gap-3 my-5">
            <label htmlFor={id} className="text-xl font-semibold">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                {...props}
                className="rounded-lg w-full px-5 py-2 text-black outline-none text-base"
            />
        </div>
    )
}

export default Input
