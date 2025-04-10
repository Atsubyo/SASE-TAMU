import { type NextPage } from "next";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import OfficerCard from "~/components/OfficerCard";
import {
  type AdvisorRoles,
  type EBoardOfficerRoles,
  type GeneralOfficerRoles,
  Advisors,
  EBoardOfficers,
  GeneralOfficers,
} from "~/constants/OfficerList";

const Team: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>
      <div className="flex justify-center font-bebas text-5xl text-black">
        Meet Our Team
      </div>

      <div className="flex justify-center font-bebas text-4xl text-gray-400">
        Executive Board
      </div>
      <div className="flex flex-wrap justify-center gap-20 pt-10">
        {Object.keys(EBoardOfficers).map((key: string, idx: number) => (
          <OfficerCard
            key={idx}
            cardInfo={EBoardOfficers[key as EBoardOfficerRoles]}
          />
        ))}
      </div>

      <div className="flex justify-center pt-10 font-bebas text-4xl text-gray-400">
        General Officers
      </div>
      <div className="flex flex-wrap justify-center gap-20 pt-10">
        {Object.keys(GeneralOfficers).map((key: string, idx: number) => (
          <OfficerCard
            key={idx}
            cardInfo={GeneralOfficers[key as GeneralOfficerRoles]}
          />
        ))}
      </div>

      <div className="flex justify-center pt-10 font-bebas text-4xl text-gray-400">
        Advisor
      </div>
      <div className="flex flex-wrap justify-center gap-20 pb-20 pt-10">
        {Object.keys(Advisors).map((key: string, idx: number) => (
          <OfficerCard key={idx} cardInfo={Advisors[key as AdvisorRoles]} />
        ))}
      </div>

      <div className="flex h-96 items-center justify-center bg-white bg-officer_mobile bg-cover bg-fixed bg-center md:hidden"></div>
      <div className="flex h-96 items-center justify-center bg-white bg-officer bg-cover bg-fixed bg-center md:block"></div>
      <Footer />
    </div>
  );
};

export default Team;
