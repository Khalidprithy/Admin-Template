export default function LandingPage() {
   return (
      <div className='p-2'>
         <section className='bg-blue-500 rounded-md text-white z-10 p-10'>
            <div className='container mx-auto'>
               <h1 className='text-4xl font-bold mb-4'>
                  Welcome to Our Landing Page
               </h1>
               <p className='text-lg mb-8'>
                  A brief description of what we do.
               </p>
               <button
                  onClick={() => window.my_modal_3.showModal()}
                  className='bg-white text-blue-500 px-6 py-2 rounded'
               >
                  Learn More
               </button>

               <dialog
                  id='my_modal_3'
                  className='modal text-gray-800 backdrop-blur-sm '
               >
                  <form method='dialog' className='modal-box rounded-md'>
                     <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                        ✕
                     </button>
                     <h3 className='font-bold text-lg'>Hello!</h3>
                     <p className='py-4'>
                        Press ESC key or click on ✕ button to close
                     </p>
                  </form>
               </dialog>
            </div>
         </section>
         <section className='bg-gray-100 p-10'>
            <div className='container mx-auto'>
               <h2 className='text-2xl font-bold mb-4'>Our Services</h2>
               <div className='grid grid-cols-3 gap-4'>
                  {/* Replace with your service cards */}
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     Service 1
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     Service 2
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     Service 3
                  </div>
               </div>
            </div>
         </section>
         <section className='bg-blue-100 p-10'>
            <div className='container mx-auto'>
               <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
               <p className='mb-8'>Have questions? Get in touch with us.</p>
               <div className='flex'>
                  <input
                     className='border p-2 rounded-l-md w-full'
                     type='text'
                     placeholder='Your email'
                  />
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-r-md'>
                     Submit
                  </button>
               </div>
            </div>
         </section>
         <section className='bg-white p-10'>
            <div className='container mx-auto'>
               <h2 className='text-2xl font-bold mb-4'>Features</h2>
               <div className='grid grid-cols-3 gap-4'>
                  {/* Replace with your feature cards */}
                  <div className='bg-blue-200 p-4 rounded-lg shadow-md'>
                     Feature 1
                  </div>
                  <div className='bg-blue-200 p-4 rounded-lg shadow-md'>
                     Feature 2
                  </div>
                  <div className='bg-blue-200 p-4 rounded-lg shadow-md'>
                     Feature 3
                  </div>
               </div>
            </div>
         </section>
         <section className='bg-gray-200 p-10'>
            <div className='container mx-auto'>
               <h2 className='text-2xl font-bold mb-4'>Testimonials</h2>
               <div className='grid grid-cols-3 gap-4'>
                  {/* Replace with your testimonial cards */}
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam semper quam et.
                     </p>
                     <p className='font-bold mt-2'>- John Doe</p>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     <p>
                        “Vivamus malesuada sem sit amet quam scelerisque, ac
                        malesuada arcu sagittis.”
                     </p>
                     <p className='font-bold mt-2'>- Jane Smith</p>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     <p>
                        “Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas.”
                     </p>
                     <p className='font-bold mt-2'>- Alex Johnson</p>
                  </div>
               </div>
            </div>
         </section>
         <section className='bg-white p-10'>
            <div className='container mx-auto'>
               <h2 className='text-2xl font-bold mb-4'>
                  Frequently Asked Questions
               </h2>
               <div className='grid grid-cols-2 gap-4'>
                  {/* Replace with your FAQ items */}
                  <div className='border p-4 rounded-lg shadow-md'>
                     <h3 className='font-semibold mb-2'>Question 1?</h3>
                     <p>Answer to question 1.</p>
                  </div>
                  <div className='border p-4 rounded-lg shadow-md'>
                     <h3 className='font-semibold mb-2'>Question 2?</h3>
                     <p>Answer to question 2.</p>
                  </div>
                  <div className='border p-4 rounded-lg shadow-md'>
                     <h3 className='font-semibold mb-2'>Question 3?</h3>
                     <p>Answer to question 3.</p>
                  </div>
                  <div className='border p-4 rounded-lg shadow-md'>
                     <h3 className='font-semibold mb-2'>Question 4?</h3>
                     <p>Answer to question 4.</p>
                  </div>
                  {/* Add more FAQ items */}
               </div>
            </div>
         </section>
         <section className='bg-gray-100 p-10'>
            <div className='container mx-auto'>
               <h2 className='text-2xl font-bold mb-4'>Pricing</h2>
               <div className='grid grid-cols-3 gap-4'>
                  {/* Replace with your pricing plans */}
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     <h3 className='font-semibold mb-2'>Basic Plan</h3>
                     <p>Feature 1, Feature 2</p>
                     <p className='mt-4 text-lg font-bold'>$9.99/month</p>
                     <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>
                        Select Plan
                     </button>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     <h3 className='font-semibold mb-2'>Popular Plan</h3>
                     <p>Feature 1, Feature 2, Feature 3</p>
                     <p className='mt-4 text-lg font-bold'>$14.99/month</p>
                     <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>
                        Select Plan
                     </button>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                     <h3 className='font-semibold mb-2'>Pro Plan</h3>
                     <p>Feature 1, Feature 2, Feature 3</p>
                     <p className='mt-4 text-lg font-bold'>$19.99/month</p>
                     <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>
                        Select Plan
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
