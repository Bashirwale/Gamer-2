import React from "react";
import Image from "next/image";
import Trophy from "@/components/assets/images/Trophy - Gold.png";
import FixtureCard from "../fixture-card";
import {
  LeftDirection,
  LeftDir,
  RightDir,
  RightDirection,
} from "../assets/icons";

const TournamentBracket = () => {
  return (
    <div className="relative mt-5 mb-8 h-full">
      <div className="absolute top-0 left-0 flex flex-col gap-12 justify-between">
        <FixtureCard />
        <FixtureCard />
        <FixtureCard />
        <FixtureCard />
      </div>
      <Image
        src={LeftDirection}
        alt=""
        className="absolute top-[8px] left-[10.7%]"
      />
      <Image
        src={LeftDirection}
        alt=""
        className="absolute top-[168px] left-[10.7%]"
      />
      <div className="absolute top-[38px] left-[13%] flex flex-col gap-32 ">
        <FixtureCard />
        <FixtureCard />
      </div>
      <Image
        src={LeftDir}
        alt=""
        className="absolute top-[45px] left-[23.6%]"
      />
      <div className="absolute top-[120px] left-[26%] flex flex-col gap-32 ">
        <FixtureCard />
      </div>
      <div className="absolute left-[44.2%] top-[58px] flex flex-col items-center ">
        <h4 className="text-white text-xl font-semibold">Final</h4>
        <Image src={Trophy} alt="" />
      </div>
      <div className="absolute top-[120px] right-[26%] flex flex-col gap-32 ">
        <FixtureCard />
      </div>
      <Image
        src={RightDir}
        alt=""
        className="absolute top-[45px] right-[23.6%]"
      />
      <div className="absolute top-[38px] right-[13%] flex flex-col gap-32">
        <FixtureCard />
        <FixtureCard />
      </div>
      <Image
        src={RightDirection}
        alt=""
        className="absolute top-[8px] right-[10.7%]"
      />
      <Image
        src={RightDirection}
        alt=""
        className="absolute top-[168px] right-[10.7%]"
      />
      <div className="absolute top-0 right-0 flex flex-col gap-12 justify-between">
        <FixtureCard />
        <FixtureCard />
        <FixtureCard />
        <FixtureCard />
      </div>
    </div>
  );
};

export default TournamentBracket;
