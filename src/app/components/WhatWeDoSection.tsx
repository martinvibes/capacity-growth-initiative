import Image, { StaticImageData } from "next/image";
import React from "react";
import wedo1 from "../../../public/wedo1.svg";
import wedo2 from "../../../public/wedo2.svg";
import wedo3 from "../../../public/wedo3.svg";
import wedo4 from "../../../public/wedo4.svg";
import wedo5 from "../../../public/wedo5.svg";

interface ProgramCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 w-full relative h-40">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover rounded-lg"
          layout="fill"
        />
      </div>
      <h3 className="font-bold text-center md:text-2xl text-[18px] mb-2">
        {title}
      </h3>
      <p className="md:text-xl text-base">{description}</p>
    </div>
  );
};

const WhatWeDo: React.FC = () => {
  const topRowPrograms: ProgramCardProps[] = [
    {
      imageSrc: wedo1,
      title: "Capacity Building Programs",
      description:
        "We create programs that provide individuals and communities with the knowledge and tools to thrive.",
    },
    {
      imageSrc: wedo2,
      title: "Strategic Leadership",
      description:
        "By collaborating with various stakeholders, we ensure a comprehensive approach to development and empowerment.",
    },
    {
      imageSrc: wedo3,
      title: "Leadership Empowerment",
      description:
        "We focus on nurturing leaders who can drive positive change and inspire others within their communities.",
    },
  ];

  const bottomRowPrograms: ProgramCardProps[] = [
    {
      imageSrc: wedo4,
      title: "Sustainable Practice",
      description:
        "Promoting sustainable development is at the core of our initiatives, ensuring long-term benefits and resilience.",
    },
    {
      imageSrc: wedo5,
      title: "Innovation Promotion",
      description:
        "We support innovative solutions to tackle social, economic, and environmental challenges.",
    },
  ];

  return (
    <div id="what-we-do" className="max-w-6xl mx-auto md:px-4 py-10">
      <div className="text-center font-semibold mb-10">
        <h2 className="md:text-2xl text-[20px] font-bold mb-2">What We Do</h2>
        <p className="md:text-2xl text-[16px]">
          At Capacity Growth Initiative, Our works include
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {topRowPrograms.map((program, index) => (
          <ProgramCard
            key={index}
            imageSrc={program.imageSrc}
            title={program.title}
            description={program.description}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl">
          {bottomRowPrograms.map((program, index) => (
            <ProgramCard
              key={index}
              imageSrc={program.imageSrc}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
