import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import CtaButton from '../../../components/CtaButton'
import Art from '../../../Models/Art'
import Artist from '../../../Models/Artist'
import Link from 'next/link'
import Tag from '../../../components/Tag'
import { connectToDb } from '../../../utils/db'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { ArtsContext } from '../../../context/ArtsContext'

const ArtistComponent = ({ _id, artist, love, watch }) => (
    <Link href={`/artists/${artist._id}`}>
        <a>
            <div className="my-5 grid grid-cols-[100px_minmax(400px,_1fr)] grid-rows-2 text-white">
                <div className="row-span-2 w-100 ml-2">
                    <div className="w-[70px] h-[70px] outline-none outline-text-pink rounded-full">
                        <Image
                            src={artist.imgUrl}
                            alt="owner avatar"
                            className="rounded-full"
                            width={70}
                            height={70}
                            objectFit="cover"
                        />
                    </div>
                </div>
                <h1 className="text-xl font-bold w-max">{artist.username}</h1>

                <div className="flex gap-20 w-full">
                    <div>
                        <GiSelfLove className="text-red-500 w-10 h-10 inline mr-3" />
                        <span className="text-white">{love}</span>
                    </div>
                    <div>
                        <AiFillEye className="text-blue-300 w-10 h-10 inline mr-5" />
                        <span className="text-white">{watch}</span>
                    </div>
                </div>
            </div>
        </a>
    </Link>
)

const ArtItem = (
    {
        // art: {
        //     _id,
        //     title,
        //     description,
        //     price,
        //     love,
        //     watch,
        //     imgUrl,
        //     artist,
        //     categories,
        // },
    }
) => {
    const {
        asPath,
        query: { artId },
    } = useRouter()

    let art
    const { arts, addArts } = useContext(ArtsContext)
    const [error, setError] = useState(null)
    const { length } = arts

    useEffect(() => {
        const fetchArts = async () => {
            try {
                const request = await fetch('/api/arts')
                if (request.ok) {
                    const { data } = await request.json()
                    addArts(data)
                }
            } catch (err) {
                setError('Sorry, failed to load art right now.')
            }
        }

        if (!length) {
            fetchArts()
        }
    }, [length, addArts])

    if (!length) {
        return <p className="text-white">Loading...</p>
    }

    if (error) {
        return <p className="text-white">{error}</p>
    }

    art = arts.find((art) => art._id === artId)

    if (!art) {
        return <p className="text-white">Sorry, art not found.</p>
    }

    const {
        _id,
        title,
        description,
        price,
        love,
        watch,
        imgUrl,
        artist,
        categories,
    } = art

    return (
        <div className="flex-1 flex">
            <Head>
                <title>Art | {title}</title>
            </Head>
            <div className="relative mx-auto max-w-[1900px] py-10 px-16 flex-1 flex">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                    <Image
                        src={imgUrl}
                        alt="Title of the art"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="basis-4/12 text-white pb-10 flex flex-col pr-20 overflow-y-scroll overflow-x-hidden screen_with_nav  relative ">
                <div className="flex justify-between  pt-10 py-5 sticky  z-10 top-0 bg-background-main">
                    <div className="flex flex-col ">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <h3 className="font-bold text-xl text-text-pink">
                            Price: {price}$
                        </h3>
                    </div>
                    <Link href={`${asPath}/checkout`} passHref>
                        <a>
                            <CtaButton name="Buy Now" />
                        </a>
                    </Link>
                </div>

                <ArtistComponent {...{ _id, artist, love, watch }} />

                <div className="flex flex-wrap">
                    {categories.map((category, idx) => (
                        <Tag key={idx} name={category} />
                    ))}
                </div>

                <div>
                    <h1 className="text-2xl mt-10 mb-3">About Art</h1>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ArtItem

// export async function getServerSideProps(context) {
//     await connectToDb()
//     const { artId } = context.query
//     const data = await Art.findById(artId).populate('artist', 'username imgUrl')
//     data.watch = data.watch + 1
//     await data.save()
//     const art = JSON.parse(JSON.stringify(data))

//     return {
//         props: {
//             // _id , title , description , price , love , watch, imgUrl, artist { _id , username , imgUrl }, categories
//             art: art,
//         }, // will be passed to the page component as props
//     }
// }
