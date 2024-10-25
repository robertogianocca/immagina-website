import { FiMenu } from "react-icons/fi";

type HamburgerIconProps = {
  color: string;
};

const HamburgerIcon = ({ color }: HamburgerIconProps) => {
  return (
    <FiMenu
      strokeWidth="2.5px"
      size="40px"
      className={`lg:hidden p-0 m-0 ${color} hover:border-b-0`}
    />
  );
};

export default HamburgerIcon;
