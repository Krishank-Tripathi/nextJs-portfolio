import React from "react";
import Image from 'next/image'
import AnimatedText from "./AnimatedText";
import { userData } from "@constants/data";

export default function Hero() {
  const colors = [
    "from-teal-500 via-purple-500 to-orange-500", 
    "from-teal-500 via-purple-500 to-pink-500", 
    "from-teal-500 via-purple-500 to-green-500", 
    "from-teal-500 via-purple-500 to-blue-500"
  ];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
     
      <div className="mx-auto text-center md:text-left lg:p-20">
          <AnimatedText text="Developer." color={colors[0]}/>
          <AnimatedText text="Designer." color={colors[1]}/>
          <AnimatedText text="Programmer." color={colors[2]}/>
          <AnimatedText text="Tech Enthusiast." color={colors[3]}/>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
            <Image
          src={userData.avatarUrl}
          width={350}
          height={450}
          alt="Picture of the author"
        />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">This is me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}