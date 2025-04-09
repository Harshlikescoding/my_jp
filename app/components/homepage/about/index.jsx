'use client';
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg mb-8">
            {personalData.description}
          </p>
          <p className="font-medium  mb-5 text-[#16f2b3] text-xl uppercase">
            My Career Goal
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            As a passionate and ever-evolving developer, I believe that technology is not just a tool but a way to positively influence the world. My work is driven by curiosity, creativity, and a belief that growth comes through continuous learning. I aspire to create impactful, inclusive digital solutions while growing as a developer and empowering others through my craft.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={360}
            height={130}
            alt="Harsh Chaudhary"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;