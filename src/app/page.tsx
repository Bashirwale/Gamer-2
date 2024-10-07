import Tournaments from "@/components/tournaments";
import Image from "next/image";
import { UserDarkIcon } from "@/components/assets/icons";
import Animation from "@/components/assets/images/VALORANT Fan Art, Rui-Rou Teo 1.png";
import Link from "next/link";
import HeaderCard from "@/components/header-card";

export default function Home() {
  return (
    <div className="w-[80%] py-4 px-12 h-full ml-[20%] mt-[76px]">
      <div className="bg-[#1C1C1C] p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-white font-semibold">
            Setup your profile
          </h2>
          <p className="text-sm text-[#7E7F7F] font-normal mb-4">
            Complete your information to get access to tournaments and other
            premium features
          </p>
          <Link
            href=""
            className=" bg-[#8BC72F] w-[40%] flex items-center gap-2 px-3 py-2"
          >
            <Image src={UserDarkIcon} alt="" />
            <span className=" text-base text-[#0A0A0A] whitespace-nowrap font-semibold">
              Complete profile
            </span>
          </Link>
        </div>
        <Image src={Animation} alt="" width={154} height={154} />
      </div>
      <div className="flex items-center gap-5 mt-5">
        <HeaderCard
          title="Continue playing"
          description="Start or esume tournaments you have registered for"
          btnText="Continue playing"
        />
        <HeaderCard
          title="Quick match"
          description="Create a tournament and invite friends to play"
          btnText="Let's go"
        />
      </div>
      <Tournaments />
    </div>
  );
}
