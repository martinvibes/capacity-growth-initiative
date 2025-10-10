import Image from "next/image";
import React from "react";
import map from "../../../public/map.png";
import Link from "next/link";

const WhoWeAre: React.FC = () => {
  return (
    <section className="w-[87%]  mx-auto mb-20 mt-8">
      <div className=" text-center flex justify-center items-center">
        <Image src={map} alt="mapimage" />
      </div>
      <p className="text-[16px] font-normal leading-[180%] mt-14 text-[#051609]">
        Capacity Growth Initiative (CGI) is a dedicated organisation committed to unlocking the inherent potential within individuals and communities. We focus on providing essential skills, resources, and opportunities necessary for sustainable development  <span className="text-[#019B83] leading-[100%] text-[16px] font-semibold ">
          <Link href="/mission">Read More</Link>
        </span>
      </p>
    </section>
  );
};

export default WhoWeAre;
