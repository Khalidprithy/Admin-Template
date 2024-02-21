'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

const ProfileFormV3 = () => {
   // Define Zod schema for validation
   const schema = z.object({
      name: z
         .string()
         .min(2, { message: 'Name should be at least 2 characters long' })
         .max(50, { message: 'Name should not exceed 50 characters' })
         .optional(),
      phoneNumber: z
         .string()
         .min(6, {
            message: 'Phone number should be at least 6 characters long'
         })
         .max(20, { message: 'Phone number should not exceed 20 characters' })
         .optional(),
      email: z.string().email({ message: 'Invalid email format' }).optional(),
      age: z
         .number()
         .int()
         .positive({ message: 'Age should be a positive integer' })
         .optional(),
      addresses: z
         .array(
            z.object({
               street: z
                  .string()
                  .min(2, {
                     message: 'Street name should be at least 2 characters long'
                  })
                  .max(100, {
                     message: 'Street name should not exceed 100 characters'
                  }),
               city: z
                  .string()
                  .min(2, {
                     message: 'City name should be at least 2 characters long'
                  })
                  .max(50, {
                     message: 'City name should not exceed 50 characters'
                  }),
               postalCode: z
                  .string()
                  .min(2, {
                     message: 'Postal code should be at least 2 characters long'
                  })
                  .max(20, {
                     message: 'Postal code should not exceed 20 characters'
                  })
            })
         )
         .optional()
   });

   // useForm hook with ZodResolver
   const {
      register,
      handleSubmit,
      formState: { errors },
      control
   } = useForm({
      resolver: async data => {
         try {
            const validatedData = await schema.parse(data);
            return { values: validatedData, errors: {} };
         } catch (error) {
            return { values: {}, errors: error.errors };
         }
      },

      defaultValues: {
         name: '',
         phoneNumber: '',
         email: '',
         age: '',
         addresses: [{ street: '', city: '', postalCode: '' }]
      }
   });

   const { fields, append, remove } = useFieldArray({
      control,
      name: 'addresses'
   });

   const onSubmit = data => {
      console.log(data); // Ensure data is logged properly
   };

   return (
      <div className='card p-10 text-black'>
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
                        {errors?.name.message}
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
                        {errors?.phoneNumber.message}
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
                        {errors?.email.message}
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
                     <span className='text-red-500'>{errors?.age.message}</span>
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
                              errors?.addresses[index] &&
                              errors?.addresses[index].street && (
                                 <span className='text-red-500'>
                                    {errors?.addresses[index].street.message}
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
                              errors?.addresses[index] &&
                              errors?.addresses[index].city && (
                                 <span className='text-red-500'>
                                    {errors?.addresses[index].city.message}
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
                              errors?.addresses[index] &&
                              errors?.addresses[index].postalCode && (
                                 <span className='text-red-500'>
                                    {
                                       errors?.addresses[index].postalCode
                                          .message
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
