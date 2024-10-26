import { FaUserAstronaut } from "react-icons/fa6";
import { FaUserNinja } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import testimoney from "../assets/person1.jpg"
import testimoney1 from "../assets/person2.jpg"
import testimoney3 from "../assets/person3.jpg"
import testimoney4 from "../assets/person4.jpg"
import testimoney5 from "../assets/person5.jpg"
import testimoney6 from "../assets/person6.jpg"
import Image from "next/image";



export const TESTIMONIALS = [
    {
        name: "Okpokonti" ,
        handle: "@okpokonti213",
        testimonialz: "“LitePay made my life easier by streamlining my payments.”",
        image: <Image src={testimoney} alt={"me"} className="rounded-full w-[60px]" />
    },
    {
        name: "Okoro" ,
        handle: "@koro-koro",
        testimonialz: "“I love LitePay's user-friendly interface and fast transaction speeds.”",
         image: <Image src={testimoney1} alt={"me"} className="rounded-full  w-[60px]"  />
    },
    {
        name: "Emeh" ,
        handle: "@emezuwakz",
        testimonialz: "“LitePay is the best payment app I've ever used!”",
         image: <Image src={testimoney3} alt={"me"} className="  rounded-full w-[60px]"  />
    },
    {
        name: "Ikeme" ,
        handle: "@kemekeme21",
        testimonialz: "“LitePay saved me time and money.”",
         image: <Image src={testimoney4} alt={"me"} className="rounded-full w-[60px]"  />
    },
    {
        name: "Ozuor" ,
        handle: "@zuzuwowo45",
        testimonialz: "“I'm so glad I switched to LitePay.”",
         image: <Image src={testimoney5} alt={"me"} className="rounded-full w-[60px]"  />
    },
    {
        name: "Akpors" ,
        handle: "@kpozartz",
        testimonialz: "“LitePay is a must-have for anyone who wants to simplify their payments.”",
         image: <Image src={testimoney6} alt={"me"} className="rounded-full w-[60px]"  />
    },
]