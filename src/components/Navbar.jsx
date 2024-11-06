import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='bg-[#FFF2F3] px-28 py-5'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-[#252B42]'>skiline</h1>
            <ul className='text-[#737373] text-[16px] font-semibold flex'>
                <li className='mr-10'><a href="#">Home</a></li>
                <li className='mr-10'><a href="#">Product</a></li>
                <li className='mr-10'><a href="#">Pricing</a></li>
                <li className='mr-10'><a href="#">Contact</a></li>
            </ul>
            <div className='flex items-center gap-3'>
                <button className='text-[#96BB7C] font-bold text-[16px]'>Login</button>
                <button className='flex items-center gap-3 text-white font-bold px-5 py-3 rounded-md bg-[#96BB7C]'>Join us <FaArrowRight/></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar