import Wrapper from '../../components/Wrapper'
import Image from 'next/image'
import ArtOwner from '../../components/ArtItem/ArtOwner'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'

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
            <div className="basis-4/12 text-white py-10 flex flex-col pr-20 overflow-scroll screen_with_nav ">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Speedy Bone #2223</h1>
                    <button className="rays px-7 py-1 self-start">Love</button>
                </div>
                <h3 className="text-text-blue text-xl italic mt-2 cursor-pointer">
                    Mike Jason
                </h3>
                <div className="flex justify-between my-5 w-full">
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
                <div className="mt-auto mb-0 border-t-2 border-pink-300">
                    <h1 className="text-xl my-3">Price: $3000</h1>
                    <button className="rays w-full py-3 text-base rounded-lg text-white ">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArtItem
