/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Image from 'next/image'
import { useDebounceEffect } from './useDebounceEffect'
import { canvasPreview } from './CanvasPreview'

const ImageCrop = ({ imgSrc }) => {
    const previewCanvasRef = useRef(null)
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

    return (
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
            <div className="w-[250px] h-[250px]">
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
            </div>
        </div>
    )
}

export default ImageCrop
