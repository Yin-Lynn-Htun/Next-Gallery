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

<<<<<<< HEAD
    return <ImageCrop />
=======
    return (
        <div>
            <button
                className="bg-white text-black"
                onClick={handleClickProfile}
            >
                Click to create profile
            </button>

            <button
                className="bg-white text-black"
                onClick={handleClickProfile}
            >
                Click to fetch art by liam
            </button>
        </div>
    )
>>>>>>> main
}

export default Testing
