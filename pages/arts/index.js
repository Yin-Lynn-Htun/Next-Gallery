import ArtItems from '../../components/ArtItems'
import { dummy_arts } from '../../dummy_data'
import Wrapper from '../../components/Wrapper'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import PriceRange from '../../components/Explore/PriceRange'
import CategoryFilter from '../../components/Explore/Category'
import SearchBar from '../../components/Explore/SearchBar'
import { connectToDb } from '../../utils/db'

export async function getServerSideProps() {
    const arts = dummy_arts

    const client = await connectToDb()
    const data = await client
        .db('next_gallery')
        .collection('arts')
        .find({})
        .toArray()

    const newArts = JSON.parse(JSON.stringify(data))

    return {
        props: {
            arts: arts,
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
                    <CategoryFilter />
                    <PriceRange />
                </div>

                <SearchBar />
            </div>

            <div className="mt-20">
                <ArtItems arts={arts} />
            </div>
        </Wrapper>
    )
}
