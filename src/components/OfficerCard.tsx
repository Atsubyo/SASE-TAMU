import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import type { TeamMemberCard } from "~/constants/OfficerList";

interface OfficerCardProps {
  cardInfo: TeamMemberCard;
}

const OfficerCard: React.FC<OfficerCardProps> = ({ cardInfo }) => {
  return (
    <div className="card h-96 w-64 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={cardInfo.image.src}
          width={cardInfo.image.width}
          height={cardInfo.image.height}
          alt={cardInfo.image.alt}
        />
        <div className="text-shadow-md flex justify-center rounded-2xl pt-10 font-sans"></div>
      </figure>
      <div className="text-md card-body bg-white">
        <div>
          <div className="inline-flex">
            <p className="text-black">{cardInfo.name}</p>
            <div className="mt-1 pl-4">
              <Link
                href={cardInfo.link}
                target="_blank"
                className="hover:text-sky-600"
              >
                <BsLinkedin />
              </Link>
            </div>
          </div>
          <p className="text-gray-400">{cardInfo.major}</p>
          <p className="text-gray-400">{cardInfo.role}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficerCard;
