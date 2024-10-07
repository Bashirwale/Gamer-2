"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  BetIcon,
  LeaderIcon,
  CommunityIcon,
  VideoIcon,
  Token,
  GamepadIcon,
  LogoutIcon,
} from "../assets/icons";
import Link from "next/link";

const SideBar = () => {
  const sidebarMenu = [
    {
      id: 1,
      menuItem: "Tournaments",
      icon: GamepadIcon,
      link: "/",
    },
    {
      id: 2,
      menuItem: "Leaderboards",
      icon: LeaderIcon,
      link: "/leaders-board",
    },

    {
      id: 3,
      menuItem: "Token shop",
      icon: Token,
      link: "/token-shop",
    },

    {
      id: 4,
      menuItem: "Live betting",
      icon: BetIcon,
      link: "/live-betting",
    },
    {
      id: 5,
      menuItem: "Content locker",
      icon: VideoIcon,
      link: "/content-locker",
    },
    {
      id: 6,
      menuItem: " Community",
      icon: CommunityIcon,
      link: "/community",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="fixed top-[76px] left-0 bg-[#121212] p-6 border-r border-[#242424] w-[20%] h-screen ">
      <div className="flex flex-col justify-between h-[86%] ">
        <ul className="h-full flex flex-col gap-6">
          {sidebarMenu?.map((item) => (
            <Link key={item.id} href={item.link} className="">
              <li
                className={`${
                  pathname == item.link ? " text-white" : "text-[#7E7F7F]"
                } flex items-center gap-3 text-xs font-normal`}
              >
                <Image src={item.icon} alt="icons" />
                <span className="text-base">{item.menuItem}</span>
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-3 p-3 bg-[#5F0A07]">
          <Image src={LogoutIcon} alt="icons" />
          <span className="text-base text-white">LOG-OUT</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
