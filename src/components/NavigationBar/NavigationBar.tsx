import Logo from "@/components/Logo/Logo";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";

const NavigationBar = () => {
  return (
    <nav className="w-full h-[60px] bg-white p-4 pl-10 flex items-center justify-between shadow-xl shadow-zinc-200">
      <Logo />
      <HamburgerIcon />
    </nav>
  );
};

export default NavigationBar;
