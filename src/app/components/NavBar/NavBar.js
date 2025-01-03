"use client";
import React, { useState } from "react";
import aLogo from "../../../../public/assets/alogo.svg";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  const [togolMenu, setTogolMenu] = useState(false);
  return (
    <div className="max-w-screen-lg mx-auto px-10">
      <div className="flex justify-between items-center py-3 ">
        <div className="flex items-center justify-center">
          <Image height={50} width={50} src={aLogo} alt="logo"></Image>
          <h2 className="text-[30px] font-bold text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text">
            SIF
          </h2>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="md:block hidden">
            <ul className="flex gap-7 ">
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
          {/* mini menu items */}
          {/* <div
            className={`absolute ${
              togolMenu ? "block" : "hidden"
            } top-[58px] right-[35px] z-[1000] py-4 px-20 bg-black rounded-sm shadow-xl transform transition-all duration-500 ease-in-out ${
              togolMenu
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-20px]"
            }`}
          >
            <div className="md:hidden block">
              <ul className="flex flex-col gap-4 ">
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
          </div> */}

          <div
            onClick={() => setTogolMenu(!togolMenu)}
            className="mb-2 md:hidden block "
          >
            <h2 className="text-blue-500 text-[22px]">
              <RiMenu3Fill />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
