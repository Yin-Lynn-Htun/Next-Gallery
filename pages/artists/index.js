import React from 'react'
import AristsItem from '../../components/AristsItem'
import Wrapper from '../../components/Wrapper'
import { dummy_artists } from '../../dummy_data'
import Link from 'next/link'

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Artists = () => {
    return (
        <Wrapper>
            <section className="text-white">
                <h1 className="text-3xl text-center font-bold rays gradient_text">
                    All Artists
                </h1>

                <div className="mb-5 mt-10">
                    <h3 className="text-2xl my-3">
                        Search for artists starting with
                    </h3>
                    {alphabets.map((alphabet) => (
                        <Link
                            href={`/artists?letter=${alphabet}`}
                            key={alphabet}
                        >
                            <a className="mx-4">{alphabet}</a>
                        </Link>
                    ))}
                </div>

                <div className="flex flex-wrap justify-between gap-7">
                    {dummy_artists.map((artist) => (
                        <AristsItem key={artist.id} {...artist} />
                    ))}
                    {dummy_artists.map((artist) => (
                        <AristsItem key={artist.id} {...artist} />
                    ))}
                    {dummy_artists.map((artist) => (
                        <AristsItem key={artist.id} {...artist} />
                    ))}
                    {dummy_artists.map((artist) => (
                        <AristsItem key={artist.id} {...artist} />
                    ))}
                </div>
            </section>
        </Wrapper>
    )
}

export default Artists
