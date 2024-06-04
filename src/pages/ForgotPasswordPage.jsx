import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { isValidEmail, showError, showSuccess } from '../utilities/utilities'

const ForgotPasswordPage = () => {
    const { forgotPassword } = useAuth()
    const [email, setEmail] = useState("")
    const [isSubmitting ,setIsSubmitting] = useState(false)

    const handleForgetFormSubmit = async () => {
        if (!email) {
            showError('All field are required')
            return
        }
        if (!isValidEmail(email)) {
            showError("Invalid Email")
            return
        }

        // your register logic here
        setIsSubmitting(true)
        try {
            const res = await forgotPassword(email)
            console.log(res);
            showSuccess(`An email is sent to ${email} for password reset instructions.`)
        }
        catch (e) {
            showError(e.message)
        }
        finally{
            setIsSubmitting(false)
        }

    }
    console.log(email);
    return (
        <div className="bg-gray-50 font-[sans-serif] text-[#333] ">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-md w-full border py-8 px-6  border-gray-300 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                    <h2 className="text-center text-3xl font-extrabold">
                        Forgot password
                    </h2>
                    <div className="mt-10 space-y-4" >
                        <div>
                            <input name="email" type="email" autocomplete="email" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="!mt-10">
                            {isSubmitting ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 animate-spin fill-blue-600 block mx-auto"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                                        data-original="#000000" />
                                </svg>
                                :
                                <button onClick={handleForgetFormSubmit} type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                    Reset
                                </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage