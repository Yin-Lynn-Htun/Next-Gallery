import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TodayPick = () => {
    return (
        <section className="text-white w-full my-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mt-5 ">
                Today&apos;s pick
            </h1>

            <div className="grid place-items-center">
                <div className="mx-auto mt-5 lg:mt-20 flex flex-col lg:flex-row items-baseline">
                    <h1 className="text-3xl lg:text-5xl font-bold rays gradient_text w-max">
                        <Link href="/arts/1">
                            <a> Cutie Cat </a>
                        </Link>
                    </h1>

                    <p className="text-xl ml-2 lg:ml-4">
                        by:{' '}
                        <Link href="/artists/1">
                            <a className="text-yellow-300">Crazy Artist</a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="grid place-items-center mx-auto w-11/12 h-96 lg:w-[900px] lg:h-[700px] relative mt-10">
                <Image
                    src="https://images.unsplash.com/photo-1582201957424-621320ad670d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80"
                    alt="Today pick"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </section>
    )
}

export default TodayPick
