import { useRouter } from 'next/router'
import React, { useState, useEffect, useContext } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { FilterContext } from '../../context/FilterContext'

const dummy_categories = [
    'All',
    'Cartoon',
    'Character',
    'Environment',
    'Pattern Design',
    'Portraits Design',
    'Illustration',
    'Graphic Design',
    'Modern Art',
    'Pencil',
]

const CategoryFilter = () => {
    const router = useRouter()
    const { category } = router.query

    const { model, handleChangeModel } = useContext(FilterContext)

    console.log(model, 'value')

    useEffect(() => {
        console.log(category, 'asdf')
    }, [category])

    const closeCategory = () => {
        handleChangeModel(null)
        document.removeEventListener('click', closeCategory)
    }

    const handleClickCategoryButton = (e) => {
        if (model !== 'category') {
            handleChangeModel('category')
            e.stopPropagation()
            document.addEventListener('click', closeCategory)
        } else {
            closeCategory()
        }
    }

    return (
        <div className="relative z-20">
            <button
                name="category"
                id="category"
                className="bg-button-blue h-full rounded-md px-3 flex items-center gap-2"
                onClick={handleClickCategoryButton}
            >
                <BiCategoryAlt />
                Category
            </button>

            {model === 'category' && (
                <div className="py-5 absolute mt-2 w-64 rounded-lg top-full bg-white text-border-blue px-2">
                    {dummy_categories.map((category, idx) => {
                        return (
                            <p
                                key={idx}
                                className="font-bold py-2 px-3 border-gray-400 hover:bg-gray-200 rounded-md text-lg"
                                onClick={() => {
                                    router.push(`?category=${category}`)
                                }}
                            >
                                {category}
                            </p>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default CategoryFilter
