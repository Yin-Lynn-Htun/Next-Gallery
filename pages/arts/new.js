/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Wrapper from '../../components/Wrapper'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import Image from 'next/image'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import ArtButtons from '../../components/ArtItem/ArtButtons'
import ArtItem from '../../components/ArtItem/ArtItem'

const FormInput = ({ name = 'Art Name' }) => (
    <div className="flex flex-col text-white">
        <label htmlFor="item-name" className="my-3 text-lg">
            {name}
        </label>
        <input
            type="text"
            id="item-name"
            placeholder="Example: Monalisa"
            className="p-3 border-black border-2 rounded-md"
        />
    </div>
)

const CreatArt = () => {
    return (
        <Wrapper>
            <div>
                <div className=" rays gradient_text text-4xl font-bold text-center mx-auto mb-4">
                    Upload your item
                </div>
                <div className="flex h-[1000px] ">
                    <div className="h-full flex-1 p-10">
                        <div className="flex flex-col">
                            <div className="text-white border-dashed border-2 border-white h-60 w-full bg-black grid place-items-center">
                                <h1 className="text-2xl">
                                    Drop your art image here
                                </h1>
                                <h3 className="text-large font-bold">OR</h3>
                                <SecondaryButton>Browse File</SecondaryButton>
                            </div>

                            <div className=" flex flex-col w-full my-8">
                                <div className="w-full my-5">
                                    <h1 className="bg-gray text-white py-3 text-xl px-10 w-full">
                                        Details
                                    </h1>
                                    <div className="grid grid-cols-2 grid-rows-3 gap-5 px-10">
                                        <FormInput />
                                        <FormInput name="Price" />
                                        <div className="col-span-2">
                                            <FormInput name="Description" />
                                        </div>
                                        <div className="col-span-2 text-white">
                                            <h1 className="my-3 text-lg">
                                                Choose categories
                                            </h1>
                                            <button className="border-2 self border-white px-4 py-1">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <PrimaryButton _classname="w-max px-5 self-center ">
                                    Upload Your Art
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="w-[320px] text-white h-full pt-5 ">
                        <h1 className="my-5 font-bold text-2xl">Art Preview</h1>
                        <ArtItem
                            artistProfile={true}
                            name="Art Name"
                            src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80"
                            loveCount={0}
                            viewCount={0}
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CreatArt
