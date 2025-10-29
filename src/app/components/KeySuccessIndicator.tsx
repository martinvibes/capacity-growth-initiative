import Image from "next/image";
import React from "react";
import Line from "../../../public/Line.png";

const KeySuccessIndicator: React.FC = () => {
  return (
    <section className="max-w-5xl md:max-w-full mx-auto md:px-4 py-5 w-[77%] mb-30">
      <h2 className="text-2xl text-[#019B83] leading-[100%] md:text-[20px] font-bold text-center mb-15">
        Key Success Indicators
        <span className="block w-[14rem] mx-auto mt-1">
          <Image src={Line} alt="line" />
        </span>
      </h2>
      <div className="space-y-4 text-start leading-relaxed md:text-[17px] text-lg">
        <p className="font-normal text-[16px] leading-[180%] text-[#051609]">
          Number of developments centers established and operational <br />{" "}
          Number of corps members engaged through the NYSC partnership <br />{" "}
          Percentage of alumni in leadership positions within key sectors <br />{" "}
          Community-level impact (measured through economic growth, employment
          rates, and leadership initiatives) <br /> Sustainability of programs
          and participant retention rates
        </p>
      </div>
    </section>
  );
};

export default KeySuccessIndicator;
