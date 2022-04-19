import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArtOwner = ({ _id, username, artName, imgUrl }) => {
    return (
        <div className="my-5 grid grid-cols-[90px_minmax(100px,_1fr)] grid-rows-2 text-white ">
            <div className="row-span-2 w-100 ">
                <div className="w-[61px] h-[61px] outline-text-pink outline-2 outline-none rounded-full">
                    <Image
                        src={
                            imgUrl ||
                            'https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                        }
                        alt="owner avatar"
                        className="rounded-full"
                        width={60}
                        height={60}
                        objectFit="cover"
                    />
                </div>
            </div>
            <h1 className="text-2xl font-bold w-full text-ellipsis overflow-hidden whitespace-nowrap">
                {artName}
            </h1>
            <h5 className=" w-max">
                <span className="text-text-blue">Owned by </span>
                <span>{username}</span>
            </h5>
        </div>
    )
}

export default ArtOwner
