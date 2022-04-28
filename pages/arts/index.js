import ArtItems from '../../components/ArtItems'
import { dummy_arts } from '../../dummy_data'
import Wrapper from '../../components/Wrapper'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import PriceRange from '../../components/Explore/PriceRange'
import CategoryFilter from '../../components/Explore/Category'
import SearchBar from '../../components/Explore/SearchBar'
import { connectToDb } from '../../utils/db'
import Art from '../../Models/Art'
import FilterContextProvider from '../../context/FilterContext'
import { useState } from 'react'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
    // const arts = dummy_arts

    await connectToDb()
    const data = await Art.find()
        .sort({ _id: 'desc' })
        .populate('artist', 'username firstName lastName imgUrl')

    const newArts = JSON.parse(JSON.stringify(data))
    return {
        props: {
            arts: newArts,
        },
    }
}

export default function Arts({ arts }) {
    const [artList, setArtList] = useState(arts)

    const router = useRouter()
    console.log(router.query)

    const handleSearch = (e) => {
        e.preventDefault()
        const newArtList = arts.filter((art) => {
            return art.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        })
        setArtList(newArtList)
    }

    const handlePrice = (low, high) => {
        const newArtist = arts.filter((art) => {
            console.log(art.price, +low, high)
            return art.price >= +low && art.price <= +high
        })
        setArtList(newArtist)
    }

    return (
        <Wrapper>
            <h1 className="text-white text-center text-5xl mt-10">
                Welcome to <span className="rays gradient_text">Explore</span>
            </h1>

            <div className="text-white w-full my-5 bg-red-900/0 h-12 flex justify-between items-center">
                <div className="flex items-stretch">
                    <FilterContextProvider>
                        <CategoryFilter />
                        <PriceRange handlePrice={handlePrice} />
                    </FilterContextProvider>
                </div>

                <SearchBar handleSearch={handleSearch} />
            </div>

            <div className="mt-20">
                {artList.length && <ArtItems arts={artList} />}
                {!artList.length && arts.length && (
                    <p className="text-white font-bold text-2xl">
                        There is no arts for this search.
                    </p>
                )}
            </div>
        </Wrapper>
    )
}
