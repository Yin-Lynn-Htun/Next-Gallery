import React from 'react'
import ArtButtons from './ArtButtons'
import ArtOwner from './ArtOwner'
import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { GrView } from 'react-icons/gr'

const ArtItem = (props) => {
    console.log(props)
    return (
        <div className="w-80 h-min p-5 bg-white/10 rounded-2xl">
            <div className="flex justify-center">
                <Image
                    className="rounded-xl overflow-hidden"
                    src={props.src}
                    alt="Art"
                    width={270}
                    height={270}
                />
            </div>

            <ArtOwner />

            <div className="flex justify-between my-5 w-full">
                <div>
                    <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                    <span className="text-white">{props.loveCount}</span>
                </div>
                <div>
                    <GrView className="stroke-red-500 w-10 h-10 inline mr-5" />
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
