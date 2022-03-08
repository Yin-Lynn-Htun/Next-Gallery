import ArtItems from '../../components/ArtItems'
import { dummy_arts } from '../../dummy_data'

export async function getStaticProps() {
    return {
        props: {
            arts: dummy_arts,
        },
    }
}

export default function Home({ arts }) {
    return (
        <div className="mx-auto max-w-[1400px] px-5">
            <h1 className="text-white text-center text-5xl mt-10">Explore</h1>
            <div className="mt-10 flex justify-center items-center">
                <ArtItems arts={arts} />
            </div>
        </div>
    )
}
