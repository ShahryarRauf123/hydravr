import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: [], weight: []})

const Hero = () => {
    return ( <div className={montserrat.className}>

        <div className='flex flex-col lg:flex-row items-center justify-between'>
            {/* TEXT SECTION */}
            <div className='flex flex-col lg:ml-[18vw] '>
                <h1 className="text-4xl font-bold">
                    <strong
                        className='bg-gradient-to-r from-indigo to-purple bg-clip-text text-transparent'>Dive </strong>
                    Into the Depths</h1>
                <h1 className="text-4xl font-bold">Of
                    <strong
                        className='bg-gradient-to-r from-indigo to-purple bg-clip-text text-transparent'> Virtual Reality</strong>
                </h1>
                <p className='hidden shrink-0 mt-10 pr-[1vw] lg:flex max-w-[500px] min-w-[350px]'>Immerse yourself in the
                    cutting-edge world of Hydra VR, where the boundaries between reality and
                    imagination disappear. Explore vast, stunning landscapes, craft your own unique
                    adventures, and experience the next level of immersive technology. Whether
                    you're seeking thrilling experiences or creative freedom, Hydra VR opens the
                    door to endless possibilities in the virtual world.
                </p>
            
            </div>
            {/* IMAGE SECTION */}
            <div className='lg:mr-[12vw] mt-20 relative bg-cover shrink-0 bg-no-repeat'>
                <img
                    className='rounded-tl-[150px] rounded-bl-[300px] rounded-tr-[150px] rounded-br-[130px] hover:shadow-indigo hover:shadow-2xl hover:scale-105  '
                    src="main-img.png"
                    alt="mainimagehere"/>
            </div>
        </div>
        </div>
    )
}

export default Hero
