"use client";
import { useState } from "react";

import Image from "next/image";
import hero_img1 from "../../public/hero-img1.svg";
import hero_img2 from "../../public/hero-img2.svg";
import SuccessModal from "@/app/components/SuccessModal";
import Marque from "@/app/components/Marque";


interface VolunteerFormProps {
  onSuccess?: () => void;
}

const VolunteerForm: React.FC<VolunteerFormProps> = ({ onSuccess }) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    cityState: "",
    phoneNumber: "",
    email: "",
    interests: {
      education: false,
      health: false,
      environmental: false,
      community: false,
      fundraising: false,
      socialMedia: false,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [name]: checked,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_URL || "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form Submitted Successfully!");
        setFormData({
          fullName: "",
          dateOfBirth: "",
          gender: "",
          address: "",
          cityState: "",
          phoneNumber: "",
          email: "",
          interests: {
            education: false,
            health: false,
            environmental: false,
            community: false,
            fundraising: false,
            socialMedia: false,
          },
        });
        setOpenSuccessModal(true);
        onSuccess?.();
      } else {
        console.error("Form submission Failed.");
      }
    } catch (error) {
      console.error("Error Submitting Form", error);
      alert("An error occurred. Please try again");
    }
  };

  return (
    <div className="  bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-fit px-3 mx-auto relative z-40 bg-white rounded-lg border-3 border-[#051609] ">
          <form
            onSubmit={handleSubmit}
            className="w-full z-40 relative "
            style={{ color: "#000000" }}
          >
            <div className=" mt-1 flex space-x-2 items-center text-center">
              <label
                className=" text-[12px] leading-[100%] text-[#051609] font-semibold font-serif"
                htmlFor="fullName"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-fit px-3 py-1 border-b border-gray-300 focus:outline-none "
              />
            </div>

            <div className="mt-1 flex space-x-2.5 items-center">
              <label className="block text-[12px] leading-[100%] text-[#051609] font-semibold font-serif">
                Gender:
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center text-[12px] text-[#051609] leading-[100%] font-semibold font-serif">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Male</span>
                </label>
                <label className="inline-flex items-center text-[12px] text-[#051609] leading-[100%] font-semibold font-serif">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Female</span>
                </label>
                <label className="inline-flex items-center text-[12px] text-[#051609] leading-[100%] font-semibold font-serif">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Others</span>
                </label>
              </div>
            </div>

            <div className="mb-1 flex justify-between space-x-2.5 items-center">
              <label
                className="block  text-[12px] leading-[100%] text-[#051609] font-semibold font-serif"
                htmlFor="address"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3  border-b border-gray-300 focus:outline-none "
              />
            </div>

            <div className="mb-1 flex justify-between space-x-2.5 items-center">
              <label
                className="block whitespace-nowrap  text-[12px] text-[#051609] leading-[100%] font-semibold font-serif"
                htmlFor="cityState"
              >
                City and State:
              </label>
              <input
                type="text"
                id="cityState"
                name="cityState"
                value={formData.cityState}
                onChange={handleInputChange}
                className="w-full px-3  border-b border-gray-300 focus:outline-none "
              />
            </div>

            <div className="mb-1 flex justify-between space-x-2.5 items-center">
              <label
                className="block whitespace-nowrap  text-[12px] text-[#051609] leading-[100%] font-semibold font-serif"
                htmlFor="phoneNumber"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-3  border-b border-gray-300 focus:outline-none "
              />
            </div>

            <div className="mb-1 flex justify-between space-x-2.5 items-center text-center">
              <label
                className="block whitespace-nowrap mb-2 text-[12px] leading-[100%]  text-[#051609] font-semibold font-serif"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3  border-b border-gray-300 focus:outline-none "
              />
            </div>

            <div className="mb-2 z-50 relative">
              <label className="block mb-1 text-[14px] leading-[100%] font-bold font-serif text-[#051609]">
                Areas of Interest (Select One or More)
              </label>
              <div className="">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="entrepreneurship"
                    checked={formData.interests.education}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">
                    Entrepreneurship
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="leadership"
                    checked={formData.interests.health}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">Leadership </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="technology"
                    checked={formData.interests.environmental}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">Technology</span>
                </label>
              </div>
            </div>

            <div className="mb-1">
              <label className="block mb-1 text-[14px] leading-[100%] font-bold font-serif text-[#051609]">
                Areas of Interest (Select One or More)
              </label>
              <div className="">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="education"
                    checked={formData.interests.education}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">
                    Education & Tutoring{" "}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="health"
                    checked={formData.interests.health}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">
                    Event planning{" "}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="environmental"
                    checked={formData.interests.environmental}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">Social Media</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="community"
                    checked={formData.interests.community}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">
                    partnership management{" "}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="fundraising"
                    checked={formData.interests.fundraising}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="font-serif text-[14px]">
                    Advisory to the Board
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className=" mb-1.5 lg:ml-16 ml-19 bg-[#051609]  cursor-pointer text-[#019B83] font-medium py-2 px-20 rounded focus:outline-none "
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="absolute top-[6rem] right-0 w-full max-w-md">
            <Image
              src={hero_img1}
              alt="Volunteer"
              width={350}
              height={350}
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-[3rem] right-[20rem]">
          <Image
            src={hero_img2}
            alt="Community"
            width={400}
            height={400}
            className=""
          />
        </div>

        <SuccessModal
          isOpen={openSuccessModal}
          onClose={() => setOpenSuccessModal(false)}
        />
      </div>
      <Marque />
    </div>
  );
};

export default VolunteerForm;
