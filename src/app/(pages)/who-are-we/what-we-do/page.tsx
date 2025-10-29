import Image from "next/image";

import PageTemplate from "../../_components/PageTemplate";
import Line from "../../../../../public/Line.png";
import wedo1 from "../../../../../public/wedo1.svg";
import wedo2 from "../../../../../public/wedo2.svg";
import wedo3 from "../../../../../public/wedo3.svg";
import wedo4 from "../../../../../public/wedo4.png";
import wedo5 from "../../../../../public/wedo5.svg";
import circle1 from "../../../../../public/circle1.png";

export default function WhatWeDoPage() {
  return (
    <PageTemplate title="What We Do" showHeader={false}>
      {/* Goals Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[20px] font-bold text-[#019B83] mb-4 relative z-40">
              What We Do
              <span className="block w-30  mx-auto mt-1 z-40 relative">
                <Image src={Line} alt="line" className="z-40 relative" />
              </span>
            </h2>

            <div className="absolute w-[15rem] top-0 right-0">
              <Image src={circle1} alt="circle1" className="z-0" />
            </div>
            <p className="text-[20px] text[#051609] relative z-40 font-semibold leading-[180%] max-w-3xl mx-auto mt-3">
              At capacity growth Initiative, Our works include
            </p>
          </div>

          {/* Goals Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-40 w-[88%] md:ml-20 ml-7">
            <div className="text-[#051609] p-[20px]   flex flex-col relative rounded-[10px]">
              <div>
                <Image src={wedo1} alt="wedo1" className="z-40 relative" />
              </div>
              <h2 className="text-[#051609] relative z-40 my-4 text-[20px] leading-[180%] font-bold">
                capacity Building programs{" "}
              </h2>
              <p className="z-40 relative">
                We create programs that provide individuals and communities with
                the knowledge and tools to thrive.
              </p>
            </div>
            <div className="text-[#051609] p-[20px]  flex flex-col justify-center items-center rounded-[10px] relative z-40">
              <div>
                <Image src={wedo2} alt="strategic1" className="z-40 relative" />
              </div>
              <h2 className="text-[#051609] z-40 relative my-4 text-[20px] leading-[100%] font-bold">
                Strategic leadership
              </h2>
              <p className="z-40 relative">
                By collaborating with various stakeholders, we ensure a
                comprehensive approach to development and empowerment.
              </p>
              <div className="absolute w-[15rem] top-[13rem] left-[10rem] ">
                <Image src={circle1} alt="circle1" className="z-0" />
              </div>
            </div>
            <div className="text-[#051609] p-[20px]  flex flex-col rounded-[10px]">
              <div>
                <Image src={wedo3} alt="wedo3" className="z-40 relative" />
              </div>
              <h2 className="text-[#051609] my-4 text-[20px] leading-[100%] font-bold">
                Leadership Empowerment{" "}
              </h2>
              <p className="z-40 relative">
                We focus on nurturing leaders who can drive positive change and
                inspire others within their communities.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2  mt-10 gap-8 relative z-40 md:w-[60%] md:ml-60 ml-7">
            <div className="text-[#051609] p-[20px] flex flex-col justify-center items-center rounded-[10px]">
              <div>
                <Image
                  src={wedo4}
                  alt="wedo4"
                  className="z-40 relative"
                  width={300}
                  height={200}
                />
              </div>
              <h3 className="text-[#051609] my-4 text-[20px] leading-[100%] font-bold">
                Sustainable practice{" "}
              </h3>
              <p className="z-40 relative leading-[180%] ">
                Promoting sustainable development is at the core of our
                initiatives, ensuring long-term benefits and resilience.
              </p>
            </div>
            <div className="text-[#051609] p-[20px]  flex flex-col justify-center items-center rounded-[10px]">
              <div>
                <Image src={wedo5} alt="wedo5" className="z-40 relative " />
              </div>
              <h3 className="text-[#051609] my-4 text-[20px] leading-[100%] font-bold">
                Innovation promotion{" "}
              </h3>
              <p className="z-40 relative leading-[180%] ">
                We support innovative solutions to tackle social, economic, and
                environmental challenges.
              </p>
            </div>
          </section>
          <div className="absolute w-[13rem] left-0 bottom-0 ">
            <Image src={circle1} alt="circle1" className="z-0" />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
