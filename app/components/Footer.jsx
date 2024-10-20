import phone from "../assets/phonewave.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import { GiPayMoney } from "react-icons/gi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full mx-auto p-[71.8px] mt-[50px] h-fit footerbg  rounded-t-[1.5em]">
        <div className="mx-auto md:w-[1200px] h-fit max-h-fit md:max-w-[1200px]">
            <div className="flex-col content-center w-full h-full">
                <p className="text-center font-grey-bold heading4 w-[500px] mx-auto ">Get digital banking at your fingertips</p>
                <div className="grid grid-cols-2 mx-auto mt-[40px] mb-[1em] gap-[10px] h-[50px] w-[350px]">
                    <div className="col-span-1 p-4 storelink1 "></div>
                    <div className="col-span-1 p-4 storelink2"></div>
                </div>
            </div>
            <div className="mt-[1em]  overflow-hidden ">
                <div className="flex-col w-full  items-center justify-center  gap-10 mt-[2em]">
                    <div className="w-1/3 h-fit mx-auto -rotate-1 hover:rotate-0 wavy2 transition-all duration-100 ease-in-out delay-150 rounded-[20px] overflow-hidden">
                        <Image src={phone} alt=""  className=" mx-auto transition-all ease-in-out hover:scale-105 rounded-[20px]"/>
                    </div>
                    <div className="flex w-2/3 gap-5 p-5 py-10 mx-auto h-fit">
                        <div className="w-1/3 text-center text-white font-grey-reg ">
                            <p className="mb-5 footerheading font-grey-bold">Contact Us</p>
                            <p className="mb-3 footertext">litepay.com</p>
                            <div className="flex items-center justify-center w-full gap-2">
                            <Image src={twitter} alt=""  className=" w-[10%] hover:scale-125 transition-all ease-in-out"/>
                            <Image src={instagram} alt=""  className=" w-[10%] hover:scale-125 transition-all ease-in-out"/>
                            <Image src={linkedin} alt=""  className=" w-[10%] hover:scale-125 transition-all ease-in-out"/>
                            </div>
                        </div>
                        
                        <div className="w-1/3 text-center text-white font-grey-reg ">
                            <p className="mb-5 footerheading font-grey-bold">Products</p>
                            <p className="mb-3 footertext">Money Transfer</p>
                            <p className="mb-3 footertext">Agents</p>
                        </div>
                        
                        <div className="w-1/3 text-center text-white font-grey-reg ">
                            <p className="mb-5 footerheading font-grey-bold">Company</p>
                            <p className="mb-3 footertext">litepay.com</p>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Footer