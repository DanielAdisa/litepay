import image from "../assets/phoneguy.jpg"
import { MdPaid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";import { GiWallet } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { PiNumberCircleOneDuotone } from "react-icons/pi";
import { PiNumberCircleTwoDuotone } from "react-icons/pi";
import { PiNumberCircleThreeDuotone } from "react-icons/pi";
import { PiNumberCircleFourDuotone } from "react-icons/pi";
PiNumberCircleFourDuotone 

const AfterGrid = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[50px] p-4 md:p-0 pb-[20px] h-fit md:max-w-[1200px]">
       <div className="flex-col w-full h-fit">
        <Link href={"/"}>
            <div className="md:flex w-full pl-[34px] pt-[34px] pb-[67.5px] md:pl-[71.8px] md:pt-[71.8px] md:pb-[67.5px] mb-0 grid-blue hover:shadow-md transition-shadow ease-in-out border-b-0 border-r-0 border-[1.2px] rounded-xl md:h-fit">
                <div className=" md:w-[30%] w-full font-grey-bold leading-[64px] text-[50px]">
                    <p className="text-[#1b1f28] text-covert">Fast, Safe, Social Payments</p>
                </div>
                <div className=" md:w-[45%] md:flex-col h-full mt-[18px] md:mt-0 content-end mb-0 ">
                    <p className="text-[20px] font-grey-reg leading-tight text-[#1b1f28] text-convertsmall ">Get paid faster, send money securely, unlock free airtime and more, all in one place.</p>
                    <p className="md:text-[19px] text-[16.8px] flex font-grey-med text-white/90 items-center gap-3 text-start mt-[22px] md:mt-[100px] w-[35%] leading-[26px] pt-[3%]  ">Get Spot  <IoArrowForwardCircleOutline /> </p>
                </div>
            </div>
        </Link>
            <div className="  pb-0 pl-0 p-0.5 rounded-[20px] mt-[50px]">
               <Image src={image} alt="" className="w-full object-cover bg-gradient-to-b from-transparent from-10% to-purple-950  rounded-[20px]" />
            </div>
            <div className="md:flex w-full text-[#363f52] greengrid1 rounded-xl space-y-5 md:space-y-0 mt-[50px] md:space-x-[20px] md:pl-[71.8px] p-9 pr-0.5 md:pt-[71.8px] md:pb-[67.5px]  ">
                <div className="md:flex-col items-center md:items-start  gap-x-8 md:gap-x-0 flex md:w-[25%] md:space-y-[10px]">
                    <PiNumberCircleOneDuotone className="md:h-[50px] md:text-9xl text-[100px] text-[#1b1f28] md:w-[50px] "/>
                    <div className="flex-col space-y-4 md:flex-none">
                    <p className="text-[35px] content-start font-grey-med text-[#1b1f28] flextext">Get Paid</p>
                    <p className="text-[1rem] w-[85%] content-end font-grey-reg text-convertsmall2 text-[#1b1f28] ">Instant, free payments so you get your money fast.</p>
                    </div>
                </div>
                <div className="md:flex-col flex  items-center md:items-start  gap-x-8 md:gap-x-0 md:w-[25%] md:space-y-[10px]">
                    <PiNumberCircleTwoDuotone className="md:h-[50px] text-[100px] text-[#1b1f28] md:w-[50px] "/>
                    <div className="flex-col space-y-4 md:flex-none">
                    <p className="md:text-[1.5rem] content-start font-grey-med text-[#1b1f28] flextext">Spend Together</p>
                    <p className="text-[1rem] w-[85%] font-grey-reg text-convertsmall2 text-[#1b1f28] ">Save for shared expenses with free group accounts.</p>
                    </div>
                </div>
                <div className="md:flex-col items-center md:items-start  gap-x-8 md:gap-x-0 flex md:w-[25%] md:space-y-[10px]">
                    <PiNumberCircleThreeDuotone  className="md:h-[50px] text-[90px] text-[#1b1f28] md:w-[50px] "/>
                    <div className="flex-col space-y-4 md:flex-none">
                    <p className="md:text-[1.5rem] font-grey-med text-[#1b1f28] flextext">Skip the Fees</p>
                    <p className="text-[1rem] w-[85%] font-grey-reg text-convertsmall2 text-[#1b1f28] ">No monthly account or card transaction fees.</p>
                    </div>
                </div>
                <div className="md:flex-col items-center md:items-start  gap-x-8 md:gap-x-0 flex md:w-[25%] md:space-y-[10px]">
                    <PiNumberCircleFourDuotone className="md:h-[50px] text-[100px] text-[#1b1f28] md:w-[50px] "/>
                    <div className="flex-col space-y-4 md:flex-none">
                    <p className="md:text-[1.5rem] font-grey-med text-[#1b1f28] flextext">Instant Rewards</p>
                    <p className="text-[1rem] w-[85%] font-grey-reg text-convertsmall2 text-[#1b1f28] ">Stay connected with Airtime Rewards on every purchase.</p>
                    </div>
                </div>
            </div>
       </div>
    </section>
  )
}
export default AfterGrid