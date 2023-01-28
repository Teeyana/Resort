import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid grid-cols-3 gap-4 '>
        <div className='lg:top-20 relative lg:cols-span-1 cols-span-2'>
            <h3 className='text-2xl font-bold '>Fine Interior Rooms</h3>
            <p className='pt-4'>Sunset on the beach is the best. There's no place like home, even when you're on vacation.</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2 '>
            <img className='object-cover w-full h-full' src="https://media.istockphoto.com/id/457977467/photo/white-bedroom-overlooking-ocean.jpg?s=612x612&w=0&k=20&c=2KvOcSrqMnDL20msR2Cv49FcUMs6JcF8BWAlMB94PZM=" alt="/" />
            <img  className=' row-span-2 object-cover w-full h-full'src="https://media.istockphoto.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=0&k=20&c=LPNC-aqrsOsgxU8eqPcR38ACIOIjqAmh0VSKclIa2gs=" alt="/" />
            <img className='object-cover w-full h-full' src="https://media.istockphoto.com/id/1181846848/photo/side-view-of-luxury-island-resort-bed-with-mosquito-net.jpg?s=612x612&w=0&k=20&c=t94FhAV7WX6PXH7eixxRN0hDxl7HeTQtcu5qJy0up1E=" alt="/" />
        </div>
    </div>
  )
}

export default Rooms