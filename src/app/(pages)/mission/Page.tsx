import Image from "next/image";
import React from "react";
import whoweare from "../../../../public/whoweare.png";
import circle1 from "../../../../public/circle1.png";
import circle2hf from "../../../../public/circle2hf.png";
import map from "../../../../public/map.png";

const MissionPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[26rem] md:h-screen/2 ">
        <div>
          <Image
            src={whoweare}
            alt="Hero background"
            fill
            className="object-center"
            priority
          />
        </div>
      </div>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="flex justify-center items-center z-50 relative">
          <Image src={map} alt="map" />
        </div>
        <div className="absolute w-[19rem] right-[4rem] top-0">
          <Image src={circle1} alt="circle1" className="z-0" />
        </div>
        <div className="max-w-6xl mx-auto relative z-50">
          <div className="mt-20 text-center relative  z-50">
            <p className="text-[17px] text-start text-gray-700 max-w-4xl mx-auto">
              Capacity Growth Initiative (CGI) is a dedicated organisation
              committed to unlocking the inherent potential within individuals
              and communities. We focus on providing essential skills,
              resources, and opportunities necessary for sustainable
              development.
            </p>
          </div>

          <div className="mt-10 text-center  relative z-50">
            <p className="text-[17px] text-start text-gray-700 max-w-4xl mx-auto ">
              Our approach is centered around innovative capacity-building
              programs and strategic partnerships designed to empower leaders,
              foster resilience, and drive transformative change across all
              sectors of society.
            </p>
          </div>
          <div className="absolute w-[15rem] right-[20rem] top-0 bottom-48">
            <Image src={circle1} alt="circle1" className="z-0" />
          </div>
          <div className="mt-10 text-center relative z-50 max-w-4xl mx-auto">
            <p className="text-[17px] text-start text-gray-700 mb-4">
              At CGI, we focus on developing individuals and communities in
              three key areas:
            </p>
            <ol className="text-[17px] text-start text-gray-700 space-y-3 pl-5">
              <li className="mb-3">
                <span className="font-semibold">Business:</span> Equipping individuals with entrepreneurial skills and
                business acumen to drive economic growth and innovation.
              </li>
              <li className="mb-3">
                <span className="font-semibold">Leadership:</span> Nurturing strong and visionary leaders capable of
                inspiring positive change and spearheading impactful
                initiatives.
              </li>
              <li className="mb-3">
                <span className="font-semibold">Tech:</span> Providing cutting-edge technological skills and resources
                to empower individuals and communities to thrive in a rapidly
                evolving digital landscape.
              </li>
            </ol>
          </div>

          <div className="mt-10 text-center  z-50">
            <p className="text-[17px] text-start text-gray-700 max-w-4xl mx-auto">
              Our goal is to become the largest nonprofit capacity development
              NGO in Africa, with a network of alumni leading top sectors across
              the continent and driving transformative change. Through these
              efforts, CGI strives to create a future where empowered
              communities lead the way in shaping a more equitable, prosperous,
              and resilient world.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-[10rem] ">
          <Image src={circle2hf} alt="haftcircle" />
        </div>
      </section>
    </>
  );
};

export default MissionPage;
