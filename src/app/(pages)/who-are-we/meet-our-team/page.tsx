import Image from "next/image";
import PageTemplate from "../../_components/PageTemplate";
import Line from "../../../../../public/Line.png";
import team2 from "../../../../../public/team2.svg";
import team3 from "../../../../../public/team3.svg";
import team4 from "../../../../../public/team4.svg";
import team5 from "../../../../../public/team5.svg";
import team6 from "../../../../../public/team6.svg";
import team7 from "../../../../../public/team7.svg";
import teamlead from "../../../../../public/teamlead.png";
import circle1 from "../../../../../public/circle1.png";

export default function MeetOurTeamPage() {
  return (
    <PageTemplate
      title=" Our team"
      description="Our commitment to excellence and service"
      showHeader={false}
    >
      {/* Team Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-[#019B83] leading-[100%] mb-4">
              Meet Our Team
              <span className="block w-90  mx-auto mt-3 z-40 relative">
                <Image src={Line} alt="line" />
              </span>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="space-y-16 relative z-40">
            {/* Row 1 */}
            <div className=" flex justify-center z-40 relative">
              <Image src={teamlead} alt="Teamlead" className="z-40" />
            </div>
            <h3 className="text-center mt-[-1rem] relative z-40">
              {" "}
              Leonard Jesse Hyuwa
            </h3>

            <div className="absolute w-[15rem] top-[25rem] left-[39rem] ">
              <Image src={circle1} alt="circle1" className="z-0" />
            </div>
            <div className="absolute w-[15rem] top-[-14rem] right-0">
              <Image src={circle1} alt="circle1" className="z-0" />
            </div>

            {/* Row 2 - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 z-40 relative">
              <div className="text-center  space-y-5 z-40 ">
                <Image src={team2} alt="team2" className="z-50" />
                <h3 className="z-40 text-[#051609] relative">
                  Christopher Francis
                </h3>
              </div>
              <div className="text-center  space-y-5 z-40">
                <Image src={team3} alt="team3" className="z-40" />
                <h3 className="z-40 text-[#051609]">Richard Dambo</h3>
              </div>
              <div className="text-center  space-y-5 z-40 ">
                <Image src={team4} alt="team4" className="z-40" />
                <h3 className="z-40 text-[#051609]">Jessica Jude Aboi</h3>
              </div>
            </div>

            {/* Row 3 - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 z-40 relative">
              <div className="text-center  space-y-5 z-40">
                <Image src={team5} alt="team2" className="z-40" />
                <h3 className="z-40 text-[#051609]">Christopher Francis</h3>
              </div>
              <div className="text-center  space-y-5 z-40 ">
                <Image src={team6} alt="team3" className="z-40" />
                <h3 className="z-40 text-[#051609]">Richard Dambo</h3>
              </div>
              <div className="text-center space-y-5 z-40 ">
                <Image src={team7} alt="team4" className="z-40" />
                <h3 className="z-40 text-[#051609]">Jessica Jude Aboi</h3>
              </div>
            </div>
              <div className="absolute w-[15rem]  left-32 bottom-[19rem] ">
                <Image src={circle1} alt="circle1"className="z-0" />
              </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
