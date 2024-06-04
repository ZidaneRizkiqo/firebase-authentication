import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
    const navigate = useNavigate()
    const { currentUser, logout } = useAuth()
    const logoutHandler  = ()=>{
        logout();
        navigate("/login")
    }
    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] h-[70px] tracking-wide z-50 fixed w-full top-0 '>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKqPA6UUZvRuaWAuiy1IcVUUU6EHkjWx8Zg&s" alt="logo" className='w-36' />
                </Link>
                <div className='flex max-lg:ml-auto space-x-3'>
                    {currentUser ?
                        <>
                            <p>{currentUser.email}</p>
                            <button onClick={logoutHandler}
                                className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Logout
                            </button>
                        </>
                        :
                        <>
                            <Link to="/login"
                                className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Login
                            </Link>
                            <Link to="/register"
                                className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Register
                            </Link>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header