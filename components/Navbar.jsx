import React from 'react'
import assets from '../src/assets/frontend_assets/logo.png'
import { NavLink } from 'react-router-dom'
import search_icon from '../src/assets/frontend_assets/search_icon.png'
import profile_icon from '../src/assets/frontend_assets/profile_icon.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets} className='w-36' alt="" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={search_icon} className='w-5 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img src={profile_icon} className='w-5 cursor-pointer' alt="" />

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>

                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar