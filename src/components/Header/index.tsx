import React from "react";
import Image from "next/image";
import Logo from "@/components/assets/images/Logo.png";
import {
  SearchIcon,
  UserIcon,
  BellIcon,
  YellowTokenIcon,
  ArrowDownIcon,
} from "../assets/icons";

const Header = () => {
  return (
    <header className="fixed w-full bg-[#121212] flex items-center justify-between py-4 px-8 border-b border-[#242424] z-30">
      <div className="w-[98px] h-[36px]">
        <Image src={Logo} alt="" className="w-full h-full" />
      </div>
      <div className="bg-[#1C1C1C] px-4 py-2 w-[40%] flex items-center gap-2">
        <Image src={SearchIcon} alt="" width={24} height={24} />
        <input
          type="text"
          placeholder="Search tournament, player name or player tag"
          className="border-none outline-none bg-[#1C1C1C] w-full h-full text-[#7E7F7F] font-normal text-sm"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-[#1C1C1C] rounded-full flex items-center justify-center h-full p-2">
          <Image src={BellIcon} alt="" width={24} height={24} />
        </div>
        <div className="flex items-center gap-2">
          <Image src={YellowTokenIcon} alt="" width={24} height={24} />
          <p>20,000</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#1C1C1C] rounded-full flex items-center justify-center h-full p-2">
            <Image src={UserIcon} alt="" width={24} height={24} />
          </div>
          <div>
            <p className="text-white text-xs font-normal">Akinola Olalekan</p>
            <button className="bg-[#40610F] w-[72px] h-[20px] flex items-center border-none p-2 gap-2 ">
              online <Image src={ArrowDownIcon} alt="" width={11} height={7} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
