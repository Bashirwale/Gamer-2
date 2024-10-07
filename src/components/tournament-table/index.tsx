import React from "react";
import Image from "next/image";
import { ArrowDownIcon } from "../assets/icons";

const TournamentTable = () => {
  const userData = [
    {
      Player: "Adebayo Oyeleye",
      "Games played": 20,
      Wins: 20,
      Losses: 0,
      "W/L ratio": "100%",
      Points: 49,
      placement: 1,
    },
    {
      Player: "iBROMOVIC109",
      "Games played": 20,
      Wins: 19,
      Losses: 1,
      "W/L ratio": "98%",
      Points: 3,
      placement: 2,
    },
    {
      Player: "Drillz",
      "Games played": 20,
      Wins: 17,
      Losses: 3,
      "W/L ratio": "92%",
      Points: 46,
      placement: 3,
    },
    {
      Player: "Bigbadderwolf",
      "Games played": 20,
      Wins: 12,
      Losses: 8,
      "W/L ratio": "55%",
      Points: 39,
      placement: 4,
    },
    {
      Player: "Pinky",
      "Games played": 20,
      Wins: 10,
      Losses: 6,
      "W/L ratio": "50%",
      Points: 34,
      placement: 5,
    },
    {
      Player: "demolaoflag",
      "Games played": 22,
      Wins: 8,
      Losses: 14,
      "W/L ratio": "48%",
      Points: 30,
      placement: 6,
    },
  ];
  return (
    <div className="w-full mt-5">
      <div className="flex items-center justify-between px-6  bg-[#242424] py-3 border-b border-[#2E2E2E]">
        <p className="text-sm text-[#7E7F7F] w-[13%] ">Placement </p>
        <p className="text-sm text-[#7E7F7F] w-[20%]">Player</p>
        <p className="text-sm text-[#7E7F7F] w-[13%]">Games played</p>
        <p className="text-sm text-[#7E7F7F] w-[13%]">Wins</p>
        <p className="text-sm text-[#7E7F7F] w-[13%]">Losses</p>
        <p className="text-sm text-[#7E7F7F] w-[13%]">W/L ratio</p>
        <p className="text-sm text-[#7E7F7F] w-[13%]">Points</p>
      </div>
      {userData.map((user) => (
        <div
          key={user.placement}
          className="flex items-center justify-between px-6 py-4 bg-[#1C1C1C] border-b border-[#2E2E2E]"
        >
          <p className="text-sm text-white w-[13%] flex items-center gap-3">
            <Image src={ArrowDownIcon} alt="" />
            {user.placement}
          </p>
          <p className="text-sm text-white w-[20%]">{user.Player}</p>
          <p className="text-sm text-white w-[13%]">{user["Games played"]}</p>
          <p className="text-sm text-white w-[13%]">{user.Wins}</p>
          <p className="text-sm text-white w-[13%]">{user.Losses}</p>
          <p className="text-sm text-white w-[13%]">{user["W/L ratio"]}</p>
          <p className="text-sm text-white w-[13%]">{user.Points}</p>
        </div>
      ))}
    </div>
  );
};

export default TournamentTable;
