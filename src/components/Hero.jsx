import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover'  src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100%] m-auto p-4 absolute'>
                <p>All inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Resorts Getaway</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Beaches are perfect for families because they are a great place to relax, feel the sand between your toes, and let the kids run around without endangering themselves or others.</p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero