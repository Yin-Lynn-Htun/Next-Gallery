import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'

const AristsItem = ({ name, src, loveCount, viewCount }) => {
    return (
        <div className="p-5 rounded-xl gap-5 h-[150px] bg-gray-600 my-5 w-max items-center grid grid-cols-[100px_200px] grid-rows-2 text-white">
            <div className="row-span-2 w-full h-full justify-self-center relative ">
                <Image
                    src={src}
                    alt="owner avatar"
                    className="rounded-full"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h1 className="text-2xl font-bold w-max">{name}</h1>
            <div className="flex justify-between my-5 w-full">
                <div>
                    <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                    <span className="text-white">{loveCount}</span>
                </div>
                <div>
                    <AiFillEye className="text-blue-500 w-10 h-10 inline mr-5" />
                    <span className="text-white">{viewCount}</span>
                </div>
            </div>
        </div>
    )
}

export default AristsItem
