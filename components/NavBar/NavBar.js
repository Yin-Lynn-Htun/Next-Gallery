import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PrimaryButton from '../PrimaryButton'

const NavBar = () => {
    const router = useRouter()

    return (
        <div className="text-white bg-blue-300/0 w-full sticky top-0 left-0 h-24 px-5 flex justify-between items-center z-10">
            <div className="flex items-center ">
                <Link href="/">
                    <a>
                        <Image
                            src={'/static/images/logo.svg'}
                            width={50}
                            height={50}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                    </a>
                </Link>
                <h1 className="ml-5 font-bold text-3xl">Next Gallery</h1>
            </div>
            <div className="font-semibold text-xl">
                <Link href={'/'} passHref>
                    <a className="mx-3"> Home</a>
                </Link>
                <Link href={'/arts'} passHref>
                    <a className="mx-3">Explore</a>
                </Link>
                <Link href={'/artists/2'} passHref>
                    <a className="mx-3">Artists</a>
                </Link>
                <Link href={'/'} passHref>
                    <a className="mx-3 mr-5">Contact Us</a>
                </Link>
                <PrimaryButton onClick={() => router.push('/signup')}>
                    SIGN UP
                </PrimaryButton>
            </div>
        </div>
    )
}

export default NavBar