import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TodayPick = () => {
    return (
        <section className="text-white w-full my-20">
            <h1 className="text-5xl font-bold text-center mt-5 ">
                Today&apos;s pick
            </h1>

            <div className="w-[900px] mx-auto mt-20 flex items-baseline">
                <h1 className="text-5xl font-bold rays gradient_text w-max">
                    <Link href="/arts/1">
                        <a> Cutie Cat </a>
                    </Link>
                </h1>

                <p className="text-xl ml-4">
                    by:{' '}
                    <Link href="/artists/1">
                        <a className="text-yellow-300">Crazy Artist</a>
                    </Link>
                </p>
            </div>
            <div className="grid place-items-center mx-auto w-[900px] h-[700px] relative mt-10">
                <Image
                    src="https://images.unsplash.com/photo-1582201957424-621320ad670d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80"
                    alt="Today pick"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </section>
    )
}

export default TodayPick
