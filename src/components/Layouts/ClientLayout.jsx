import { useEffect, useState } from 'react';
import MainFooter from './MainFooter';
import Navbar from './Navbar';

export default function ClientLayout({ children }) {
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
      <div className='flex flex-col min-h-screen'>
         <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
         <main className='flex-grow mt-16'>{children}</main>
         <MainFooter />
      </div>
   );
}
