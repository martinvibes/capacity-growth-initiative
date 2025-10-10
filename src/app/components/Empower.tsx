import Image from "next/image";
import React from "react";
import about1st from "../../../public/about1st.svg";
import about2nd from "../../../public/about2n.svg";
import about3rd from "../../../public/about3rd.svg";

interface ProgramSectionProps {
  title: string;
  description: string[];
  image: string;
  reverse?: boolean;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-6 mb-12`}
    >
      <Image
        src={image}
        alt={title}
        className="w-full md:w-[445px] h-auto rounded shadow"
      />
      <div className="flex-1">
        <h3 className="md:text-2xl text-[19px] text-center sm:text-left font-bold mb-2">
          {title}
        </h3>
        {description.map((item, idx) => (
          <p key={idx} className="md:text-2xl mb-2 leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
 
const EmpowermentPrograms: React.FC = () => {
  return (
    <div className="w-full mx-auto md:px-4 mt-8 py-8">
      <ProgramSection
        title="Business Development"
        image={about2nd}
        description={[
          "Empower individuals with entrepreneurial skills and knowledge to drive economic growth.",
          "Offer mentorship, funding access, and market insights.",
          "Support small businesses and startups through incubators and training.",
          "Promote sustainable practices and social enterprise models.",
        ]}
      />
      <ProgramSection
        title="Leadership Training"
        image={about1st}
        reverse
        description={[
          "Develop visionary leaders who drive positive change in their communities. Provide training to build strategic, communication, and problem-solving skills.",
          "Promote ethical leadership rooted in integrity and accountability. Connect young leaders with policymakers and industry experts.",
        ]}
      />
      <ProgramSection
        title="Technology Empowerment"
        image={about3rd}
        description={[
          "Equip individuals with digital skills to thrive in the modern economy.",
          "Offer training in digital literacy, coding, and emerging technologies.",
          "Create innovation hubs for tech-driven problem-solving.",
          "Connect participants with global tech communities.",
        ]}
      />

      <h3 className="md:text-2xl mb-2 leading-relaxed">
        Through these objectives, CGI is building a network of empowered
        individuals and communities capable of driving sustainable and
        transformative change across Africa.
      </h3>
    </div>
  );
};

export default EmpowermentPrograms;
