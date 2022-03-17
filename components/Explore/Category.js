import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'

const dummy_categories = [
    'All',
    'Cartoon',
    '3D Animation',
    'Motion',
    'Virtual',
    'Drawing',
]

const CategoryFilter = () => {
    const [showCategory, setShowCategory] = useState(false)
    const router = useRouter()
    const { category } = router.query

    useEffect(() => {
        console.log(category, 'asdf')
    }, [category])

    const closeCategory = () => {
        setShowCategory(false)
        document.removeEventListener('click', closeCategory)
    }

    const handleClickCategoryButton = (e) => {
        if (!showCategory) {
            setShowCategory(true)
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

            {showCategory && (
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
