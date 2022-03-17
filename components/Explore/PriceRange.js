import React, { useState } from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'

const PriceRange = () => {
    const [showPriceRangeForm, setShowPriceRangeForm] = useState(false)

    return (
        <div className="relative">
            <button
                onClick={() => setShowPriceRangeForm((prevState) => !prevState)}
                className="ml-5 flex bg-button-blue px-5 py-2 rounded-md items-center gap-2"
            >
                <AiOutlineDollarCircle />
                <span> Price range</span>
            </button>

            {showPriceRangeForm && (
                <div className="absolute py-3 px-5 top-full mt-5  ml-10 z-20 bg-white text-black rounded-lg  ">
                    <p className="text-center py-2 font-bold">USD</p>
                    <div className="flex flex-col gap-3">
                        <input
                            className="border-2 border-gray-400 px-4 py-2 rounded-lg"
                            type="text"
                            placeholder="From"
                        />
                        <input
                            className="border-2 border-gray-400 px-4 py-2 rounded-lg"
                            type="text"
                            placeholder="To"
                        />
                    </div>
                    <div className="flex justify-between mt-5">
                        <button className="px-5 py-2 bg-gray-400 text-black rounded-lg">
                            Clear
                        </button>
                        <button className="px-5 py-2 bg-button-blue text-white rounded-lg">
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PriceRange
