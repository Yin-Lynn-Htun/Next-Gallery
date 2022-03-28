import React from 'react'
import ImageCrop from '../ImageCrop/ImageCrop'
import Portal from '../Portal'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

const ProfileImageCropModal = ({ onClickCancel, imgSrc }) => {
    return (
        <Portal>
            <div className="w-screen h-screen bg-[#030812ef]  fixed top-0 left-0 z-50 overflow-hidden grid place-items-center">
                <div className="w-[500px] flex flex-col gap-10">
                    <div className="w-[500px] h-[500px]  ">
                        <ImageCrop imgSrc={imgSrc} />
                    </div>
                    <div className="flex justify-center gap-10">
                        <PrimaryButton>Crop</PrimaryButton>
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
