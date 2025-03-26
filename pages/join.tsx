import React from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import EventCard from "~/components/EventCard";

const join = () => {
  return (
    <div className="bg-white text-black">
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>

      <div className="flex flex-col bg-white pb-12 pt-28 font-source md:flex-row">
        <div className="flex-1 px-8 pb-10 md:w-1/2 md:pb-4">
          <h1 className="font-bebas text-5xl">Interested in joining us?</h1>
          <div className="pb-5 pt-5">
            <div>
              Dues are $25 per semester and $40 for a year. Indicate your
              interest by joining our Discord for further events!
            </div>
            <button className="mt-5 rounded border bg-sky-700 bg-opacity-75 px-4 py-2 text-white hover:bg-sky-700 hover:text-white">
              <a href="https://linktr.ee/tamusase" target="blank">
                Sign up here!
              </a>
            </button>
          </div>
        </div>

        <div
          id="projects"
          className="flex grow-[2] flex-col bg-white font-source text-lg text-black"
        >
          <h1 className="px-6 pb-4 font-bebas text-5xl">some past events :)</h1>
          <div className="w-full flex-1">
            <div className="flex flex-row gap-5 overflow-x-auto p-6">
              <EventCard
                src="/NCNC.jpg"
                title="SASE @ NC"
                description="Our officer board and scholarship recipients are SASE's National Conference, hosted in Atlanta, GA!"
              />
              <EventCard
                src="/winty.jpg"
                title="SASE squad social!"
                description="A fun day out at Century Square with our SASE Squads!"
              />
              <EventCard
                src="/ging.jpg"
                title="Winter Social"
                description="SASE's Winter Social!"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex hidden h-96 items-center justify-center bg-white bg-meow bg-cover bg-fixed bg-center md:block" />
      <Footer />
    </div>
  );
};

export default join;
