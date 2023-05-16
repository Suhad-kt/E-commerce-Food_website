import React from 'react'
import Burger from "../assets/Herosection-burger.jpg";
// import Burger2 from "../assets/burger-2.jpg";



const Hero = () => {
  return (
    <div className='max-w-[2685px] mx-auto p-4'>
        <div className='max-h-[600px] md:max-h-[800px] relative' >
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[600px] md:max-h-[800px]  bg-black/40 flex flex-col justify-center'>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500 '>Best</span></h1>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500 '>Food</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[600px] md:max-h-[800px] object-cover' src={Burger} alt="burger..."/>
        </div>
    </div>
  )
}

export default Hero