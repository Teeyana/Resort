import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
                   {/************  LEFT SECTION *****************/}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className=' row-span-3 w-full h-full object-cover p-2 ' src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            <img className=' row-span-2 w-full h-full object-cover p-2 ' src="https://images.unsplash.com/photo-1593705528563-c193527ea423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
            <img className= 'row span-2w-full h-full object-cover p-2 ' src="https://media.istockphoto.com/id/1352715203/photo/woman-floating-turquoise-sea.jpg?b=1&s=170667a&w=0&k=20&c=yj0ppbMP9Ee1hQ6IY7gCMpsDRtpOix55xGUeF2bDNQs=" alt="/" />
            <img className=' row-span-3 w-full h-full object-cover p-2 ' src="https://media.istockphoto.com/id/1346482581/photo/seaside-sunset.jpg?b=1&s=170667a&w=0&k=20&c=9mxX2NFZ2mv2oMxj-cO1a6CJ_LUqLuPzvvJUjdRaLGU=" alt="/" />
            <img className=' row-span-2 w-full h-full object-cover p-2 ' src="https://images.unsplash.com/photo-1608347212618-87abc72d4835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        {/* ******************RIGHT SECTION***************** */}
        <div className='flex flex-col h-full justify-center'>
            <h1 className='text-5xl md:text-6xl font-bold '>Plan Your Next Trip</h1>
            <p className='text-2xl py-6'>Travel takes us out of our comfort zones and inspires us to see, taste and try new things. It constantly challenges us.</p>
            <p className='pb-6'>
            Not only to adapt to and explore new surroundings, but also to engage with different people, to embrace adventures as they come and to share new and meaningful experiences with friends and loved ones.
            </p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan