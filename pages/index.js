import TodayPick from '../components/HomePage/TodayPick'
import HeroSection from '../components/HomePage/HeroSection'
import TrendingArtist from '../components/HomePage/TrendingArtists'
import Wrapper from '../components/Wrapper'
import Features from '../components/HomePage/Features'
import Footer from '../components/Footer'
import Artist from '../Models/Artist'
import { connectToDb } from '../utils/db'

export default function Home({ artists }) {
    return (
        <Wrapper>
            <HeroSection />
            <Features />
            <TrendingArtist artists={artists} />
            <TodayPick />
            <Footer />
        </Wrapper>
    )
}

export async function getStaticProps(context) {
    await connectToDb()
    const data = await Artist.find({}).sort({ watch: -1 }).limit(5)
    const artists = JSON.parse(JSON.stringify(data))
    return {
        props: {
            artists,
        }, // will be passed to the page component as props
    }
}
