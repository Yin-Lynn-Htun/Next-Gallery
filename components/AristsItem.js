import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const AristsItem = ({ _id, username, imgUrl, popularity, arts }) => {
    const [artCount, setArtCount] = useState(0)

    useEffect(() => {
        const fetchArts = async () => {
            const request = await fetch(`/api/artists/${_id}/arts`)
            if (request.ok) {
                const { data } = await request.json()
                setArtCount(data.length)
            }
        }

        if (!artCount) {
            fetchArts()
        }
    }, [artCount, _id])

    return (
        <Link href={`/artists/${_id}`}>
            <a className="flex">
                <div className="p-10 rounded-xl gap-3 border-blue-400/0 border-2 my-10 items-center flex flex-col text-white cursor-pointer w-[250px] justify-center bg-transparent hover:bg-text-darker ">
                    <div className="row-span-2 w-[150px] h-[150px] justify-self-center self-center relative outline-text-pink outline-2 outline-none rounded-full">
                        <Image
                            src={imgUrl || '/static/images/defaultUser.svg'}
                            alt="artist avatar"
                            className="rounded-full"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="text-2xl mt-5 font-bold w-max ">
                        {username}
                    </h1>
                    <h1 className="text-xl font-bold w-max text-green-200">
                        {artCount ? artCount : '0'} Artworks
                    </h1>
                    <div>
                        <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                        <span className="text-white">{popularity || 12}</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default AristsItem
