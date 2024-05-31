"use client";

import Logo from "@/components/Logo/Logo";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import OpacityAnimation from "../Animations/OpacityAnimation";

const menuItems = ["Portfolio", "About", "Contact"];

const NavigationBar = () => {
  return (
    <OpacityAnimation>
      <nav className="w-full h-[60px] fixed left-0 top-0 z-50 lg:pr-60 flex lg:main-grid bg-white md:pl-10 shadow-xl shadow-slate-200">
        <div className="flex w-full items-center justify-between">
          <div className="w-52 h-10 relative ml-6">
            <Logo />
          </div>
          <HamburgerIcon />
        </div>
        <div className="flex flex-row items-center">
          <MenuDesktop menuItems={menuItems} />
        </div>
      </nav>
    </OpacityAnimation>
  );
};

export default NavigationBar;
