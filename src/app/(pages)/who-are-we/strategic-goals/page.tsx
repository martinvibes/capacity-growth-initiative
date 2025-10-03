import Image from "next/image";
import PageTemplate from "../../_components/PageTemplate";
import Line from "../../../../../public/Line.png";
import strategygoals from "../../../../../public/strategygoals.png";
import strategic1 from "../../../../../public/strategic1.svg";
import strategic2 from "../../../../../public/strategic2.svg";
import strategic3 from "../../../../../public/strategic3.svg";
import strategic4 from "../../../../../public/strategic4.svg";

export default function StrategicGoalsPage() {
  return (
    <PageTemplate title="Strategic Goals" showHeader={false}>
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            STRATEGIC GOALS
          </h1>
        </div>
        <Image
          src={strategygoals}
          alt="Strategic Planning"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Goals Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#019B83] mb-4">
              Strategic Goals
              <span className="block w-90  mx-auto mt-3 z-40 relative">
                <Image src={Line} alt="line" />
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              Guiding our efforts to create meaningful and sustainable impact
              through strategic initiatives and partnerships.
            </p>
          </div>

          {/* Goals Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#051609] p-[20px] text-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={strategic1} alt="strategic1" />
              </div>
              <h3>Build a Strong Alumni Network </h3>
              <p>
                Create an active alumni network to promote collaboration and
                support.
              </p>
              <ul>
                <li className="list-disc">
                  Position alumni as leaders in key sectors across Africa,
                  including business, governance, and technology.
                </li>
                <li className="list-disc">
                  Use the network for mentorship and expanding development
                  centers
                </li>
              </ul>
            </div>
            <div className="bg-[#051609] p-[20px] text-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={strategic2} alt="strategic1" />
              </div>
              <h3>Promote Sustainability and Innovation</h3>

              <ul>
                <li className="list-disc">
                  Design programs that prioritize sustainable practices and
                  innovative solutions
                </li>
                <li className="list-disc">
                  Encourage scalable solutions to social and economic challenges
                </li>
                <li className="list-disc">
                  Measure long-term impact through performance indicators and
                  community feedback
                </li>
              </ul>
            </div>
          </section>

          <section className="flex   mt-10 gap-8">
            <div className="bg-[#051609] p-[20px] text-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={strategic3} alt="strategic1" />
              </div>
              <h3>Mobilise Youth through NYSC Partnership </h3>
              <ul>
                <li>
                  Collaborate with NYSC to establish a CGI CDS group, engaging
                  corps members in leadership, entrepreneurship, and tech
                  initiatives.
                </li>
                <li className="list-disc">
                  Provide training modules to build skills in business,
                  leadership, and technology.
                </li>
                <li className="list-disc">
                  Encourage corps members to drive localised impact within their
                  host communities
                </li>
              </ul>
            </div>
            <div className="bg-[#051609] p-[20px] text-[#F9F9F9] flex flex-col rounded-[10px]">
              <div>
                <Image src={strategic4} alt="strategic1" />
              </div>
              <h3>Expand Access to Capacity-Building Resources </h3>
              <p>
                Set up development centers in key cities and underserved areas
                to offer training, mentorship, and networking.
              </p>
              <ul>
                <li className="list-disc">
                  Create a continuous learning framework focused on business,
                  leadership, and technology
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageTemplate>
  );
}
