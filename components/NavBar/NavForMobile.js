import { useSession, signIn, signOut } from 'next-auth/react'
import styles from '../../styles/NavForMobile.module.css'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

const NavForMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const { data: session } = useSession()

    const handleClickLink = (route) => {
        router.push(route)
        setIsOpen(false)
    }

    return (
        <>
            <div className="fixed right-2 top-2 z-50 bg-[#fb2f65] p-3 rounded-full">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${styles.burger} ${styles['burger-rotate']} ${
                        isOpen ? styles.open : ''
                    }`}
                >
                    <div className={`${styles['burger-lines']}`}></div>
                </div>
            </div>

            {isOpen && (
                <div className="grid place-items-center h-full fixed top-0 left-0 w-full z-40 bg-black">
                    <ul className="flex flex-col gap-10 font-bold text-2xl ">
                        <li
                            onClick={() => {
                                handleClickLink('/')
                            }}
                        >
                            <a> Home</a>
                        </li>
                        <li
                            href={'/arts'}
                            onClick={() => {
                                handleClickLink('/arts')
                            }}
                        >
                            <a>Explore</a>
                        </li>
                        <li
                            href={'/artists'}
                            onClick={() => {
                                handleClickLink('/artists')
                            }}
                        >
                            <a>Artists</a>
                        </li>
                        {!session && (
                            <PrimaryButton
                                onClick={() => handleClickLink('/login')}
                            >
                                LOGIN
                            </PrimaryButton>
                        )}
                        {session && (
                            <>
                                <li onClick={() => handleClickLink('/profile')}>
                                    <a>Profile</a>
                                </li>
                                <PrimaryButton
                                    onClick={() => handleClickLink('/arts/new')}
                                >
                                    Create Art
                                </PrimaryButton>
                                <SecondaryButton onClick={signOut}>
                                    Logout
                                </SecondaryButton>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </>
    )
}

export default NavForMobile
