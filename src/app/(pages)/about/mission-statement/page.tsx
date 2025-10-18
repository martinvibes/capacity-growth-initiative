import PageTemplate from "../../_components/PageTemplate";
import mission from "../../../../../public/mission .jpg";
import Line from "../../../../../public/Line.png";
import circle1 from "../../../../../public/circle1.png";
import Image from "next/image";

export default function MissionStatementPage() {
  return (
    <PageTemplate
      title="Our Mission"
      description="Our commitment to excellence and service"
      showHeader={false}
    >
      <div className="relative  h-[28rem] md:h-screen/2 ">
        <div>
          <Image
            src={mission}
            alt="Hero background"
            fill
            className="object-cover z-30 relative"
            priority
          />
        </div>
      </div>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className=" mb-12">
            <h2 className="text-3xl text-center md:text-4xl font-bold text-teal-600 mb-4">
              <span className="z-50 relative font-bold">Mission Statement</span>
              <span className="block w-90  mx-auto mt-3 z-40 relative">
                <Image src={Line} alt="line" />
              </span>
              <div className="absolute w-[15rem] sm:right-56 sm:top-[36rem]">
                <Image src={circle1} alt="circle1" className="z-0" />
              </div>
            </h2>

            <div className="mt-8 space-y-2 leading-[100%] text-[17px] font-normal text-gray-700 max-w-3xl mx-auto z-50 relative">
              <p>
                At Capacity Growth Initiative (CGI), we empower individuals and
                communities through skills, resources, and opportunities for
                sustainable development.
              </p>
              <span className="pl-8 z-0 relative">
                Our innovative programs and partnerships build leadership, boost
                business resilience, and drive tech-driven transformation across
                all sectors.
              </span>
            </div>
            <div className="absolute w-[13rem] right-[30rem] ">
              <Image src={circle1} alt="circle1" className="z-0" />
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
