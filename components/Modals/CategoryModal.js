import React from 'react'
import Portal from '../Portal'
import FormInput from '../FormInput'
import Tag from '../Tag'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

const CategoryModal = () => {
    return (
        <Portal>
            <div className="w-screen h-screen bg-[#030812ef]  fixed top-0 left-0 z-50 overflow-hidden">
                <div className=" bg-gradient-to-r from-[#EF3B36] to-white text-white fixed w-[1000px] h-[300px] center_fixed_component bg-blue-900 shadow-2xl rounded-lg px-20 py-7">
                    <h1 className="text-3xl">Categories</h1>

                    <div>
                        <FormInput
                            // name={'Add Categories'}
                            placeholder={'Example: Cartoon'}
                        />
                    </div>
                    <div className="flex flex-wrap my-5">
                        <Tag name="3D Model" />
                        <Tag name="3D Model" />
                        <Tag name="3D Model" />
                        <Tag name="3D Model" />
                        <Tag name="3D Model" />
                    </div>
                    <div className="flex ">
                        <div className="ml-auto flex gap-3 ">
                            <SecondaryButton> Cancel</SecondaryButton>
                            <PrimaryButton> Save</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default CategoryModal
