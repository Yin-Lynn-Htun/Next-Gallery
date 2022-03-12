import NavBar from '../components/NavBar/NavBar'
import Wrapper from '../components/Wrapper'
import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const showNav =
        router.pathname !== '/signup' && router.pathname !== '/login'

    return (
        <section className="flex flex-col min-h-screen">
            {showNav && <NavBar />}
            <Component {...pageProps} />
        </section>
    )
}

export default MyApp
