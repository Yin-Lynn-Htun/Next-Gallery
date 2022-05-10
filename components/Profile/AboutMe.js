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
        <div>
            <div className="pb-10 border-b-2 border-gray-200">
                <h1 className="font-bold text-3xl">General Information</h1>
                <div className="flex flex-col md:flex-row w-full justify-center md:justify-between my-5">
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
                    {artist.bio || 'No bio available yet.'}
                </div>
            </div>
        </div>
    )
}

export default AboutMe
