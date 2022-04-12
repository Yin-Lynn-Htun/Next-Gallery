import React, { useState } from 'react'
import ImageCrop from '../../components/ImageCrop/ImageCrop'

const Testing = () => {
    const handleClickProfile = async () => {
        const res = await fetch('/api/profile/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: 'Liam',
                lastName: 'Lynn',
                phoneNumber: '+1012121212',
                location: 'Florida, USA',
                bio: 'I am a software developer',
                socials: {
                    website: 'https://www.liamlynn.com/',
                    twitter: 'https://twitter.com/liamlynn',
                },
            }),
        }).then((res) => res.json())

        console.log(res)
    }

    return <ImageCrop />
}

export default Testing
