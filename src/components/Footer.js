import React from 'react'
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className=' bg-gray-300 flex items-center justify-between h-40 px-6 md:px-28'>
      <div className=" w-10">
        <img src={logo} alt="logo" />
      </div>
<p className=' font-semibold text-lg'>koiralamanjil7@gmail.com</p>
<div className='flex gap-4 text-3xl'>
    <a href="https://www.linkedin.com/in/manjil-koirala/"><i className="fa-brands fa-linkedin"></i></a>
    <a href="https://github.com/manjilkoirala/" target='_'><i className="fa-brands fa-github"></i></a>
    <a href="https://www.facebook.com/manjil.koirala.98/"><i className="fa-brands fa-facebook"></i></a>
   
</div>

    </footer>
  )
}

export default Footer
