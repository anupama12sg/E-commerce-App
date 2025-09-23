import React from 'react'
import logo from '../src/assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={logo} className='w-36' alt="" />

        </div>
    )
}

export default Navbar
