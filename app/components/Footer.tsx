
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: [], weight: []})

const Footer = () => {
    return (
      
        <div className="text-center mt-4 text-sm">
            <div className={montserrat.className}>
          <p>2024 © HYDRA LANDING PAGE - ALL RIGHTS RESERVED</p>
          </div>
        </div>
    );
  }
  
  export default Footer;
