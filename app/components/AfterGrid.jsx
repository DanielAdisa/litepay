import image from "../assets/phoneguy.jpg"
import { MdPaid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";import { GiWallet } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";

const AfterGrid = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[50px] pb-[20px] h-fit md:max-w-[1200px]">
       <div className="flex-col w-full h-fit">
            <div className="flex w-full pl-[71.8px] pt-[71.8px] pb-[67.5px] mb-0 grid-blue border-b-0 border-r-0 border-[1.2px] rounded-xl h-fit">
                <div className=" w-[30%] font-grey-bold leading-[64px] text-[50px]">
                    <p className="text-[#1b1f28] text-covert">Fast, Safe, Social Payments</p>
                </div>
                <div className=" w-[45%] flex-col h-full content-end mb-0 ">
                    <p className="text-[20px] font-grey-reg leading-tight text-[#1b1f28] text-convertsmall ">Get paid faster, send money securely, unlock free airtime and more, all in one place.</p>
                    <p className="text-[19px] flex font-grey-med text-white/90 items-center gap-3 text-start mt-[100px] w-[35%] leading-[26px] pt-[3%] pb-[3%] ">Get Spot  <IoArrowForwardCircleOutline /> </p>
                </div>
            </div>
            <div className="  pb-0 pl-0 p-0.5  rounded-[20px] mt-[20px]">
               <Image src={image} alt="" className="w-full object-cover  muted autoPlay loop playsInline rounded-[20px]" />
            </div>
            <div className="flex w-full text-[#363f52] greengrid1 rounded-xl mt-[20px] space-x-[20px] pl-[71.8px] pt-[71.8px] pb-[67.5px]  ">
                <div className="flex-col w-[25%] space-y-[10px]">
                    <MdPaid className="h-[50px] text-[#1b1f28] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold text-[#1b1f28] flextext">Get Paid</p>
                    <p className="text-[1rem] w-[85%] font-grey-med text-convertsmall2 text-[#1b1f28] ">Instant, free payments so you get your money fast.</p>
                </div>
                <div className="flex-col w-[25%] space-y-[10px]">
                    <FaShoppingCart className="h-[50px] text-[#1b1f28] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold text-[#1b1f28] flextext">Spend Together</p>
                    <p className="text-[1rem] w-[85%] font-grey-med text-convertsmall2 text-[#1b1f28] ">Save for shared expenses with free group accounts.</p>
                </div>
                <div className="flex-col  w-[25%] space-y-[10px]">
                    <GiWallet className="h-[50px] text-[#1b1f28] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold text-[#1b1f28] flextext">Skip the Fees</p>
                    <p className="text-[1rem] w-[85%] font-grey-med text-convertsmall2 text-[#1b1f28] ">No monthly account or card transaction fees.</p>
                </div>
                <div className="flex-col w-[25%] space-y-[10px]">
                    <AiOutlineSafetyCertificate className="h-[50px] text-[#1b1f28] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold text-[#1b1f28] flextext">Instant Rewards</p>
                    <p className="text-[1rem] w-[85%] font-grey-med text-convertsmall2 text-[#1b1f28] ">Stay connected with Airtime Rewards on every purchase.</p>
                </div>
            </div>
       </div>
    </section>
  )
}
export default AfterGrid