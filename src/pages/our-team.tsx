import { type NextPage } from "next";
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import Card from '../components/Card';

const Team : NextPage = () => {
  return (
     <div className="bg-white">
    <div className="fixed w-full z-40">
    <NavBar/>
    </div>
      <div className="pt-20 font-bebas flex justify-center pt-10 text-black text-5xl">
        meet our team
      </div>
      <div className="font-bebas flex justify-center text-gray-400 text-4xl">
        Executive Board
      </div>
      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/24-25/Pres_Noah.JPG"
      name="Noah Saria"
      major="Computer Engineering '25"
      role="President"
      link="https://www.linkedin.com/in/noahdsaria/"
      />
      <Card
      imageSrc="/headshots/24-25/EVP_Amey.JPG"
      name="Amey Halappanavar"
      major="Aerospace Engineering '25"
      role="External Vice President"
      link="https://www.linkedin.com/in/ameyhalappanavar/"
      />
      <Card
      imageSrc="/headshots/24-25/IVP_Charisa.JPG"
      name="Charisa Chairat"
      major="Chemical Engineering '25"
      role="Internal Vice President"
      link="https://www.linkedin.com/in/charisa-chairat-8070a8268/"
      />
      <Card
      imageSrc="/headshots/24-25/Tres_Art.JPG"
      name="Art Young"
      major="Computer Science '25"
      role="Treasurer"
      link="https://www.linkedin.com/in/young-art/"
      />
      <Card
      imageSrc="/headshots/24-25/Secr_Jojo.JPG"
      name="Joseph Nguyen"
      major="Industrial Engineering '26"
      role="Secretary"
      link="https://www.linkedin.com/in/jojon/"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        General Officers
      </div>

      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/technical.jpg"
      name="Joseph Nguyen"
      major="General Engineering '26"
      role="Tech Marketing Director"
      link="null"
      />
      <Card
      imageSrc="/headshots/social.jpg"
      name="Nathan Kamat"
      major="ESET '26"
      role="Social Director"
      link="null"
      />
      <Card
      imageSrc="/headshots/pr.jpg"
      name="Charisa Chairat"
      major="Chemical Engineering '25"
      role="Public Relations Director"
      link="null"
      />
      <Card
      imageSrc="/headshots/fund.jpg"
      name="Monisha Yerram"
      major="Biochemistry, Genetics '25"
      role="Fundraising Director"
      link="https://www.linkedin.com/in/monisha-yerram"
      />
      <Card
      imageSrc="/headshots/logistics.jpg"
      name="Noah Saria"
      major="Computer Engineering '25"
      role="Logistics Director"
      link="https://www.linkedin.com/in/noah-saria-118869213"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        Advisor
      </div>
      <div className="pb-20 flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/advisor.jpg"
      name="Pauline Wade"
      major="Computer Science & Engineering"
      role="Associate Professor of Practice"
      link="https://www.linkedin.com/in/paulinewade"
      />
      </div>
      <div className="block md:hidden flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-officer_mobile">
      </div>
      <div className="hidden md:block flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-officer">
      </div>
    <Footer/>
    </div>
    
    
  )
}

export default Team;