"use client";

import Image from "next/image";
import React from "react";
import hero_img1 from "../../../public/hero-img1.svg";
import hero_img2 from "../../../public/hero-img2.svg";
import Ellipse1 from "../../../public/Ellipse1.png";
import Ellipse2 from "../../../public/Ellipse2.png";

interface HeroProps {
  setOpenModal: (open: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setOpenModal }) => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
        <div className="absolute right-0 top-0 hidden sm:hidden md:hidden lg:block ">
          <Image src={Ellipse1} alt="ellipse" width={700} height={700} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Left side - Text content */}
          <div className="w-full">
            <div className="text-4xl md:text-[40px] lg:text-[45px] z-50 relative  font-extrabold text-[#051609] leading-[100%]">
              <p className="text-[#019B83] mb-2">Empowering Growth,</p>
              <p className="text-[#019B83]">Expanding Possibilities:</p>
            </div>

            <p className="mt-6 text-lg md:text-[14px] text-[#051609] relative z-50 leading-relaxed">
              We empower individuals, groups and communities to unlock their
              full potential by providing innovative tools, strategic planning,
              and strong partnerships. Our focus is on driving sustainable
              growth through entrepreneurship, leadership, and technology. By
              combining forward-thinking solutions with collaborative efforts,
              we create lasting impact and help build a more resilient and
              inclusive future.
            </p>

            <div className="mt-10 z-50 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-2 cursor-pointer bg-[#019B83] hover:bg-[#019B83] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none">
                Donate
              </button>
              <button
                onClick={() => setOpenModal(true)}
                className="px-8 py-2 border border-[#019B83] text-[#019B83] hover:bg-green-50 font-medium rounded-lg transition-all duration-300 transform cursor-pointer hover:scale-105 focus:outline-none "
              >
                Join Us
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="absolute right-[10rem] hidden sm:hidden md:hidden lg:block overflow-hidden ">
              <Image
                src={hero_img1}
                alt="Africa map with human face collage"
                className="w-[20rem]  "
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom team image - Only show on larger screens */}
        <div className="hidden lg:block bottom-0  relative">
          <div className=" hidden md:block">
            <Image
              src={Ellipse2}
              alt="Ellipse2"
              className="z-0"
              width={300}
              height={300}
            />
          </div>
          <div className="absolute max-w-4xl mx-auto top-[-4rem] right-[25rem]  overflow-hidden">
            <Image
              src={hero_img2}
              alt="Team of diverse people"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile team image */}
      <div className="lg:hidden px-4">
        <div className="relative  overflow-hidden ">
          <Image
            src={hero_img2}
            alt="Team of diverse people"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
