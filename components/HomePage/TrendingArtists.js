import AristsItem from '../AristsItem'

const TrendingArtist = ({ artists }) => {
    return (
        <section className="my-20">
            <h1 className="text-white text-4xl lg:text-5xl font-bold text-center">
                Trending Artists
            </h1>
            <div className="flex flex-wrap justify-center md:justify-between gap-7 mt-10">
                {artists.map((artist) => (
                    <AristsItem key={artist._id} {...artist} />
                ))}
            </div>
        </section>
    )
}

export default TrendingArtist
