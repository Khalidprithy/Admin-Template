'use client';

import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css'; // Import the scrollbar styles

export default function MainLayout() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 768) {
            setIsSidebarOpen(false);
         } else {
            setIsSidebarOpen(true);
         }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className='flex h-screen'>
         <header className='h-16 bg-green-200 fixed top-0 left-0 right-0 flex items-center justify-between p-2'>
            <button
               className='ml-2 bg-blue-500 text-white p-2 rounded'
               onClick={toggleSidebar}
            >
               {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
            <button className='btn btn-success'>Profile</button>
         </header>
         <aside
            className={`mt-16 bg-gray-400 ${
               isSidebarOpen ? 'w-40' : 'w-0'
            } transition-all`}
            style={{ top: '64px', height: `calc(100vh - 64px)` }}
         >
            <PerfectScrollbar>
               <div className='h-full text-center'>
                  Sidebar Content
                  <div className='p-2'>
                     <ul>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                     </ul>
                  </div>
               </div>
            </PerfectScrollbar>
         </aside>
         <div className='flex flex-1 flex-col mt-16'>
            <PerfectScrollbar>
               <main
                  className={`overflow-y-auto bg-red-200  transition-all flex-grow`}
               >
                  Main Content
                  <div className='p-2'>
                     <ul>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                        <li className='bg-gray-300 rounded-lg p-3 mb-5'>
                           Menu
                        </li>
                     </ul>
                  </div>
               </main>
            </PerfectScrollbar>
            <footer className='bg-violet-400 p-2 text-center'>
               This is footer
            </footer>
         </div>
      </div>
   );
}
