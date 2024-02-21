'use client';

import { useState } from 'react';

import ProfileFormV1 from './ProfileFormV1';
import ProfileFormV2 from './ProfileFormV2';
import ProfileFormV3 from './ProfileFormV3';

export default function Page() {
   const [activeTab, setActiveTab] = useState(1);
   const [profileData, setProfileData] = useState('');

   // Function to handle tab changes and reset profileData
   const handleTabChange = tabNumber => {
      setActiveTab(tabNumber);
      setProfileData('');
   };

   return (
      <div className='container mx-auto mt-5 p-5'>
         <div className='flex mb-5'>
            <button
               className={`mr-2 px-4 py-2 rounded ${
                  activeTab === 1
                     ? 'bg-blue-500 text-white'
                     : 'bg-gray-200 text-gray-700'
               }`}
               onClick={() => handleTabChange(1)}
            >
               Form 1
            </button>
            <button
               className={`mr-2 px-4 py-2 rounded ${
                  activeTab === 2
                     ? 'bg-blue-500 text-white'
                     : 'bg-gray-200 text-gray-700'
               }`}
               onClick={() => handleTabChange(2)}
            >
               Form 2
            </button>
            <button
               className={`px-4 py-2 rounded ${
                  activeTab === 3
                     ? 'bg-blue-500 text-white'
                     : 'bg-gray-200 text-gray-700'
               }`}
               onClick={() => handleTabChange(3)}
            >
               Form 3
            </button>
         </div>
         <div className='border border-gray-300 rounded p-5'>
            {activeTab === 1 && (
               <ProfileFormV1 setProfileData={setProfileData} />
            )}
            {activeTab === 2 && (
               <ProfileFormV2 setProfileData={setProfileData} />
            )}
            {activeTab === 3 && (
               <ProfileFormV3 setProfileData={setProfileData} />
            )}
         </div>

         {profileData && (
            <div className='border border-green-400 rounded-lg p-5 text-gray-800 mt-5'>
               <div className='border border-gray-200 rounded-lg shadow p-5'>
                  <h2>Name: {profileData?.name}</h2>
                  <p>Phone Number: {profileData?.phoneNumber}</p>
                  <p>Email: {profileData?.email}</p>
                  <p>Age: {profileData?.age}</p>
               </div>
               {profileData?.addresses && (
                  <div className='border border-gray-200 rounded-md p-5 mt-3'>
                     <h3>Addresses:</h3>
                     {profileData?.addresses.map((address, index) => (
                        <div key={index}>
                           <p>Street: {address?.street}</p>
                           <p>City: {address?.city}</p>
                           <p>Postal Code: {address?.postalCode}</p>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         )}
      </div>
   );
}
