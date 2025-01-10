"use client";

import logoRed from "/public/images/logo/logo-immagina.svg";
import logoBlue from "/public/images/logo/logo-immagina-blue.svg";
import Logo from "@/components/Logo/Logo";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import MenuMobile from "../MenuMobile/MenuMobile";
import Link from "next/link";
import OpacityAnimation from "../Animations/OpacityAnimation";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavigationBarProps = {
  color: string;
  menuColor: string;
  bgColor: string;
};

const menuItems = ["Portfolio", "Team"];

export default function NavigationBar({ color, menuColor, bgColor }: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathName = usePathname();
  const pathChanged = pathName.split("/").slice(2);

  const isCulturaActive = pathName.includes("cultura");
  const isBusinessActive = pathName.includes("business");

  return (
    <OpacityAnimation delay={0.3}>
      <nav
        className={`flex lg:main-grid w-full h-nav fixed left-0 top-0 px-4 lg:px-6 xl:pl-14 xl:pr-24 z-50 ${bgColor}`}
      >
        {/* ---------- LOGO CULTURA AZIENDA ---------- */}
        <div className="flex justify-between lg:justify-normal items-center w-full gap-8 pt-2">
          <Link
            // href={`/cultura/${pathChanged.join("/")}`}
            href={`/cultura/${pathChanged.join("/")}`}
            className={isBusinessActive ? "opacity-25" : "opacity-100"}
          >
            <Logo logo={logoRed} />
            <p className="text-customRed opacity-100 cursor-default font-courier font-bold">
              cultura
            </p>
          </Link>
          {/* <Link
            href={`/business/${pathChanged.join("/")}`}
            className={isCulturaActive ? "opacity-25" : "opacity-100"}
          >
            <Logo logo={logoBlue} />
            <p className="text-customBlue opacity-100 cursor-default font-courier font-bold">
              business
            </p>
          </Link> */}
          {/* <div onClick={toggleMenu}>
            <HamburgerIcon color={color} />
          </div> */}
        </div>
        <div className="flex flex-row items-center col-span-2 justify-between">
          <div>
            <MenuDesktop menuItems={menuItems} menuColor={menuColor} />
          </div>
          <p className="text-xs pl-4 xl:pl-0 md:text-base font-bold text-customRed ">
            <a href="mailto:contact@immagina.ch">contact@immagina.ch</a>
          </p>
          {/* ---------- MENU LIST ---------- */}
        </div>
        {/* <div
          className={`absolute top-[60px] left-0 w-full h-space bg-customWhite opacity-98 px-4 py-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <MenuMobile menuItems={menuItems} menuColor={menuColor} toggleMenu={toggleMenu} />
        </div> */}
      </nav>
    </OpacityAnimation>
  );
}
