import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { X } from "lucide-react";

interface VolunteerFormProps {
  setOpenModal: (open: boolean) => void;
}

const VolunteerForm: React.FC<VolunteerFormProps> = ({ setOpenModal }) => {
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
      } else {
        console.error("Form submission Failed.");
      }
    } catch (error) {
      console.error("Error Submitting Form", error);
      alert("An error occurred. Please try again");
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#00000083] backdrop-blur-2xl">
      <div className="w-xl p-6 mx-auto relative bg-white rounded-lg shadow">
        <X
          width={24}
          height={24}
          className="absolute top-3 right-4 cursor-pointer"
          onClick={() => setOpenModal(false)}
        />
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 mt-5 flex justify-between space-x-2.5 items-center">
            <label className="block mb-2 whitespace-nowrap" htmlFor="fullName">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="mb-4 flex justify-between space-x-2.5 items-center">
            <label className="block mb-2" htmlFor="dateOfBirth">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="mb-4 flex space-x-2.5 items-center">
            <label className="block mb-2">Gender:</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
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
              <label className="inline-flex items-center">
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
            </div>
          </div>

          <div className="mb-4 flex justify-between space-x-2.5 items-center">
            <label className="block mb-2" htmlFor="address">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="mb-4 flex justify-between space-x-2.5 items-center">
            <label className="block whitespace-nowrap mb-2" htmlFor="cityState">
              City and State:
            </label>
            <input
              type="text"
              id="cityState"
              name="cityState"
              value={formData.cityState}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="mb-4 flex justify-between space-x-2.5 items-center">
            <label
              className="block whitespace-nowrap mb-2"
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
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="mb-4 flex justify-between space-x-2.5 items-center">
            <label className="block whitespace-nowrap mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Areas of Interest (Select One or More)
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="education"
                  checked={formData.interests.education}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span>Education & Tutoring</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="health"
                  checked={formData.interests.health}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span>Health & Wellness Programs</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="environmental"
                  checked={formData.interests.environmental}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span>Environmental Conservation</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="community"
                  checked={formData.interests.community}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span>Community Development</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="fundraising"
                  checked={formData.interests.fundraising}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span>Fundraising & Events</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="socialMedia"
                  checked={formData.interests.socialMedia}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span>Social Media & Advocacy</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-700 cursor-pointer text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
      </div>

      {openSuccessModal && (
        <SuccessModal
          setOpenModal={setOpenModal}
          setOpenSuccessModal={setOpenSuccessModal}
        />
      )}
    </div>
  );
};

export default VolunteerForm;
