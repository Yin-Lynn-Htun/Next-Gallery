import HeroSection from '../components/HomePage/HeroSection'
import TrendingArtist from '../components/HomePage/TrendingArtists'
import Wrapper from '../components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <Wrapper>
            <HeroSection />
            <div className="text-white w-full">
                <h1 className="text-3xl font-bold text-center mt-5">
                    Today pick
                </h1>

                <div className="grid place-items-center mx-auto w-[900px] h-[700px] relative ">
                    <div className="absolute top-0 left-0 grid   place-items-center justify-center bg-main-background opacity-0 hover:opacity-90 z-10 h-full w-full">
                        <div>
                            <Link href="/arts/1">
                                <a>
                                    <h1 className="text-5xl font-bold">
                                        Cutie Cat
                                    </h1>
                                </a>
                            </Link>

                            <p className="text-right my-7 text-xl">
                                by:{' '}
                                <Link href="/artists/1">
                                    <a className="text-yellow-300">
                                        Crazy Artist
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <Image
                        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt="Today pick"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <TrendingArtist />
        </Wrapper>
    )
}
