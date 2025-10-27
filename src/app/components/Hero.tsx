"use client";

import Image from "next/image";
import React from "react";
import hero_img1 from "../../../public/hero-img1.svg";
import hero_img2 from "../../../public/hero-img2.svg";
import Ellipse1 from "../../../public/Ellipse1.png";
import Ellipse4 from "../../../public/Ellipse4.png";
import Ellipse2 from "../../../public/Ellipse2.png";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white min-h-dvh">
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="absolute md:right-0 hidden md:block md:top-0 overflow-hidden bottom-10 ">
          <Image src={Ellipse1} alt="ellipse" width={700} height={500} />
        </div>

        <div className="absolute overflow-hidden md:hidden bottom-[-1.5rem] ">
          <Image src={Ellipse4} alt="ellipse" width={700} height={700} />
        </div>

        <div className="absolute right-0 top-0 md:hidden overflow-hidden ">
          <Image
            src={hero_img1}
            alt="Africa map with human face collage"
            className="w-[9rem]  "
            priority
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Left side - Text content */}
          <div className="w-full gap-[40px]">
            <div className="md:text-[56px] text-[26px] w-full md:w-[670px] font-extrabold z-50 relative  text-[#051609] leading-[100%]">
              <p className="md:text-[#019B83] text mb-2">Empowering Growth,</p>
              <p className="md:text-[#019B83]">Expanding Possibilities:</p>
            </div>

            <p className="mt-8 font-normal w-full md:w-[665px] md:h-[126px] text-[17px] font-[inter] text-[#051609] relative z-50  leading-[140%]">
              We empower individuals, groups and communities to unlock their
              full potential by providing innovative tools, strategic planning,
              and strong partnerships. Our focus is on driving sustainable
              growth through entrepreneurship, leadership, and technology. By
              combining forward-thinking solutions with collaborative efforts,
              we create lasting impact and help build a more resilient and
              inclusive future.
            </p>

            <div className="mt-[34px] mb-[30px] relative z-50 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="p-[20px] cursor-pointer w-[160px] h-[59px] bg-[#019B83] text-[16px] leading-[100%] font-semibold text-white  rounded-[8px] inline-flex justify-center items-center focus:outline-none border-[3px] border-[#F9F9F9]">
                <Link href="/donate">Donate</Link>
              </button>
              <button className="p-[20px] cursor-pointer w-[160px] h-[59px] border-[1px] hover:scale-105 border-[#019B83] text-[#019B83] text-[16px] leading-[100%] hover:bg-green-5 font-semibold inline-flex justify-center items-center  rounded-[3px] focus:outline-none ">
                <Link href="/form">Join Us</Link>
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="absolute right-[10rem] hidden md:block overflow-hidden ">
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
        <div className=" md::block  relative">
          <div className="absolute overflow-hidden top-[-7rem]  hidden md:block">
            <Image
              src={Ellipse2}
              alt="Ellipse2"
              className="z-0"
              width={200}
              height={100}
            />
          </div>
          <div className="absolute hidden md:block top-[-9rem] right-[10rem]  overflow-hidden">
            <Image
              src={hero_img2}
              alt="Team of diverse people"
              className="w-[50%]"
            />
          </div>
        </div>
      </div>

      {/* Mobile team image */}
      <div className="md:hidden px-4">
        <div className="relative top-[-6rem] z-30 overflow-hidden ">
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
