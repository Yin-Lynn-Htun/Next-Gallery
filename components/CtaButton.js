import React from 'react'
import { motion } from 'framer-motion'

const CtaButton = ({ name }) => {
    return (
        <div className="relative  flex justify-center items-center">
            <motion.div
                initial={{
                    backgroundPosition: '0 0',
                }}
                animate={{
                    backgroundPosition: '400% 0',
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'linear',
                }}
                className="absolute blur-md w-32 h-12 rounded-lg bg-cta-gradient bg-[length:400%]"
            ></motion.div>
            <button className="flex justify-center items-center h-11 rounded-lg bg-gray-700 w-[125px] backdrop-blur-3xl font-bold">
                {name}
            </button>
        </div>
    )
}

export default CtaButton
