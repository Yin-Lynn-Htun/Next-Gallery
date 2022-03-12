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

// This function gets called at build time
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = dummy_artists.map((artist) => ({
        params: { slug: `${artist.id}` },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This function gets called at build time
export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts
    const id = params.slug
    const artist = dummy_artists.find((artist) => artist.id === +id)

    return {
        props: {
            artist,
        },
    }
}

const Artist = ({ artist }) => {
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
                                    src={artist.src}
                                    alt="avatar"
                                    objectFit="cover"
                                    // width={300}
                                    // height={300}
                                    layout="fill"
                                />
                            </div>
                            <h1 className="text-xl">{artist.name}</h1>
                            <h3 className="text-text-blue">
                                {artist.username}
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

                    <ArtItems artistProfile arts={dummy_arts} />
                    <br />
                    <ArtItems artistProfile arts={dummy_arts} />
                    <br />
                    <ArtItems artistProfile arts={dummy_arts} />
                </Wrapper>
            </div>
        </div>
    )
}

export default Artist
