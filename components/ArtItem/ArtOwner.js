import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArtOwner = ({ _id, username, imgUrl }) => {
    return (
        <div className="flex gap-5 items-center text-white">
            <Link href={`/artists/${_id}`}>
                <a>
                    <div className="w-[40px] h-[40px] outline-text-pink outline-2 outline-none rounded-full">
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
                </a>
            </Link>
            <h5 className=" w-max">
                <span className="text-text-blue">Owned by </span>
                <Link href={`/artists/${_id}`}>
                    <a>
                        <span className="hover:text-text-pink">{username}</span>
                    </a>
                </Link>
            </h5>
        </div>
    )
}

export default ArtOwner
