'use client'
import { useState } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const Technologies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: '/ue.png', alt: 'Unreal Engine' },
    { src: '/unity.png', alt: 'Unity' },
    { src: '/oculus.png', alt: 'Oculus' },
    { src: '/vive.png', alt: 'Vive' },
  ];

  const length = slides.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + length) % length);
  };

  return (
    <div className="py-12 relative" >
      <div className={montserrat.className}>
        <div className="flex flex-col items-center">
          <div
            className="mb-10 items-center flex flex-col rounded-[150px] p-12 sm:px-48 lg:p-24 lg:px-96 bg-opacity-60 bg-center bg-cover"
            style={{ backgroundImage: 'url("/tech_used.png")' }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold" >
              TECHNOLOGIES & HARDWARE
            </h2>
            <h2 className="text-lg md:text-xl font-extralight" >
              USED BY HYDRA VR.
            </h2>
          </div>
        </div>
        <div className="mt-8 w-full max-w-4xl mx-auto">
            {/* Corusel Element */}
          <div className="lg:hidden relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-gray-900 rounded-full transform -translate-y-1/2 top-1/2"
            >
              ❮
            </button>
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out">
                {slides.map((slide, index) => (
                  <div key={index} className={`flex justify-center w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
                    <img src={slide.src} alt={slide.alt} className="h-72 md:h-32 lg:h-44 w-auto" />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-gray-900 rounded-full transform -translate-y-1/2 top-1/2"
            >
              ❯
            </button>
          </div>
          {/* LARGE SCREENS */}
          <div className="hidden lg:flex justify-center mt-8 gap-24 space-x-6">
            {slides.map((slide, index) => (
              <img key={index} src={slide.src} alt={slide.alt} className="h-24 md:h-32 lg:h-44 w-auto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
