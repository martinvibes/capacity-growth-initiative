import Image from "next/image";
import React from "react";
import successImage from "../../../public/capacity_growth_success.svg";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-[#000000da] z-50 backdrop-blur-md">
      <div
        className="w-xl text-center p-6 mx-auto bg-white rounded-lg shadow"
        style={{ color: "#000000" }}
      >
        <Image src={successImage} alt="success" className="mx-auto " />
        <h1 className="text-lg my-4">Welcome to Capacity Growth Initiative</h1>
        <button
          onClick={onClose}
          className="bg-black text-[#69A179] hover:text-white cursor-pointer rounded-lg px-4 py-2 mt-4 hover:bg-[#6ead80] transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
