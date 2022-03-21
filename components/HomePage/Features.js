import React from 'react'
import Image from 'next/image'

const Features = () => {
    return (
        <section className="text-white my-20">
            <h1 className="text-5xl font-bold text-center my-7">How it work</h1>

            <div className="flex gap-12 text-center mt-7">
                <div className="my-5 flex flex-col flex-1 gap-5">
                    <Image
                        src="/static/images/art.svg"
                        alt="Art"
                        width={60}
                        height={60}
                    />
                    <h2 className="text-2xl font-bold">
                        Discover the Finest Arts
                    </h2>
                    <p>
                        We offers a beautiful selection of paintings, drawings,
                        design, and photography in various price ranges from
                        around the world
                    </p>
                </div>
                <div className="my-5 flex flex-col flex-1 gap-5">
                    <Image
                        src="/static/images/upload.svg"
                        alt="Art"
                        width={60}
                        height={60}
                    />
                    <h2 className="text-2xl font-bold">Upload your arts</h2>
                    <p>
                        Upload your work (image, photgraphy or drawing), add a
                        title and description, and get featured on the
                        marketplace. Let the world see your arts.
                    </p>
                </div>
                <div className="my-5 flex flex-col flex-1 gap-5">
                    <Image
                        src="/static/images/wallet.svg"
                        alt="Art"
                        width={60}
                        height={60}
                    />
                    <h2 className="text-2xl font-bold">Sale your creations</h2>
                    <p>
                        Add price for your creative art and the art lovers from
                        our website will buy it. Earn money together with us.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features
