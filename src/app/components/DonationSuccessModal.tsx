"use client";

import Image from "next/image";
import React from "react";

type DonationSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DonationSuccessModal: React.FC<DonationSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[-7rem] font-inter inter text-center inset-0 z-auto flex items-center bottom-[-7rem] justify-center   ">
      <div className=" text-center max-w-md mx-4 bg-[#F9F9F9] rounded-[10px] border border-[#F9F9F9]   h-[400px]  sm:w-[420px] py-1 space-y-10 px-10 relative z-50 ">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="mx-auto"
        />

        <div className="space-y-5 ">
          <div className="space-y-3 text-center text-[#000000]">
            <p className="text-[#000000] text-[19px] font-bold leading-[100%">
              2033106960
            </p>
            <p className="text-[#000000] text-[19px] font-bold leading-[100%">
              First Bank
            </p>
            <p className="text-[#000000] text-[19px] font-bold leading-[100%">
              Palantra International Limited
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full font-medium cursor-pointer text-[#019B83] bg-[#051609] py-2 px-4 rounded-md  text-[25px] leading-[100%] transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default DonationSuccessModal;
