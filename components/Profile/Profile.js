import Image from 'next/image'
import Wrapper from '../../components/Wrapper'
import { motion } from 'framer-motion'
import ArtsByArtist from '../ArtsByArtist'
import PrimaryButton from '../PrimaryButton'
import { AiFillEdit, AiFillSetting } from 'react-icons/ai'
import SecondaryButton from '../SecondaryButton'
import { useState } from 'react'
import AboutMe from './AboutMe'
import { useRouter } from 'next/router'

const MotionLink = ({ children, onClick }) => {
    return (
        <motion.p
            className="text-2xl"
            whileHover={{
                color: '#fdae8f',
                scale: 1.2,
                transition: {
                    type: 'spring',
                    stiffness: '300',
                },
            }}
            onClick={onClick}
        >
            {children}
        </motion.p>
    )
}

const ArtistProfile = ({ artist, profile }) => {
    const [isHome, setIsHome] = useState(false)
    const router = useRouter()

    const handleClickHome = () => {
        setIsHome(true)
    }

    const handleClickAbout = () => {
        setIsHome(false)
    }

    return (
        <div className=" text-white mb-10">
            {/* cover photo */}
            <div className="w-full h-72 relative ">
                <Image
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="cover photo"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="h-max px-10 ">
                <Wrapper>
                    <section className="flex justify-between">
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full w-60 h-60 relative overflow-hidden -mt-32 mb-5 outline-text-pink outline-2 outline-none">
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
                            <h1 className="text-3xl">
                                {artist.firstName} {artist.lastName}
                            </h1>
                            <h3 className="text-text-blue text-xl">
                                @{artist.username}
                            </h3>
                        </div>

                        {profile && (
                            <div className="flex items-center gap-5">
                                <PrimaryButton
                                    onClick={() => router.push('/profile/edit')}
                                >
                                    <AiFillEdit className="inline mr-2 text-white" />
                                    <span>Edit Profile</span>
                                </PrimaryButton>
                            </div>
                        )}
                    </section>

                    <section className="flex w-full my-10 justify-center gap-10 text-xl">
                        <MotionLink onClick={handleClickHome}>
                            <span className={isHome ? `text-text-pink` : ''}>
                                Home
                            </span>
                        </MotionLink>
                        <MotionLink onClick={handleClickAbout}>
                            <span className={!isHome ? `text-text-pink` : ''}>
                                About Me
                            </span>
                        </MotionLink>
                    </section>

                    {isHome ? (
                        <ArtsByArtist artistId={artist._id} />
                    ) : (
                        <AboutMe artist={artist} />
                    )}
                </Wrapper>
            </div>
        </div>
    )
}

export default ArtistProfile
