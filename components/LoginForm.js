import Input from './Input'
import PrimaryButton from './PrimaryButton'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as yup from 'yup'

const LoginForm = () => {
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required('Email is required')
            .email('Please enter a valid email'),
        password: yup.string().required('Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
        validationSchema,
    })
    console.log('form data', formik.touched)
    console.log('form data', formik.errors)

    return (
        <form className="w-[500px]" onSubmit={formik.handleSubmit}>
            <Input
                label={'Email'}
                name="email"
                id="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                touched={formik.touched.email ? 1 : 0}
                errorMessage={formik.errors.email}
            />

            <Input
                label={'Password'}
                name="password"
                id="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                touched={formik.touched.password ? 1 : 0}
                errorMessage={formik.errors.password}
            />

            <PrimaryButton>Login</PrimaryButton>

            <p className="text-lg mt-10 border-t-2 border-gray-300 pt-2">
                Create a new account?
                <span className="cursor-pointer ml-5 py-2 rays gradient_text text-xl">
                    <Link href="/signup">
                        <a>Sign Up</a>
                    </Link>
                </span>
            </p>
        </form>
    )
}

export default LoginForm
