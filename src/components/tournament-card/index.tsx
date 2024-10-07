"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CallOfDuty from "@/components/assets/images/call-of-duty.jpg";
import { CalenderICon, GroupIcon, Gamepad2, GamePadAsh } from "../assets/icons";

const TournamentCard = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-[#1C1C1C] h-full mt-5">
      <div className="relative w-full h-[40%]">
        <Image
          src={CallOfDuty}
          alt=""
          width={100}
          height={100}
          className="w-full h-full"
        />
        <div className="absolute bg-black h-full w-full top-0 left-0 bg-opacity-70 "></div>
      </div>

      <div className=" p-3">
        <h4 className="text-white text-lg">Call of duty</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <Image src={CalenderICon} alt="" />
            <span className="text-sm font-medium text-[#7E7F7F]">
              10 Feb 2023
            </span>
          </div>
          <div className="flex items-center">
            <Image src={CalenderICon} alt="" />
            <span className="text-sm font-medium text-[#7E7F7F]">
              Free-to-play
            </span>
          </div>
          <div className="flex items-center">
            <Image src={CalenderICon} alt="" />
            <span className="text-sm font-medium text-[#7E7F7F]">4v4 </span>
          </div>
          <div className="flex items-center">
            <Image src={CalenderICon} alt="" />
            <span className="text-sm font-medium text-[#7E7F7F]">10/48</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 w-[40%] bg-[#242424] px-2 py-1 rounded-[32px] mt-3">
          <Image src={GroupIcon} alt="" />
          <span className="text-sm text-[#7E7F7F]">N10,000</span>
        </div>
      </div>
      <div className="flex flex-col w-full px-2 gap-2 bg-[#1C1C1C] mb-3">
        <button
          onClick={() => {
            router.push("/tournament/2");
          }}
          className="flex items-center justify-center gap-3 bg-[#8BC72F] py-3 text-base text-[#0A0A0A] font-semibold"
        >
          <Image src={GamePadAsh} alt="" />
          Join tournament
        </button>
        <button
          onClick={() => {
            router.push("/tournament/2");
          }}
          className="flex items-center justify-center gap-3 py-3 text-base text-white font-semibold border border-[#4A4A4A]"
        >
          <Image src={Gamepad2} alt="" />
          View details
        </button>
      </div>
    </div>
  );
};

export default TournamentCard;
