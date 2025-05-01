import Image from "next/image";
import React from "react";
import team1 from "../../../public/team1.svg";
import team2 from "../../../public/team2.svg";
import team3 from "../../../public/team3.svg";
import team4 from "../../../public/team4.svg";
import team5 from "../../../public/team5.svg";
import team6 from "../../../public/team6.svg";
import team7 from "../../../public/team7.svg";

const teamInfo = [
  {
    img: <Image className="mx-auto" src={team2} alt="about img" />,
    title: "Christopher Francis",
  },
  {
    img: <Image className="mx-auto" src={team3} alt="about img" />,
    title: "Richard Dambo",
  },
  {
    img: <Image className="mx-auto" src={team4} alt="about img" />,
    title: "Jessica Jude Aboi",
  },
  {
    img: <Image className="mx-auto" src={team5} alt="about img" />,
    title: "Iweobi Prisca Ogonna",
  },
  {
    img: <Image className="mx-auto" src={team6} alt="about img" />,
    title: "Deborah Abashiya",
  },
  {
    img: <Image className="mx-auto" src={team7} alt="about img" />,
    title: "Samuel Dankard",
  },
];

const MeetOurTeam: React.FC = () => {
  return (
    <div className="mx-5 text-center md:mx-24 mt-2 mb-4">
      <h1 className="font-bold mb-2 text-[24px] md:text-[40px]">
        Meet Our Team
      </h1>

      <div className="flex flex-col space-y-2 items-center">
        <Image className="mx-auto" src={team1} alt="about img" />
        <h3 className="md:text-2xl text-[18px] font-bold">Joel Leopard</h3>
      </div>

      <div className="grid md:grid-cols-3 mt-2 sm:grid-cols-2">
        {teamInfo.map((team) => (
          <div
            className="flex flex-col space-y-3 p-4 items-center"
            key={team.title}
          >
            <span>{team.img}</span>
            <h3 className="md:text-2xl text-[18px] font-bold">{team.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
