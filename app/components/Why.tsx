'use client'

import {useState} from 'react';
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: [], weight: []})


const reasons = [
    {
        title: "SIMULATION",
        description: "Hydra VR enhances simulations with immersive environments for real-time interact" +
                "ion, improving training across various fields.",
        img: "/img4.png"
    }, {
        title: "EDUCATION",
        description: "Hydra VR transforms education by creating immersive learning experiences that en" +
                "gage students and enhance understanding.",
        img: "/img2.png"
    }, {
        title: "SELF-CARE",
        description: "Hydra VR supports self-care through immersive relaxation experiences that promot" +
                "e mindfulness and stress relief",
        img: "/img3.png"
    }, {
        title: "OUTDOOR",
        description: "Hydra VR enriches outdoor experiences by simulating various environments, allowi" +
                "ng users to explore and interact with nature virtually.",
        img: "/img1.png"
    }
];

const Why = () => {
    const [activeIndex,
        setActiveIndex] = useState(0);

    return (
        <div className="bg-backpurple text-white py-12 text-center">
            <div className={montserrat.className}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex'>
                    <div className='min-w-72'>
                        <h2 className="text-4xl font-extrabold lg:text-left text-center">WHY BUILD</h2>
                        <h2 className="text-xl font-extrabold lg:text-left text-center ml-2 mb-4">WITH HYDRA?</h2>
                        <img className='hidden lg:flex' src="/longarrow.png" alt=""/>
                    </div>
                    <p className='ml-72 hidden lg:flex'>Hydra VR provides cutting-edge technology
                        and a comprehensive SDK for creating immersive, cross-platform virtual reality
                        experiences. With high-performance graphics, rapid prototyping, and strong
                        community support, it empowers developers to innovate and scale projects
                        efficiently.</p>
                </div>
                <div className="hidden lg:grid grid-cols-4 gap-4">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-[#201E2D] items-center p-12 rounded-3xl flex flex-col">
                            <img
                                src={reason.img}
                                alt={reason.title}
                                className="h-40 w-auto ml-4 object-cover rounded-full mb-4 border-8 border-backpurple"/>
                            <h3 className="text-xl font-bold mb-4 pb-4 border-b-2 border-b-indigo">{reason.title}</h3>
                            <p className="text-sm mb-4">{reason.description}</p>
                            <button
                                className="text-backpurple bg-gradient-to-r text-sm rounded-full from-indigo to-purple text-white py-2 px-7 mt-auto">TRY IT NOW</button>
                            {/* Use mt-auto for alignment */}
                        </div>
                    ))}
                </div>
                {/* Couersel AREA */}
                <div className="lg:hidden min-h-[400px] relative">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index
                            ? 'opacity-100'
                            : 'opacity-0'}`}>
                            <div
                                className="bg-[#201E2D] p-6 rounded-lg h-full items-center flex flex-col justify-center">
                                <img
                                    src={reason.img}
                                    alt={reason.title}
                                    className="h-auto w-56 items-center object-contain rounded-full mb-4"/>
                                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                <p className="text-sm mb-4">{reason.description}</p>
                                <button
                                    className="text-backpurple bg-gradient-to-r text-sm rounded-full from-indigo to-purple text-white py-2 px-7 ">TRY IT NOW</button>
                            </div>
                        </div>
                    ))}

                    {/* Left Arrow Button */}
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                        onClick={() => setActiveIndex(activeIndex > 0
                        ? activeIndex - 1
                        : reasons.length - 1)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>

                    {/* Right Arrow Button */}
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
                        onClick={() => setActiveIndex(activeIndex < reasons.length - 1
                        ? activeIndex + 1
                        : 0)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Why;
