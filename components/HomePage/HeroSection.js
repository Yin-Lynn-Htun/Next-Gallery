import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import Image from 'next/image'
import Link from 'next/link'

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
                <div className="flex-1 self-start px-10 mt-40 leading-10">
                    <h1 className="font-bold text-6xl ">
                        Discover, collect, and sell extraordinary
                        <span className="text-[#FD1C68]">ARTs</span>
                    </h1>
                    <h3 className="text-base mt-10 font-light">
                        NFT is the world&apos;s first and largest NFT
                        marketplace
                    </h3>

                    <div className="mt-10">
                        <Link href={'/arts'}>
                            <a>
                                <PrimaryButton large={1} _classname="mr-10">
                                    Explore
                                </PrimaryButton>
                            </a>
                        </Link>
                        <SecondaryButton large={1}>Create</SecondaryButton>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src="/static/images/hero.svg"
                        alt="Hero Image"
                        width={650}
                        height={650}
                    />
                </div>
            </div>
        </>
    )
}

export default HeroSection
