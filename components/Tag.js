import Image from 'next/image'

const Tag = ({ name, edit }) => {
    return (
        <div className="bg-white flex gap-4 items-center w-max  m-2 py-1 px-4 rounded-full  whitespace-nowrap">
            <span className="text-black w-max ">{name}</span>
            {edit && (
                <Image
                    src="/static/images/cross.svg"
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
