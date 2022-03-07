import React from 'react'
import ArtButtons from './ArtButtons'
import ArtOwner from './ArtOwner'
import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'

const ArtItem = (props) => {
    return (
        <div className="w-80 h-min p-5 bg-white/10 rounded-2xl hover:bg-black/50 hover:outline-1 hover:outline-dashed hover:outline-white">
            <div className="flex justify-center">
                <Image
                    className="rounded-xl overflow-hidden"
                    src={props.src}
                    alt="Art"
                    width={270}
                    height={270}
                    objectFit="cover"
                />
            </div>

            <ArtOwner
                name={props.name}
                owner={props.owner}
                src={props.avatar}
            />

            <div className="flex justify-between my-5 w-full">
                <div>
                    <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                    <span className="text-white">{props.loveCount}</span>
                </div>
                <div>
                    <AiFillEye className="text-blue-500 w-10 h-10 inline mr-5" />
                    <span className="text-white">{props.viewCount}</span>
                </div>
            </div>

            <div className="mt-auto mb-0 h-full">
                <ArtButtons />
            </div>
        </div>
    )
}

export default ArtItem
