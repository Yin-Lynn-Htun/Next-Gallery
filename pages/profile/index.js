import React from 'react'
import Image from 'next/image'
import Wrapper from '../../components/Wrapper'

const FormInput = ({ name, type }) => (
    <div className="flex flex-col text-white">
        <label htmlFor="item-name" className="my-3 text-lg">
            {name}
        </label>
        <input
            type={type || 'text'}
            id="item-name"
            placeholder="Example: Monalisa"
            className="p-3 border-black border-2 rounded-md text-black"
        />
    </div>
)

const userProfile = () => {
    return (
        <div className="text-white">
            <div className="w-full h-72 relative">
                <Image
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="cover photo"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <Wrapper>
                <div className="flex my-10 w-full">
                    <div className="w-72 flex flex-col px-10">
                        <div className="bg-red-900 w-52 h-52 mx-auto rounded-full my-2"></div>
                        <button className="bg-blue-900 py-2 my-2">
                            Upload From Computer
                        </button>
                        <button className="bg-gray-900 py-2 my-2">
                            Delete Image
                        </button>
                    </div>

                    <div className="flex-1  grid grid-cols-4 px-5 ">
                        <div className="col-span-4 my-5">
                            <h1 className="bg-gray-700 text-white py-3 text-xl pl-5 w-full">
                                Account Information
                            </h1>
                            <div className="grid grid-cols-2 grid-rows-2 gap-5 pl-5">
                                <FormInput name={'First Name'} />
                                <FormInput name={'Last Name'} />
                                <FormInput
                                    name={'Email Address'}
                                    type="email"
                                />
                                <FormInput name={'Bio'} />
                            </div>
                        </div>
                        <div className="col-span-4 my-5">
                            <h1 className="bg-gray-700 text-white py-3 text-xl pl-5 w-full">
                                Social Information
                            </h1>
                            <div className="grid grid-cols-2 grid-rows-2 gap-5 pl-5">
                                <FormInput name={'Your Website'} />
                                <FormInput name={'Facebook'} />
                                <FormInput name={'Twitter'} />
                                <FormInput name={'Instagram'} />
                            </div>
                        </div>
                        <button className="col-span-1 col-start-4 rounded-lg w-max px-7 bg-blue-900 h-10  my-5 justify-self-end">
                            Update your profile
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default userProfile
