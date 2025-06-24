"use client";

import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl pt-5 mx-auto sticky z-40 flex justify-between items-center p-2">
      <Link
        href="/"
        className="font-bold text-2xl md:text-3xl text-transparent bg-gradient-to-r from-primary to-secondary flex items-center bg-clip-text"
      >
        <Image src={logo} alt="" className="w-12 h-12 p-2" unoptimized />
        FitAI
      </Link>
      <Link
        href={"#contact"}
        className="font-bold text-md flex items-center bg-secondary/10 rounded-xl py-2 px-4 text-secondary/80"
      >
        Contact Us
      </Link>
    </header>
  );
};

export default Navbar;
