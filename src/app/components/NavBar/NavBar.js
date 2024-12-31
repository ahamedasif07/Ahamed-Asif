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
        <ul className="flex gap-2">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
