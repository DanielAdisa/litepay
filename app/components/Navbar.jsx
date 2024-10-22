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
    <section className="w-full mx-auto font-grey-med md:w-full md:max-w-full h-fit">
        <nav  className={header ? 'md:fixed h-fit transition-all ease-in-out rounded-b-[20px]  z-50 text-white pr-4 backdrop-blur-2xl bg-black/70  mx-auto md:w-full' : 'md:fixed text-white/80 pr-4 bg-transparent text-white h-fit z-50 mx-auto md:w-full'}>
                <div className="flex items-center justify-between mx-auto md:max-w-[1200px]">
                    <div className="flex items-center w-1/3 gap-6 ml-4">
                    <Link href={"/"}  className=" w-[40%]">
                        <Image src={logo} alt={"me"} />
                    </Link>   
                    </div>
                    <div className="flex w-1/3 mx-auto font-grey-med gap-x-12 ">
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Products</Link>
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Learn</Link>
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Company</Link>
                    </div>
                    <div className="flex items-center pr-0 p-[2%] gap-x-6 ">
                        <Link href={"/"} className="rounded-full font-grey-med hover:cursor-pointer">Log In</Link>
                        <Link href={"/"} 
                        className={header ? 'bg-white/10 border-[2px] border-white/ font-grey-med pt-[10px] rounded-full pb-[10px] pr-[25px] pl-[25px]' : 'font-grey-med pt-[10px] rounded-full bg-white/20 border-[2px] border-white/50 pb-[10px] pr-[25px] pl-[25px]'}>Get Started - It is free</Link>
                      
                    </div>
                  
                </div>
            </nav>
    </section>
  )
}
export default Navbar