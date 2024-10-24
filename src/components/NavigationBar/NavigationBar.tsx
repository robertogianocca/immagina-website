"use client";

import Logo from "@/components/Logo/Logo";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import MenuMobile from "../MenuMobile/MenuMobile";
import Link from "next/link";
import OpacityAnimation from "../Animations/OpacityAnimation";
import { usePathname } from "next/navigation"; // Import useRouter to detect the current route
import { useState } from "react";

type NavigationBarProps = {
  logo: string;
  menuColor: string;
  bgColor: string;
};

const menuItems = ["Portfolio", "Principi", "Prodotti", "Chi siamo", "Contatto"];

export default function NavigationBar({ logo, menuColor, bgColor }: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OpacityAnimation addClass="">
      <nav
        className={`flex lg:main-grid w-full h-nav fixed left-0 top-0 px-4 lg:px-6 xl:pl-14 xl:pr-24 z-50 ${bgColor}`}
      >
        {/* ---------- LOGO CULTURA AZIENDA ---------- */}
        <div className="flex justify-between lg:justify-normal items-center w-full">
          <Link href="/">
            <Logo logo={logo} />
          </Link>
          <div onClick={toggleMenu}>
            <HamburgerIcon menuColor={menuColor} />
          </div>
          <div className="hidden lg:flex flex-row gap-8 lg:gap-3 lg:pl-6 xl:pl-8 justify-between font-courier font-bold text-base">
            {pathName === "/cultura" ? (
              <p className="text-customRed opacity-100 cursor-default">cultura</p>
            ) : (
              <Link href="/cultura">
                <p className="text-customRed opacity-40 hover:opacity-100 cursor-pointer">
                  cultura
                </p>
              </Link>
            )}

            {pathName === "/azienda" ? (
              <p className="text-customBlue cursor-default">busines</p>
            ) : (
              <Link href="/azienda">
                <p className="text-customBlue opacity-40 hover:opacity-100 cursor-pointer">
                  business
                </p>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center col-span-2">
          {/* ---------- MENU LIST ---------- */}
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
    </OpacityAnimation>
  );
}
