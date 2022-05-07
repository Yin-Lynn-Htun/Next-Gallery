import React, { useEffect } from 'react'

const Alert = ({ type, message, id, removeAlert }) => {
    return (
        <div className={` relative w-72 min-w-max px-7 py-3 bg-white z-50`}>
            <div className="absolute h-1 w-full left-0 bottom-0 bg-red-400 animate-alert"></div>

            <p>{message} </p>
        </div>
    )
}

export default Alert
