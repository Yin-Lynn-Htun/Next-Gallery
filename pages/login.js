/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Alert from '../components/Alert'
import LoginForm from '../components/LoginForm'

const Login = () => {
    const [alert, setAlert] = useState(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(null)
        }, 5000)

        return () => {
            clearTimeout(timeout)
        }
    }, [alert])

    const handleAddAlert = (message, type) => {
        setAlert({ message, type })
    }

    return (
        <section className="w-full min-h-screen flex relative">
            <div className="flex flex-col fixed top-10 right-10 gap-3 ">
                {alert && <Alert message={alert.message} />}
            </div>
            <div className="flex-1 rays relative flex justify-center items-center">
                <Image
                    src={'/static/images/signUp.svg'}
                    width={500}
                    height={500}
                    alt="abstract background"
                />
            </div>
            <div className="flex-1 p-10 text-white flex flex-col justify-center items-center ">
                <h1 className="text-4xl py-2 font-bold mb-5 rays gradient_text w-[500px]">
                    Welcome back!
                </h1>

                <LoginForm handleAddAlert={handleAddAlert} />
            </div>
        </section>
    )
}

export default Login
