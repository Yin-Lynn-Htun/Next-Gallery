import { useRouter } from 'next/router'
import ArtItems from '../components/ArtItems'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'

export default function Home() {
    const router = useRouter()
    return (
        <div className="mx-auto max-w-[1400px] px-5">
            <div className="mt-52 ml-32">
                <PrimaryButton
                    onClick={() => {
                        console.log('saf')
                        router.push('/arts')
                    }}
                >
                    Explore
                </PrimaryButton>
                <SecondaryButton>Check</SecondaryButton>
                <ArtItems />
            </div>
        </div>
    )
}
