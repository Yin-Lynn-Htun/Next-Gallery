import ArtItems from '../../components/ArtItems'

export default function Home() {
    return (
        <div className="mx-auto max-w-[1400px] px-5">
            <h1 className="text-white text-center text-5xl mt-10">Explore</h1>
            <div className="mt-10 ml-32 flex justify-center items-center">
                <ArtItems />
            </div>
        </div>
    )
}
