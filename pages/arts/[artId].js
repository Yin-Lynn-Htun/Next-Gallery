import Wrapper from '../../components/Wrapper'
import Image from 'next/image'
import ArtOwner from '../../components/ArtItem/ArtOwner'
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'

const ArtItem = () => {
    return (
        <Wrapper>
            <div className="flex items-center bg-yellow-200/0 w-full h-screen max-w-full">
                <div className="basis-8/12 bg-red-400/0 h-full max-h-full px-20 py-10 ">
                    <div className="max-w-[1000px] w-full h-full bg-slate-300/0 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80"
                            alt="Title of the art"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="basis-4/12 text-white h-full py-10  flex flex-col pr-20">
                    <h1 className="text-3xl font-bold">Speedy Bone #2223</h1>
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
                    <p className="text-base mt-10">
                        The Runners. The most elite agency among the Tasty
                        Bones. The Speedy Bones undergo rigorous training and
                        wear enchanted speed suits that enable them to bend time
                        and make food deliveries at incredible speed. With their
                        help, the souls receive their food deliveries before
                        turning into Hungry Ghosts
                    </p>

                    <div className="mt-auto mb-0 border-t-2 border-pink-300">
                        <h1 className="text-2xl my-5">Price: $3000</h1>
                        <button className="rays w-full py-5 text-xl rounded-lg text-white ">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ArtItem
