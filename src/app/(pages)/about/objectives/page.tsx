import PageTemplate from "../../_components/PageTemplate";
import Image from "next/image";
import Line from "../../../../../public/Line.png";
import objective from "../../../../../public/objective.png";
import tech from "../../../../../public/tech.png";
import business from "../../../../../public/business.png";
import leader from "../../../../../public/leader.png";
import circle2hf from "../../../../../public/circle2hf.png";
import circle1 from "../../../../../public/circle1.png";

export default function ObjectivesPage() {
  return (
    <PageTemplate
      title="Our Objectives"
      description="Driving sustainable development through business, leadership, and technology"
      showHeader={false}
    >
      {/* Hero Section */}
      <div className="relative h-[26rem] md:h-screen/2 ">
        <div>
          <Image
            src={objective}
            alt="Hero background"
            fill
            className="object-center"
            priority
          />
        </div>
      </div>

      {/* Objectives Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4 z-50 relative">
              Our Objectives
              <span className="block w-90  mx-auto mt-3">
                <Image src={Line} alt="line" />
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-[17px] text-start text-gray-700 max-w-4xl mx-auto z-50">
              <p className="z-50 relative">
                At Capacity Growth Initiative (CGI), we aim to empower
                individuals and communities by building capacity in Business,
                Leadership, and Technology, equipping them with the skills and
                resources to thrive in a fast-changing world.
              </p>
            </div>
          </div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center z-40">
          <div className="absolute w-[15rem] right-0 top-0">
              <Image src={circle1} alt="circle1" className="z-0" />
            </div>
            <div className="z-50 relative">
              <Image src={tech} alt="technologyImage"  />
              <h3 className="text-[#019B83] text-[20px] my-2 font-bold leading-[180% ">
              
                Technology Empowerment
              </h3>
              <p className="text-[17px] leading-[180%] font-normal text-start">
                Equip individuals with digital skills to thrive in the modern
                economy. .Offer training in digital literacy, coding and
                emerging technologies .Create innovation hub for tech-driven
                problem solving .Connect participants with global tech
                communities
              </p>
            </div>
            <div className="absolute w-[15rem] right-[30rem] bottom-48">
              <Image src={circle1} alt="circle1" className="z-0" />
            </div>
            <div className="z-50">
              <Image src={business} alt="businessImage" className="z-50" />
              <h3 className="text-[#019B83] text-[20px] my-2 font-bold leading-[180% ">
                Business Development{" "}
              </h3>
              <p className="text-[17px] leading-[180%] font-normal text-start">
                Develop visionary leaders who drive positive change in their
                communities. Provide training to build strategic communication,
                and problem-solving skills Promote ethical leadership rooted in
                integrity and accountability Connect young leaders with
                policymakers and industry experts
              </p>
            </div>

            <div className="z-50 relative">
              <Image src={leader} alt="leaderImage" />
              <h3 className="text-[#019B83] text-[20px] my-2 font-bold leading-[180%">
                Leadership Training
              </h3>
              <p className="text-[17px] text-start  leading-[180%] font-normal ">
                Develop visionary leaders who drive positive change in their
                communities. .Provide training to build strategic,
                communication, and problem-solving skills .Promote ethical
                leadership rooted in integrity and accountability .Connect young
                leaders with policymakers and industry experts
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-20 text-center ml-[-16rem]">
            <p className="text-[17px] text-start text-gray-700 max-w-4xl mx-auto">
              Through these objectives, CGI is building a network of empowered
              individuals and communities capable of driving sustainable and
              transformative change across Africa.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-[10rem] ">
          <Image src={circle2hf} alt="haftcircle" />
        </div>
      </section>
    </PageTemplate>
  );
}
