"use client";
import Link from "next/link"; 
import { TypeAnimation } from "react-type-animation";
import React, {useState} from "react";
import {motion} from "framer-motion"; 
import { Variants } from "../app/variants";

export default function Home() {
  const [textColor, setTextColor] = useState('white');
  const variants = Variants;
  
  return (
    <motion.div className="h-screen flex flex-col items-center justify-center text-justify p-[1.25em] mx-[5%] font-[family-name:var(--font-geist-sans)]"
      variants={variants}
      initial='initial'
      animate='visible'>
      <div className="text-2xl min-sm:text-4xl min-2xl:text-6xl" style={{color:textColor}}>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[ 
          'Happy Anniversary!',
          500, 
          () => setTextColor('rgb(251, 200, 35)'),
          'March 28, 2025',
          500, 
          () => setTextColor('rgb(246, 141, 141)'),
          'Trang ❤️ Kyle', 
          500, 
          () =>setTextColor('rgb(93, 254, 168)'),
        ]}
        speed={30}
        repeat={Infinity}
      />
      </div>
      <h1 className="text-lg min-sm:text-2xl min-2xl:text-4xl my-[1em]">
        To celebrate on our anniversary, you will play a simple guessing game! For each question, you will be given an anime image generated by AI based on our actual picture. Then, you will guess where and when the original picture was taken based on the anime image! 
      </h1>
      <h1 className="text-lg min-sm:text-2xl min-2xl:text-4xl my-[1em]">
        Good luck best friend ❤️🥰  
      </h1>
      <Link href="/questions" className="min-sm:text-2xl text-lg rounded-[8px] border-solid border-[2px] m-[0.5rem] border-black px-[1.2em] py-[0.6em] font-medium bg-[#C1C3C1] cursor-pointer text-black hover:bg-[#1A97DB] hover:text-white">
        I'm Ready
      </Link>
    </motion.div>
  );
}
