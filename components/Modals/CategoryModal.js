import React, { useState } from 'react'
import Portal from '../Portal'
import Tag from '../Tag'
import SecondaryButton from '../SecondaryButton'
import { dummy_categories } from '../../dummy_data'

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

const CategoryModal = ({ handleSaveCategory }) => {
    const [categoryList, setCategoryList] = useState(dummy_categories)
    const [chooseCategory, setChooseCategory] = useState([])

    const handleAddCategoryItem = (name) => {
        setChooseCategory([...chooseCategory, name])
    }

    const handleRemoveCategoryItem = (name) => {
        setChooseCategory(chooseCategory.filter((item) => item !== name))
    }

    const handleNameChange = (e) => {
        const newCategory = dummy_categories.filter((category) =>
            category.toLocaleLowerCase().includes(e.target.value.toLowerCase())
        )
        setCategoryList(newCategory)
    }

    return (
        <Portal>
            <div className="w-screen h-screen bg-[#030812ef]  fixed top-0 left-0 z-50 overflow-hidden">
                <div className=" bg-gradient-to-r bg-[#dd2653] text-white fixed w-[600px]  center_fixed_component shadow-2xl rounded-lg px-14 py-7">
                    <h1 className="text-3xl font-semibold">Categories</h1>

                    <div>
                        <CategoryInput
                            placeholder={'Search categories'}
                            handleChange={handleNameChange}
                            focus={true}
                        />
                    </div>

                    <div className="flex flex-wrap mb-5">
                        {categoryList.map((category) => (
                            <Tag
                                key={category}
                                name={category}
                                edit={true}
                                handleAddCategoryItem={handleAddCategoryItem}
                                handleRemoveCategoryItem={
                                    handleRemoveCategoryItem
                                }
                            />
                        ))}
                    </div>

                    <div className="flex ">
                        <div className="ml-auto flex gap-3 ">
                            <SecondaryButton
                                type="button"
                                onClick={() =>
                                    handleSaveCategory(chooseCategory)
                                }
                            >
                                Save
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default CategoryModal
