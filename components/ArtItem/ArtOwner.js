import React from 'react'
import Image from 'next/image'

const ArtOwner = () => {
    return (
        <div className="my-5 grid grid-cols-[100px_minmax(400px,_1fr)] grid-rows-2 text-white">
            <div className="row-span-2 w-100">
                <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="owner avatar"
                    className="rounded-full"
                    width={70}
                    height={70}
                />
            </div>
            <h1 className="text-2xl font-bold">Metaverse</h1>
            <h5>
                <span className="text-[#8393AF]"> Owned by</span> John Doe
            </h5>
        </div>
    )
}

export default ArtOwner
