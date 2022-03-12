import ArtItems from '../../components/ArtItems'
import { dummy_arts } from '../../dummy_data'
import Wrapper from '../../components/Wrapper'

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
            <h1 className="text-white text-center text-5xl mt-10">Explore</h1>
            <div className="mt-10">
                <ArtItems arts={arts} />
            </div>
        </Wrapper>
    )
}
