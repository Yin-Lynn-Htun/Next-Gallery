import React, { useState, useRef } from 'react'
import Wrapper from '../../components/Wrapper'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import ArtItem from '../../components/ArtItem/ArtItem'
import FormInput from '../../components/FormInput'
import CategoryModal from '../../components/Modals/CategoryModal'
import Tag from '../../components/Tag'
import { useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import FillProfileModal from '../../components/Modals/FillProfileModal'
import { connectToDb } from '../../utils/db'

const CreatArt = ({ user }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [artImage, setArtImage] = useState(null)
    const [isFilePicked, setIsFilePicked] = useState(false)
    const [artImageSrc, setArtImageSrc] = useState(
        '/static/images/ImageHolder.svg'
    )

    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const [categories, setCategories] = useState([])
    const fileInputRef = useRef(null)

    const { data: session } = useSession()
    const { userId } = session
    const router = useRouter()

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeFileInput = (e) => {
        const file = e.target.files[0]
        setArtImage(file)
        setIsFilePicked(true)
        setArtImageSrc(URL.createObjectURL(file))
    }

    const handleAddCategory = () => {
        setShowCategoryModal(true)
    }

    const handleSaveCategory = (categories) => {
        setCategories(categories)
        setShowCategoryModal(false)
    }

    const clearFormData = () => {
        setName('')
        setPrice(0)
        setDescription('')
        setIsFilePicked(false)
        setArtImage(null)
        setArtImageSrc('/static/images/ImageHolder.svg')
        setCategories([])
    }

    const uploadImage = async () => {
        const cloudName = 'dtakk3gbq'
        const formData = new FormData()
        formData.append('file', artImage)
        formData.append('upload_preset', 'next-gallery')

        const respond = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
            {
                method: 'POST',
                body: formData,
            }
        )

        const data = await respond.json()
        return data
    }

    const handleUploadArt = async () => {
        const imageData = await uploadImage()
        const data = await fetch('/api/arts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                imgUrl: imageData.secure_url,
                title: name,
                price,
                description,
                categories,
                artist: userId,
            }),
        }).then((res) => res.json())

        if (data.ok) {
            // right now clear states, later maybe redirect to explore page or something
            clearFormData()
            router.replace('/profile?home=true')
        }
    }

    if (!user.isArtist) {
        return <FillProfileModal />
    }

    return (
        <Wrapper>
            {showCategoryModal && (
                <CategoryModal
                    handleSaveCategory={handleSaveCategory}
                    categories={categories}
                />
            )}
            <div>
                <div className="text-5xl rays gradient_text font-bold text-center mx-auto mb-4 mt-10">
                    Upload Your Art
                </div>
                <div className="flex h-[1000px] ">
                    <div className="h-full flex-1 p-10">
                        <div className="flex flex-col">
                            <div className="text-white border-dashed border-2 border-white h-60 w-full bg-black grid place-items-center">
                                {!isFilePicked ? (
                                    <>
                                        <h1 className="text-2xl">
                                            Drop your art image here
                                        </h1>
                                        <h3 className="text-large font-bold">
                                            OR
                                        </h3>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name="art"
                                            id="art"
                                            hidden
                                            ref={fileInputRef}
                                            onChange={handleChangeFileInput}
                                        />
                                        <PrimaryButton
                                            onClick={() => {
                                                console.log(
                                                    fileInputRef.current
                                                )
                                                fileInputRef.current.click()
                                            }}
                                        >
                                            Browse File
                                        </PrimaryButton>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-10 items-center">
                                        <h1 className="text-green-300 text-2xl">
                                            {artImage.name}
                                        </h1>
                                        <SecondaryButton
                                            onClick={() => {
                                                setIsFilePicked(false)
                                                setArtImage(null)
                                                setArtImageSrc(
                                                    '/static/images/ImageHolder.svg'
                                                )
                                            }}
                                        >
                                            Delete Image
                                        </SecondaryButton>
                                    </div>
                                )}
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
                                            <div className="flex ">
                                                {categories.length > 0 &&
                                                    categories.map(
                                                        (category) => (
                                                            <Tag
                                                                key={category}
                                                                name={category}
                                                            />
                                                        )
                                                    )}
                                                <button
                                                    className="border-2 self border-white px-4 py-1 mx-2"
                                                    onClick={handleAddCategory}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <PrimaryButton
                                    _classname="w-max px-5 self-center"
                                    onClick={handleUploadArt}
                                >
                                    Upload Your Art
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="w-[320px] text-white h-max  pt-5 sticky top-0">
                        <div>
                            <h1 className="my-5 font-bold text-2xl">
                                Art Preview
                            </h1>
                            <ArtItem
                                artistProfile={true}
                                title={name || 'Enter your art Name'}
                                price={price}
                                imgUrl={artImageSrc}
                                love={0}
                                watch={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CreatArt

import Artist from '../../Models/Artist'

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login',
            },
        }
    }

    await connectToDb()
    const user = await Artist.findById(session.userId)

    console.log(session, 'session')

    return {
        props: {
            session: await getSession(context),
            user: JSON.parse(JSON.stringify(user)),
        },
    }
}
