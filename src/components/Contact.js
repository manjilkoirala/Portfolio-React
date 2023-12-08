import React, {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [subject, setSubject]=useState("")
    const [message, setMessage]=useState("")

    const handleReset=()=>{
        setEmail("")
        setName("")
        setMessage("")
        setSubject("")
        
    }

   
   
    const handleSubmit=(e)=>{
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyhG503vOjI0dlYP4lObYtmgfrS3ESgBkbqe0JfEGVCLtYAc8IG91kHevPxyp9kLFbB/exec'
        const form = document.forms['submit-to-google-sheet']
        e.preventDefault();
      
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}).then(response => toast("Sent"))
    .catch(error => console.error(toast("Not Sent")))
    
    
    handleReset()
   

    }
    

   
    
        
    
  return (
   <section className=' h-[calc(100vh-64px)] flex gap-4 px-6 md:px-28 my-10 md:flex-row flex-col'>
    <div className='md:w-[49%]'>
        <h2 className=' font-bold text-4xl'>Contact</h2>
        <p className='mt-4'>If you are looking for a Frontend Developer then contact me. <br /> Thank you☺️</p>
    </div>
    <div className='md:w-[49%] flex flex-col  '>
        <form onSubmit={e=>handleSubmit(e)} name='submit-to-google-sheet' className='border-2 py-4 px-6 rounded-3xl'>
            <div className='flex flex-col'>
            <label  className=' font-semibold text-lg'>Name:</label>
            <input type="text" name='Name' className=' bg-gray-100 h-9 rounded-lg' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='flex flex-col my-4'>
            <label className=' font-semibold text-lg'>Email:</label>
            <input type="email" name='Email' className='bg-gray-100 h-9 rounded-lg ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
            <label  className=' font-semibold text-lg'>Subject:</label>
            <input type="text" name='Subject' className='bg-gray-100 h-9 rounded-lg ' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            </div>
            <div className='flex flex-col my-5'>
            <label className=' font-semibold text-lg' >Message:</label>
            <textarea name='Message' className='bg-gray-100 rounded-lg ' value={message} onChange={(e)=>setMessage(e.target.value)}/>
            
            </div>
            <div className='flex gap-4 items-center mb-4'>
                <button type='submit' className='border-2 border-black rounded-sm px-5 py-3 text-2xl hover:bg-gray-100'>Send</button>
                <ToastContainer/>
                <button type='reset' className='border-2 border-black rounded-sm px-5 py-3 text-2xl hover:bg-gray-100' onClick={handleReset}>Reset</button>
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact