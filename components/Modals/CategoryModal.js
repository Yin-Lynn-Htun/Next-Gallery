import React, { useState } from 'react'
import Portal from '../Portal'
import Tag from '../Tag'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

const CategoryInput = ({ value, handleChange, focus, placeholder }) => {
    return (
        <input
            type="text"
            id="item-name"
            placeholder={placeholder}
            className="my-5 p-2 w-full rounded-md text-black active:outline-none focus:outline-none"
            value={value}
            onChange={handleChange}
            autoFocus={true}
            autoComplete="off"
        />
    )
}

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
                <div className=" bg-gradient-to-r bg-[#dd2653] text-white fixed w-[600px]  center_fixed_component shadow-2xl rounded-lg px-14 py-7">
                    <h1 className="text-3xl font-semibold">Categories</h1>
                    <form
                        onSubmit={(e) => {
                            const result = handleSaveCategory(e, name)
                            if (!result) {
                                setName('')
                            }
                        }}
                    >
                        <div>
                            <CategoryInput
                                // name={'Add Categories'}
                                placeholder={'Example: Cartoon'}
                                value={name}
                                handleChange={handleNameChange}
                                focus={true}
                            />
                        </div>
                        <div className="flex flex-wrap mb-5">
                            {categories.length > 0 &&
                                categories.map((category) => (
                                    <Tag
                                        key={category}
                                        name={category}
                                        edit={true}
                                    />
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
