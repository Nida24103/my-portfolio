import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repat bg-[url(/baner.jpg)]  bg-cover'
    style= {{backgroundSize: "35%", backgroundPosition:"left 100px top 100px"}}
    >
        <Navbar/>
        <div className='Container frid lg:gird-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p data-aos="zoom-in-up">I'm</p>
              <p data-aos="zoom-in-up">Nida</p>
              <p data-aos="zoom-in-up">Akhtar</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
