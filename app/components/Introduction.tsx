import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: [], weight: [] });

const Introduction = () => {
  return (
    <div className={montserrat.className}>
      <div className="bg-backpurple text-white p-8">
        <div className="xl:mx-72"> {/* Change lg to xl */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8"> {/* Change lg to xl */}
            <div className="flex flex-col xl:items-start items-center"> {/* Change lg to xl */}
              <h2 className="text-4xl font-bold">
                <b>INTRODUCTION</b>
              </h2>
              <h2 className="text-2xl xl:mb-0 mb-10">TO HYDRA VR</h2>
              <img src="longarrow.png" className="hidden xl:flex w-44 h-auto xl:ml-56 my-4" alt="arrow" /> {/* Change lg to xl */}
              <img
                src="/about_img.png"
                alt="Hydra VR"
                className="rounded-lg mb-4 rounded-tl-[250px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[250px] hover:shadow-[#DA3222] hover:shadow-2xl hover:scale-105 w-auto xl:w-auto" 
                width={500}
                height={500}
              />
            </div>
            <div className="xl:ml-10 text-center xl:text-left"> {/* Change lg to xl */}
              <p className="text-sm xl:mb-4 lg:mb-32 mt-10 whitespace-normal xl:whitespace-pre-line"> {/* Change lg to xl */}
                HYDRA VR is a leading virtual reality company, creating high-fidelity immersive
                experiences for gaming, training, and entertainment. Their cutting-edge
                technology and innovative design deliver unparalleled realism and engagement in
                the virtual world.
              </p>
              <h3 className="text-2xl mt-10 font-bold"><b>ABOUT</b></h3>
              <h3 className="text-2xl mb-12">HYDRA VR</h3>
              <p className="whitespace-normal xl:whitespace-pre-line"> {/* Change lg to xl */}
                HYDRA VR is a pioneering virtual reality company committed to transforming
                immersive experiences. Our mission is to push the boundaries of virtual reality
                by creating high-fidelity, engaging environments for gaming, training,
                education, and entertainment. Utilizing state-of-the-art technology and
                innovative design, we deliver unparalleled realism and interactivity. At HYDRA
                VR, we believe in the power of VR to revolutionize the way people learn, play,
                and connect. Join us as we bring the future of virtual reality to life.
              </p>
              <div className={montserrat.className}>
                <button className="rounded-full font-bold text-backpurple bg-gradient-to-r from-indigo to-purple p-4 px-8 text-xs mt-10">
                  LET'S GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
