import React, { useState } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const Testing = () => {
    const [crop, setCrop] = useState({ aspect: 1 / 1 })
    const handleChange = (newCrop) => {
        setCrop(newCrop)
    }
    const handleImageLoaded = (image) => {
        console.log(image)
    }

    const handleOnCropComplete = (crop, pixelCrop) => {
        console.log(crop, pixelCrop)
    }

    return (
        <div style={{ width: '500px', height: '500px' }}>
            <ReactCrop
                src="/static/images/BG.png"
                crop={crop}
                onChange={handleChange}
                onImageLoaded={handleImageLoaded}
                onComplete={handleOnCropComplete}
                circularCrop={true}
            />
        </div>
    )
}

export default Testing
