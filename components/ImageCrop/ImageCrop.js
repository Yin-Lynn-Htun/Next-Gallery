import { useState } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Image from 'next/image'
import Portal from '../Portal'
import SecondaryButton from '../SecondaryButton'
import PrimaryButton from '../PrimaryButton'

const ImageCrop = () => {
    const [crop, setCrop] = useState({
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    })
    return (
        <Portal>
            <div className="w-screen h-screen bg-[#030812ef]  fixed top-0 left-0 z-50 overflow-hidden grid place-items-center">
                <div className="w-[500px] flex flex-col gap-10">
                    <div className="w-[500px] h-[500px]  ">
                        <ReactCrop
                            crop={crop}
                            onChange={(c) => setCrop(c)}
                            circularCrop={true}
                            aspect={1 / 1}
                        >
                            <Image
                                src={
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                                }
                                alt="Profile Picture"
                                width={500}
                                height={500}
                                objectFit="contain"
                            />
                        </ReactCrop>
                    </div>

                    <div className="flex justify-center gap-10">
                        <PrimaryButton>Crop</PrimaryButton>
                        <SecondaryButton>Cancel</SecondaryButton>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default ImageCrop
