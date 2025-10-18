"use client";

import { useState } from "react";
import SuccessModal from "@/app/components/SuccessModal";
import VolunteerForm from "@/app/components/VolunteerForm";
import Image from "next/image";
import hero_img1 from "../../../../public/hero-img1.svg";
import hero_img2 from "../../../../public/hero-img2.svg";

export default function JoinUsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white relative z-50">
      {/* Hero Section */}
      <div className="relative bg-[#F9F9F9] text-[#051609] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Volunteer Team
              </h1>
              <p className="text-xl mb-8">
                Make a difference in your community by joining our team of
                dedicated volunteers. Your time and skills can help us create
                positive change.
              </p>
              <button
                onClick={handleOpenModal}
                className="bg-[#019B83] text-[#F9F9F9] z-40 relative px-8 py-3 rounded-full font-semibold hover:bg-[#113018] transition-colors"
              >
                Become a Volunteer
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src={hero_img1}
                  alt="Volunteer"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
            <div className="absolute bottom-[1rem] right-[40rem]">
              <Image
                src={hero_img2}
                alt="Community"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Form Modal */}
      {isModalOpen && (
        <VolunteerForm
          // setOpenModal={setIsModalOpen}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
        />
      )}

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}
