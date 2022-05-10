import ArtItems from '../../components/ArtItems'
import Wrapper from '../../components/Wrapper'
import PriceRange from '../../components/Explore/PriceRange'
import CategoryFilter from '../../components/Explore/Category'
import SearchBar from '../../components/Explore/SearchBar'
import { connectToDb } from '../../utils/db'
import Art from '../../Models/Art'
import Artist from '../../Models/Artist'
import FilterContextProvider from '../../context/FilterContext'
import { useReducer, useState, useEffect, useContext } from 'react'
import Tag from '../../components/TagForFilter'
import Head from 'next/head'
import { ArtsContext } from '../../context/ArtsContext'

export async function getStaticProps() {
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
        revalidate: 1,
    }
}

const initalFilter = {
    priceRange: [],
    category: '',
    search: '',
}

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'priceRange':
            return {
                ...state,
                priceRange: action.payload,
            }
        case 'category':
            return {
                ...state,
                category: action.payload,
            }
        case 'search':
            return {
                ...state,
                search: action.payload,
            }
        default:
            return state
    }
}

export default function Arts({ arts: artsProps }) {
    const [arts, setArts] = useState(artsProps)
    const [filter, dispatchFilter] = useReducer(filterReducer, initalFilter)
    const { addArts } = useContext(ArtsContext)

    useEffect(() => {
        const getArts = async () => {
            const request = await fetch('/api/arts')
            if (request.ok) {
                const { data } = await request.json()
                setArts(data)
                addArts(data)
            }
        }
        getArts()
    }, [addArts])

    const handleCategory = (category) => {
        dispatchFilter({ type: 'category', payload: category })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        dispatchFilter({
            type: 'search',
            payload: e.target.value.toLowerCase(),
        })
    }

    const handlePrice = (low, high) => {
        dispatchFilter({ type: 'priceRange', payload: [low, high] })
    }

    const filterArts = () => {
        const newArtList = arts
            .filter(
                (art) =>
                    !filter.category || art.categories.includes(filter.category)
            )
            .filter((art) => art.title.toLowerCase().includes(filter.search))
            .filter(
                (art) =>
                    !filter.priceRange.length ||
                    (+art.price >= +filter.priceRange[0] &&
                        +art.price <= +filter.priceRange[1])
            )
        return newArtList
    }

    const artList = filterArts()

    return (
        <Wrapper>
            <Head>
                <title>Next Gallery | Explore Arts</title>
            </Head>
            <h1 className="text-white text-center text-3xl md:text-5xl my-10">
                Welcome to <span className="rays gradient_text">Explore</span>
            </h1>

            <div className="text-white w-full my-5 bg-red-900/0 md:h-12 flex flex-col flex-start gap-5 md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col gap-5 md:flex-row items-stretch">
                    <FilterContextProvider>
                        <CategoryFilter handleCategory={handleCategory} />
                        <PriceRange handlePrice={handlePrice} />
                    </FilterContextProvider>
                </div>

                <SearchBar handleSearch={handleSearch} />
            </div>

            <div className="flex flex-wrap gap-2">
                {filter.category && (
                    <Tag
                        name={filter.category}
                        onClick={() =>
                            dispatchFilter({ type: 'category', payload: '' })
                        }
                    />
                )}
                {filter.priceRange.length && (
                    <Tag
                        name={`$ ${filter.priceRange[0]} - ${filter.priceRange[1]}`}
                        onClick={() =>
                            dispatchFilter({ type: 'priceRange', payload: [] })
                        }
                    />
                )}
            </div>

            <div className="my-10">
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
