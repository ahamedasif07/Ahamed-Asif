// components/NeonText.js
import React from "react";
import "./sectionTitle.module.css"; // Custom styles

const SectionTitle = () => {
  return (
    <div className="w-full  bg-[#1b2431] pt-[70px] flex items-center justify-center">
      <h1 className="flex font-liberty font-thin text-[7rem] tracking-[-0.25em]">
        <span className="text-[#d9fdff] text-[70px] px-2 neon-shadow">A</span>
        <span className="text-[#d9fdff] text-[70px] px-2 neon-shadow transform translate-x-[-0.2rem] translate-y-[1rem] rotate-10 animate-flicker">
          B
        </span>
        <span className="text-[#d9fdff] text-[70px] px-2  neon-shadow">O</span>
        <span className="text-[#d9fdff] text-[70px] px-2 neon-shadow">U</span>
        <span className="text-[#d9fdff] text-[70px] px-2 neon-shadow">T</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
