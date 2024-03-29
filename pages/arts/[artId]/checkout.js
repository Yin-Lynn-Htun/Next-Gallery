import Image from 'next/image'
import Art from '../../../Models/Art'
import Artist from '../../../Models/Artist'
import { connectToDb } from '../../../utils/db'
import { countries } from '../../../dummy_data'
import { useState } from 'react'
import { getSession } from 'next-auth/react'
import Head from 'next/head'

const ArtItem = ({ art: { imgUrl, price, title } }) => {
    const [numbers, setNumbers] = useState('')
    const [monthAndYear, setMonthAndYear] = useState('')
    const [cvc, setCvc] = useState('')
    const [country, setCountry] = useState('United States')
    const [zip, setZip] = useState('')

    const handleChangeNumbers = (e) => {
        const enteredChar = e.nativeEvent.data
        if (isNaN(enteredChar)) return

        if (e.target.value.length <= 3) {
            setNumbers(e.target.value)
            return
        }
        let temp = e.target.value.replaceAll(' ', '')
        if (temp.length > 16) return
        temp = temp.match(/.{1,4}/g)
        setNumbers(temp.join(' '))
    }

    const handleChangeMonthAndYear = (e) => {
        const enteredChar = e.nativeEvent.data
        if (isNaN(enteredChar)) return

        let value = e.target.value

        if (value.length > 7) return
        if (value.length === 2 && monthAndYear.length < 2) {
            value += ' / '
        }
        setMonthAndYear(value)
    }

    const handleChangeCVC = (e) => {
        const enteredChar = e.nativeEvent.data
        if (isNaN(enteredChar)) return

        if (e.target.value.length > 4) return
        setCvc(e.target.value)
    }

    const handleChangeZip = (e) => {
        const enteredChar = e.nativeEvent.data
        if (isNaN(enteredChar)) return

        if (e.target.value.length > 5) return
        setZip(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        alert(
            'Thanks for your order. Buying an art with real payment is in progress. Stay tuned!'
        )
    }

    return (
        <div className="flex-1 flex">
            <Head>
                <title>{title} | Checkout</title>
            </Head>
            <div className="relative mx-auto max-w-[1900px] py-10 px-16 flex-1 flex">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                    <Image
                        src={imgUrl}
                        alt="Title of the art"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="basis-4/12 text-white py-10 flex flex-col pr-20 screen_with_nav  relative ">
                <h1 className="text-2xl font-bold w-max mx-auto">
                    Pay with Card
                </h1>
                <form onSubmit={handleSubmitForm}>
                    <div className="flex flex-col my-4">
                        <label className="my-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="rounded-md py-2 px-4 text-black focus:outline-0"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="card">Card Information</label>
                        <div className="grid grid-cols-2 grid-rows-2 rounded-md overflow-hidden">
                            <input
                                className="border-b-2 col-span-2 row-span-1 py-2 px-4 text-black focus:outline-0"
                                type="text"
                                placeholder="1234 1234 1234 1234"
                                value={numbers}
                                onChange={handleChangeNumbers}
                            />
                            <input
                                className="border-r-2 col-span-1 row-span-1 py-2 px-4 text-black focus:outline-0"
                                type="text"
                                placeholder="MM / YY"
                                onChange={handleChangeMonthAndYear}
                                value={monthAndYear}
                            />
                            <input
                                className=" col-span-1 row-span-1 py-2 px-4 text-black focus:outline-0"
                                type="text"
                                placeholder="CVC"
                                onChange={handleChangeCVC}
                                value={cvc}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="name">Name on Card</label>
                        <input
                            className="rounded-md py-2 px-4 text-black focus:outline-0"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="country">Country or Region</label>
                        <select
                            className="rounded-md my-2 py-2 px-4 text-black focus:outline-0"
                            name="country"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            {countries.map((country) => (
                                <option
                                    className="py-5"
                                    key={country.code}
                                    value={country.code}
                                >
                                    {country.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className="rounded-md py-2 px-4 text-black focus:outline-0"
                            type="text"
                            placeholder="ZIP"
                            onChange={handleChangeZip}
                            value={zip}
                        />
                    </div>

                    <button className="w-full bg-text-pink py-3 rounded-lg text-xl">
                        Pay ${price}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ArtItem

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login',
            },
        }
    }

    await connectToDb()
    const { artId } = context.query
    const data = await Art.findById(artId).populate('artist', 'username imgUrl')
    const art = JSON.parse(JSON.stringify(data))

    return {
        props: {
            // _id , title , description , price , love , watch, imgUrl, artist { _id , username , imgUrl }, categories
            art: art,
            session: await getSession(context),
        }, // will be passed to the page component as props
    }
}
