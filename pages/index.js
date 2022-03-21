import { TodayPick } from './TodayPick'
import HeroSection from '../components/HomePage/HeroSection'
import TrendingArtist from '../components/HomePage/TrendingArtists'
import Wrapper from '../components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <Wrapper>
            <HeroSection />
            <TodayPick />
            <TrendingArtist />
        </Wrapper>
    )
}
