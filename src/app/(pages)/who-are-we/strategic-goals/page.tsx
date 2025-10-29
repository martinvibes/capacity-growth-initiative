import Image from "next/image";
import PageTemplate from "../../_components/PageTemplate";
import Line from "../../../../../public/Line.png";
import strategic1 from "../../../../../public/strategic1.svg";
import strategic2 from "../../../../../public/strategic2.svg";
import strategic3 from "../../../../../public/strategic3.svg";
import strategic4 from "../../../../../public/strategic4.svg";
import circle1 from "../../../../../public/circle1.png";

export default function StrategicGoalsPage() {
  return (
    <PageTemplate title="Strategic Goals" showHeader={false}>
      {/* Goals Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative ">
        <div className="max-w-7xl mx-auto">
          <div className="absolute w-[15rem] top-[-3rem] right-0">
            <Image src={circle1} alt="circle1" className="z-0" />
          </div>
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-[#019B83] mb-4 z-30 relative">
              Strategic Goals
              <span className="block w-50  mx-auto mt-1 z-40 relative">
                <Image src={Line} alt="line" />
              </span>
            </h2>
          </div>

          {/* Goals Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 md:ml-20 ml-7   w-[80%]">
            <div className="bg-[#051609]  p-[30px] text-[#F9F9F9] flex flex-col justify-center items-center rounded-[10px]">
              <div className=" "> 
                <Image src={strategic1} alt="strategic1" />
              </div>
              <h3 className="my-3">Build a Strong Alumni Network </h3>
              <p>
                Create an active alumni network to promote collaboration and
                support.
              </p>
              <ul className="list-disc">
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
            <div className="bg-[#051609] p-[30px] text-[#F9F9F9] flex flex-col justify-center items-center rounded-[10px]">
              <div>
                <Image src={strategic2} alt="strategic1" />
              </div>
              <h3 className="my-3">Promote Sustainability and Innovation</h3>

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

          <section className="flex  mt-10 gap-8 md:ml-20 ml-7  w-[80%]">
            <div className="bg-[#051609] p-[30px] text-[#F9F9F9] flex flex-col justify-center items-center rounded-[10px]">
              <div>
                <Image src={strategic3} alt="strategic1" />
              </div>
              <h3 className="my-3">Mobilise Youth through NYSC Partnership </h3>
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
            <div className="bg-[#051609]  p-[30px] text-[#F9F9F9] flex flex-col justify-center items-center rounded-[10px]">
              <div>
                <Image
                  src={strategic4}
                  alt="strategic1"
                  className="md:mt-[-3rem]"
                />
              </div>
              <h3 className="my-3">
                Expand Access to Capacity-Building Resources{" "}
              </h3>
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
