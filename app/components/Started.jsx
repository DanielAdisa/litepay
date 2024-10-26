import image from "../assets/rocket.png"
import image2 from "../assets/illus1.webp"
import image3 from "../assets/illus2.webp"
import image4 from "../assets/illus3.webp"
import Image from "next/image"


const Started = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[25px] md:mt-[50px] pb-[20px] md:p-0 p-4 md:pt-0 pt-0 h-fit md:max-w-[1200px]">
        <div className="w-full p-4 md:justify-between md:items-center md:flex">
            <Image src={image} alt=" " className="self-start hidden md:block w-[50%] transition-all ease-in md:w-1/5 -rotate-6 hover:rotate-6" />
            <p className="text-left md:self-start md:text-right headcard font-grey-bold ">Get started on <br className="hidden md:block" />LitePay<br className="hidden md:block" /> in three Eazzy steps</p>
        </div>
        <div className="md:flex w-full h-auto md:space-y-0 space-y-[1em] gap-[1.5em] ">
            <div className="md:w-1/3 md:flex-col">
                <div className="md:flex transition-all duration-100 ease-in-out delay-150 illustration h-[363px] pr-[1.5em] bg-gradient-to-b from-black from-20% to-blue-600 rounded-[20px]  md:-rotate-1 hover:rotate-0">
                {/* <img src={image2} alt=" " className="self-end transition-all ease-in-out hover:scale-105 " /> */}
                </div>
                <div className="mt-[1em] illustrationtwo1 p-[1.5em] h-auto ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Download<br/> App</p>
                    <p className="text-center font-grey-reg  text-[16px] text-[#49546c] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 md:flex-col">
                <div className="md:flex flex items-end transition-all duration-100 ease-in-out delay-150 md:p-[0.3em] md:pb-0 illustrationtwo md:rotate-1 hover:rotate-0">
                <Image src={image3} alt=" " className="transition-all ease-in-out md:w-[90%] md:h-fit w-fit p-4 pb-0 md:p-0 h-[80%]  mx-auto hover:scale-105" />
                </div>
                <div className="mt-[1em] illustrationtwo2 p-[1.5em] h-auto ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Complete your<br/> KYC</p>
                    <p className="text-center font-grey-reg text-[16px] text-[#49546c] leading-[20px] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

            <div className="md:w-1/3 md:flex-col">
                <div className="md:flex flex items-end transition-all duration-100 ease-in-out delay-150 md:p-[0.3em] md:pb-0 illustrationthree md:-rotate-1 hover:rotate-0">
                <Image src={image4} alt=" " className="transition-all ease-in-out md:w-[90%] md:h-fit w-fit p-4 pb-0 md:p-0 h-[80%]  mx-auto hover:scale-105" />
                </div>
                <div className="mt-[1em] illustrationtwo1 p-[1.5em] h-auto ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Talk to an<br/> agent</p>
                    <p className="text-center font-grey-reg text-[16px] text-[#49546c] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

        </div>
    </section>
  )
}
export default Started