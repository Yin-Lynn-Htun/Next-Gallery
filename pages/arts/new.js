import React from 'react'
import Wrapper from '../../components/Wrapper'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'

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
                    <div className="h-full  flex-1 p-10">
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
                                        item
                                    </h1>
                                    <div className="grid grid-cols-2 grid-rows-2 gap-5 px-10">
                                        <FormInput />
                                        <FormInput />
                                        <div className="col-span-2">
                                            <FormInput name="Description" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full my-4">
                                    <h1 className="bg-gray text-white py-3  text-xl px-10 w-full">
                                        Property
                                    </h1>
                                    <div className="grid grid-cols-2 grid-rows-2 gap-5 px-10">
                                        <FormInput name="Price" />
                                        <FormInput name="Currency" />
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
                    <div className="w-[300px] bg-yellow-300 h-full pt-10">
                        <h1>Sample Image</h1>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CreatArt
