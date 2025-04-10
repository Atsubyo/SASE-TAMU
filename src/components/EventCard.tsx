import React from "react";
import Image from "next/image";

interface EventCardProps {
  src: string;
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ src, title, description }) => {
  return (
    <div className="card w-[384px] bg-base-100 shadow-lg">
      <figure>
        <Image src={src} alt="NC" width={384} height={512} />
        <div className="text-shadow-md absolute inset-0 z-10 flex justify-center rounded-2xl pt-10 font-bebas text-3xl text-white opacity-0 duration-300 hover:bg-black hover:bg-opacity-25 hover:opacity-100">
          {title}
        </div>
      </figure>
      <div className="card-body w-full whitespace-normal rounded-b-2xl bg-white">
        {description}
      </div>
    </div>
  );
};

export default EventCard;
