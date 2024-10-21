
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
    // const [fix , setfix] = useState(false)


    // function setFixed() {

    //     if (window.scrollY > window.innerHeight) {
    //                 setfix(true)
    //             } else {
    //                 setfix(false)
    //             }
    // }
    // window.addEventListener("scroll", setFixed)
  return (
    <section className="w-full  mx-auto  font-grey-med  md:w-[1200px] md:max-w-[1200px] h-fit">
        <nav  className="md:fixed h-fit z-50 text-white/80 pr-4 bg-black/60  rounded-b-[20px] mx-auto md:w-[1200px] md:fixed text-white/80 pr-4 bg-black/60 rounded-b-[20px] text-white h-fit z-50 mx-auto md:w-[1200px]">
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
                        <Link href={"/"} className=" font-grey-med pt-[10px] rounded-full bg-white/20 border-[2px] border-white/50 pb-[10px] pr-[25px] pl-[25px]">Get Started - It is free</Link>
                      
                    </div>
                  
                </div>
            </nav>
    </section>
  )
}
export default Navbar