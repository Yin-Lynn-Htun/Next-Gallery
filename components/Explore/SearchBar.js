import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

const SearchBar = ({ handleSearch }) => {
    return (
        <div className="flex w-72 gap-2 bg-white text-black px-3 items-center rounded-md">
            <BiSearchAlt className="w-7 h-7" />

            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent w-full outline-none p-2"
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar
