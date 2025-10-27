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
    <section className="relative w-full bg-[#F8FCFA] flex items-center min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-50px)]">
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
              <button className="p-[20px] cursor-pointer w-[160px] h-[59px] bg-[#019B83] text-[16px] leading-[100%] font-semibold text-white  rounded-[8px] inline-flex justify-center items-center focus:outline-none border-[3px] border-[#F9F9F9]">
                <Link href="/donate">Donate</Link>
              </button>
              <button className="p-[20px] cursor-pointer w-[160px] h-[59px] border-[1px] hover:scale-105 border-[#019B83] text-[#019B83] text-[16px] leading-[100%] hover:bg-green-5 font-semibold inline-flex justify-center items-center  rounded-[3px] focus:outline-none ">
                <Link href="/form">Join Us</Link>
              </button>
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

      <div className="absolute bottom-0 left-0 right-0 ">
        <Marque />
      </div>
    </section>
  );
};

export default HeroSection;

// "use client";

// import Image from "next/image";
// import React from "react";
//
// import Link from "next/link";
// import Marque from "./Marque";

// const Hero: React.FC = () => {
//   return (
//     <div className=" ">
//       <div className=" w-full  h-screen relative flex-col flex   bg-white">
//         <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//           <div className="absolute md:right-0 hidden md:block md:top-0  ">
//             <Image src={Ellipse1} alt="ellipse" width={700} height={200} />
//           </div>

//           <div className="absolute overflow-hidden md:hidden bottom-[-1.5rem] ">
//             <Image src={Ellipse4} alt="ellipse" width={700} height={700} />
//           </div>

//           <div className="absolute right-0 top-0 md:hidden overflow-hidden ">
//             <Image
//               src={hero_img1}
//               alt="Africa map with human face collage"
//               className="w-[9rem]  "
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 ">
//             {/* Left side - Text content */}
//             <div className="w">
//               <div className="md:text-[56px] text-[26px] w-full md:w-[43rem] font-extrabold z-50 relative  text-[#051609] leading-[100%]">
//                 <p className="md:text-[#019B83] text ">
//                   Empowering Growth,
//                 </p>
//                 <p className="md:text-[#019B83]">Expanding Possibilities:</p>
//               </div>

//               <p className="mt- font-normal w-full text-[17px] font-[inter] text-[#051609] relative z-50  leading-[140%]">
//                 We empower individuals, groups and communities to unlock their
//                 full potential by providing innovative tools, strategic
//                 planning, and strong partnerships. Our focus is on driving
//                 sustainable growth through entrepreneurship, leadership, and
//                 technology. By combining forward-thinking solutions with
//                 collaborative efforts, we create lasting impact and help build a
//                 more resilient and inclusive future.
//               </p>

//               <div className="mt- mb- relative z-50 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
//                 <button className="p-[20px] cursor-pointer w-[160px] h-[59px] bg-[#019B83] text-[16px] leading-[100%] font-semibold text-white  rounded-[8px] inline-flex justify-center items-center focus:outline-none border-[3px] border-[#F9F9F9]">
//                   <Link href="/donate">Donate</Link>
//                 </button>
//                 <button className="p-[20px] cursor-pointer w-[160px] h-[59px] border-[1px] hover:scale-105 border-[#019B83] text-[#019B83] text-[16px] leading-[100%] hover:bg-green-5 font-semibold inline-flex justify-center items-center  rounded-[3px] focus:outline-none ">
//                   <Link href="/form">Join Us</Link>
//                 </button>
//               </div>
//             </div>

//             {/* Right side - Image */}
//             <div className="relative">
//               <div className="absolute right-[10rem] hidden md:block overflow-hidden ">
//                 <Image
//                   src={hero_img1}
//                   alt="Africa map with human face collage"
//                   className="w-[20rem]  "
//                   priority
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bottom team image - Only show on larger screens */}
//           <div className=" md::block  relative">
//             <div className="absolute overflow-hidden top-[-7rem]  hidden md:block">
//               <Image
//                 src={Ellipse2}
//                 alt="Ellipse2"
//                 className="z-0"
//                 width={200}
//                 height={100}
//               />
//             </div>
//             <div className="absolute hidden md:block top-[-9rem] right-[10rem]  overflow-hidden">
//               <Image
//                 src={hero_img2}
//                 alt="Team of diverse people"
//                 className="w-[50%]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mobile team image */}
//         <div className="md:hidden px-4">
//           <div className="relative top-[-6rem] z-30 overflow-hidden ">
//             <Image
//               src={hero_img2}
//               alt="Team of diverse people"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>

//         {/* Animation keyframes */}
//         <style jsx global>{`
//           @keyframes blob {
//             0% {
//               transform: translate(0px, 0px) scale(1);
//             }
//             33% {
//               transform: translate(30px, -50px) scale(1.1);
//             }
//             66% {
//               transform: translate(-20px, 20px) scale(0.9);
//             }
//             100% {
//               transform: translate(0px, 0px) scale(1);
//             }
//           }
//           .animate-blob {
//             animation: blob 7s infinite;
//           }
//           .animation-delay-2000 {
//             animation-delay: 2s;
//           }
//         `}</style>
//       </div>
//       <Marque/>
//     </div>
//   );
// };

// export default Hero;
