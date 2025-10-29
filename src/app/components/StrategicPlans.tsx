import Image from "next/image";
import React from "react";
import Line from "../../../public/Line.png";

const StrategicPlans: React.FC = () => {
  return (
    <section className="max-w-5xl md:max-w-full mx-auto md:px-4 py-5 w-[77%] my-20 ">
      <h1 className="text-2xl text-[#019B83] leading-[100%] md:text-[20px] font-bold text-center mb-10">
        Strategic Plan
        <span className="block w-[8rem]   mx-auto mt-1">
          <Image src={Line} alt="line" />
        </span>
      </h1>
      <h3 className="text-[22px] leading-[100%] text-[#051609] md:text-[25px]  font-bold text-center mb-5">
        Introduction
      </h3>

      <div className=" text-start justify-center items-center">
        <p  className="font-normal text-[16px] leading-[180%] text-[#051609] ">
          Capacity Growth Initiative (CGI) is committed to becoming the largest
          and most impactful nonprofit capacity development organisation in
          Africa. Our strategic focus is to empower individuals and communities
          in the areas of business, leadership, and technology.
        </p>
        <div
         className="font-normal text-[16px] leading-[200%] text-[#051609]">
          <p>To achieve this, CGI will implement a two-pronged strategy of:</p>
          <ol className="list-decimal   ">
            <li>  Establishing Development Centres across cities and communities to
          serve as hubs for training, innovation, and leadership development.</li>
            <li> Integrating CGI into Nigeria’s National Youth Service Corps (NYSC)
          as a recognised Community Development Service (CDS) group to mobilise
          and equip young leaders for capacity growth and sustainable impact.</li>
          </ol>
          
         
        </div>
      </div>
    </section>
  );
};

export default StrategicPlans;
