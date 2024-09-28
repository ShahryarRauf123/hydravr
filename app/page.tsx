import Hero from "./components/Hero"
import HeroDesign from "./components/HeroDesign"
import Introduction from "./components/Introduction"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import Why from "./components/Why"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const page = () => {
    return (
        <div className="bg-backpurple p-3 overflow-hidden">
          <Navbar/>
          <Hero/>
          <HeroDesign/>
          <Introduction/>
          <Why/>
          <Technologies/>
          <Contact/>
          <Footer/>
        </div>
    )
}

export default page