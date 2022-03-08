import React from 'react'
import { motion } from 'framer-motion'

const PrimaryButton = ({ children, ...props }) => {
    return (
        <motion.button
            className={`button-utils rays ${
                props.large ? 'py-5 px-7 text-xl w-[170px]' : ''
            } ${props._classname}`}
            {...props}
            whileHover={{
                y: -10,
            }}
        >
            {children}
        </motion.button>
    )
}

export default PrimaryButton
