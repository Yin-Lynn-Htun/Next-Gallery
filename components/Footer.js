import React from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="text-white mt-20 my-10 w-full">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 ">
                <div className="flex flex-col gap-5">
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
                        <h1 className="ml-5 font-bold text-3xl">
                            Next Gallery
                        </h1>
                    </div>
                    <p>
                        We offers a beautiful selection of paintings, drawings,
                        design, and photography in various price ranges from
                        around the world. Enjoy the art.
                    </p>
                    {/* <div className="flex gap-5 my-3">
                        <Link href="/">
                            <a>
                                <div className="w-10 h-10 bg-form-gray rounded-full grid place-items-center">
                                    <Image
                                        src={
                                            '/static/images/footer/FacebookLogo.svg'
                                        }
                                        width={30}
                                        height={30}
                                        alt="Logo"
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <div className="w-10 h-10 bg-form-gray rounded-full grid place-items-center">
                                    <Image
                                        src={
                                            '/static/images/footer/LinkedInLogo.svg'
                                        }
                                        width={30}
                                        height={30}
                                        alt="Logo"
                                    />
                                </div>
                            </a>
                        </Link>
                    </div> */}
                </div>

                <div className="list-none flex flex-col gap-2 justify-self-center text-lg text-yellow-300 ">
                    <li>
                        <Link href="/">
                            <a> Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/arts">
                            <a> Arts</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/artists">
                            <a> Artists</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup">
                            <a> Sign Up</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a> Login</a>
                        </Link>
                    </li>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="grid grid-rows-2 grid-cols-[repeat(2,max-content)] gap-x-5">
                        <div className="bg-form-gray row-span-2 w-10 h-10 rounded-full grid place-items-center">
                            <Image
                                src="/static/images/footer/Phone.svg"
                                width={20}
                                height={20}
                                alt="Phone"
                            />
                        </div>
                        <p className="text-sm">Phone Number</p>
                        <h4 className="text-lg">+959429047557</h4>
                    </div>

                    <div className="grid grid-rows-2 grid-cols-[repeat(2,max-content)] gap-x-5">
                        <div className="bg-form-gray row-span-2 w-10 h-10 rounded-full grid place-items-center">
                            <Image
                                src="/static/images/footer/EnvelopeSimple.svg"
                                width={20}
                                height={20}
                                alt="Email"
                            />
                        </div>
                        <p className="text-sm">Email</p>
                        <h4 className="text-lg">yinlynnhtun@gmail.com</h4>
                    </div>

                    <div className="grid grid-rows-2 grid-cols-[repeat(2,max-content)] gap-x-5">
                        <div className="bg-form-gray row-span-2 w-10 h-10 rounded-full grid place-items-center">
                            <Image
                                src="/static/images/footer/MapPin.svg"
                                width={20}
                                height={20}
                                alt="address"
                            />
                        </div>
                        <p className="text-sm">Address</p>
                        <h4 className="text-lg">Yangon, Myanmar</h4>
                    </div>
                </div>
            </div>

            <p className="text-center mt-10 text-lg">
                Developed by{' '}
                <span className="text-blue-300"> Yin Lynn Htun </span>. &copy;
                Copyright 2022-2023, All Right Reserved
            </p>
        </footer>
    )
}

export default Footer
