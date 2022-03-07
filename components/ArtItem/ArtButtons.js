import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import { BiDetail } from 'react-icons/bi'
import { FaMoneyBillAlt } from 'react-icons/fa'

const ArtButtons = () => {
    return (
        <div className="flex justify-between w-full">
            <SecondaryButton>
                <BiDetail className="inline mr-2" />
                <span>Detail</span>
            </SecondaryButton>
            <PrimaryButton>
                <FaMoneyBillAlt className="inline mr-2 text-white" />
                <span>Buy Now</span>
            </PrimaryButton>
        </div>
    )
}

export default ArtButtons
