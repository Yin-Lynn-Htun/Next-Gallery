import React from 'react'
import Image from 'next/image'

const ArtOwner = ({ name, owner, src }) => {
    return (
        <div className="my-5 grid grid-cols-[100px_minmax(400px,_1fr)] grid-rows-2 text-white">
            <div className="row-span-2 w-100">
                <Image
                    src={src}
                    alt="owner avatar"
                    className="rounded-full"
                    width={70}
                    height={70}
                    objectFit="cover"
                />
            </div>
            <h1 className="text-2xl font-bold w-max">{name}</h1>
            <h5 className=" w-max">
                <span className="text-text-blue">Owned by</span> {owner}
            </h5>
        </div>
    )
}

export default ArtOwner
