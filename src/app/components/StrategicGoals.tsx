import Image from "next/image";
import React, { ReactNode } from "react";
import strategic1 from "../../../public/strategic1.svg";
import strategic2 from "../../../public/strategic2.svg";
import strategic3 from "../../../public/strategic3.svg";
import strategic4 from "../../../public/strategic4.svg";

type PanelProps = {
  title: string;
  description?: string;
  bulletPoints?: string[];
  imageSrc: ReactNode;
};

const Panel: React.FC<PanelProps> = ({
  title,
  description,
  bulletPoints = [],
  imageSrc,
}) => {
  return (
    <div className="bg-[#051609] rounded-lg overflow-hidden shadow-md flex flex-col h-full">
      <div className="relative h-48 w-full">{imageSrc}</div>
      <div className="p-4 text-[#D1E2D5] lg:text-2xl text-lg flex flex-col justify-between flex-grow">
        <div>
          <h3 className=" font-bold mb-2">{title}</h3>
          {description && <p className="mb-3">{description}</p>}
          {bulletPoints?.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {bulletPoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const StrategicGoals: React.FC = () => {
  const panels: PanelProps[] = [
    {
      title: "Build a Strong Alumni Network",
      description:
        "Create an active alumni network to promote collaboration and support.",
      bulletPoints: [
        "Position alumni as leaders in key sectors across Africa, including business, governance, and technology",
        "Use the network for mentorship and expanding development centers",
      ],
      imageSrc: (
        <Image
          src={strategic1}
          alt={"Panel Image"}
          className="object-cover"
          fill
        />
      ),
    },
    {
      title: "Promote Sustainability and Innovation",
      bulletPoints: [
        "Design programs that prioritize sustainable practices and innovative solutions",
        "Encourage scalable solutions to social and economic challenges",
        "Measure long-term impact through performance indicators and community feedback",
      ],
      imageSrc: (
        <Image
          src={strategic2}
          alt={"Panel Image"}
          className="object-cover"
          fill
        />
      ),
    },
    {
      title: "Mobilise Youth through NYSC Partnership",
      description:
        "Collaborate with NYSC to establish a CCI CDS group, engaging corps members in leadership, entrepreneurship, and tech initiatives.",
      bulletPoints: [
        "Provide training modules to build skills in business, leadership, and technology",
        "Encourage corps members to drive localised impact within their host communities",
      ],
      imageSrc: (
        <Image
          src={strategic3}
          alt={"Panel Image"}
          className="object-cover"
          fill
        />
      ),
    },
    {
      title: "Expand Access to Capacity-Building Resources",
      description:
        "Set up development centers in key cities and underserved areas to offer training, mentorship, and networking.",
      bulletPoints: [
        "Create a continuous learning framework focused on business, leadership, and technology",
      ],
      imageSrc: (
        <Image
          src={strategic4}
          alt={"Panel Image"}
          className="object-cover"
          fill
        />
      ),
    },
  ];

  return (
    <div className="max-w-full md:px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-x-24 md:gap-x-10 gap-6">
        {panels.map((panel, index) => (
          <Panel key={index} {...panel} />
        ))}
      </div>

      <div className="text-[#051609] text-2xl">
        <h1 className=" text-center font-semibold text-[#051609] my-4 text-[40px]">
          Key Success Indicators
        </h1>
        <div className="text-2xl leading-9">
          <p>Number of developments centers established and operational</p>
          <p>Number of corps members engaged through the NYSC partnership</p>
          <p>Percentage of alumni in leadership positions within key sectors</p>
          <p>
            Community-level impact (measured through economic growth, employment
            rates, and leadership initiatives)
          </p>
          <p>Sustainability of programs and participant retention rates</p>
        </div>
      </div>
    </div>
  );
};

export default StrategicGoals;
