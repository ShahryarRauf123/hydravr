'use client'

import React, { useState } from 'react';

const CarouselComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        <div className="flex flex-row items-center justify-center min-h-max bg-blue-200 rounded-lg w-full h-full">
            <img src="/location.png" className='scale-75 pt-10' alt="Location" />
            <div className='flex-col pt-5 items-start justify-start text-start'>
                <h1 className='font-bold text-lg pt-2 pl-2'>Pay Us a Visit</h1>
                <p className='font-medium text-xs pl-2'>Union St, Seattle, WA 98101, United States</p>
            </div>
        </div>,
        <div className="flex flex-row items-center justify-center min-h-max bg-green-200 rounded-lg w-full h-full">
           <img src="/call.png" className='scale-75 pt-10' alt="Location" />
           <div className='flex-col pt-5 items-start justify-start text-start'>
                <h1 className='font-bold text-lg pt-2 pl-2'>Give Us a Call</h1>
                <p className='font-medium text-xs pl-2'>(110) 1111-1010</p>
            </div>
        </div>,
        <div className="flex flex-row items-center justify-center min-h-max bg-red-200 rounded-lg w-full h-full">
            <img src="/mail.png" className='scale-75 pt-10' alt="Location" />
            <div className='flex-col pt-5 items-start justify-start text-start'>
                <h1 className='font-bold text-lg pt-2 pl-2'>Send Us a Message</h1>
                <p className='font-medium pl-2 text-xs'>Contact@HydraVRRe</p>
            </div>
        </div>,
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-full items-center justify-center">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded z-10" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="overflow-hidden w-full h-full rounded-lg">
                <div className="transition-transform duration-700 flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className='w-full flex-shrink-0'>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded z-10" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-400'}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;
