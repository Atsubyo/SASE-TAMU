import Image from "next/image";
import Link from "next/link";
import React from "react";

//string of image values is passed into this interface, which is futher specified in inteface Image
interface LogoList {
  images: Image[];
}

interface Image {
  link: string;
  alt: string;
  path: string;
}

const LogoList: React.FC<LogoList> = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image: Image, index: number) => (
        <Link href={image.link} target="_blank" key={index}>
          <Image
            className="h-36 p-4"
            src={image.path}
            alt={image.alt}
            width={128}
            height={128}
          />
        </Link>
      ))}
    </div>
  );
};

export default LogoList;
