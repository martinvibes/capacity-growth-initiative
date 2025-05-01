import Image from "next/image";
import React from "react";
import successImage from "../../../public/capacity_growth_success.svg";

interface SuccessModalProps {
  setOpenModal: (openModal: boolean) => void;
  setOpenSuccessModal: (openSuccessModal: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  setOpenModal,
  setOpenSuccessModal,
}) => {
  function hanleCloseModal() {
    setOpenModal(false);
    setOpenSuccessModal(false);
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#000000da] backdrop-blur-md">
      <div className="w-xl text-center p-6 mx-auto bg-white rounded-lg shadow">
        <Image src={successImage} alt="success" className=" mx-auto" />
        <h1 className="text-lg my-4">Welcome to Capacity Growth Initiative</h1>
        <button
          onClick={hanleCloseModal}
          className=" bg-black text-[#69A179] hover:text-black cursor-pointer rounded-lg px-4 py-2 mt-4 hover:bg-[#6ead80] transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
