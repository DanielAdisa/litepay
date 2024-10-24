import { TESTIMONIALS } from "../constants/index";
import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mx-auto md:mt-[50px] md:mb-[50px]  md:pl-11 md:pr-11 md:mx-auto">
    <div className="flex gap-6">
    <div className="flex gap-6 animate-loop-scroll ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px] md:h-[10em] p-[10px] md:p-[20px] w-[270px] greengrid1 border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    <div className="flex gap-6 animate-loop-scroll ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px] md:h-[10em] p-[10px] md:p-[20px] w-[270px] greengrid1 border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    </div>
    <div className="flex relative gap-6 mt-[20px]">
    <div className="relative flex gap-6 animate-loop-scroll right-60 hover">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px]   md:h-[10em] p-[10px] md:p-[20px] w-[270px] grid-blue border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    <div className="relative flex gap-6 animate-loop-scroll right-60 hover ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px]  md:h-[10em] p-[10px] md:p-[20px] w-[270px] grid-blue border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    <div className="relative flex gap-6 animate-loop-scroll right-60 hover ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px]  md:h-[10em] p-[10px] md:p-[20px] w-[270px] grid-blue border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    </div>
    <div className="flex gap-6 mt-[20px]">
    <div className="flex gap-6 animate-loop-scroll ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px] md:h-[10em] p-[10px] md:p-[20px] w-[270px] greengrid1 border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    <div className="flex gap-6 animate-loop-scroll ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px] md:h-[10em] p-[10px] md:p-[20px] w-[270px] greengrid1 border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    </div>
    <div className="flex relative gap-6 mt-[20px]">
    <div className="relative flex gap-6 animate-loop-scroll right-60 hover">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px]   md:h-[10em] p-[10px] md:p-[20px] w-[270px] grid-blue border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    <div className="relative flex gap-6 animate-loop-scroll right-60 hover ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px]  md:h-[10em] p-[10px] md:p-[20px] w-[270px] grid-blue border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    <div className="relative flex gap-6 animate-loop-scroll right-60 hover ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-fit md:w-[428px]  md:h-[10em] p-[10px] md:p-[20px] w-[270px] grid-blue border-[1px] flex flex-col rounded-2xl">
           <div className="flex flex-row items-center w-full gap-3 mb-4">
           {t.image}
           <div className="flex flex-col text-[0.7rem]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
           <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
       </div>
        ))}
    </div>
    </div>
    <div className="mt-[50px] ml-10 mr-10 border-b-2"/>    
</div>
  )
}
export default Testimonials