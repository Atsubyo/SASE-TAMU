import type { ImageProps } from "next/image";

export interface TeamMemberCard {
  image: ImageProps;
  name: string;
  major: string;
  role: string;
  link: string;
}

interface EBoardOfficerList {
  president: TeamMemberCard;
  evp: TeamMemberCard;
  ivp: TeamMemberCard;
  treasurer: TeamMemberCard;
  secretary: TeamMemberCard;
}
export type EBoardOfficerRoles =
  | "president"
  | "evp"
  | "ivp"
  | "treasurer"
  | "secretary";

interface GeneralOfficerList {
  techMarketing: TeamMemberCard;
  historian: TeamMemberCard;
  social: TeamMemberCard;
  pr: TeamMemberCard;
  fundraising: TeamMemberCard;
  logistics: TeamMemberCard;
  science: TeamMemberCard;
  sports: TeamMemberCard;
}
export type GeneralOfficerRoles =
  | "techMarketing"
  | "historian"
  | "social"
  | "pr"
  | "fundraising"
  | "logistics"
  | "science"
  | "sports";

interface AdvisorList {
  pauline: TeamMemberCard;
}
export type AdvisorRoles = "pauline";

export const EBoardOfficers: EBoardOfficerList = {
  president: {
    image: {
      src: "/headshots/24-25/Pres_Noah.JPG",
      width: 256,
      height: 256,
      alt: "Noah Saria Headshot",
    },
    name: "Noah Saria",
    major: "Computer Engineering '25",
    role: "President",
    link: "https://www.linkedin.com/in/noahdsaria/",
  },
  evp: {
    image: {
      src: "/headshots/24-25/EVP_Amey.JPG",
      width: 256,
      height: 256,
      alt: "Amey Halappanavar Headshot",
    },
    name: "Amey Halappanavar",
    major: "Aerospace Engineering '26",
    role: "External Vice President",
    link: "https://www.linkedin.com/in/ameyhalappanavar/",
  },
  ivp: {
    image: {
      src: "/headshots/24-25/IVP_Charisa.JPG",
      width: 256,
      height: 256,
      alt: "Charisa Chairat Headshot",
    },
    name: "Charisa Chairat",
    major: "Chemical Engineering '25",
    role: "Internal Vice President",
    link: "https://www.linkedin.com/in/charisa-chairat-8070a8268/",
  },
  treasurer: {
    image: {
      src: "/headshots/24-25/Tres_Art.JPG",
      width: 256,
      height: 256,
      alt: "Art Young Headshot",
    },
    name: "Art Young",
    major: "Computer Science '25",
    role: "Treasurer",
    link: "https://www.linkedin.com/in/young-art/",
  },
  secretary: {
    image: {
      src: "/headshots/24-25/Secr_Jojo.JPG",
      width: 256,
      height: 256,
      alt: "Joseph Nguyen Headshot",
    },
    name: "Joseph Nguyen",
    major: "Industrial Engineering '26",
    role: "Secretary",
    link: "https://www.linkedin.com/in/jojon/",
  },
};

export const GeneralOfficers: GeneralOfficerList = {
  techMarketing: {
    image: {
      src: "/headshots/24-25/TMD_Sam.JPG",
      width: 256,
      height: 256,
      alt: "Samantha Li Headshot",
    },
    name: "Samantha Li",
    major: "Biochemistry '27",
    role: "Tech Marketing Director",
    link: "https://www.linkedin.com/in/samantha-li-069a282b7/",
  },
  historian: {
    image: {
      src: "/headshots/24-25/Hist_Luis.JPG",
      width: 256,
      height: 256,
      alt: "Luis Albos Headshot",
    },
    name: "Luis Albos",
    major: "Multidisciplinary Engineering '25",
    role: "Historian",
    link: "https://www.linkedin.com/in/luis-albos/",
  },
  social: {
    image: {
      src: "/headshots/24-25/SD_Nikki.JPG",
      width: 256,
      height: 256,
      alt: "Nicole Arackal Headshot",
    },
    name: "Nicole Arackal",
    major: "Manufacturing and Mechanical Engineering '26",
    role: "Social Director",
    link: "null",
  },
  pr: {
    image: {
      src: "/headshots/24-25/PR_Kiera.JPG",
      width: 256,
      height: 256,
      alt: "Kiera Joy Ocampo Headshot",
    },
    name: "Kiera Joy Ocampo",
    major: "General Engineering '27",
    role: "Public Relations Director",
    link: "https://www.linkedin.com/in/kiera-joy-ocampo-2aa054300/",
  },
  fundraising: {
    image: {
      src: "/headshots/24-25/FD_Pranav.JPG",
      width: 256,
      height: 256,
      alt: "Pranav Moogala Headshot",
    },
    name: "Pranav Moogala",
    major: "Architectural Engineering '26",
    role: "Fundraising Director",
    link: "https://www.linkedin.com/in/pranav-moogala-b826b221b/",
  },
  logistics: {
    image: {
      src: "/headshots/24-25/LD_Mya.JPG",
      width: 256,
      height: 256,
      alt: "Mya Tinsay Headshot",
    },
    name: "Mya Tinsay",
    major: "Multidisciplinary Engineering '26",
    role: "Logistics Director",
    link: "https://www.linkedin.com/in/mya-tinsay/",
  },
  science: {
    image: {
      src: "/headshots/24-25/SC_Mihir.JPG",
      width: 256,
      height: 256,
      alt: "Mihir Kalvakaalva Headshot",
    },
    name: "Mihir Kalvakaalva",
    major: "Material Science Engineering '26",
    role: "Science Chair",
    link: "https://www.linkedin.com/in/mihir-kalvakaalva/",
  },
  sports: {
    image: {
      src: "/headshots/24-25/SC_Nick.JPG",
      width: 256,
      height: 256,
      alt: "Nick Truong Headshot",
    },
    name: "Nick Truong",
    major: "Computer Science '26",
    role: "Sports Chair",
    link: "https://www.linkedin.com/in/nick-truong/",
  },
};

export const Advisors: AdvisorList = {
  pauline: {
    image: {
      src: "/headshots/advisor.JPG",
      width: 256,
      height: 256,
      alt: "Pauline Wade Headshot",
    },
    name: "Pauline Wade",
    major: "Computer Science & Engineering",
    role: "Associate Professor of Practice",
    link: "https://engineering.tamu.edu/cse/profiles/wade-pauline.html",
  },
};
