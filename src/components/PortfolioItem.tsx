import Image from "next/image";
import React from "react";
import Button from "./Button/Button";

interface PortfolioItemProps {
  title: string;
  desc: string;
  img: string;
  isEven: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  desc,
  img,
  isEven,
}) => {
  return (
    <div className={`${isEven} flex gap-12 justify-center items-center my-14`}>
      <div className="flex-1 flex gap-4 flex-col">
        <h2 className="text-4xl font-bold ">{title}</h2>
        <p className=" text-lg font-light text-gray-500">{desc}</p>
        <Button>See More</Button>
      </div>
      <div className="flex-1">
        <Image
          src={img}
          alt="Illustration 1"
          className="object-contain rounded"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default PortfolioItem;
