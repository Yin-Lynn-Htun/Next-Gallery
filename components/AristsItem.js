import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import Link from 'next/link'

const AristsItem = ({ id, name, src, loveCount, viewCount }) => {
    return (
        <Link href={`/artists/${id}`}>
            <a>
                <div className="p-5 rounded-xl gap-5 h-[170px] border-border-blue border-2 my-10 w-max items-center grid grid-cols-[120px_200px] grid-rows-2 text-white cursor-pointer">
                    <div className="row-span-2 w-full h-[120px] justify-self-center relative outline-border-blue outline-2 outline-none rounded-full">
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
                </div>{' '}
            </a>
        </Link>
    )
}

export default AristsItem
