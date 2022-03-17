import Wrapper from '../../components/Wrapper'
import Image from 'next/image'
import ArtOwner from '../../components/ArtItem/ArtOwner'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import CtaButton from '../../components/CtaButton'
import { dummy_arts } from '../../dummy_data'
import Link from 'next/link'

const Tag = ({ name }) => {
    return (
        <span className="bg-emerald-700 w-max py-1 px-2 rounded-full m-2 whitespace-nowrap">
            {name}
        </span>
    )
}

const Artist = ({ id, avatar, owner, loveCount, viewCount }) => (
    <Link href={`/artists/${id}`}>
        <a>
            <div className="my-5 grid grid-cols-[100px_minmax(400px,_1fr)] grid-rows-2 text-white">
                <div className="row-span-2 w-100">
                    <Image
                        src={avatar}
                        alt="owner avatar"
                        className="rounded-full"
                        width={70}
                        height={70}
                        objectFit="cover"
                    />
                </div>
                <h1 className="text-xl font-bold w-max">{owner}</h1>

                <div className="flex gap-20 w-full">
                    <div>
                        <GiSelfLove className="text-red-500 w-10 h-10 inline mr-3" />
                        <span className="text-white">{loveCount}</span>
                    </div>
                    <div>
                        <AiFillEye className="text-blue-300 w-10 h-10 inline mr-5" />
                        <span className="text-white">{viewCount}</span>
                    </div>
                </div>
            </div>
        </a>
    </Link>
)

const ArtItem = ({
    art: { id, src: imageSrc, name, owner, loveCount, viewCount, avatar },
}) => {
    return (
        <div className="flex-1 flex">
            <div className="relative mx-auto max-w-[1900px] py-10 px-16 flex-1 flex">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt="Title of the art"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="basis-4/12 text-white pb-10 flex flex-col pr-20 overflow-y-scroll overflow-x-hidden screen_with_nav  relative ">
                <div className="flex justify-between  pt-10 py-5 sticky  z-10 top-0 bg-background-main">
                    <div className="flex flex-col ">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <h3 className="font-bold text-xl text-text-pink">
                            Price: 300$
                        </h3>
                    </div>
                    <CtaButton name="Buy Now" />
                </div>

                <Artist {...{ id, owner, loveCount, viewCount, avatar }} />

                <div className="flex flex-wrap">
                    <Tag name="Color Painting" />
                    <Tag name="Character" />
                    <Tag name="Nature" />
                    <Tag name="Fancy" />
                    <Tag name="Color Painting" />
                </div>

                <div>
                    <h1 className="text-2xl mt-10 mb-3">About Art</h1>
                    <p className="text-base">
                        The Runners. The most elite agency among the Tasty
                        Bones. The Speedy Bones undergo rigorous training and
                        wear enchanted speed suits that enable them to bend time
                        and make food deliveries at incredible speed. With their
                        help, the souls receive their food deliveries before
                        turning into Hungry Ghosts
                    </p>

                    <p className="text-base">
                        The Runners. The most elite agency among the Tasty
                        Bones. The Speedy Bones undergo rigorous training and
                        wear enchanted speed suits that enable them to bend time
                        and make food deliveries at incredible speed. With their
                        help, the souls receive their food deliveries before
                        turning into Hungry Ghosts
                    </p>
                    <p className="text-base">
                        The Runners. The most elite agency among the Tasty
                        Bones. The Speedy Bones undergo rigorous training and
                        wear enchanted speed suits that enable them to bend time
                        and make food deliveries at incredible speed. With their
                        help, the souls receive their food deliveries before
                        turning into Hungry Ghosts
                    </p>
                    <p className="text-base">
                        The Runners. The most elite agency among the Tasty
                        Bones. The Speedy Bones undergo rigorous training and
                        wear enchanted speed suits that enable them to bend time
                        and make food deliveries at incredible speed. With their
                        help, the souls receive their food deliveries before
                        turning into Hungry Ghosts
                    </p>
                    <p className="text-base">
                        The Runners. The most elite agency among the Tasty
                        Bones. The Speedy Bones undergo rigorous training and
                        wear enchanted speed suits that enable them to bend time
                        and make food deliveries at incredible speed. With their
                        help, the souls receive their food deliveries before
                        turning into Hungry Ghosts
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArtItem

export async function getStaticPaths() {
    const paths = dummy_arts.map((art) => ({
        params: {
            artId: art.id.toString(),
        },
    }))

    return {
        paths,
        fallback: false, // false or 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const artId = params.artId
    const art = dummy_arts.find((art) => art.id === +artId)

    return {
        props: {
            art,
        },
    }
}
