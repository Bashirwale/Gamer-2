import Link from "next/link";
import Image from "next/image";
import { PlayIcon } from "../assets/icons";
import Animation from "@/components/assets/images/VALORANT Fan Art, Rui-Rou Teo 1.png";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  btnText: string;
}

const HeaderCard: React.FC<CardProps> = ({ title, description, btnText }) => {
  return (
    <div className="bg-[#1C1C1C] p-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl text-white font-semibold">{title}</h2>
        <p className="text-sm text-[#7E7F7F] font-normal mb-4">{description}</p>
        <Link href="" className=" flex items-center gap-2 px-3 py-2">
          <Image src={PlayIcon} alt="" />
          <span className=" text-base text-white whitespace-nowrap font-semibold">
            {btnText}
          </span>
        </Link>
      </div>
      <Image src={Animation} alt="" width={154} height={154} />
    </div>
  );
};

export default HeaderCard;
