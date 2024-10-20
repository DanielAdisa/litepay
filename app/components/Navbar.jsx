import bg from "../assets/bg.png"
import phone from "../assets/Onboarding3.png"
import card from "../assets/cardmain.png"
import card1 from "../assets/card2.png"
import card2 from "../assets/card3.png"
import logo from "../assets/litepay-of-logo.png"
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion"
import Image from "next/image"

const Navbar = () => {
  return (
    <section className="w-full  mx-auto  font-grey-med text-white/90 md:w-[1200px] md:max-w-[1200px] h-fit">
        <nav  className="fixed h-fit z-50 mx-auto md:w-[1200px]">
                <div className="flex items-center justify-between mx-auto md:max-w-[1200px]">
                    <div className="flex items-center w-1/3 gap-6 ml-4">
                        <Image src={logo} alt={"me"} className=" w-[40%]" />
                        
                    </div>
                    <div className="flex w-1/3 font-grey-med pr-0 p-[2%] gap-x-12 ">
                        <p className="rounded-full font-Grey hover:cursor-pointer">Products</p>
                        <p className="rounded-full hover:cursor-pointer">Learn</p>
                        <p className="rounded-full hover:cursor-pointer">Company</p>
                    </div>
                    <div className="flex items-center pr-0 p-[2%] gap-x-6 ">
                        <p className="rounded-full font-grey-med hover:cursor-pointer">Log In</p>
                        <p className=" font-grey-med pt-[10px] rounded-full bg-white/20 border-[2px] border-white/50 pb-[10px] pr-[25px] pl-[25px]">Get Started - It is free</p>
                      
                    </div>
                  
                </div>
            </nav>
    </section>
  )
}
export default Navbar