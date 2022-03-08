import HeroSection from '../components/HomePage/HeroSection'
import TrendingArtist from '../components/HomePage/TrendingArtists'
import Wrapper from '../components/Wrapper'

export default function Home() {
    return (
        <Wrapper>
            <HeroSection />
            <TrendingArtist />
        </Wrapper>
    )
}
