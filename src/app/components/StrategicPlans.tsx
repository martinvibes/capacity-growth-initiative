import Image from "next/image";
import React from "react";
import Line from "../../../public/Line.png";

const StrategicPlans: React.FC = () => {
  return (
    <section className="max-w-5xl md:max-w-full mx-auto md:px-4 py-5 w-[87%] ">
      <h1 className="text-2xl text-[#019B83] leading-[100%] md:text-[33px] font-bold text-center mb-6">
        Strategic Plan
        <span className="block w-[23rem]   mx-auto mt-3">
          <Image src={Line} alt="line" />
        </span>
      </h1>
      <h3 className="text-[22px] leading-[100%z] text-[#051609] md:text-[30px] my-2 font-bold text-center">
        Introduction
      </h3>

      <div className="space-y-4 text-start leading-relaxed md:text-[20px] justify-center items-center text-lg">
        <p>
          Capacity Growth Initiative (CGI) is committed to becoming the largest
          and most impactful nonprofit capacity development organisation in
          Africa. Our strategic focus is to empower individuals and communities
          in the areas of business, leadership, and technology.
        </p>
        <p>
          To achieve this, CGI will implement a two-pronged strategy of:
          <br />
          1. Establishing Development Centres across cities and communities to
          serve as hubs for training, innovation, and leadership development.
          <br />
          2. Integrating CGI into Nigeria’s National Youth Service Corps (NYSC)
          as a recognised Community Development Service (CDS) group to mobilise
          and equip young leaders for capacity growth and sustainable impact.
        </p>
      </div>
    </section>
  );
};

export default StrategicPlans;
