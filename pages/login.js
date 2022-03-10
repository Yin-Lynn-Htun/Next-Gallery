import Image from 'next/image'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return (
        <section className="w-full min-h-screen flex relative">
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
                <LoginForm />
            </div>
        </section>
    )
}

export default Login
