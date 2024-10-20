import image from "../assets/rocket.png"
import image2 from "../assets/illus1.webp"
import image3 from "../assets/illus2.webp"
import image4 from "../assets/illus3.webp"
import Image from "next/image"


const Started = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[50px] pb-[20px]  h-fit md:max-w-[1200px]">
        <div className="flex items-center justify-between w-full p-4">
            <Image src={image} alt=" " className="self-start w-1/5 transition-all ease-in -rotate-6 hover:rotate-6" />
            <p className="self-start text-right headcard font-grey-bold ">Get started on LitePay in three steps</p>
        </div>
        <div className="flex w-full h-auto gap-[1.5em] ">
            <div className="flex-col w-1/3">
                <div className="flex transition-all duration-100 ease-in-out delay-150 illustration pr-[1.5em]  -rotate-1 hover:rotate-0">
                {/* <img src={image2} alt=" " className="self-end transition-all ease-in-out hover:scale-105 " /> */}
                </div>
                <div className="mt-[1em] illustrationtwo1 p-[1.5em] h-[132px] ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Download App</p>
                    <p className="text-center font-grey-reg  text-[16px] text-[#49546c] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

            <div className="flex-col w-1/3">
                <div className="flex transition-all duration-100 ease-in-out delay-150 p-[1.5em] pb-0 illustrationtwo rotate-1 hover:rotate-0">
                <Image src={image3} alt=" " className="self-end transition-all ease-in-out hover:scale-105" />
                </div>
                <div className="mt-[1em] illustrationtwo2 p-[1.5em] h-[132px] ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Complete your KYC</p>
                    <p className="text-center font-grey-reg text-[16px] text-[#49546c] leading-[20px] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

            <div className="flex-col w-1/3">
                <div className="flex transition-all duration-100 ease-in-out delay-150 p-[1.5em] pb-0 illustrationthree -rotate-1 hover:rotate-0">
                <Image src={image4} alt=" " className="self-end transition-all ease-in-out hover:scale-105 " />
                </div>
                <div className="mt-[1em] illustrationtwo1 p-[1.5em] h-[132px] ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Talk to an agent</p>
                    <p className="text-center font-grey-reg text-[16px] text-[#49546c] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

        </div>
    </section>
  )
}
export default Started