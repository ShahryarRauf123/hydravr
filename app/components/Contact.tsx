import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: [], weight: []})

const  Contact = () => {
    return (
        <div className={montserrat.className}>
      <div className=" rounded-xl lg:px-44 lg:pt-20 lg:pb-44 mx-4 sm:mx-0">
        <h1 className="text-white text-3xl font-bold mb-4 text-center">JOIN HYDRA</h1>
        <p className="text-[#A0A0B3] mb-6 text-center">Let’s Build Your VR Experience</p>
        <form className='items-center justify-center text-center'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-44 mb-4">
            
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-full border border-[#A0A0B3] bg-[#2A2A3B] text-white"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-full border border-[#A0A0B3] bg-[#2A2A3B] text-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 rounded-full border border-[#A0A0B3] bg-[#2A2A3B] text-white"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-2 rounded-full border border-[#A0A0B3] bg-[#2A2A3B] text-white mb-4 lg:w-96"
          />
          <textarea
            placeholder="Tell Us Something..."
            className="p-2 rounded-xl border border-[#A0A0B3] bg-[#2A2A3B] text-white mb-4 w-full"
          ></textarea>
          <button className=" text-white py-2 px-4 rounded-full text-sm transition duration-200 bg-gradient-to-r from-indigo to-purple">
            SEND TO HYDRA
          </button>
        </form>
      </div>
      </div>
    );
  }
  
  export default Contact;
