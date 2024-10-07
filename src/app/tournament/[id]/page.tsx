"use client";
import { useRouter } from "next/navigation";
import { ArrLeft } from "@/components/assets/icons";
import CallOfDuty from "@/components/assets/images/image 1.png";
import Image from "next/image";
import {
  CalenderICon,
  TrophyGold,
  GamePadAsh,
} from "@/components/assets/icons";
import { useState } from "react";
import TournamentBracket from "@/components/tournament-bracket";
import TournamentTable from "@/components/tournament-table";

const TournamentDetails = () => {
  const [activeTab, setActiveTab] = useState({
    leaderboard: true,
    fixtures: false,
  });

  const handleOpenLeaderBoard = () => {
    setActiveTab({
      leaderboard: true,
      fixtures: false,
    });
  };
  const handleOpenFixtures = () => {
    setActiveTab({
      leaderboard: false,
      fixtures: true,
    });
  };
  const router = useRouter();
  return (
    <div className="w-[80%] py-4 px-12 h-full ml-[20%] mt-[64px] mb-6">
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm font-semibold text-white mb-4"
      >
        <Image src={ArrLeft} alt="" />
        Back
      </button>
      <Image
        src={CallOfDuty}
        alt=""
        width={100}
        height={100}
        className="w-full h-[392px]"
      />
      <h4 className="text-white text-lg font-bold mt-4">Call of duty</h4>

      <div className="flex items-center justify-center gap-1 w-[10%] bg-[#242424] px-2 py-1 rounded-[32px] mt-3">
        <Image src={TrophyGold} alt="" />
        <span className="text-sm text-[#7E7F7F]">N10,000</span>
      </div>
      <p className="text-sm text-[#7E7F7F] mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <div className="flex items-center gap-5 mt-3">
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
      <button
        onClick={() => {
          router.push("/tournament/2");
        }}
        className="flex items-center justify-center gap-3 bg-[#8BC72F] py-3 text-base text-[#0A0A0A] font-semibold px-4 mt-3"
      >
        <Image src={GamePadAsh} alt="" />
        Join tournament
      </button>
      <div className="mt-6 h-full">
        <h4 className="text-white text-lg font-bold mt-4">
          Tournament information
        </h4>
        <div className="flex items-center gap-5 mt-4">
          <button
            onClick={handleOpenLeaderBoard}
            className={`${
              activeTab.leaderboard
                ? "bg-[#3B3B3B] text-white"
                : "bg-[#141414] text-[#7E7F7F]"
            } px-4 py-2 text-sm transition-all`}
          >
            Leaderboard
          </button>
          <button
            onClick={handleOpenFixtures}
            className={`${
              activeTab.fixtures
                ? "bg-[#3B3B3B] text-white"
                : "bg-[#141414] text-[#7E7F7F]"
            } px-4 py-2 text-sm transition-all`}
          >
            Fixtures
          </button>
        </div>
        {activeTab.leaderboard && <TournamentTable />}
        {activeTab.fixtures && <TournamentBracket />}
      </div>
    </div>
  );
};

export default TournamentDetails;
