import { useState } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Image from 'next/image'

const ImageCrop = ({ imgSrc }) => {
    const [crop, setCrop] = useState({
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    })
    return (
        <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            circularCrop={true}
            aspect={1 / 1}
        >
            <Image
                src={imgSrc}
                alt="Profile Picture"
                width={500}
                height={500}
                objectFit="cover"
            />
        </ReactCrop>
    )
}

export default ImageCrop
