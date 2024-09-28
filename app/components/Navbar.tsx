import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: [], weight: []})

const Navbar = () => {
    return (

        <nav >

            <div
                className="max-w-screen-xl mt-16 flex flex-wrap items-center justify-between mx-auto p-4">
                {/* IMAGES */}
                <span className={montserrat.className}>
                    <a href="/" className="flex ml-10 items-center space-x-3 rtl:space-x-reverse">

                        <img src="logo.png" className="h-20" alt="Flowbite Logo"/>
                        <img src="text-logo.png" className="h-10" alt="Flowbite Logo"/>
                    </a>
                </span>

                {/* BUTTON HAMBURGER */}

                <button className='lg:hidden flex'>
                    <img 
                    src='/menu.svg' className='w-10 h-10'></img>
                </button>

                {/* ELEMENTS */}

                <div className="hidden mr-30 w-full lg:block md:w-auto">
                    <div className={montserrat.className}>
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#about" className="mr-4 block py-2 text-xs md:border-0 md:p-0">ABOUT</a>
                            </li>
                            <li>
                                <a href="#services" className="mx-4 block py-2 text-xs md:border-0 md:p-0">SERVICES</a>
                            </li>
                            <li>
                                <a href="#technologies" className="mx-4 block py-2 text-xs md:border-0 md:p-0">TECHNOLOGIES</a>
                            </li>
                            <li>
                                <a href="#howto" className="mx-4 block py-2 text-xs md:border-0 md:p-0">HOW TO</a>
                            </li>

                        </ul>
                    </div>
                </div>
                {/* BUTTONS */}
                <div className='hidden mr-30 w-full lg:block md:w-auto'>
                    <div className={montserrat.className}>
                        <a href='' className="rounded-full text-xs px-6 py-2.5 mr-4 outline">CONTACT US</a>
                        <a
                            href=''
                            className="rounded-full text-xs px-6 font-bold py-3.5 ml-4 text-backpurple bg-gradient-to-r from-indigo to-purple ">JOIN HYDRA</a>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar