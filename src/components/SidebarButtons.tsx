import React from "react";
import { CgProfile } from "react-icons/cg";
import { VscChecklist } from "react-icons/vsc";
import { MdExplore } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const SidebarButtons = [
  {
    name: "upcoming",
    icon: <AiOutlineClockCircle />,
    link: "Upcoming",
  },
  {
    name: "Watchlist",
    icon: <VscChecklist />,
    link: "Watchlist",
  },
  {
    name: "Explore",
    icon: <MdExplore />,
    link: "Explore",
  },
  {
    name: "MyShows",
    icon: <CgProfile />,
    link: "MyShows",
  },
];

export default SidebarButtons;
