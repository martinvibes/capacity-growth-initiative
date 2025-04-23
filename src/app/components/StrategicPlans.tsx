import React from "react";

const StrategicPlans: React.FC = () => {
  return (
    <section className="max-w-5xl text-[#051609]  md:max-w-full mx-auto md:px-4 py-5">
      <h1 className="text-2xl md:text-[40px] font-bold text-center">
        Strategic Plan
      </h1>
      <h3 className="text-2xl md:text-[30px] my-2 font-bold text-center">
        Introduction
      </h3>

      <div className="text-2xl">
        <p className="my-3">
          Capacity Growth Initiative (CGI) is committed to becoming the largest
          and most impactful nonprofit capacity development organisation in
          Africa. Our strategic focus is to empower individuals and communities
          in the areas of business, leadership, and technology.
        </p>
        <p className=" leading-9">
          To achieve this, CGI will implement a two-pronged strategy of:
          <br />
          1. Establishing Development Centres across cities and communities to
          serve as hubs for training, innovation, and leadership development.
          <br />
          2. Integrating CGI into Nigeria’s National Youth Service Corps
          (NYSC) as a recognised Community Development Service (CDS) group to
          mobilise and equip young leaders for capacity growth and sustainable
          impact.
        </p>
      </div>
    </section>
  );
};

export default StrategicPlans;
