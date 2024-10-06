"use client";

import Logo from "@/components/Logo/Logo";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import MenuMobile from "../MenuMobile/MenuMobile";
import Link from "next/link";
import { useState } from "react";

type NavigationBarProps = {
  menuColor: string;
  bgColor: string;
};

const menuItems = ["Portfolio", "Principi", "Prodotti", "Chi siamo", "Contatto"];

export default function NavigationBar({ menuColor, bgColor }: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex lg:main-grid w-full h-nav fixed left-0 top-0 px-4 lg:pl-14 lg:pr-24 z-50 ${bgColor}`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Logo />
        </Link>
        <div onClick={toggleMenu}>
          <HamburgerIcon menuColor={menuColor} />
        </div>
      </div>
      <div className="flex flex-row items-center col-span-2">
        <MenuDesktop menuItems={menuItems} menuColor={menuColor} />
      </div>
      <div
        className={`absolute top-[60px] left-0 w-full h-space bg-customWhite opacity-98 px-4 py-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MenuMobile menuItems={menuItems} menuColor={menuColor} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}
