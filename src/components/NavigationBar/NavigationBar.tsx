"use client";

import Logo from "@/components/Logo/Logo";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import MenuMobile from "../MenuMobile/MenuMobile";
import Link from "next/link";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import OpacityAnimation from "../Animations/OpacityAnimation";
import { useState } from "react";

const menuItems = ["Portfolio", "Principi", "Prodotti", "Chi siamo", "Contatto"];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OpacityAnimation addClass="">
      <nav className="w-full h-[60px] fixed left-0 top-0 px-4 lg:pl-14 lg:pr-24 z-50  flex lg:main-grid bg-customWhite lg:shadow-xl lg:shadow-slate-200">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <div className="w-52 h-10 relative">
              <Logo />
            </div>
          </Link>
          <div onClick={toggleMenu}>
            <HamburgerIcon addClass="text-red-600" />
          </div>
        </div>
        <div className="flex flex-row items-center col-span-2">
          <MenuDesktop menuItems={menuItems} />
        </div>
        <div
          className={`absolute top-[60px] left-0 w-full h-space bg-customWhite opacity-98 px-4 py-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <MenuMobile menuItems={menuItems} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </OpacityAnimation>
  );
}
