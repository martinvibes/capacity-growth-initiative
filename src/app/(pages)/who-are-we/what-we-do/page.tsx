import Image from "next/image";

import PageTemplate from "../../_components/PageTemplate";
import Line from "../../../../../public/Line.png";
import whatwedo from "../../../../../public/whatwedo.png";
import wedo1 from "../../../../../public/wedo1.svg";
import wedo2 from "../../../../../public/wedo2.svg";
import wedo3 from "../../../../../public/wedo3.svg";
import wedo4 from "../../../../../public/wedo4.svg";
import wedo5 from "../../../../../public/wedo5.svg";

export default function WhatWeDoPage() {
  return (
    <PageTemplate title="What We Do" showHeader={false}>
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            WHAT WE DO
          </h1>
        </div>
        <Image
          src={whatwedo}
          alt="Our Team in Action"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Goals Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#019B83] mb-4">
              What We Do
              <span className="block w-90  mx-auto mt-3 z-40 relative">
                <Image src={Line} alt="line" />
              </span>
            </h2>
            <p className="text-lg text[#051609] font-semibold max-w-3xl mx-auto mt-6">
              At capacity growth Initiative, Our works include
            </p>
          </div>

          {/* Goals Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-[#051609] p-[20px] bg-[#F9F9F9]  flex flex-col rounded-[10px]">
              <div>
                <Image src={wedo1} alt="wedo1" />
              </div>
              <h2 className="text-[#051609] my-4 text-[20px] leading-[180%] font-bold">
                capacity Building programs{" "}
              </h2>
              <p>
                We create programs that provide individuals and communities with
                the knowledge and tools to thrive.
              </p>
            </div>
            <div className="text-[#051609] p-[20px] bg-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={wedo2} alt="strategic1" />
              </div>
              <h2 className="text-[#051609] my-4 text-[20px] leading-[100%] font-bold">
                Strategic leadership
              </h2>
              <p>
                By collaborating with various stakeholders, we ensure a
                comprehensive approach to development and empowerment.
              </p>
            </div>
            <div className="text-[#051609] p-[20px] bg-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={wedo3} alt="wedo3" />
              </div>
              <h2 className="text-[#051609] my-4 text-[20px] leading-[100%] font-bold">
                Leadership Empowerment{" "}
              </h2>
              <p>
                We focus on nurturing leaders who can drive positive change and
                inspire others within their communities.
              </p>
            </div>
          </section>

          <section className="flex   mt-10 gap-8">
            <div className="text-[#051609] p-[20px] bg-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={wedo4} alt="wedo4" />
              </div>
              <h3 className="text-[#051609] my-4 text-[20px] leading-[100%] font-bold">
                Sustainable practice{" "}
              </h3>
              <p>
                Promoting sustainable development is at the core of our
                initiatives, ensuring long-term benefits and resilience.
              </p>
            </div>
            <div className="text-[#051609] p-[20px] bg-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={wedo5} alt="wedo5" />
              </div>
              <h3 className="text-[#051609] my-4 text-[20px] leading-[100%] font-bold">
                Innovation promotion{" "}
              </h3>
              <p>
                We support innovative solutions to tackle social, economic, and
                environmental challenges.
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageTemplate>
  );
}