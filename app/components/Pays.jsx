import Image from "next/image";
import image from "../assets/handedphone.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";

const Pays = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[25px] md:mt-[50px] p-4 pt-0 md:p-0 pb-[0px] h-full md:max-w-[1200px]">
      <Link href={"/"}>
        <div className="md:flex items-start justify-between w-full md:pl-[71.8px] md:pt-[71.8px] p-[34px] pb-0 pr-1 h-full greengrid2 hover:shadow-md transition-all ease-in-out overflow-clip">
          {/* Left Content */}
          <div className="flex flex-col justify-center w-full md:w-1/3">
            <p className="md:text-[1em] text-[10px] uppercase font-grey-med tracking-[2px] text-black/90">
              PAYMENTS - PAY BILL
            </p>
            <p className="md:text-[50px] text-[35px] md:-tracking-[1px] leading-[1em] -tracking-[0.5px] mt-[16px] mb-[4px] font-grey-bold md:leading-[50px] md:mt-[40px] text-[#1b1f28]">
              Pay your bills, Buy data and Airtime effortlessly
            </p>
            <p className="md:text-[1rem] md:w-[95%] font-grey-reg text-convertsmall1 mt-[18px] text-[#1b1f28] md:mt-[40px]">
              Shop securely online at all your favorite stores, and make secure payments for flights, hotels, subscriptions, and more using your virtual Mastercard.
            </p>
            <p className="md:text-[19px] text-[16px] flex transition-all ease-in-out font-grey-med text-white/90 items-center gap-3 text-start mt-[22px] md:mt-[100px] h-fit w-[35%] leading-[26px]">
              Get Spot <IoArrowForwardCircleOutline className=" text-[25px]" />
            </p>
          </div>

          {/* Right Content (Image) */}
          <div className="flex items-center justify-center w-full mt-4 md:w-2/3 md:mt-0">
            <div className="relative w-[80%] md:w-[90%]">
              <Image
                src={image}
                alt="Payment Illustration"
                layout="intrinsic"
                className="absolute object-contain rounded-lg md:top-0 md:right-0 md:relative -bottom-72 -right-10"
              />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Pays;
