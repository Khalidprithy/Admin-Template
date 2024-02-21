'use client';

import { useState } from 'react';

import ProfileFormV1 from './ProfileFormV1';
import ProfileFormV2 from './ProfileFormV2';
import ProfileFormV3 from './ProfileFormV3';

export default function Page() {
   const [activeTab, setActiveTab] = useState(1);

   return (
      <div className='container mx-auto mt-5'>
         <div className='flex mb-5'>
            <button
               className={`mr-2 px-4 py-2 rounded ${
                  activeTab === 1
                     ? 'bg-blue-500 text-white'
                     : 'bg-gray-200 text-gray-700'
               }`}
               onClick={() => setActiveTab(1)}
            >
               Form 1
            </button>
            <button
               className={`mr-2 px-4 py-2 rounded ${
                  activeTab === 2
                     ? 'bg-blue-500 text-white'
                     : 'bg-gray-200 text-gray-700'
               }`}
               onClick={() => setActiveTab(2)}
            >
               Form 2
            </button>
            <button
               className={`px-4 py-2 rounded ${
                  activeTab === 3
                     ? 'bg-blue-500 text-white'
                     : 'bg-gray-200 text-gray-700'
               }`}
               onClick={() => setActiveTab(3)}
            >
               Form 3
            </button>
         </div>
         <div className='border border-gray-300 rounded p-5'>
            {activeTab === 1 && <ProfileFormV1 />}
            {activeTab === 2 && <ProfileFormV2 />}
            {activeTab === 3 && <ProfileFormV3 />}
         </div>
      </div>
   );
}
