import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PrimaryButton from '../PrimaryButton'
import Wrapper from '../Wrapper'
import { useSession, signIn, signOut } from 'next-auth/react'
import SecondaryButton from '../SecondaryButton'
import NavForMobile from './NavForMobile'

const NavBar = () => {
    const router = useRouter()
    const { data: session } = useSession()

    return (
        <div>
            <Wrapper>
                <div className="text-white h-20  flex jusitemstify-between -center z-10">
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
                        <h1 className="hidden lg:block ml-5 font-bold text-3xl">
                            Next Gallery
                        </h1>
                    </div>
                    <div className="hidden  font-semibold text-xl lg:flex gap-7 items-center ml-auto">
                        <Link href={'/'} passHref>
                            <a> Home</a>
                        </Link>
                        <Link href={'/arts'} passHref>
                            <a>Explore</a>
                        </Link>
                        <Link href={'/artists'} passHref>
                            <a>Artists</a>
                        </Link>
                        {!session && (
                            <PrimaryButton
                                onClick={() => router.push('/login')}
                            >
                                LOGIN
                            </PrimaryButton>
                        )}
                        {session && (
                            <>
                                <Link href={'/profile'} passHref>
                                    <a>Profile</a>
                                </Link>
                                <PrimaryButton
                                    onClick={() => router.push('/arts/new')}
                                >
                                    Create Art
                                </PrimaryButton>
                                <SecondaryButton onClick={signOut}>
                                    Logout
                                </SecondaryButton>
                            </>
                        )}
                    </div>
                    <div className="ml-20">
                        <NavForMobile />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default NavBar
