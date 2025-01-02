import Image from "next/image";
import React from "react";
import asifImage from "../../../../public/assets/asif_image-.png";

const Hero = () => {
  return (
    <div>
      <section className=" py-8">
        <div className=" max-w-screen-2xl mx-auto  ">
          <div className="flex justify-between  items-center">
            {/* Left Section: Text */}
            <div className=" w-1/2 pl-[230px] text-center lg:text-left">
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

              <p className=" text-gray-700 text-lg leading-relaxed">
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
            <div className="flex w-1/2 justify-end  mt-10 lg:mt-0">
              <Image
                src={asifImage}
                alt="image"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
