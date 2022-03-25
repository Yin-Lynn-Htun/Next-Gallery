import NavBar from '../components/NavBar/NavBar'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter()
    const showNav =
        router.pathname !== '/signup' && router.pathname !== '/login'

    return (
        <SessionProvider session={session}>
            <section className="flex flex-col min-h-screen">
                {showNav && <NavBar />}
                <Component {...pageProps} />
            </section>
        </SessionProvider>
    )
}

export default MyApp
