"use client";
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
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [header , setHeader] = useState(false);
    const scrollHeader = () => {
        if(window.scrollY >= screen.height*0.5){
            setHeader(true);
        }else{
            setHeader(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
                    }
    },[])


  return (
    <section className="w-full mx-auto transition-transform ease-in-out font-grey-med md:w-full scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/80 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/8  md:max-w-full h-fit">
        <nav  className={header ? 'fixed h-fit transition-all ease-in-out rounded-b-[20px]  z-50 text-white pr-4 backdrop-blur-2xl hidden md:block bg-black/70  mx-auto w-full' : 'fixed  backdrop-blur-3xl md:backdrop-blur-0 md:bg-transparent bg-black/25 text-white/80 md:pr-0 md:pl-0 md:pt-0  md:pb-0 pt-[2%] pb-[2%] pr-[2%] pl-[2%] text-white h-fit z-50 mx-auto w-full'}>
                <div className="flex items-center justify-between mx-auto md:max-w-[1200px]">
                    <div className="flex items-center justify-center w-full gap-6 ml-4 md:justify-start md:w-1/3">
                    <Link href={"/"}  className=" md:w-[40%]  w-[30%] m-5 md:m-0 ">
                        <Image src={logo} alt={"me"} />
                    </Link>   
                    </div>
                    <div className="hidden mx-auto md:w-1/3 md:flex font-grey-med md:gap-x-12">
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Products</Link>
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Learn</Link>
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Company</Link>
                    </div>
                    <div className="md:flex items-center hidden justify-end  p-5 w-1/2 md:w-fit  md:pr-0 md:p-[2%] gap-x-6 ">
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Log In</Link>
                        <Link href={"/"} 
                        className={header ? 'bg-white/10 border-[2px] border-white/ font-grey-med md:pt-[10px] rounded-full md:pb-[10px] md:pr-[25px] md:pl-[25px]' : 'md:font-grey-med md:pt-[10px] rounded-full bg-white/20 pt-[8%] pb-[8%] pr-[15%] pl-[15%] md:w-fit w-fit border-[2px] border-white/50 md:pb-[10px] md:pr-[25px] md:pl-[25px]'}>Get Started - It is free</Link>
                      
                    </div>
                  
                </div>
            </nav>
    </section>
  )
}
export default Navbar