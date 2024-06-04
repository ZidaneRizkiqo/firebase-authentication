import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const DashboardPage = () => {
  const { currentUser } = useAuth()
  return (
    <div className='bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-lg rounded-lg font-[sans-serif] overflow-hidden mx-auto my-20 mt-36 '>
      <div className="font-sans text-gray-900 px-4 my-6">
        <p className="my-6"><b>Logged In User:</b> {currentUser?.email}</p>

        <h1 className="text-2xl font-bold mt-4">
          Firebase Authentication

        </h1>
        <ul className="text-sm my-4 ml-5 space-y-2">
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>Email password authentication (Register/Login)</li>
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>Google Sign in</li>
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>Forgot Password</li>
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>Custom Reset password page</li>
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>Protected routes</li>
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span><code className="bg-gray-200 p-1 rounded text-sm"> Redirect TO</code> or Back (keeping the state)</li>
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>custom Auth Hook <code className="bg-gray-200 p-1 rounded text-sm">useAuth()</code></li>
          <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>Loading indicators while sign-in/up</li>
        </ul>
        
        
      </div>
    </div>
  )
}

export default DashboardPage