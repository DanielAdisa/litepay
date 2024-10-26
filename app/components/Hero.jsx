import Image from 'next/image';
import svg1 from '../assets/curve.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section class=" hero backdrop-blur-2xl h-screen ">
      
      
    <div className="w-full md:p-0 p-4 mx-auto tracking-tight text-white md:w-[1200px] h-screen md:max-w-[1200px]">
     <div className="flex items-start w-full h-full md:items-center">
       <div className="grid md:-mt-0  gap-y-10 grid-cols-1 grid-rows-3 md:w-[610px] md:h-[510px]">
          <div className="col-span-1 row-start-1 text-center md:text-start md:w-full md:h-fit">
           <p className=" font-grey-bold tracking-tight md:-mt-0 pt-[30%] w- md:pt-0 leading-none text-[2.6rem] md:text-[4.6rem]">Send & Receive Money D<br/> Eazzy Way</p>
          </div>
          <div className="md:w-[90%] w-full md:mt-[12%] text-center md:text-start  md:h-fit col-span-1 md:row-start-2 ">
            <p className="md:leading-[28px] text-[1rem]  leading-[24px] track md:text-[1.1rem] md:-mt-0 -mt-[5%] tracking-normal font-grey-reg">Free foreign accounts for remote workers, freelancers, creators, and digital nomads in Ghana. Get paid from anywhere, and withdraw in Ghanaian Cedis (GHS) or USDC instantly.</p>
          </div>
          <div className="md:w-[30%] mx-auto md:mx-0 w-2/3 col-span-1 row-start-3 ">
            <Link href={"/"}>
              <p className=" hover:shadow-md transition-shadow md:text-sm md:font-grey-bold font-grey-bold -mt-[50%] md:-mt-[0%] pb-[5%] pt-[5%] bg-white/30 rounded-full md:bg-[#098bb8] md:pt-[10%] md:pb-[10%] md:pr-[2%] md:pl-[2%] text-center">Get Started - Its Free</p>
            </Link>
          </div>
       </div>
     </div>
    </div>
    <div className="">
    <Image src={svg1} alt={"me"} className="imagehero" />
 </div>
    
</section>
  )
}
export default Hero