import { useState } from 'react';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';

export default function SideBar() {
   const [isGenreOpen, setIsGenreOpen] = useState(false);

   const toggleGenre = () => {
      setIsGenreOpen(prevState => !prevState);
   };

   return (
      <div className='h-full text-center'>
         <div className='p-2'>
            <ul>
               <li className='bg-gray-300 rounded p-2 font-medium hover:bg-blue-400 mb-3'>
                  Dashboard
               </li>
               <li
                  className={`bg-gray-300 rounded p-2 font-medium hover:bg-blue-400 mb-3 ${
                     isGenreOpen ? 'active' : ''
                  }`}
                  onClick={toggleGenre}
               >
                  <div className='flex items-center justify-center gap-2'>
                     <span>Genre</span>
                     {isGenreOpen ? <BsChevronDown /> : <BsChevronRight />}
                  </div>
                  {isGenreOpen && (
                     <ul className='pl-2 pt-3'>
                        <li className='bg-green-400 rounded p-2 font-medium hover:bg-green-500 mb-3'>
                           Option 1
                        </li>
                        <li className='bg-green-400 rounded p-2 font-medium hover:bg-green-500 mb-3'>
                           Option 2
                        </li>
                        <li className='bg-green-400 rounded p-2 font-medium hover:bg-green-500 mb-3'>
                           Option 3
                        </li>
                     </ul>
                  )}
               </li>
               <li
                  className={`bg-gray-300 rounded p-2 font-medium hover:bg-blue-400 mb-3 ${
                     isGenreOpen ? 'active' : ''
                  }`}
               >
                  Country
               </li>
               <li className='bg-gray-300 rounded p-2 font-medium hover:bg-blue-400 mb-3'>
                  Movies
               </li>
               <li className='bg-gray-300 rounded p-2 font-medium hover:bg-blue-400 mb-3'>
                  Trending
               </li>
            </ul>
         </div>
      </div>
   );
}
