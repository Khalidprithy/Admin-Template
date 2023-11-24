import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsCalendar2DayFill } from 'react-icons/bs';
import { FaCrown, FaUsers } from 'react-icons/fa';
import { FaCcStripe } from 'react-icons/fa6';
import { FiMonitor } from 'react-icons/fi';
import { HiMiniCog6Tooth } from 'react-icons/hi2';
import { MdDashboard } from 'react-icons/md';
import { PiNewspaperClipping } from 'react-icons/pi';
import { RiStarHalfLine } from 'react-icons/ri';

export default function SideBar() {
   const pathname = usePathname();
   const [currentMenu, setCurrentMenu] = useState('');

   const toggleMenu = value => {
      setCurrentMenu(oldValue => {
         return oldValue === value ? '' : value;
      });
   };

   useEffect(() => {
      if (pathname.includes('popular')) {
         setCurrentMenu('popular');
      } else {
         setCurrentMenu('');
      }
   }, [pathname]);

   return (
      <div className='h-full text-center'>
         <div className='px-2 py-5'>
            <ul>
               <Link href='/admin/dashboard'>
                  <li
                     className={`rounded px-5 py-2 font-medium ${
                        pathname.includes('admin/dashboard')
                           ? 'text-secondary'
                           : 'text-[#7987a1]'
                     } hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center`}
                  >
                     <MdDashboard className='text-xl mr-3' />
                     <span>Dashboard</span>
                  </li>
               </Link>
               <Link href='/'>
                  <li className='text-[#7987a1] rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center'>
                     <FiMonitor className='text-xl mr-3' />
                     <span>Manage App</span>
                  </li>
               </Link>
               <Link href='/admin/fixtures'>
                  <li className='text-[#7987a1] rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center'>
                     <BsCalendar2DayFill className='text-xl mr-3' />
                     <span>Content</span>
                  </li>
               </Link>
               <Link href='/admin/popular/leagues'>
                  <li
                     className={`${
                        pathname.includes('admin/popular/leagues')
                           ? 'text-secondary'
                           : 'text-[#7987a1]'
                     } rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center`}
                  >
                     <RiStarHalfLine className='text-xl mr-3' />
                     <span>Favorite</span>
                  </li>
               </Link>
               <Link href='/'>
                  <li className='text-[#7987a1] rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center'>
                     <FaUsers className='text-xl mr-3' />
                     <span>Users</span>
                  </li>
               </Link>
               <Link href='/'>
                  <li className='text-[#7987a1] rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center'>
                     <PiNewspaperClipping className='text-2xl mr-3' />
                     <span>News</span>
                  </li>
               </Link>
               <Link href='/'>
                  <li className='text-[#7987a1] rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center'>
                     <FaCrown className='text-xl mr-3' />
                     <span>Subscriptions</span>
                  </li>
               </Link>
               <Link href='/'>
                  <li className='text-[#7987a1] rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center'>
                     <FaCcStripe className='text-2xl mr-3' />
                     <span>Payment</span>
                  </li>
               </Link>
               <Link href='/admin/settings'>
                  <li className='text-[#7987a1] rounded px-5 py-2 font-medium hover:text-secondary transition-all ease-linear duration-300 text-start mb-1 flex items-center'>
                     <HiMiniCog6Tooth className='text-2xl mr-3' />
                     <span>Settings</span>
                  </li>
               </Link>
            </ul>
         </div>
      </div>
   );
}
