'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

const ProfileFormV3 = ({ setProfileData }) => {
   // Define Zod schema for validation
   const schema = z.object({
      name: z
         .string()
         .min(2, 'Name should be at least 2 characters long')
         .max(50, 'Name should not exceed 50 characters')
         .refine(value => !!value.trim(), { message: 'Name is required' }),
      phoneNumber: z
         .string()
         .min(6, 'Phone number should be at least 6 characters long')
         .max(20, 'Phone number should not exceed 20 characters')
         .refine(value => !!value.trim(), {
            message: 'Phone number is required'
         }),
      email: z
         .string()
         .email('Invalid email format')
         .refine(value => !!value.trim(), { message: 'Email is required' }),
      age: z
         .string()
         .min(1, 'Age is required')
         .refine(value => /^\d+$/.test(value), {
            message: 'Age must be a positive number'
         }),
      addresses: z.array(
         z.object({
            street: z
               .string()
               .min(2, 'Street name should be at least 2 characters long')
               .max(100, 'Street name should not exceed 100 characters')
               .refine(value => !!value.trim(), {
                  message: 'Street address is required'
               }),
            city: z
               .string()
               .min(2, 'City name should be at least 2 characters long')
               .max(50, 'City name should not exceed 50 characters')
               .refine(value => !!value.trim(), {
                  message: 'City is required'
               }),
            postalCode: z
               .string()
               .min(2, 'Postal code should be at least 2 characters long')
               .max(20, 'Postal code should not exceed 20 characters')
               .refine(value => !!value.trim(), {
                  message: 'Postal code is required'
               })
         })
      )
   });

   // useForm hook with ZodResolver
   const {
      register,
      handleSubmit,
      formState: { errors },
      control
   } = useForm({
      resolver: zodResolver(schema),
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

   // Form submission handler
   const onSubmit = data => {
      console.log(data);
      setProfileData(data);
   };

   return (
      <div className='card p-5 text-black'>
         <p>This form is made with react-hook-form with Zod validation</p>
         <h4 className='text-xl font-medium p-2'>User information</h4>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4 border border-gray-300 rounded-md p-5'
         >
            {/* Form fields */}
            {/* Name */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='name'>
                     Name
                  </label>
                  <input
                     type='text'
                     id='name'
                     {...register('name')}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors?.name && (
                     <span className='text-red-500'>
                        {errors?.name?.message}
                     </span>
                  )}
               </div>
               {/* Phone Number */}
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='phoneNumber'>
                     Phone Number
                  </label>
                  <input
                     type='tel'
                     id='phoneNumber'
                     {...register('phoneNumber')}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors?.phoneNumber && (
                     <span className='text-red-500'>
                        {errors?.phoneNumber?.message}
                     </span>
                  )}
               </div>
               {/* Email */}
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='email'>
                     Email
                  </label>
                  <input
                     type='email'
                     id='email'
                     {...register('email')}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors?.email && (
                     <span className='text-red-500'>
                        {errors?.email?.message}
                     </span>
                  )}
               </div>
               {/* Age */}
               <div className='form-control'>
                  <label className='label text-gray-700' htmlFor='age'>
                     Age
                  </label>
                  <input
                     type='number'
                     id='age'
                     {...register('age')}
                     className='input input-bordered w-full bg-white'
                  />
                  {errors?.age && (
                     <span className='text-red-500'>
                        {errors?.age?.message}
                     </span>
                  )}
               </div>
            </div>

            {/* Address fields */}
            {fields.map((address, index) => (
               <div key={address.id}>
                  <div className='space-y-2 border border-gray-400 rounded-md p-2 mt-3'>
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
                              {...register(`addresses[${index}].street`)}
                              className='input input-bordered w-full bg-white'
                           />
                           {errors?.addresses &&
                              errors?.addresses[index]?.street && (
                                 <span className='text-red-500'>
                                    {errors?.addresses[index]?.street?.message}
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
                              {...register(`addresses[${index}].city`)}
                              className='input input-bordered w-full bg-white'
                           />
                           {errors?.addresses &&
                              errors?.addresses[index]?.city && (
                                 <span className='text-red-500'>
                                    {errors?.addresses[index]?.city?.message}
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
                              {...register(`addresses[${index}].postalCode`)}
                              className='input input-bordered w-full bg-white'
                           />
                           {errors?.addresses &&
                              errors?.addresses[index]?.postalCode && (
                                 <span className='text-red-500'>
                                    {
                                       errors?.addresses[index]?.postalCode
                                          ?.message
                                    }
                                 </span>
                              )}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
            {/* Add Address button */}
            <button
               type='button'
               onClick={() => append({ street: '', city: '', postalCode: '' })}
               className='btn btn-outline btn-accent rounded-md btn-sm'
            >
               Add Address
            </button>
            {/* Submit button */}
            <div className='flex items-center justify-end'>
               <button type='submit' className='btn btn-sm rounded btn-primary'>
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default ProfileFormV3;
