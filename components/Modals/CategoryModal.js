import React, { useState } from 'react'
import Portal from '../Portal'
import FormInput from '../FormInput'
import Tag from '../Tag'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

const CategoryModal = ({
    categories,
    handleCancelCategory,
    handleSaveCategory,
}) => {
    const [name, setName] = useState('')
    const handleNameChange = (e) => setName(e.target.value)

    return (
        <Portal>
            <div className="w-screen h-screen bg-[#030812ef]  fixed top-0 left-0 z-50 overflow-hidden">
                <div className=" bg-gradient-to-r from-[#EF3B36] to-white text-white fixed w-[700px] min-h-[300px] center_fixed_component bg-blue-900 shadow-2xl rounded-lg px-20 py-7">
                    <h1 className="text-3xl">Categories</h1>
                    <form
                        onSubmit={(e) => {
                            const result = handleSaveCategory(e, name)
                            if (!result) {
                                setName('')
                            }
                        }}
                    >
                        <div>
                            <FormInput
                                // name={'Add Categories'}
                                placeholder={'Example: Cartoon'}
                                value={name}
                                handleChange={handleNameChange}
                                focus={true}
                            />
                        </div>
                        <div className="flex flex-wrap my-5">
                            {categories.length > 0 &&
                                categories.map((category) => (
                                    <Tag key={category} name={category} />
                                ))}
                        </div>
                        <div className="flex ">
                            <div className="ml-auto flex gap-3 ">
                                <SecondaryButton
                                    type="button"
                                    onClick={handleCancelCategory}
                                >
                                    Close
                                </SecondaryButton>
                                <PrimaryButton type="submit">
                                    Save
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Portal>
    )
}

export default CategoryModal
