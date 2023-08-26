'use client';

import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

export default function MainLayout({ children }) {
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
         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
         <aside
            className={`mt-16 bg-gray-700 ${
               isSidebarOpen ? 'w-40' : 'w-0'
            } transition-all`}
            style={{ top: '64px', height: `calc(100vh - 64px)` }}
         >
            <PerfectScrollbar>
               <SideBar />
            </PerfectScrollbar>
         </aside>
         <div className='flex flex-1 flex-col mt-16 '>
            <PerfectScrollbar>
               <main className={`overflow-y-auto transition-all flex-grow`}>
                  {children}
               </main>
            </PerfectScrollbar>
            <Footer />
         </div>
      </div>
   );
}
