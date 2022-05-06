/* eslint-disable @next/next/no-img-element */
import React, { createRef, useState, useRef } from 'react'
import ReactCrop from 'react-image-crop'
import Portal from '../Portal'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import { useDebounceEffect } from '../ImageCrop/useDebounceEffect'
import { canvasPreview } from '../ImageCrop/canvasPreview'

const ProfileImageCropModal = ({ onClickCancel, imgSrc, setimageurl }) => {
    const previewCanvasRef = createRef()
    const [completedCrop, setCompletedCrop] = useState()
    const imgRef = useRef(null)

    const [crop, setCrop] = useState({
        unit: 'px', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 100,
        height: 100,
    })

    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop
                )
            }
        },
        100,
        [completedCrop]
    )

    const uploadImage = async () => {
        const dataURL = previewCanvasRef.current.toDataURL()

        const cloudName = 'dtakk3gbq'
        const formData = new FormData()
        formData.append('file', dataURL)
        formData.append('upload_preset', 'next-gallery')

        const respond = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
            {
                method: 'POST',
                body: formData,
            }
        )

        const data = await respond.json()
        setimageurl(data.url)
    }

    return (
        <Portal>
            <div className="w-screen h-screen bg-[#030812ef]  fixed top-0 left-0 z-50 overflow-hidden grid place-items-center">
                <div className="w-[1000px] flex flex-col gap-10">
                    <div className="grid place-items-center">
                        <div className="flex gap-20">
                            <div className="w-[500px] h-max">
                                <ReactCrop
                                    crop={crop}
                                    onChange={(c) => setCrop(c)}
                                    onComplete={(c) => setCompletedCrop(c)}
                                    circularCrop={true}
                                    aspect={1 / 1}
                                >
                                    <img
                                        ref={imgRef}
                                        src={imgSrc}
                                        alt="Profile Picture"
                                        width={500}
                                        height={500}
                                        style={{
                                            objectFit: 'cover',
                                            border: '1px solid white',
                                        }}
                                    />
                                </ReactCrop>
                            </div>
                            {/* <div className="w-[250px] h-[250px]"> */}
                            {Boolean(completedCrop) && (
                                <canvas
                                    ref={previewCanvasRef}
                                    style={{
                                        outline: '1px solid white',
                                        borderRadius: '50%',
                                        objectFit: 'contain',
                                        width: 250,
                                        height: 250,
                                    }}
                                />
                            )}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="flex justify-center gap-10">
                        <PrimaryButton onClick={uploadImage}>
                            Upload Image
                        </PrimaryButton>
                        <SecondaryButton onClick={onClickCancel}>
                            Cancel
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default ProfileImageCropModal
