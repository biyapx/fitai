'use client";';

import Image from "next/image";
import heroimg from "../../public/hero.png";
import blur from "../../public/blur.svg";
const Hero = () => {
  return (
    <div className="flex flex-col bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-primary to-secondary flex items-center bg-clip-text py-10 justify-start font-bold mb-4 pb-4">
          AI Skills. Brighter Futures.
        </h1>
        <p className="text-md md:text-lg text-text max-w-2xl px-4">
          We turn Africa’s youth into AI‑powered problem‑solvers, closing the
          skills gap and unlocking millions of careers.
        </p>
      </div>
      <div className="-z-20">
        <Image
          width={100}
          height={100}
          src={blur}
          alt="blur"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          unoptimized
        />
      </div>
      <div className="flex justify-center items-center py-2">
        <Image className="object-cover" alt="" src={heroimg} unoptimized />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
