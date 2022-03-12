import Wrapper from '../../components/Wrapper'
import Image from 'next/image'
import ArtOwner from '../../components/ArtItem/ArtOwner'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import CtaButton from '../../components/CtaButton'

const Tag = ({ name }) => {
    return (
        <span className="bg-emerald-700 w-max py-1 px-2 rounded-full m-2 whitespace-nowrap">
            {name}
        </span>
    )
}

const ArtItem = () => {
    return (
        <div className="flex-1 flex">
            <div className="relative mx-auto max-w-[1900px] py-10 px-16 flex-1 flex">
                <div className="w-full h-full border-4 outline-white relative rounded-xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80"
                        alt="Title of the art"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="basis-4/12 text-white pb-10 flex flex-col pr-20 overflow-y-scroll screen_with_nav  relative ">
                <div className="flex justify-between  pt-10 py-5 sticky top-0 bg-background-main">
                    <h1 className="text-3xl font-bold">Speedy Bone #2223</h1>
                    <CtaButton name="Buy Now" />
                </div>
                <h3 className="text-text-blue text-xl italic mt-2 cursor-pointer">
                    Mike Jason
                </h3>

                <div className="flex gap-20 my-5 w-full">
                    <div>
                        <GiSelfLove className="text-red-500 w-10 h-10 inline mr-5" />
                        <span className="text-white">1010</span>
                    </div>
                    <div>
                        <AiFillEye className="text-blue-500 w-10 h-10 inline mr-5" />
                        <span className="text-white">2009</span>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <Tag name="Color Painting" />
                    <Tag name="Character" />
                    <Tag name="Nature" />
                    <Tag name="Fancy" />
                    <Tag name="Color Painting" />
                </div>

                <p className="text-base mt-10">
                    The Runners. The most elite agency among the Tasty Bones.
                    The Speedy Bones undergo rigorous training and wear
                    enchanted speed suits that enable them to bend time and make
                    food deliveries at incredible speed. With their help, the
                    souls receive their food deliveries before turning into
                    Hungry Ghosts
                </p>

                <p className="text-base mt-10">
                    The Runners. The most elite agency among the Tasty Bones.
                    The Speedy Bones undergo rigorous training and wear
                    enchanted speed suits that enable them to bend time and make
                    food deliveries at incredible speed. With their help, the
                    souls receive their food deliveries before turning into
                    Hungry Ghosts
                </p>
                <p className="text-base mt-10">
                    The Runners. The most elite agency among the Tasty Bones.
                    The Speedy Bones undergo rigorous training and wear
                    enchanted speed suits that enable them to bend time and make
                    food deliveries at incredible speed. With their help, the
                    souls receive their food deliveries before turning into
                    Hungry Ghosts
                </p>
                <p className="text-base mt-10">
                    The Runners. The most elite agency among the Tasty Bones.
                    The Speedy Bones undergo rigorous training and wear
                    enchanted speed suits that enable them to bend time and make
                    food deliveries at incredible speed. With their help, the
                    souls receive their food deliveries before turning into
                    Hungry Ghosts
                </p>
                <p className="text-base mt-10">
                    The Runners. The most elite agency among the Tasty Bones.
                    The Speedy Bones undergo rigorous training and wear
                    enchanted speed suits that enable them to bend time and make
                    food deliveries at incredible speed. With their help, the
                    souls receive their food deliveries before turning into
                    Hungry Ghosts
                </p>
            </div>
        </div>
    )
}

export default ArtItem
