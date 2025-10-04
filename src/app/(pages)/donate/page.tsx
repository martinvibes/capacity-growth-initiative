"use client";

import Image from "next/image";
import React, { useState } from "react";
import hero_img1 from "../../../../public/hero-img1.svg";
import hero_img2 from "../../../../public/hero-img2.svg";
import Ellipse1 from "../../../../public/Ellipse1.png";
import Ellipse2 from "../../../../public/Ellipse2.png";
// import { number } from "zod/v4-mini";

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        amount: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "There was an error sending your message. Please try again later.",
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
        <div>
          {/* Right side - Image */}
          <div className="relative">
            <div className="absolute right-0 top-0 w-[60%]  md:hidden  ">
              <Image src={Ellipse1} alt="ellipse" width={700} height={700} />
            </div>
            <div className="absolute right-0 hidden sm:hidden md:hidden lg:block overflow-hidden ">
              <Image
                src={hero_img1}
                alt="Africa map with human face collage"
                className="  "
                priority
              />
            </div>
          </div>

          {submitStatus && (
            <div
              className={`p-4 mb-6 rounded-md z-50 relative ${
                submitStatus.success
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <div className=" bg-[#F9F9F9] rounded-[10px] border border-[#F9F9F9]  w-[418px] py-1 h-[352px] px-10 relative z-50 shadow-2xl shadow-[#00000033] ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className=" flex items-center">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block  border-b border-gray-300 py-1 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className=" flex items-center">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block  border-b border-gray-300 py-1 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className=" flex items-center">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1  border-b border-gray-300 py-1 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className=" flex items-center">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  placeholder="Enter Your any Amount"
                  required
                  value={formData.amount}
                  onChange={handleChange}
                  className="mt-1  border-b border-gray-300  py-1 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className=" flex items-center gap-10 justify-center">
                <div className=" flex items-center gap-2">
                  <label
                    htmlFor="transfer"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Transfer
                  </label>
                  <input type="radio" id="transfer" name="transfer" required />
                </div>
                <div className=" flex items-center gap-2">
                  <label
                    htmlFor="cash"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cash
                  </label>
                  <input type="radio" id="cash" name="transfer" required />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#019B83] bg-[#051609] focus:outline-none focus:ring-2  ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom team image - Only show on larger screens */}
        <div className=" lg:block bottom-0  relative">
          <div className="">
            <Image
              src={Ellipse2}
              alt="Ellipse2"
              className="z-0"
              width={300}
              height={300}
            />
          </div>
          <div className="absolute  top-0 max-w-4xl mx-auto sm:bottom-0  sm:right-[25rem]  overflow-hidden">
            <Image
              src={hero_img2}
              alt="Team of diverse people"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
