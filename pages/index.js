import TodayPick from '../components/HomePage/TodayPick'
import HeroSection from '../components/HomePage/HeroSection'
import TrendingArtist from '../components/HomePage/TrendingArtists'
import Wrapper from '../components/Wrapper'
import Features from '../components/HomePage/Features'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <Wrapper>
            <HeroSection />
            <Features />
            <TrendingArtist />
            <TodayPick />
            <Footer />
        </Wrapper>
    )
}
