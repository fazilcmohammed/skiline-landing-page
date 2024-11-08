import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-[#FFF2F3] px-10  md:px-28 py-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-[#252B42]'>skiline</h1>
        
        {/* Menu button for mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-[#252B42] text-2xl'>
            {menuOpen ? <AiOutlineClose /> : <TbMenuDeep />}
          </button>
        </div>
        
        {/* Main navigation */}
        <ul className={`text-[#737373] text-[16px] font-semibold lg:flex lg:static absolute top-16 left-0 right-0 bg-[#FFF2F3] lg:bg-transparent lg:top-auto lg:left-auto lg:right-auto lg:py-0 py-5 lg:flex-row flex-col lg:items-center transition-transform duration-300 ${menuOpen ? 'block' : 'hidden lg:block'}`}>
          <li className='lg:mr-10 lg:mt-0 mt-3'><a href="#">Home</a></li>
          <li className='lg:mr-10 lg:mt-0 mt-3'><a href="#">Product</a></li>
          <li className='lg:mr-10 lg:mt-0 mt-3'><a href="#">Pricing</a></li>
          <li className='lg:mr-10 lg:mt-0 mt-3'><a href="#">Contact</a></li>
        </ul>
        
        {/* Right-side buttons */}
        <div className='hidden lg:flex items-center gap-3'>
          <button className='text-[#96BB7C] font-bold text-[16px]'>Login</button>
          <button className='flex items-center gap-3 text-white font-bold px-5 py-3 rounded-md bg-[#96BB7C]'>Join us <FaArrowRight /></button>
        </div>
      </div>
      
      {/* Mobile buttons displayed below the menu */}
      {menuOpen && (
        <div className='flex flex-col items-center gap-3 mt-3 lg:hidden'>
          <button className='text-[#96BB7C] font-bold text-[16px]'>Login</button>
          <button className='flex items-center gap-3 text-white font-bold px-5 py-3 rounded-md bg-[#96BB7C]'>Join us <FaArrowRight /></button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
