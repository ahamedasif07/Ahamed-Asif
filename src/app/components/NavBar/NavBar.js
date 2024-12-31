import React from "react";
import aLogo from "../../../../public/assets/alogo.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center py-3 ">
        <div className="flex items-center justify-center">
          <Image height={50} width={50} src={aLogo} alt="logo"></Image>
          <h2 className="text-[30px] font-bold text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text">
            SIF
          </h2>
        </div>
        <ul className="flex gap-7">
          <li className="text-[17px] font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 hover:border-gradient-to-r hover:from-[#63c7ee] hover:to-[#1A5685] transition-transform duration-300 transform-origin-center">
            Home
          </li>
          <li className="text-[17px] font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 hover:border-gradient-to-r hover:from-[#63c7ee] hover:to-[#1A5685] transition-transform duration-300 transform-origin-center">
            About
          </li>
          <li className="text-[17px] font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 hover:border-gradient-to-r hover:from-[#63c7ee] hover:to-[#1A5685] transition-transform duration-300 transform-origin-center">
            Skills
          </li>
          <li className="text-[17px] font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 hover:border-gradient-to-r hover:from-[#63c7ee] hover:to-[#1A5685] transition-transform duration-300 transform-origin-center">
            Projects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
