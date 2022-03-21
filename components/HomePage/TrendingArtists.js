import AristsItem from '../AristsItem'
import { dummy_artists } from '../../dummy_data'
import Link from 'next/link'

const TrendingArtist = () => {
    return (
        <section className="my-20">
            <h1 className="text-white text-5xl font-bold text-center">
                Trending Artists
            </h1>
            <div className="flex flex-wrap justify-between gap-7 mt-10">
                {dummy_artists.map((artist) => (
                    <AristsItem key={artist.id} {...artist} />
                ))}
            </div>
        </section>
    )
}

export default TrendingArtist
