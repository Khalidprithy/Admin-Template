export default function BlankLayout({ children }) {
   return (
      <div className='flex items-center justify-center h-screen bg-gray-100'>
         <div className='max-w-md w-full p-8 bg-white rounded-lg shadow-md'>
            {children}
         </div>
      </div>
   );
}
