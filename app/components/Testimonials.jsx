import { TESTIMONIALS } from "../constants/index";
import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mx-auto md:mt-[50px] md:mb-[50px] mt-[25px] mb-0  md:pl-11 md:pr-11 md:mx-auto">
    <div className="flex gap-6">
    <div className="flex gap-6 animate-loop-scroll hover:animate-stop-scroll">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-auto md:w-[428px] md:h-auto p-[10px] md:p-[40px] w-[400px] grid-blue2 bg-white/40 flex flex-col">
           <p className="mb-6 p-2 text-[24px] h-2/3  w-full font-grey-reg leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
           <div className="flex flex-row items-center w-full gap-5 mb-4 md:justfy-center">
           {t.image}
           <div className="flex flex-col text-[20px]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
       </div>
        ))}
    </div>
    <div className="flex gap-6 animate-loop-scroll hover:animate-stop-scroll">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-auto md:w-[428px] md:h-auto p-[10px] md:p-[40px] w-[400px] grid-blue2 bg-white/40 flex flex-col">
           <p className="mb-6 p-2 text-[24px] h-2/3 w-full font-grey-reg leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
           <div className="flex flex-row items-center w-full gap-5 mb-4 md:justfy-center">
           {t.image}
           <div className="flex flex-col text-[20px]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
       </div>
        ))}
    </div>
    </div>
    <div className="flex relative gap-6 mt-[20px]">
    <div className="relative flex gap-6 animate-loop-scroll hover:animate-stop-scroll right-60 hover">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-auto md:w-[428px]   md:h-auto p-[10px] md:p-[40px] w-[400px] grid-blue2 bg-white/40 flex flex-col">
           <p className="mb-6 p-2 text-[24px] h-2/3 font-grey-reg leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
           <div className="flex flex-row items-center w-full gap-3 5b-4 md:justif-center">
           {t.image}
           <div className="flex flex-col text-[20px]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
       </div>
        ))}
    </div>
    <div className="relative flex gap-6 animate-loop-scroll hover:animate-stop-scroll right-60 hover ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-auto md:w-[428px]  md:h-auto p-[10px] md:p-[40px] w-[400px] grid-blue2 bg-white/40 flex flex-col">
           <p className="mb-6 p-2 text-[24px] h-2/3 font-grey-reg leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
           <div className="flex flex-row items-center w-full gap-35mb-4 md:justiy-center">
           {t.image}
           <div className="flex flex-col text-[20px]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
       </div>
        ))}
    </div>
    <div className="relative flex gap-6 animate-loop-scroll hover:animate-stop-scroll right-60 hover ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-auto md:w-[428px]  md:h-auto p-[10px] md:p-[40px] w-[400px] grid-blue2 bg-white/40 flex flex-col">
           <p className="mb-6 p-2 text-[24px] h-2/3 font-grey-reg leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
           <div className="flex flex-row items-center w-full gap-35mb-4 md:justiy-center">
           {t.image}
           <div className="flex flex-col text-[20px]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
       </div>
        ))}
    </div>
    </div>
    <div className="flex gap-6 mt-[20px]">
    <div className="flex gap-6 animate-loop-scroll hover:animate-stop-scroll ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-auto md:w-[428px] md:h-auto p-[10px] md:p-[40px] w-[400px] grid-blue2 bg-white/40 flex flex-col">
           <p className="mb-6 p-2 text-[24px] h-2/3 font-grey-reg leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
           <div className="flex flex-row items-center w-full gap-5 mb-4 md:justfy-center">
           {t.image}
           <div className="flex flex-col text-[20px]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
       </div>
        ))}
    </div>
    <div className="flex gap-6 animate-loop-scroll hover:animate-stop-scroll ">
        {TESTIMONIALS.map((t, index) => (
           <div key={index} className="h-auto md:w-[428px] md:h-auto p-[10px] md:p-[40px] w-[400px] grid-blue2 bg-white/40 flex flex-col">
           <p className="mb-6 p-2 text-[24px] h-2/3 font-grey-reg leading-none tracking-wide text-left ">
               {t.testimonialz}
           </p>
           <div className="flex flex-row items-center w-full gap-5 mb-4 md:justfy-center">
           {t.image}
           <div className="flex flex-col text-[20px]">
               <h1 className="-mb-1 font-semibold ">{t.name}</h1>
               <h1>{t.handle}</h1>
           </div>
           </div>
       </div>
        ))}
    </div>
    </div>
    <div className="md:mt-[50px] mt-[25px] ml-10 mr-10 border-b-2"/>    
</div>
  )
}
export default Testimonials
    // <div className="flex relative gap-6 mt-[20px]">
    // <div className="relative flex gap-6 animate-loop-scroll hover:animate-stop-scroll right-60 hover">
    //     {TESTIMONIALS.map((t, index) => (
    //        <div key={index} className="h-[10em] md:w-[428px]   md:h-[10em] p-[10px] md:p-[20px] w-[400px] grid-blue border-[1px] flex flex-col">
    //        <div className="flex flex-row items-center w-full gap-3 mb-4">
    //        {t.image}
    //        <div className="flex flex-col text-[0.7rem]">
    //            <h1 className="-mb-1 font-semibold ">{t.name}</h1>
    //            <h1>{t.handle}</h1>
    //        </div>
    //        </div>
    //        <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
    //            {t.testimonialz}
    //        </p>
    //    </div>
    //     ))}
    // </div>
    // <div className="relative flex gap-6 animate-loop-scroll hover:animate-stop-scroll right-60 hover ">
    //     {TESTIMONIALS.map((t, index) => (
    //        <div key={index} className="h-[10em] md:w-[428px]  md:h-[10em] p-[10px] md:p-[20px] w-[400px] grid-blue border-[1px] flex flex-col">
    //        <div className="flex flex-row items-center w-full gap-3 mb-4">
    //        {t.image}
    //        <div className="flex flex-col text-[0.7rem]">
    //            <h1 className="-mb-1 font-semibold ">{t.name}</h1>
    //            <h1>{t.handle}</h1>
    //        </div>
    //        </div>
    //        <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
    //            {t.testimonialz}
    //        </p>
    //    </div>
    //     ))}
    // </div>
    // <div className="relative flex gap-6 animate-loop-scroll hover:animate-stop-scroll right-60 hover ">
    //     {TESTIMONIALS.map((t, index) => (
    //        <div key={index} className="h-[10em] md:w-[428px]  md:h-[10em] p-[10px] md:p-[20px] w-[400px] grid-blue border-[1px] flex flex-col">
    //        <div className="flex flex-row items-center w-full gap-3 mb-4">
    //        {t.image}
    //        <div className="flex flex-col text-[0.7rem]">
    //            <h1 className="-mb-1 font-semibold ">{t.name}</h1>
    //            <h1>{t.handle}</h1>
    //        </div>
    //        </div>
    //        <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
    //            {t.testimonialz}
    //        </p>
    //    </div>
    //     ))}
    // </div>
    // </div>