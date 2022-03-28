import React, { useState } from 'react'
import ImageCrop from '../../components/ImageCrop/ImageCrop'

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

    return <ImageCrop />
}

export default Testing
