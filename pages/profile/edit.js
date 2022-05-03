import React, { useState } from 'react'
import Image from 'next/image'
import Wrapper from '../../components/Wrapper'
import FormInput from '../../components/FormInput'
import { useSession, getSession } from 'next-auth/react'
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'
import Artist from '../../Models/Artist'
import 'react-image-crop/dist/ReactCrop.css'
import ProfileImageCropModal from '../../components/Modals/ProfileImageCropModal'

const UserProfile = ({ artist }) => {
    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [imageSrc, setImageSrc] = useState(
        artist.imgUrl || '/static/images/Profile.svg'
    )
    const [isFilePicked, setIsFilePicked] = useState(false)

    const [firstName, setFirstName] = useState(artist.firstName)
    const [lastName, setLastName] = useState(artist.lastName)
    const [phoneNumber, setPhoneNumber] = useState(artist.phoneNumber)
    const [location, setLocation] = useState(artist.location)
    const [bio, setBio] = useState(artist.bio)

    const [twitter, setTwitter] = useState('')
    const [website, setWebsite] = useState('')
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')

    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setSelectedImageFile(URL.createObjectURL(file))
        setShowModal(true)
    }

    const handleDeleteImage = () => {
        setImageSrc('/static/images/Profile.svg')
        setIsFilePicked(false)
    }

    const setImageUrl = (url) => {
        setImageSrc(url)
        setIsFilePicked(true)
        setShowModal(false)
    }

    const handleCancelModal = () => {
        setShowModal(false)
    }

    const uploadProfile = async () => {
        const formBody = {
            firstName,
            lastName,
            phoneNumber,
            location,
            bio,
            imgUrl: imageSrc,
            socials: {
                twitter,
                website,
                instagram,
                facebook,
            },
        }
        const res = await fetch('/api/profile/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        const data = await res.json()
    }

    return (
        <>
            {showModal && (
                <ProfileImageCropModal
                    imgSrc={selectedImageFile}
                    onClickCancel={handleCancelModal}
                    setimageurl={setImageUrl}
                />
            )}
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
                            <div className="relative w-52 h-52 mx-auto rounded-full my-2 overflow-hidden outline-2 outline-white">
                                <Image
                                    src={imageSrc}
                                    alt="Insert Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            {!isFilePicked && (
                                <>
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
                                </>
                            )}

                            {isFilePicked && (
                                <button
                                    onClick={handleDeleteImage}
                                    className="bg-text-dark py-3 my-2 rounded-md font-semibold"
                                >
                                    Delete Image
                                </button>
                            )}

                            {/* {isFilePicked && (
                            <div>
                                <ReactCrop
                                    crop={crop}
                                    onChange={handleCropChange}
                                    src={imageSrc}
                                    onImageLoaded={handleCropImageLoaded}
                                    onComplete={handleOnCropComplete}
                                    circularCrop={true}
                                />
                            </div>
                        )} */}
                        </div>

                        <div className="flex-1  grid grid-cols-4 px-5 ">
                            <div className="col-span-4 my-5">
                                <h1 className="bg-form-gray text-white py-3 text-xl px-10 w-full">
                                    General Information
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-5 pl-5">
                                    <FormInput
                                        name={'First Name'}
                                        placeholder="Example: John"
                                        value={firstName}
                                        handleChange={(e) => {
                                            setFirstName(e.target.value)
                                        }}
                                    />
                                    <FormInput
                                        name={'Last Name'}
                                        placeholder="Example: Doe"
                                        value={lastName}
                                        handleChange={(e) => {
                                            setLastName(e.target.value)
                                        }}
                                    />
                                    <FormInput
                                        name={'Phone Number'}
                                        type="phone"
                                        placeholder={'Example: +95 9876543210'}
                                        value={phoneNumber}
                                        handleChange={(e) => {
                                            setPhoneNumber(e.target.value)
                                        }}
                                    />
                                    <FormInput
                                        name={'Location'}
                                        placeholder={'Example: USA, Florida'}
                                        value={location}
                                        handleChange={(e) => {
                                            setLocation(e.target.value)
                                        }}
                                    />

                                    <div className="flex flex-col col-span-2">
                                        <label className="my-3 text-lg text-white">
                                            Your bio
                                        </label>
                                        <textarea
                                            className="p-5 rounded-md text-black"
                                            name="bio"
                                            id="bio"
                                            cols="30"
                                            rows="10"
                                            placeholder="Write anything about you."
                                            value={bio}
                                            onChange={(e) => {
                                                setBio(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 my-5">
                                <h1 className="bg-form-gray text-white py-3 text-xl px-10 w-full">
                                    Social Accounts
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-5 pl-5">
                                    <FormInput
                                        name={'Your Website'}
                                        placeholder="Your website url"
                                        value={website}
                                        handleChange={(e) => {
                                            setWebsite(e.target.value)
                                        }}
                                    />
                                    <FormInput
                                        name={'Facebook'}
                                        placeholder="Your facebook url"
                                        value={facebook}
                                        handleChange={(e) => {
                                            setFacebook(e.target.value)
                                        }}
                                    />
                                    <FormInput
                                        name={'Twitter'}
                                        placeholder="Your Twitter url"
                                        value={twitter}
                                        handleChange={(e) => {
                                            setTwitter(e.target.value)
                                        }}
                                    />
                                    <FormInput
                                        name={'Instagram'}
                                        placeholder="Your Instagram url"
                                        value={instagram}
                                        handleChange={(e) => {
                                            setInstagram(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={uploadProfile}
                                className="col-span-1 col-start-4 rounded-lg w-max px-7 rays h-10  my-5 justify-self-end font-semibold"
                            >
                                Update your profile
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

export default UserProfile

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
            },
        }
    }

    const id = session.userId
    const data = await Artist.findById(id)
    const artist = JSON.parse(JSON.stringify(data))

    return {
        props: {
            artist,
        },
    }
}
