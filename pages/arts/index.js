import ArtItems from '../../components/ArtItems'
import { dummy_arts } from '../../dummy_data'
import Wrapper from '../../components/Wrapper'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import PriceRange from '../../components/Explore/PriceRange'

export async function getStaticProps() {
    return {
        props: {
            arts: dummy_arts,
        },
    }
}

export default function Arts({ arts }) {
    return (
        <Wrapper>
            <h1 className="text-white text-center text-5xl mt-10">
                Welcome to <span className="rays gradient_text">Explore</span>
            </h1>

            <div className="text-white w-full my-5 bg-red-900/0 h-12 flex justify-between items-center">
                <div className="flex items-stretch  ">
                    <select
                        name="category"
                        id="category"
                        className="bg-button-blue rounded-md px-3"
                    >
                        <option
                            className="my-10 px-3 text-xl"
                            value="character"
                        >
                            Character
                        </option>
                        <option value="animation">Animation</option>
                        <option value="animation">Animation</option>
                        <option value="animation">Animation</option>
                        <option value="animation">Animation</option>
                        <option value="animation">Animation</option>
                        <option value="animation">Animation</option>
                    </select>

                    <PriceRange />
                </div>

                <div className="flex w-72 gap-2 bg-white text-black px-3 items-center rounded-md">
                    <BiSearchAlt className="w-7 h-7" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent w-full outline-none p-2"
                    />
                </div>
            </div>

            <div className="mt-20">
                <ArtItems arts={arts} />
            </div>
        </Wrapper>
    )
}
