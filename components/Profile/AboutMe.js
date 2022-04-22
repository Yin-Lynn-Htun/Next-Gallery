import Image from 'next/image'
import React from 'react'

const GeneralInfoItem = ({ title, info }) => {
    return (
        <div className="my-3 flex flex-col gap-1">
            <h1 className="font-thin text-xl text-text-green">{title}</h1>
            <p className="text-lg tracking-wider">{info}</p>
        </div>
    )
}

const AboutMe = ({ artist }) => {
    return (
        <div className="px-20">
            <div className="pb-10 border-b-2 border-gray-200">
                <h1 className="font-bold text-3xl">General Information</h1>
                <div className="flex w-full justify-between my-5">
                    <GeneralInfoItem
                        title="Phone Number"
                        info={artist.phoneNumber}
                    />
                    <GeneralInfoItem
                        title="Email Address"
                        info={artist.email}
                    />

                    <GeneralInfoItem title="Location" info={artist.location} />
                </div>
                <div className="my-3 flex flex-col gap-4">
                    <h1 className="font-thin text-xl text-text-green">
                        Social Media
                    </h1>
                    <div className="flex gap-5">
                        <Image
                            src="/static/images/FB.png"
                            alt="FB Logo"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/static/images/twitter.png"
                            alt="FB Logo"
                            width={50}
                            height={40}
                        />
                        <Image
                            src="/static/images/IG.png"
                            alt="FB Logo"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/static/images/website.png"
                            alt="FB Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>

            <div className="py-10">
                <h1 className="font-bold text-3xl">About the artist</h1>
                <div className="my-5 text-lg leading-relaxed margin_all_child">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Accusantium vero reprehenderit similique!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam sit quae unde ratione harum exercitationem
                        magni voluptate excepturi, amet molestias vitae autem
                        illo sed nesciunt, sint quo mollitia corporis
                        perspiciatis aliquid.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, aliquid distinctio? Explicabo itaque
                        asperiores laboriosam cupiditate molestias quas
                        consequatur culpa, tempore nulla, doloremque quam
                        ducimus qui maxime inventore, labore hic voluptate eos
                        adipisci placeat cum nihil sint veritatis rerum impedit!
                        Quaerat ducimus blanditiis assumenda nobis. Fugiat
                        dolorum id officia. Eius, iure omnis recusandae
                        obcaecati cum ipsa temporibus voluptates possimus
                        expedita!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
