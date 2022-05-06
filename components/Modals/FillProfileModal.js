import React, { useState } from 'react'
import Portal from '../Portal'
import SecondaryButton from '../SecondaryButton'
import Image from 'next/image'
import { useRouter } from 'next/router'

const FillProfileModal = () => {
    const router = useRouter()

    return (
        <Portal>
            <div className="w-screen h-screen bg-[#030812ef]  fixed top-0 left-0 z-50 overflow-hidden">
                <div className="bg-[#93082b] text-white fixed w-[600px]  center_fixed_component shadow-2xl rounded-lg px-14 py-7">
                    <h1 className="text-2xl font-semibold text-center">
                        You need only one step to create your arts.
                    </h1>

                    <div className="grid place-items-center">
                        <Image
                            className="mx-auto block"
                            src={'/static/images/fillProfile.svg'}
                            width={250}
                            height={250}
                            alt="illustration"
                        />
                    </div>

                    <div className="my-10">
                        <h1>
                            To be able to upload your arts, please do the
                            following.
                            <ul className="ml-5 mt-2 list-outside list-disc">
                                <li>Complete your profile</li>
                                <li>
                                    Choose &apos;yes&apos; for &apos;Are you an
                                    artist&apos; question.
                                </li>
                            </ul>
                        </h1>
                    </div>

                    <div className="flex ">
                        <div className="ml-auto flex gap-3 ">
                            <SecondaryButton
                                type="button"
                                onClick={() => router.push('/profile/edit')}
                            >
                                Complete now
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default FillProfileModal
