import Image from "next/image"

import image from "../assets/handedphone.png"

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";

const Pays = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[50px] p-4 md:p-0 pb-[20px] h-fit md:max-w-[1200px]">
      <Link href={"/"}>
       <div className="flex items-start justify-between w-full pl-[71.8px] pt-[71.8px] h-full greengrid2 hover:scale-105 transition-all ease-in-out overflow-clip">
            <div className="w-1/3">
                {/* <img src={image} alt="" className=" w-fit h-[100%]" /> */}
                <p className="text-[1em] uppercase font-grey-med tracking-[2px] text-black/90">PAYMENTS - PAY BILL</p>
                <p className="text-[50px]  -tracking-[1px] font-grey-bold leading-[50px] mt-[40px] text-[#1b1f28]">Pay your bills, Buy data and Airtime effortlessly </p>
                <p className="text-[1rem] w-[95%] font-grey-reg text-convertsmall1 text-[#1b1f28] mt-[40px]">Shop securely online at all your favorite stores, and make secure payments for flights, hotels, subscriptions, and more using your virtual Mastercard. </p>
                <p className="text-[19px] flex hover:text-[21px] transition-all ease-in-out font-grey-med text-white/90 items-center gap-3 text-start mt-[100px] w-[35%] leading-[26px]">Get Spot  <IoArrowForwardCircleOutline /> </p>
            </div>
            <div className="content-end w-2/3">
            <div className="">
                <Image src={image} alt="" className="md:blur-sm md:hover:blur-0" />
            </div>
            </div>
       </div>
       </Link>
    </section>
  )
}
export default Pays