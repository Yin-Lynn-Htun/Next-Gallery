import NavBar from '../components/NavBar/NavBar'
import Wrapper from '../components/Wrapper'
import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const showNav = router.pathname !== '/signup'

    return (
        <>
            {showNav && (
                <Wrapper>
                    <NavBar />
                </Wrapper>
            )}
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
