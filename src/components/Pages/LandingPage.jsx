import Link from 'next/link';

export default function LandingPage() {
   return (
      <div className='p-2'>
         <div className='hero '>
            <div className='hero-content text-center'>
               <div className='max-w-md'>
                  <h1 className='text-5xl font-bold'>Hello there</h1>
                  <p className='py-6'>
                     This is a template for client and admin layout template to
                     get started with a new project
                  </p>
                  <Link href='/admin/dashboard' className='btn btn-primary'>
                     Visit Dashboard
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
