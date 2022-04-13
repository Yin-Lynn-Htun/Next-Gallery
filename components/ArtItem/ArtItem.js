import React from 'react'
import ArtButtons from './ArtButtons'
import ArtOwner from './ArtOwner'
import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import { motion } from 'framer-motion'

const ArtItem = (props) => {
    return (
        <motion.div
            whileHover={{
                y: -5,
                scale: 1.02,
                outline: '0.5px solid #b8b8b8',
            }}
            className="w-80 h-min p-5  bg-white/10 rounded-2xl"
        >
            <div className="flex justify-center">
                <Image
                    className="rounded-xl overflow-hidden"
                    src={
                        props.imgUrl ||
                        'https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    }
                    alt="Art"
                    width={500}
                    height={500}
                    objectFit="cover"
                />
            </div>

            {!props.artistProfile ? (
                <ArtOwner {...props.artist} artName={props.title} />
            ) : (
                <h1 className="text-2xl my-3 font-bold w-max">{props.name}</h1>
            )}

            {props.preview ? (
                <div>
                    <p className="text-xl mb-3">Price: $ {props.price}</p>
                </div>
            ) : (
                <div className="flex justify-between my-5 w-full">
                    <div>
                        <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                        <span className="text-white">{props.love}</span>
                    </div>
                    <div>
                        <AiFillEye className="text-blue-500 w-10 h-10 inline mr-5" />
                        <span className="text-white">{props.watch}</span>
                    </div>
                </div>
            )}

            <div className="mt-auto mb-0 h-full">
                <ArtButtons />
            </div>
        </motion.div>
    )
}

export default ArtItem
