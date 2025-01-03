"use client";
import React from "react";
import Image from "next/image";
import asifImage from "../../../../public/assets/asif12_image-.png";
import Bubbles from "../Bubbles";

const Hero = () => {
  return (
    <div className="relative hero">
      {/* Bubbles Component */}
      <Bubbles />

      {/* Hero Content */}
      <section className="py-8 content">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Left Section: Text */}
            <div className="w-1/2 pl-[230px] text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A4576]">
                Hi, I'm Asif Hosen
              </h1>
              <h1 className="text-4xl pt-4 mr-7 lg:text-5xl font-bold text-gray-800">
                <a href="https://git.io/typing-svg">
                  <img
                    src="https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=46&pause=1000&color=2563EB&width=491&height=66&lines=+Front-End+Developer"
                    alt="Typing SVG"
                  />
                </a>
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed">
                Let's collaborate to turn your vision into a stunning web
                application that stands out!
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  My Projects
                </a>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="flex w-1/2 justify-end mt-10 lg:mt-0 relative">
              <div className="absolute inset-0 mt-[220px] mr-[26px] flex justify-center items-center">
                <div className="w-[370px] h-[370px] rounded-full bg-[#275298] animate-pulseLight"></div>
              </div>
              <Image
                src={asifImage}
                alt="Asif Hosen"
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>

            <style jsx>
              {`
                @keyframes pulseLight {
                  0% {
                    box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.5),
                      0 0 30px 10px rgba(59, 130, 246, 0.4),
                      0 0 60px 20px rgba(59, 130, 246, 0.3);
                  }
                  50% {
                    box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.6),
                      0 0 40px 20px rgba(59, 130, 246, 0.5),
                      0 0 80px 40px rgba(59, 130, 246, 0.4);
                  }
                  100% {
                    box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.5),
                      0 0 30px 10px rgba(59, 130, 246, 0.4),
                      0 0 60px 20px rgba(59, 130, 246, 0.3);
                  }
                }
                .animate-pulseLight {
                  animation: pulseLight 2s infinite;
                }
              `}
            </style>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
