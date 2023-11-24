'use client';

import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import AdminFooter from './AdminFooter';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function AdminLayout({ children }) {
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
         {/* TopBar / Top bar */}
         <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
         {/* Sidebar */}
         <aside
            className={`mt-16 bg-gray-200 ${
               isSidebarOpen ? 'w-52' : 'w-0'
            } transition-all`}
            style={{ top: '64px', height: `calc(100vh - 64px)` }}
         >
            <PerfectScrollbar>
               <SideBar />
            </PerfectScrollbar>
         </aside>
         {/* Main content */}
         <div className='flex flex-1 flex-col mt-16 bg-white'>
            <PerfectScrollbar>
               <main className={`overflow-y-auto transition-all flex-grow`}>
                  {children}
               </main>
            </PerfectScrollbar>

            {/* Footer */}
            <AdminFooter />
         </div>
      </div>
   );
}
