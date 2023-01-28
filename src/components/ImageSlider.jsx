import React from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import { useState } from 'react';

const ImageSlider = () => {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmVkJTIwbG9ic3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Lobster',
        },
        {
            url: 'https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNlcnZlZCUyMHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title:'Pasta',
        },
        {
            url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            title:'Sushi',
        },
        {
            url:'https://images.unsplash.com/photo-1644704265419-96ddaf628e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHN0ZWFrJTIwZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title:'Steak',
        },
        {
            url:'https://media.istockphoto.com/id/1139633275/photo/cup-of-coffee-and-freshly-baked-croissants-on-blue-background-top-view-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=nKDWzepAfzVmLloU9r2YODOqnQQ8UfW3DtDYjMZdxAw=',
            title:'Croisant and coffee',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? slides.length-1 : currentIndex-1
        setCurrentIndex (newIndex)
    };
    const nextSlide = () => {
        const isLastIndex = currentIndex === slides.length-1
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
       setCurrentIndex(slideIndex) 
    }

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group '>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage:`url(${slides[currentIndex].url})`}}></div>

        {/* left arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2    group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        {/* right arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2    group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slides,slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    <RxDotFilled/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider