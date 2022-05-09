import React from 'react'
import AristsItem from '../../components/AristsItem'
import Wrapper from '../../components/Wrapper'
import Link from 'next/link'
import { connectToDb } from '../../utils/db'
import Artist from '../../Models/Artist'
import { useRouter } from 'next/router'

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export async function getStaticProps() {
    await connectToDb()
    const data = await Artist.find({ isArtist: true })
    const artists = JSON.parse(JSON.stringify(data))

    return {
        props: {
            artists,
        },

        revalidate: 10,
    }
}

const Artists = ({ artists }) => {
    const router = useRouter()
    let letter = ''

    const { query } = router
    if (query.letter) {
        letter = query.letter
    }

    let artistList
    if (letter) {
        artistList = artists.filter((artist) =>
            artist.username.toLowerCase().includes(letter.toLowerCase())
        )
    } else {
        artistList = artists
    }

    return (
        <Wrapper>
            <section className="text-white">
                <h1 className="text-3xl text-center font-bold rays gradient_text">
                    All Artists
                </h1>

                <div className="mbnpm-5 mt-10">
                    <h3 className="text-2xl my-3">
                        Search for artist containing the letter{' '}
                    </h3>
                    {alphabets.map((alphabet) => (
                        <Link
                            href={`/artists?letter=${alphabet}`}
                            key={alphabet}
                        >
                            <a
                                className={`px-4 py-2 ${
                                    alphabet === letter && 'bg-gray-400'
                                }`}
                            >
                                {alphabet}
                            </a>
                        </Link>
                    ))}
                </div>

                <div className="flex flex-wrap justify-between gap-7 items-stretch">
                    {artistList.length ? (
                        artistList.map((artist) => (
                            <AristsItem key={artist._id} {...artist} />
                        ))
                    ) : (
                        <p className="text-text-pink text-2xl my-10">
                            There is no artist with that name.{' '}
                            <Link href="/artists" passHref>
                                <span className="font-bold text-white cursor-pointer">
                                    All Artists?
                                </span>
                            </Link>
                        </p>
                    )}
                </div>
            </section>
        </Wrapper>
    )
}

export default Artists
