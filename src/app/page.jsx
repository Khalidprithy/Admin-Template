'use client';

import HomeLayout from '@/components/Layouts/HomeLayout';
import LandingPage from '@/components/Pages/LandingPage';

export default function Home() {
   return (
      <main className=''>
         <HomeLayout>
            <LandingPage />
         </HomeLayout>
      </main>
   );
}
