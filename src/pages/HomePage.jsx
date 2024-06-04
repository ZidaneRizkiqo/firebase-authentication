import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-lg rounded-lg font-[sans-serif] overflow-hidden mx-auto my-20 mt-36 '>
            <div className="font-sans text-gray-900 px-4 my-6">

                <h1 className="text-2xl font-bold mt-4">
                    Firebase Authentication
                </h1>
                <ol className=" list-decimal my-4 ml-5">
                    <li>Email password authentication (Register/Login)</li>
                    <li>Google Sign in</li>
                    <li>Forgot Password</li>
                    <li>Custom Reset password page</li>
                    <li>Protected routes</li>
                    <li>
                        <code className="bg-gray-200 p-1 rounded text-sm"> Redirect TO</code> or Back (keeping the state)
                    </li>
                    <li>
                        custom Auth Hook <code className="bg-gray-200 p-1 rounded text-sm">useAuth()</code>
                    </li>
                    <li>Loading indicators while sign-in/up</li>

                </ol>
                <h2 className="text-md font-semibold mt-8">
                    Some other links (only for reference):
                </h2>
                <ul className="list-disc ml-5">
                    <li>
                        <Link to="/reset-password" className="text-blue-500 hover:underline">reset page</Link>
                    </li>
                    <li>
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">forgot page</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage