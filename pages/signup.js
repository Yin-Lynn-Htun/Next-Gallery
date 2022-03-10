import Image from 'next/image'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'

const Signup = () => {
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
                    Sign Up
                </h1>

                <form className="w-[500px]" action="">
                    <Input
                        label={'Full Name'}
                        name="full_name"
                        id="full_name"
                        type="text"
                    />

                    <Input
                        label={'Email'}
                        name="email"
                        id="email"
                        type="email"
                    />

                    <Input
                        label={'Password'}
                        name="password"
                        id="password"
                        type="password"
                    />

                    <Input
                        label={'Confirm Password'}
                        name="confirm_password"
                        id="confirm_password"
                        type="password"
                    />

                    <PrimaryButton>Sign Up</PrimaryButton>

                    <p className="text-lg mt-10 border-t-2 border-gray-300 pt-2">
                        Already have an account?
                        <span className="cursor-pointer ml-5 py-2 rays gradient_text text-xl">
                            Sign In
                        </span>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Signup
