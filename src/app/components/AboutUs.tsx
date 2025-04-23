import Image from "next/image";
import React from "react";
import aboutus1 from "../../../public/aboutus1.svg";
import EmpowermentPrograms from "./Empower";
import WhoWeAre from "./WhoWeAre";
import MeetOurTeam from "./MeetOurTeam";
import StrategicGoals from "./StrategicGoals";
import StrategicPlans from "./StrategicPlans";
import WhatWeDo from "./WhatWeDoSection";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="mx-5 md:mx-24 mt-8 md:mt-16 mb-4 text-[#051609]"
    >
      <div className="text-center">
        <h1 className="text-[#051609] font-bold mb-2 text-[40px]">AboutUs</h1>
        <Image className="mx-auto" src={aboutus1} alt="about img" />
      </div>

      <div className="text-[24px] font-normal mt-5">
        <h1 className="text-[40px] text-center font-bold mb-2">
          Mission Statement
        </h1>
        <p>
          At Capacity Growth Initiative (CGI), we empower individuals and
          communities through skills, resources, and opportunities for
          sustainable development.{" "}
        </p>
        <p className="pt-3">
          Our innovative programs and partnerships build leadership, boost
          business resilience, and drive tech-driven transformation across all
          sectors.
        </p>
      </div>

      <div className="text-[24px] font-normal my-6">
        <h1 className="text-[40px] text-center font-bold mb-2">
          Vission Statement
        </h1>
        <p>
          Our vision is to be Africa’s leading nonprofit in capacity
          development, empowering individuals and communities in business,
          leadership, and technology. We aspire to build a strong CGI alumni
          network driving innovation, growth, and sustainable change across the
          continent.
        </p>
      </div>

      <div className="text-[24px] font-normal">
        <h1 className="text-[40px] text-center font-bold mb-2">
          Our Objectives
        </h1>
        <p>
          At Capacity Growth Initiative (CGI), we aim to empower individuals and
          communities by building capacity in Business, Leadership, and
          Technology, equipping them with the skills and resources to thrive in
          a fast-changing world.
        </p>
      </div>

      <EmpowermentPrograms />
      <WhoWeAre />
      <MeetOurTeam />
      <StrategicPlans />
      <StrategicGoals />
      <WhatWeDo />
    </div>
  );
};

export default AboutUs;
