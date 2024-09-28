import CarouselComponent from "./CarouselComponent"
const HeroDesign = () => {
    return ( 
    <> 
     <div
        className='hidden lg:flex rounded-full max-w-full min-w-max m-10 mx-[10vw] ml-[15vw] items-center justify-center text-center h-36 bg-gradient-to-r from-herocolor2 via-herocolor1 to-herocolor2'>
        {/* LOCATION */}
        <div
            className=' border-r border-r-purple flex pr-[2vw] pl-[2vw] items-center text-start'>
            <img className=' scale-75' src="/location.png" alt=""/>
            <div className='flex-col items-start justify-start text-start'>
                <h1 className='font-bold text-lg pt-2 pl-2'>Pay Us a Visit</h1>
                <p className='font-medium text-xs pl-2'>Union St, Seattle, WA 98101, United States</p>
            </div>
        </div>
        {/* CALL */}

        <div
            className=' border-r border-r-purple pr-[2vw] pl-[2vw] 2xl:px-32 flex  items-start justify-start'>
            <img className=' scale-75' src="/call.png" alt=""/>
            <div className='flex-col items-start justify-start text-start'>
                <h1 className='font-bold text-lg pt-2 pl-2'>Give Us a Call</h1>
                <p className='font-medium text-xs pl-2'>(110) 1111-1010</p>
            </div>
        </div>
                {/* MAIL */}

        <div className='flex pr-[2vw] pl-[2vw] items-start justify-start'>
            <img className=' scale-75' src="/mail.png" alt=""/>
            <div className='flex-col items-start justify-start text-start'>
                <h1 className='font-bold text-lg pt-2 pl-2'>Send Us a Message</h1>
                <p className='font-medium pl-2 text-xs'>Contact@HydraVRRe</p>
            </div>
        </div>
     </div> 
     {/* MOBILE BUTTON */}
     <div className='lg:hidden rounded-full md:mx-[20vw] m-10 h-36 bg-gradient-to-r from-herocolor2 via-herocolor1 to-herocolor2 max-w-full flex items-center justify-center'>
    <CarouselComponent/>
</div>

    </>

    )
}

export default HeroDesign