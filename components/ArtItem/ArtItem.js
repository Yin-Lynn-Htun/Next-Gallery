import React, { useState } from 'react'
import ArtOwner from './ArtOwner'
import Image from 'next/image'
import ArtDescription from './ArtDescription'
import Link from 'next/link'

const ArtItem = (props) => {
    console.log(props)
    return (
        <div className="w-72 h-min p-5  bg-white/10 rounded-2xl">
            <div className="flex justify-center">
                <Link href={`/arts/${props._id}`}>
                    <a>
                        <Image
                            className="rounded-xl overflow-hidden"
                            src={
                                props.imgUrl ||
                                'https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                            }
                            alt="Art"
                            width={500}
                            height={500}
                            objectFit="cover"
                        />
                    </a>
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link href={`/arts/${props._id}`}>
                    <a>
                        <h1 className="hover:text-text-pink mt-5 text-white text-2xl font-bold w-full text-ellipsis overflow-hidden whitespace-nowrap">
                            {props.title}
                        </h1>
                    </a>
                </Link>

                {!props.artistProfile && (
                    <ArtOwner {...props.artist} artName={props.title} />
                )}
                <ArtDescription
                    _id={props._id}
                    price={props.price}
                    watch={props.watch}
                    artistProfile={props.artistProfile}
                    love={props.love}
                />
            </div>
            {/* <div className="mt-auto mb-0 h-full">
                <ArtButtons />
            </div> */}
        </div>
    )
}

export default ArtItem
