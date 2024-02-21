'use client';

import { useFieldArray, useForm } from 'react-hook-form';

export default function ProfileFormV1({ setProfileData }) {
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
         addresses: [{ street: '', city: '', postalCode: '' }]
      }
   });
   const { fields, append, remove } = useFieldArray({
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
            {fields.map((address, index) => (
               <div
                  key={address.id}
                  className='space-y-2 border border-gray-400 rounded-md p-2 mt-3'
               >
                  <div className='flex items-center justify-between'>
                     <h4 className='text-lg font-semibold text-green-500'>
                        Address No {index + 1}
                     </h4>
                     {index !== 0 && (
                        <button
                           type='button'
                           onClick={() => remove(index)}
                           className='btn btn-outline btn-error rounded-md btn-sm'
                        >
                           Remove
                        </button>
                     )}
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                     <div className='form-control'>
                        <label
                           className='label text-gray-700'
                           htmlFor={`addresses[${index}].street`}
                        >
                           Street Address
                        </label>
                        <input
                           type='text'
                           id={`addresses[${index}].street`}
                           {...register(`addresses[${index}].street`, {
                              required: true
                           })}
                           className='input input-bordered w-full bg-white'
                        />
                        {errors.addresses &&
                           errors.addresses[index] &&
                           errors.addresses[index].street && (
                              <span className='text-red-500'>
                                 Street Address is required
                              </span>
                           )}
                     </div>

                     <div className='form-control'>
                        <label
                           className='label text-gray-700'
                           htmlFor={`addresses[${index}].city`}
                        >
                           City
                        </label>
                        <input
                           type='text'
                           id={`addresses[${index}].city`}
                           {...register(`addresses[${index}].city`, {
                              required: true
                           })}
                           className='input input-bordered w-full bg-white'
                        />
                        {errors.addresses &&
                           errors.addresses[index] &&
                           errors.addresses[index].city && (
                              <span className='text-red-500'>
                                 City is required
                              </span>
                           )}
                     </div>

                     <div className='form-control'>
                        <label
                           className='label text-gray-700'
                           htmlFor={`addresses[${index}].postalCode`}
                        >
                           Postal Code
                        </label>
                        <input
                           type='text'
                           id={`addresses[${index}].postalCode`}
                           {...register(`addresses[${index}].postalCode`, {
                              required: true
                           })}
                           className='input input-bordered w-full bg-white'
                        />
                        {errors.addresses &&
                           errors.addresses[index] &&
                           errors.addresses[index].postalCode && (
                              <span className='text-red-500'>
                                 Postal Code is required
                              </span>
                           )}
                     </div>
                  </div>
               </div>
            ))}
            {/* Button to add more addresses */}
            <button
               type='button'
               onClick={() => append({ street: '', city: '', postalCode: '' })}
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
