import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { RiUserFill } from 'react-icons/ri';

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);

   const toggleDropdown = () => {
      setIsDropdownOpen(prevState => !prevState);
   };

   const handleLogout = () => {
      // Implement your logout logic here
   };

   const handleOutsideClick = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
         setIsDropdownOpen(false);
      }
   };

   useEffect(() => {
      window.addEventListener('mousedown', handleOutsideClick);
      return () => {
         window.removeEventListener('mousedown', handleOutsideClick);
      };
   }, []);

   return (
      <header className='h-16 bg-violet-400 fixed top-0 left-0 right-0 flex items-center justify-between z-10'>
         <div className='navbar bg-base-100'>
            <div className='navbar-start'>
               <div className='dropdown'>
                  <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           d='M4 6h16M4 12h8m-8 6h16'
                        />
                     </svg>
                  </label>
                  <ul
                     tabIndex={0}
                     className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                  >
                     <Link href='/home'>Home</Link>
                     <Link href='/about'>About</Link>
                     <Link href='/contact'>Contact</Link>
                  </ul>
               </div>
               <a className='btn btn-ghost text-xl'>daisyUI</a>
            </div>
            <div className='navbar-center hidden lg:flex'>
               <ul className='flex items-center gap-4'>
                  <Link
                     className='font-semibold hover:text-primary'
                     href='/home'
                  >
                     Home
                  </Link>
                  <Link
                     className='font-semibold hover:text-primary'
                     href='/about'
                  >
                     About
                  </Link>
                  <Link
                     className='font-semibold hover:text-primary'
                     href='/contact'
                  >
                     Contact
                  </Link>
               </ul>
            </div>
            <div className='navbar-end'>
               <button className='bg-white shadow text-gray-800 p-2 rounded-full border border-gray-300'>
                  <RiUserFill className='text-2xl' />
               </button>
            </div>
         </div>
      </header>
   );
}
