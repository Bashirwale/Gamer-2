import Image from "next/image";
import { SortIcon, Filtericon, ArrDownIcon } from "@/components/assets/icons";
import TournamentCard from "../tournament-card";

const Tournaments = () => {
  const arr = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="w-full my-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-white font-semibold">Tournaments</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4 bg-[#1C1C1C] px-3 py-2">
            <Image src={SortIcon} alt="" />
            <span className="text-xs text-[#E5E4E4] ">sort by</span>
            <Image src={ArrDownIcon} alt="" />
          </div>
          <div className="flex items-center gap-4 bg-[#1C1C1C] px-3 py-2">
            <Image src={Filtericon} alt="" />
            <span>filter</span>
            <Image src={ArrDownIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {arr.map((item) => (
          <TournamentCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
