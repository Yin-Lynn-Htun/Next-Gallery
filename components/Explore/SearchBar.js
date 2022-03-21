import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

const SearchBar = () => {
    const [text, setText] = useState('')
    const router = useRouter()

    const handleSumitForm = (e) => {
        e.preventDefault()
        console.log(text)
        router.push(`/search/arts/${text}`)
    }

    return (
        <div className="flex w-72 gap-2 bg-white text-black px-3 items-center rounded-md">
            <BiSearchAlt className="w-7 h-7" />
            <form onSubmit={handleSumitForm}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent w-full outline-none p-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchBar
