import card1 from "../assets/BBC-logo.svg"
import cnn from "../assets/cnn.svg"
import bloom from "../assets/Bloomberg.svg"
import Image from "next/image"

const GridSection = () => {
  return (
    <div className="w-full mx-auto md:w-[1200px] pb-0 h-[10vh] md:max-w-[1200px]">
    <div className="md:flex w-full h-[10vh] md:justify-evenly md:items-center">
        <div className=" md:w-[20%]">
            <p className="tracking-[0.25em] text-[0.875rem] text-[#8592ad] text-center md:p-0 p-[5%] md:text-start font-grey-lit">AS SEEN ON</p>
        </div>
        <div className=" flex w-full justify-center md:w-[80%] content-center  mb-0 md:justify-between md:items-center  ">
            <Image src={card1} alt="" className=" md:w-[10%] md:p-0 p-5"/>
            <div className="border-[5px] border-black/60 md:block hidden "/>
            <Image src={cnn} alt="" className="md:w-[10%] w-[20%] md:p-0 p-5"/>
            <Image src={cnn} alt="" className="md:w-[10%] md:hidden w-[20%] md:p-0 p-5"/>
            <div className="border-[5px] border-black/60 md:block hidden"/>
            <Image src={bloom} alt="" className="md:w-[10%] md:p-0 p-5"/>
        </div>
        
    </div>
</div>
  )
}
export default GridSection