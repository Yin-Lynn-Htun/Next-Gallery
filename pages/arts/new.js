import React from 'react'
import Wrapper from '../../components/Wrapper'

const FormInput = ({ name = 'Art Name' }) => (
    <div className="flex flex-col">
        <label htmlFor="item-name" className="my-3">
            {name}
        </label>
        <input
            type="text"
            id="item-name"
            placeholder="Example: Monalisa"
            className="p-3 border-black border-2"
        />
    </div>
)

const CreatArt = () => {
    return (
        <Wrapper>
            <div>
                <div className="text-white text-3xl font-bold text-center mx-auto mb-4">
                    Upload your item
                </div>

                <div className="flex h-[1000px] bg-red-300">
                    <div className="h-full bg-white flex-1">
                        <div className="flex flex-col">
                            <div className="border-dashed border-2 border-black h-40 w-full bg-red-300 grid place-items-center">
                                Image placeholder
                            </div>

                            <div className="bg-blue-200 flex flex-col w-full  ">
                                <div className="bg-red-100 w-full my-4">
                                    <h1 className="bg-black text-white py-3  text-xl px-10 w-full">
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

                                <div className="bg-red-100 w-full my-4">
                                    <h1 className="bg-black text-white py-3  text-xl px-10 w-full">
                                        Property
                                    </h1>
                                    <div className="grid grid-cols-2 grid-rows-2 gap-5 px-10">
                                        <FormInput name="Price" />
                                        <FormInput name="Currency" />
                                        <div className="col-span-2">
                                            <h1 className="my-3">Category</h1>
                                            <button className="border-2 border-black px-4 py-1">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-yellow-300 h-full">
                        <h1>Sample Image</h1>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CreatArt
