import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { GiSelfLove } from 'react-icons/gi'
import { useSession } from 'next-auth/react'

const ArtDescription = ({ artistId, price, watch, _id, love: loveProps }) => {
    const [love, setLove] = useState(loveProps)
    const [clicked, setClicked] = useState(false)
    const { data } = useSession()
    const userId = data?.userId

    useEffect(() => {
        console.log(userId, artistId)
        if (userId === artistId) {
            setClicked(true)
        }
    }, [userId, artistId])

    const handleClickLove = async () => {
        if (clicked) return

        const data = await fetch('/api/arts/love', {
            method: 'POST',
            body: JSON.stringify({ artId: _id }),
        }).then((data) => data.json())

        if (data.ok) {
            setLove(love + 1)
            setClicked(true)
        }
    }

    return (
        <div className="flex justify-between  w-full items-center">
            <p className="text-2xl  text-white font-bold">
                <span className="text-[#a8b6f8]">$ {price}</span>
            </p>
            <div>
                <AiFillEye className="text-blue-500 w-10 h-10 inline mr-2" />
                <span className="text-white">{watch}</span>
            </div>
            <button
                onClick={handleClickLove}
                className={` rounded-md px-3 py-2 ${
                    !clicked && 'hover:bg-black shadow-button'
                } `}
            >
                <GiSelfLove className="text-red-500 w-10 h-10 inline mr-2" />
                <span className="text-white">{love}</span>
            </button>
        </div>
    )
}

export default ArtDescription
