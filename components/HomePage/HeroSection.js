import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CtaButton from '../CtaButton'

const contextVariants = {
    hidden: {
        y: -300,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            when: 'beforeChildren',
            staggerChildren: 1,
        },
    },
}

const childVariants = {
    hidden: {
        x: '-50vw',
    },
    visible: {
        x: 0,
        transition: {
            duration: 1.5,
            type: 'spring',
            stiffness: 120,
        },
    },
}

const HeroSection = () => {
    return (
        <>
            <div className="fixed top-0 right-0 -z-10">
                <Image
                    src={'/static/images/BG.png'}
                    alt="background image"
                    width={500}
                    height={500}
                />
            </div>

            <div className="flex items-center justify-center text-white">
                <motion.div
                    variants={contextVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 self-start px-10 mt-40 leading-10"
                >
                    <div>
                        <h1 className="font-bold text-6xl ">
                            Discover, collect, and sell extraordinary
                        </h1>
                        <h1 className="font-bold text-5xl text-[#FD1C68]">
                            Arts / Photographs
                        </h1>
                        <h3 className="text-base mt-10 font-light">
                            Next Gallery is the next-generation gallery or
                            marketplace for artists and collectors.
                        </h3>
                    </div>
                    <div className="mt-10 flex">
                        <motion.div variants={childVariants}>
                            <Link href={'/arts'}>
                                <a>
                                    <CtaButton name={'Explore'} large={1} />
                                </a>
                            </Link>
                        </motion.div>
                        {/* <motion.div variants={childVariants}>
                            <SecondaryButton>Create</SecondaryButton>
                        </motion.div> */}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="flex-1"
                >
                    <Image
                        src="/static/images/hero.svg"
                        alt="Hero Image"
                        width={650}
                        height={650}
                    />
                </motion.div>
            </div>
        </>
    )
}

export default HeroSection
