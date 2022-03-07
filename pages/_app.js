import NavBar from '../components/NavBar/NavBar'
import Wrapper from '../components/Wrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Wrapper>
                <NavBar />
                <Component {...pageProps} />
            </Wrapper>
        </>
    )
}

export default MyApp
