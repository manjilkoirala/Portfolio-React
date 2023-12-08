import React from 'react'
function Contact() {
  return (
   <section className=' h-[calc(100vh-64px)] flex gap-4 px-6 md:px-28 my-10 md:flex-row flex-col'>
    <div className='md:w-[49%]'>
        <h2 className=' font-bold text-4xl'>Contact</h2>
        <p className='mt-4'>If you are looking for a Frontend Developer then contact me. <br /> Thank you☺️</p>
    </div>
    <div className='md:w-[49%] flex flex-col  '>
        <form className='border-2 py-4 px-6 rounded-3xl'>
            <div className='flex flex-col'>
            <label  className=' font-semibold text-lg'>Name:</label>
            <input type="text" className=' bg-gray-100 h-9 rounded-lg '/>
            </div>
            <div className='flex flex-col my-4'>
            <label className=' font-semibold text-lg'>Email:</label>
            <input type="email" className='bg-gray-100 h-9 rounded-lg '/>
            </div>
            <div className='flex flex-col'>
            <label  className=' font-semibold text-lg'>Subject:</label>
            <input type="text" className='bg-gray-100 h-9 rounded-lg '/>
            </div>
            <div className='flex flex-col my-5'>
            <label className=' font-semibold text-lg' >Message:</label>
            <textarea className='bg-gray-100 rounded-lg '/>
            
            </div>
            <div className='flex gap-4 items-center mb-4'>
                <button className='border-2 border-black rounded-sm px-5 py-3 text-2xl hover:bg-gray-100'>Send</button>
                <button className='border-2 border-black rounded-sm px-5 py-3 text-2xl hover:bg-gray-100'>Reset</button>
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact