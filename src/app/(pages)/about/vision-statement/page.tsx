import PageTemplate from "../../_components/PageTemplate";
import Line from "../../../../../public/Line.png";
import circle1 from "../../../../../public/circle1.png";
import Image from "next/image";

export default function visionStatement() {
  return (
    <PageTemplate
      title="Our Mission"
      description="Our commitment to excellence and service"
      showHeader={false}
    >
      <section className="py-10 md:py-24  mt-20 sm:mt-0 overflow-x-hidden px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className=" mt-16">
            <h2 className="text-[18px] text-center md:text-[20px] font-bold text-teal-600 mb-4 ">
              <span className="z-50 relative">Vission Statement</span>
              <span className="block sm:w-50 w-40 mx-auto sm:mt-3 z-50 relative">
                <Image src={Line} alt="line" />
              </span>
              <div className="absolute sm:w-[15rem] w-[10rem] left-30 top-52 sm:left-[30rem] ">
                <Image src={circle1} alt="circle1" className="z-0" />
              </div>
              <div className="absolute sm:w-[15rem] w-[10rem] top-5 sm:top-0 right-0">
                <Image src={circle1} alt="circle1" className="z-0" />
              </div>
            </h2>

            <div className="mt-8 space-y-2 sm:text-[15px] text-[11px] font-normal leading-[180%] text-gray-700 max-w-3xl mx-auto z-50 relative">
              <p>
                Our vision is to be Africa’s leading nonprofit in capacity
                development, empowering individuals and communities in business,
                leadership, and technology. We aspire to build a strong CGI
                alumni network driving innovation, growth, and sustainable
                change across the continent.
              </p>
            </div>
            <div className="absolute sm:w-[13rem] w-[10rem] left-0 bottom-0 ">
              <Image src={circle1} alt="circle1" className="z-0" />
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
