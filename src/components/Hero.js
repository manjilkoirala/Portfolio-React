import React from 'react'
import Manjil from '../assets/Manjil.png'
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  
  return (
   <section className='h-[calc(100vh-64px)] flex md:flex-row flex-col justify-center items-center md:mb-0 mb-24'>
    <div className='flex basis-2/5 justify-center px-7 md:mt-0 mt-24'>
        <img src={Manjil} alt="hero" className=' rounded-xl'/>
    </div>
    <div className='flex flex-col basis-6/12'>

        <h1 className=' text-6xl font-semibold leading-tight'>Manjil <br /> Koirala</h1>
        
        <h2 className=' py-2 text-xl'><Typewriter
            words={[ "Frontend Developer", "ReactJS Developer", "Software Developer"]}
            loop={3}
            cursor
            cursorStyle='/'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          /></h2>
        <p>koiralamanjil7@gmail.com <br /> Itahari, Nepal</p>
    </div>
   </section>
  )
}

export default Hero
