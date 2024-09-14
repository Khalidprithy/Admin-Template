'use client';

import { useFieldArray, useForm } from 'react-hook-form';

export default function ProfileFormV2({ setProfileData }) {
   const {
      register,
      handleSubmit,
      control,
      formState: { errors }
   } = useForm({
      defaultValues: {
         name: '',
         phoneNumber: '',
         email: '',
         age: null,
         addresses: [{ street: '', city: '', postalCode: '', phoneNumbers: [''] }]
      }
   });

   const { fields: addressFields, append: appendAddress, remove: removeAddress } = useFieldArray({
      control,
      name: 'addresses'
   });

   const onSubmit = data => {
      console.log(data);
      setProfileData(data);
   };

   return (
      <div className='card p-5 text-black'>
         <p>This form is made with react-hook-form with default validation</p>
         <h4 className='text-xl font-medium p-2'>User information</h4>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4 border border-gray-300 rounded-md p-5'
         >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='name'>
                     Name
                  </label>
                  <input
                     type='text'
                     id='name'
                     {...register('name', { required: true })}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors.name && (
                     <span className='text-red-500'>Name is required</span>
                  )}
               </div>
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='phone'>
                     Phone Number
                  </label>
                  <input
                     type='tel'
                     id='phone'
                     {...register('phoneNumber', { required: true })}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors.phoneNumber && (
                     <span className='text-red-500'>
                        Phone number is required
                     </span>
                  )}
               </div>
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='email'>
                     Email
                  </label>
                  <input
                     type='email'
                     id='email'
                     {...register('email', { required: true })}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors.email && (
                     <span className='text-red-500'>Email is required</span>
                  )}
               </div>
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='age'>
                     Age
                  </label>
                  <input
                     type='number'
                     id='age'
                     {...register('age', {
                        required: true,
                        pattern: /^(0|[1-9]\d*)$/,
                        message: 'Age must be a positive number'
                     })}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors.age && (
                     <span className='text-red-500'>Age is required</span>
                  )}
               </div>
            </div>

            {/* Address fields */}
            {addressFields.map((address, addressIndex) => (
               <div
                  key={address.id}
                  className='space-y-2 border border-gray-400 rounded-md p-2 mt-3'
               >
                  <div className='flex items-center justify-between'>
                     <h4 className='text-lg font-semibold text-green-500'>
                        Address No {addressIndex + 1}
                     </h4>
                     {addressIndex !== 0 && (
                        <button
                           type='button'
                           onClick={() => removeAddress(addressIndex)}
                           className='btn btn-outline btn-error rounded-md btn-sm'
                        >
                           Remove Address
                        </button>
                     )}
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                     <div className='form-control'>
                        <label
                           className='label text-gray-700'
                           htmlFor={`addresses[${addressIndex}].street`}
                        >
                           Street Address
                        </label>
                        <input
                           type='text'
                           id={`addresses[${addressIndex}].street`}
                           {...register(`addresses[${addressIndex}].street`, {
                              required: true
                           })}
                           className='input input-bordered w-full bg-white'
                        />
                        {errors.addresses &&
                           errors.addresses[addressIndex] &&
                           errors.addresses[addressIndex].street && (
                              <span className='text-red-500'>
                                 Street Address is required
                              </span>
                           )}
                     </div>

                     <div className='form-control'>
                        <label
                           className='label text-gray-700'
                           htmlFor={`addresses[${addressIndex}].city`}
                        >
                           City
                        </label>
                        <input
                           type='text'
                           id={`addresses[${addressIndex}].city`}
                           {...register(`addresses[${addressIndex}].city`, {
                              required: true
                           })}
                           className='input input-bordered w-full bg-white'
                        />
                        {errors.addresses &&
                           errors.addresses[addressIndex] &&
                           errors.addresses[addressIndex].city && (
                              <span className='text-red-500'>
                                 City is required
                              </span>
                           )}
                     </div>

                     <div className='form-control'>
                        <label
                           className='label text-gray-700'
                           htmlFor={`addresses[${addressIndex}].postalCode`}
                        >
                           Postal Code
                        </label>
                        <input
                           type='text'
                           id={`addresses[${addressIndex}].postalCode`}
                           {...register(`addresses[${addressIndex}].postalCode`, {
                              required: true
                           })}
                           className='input input-bordered w-full bg-white'
                        />
                        {errors.addresses &&
                           errors.addresses[addressIndex] &&
                           errors.addresses[addressIndex].postalCode && (
                              <span className='text-red-500'>
                                 Postal Code is required
                              </span>
                           )}
                     </div>
                  </div>

                  {/* Phone Numbers Field Array */}
                  <div className='mt-4'>
                     <h5 className='text-md font-semibold text-blue-500'>
                        Phone Numbers
                     </h5>
                     <PhoneNumbersFieldArray
                        control={control}
                        addressIndex={addressIndex}
                        register={register}
                        errors={errors}
                     />
                  </div>
               </div>
            ))}

            {/* Button to add more addresses */}
            <button
               type='button'
               onClick={() => appendAddress({ street: '', city: '', postalCode: '', phoneNumbers: [''] })}
               className='btn btn-outline btn-accent rounded-md btn-sm'
            >
               Add Address
            </button>

            <div className='flex items-center justify-end'>
               <button type='submit' className='btn btn-sm rounded btn-primary'>
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
}

function PhoneNumbersFieldArray({ control, addressIndex, register, errors }) {
   const { fields: phoneFields, append: appendPhone, remove: removePhone } = useFieldArray({
      control,
      name: `addresses[${addressIndex}].phoneNumbers`
   });

   return (
      <>
         {phoneFields.map((phone, phoneIndex) => (
            <div key={phone.id} className='flex items-center gap-3 mb-2'>
               <input
                  type='tel'
                  {...register(`addresses[${addressIndex}].phoneNumbers[${phoneIndex}]`, {
                     required: true
                  })}
                  className='input input-bordered w-full bg-white'
                  placeholder={`Phone Number ${phoneIndex + 1}`}
               />
               {phoneIndex !== 0 && (
                  <button
                     type='button'
                     onClick={() => removePhone(phoneIndex)}
                     className='btn btn-outline btn-error rounded-md btn-sm'
                  >
                     Remove
                  </button>
               )}
               {errors.addresses &&
                  errors.addresses[addressIndex] &&
                  errors.addresses[addressIndex].phoneNumbers &&
                  errors.addresses[addressIndex].phoneNumbers[phoneIndex] && (
                     <span className='text-red-500'>
                        Phone number is required
                     </span>
                  )}
            </div>
         ))}

         <button
            type='button'
            onClick={() => appendPhone('')}
            className='btn btn-outline btn-info rounded-md btn-sm'
         >
            Add Phone Number
         </button>
      </>
   );
}
