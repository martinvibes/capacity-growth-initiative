import Image from "next/image";
import React from "react";
import no_star from "../../../public/no-star.svg";

const Marque = () => {
  return (
    <div className="marquee-container overflow-x-hidden bg-[#019B83] text-white my-10 md:my-4">
      <div className="marquee-track py-3 space-x-8 items-center">
        {/* Duplicate this chunk twice for seamless scroll */}
        {[...Array(3)].map((_, i) => (
          <div className="flex space-x-8 items-center" key={i}>
            <span className="pl-8">Together</span>
            <span>We can</span>
            <Image src={no_star} alt="icon" />
            <span>Make a difference</span>
            <span>Together</span>
            <span>We can</span>
            <Image src={no_star} alt="icon" />
            <span>Make a difference</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marque;
