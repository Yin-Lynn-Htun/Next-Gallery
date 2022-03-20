import React, { useState } from 'react'
import Wrapper from '../../components/Wrapper'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import ArtItem from '../../components/ArtItem/ArtItem'
import FormInput from '../../components/FormInput'

const CreatArt = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    return (
        <Wrapper>
            <div>
                <div className=" text-5xl rays gradient_text font-bold text-center mx-auto mb-4 mt-10">
                    Upload Your Art
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
                                    <h1 className="bg-form-gray text-white py-3 text-xl px-10 w-full">
                                        Details
                                    </h1>
                                    <div className="grid grid-cols-2 grid-rows-[100px] gap-5 px-10">
                                        <FormInput
                                            name="Art Name"
                                            value={name}
                                            placeholder={'Example: Monalisa'}
                                            handleChange={handleNameChange}
                                        />
                                        <FormInput
                                            name="Price"
                                            value={price}
                                            handleChange={handlePriceChange}
                                            type={'number'}
                                        />
                                        <div className="col-span-2">
                                            <div className="flex flex-col text-white">
                                                <label
                                                    htmlFor="description"
                                                    className="my-3 text-lg"
                                                >
                                                    Description
                                                </label>
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    rows="7"
                                                    placeholder='Example: "Monalisa is a painting by the Dutch artist Rembrandt."'
                                                    className="resize-none rounded-md text-black p-2"
                                                    value={description}
                                                    onChange={
                                                        handleDescriptionChange
                                                    }
                                                ></textarea>
                                            </div>
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
                            preview
                            artistProfile={true}
                            name={name || 'Enter your art Name'}
                            price={price}
                            src="/static/images/ImageHolder.svg"
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
