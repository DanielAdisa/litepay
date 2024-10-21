import Image from 'next/image';
import svg1 from '../assets/curve.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section class=" hero hidden md:block h-screen blur-md md:blur-0">
      
      
    <div className="w-full mx-auto tracking-tight text-white md:w-[1200px] h-screen md:max-w-[1200px]">
     <div className="flex items-center w-full h-full">
       <div className="grid gap-y-10 grid-cols-1 grid-rows-3 w-[610px] h-[510px]">
          <div className="w-full col-span-1 row-start-1 h-fit">
           <p className=" font-grey-bold tracking-tight leading-none text-[4.6rem]">Send & Receive Money D Eazzy Way</p>
          </div>
          <div className="w-[90%] mt-[12%] col-span-1 row-start-2 ">
            <p className="leading track text-[1.1rem] tracking-normal font-grey-reg">Free foreign accounts for remote workers, freelancers, creators, and digital nomads in Ghana. Get paid from anywhere, and withdraw in Ghanaian Cedis (GHS) or USDC instantly.</p>
          </div>
          <div className="w-[30%] col-span-1 row-start-3 ">
            <Link href={"/"}>
              <p className=" hover:shadow-md transition-shadow text-sm font-grey-bold rounded-full bg-[#098bb8] pt-[10%] pb-[10%] pr-[2%] pl-[2%] text-center">Get Started - Its Free</p>
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