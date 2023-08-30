'use client';

import { useEffect, useState } from 'react';

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
            <div className='h-full overflow-y-auto text-center'>
               Sidebar Content
            </div>
         </aside>
         <div className='flex flex-1 flex-col mt-16'>
            <main
               className={`overflow-y-auto bg-red-200  transition-all flex-grow`}
            >
               Main Content
            </main>
            <footer className='bg-violet-400 p-2 text-center'>
               This is footer....
            </footer>
         </div>
      </div>
   );
}
