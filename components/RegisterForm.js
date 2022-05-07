import Input from './Input'
import PrimaryButton from './PrimaryButton'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { GiFastNoodles } from 'react-icons/gi'

const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Password must contain at least one letter, one number and one special character.'
        ),
    confirm_password: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const RegisterForm = ({ handleAddAlert }) => {
    const [loading, setLoading] = useState(false)

    const onSubmit = async (values) => {
        setLoading(true)
        const respond = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        const data = await respond.json()

        setLoading(false)

        if (data.status === 'failed') {
            handleAddAlert(data.message, 'danger')
        }

        if (data.status === 'succeeded') {
            window.location.href = '/login'
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    return (
        <form className="w-[500px]" onSubmit={formik.handleSubmit}>
            <Input
                label={'Username'}
                name="username"
                id="username"
                type="text"
                placeholder="Enter your username"
                touched={formik.touched.username}
                errorMessage={formik.errors.username}
                {...formik.getFieldProps('username')}
            />

            <Input
                label={'Email'}
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                touched={formik.touched.email}
                errorMessage={formik.errors.email}
                {...formik.getFieldProps('email')}
            />

            <Input
                label={'Password'}
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                touched={formik.touched.password}
                errorMessage={formik.errors.password}
                {...formik.getFieldProps('password')}
            />

            <Input
                label={'Confirm Password'}
                name="confirm_password"
                id="confirm_password"
                placeholder="Enter your password again"
                type="password"
                touched={formik.touched.confirm_password}
                errorMessage={formik.errors.confirm_password}
                {...formik.getFieldProps('confirm_password')}
            />

            <PrimaryButton disable={loading}>
                {loading ? 'Loading' : 'Sign Up'}
            </PrimaryButton>

            <p className="text-lg mt-10 border-t-2 border-gray-300 pt-2">
                Already have an account?
                <span className="cursor-pointer ml-5 py-2 rays gradient_text text-xl">
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </span>
            </p>
        </form>
    )
}

export default RegisterForm
