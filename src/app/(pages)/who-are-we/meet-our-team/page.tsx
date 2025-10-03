import Image from "next/image";
import PageTemplate from "../../_components/PageTemplate";
import Line from "../../../../../public/Line.png";
import ourteam from "../../../../../public/ourteam.png";
import team2 from "../../../../../public/team2.svg";
import team3 from "../../../../../public/team3.svg";
import team4 from "../../../../../public/team4.svg";
import team5 from "../../../../../public/team5.svg";
import team6 from "../../../../../public/team6.svg";
import team7 from "../../../../../public/team7.svg";
import teamlead from "../../../../../public/teamlead.png";

export default function MeetOurTeamPage() {
  return (
    <PageTemplate
      title=" Our team"
      description="Our commitment to excellence and service"
      showHeader={false}
    >
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src={ourteam}
          alt="Leadership Team"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
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
          <div className="space-y-16">
            {/* Row 1 */}
            <div className=" flex justify-center">
             
                <Image src={teamlead} alt="Teamlead" className="" />
            </div>
                <h3 className="text-center mt-[-1rem]"> Leonard Jesse Hyuwa</h3>

            {/* Row 2 - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center  space-y-5 ">
                <Image src={team2} alt="team2" />
                <h3>Christopher Francis</h3>
              </div>
              <div className="text-center  space-y-5">
                <Image src={team3} alt="team3" />
                <h3>Richard Dambo</h3>
              </div>
              <div className="text-center  space-y-5">
                <Image src={team4} alt="team4" />
                <h3>Jessica Jude Aboi</h3>
              </div>
            </div>

            {/* Row 3 - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center  space-y-5">
                <Image src={team5} alt="team2" />
                <h3>Christopher Francis</h3>
              </div>
              <div className="text-center  space-y-5 ">
                <Image src={team6} alt="team3" />
                <h3>Richard Dambo</h3>
              </div>
              <div className="text-center space-y-5 ">
                <Image src={team7} alt="team4" />
                <h3>Jessica Jude Aboi</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
