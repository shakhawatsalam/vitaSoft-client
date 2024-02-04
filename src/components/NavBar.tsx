"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-white text-lg font-semibold'>
          VitaSoft
        </Link>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className='hidden md:flex space-x-4'>
          <Link href='/' className='text-white'>
            All User
          </Link>
          <Link href='/user/createuser' className='text-white'>
            Create User
          </Link>
          <a href='#' className='text-white'></a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-white focus:outline-none'>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-800 p-4`}>
        <a href='#' className='block text-white py-2'>
          Home
        </a>
        <a href='#' className='block text-white py-2'>
          About
        </a>
        <a href='#' className='block text-white py-2'>
          Services
        </a>
        <a href='#' className='block text-white py-2'>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
