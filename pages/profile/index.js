import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Wrapper from '../../components/Wrapper'
import FormInput from '../../components/FormInput'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const UserProfile = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [isFilePicked, setIsFilePicked] = useState(false)
    const [crop, setCrop] = useState({ aspect: 16 / 9 })
    const [imageSrc, setImageSrc] = useState('/static/images/imageHolder.svg')

    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        setSelectedFile(file)
        setImageSrc(URL.createObjectURL(file))
        setIsFilePicked(true)
    }

    const handleDeleteImage = () => {
        setSelectedFile(null)
        setImageSrc('/static/images/imageHolder.svg')
        setIsFilePicked(false)
    }

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
                        <div className="relative w-52 h-52 mx-auto rounded-full my-2">
                            <Image
                                src={imageSrc}
                                alt="Insert Image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <label
                            className="rays py-3 my-2 rounded-md font-semibold text-center"
                            htmlFor="profileImage"
                        >
                            Browse Your Image
                        </label>
                        <input
                            id="profileImage"
                            name="profileImage"
                            accept="image/*"
                            type="file"
                            hidden
                            onChange={handleChangeFile}
                        />

                        <button
                            onClick={handleDeleteImage}
                            className="bg-text-dark py-3 my-2 rounded-md font-semibold"
                        >
                            Delete Image
                        </button>

                        {isFilePicked && (
                            <div>
                                <ReactCrop
                                    crop={crop}
                                    onChange={(crop) => {
                                        console.log(crop)
                                        setCrop({ crop })
                                    }}
                                    src={imageSrc}
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex-1  grid grid-cols-4 px-5 ">
                        <div className="col-span-4 my-5">
                            <h1 className="bg-form-gray text-white py-3 text-xl px-10 w-full">
                                Details
                            </h1>
                            <div className="grid grid-cols-2 grid-rows-2 gap-5 pl-5">
                                <FormInput
                                    name={'First Name'}
                                    placeholder="Example: John"
                                />
                                <FormInput
                                    name={'Last Name'}
                                    placeholder="Example: Doe"
                                />
                                <FormInput
                                    name={'Email Address'}
                                    type="email"
                                    placeholder={'Example: johndoe@gmail.com'}
                                />
                                <FormInput
                                    name={'Bio'}
                                    placeholder={'Example: I am a student.'}
                                />
                            </div>
                        </div>
                        <div className="col-span-4 my-5">
                            <h1 className="bg-form-gray text-white py-3 text-xl px-10 w-full">
                                Details
                            </h1>
                            <div className="grid grid-cols-2 grid-rows-2 gap-5 pl-5">
                                <FormInput
                                    name={'Your Website'}
                                    placeholder="Your website url"
                                />
                                <FormInput
                                    name={'Facebook'}
                                    placeholder="Your facebook url"
                                />
                                <FormInput
                                    name={'Twitter'}
                                    placeholder="Your Twitter url"
                                />
                                <FormInput
                                    name={'Instagram'}
                                    placeholder="Your Instagram url"
                                />
                            </div>
                        </div>
                        <button className="col-span-1 col-start-4 rounded-lg w-max px-7 rays h-10  my-5 justify-self-end font-semibold">
                            Update your profile
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default UserProfile