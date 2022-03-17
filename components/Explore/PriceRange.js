import React, { useState } from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

const PriceRange = () => {
    const [showPriceRangeForm, setShowPriceRangeForm] = useState(false)
    const [fromPrice, setFromPrice] = useState('')
    const [toPrice, setToPrice] = useState('')
    const [error, setError] = useState(null)

    const router = useRouter()

    const cleanStates = () => {
        setFromPrice('')
        setToPrice('')
        setError('')
    }

    const handleClickApplyButton = () => {
        console.log(fromPrice, toPrice)

        if (toPrice === '' && fromPrice === '') {
            setError('Please fill one of the fields.')
            return
        }

        if (+toPrice && +toPrice < +fromPrice) {
            setError('Second price must be greater.')
            return
        }

        cleanStates()
        setShowPriceRangeForm(false)
        router.push(`?from=${fromPrice}&to=${toPrice}`)
    }

    const handleClickClearButton = () => {
        cleanStates()
    }

    const closePriceRangeForm = () => {
        setShowPriceRangeForm(false)
        document.removeEventListener('click', closePriceRangeForm)
    }

    const handleClickPriceButton = (e) => {
        console.log('sadf')
        if (!showPriceRangeForm) {
            setShowPriceRangeForm(true)
            e.stopPropagation()
            document.addEventListener('click', closePriceRangeForm)
        } else {
            closePriceRangeForm()
        }
    }

    return (
        <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
                onClick={handleClickPriceButton}
                className="ml-5 flex bg-button-blue px-5 py-2 rounded-md items-center gap-2"
            >
                <AiOutlineDollarCircle />
                <span> Price range</span>
            </button>

            {showPriceRangeForm && (
                <div className="absolute py-3 px-5 top-full mt-5  ml-10 z-20 bg-white text-black rounded-lg  ">
                    {error && <p className="text-red-400">{error}</p>}
                    <p className="text-center py-2 font-bold">USD</p>
                    <div className="flex flex-col gap-3">
                        <input
                            className="border-2 border-gray-400 px-4 py-2 rounded-lg"
                            type="text"
                            placeholder="From"
                            onChange={(e) => setFromPrice(e.target.value)}
                            value={fromPrice}
                        />
                        <input
                            className="border-2 border-gray-400 px-4 py-2 rounded-lg"
                            type="text"
                            placeholder="To"
                            onChange={(e) => setToPrice(e.target.value)}
                            value={toPrice}
                        />
                    </div>
                    <div className="flex justify-between mt-5">
                        <button
                            onClick={handleClickClearButton}
                            className="px-5 py-2 bg-gray-400 text-black rounded-lg"
                        >
                            Clear
                        </button>
                        <button
                            onClick={handleClickApplyButton}
                            className="px-5 py-2 bg-button-blue text-white rounded-lg"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PriceRange
