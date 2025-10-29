"use client";

import Image from "next/image";
import hero_img1 from "../../../public/hero-img1.svg";
import hero_img2 from "../../../public/hero-img2.svg";
import Ellipse1 from "../../../public/Ellipse1.png";
import Ellipse2 from "../../../public/Ellipse2.png";
import { motion } from "framer-motion";
import Marque from "./Marque";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F8FCFA] flex items-center min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
      {/* Background shapes */}
      <div className="absolute hidden md:block   bottom-10 overflow-hidden pointer-events-none">
        <Image src={Ellipse2} alt="ellipse" width={300} height={300} />
      </div>
      <div className="absolute hidden md:block -top-10 right-0 bottom-0 overflow-hidden pointer-events-none">
        <Image src={Ellipse1} alt="ellipse" width={630} height={100} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-5 md:space-y-16 text-center lg:text-left">
            <motion.h1
              // className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#009879]"
              className="md:text-[56px] text-start md:-mt-10 text-[26px] w-full md:w-[43rem] font-extrabold z-50 relative  text-[#051609] leading-[100%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="md:text-[#019B83] text ">Empowering Growth,</p>
              <p className="md:text-[#019B83]">Expanding Possibilities:</p>
            </motion.h1>

            <motion.p
              className=" text-start font-normal w-[80%] md:w-full text-[10px] md:text-[15px] font-[inter] text-[#051609] relative z-50  leading-[140%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We empower individuals, groups and communities to unlock their
              full potential by providing innovative tools, strategic planning,
              and strong partnerships. Our focus is on driving sustainable
              growth through entrepreneurship, leadership, and technology. By
              combining forward-thinking solutions with collaborative efforts,
              we create lasting impact and help build a more resilient and
              inclusive future.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>
                <Link
                  href="/donate"
                  className="p-[20px] cursor-pointer w-[160px] h-[59px] bg-[#019B83] text-[16px] leading-[100%] font-semibold text-white  rounded-[8px] inline-flex justify-center items-center focus:outline-none border-[3px] border-[#F9F9F9]"
                >
                  Donate
                </Link>
              </span>
              <span>
                <Link
                  href="/form"
                  className="p-[20px] cursor-pointer w-[160px] h-[59px] border-[1px] hover:scale-105 border-[#019B83] text-[#019B83] text-[16px] leading-[100%] hover:bg-green-5 font-semibold inline-flex justify-center items-center  rounded-[3px] focus:outline-none "
                >
                  Join Us
                </Link>
              </span>
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mt-8 lg:mt-0">
            <motion.div
              className="absolute -top-60 -right-10 w-[50%]   md:right-0 md:top-40 -translate-y-1/2 md:w-full md:max-w-[90%] sm:max-w-[500px] md:h-[70%] sm:h-[80%]  overflow-hidden "
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Placeholder for Africa map collage */}
              <div className="w-full h-full  flex items-center justify-center">
                <Image
                  src={hero_img1}
                  alt="Africa map with human face collage"
                  className="w-[18rem]  "
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute hidden md:block   md:-left-40 md:bottom-0 w-[60%] max-w-[300px] h-[60%] max-h-[300px] overflow-hidden "
              initial={{ opacity: 0, y: 40, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Placeholder for team photo */}
              <div className="w-full h-full  flex items-center justify-center">
                <Image src={hero_img2} alt="Team of diverse people" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee at bottom */}

      <div className=" absolute bottom-0 w-full">
        <Marque />
      </div>
    </section>
  );
};

export default HeroSection;
