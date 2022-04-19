import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import Link from 'next/link'

const AristsItem = ({ _id, username, imgUrl, love, location }) => {
    return (
        <Link href={`/artists/${_id}`}>
            <a className="flex">
                <div className="p-10 rounded-xl gap-5 border-blue-400/0 border-2 my-10 items-center flex flex-col text-white cursor-pointer w-[300px] justify-center bg-text-darker ">
                    <div className="row-span-2 w-[150px] h-[150px] justify-self-center self-center relative outline-text-pink outline-2 outline-none rounded-full">
                        <Image
                            src={imgUrl || '/static/images/defaultUser.svg'}
                            alt="artist avatar"
                            className="rounded-full"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="text-2xl font-bold w-max ">{username}</h1>
                    <h1 className="text-xl font-bold w-max text-green-200">
                        21 Artworks
                    </h1>
                    <div>
                        <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                        <span className="text-white">{love || 0}</span>
                    </div>
                    <h1 className="text-lg font-bold text-center w-full text-yellow-200 overflow-hidden whitespace-nowrap text-ellipsis ">
                        {location}
                    </h1>

                    {/* <div className="flex justify-between my-5 w-full">
                        <div>
                            <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                            <span className="text-white">{loveCount}</span>
                        </div>
                        <div>
                            <AiFillEye className="text-blue-500 w-10 h-10 inline mr-5" />
                            <span className="text-white">{viewCount}</span>
                        </div>
                    </div> */}
                </div>
            </a>
        </Link>
    )
}

export default AristsItem
