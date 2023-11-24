'use client';

import { usePathname } from 'next/navigation';
import AdminLayout from './AdminLayout';
import BlankLayout from './BlankLayout';
import ClientLayout from './ClientLayout';

export default function MainLayout({ children }) {
   const pathname = usePathname();
   console.log(pathname);

   const isLoginOrRegister = ['/login', '/register', '/admin/login'].includes(
      pathname
   );
   const isAdminRoute = pathname.startsWith('/admin');

   if (isLoginOrRegister) {
      return <BlankLayout>{children}</BlankLayout>;
   }

   if (isAdminRoute) {
      return <AdminLayout>{children}</AdminLayout>;
   }

   return <ClientLayout>{children}</ClientLayout>;
}
