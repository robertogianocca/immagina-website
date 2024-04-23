import Logo from "@/components/Logo/Logo";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";

const NavigationBar = () => {
  return (
    <nav className="w-full h-[60px] bg-white p-4 flex items-center justify-between">
      <Logo />
      <HamburgerIcon />
    </nav>
  );
};

export default NavigationBar;
