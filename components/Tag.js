import Image from 'next/image'
import { useState } from 'react'

const Tag = ({
    name,
    edit,
    handleAddCategoryItem,
    handleRemoveCategoryItem,
}) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        if (!edit) return
        selected ? handleRemoveCategoryItem(name) : handleAddCategoryItem(name)
        setSelected(!selected)
    }

    return (
        <div
            onClick={handleClick}
            className={`${
                edit && selected ? 'bg-green-400' : 'bg-white'
            } flex gap-4 items-center w-max  m-2 py-1 px-4 rounded-full  whitespace-nowrap`}
        >
            <span className="text-black w-max ">{name}</span>
            {edit && (
                <Image
                    src={`/static/images/${
                        selected ? 'correct.svg' : 'cross.svg'
                    }`}
                    alt="cross"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            )}
        </div>
    )
}

export default Tag
