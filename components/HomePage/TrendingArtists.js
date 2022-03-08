import AristsItem from '../AristsItem'
import { dummy_artists } from '../../dummy_data'

const TrendingArtist = () => {
    return (
        <section className="my-10">
            <h1 className="text-white text-3xl font-bold text-center">
                Trending Artists
            </h1>
            <div className="flex flex-wrap justify-between gap-7">
                {dummy_artists.map((artist) => (
                    <AristsItem key={artist.id} {...artist} />
                ))}
            </div>
        </section>
    )
}

export default TrendingArtist
