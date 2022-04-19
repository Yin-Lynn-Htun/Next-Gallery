import Image from 'next/image'
import PrimaryButton from '../../components/PrimaryButton'
import Wrapper from '../../components/Wrapper'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillSetting } from 'react-icons/ai'
import SecondaryButton from '../../components/SecondaryButton'
import Link from 'next/dist/client/link'
import ArtItems from '../../components/ArtItems'
import { dummy_arts, dummy_artists } from '../../dummy_data'
import { motion } from 'framer-motion'

const MotionLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <motion.a
                className="text-xl"
                whileHover={{
                    color: '#fdae8f',
                    scale: 1.2,
                    transition: {
                        type: 'spring',
                        stiffness: '300',
                    },
                }}
            >
                {children}
            </motion.a>
        </Link>
    )
}

import Artist from '../../Models/Artist'
import ArtsByArtist from '../../components/ArtsByArtist'
// This function gets called at build time
export async function getServerSideProps({ params }) {
    // Get the paths we want to pre-render based on posts

    const id = params.slug
    const data = await Artist.findById(id)
    const artist = JSON.parse(JSON.stringify(data))

    return {
        props: {
            artist,
        },
    }
}

const ArtistItem = ({ artist }) => {
    return (
        <div className="text-white">
            {/* cover photo */}
            <div className="w-full h-72 relative">
                <Image
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="cover photo"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="h-max ">
                <Wrapper>
                    <section className="flex justify-between">
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full w-60 h-60 relative overflow-hidden -mt-32 mb-5">
                                <Image
                                    src={
                                        artist.imgUrl ||
                                        '/static/images/defaultUser.svg'
                                    }
                                    alt="avatar"
                                    objectFit="cover"
                                    // width={300}
                                    // height={300}
                                    layout="fill"
                                />
                            </div>
                            <h1 className="text-xl">
                                {artist.firstName} {artist.lastName}
                            </h1>
                            <h3 className="text-text-blue">
                                @{artist.username}
                            </h3>
                        </div>

                        <div className="flex items-center gap-5">
                            <PrimaryButton>
                                <AiFillEdit className="inline mr-2 text-white" />
                                <span>Edit Profile</span>
                            </PrimaryButton>

                            <SecondaryButton>
                                <AiFillSetting className="inline mr-2 text-white" />
                                <span>Settings</span>
                            </SecondaryButton>
                        </div>
                    </section>

                    <section className="flex w-full my-10 justify-center gap-10 text-xl">
                        <MotionLink href="/">Home</MotionLink>
                        <MotionLink href="/">Creations </MotionLink>
                        <MotionLink href="/">Auctions </MotionLink>
                        <MotionLink href="/">About Me </MotionLink>
                    </section>

                    <ArtsByArtist artistId={artist._id} />
                </Wrapper>
            </div>
        </div>
    )
}

export default ArtistItem
