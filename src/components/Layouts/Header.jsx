import { useEffect, useRef, useState } from 'react';
import { RiMenuFoldFill, RiMenuUnfoldFill, RiUserFill } from 'react-icons/ri';

export default function Header({ toggleSidebar, isSidebarOpen }) {
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
      <header className='h-16 bg-violet-400 fixed top-0 left-0 right-0 flex items-center justify-between p-2 z-10'>
         <div className='flex items-center gap-2'>
            <button
               className='ml-2 bg-gray-100 shadow text-white p-2 rounded'
               onClick={toggleSidebar}
            >
               {isSidebarOpen ? (
                  <RiMenuFoldFill className='text-2xl text-gray-800' />
               ) : (
                  <RiMenuUnfoldFill className='text-2xl text-gray-800' />
               )}
            </button>
            <h4 className='text-lg font-semibold'>App Title</h4>
         </div>
         <div className='relative' ref={dropdownRef}>
            <button
               className='bg-gray-100 shadow text-gray-800 p-2 rounded'
               onClick={toggleDropdown}
            >
               <RiUserFill className='text-2xl' />
            </button>
            {isDropdownOpen && (
               <div className='absolute top-14 right-0 bg-violet-500 border rounded shadow z-20 p-2'>
                  <ul className='flex flex-col items-center gap-2'>
                     <li className='btn btn-info btn-sm w-full rounded'>
                        Profile
                     </li>
                     <li className='btn btn-info btn-sm w-full rounded'>
                        Settings
                     </li>
                     <li
                        onClick={handleLogout}
                        className='btn btn-error btn-sm w-full rounded'
                     >
                        Logout
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </header>
   );
}
